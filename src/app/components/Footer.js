import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://www.jnhost.net/assets/img/Untitled%20design.png?h=978967b43329c42b726f450436110c3d"
                alt="JN Hosting Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                JN Hosting
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Yea, we&apos;re quite private.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Web design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#team" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://web.jnhost.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Web Panel
                </a>
              </li>
              <li>
                <a href="https://panel.jnhost.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Game Panel
                </a>
              </li>
              <li>
                <a href="https://jnshort.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  URL Shortner
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2022-{new Date().getFullYear()} JN Hosting | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
