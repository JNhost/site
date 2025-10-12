"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Interactive Light Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-green-500/20 via-emerald-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-6xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 text-sm font-medium text-green-400 hover:bg-green-500/20 transition-all duration-300 shadow-lg shadow-green-500/10">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            JOD.GG &amp; NotoHost.eu
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4">
            <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Welcome to
            </span>
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent pb-2">
              JN Hosting
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            Advanced software and hardware solutions for your hosting needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12 px-4">
            We use <span className="text-green-400 font-bold">advanced</span> software and hardware.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a href="https://r.jod.gg/sGKpH" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/20">
                <span className="text-gray-400 group-hover:text-white text-xl font-semibold">Hetzner</span>
              </div>
            </a>
            <a href="https://r.jod.gg/qKZLj" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/20">
                <span className="text-gray-400 group-hover:text-white text-xl font-semibold">Virtualizor</span>
              </div>
            </a>
            <a href="https://r.jod.gg/WcJip" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/20">
                <span className="text-gray-400 group-hover:text-white text-xl font-semibold">Plesk</span>
              </div>
            </a>
            <a href="https://r.jod.gg/WeKvJ" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/20">
                <span className="text-gray-400 group-hover:text-white text-xl font-semibold">Pterodactyl</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <p className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Our Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">What we provide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Web Hosting */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Web Hosting</h3>
              <p className="text-gray-400 mb-4">For our services and private clients.</p>
              <button className="px-6 py-2 rounded-lg bg-white/5 text-gray-400 cursor-not-allowed" disabled>
                Learn more
              </button>
            </div>

            {/* Game Hosting */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.5 2a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5.001 5.001 0 0 1 8.5 2zm-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Game Hosting</h3>
              <p className="text-gray-400 mb-4">For our <a href="https://r.jnetmc.com/links" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Minecraft Network</a> and private clients.</p>
              <button className="px-6 py-2 rounded-lg bg-white/5 text-gray-400 cursor-not-allowed" disabled>
                Learn more
              </button>
            </div>

            {/* Discord Bot Hosting */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Discord Bot Hosting</h3>
              <p className="text-gray-400 mb-4">For our services and private clients.</p>
              <button className="px-6 py-2 rounded-lg bg-white/5 text-gray-400 cursor-not-allowed" disabled>
                Learn more
              </button>
            </div>

            {/* URL Shortner */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">URL Shortner</h3>
              <p className="text-gray-400 mb-4">A Public URL Shortner with Redirection Tools, Powerful Statistics, Beautiful Profiles, QR Code Generator and a Powerful Dashboard.</p>
              <a
                href="https://jnshort.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all duration-300"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <p className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Meet the team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {/* JOD.GG */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20 text-center">
              <p className="text-blue-400 font-semibold mb-2">JOD.GG</p>
              <h3 className="text-2xl font-bold text-white mb-6">Known as Joddy</h3>
              <a
                href="https://r.jod.gg/joddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all duration-300 font-medium"
              >
                Visit Profile
              </a>
            </div>

            {/* NotoHost.eu */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/20 text-center">
              <p className="text-purple-400 font-semibold mb-2">NotoHost.eu</p>
              <h3 className="text-2xl font-bold text-white mb-6">Known as Notobia</h3>
              <a
                href="https://r.notohost.eu/notobia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-300 font-medium"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <p className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Contacts</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">How you can reach us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:info@jnhost.net" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    info@jnhost.net
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Zm3 .35v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email (Support)</h3>
                  <a href="mailto:support@jnhost.net" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    support@jnhost.net
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Placeholder */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-center text-gray-400">
                Contact form available on the <Link href="/contact" className="text-green-400 hover:underline">Contact page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
