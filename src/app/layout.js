import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JN Hosting - Advanced Hosting Solutions",
  description: "JOD.GG & NotoHost.eu - We use advanced software and hardware for hosting solutions. Professional web hosting, game hosting, and custom development services.",
  keywords: "JN Hosting, JOD.GG, NotoHost.eu, hosting, web hosting, game hosting, virtualizor, plesk, pterodactyl",
  authors: [{ name: "JN Hosting" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://jnhost.net'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jnhost.net',
    title: 'JN Hosting - Advanced Hosting Solutions',
    description: 'Professional web hosting, game hosting, and custom development services.',
    siteName: 'JN Hosting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JN Hosting - Advanced Hosting Solutions',
    description: 'Professional web hosting, game hosting, and custom development services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
