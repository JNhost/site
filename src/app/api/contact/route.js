import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as Yup from 'yup';
import sanitizeHtml from 'sanitize-html';

const contactSchema = Yup.object().shape({
    name: Yup.string().max(60, 'Name must be at most 60 characters long').required('Name is required'),
    email: Yup.string().email('Invalid email').max(50, 'Email must be at most 50 characters long').required('Email is required'),
    message: Yup.string().max(655, 'Message must be at most 655 characters long').required('Message is required'),
    turnstileToken: Yup.string().required('Turnstile validation is required')
});export async function POST(req) {
    try {
        const { name, email, message, turnstileToken } = await req.json();

        // Validate request body
        await contactSchema.validate({ name, email, message, turnstileToken }, { abortEarly: false });

        // Verify Cloudflare Turnstile
        const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken
            })
        });

        const turnstileData = await turnstileResponse.json();
        
        // Enhanced debug logging for both development and production
        console.log('Turnstile Debug:', {
            nodeEnv: process.env.NODE_ENV,
            secretKeyExists: !!process.env.TURNSTILE_SECRET_KEY,
            secretKeyPrefix: process.env.TURNSTILE_SECRET_KEY?.slice(0, 10),
            tokenReceived: !!turnstileToken,
            tokenPrefix: turnstileToken?.slice(0, 20),
            turnstileSuccess: turnstileData.success,
            turnstileErrors: turnstileData['error-codes'],
            hostname: req.headers.get('host'),
            origin: req.headers.get('origin'),
            userAgent: req.headers.get('user-agent')?.slice(0, 50),
            fullResponse: turnstileData
        });
        
        if (!turnstileData.success) {
            return new NextResponse(JSON.stringify({ 
                status: 'error', 
                message: 'Captcha failed',
                debug: {
                    errors: turnstileData['error-codes'],
                    hostname: req.headers.get('host')
                }
            }), { status: 400 });
        }

    // Sanitize inputs to prevent injection
    const sanitized_name = sanitizeHtml(name);
    const sanitized_email = sanitizeHtml(email);
    const sanitized_message = sanitizeHtml(message);

    // Get IP address
    const ip = (req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

    // Log the submission
    console.log('Contact form submission:', {
      name: sanitized_name,
      email: sanitized_email,
      ip,
      timestamp: new Date().toISOString()
    });

    // If email credentials are configured, send email
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      const mailOptions = {
        from: `"JN Hosting Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || 'info@jnhost.net',
        subject: 'New Contact Form Submission - JN Hosting',
        text: `Message from ${sanitized_name} (${sanitized_email} - IP: ${ip}): ${sanitized_message}`,
        html: `
          <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <h2 style="color: #22c55e;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${sanitized_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitized_email}">${sanitized_email}</a></p>
            <p><strong>IP Address:</strong> ${ip}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p style="border-left: 3px solid #22c55e; margin-left: 10px; padding-left: 15px;">
              ${sanitized_message.replace(/\n/g, '<br>')}
            </p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <footer style="margin-top: 20px; color: #666; font-size: 14px;">
              <p>JN Hosting - ${new Date().toLocaleString()}</p>
            </footer>
          </div>`
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({
      status: 'success',
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json(
        { status: 'error', message: error.errors[0] || 'Validation failed' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { status: 'error', message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
