# JN Hosting Website

Modern Next.js website for JN Hosting with advanced animations, glassmorphism effects, and Cloudflare Turnstile protection.

## Features

- ⚡ Next.js 15.5.4 with Turbopack
- 🎨 Tailwind CSS 4 with custom animations
- 📱 Fully responsive mobile-first design
- 🎭 Glassmorphism UI effects
- 📧 Functional contact form with backend
- 🔒 Form validation and sanitization
- 🛡️ Cloudflare Turnstile spam protection
- 🌊 Smooth animations and transitions
- 🚀 Standalone production build support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Cloudflare Turnstile account (for contact form)

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Configure your Turnstile keys in .env.local

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the site.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (includes standalone build)
- `npm run build:standalone` - Copy static assets for standalone deployment
- `npm start` - Start Next.js production server
- `npm run start:prod` - Start standalone production server on port 3001
- `npm run clean` - Clean build artifacts
- `npm run lint` - Run ESLint with auto-fix

## Configuration

### Cloudflare Turnstile Setup

See [TURNSTILE_SETUP.md](./TURNSTILE_SETUP.md) for detailed instructions on setting up Turnstile spam protection.

### Contact Form Setup

See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for detailed instructions on setting up the email functionality.

## Production Deployment

The project is configured for standalone deployment:

```bash
# Build for production
npm run build

# Start standalone server
npm run start:prod
```

The standalone build includes all necessary files in `.next/standalone/` for deployment.

## 🔒 Security Features

- 🛡️ **HTTP Security Headers** - HSTS, X-Frame-Options, CSP, etc.
- 🤖 **Cloudflare Turnstile** - Spam protection without annoying CAPTCHAs
- ✅ **Input Validation** - Yup schema validation on all forms
- 🧹 **Sanitization** - HTML sanitization to prevent XSS attacks
- 🚦 **Rate Limiting** - API route protection (10 req/min per IP)
- 🔐 **Environment Variables** - Secure credential management
- 📝 **IP Logging** - Track form submissions for security
- 🔍 **No Console Logs** - Production builds remove all console statements

See [SECURITY.md](./SECURITY.md) for detailed security information.

## 📱 Mobile Optimization

- ✅ Responsive design mobile-first approach
- ✅ Touch-friendly interactive elements
- ✅ Optimized font sizes across all breakpoints
- ✅ Adaptive spacing and padding
- ✅ Mobile-optimized animations

## 🎯 Performance Features

- ⚡ Next.js 15.5.4 with Turbopack
- 🖼️ Automatic image optimization (WebP, AVIF)
- 📦 Code splitting and lazy loading
- 🗜️ Gzip compression enabled
- 💾 Static asset caching (1 year)
- 🎨 CSS optimization with Tailwind

## 📊 Security Audit

```bash
npm audit
# Result: 0 vulnerabilities found ✅
```

## Project Structure
