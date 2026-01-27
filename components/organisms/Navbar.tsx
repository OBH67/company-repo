'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-blue-500/20 bg-black/80 shadow-lg shadow-blue-500/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with neon effect */}
          <div className="group flex cursor-pointer items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 transition-all duration-300 group-hover:shadow-blue-400/70">
                <span className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                  FBT
                </span>
              </div>
            </div>
            <div className="ml-3">
              <span className="block text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Frank Brother's
              </span>
              <span className="block text-xs text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                Tecnologies
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center space-x-1 lg:flex">
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#servicios', label: 'Servicios' },
              { href: '#nosotros', label: 'Nosotros' },
              { href: '#portafolio', label: 'Portafolio' },
              { href: '#contacto', label: 'Contacto' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 font-medium text-gray-300 transition-all duration-300"
              >
                <span className="relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0)] transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                  {link.label}
                </span>
                <div className="absolute inset-0 rounded-lg bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/10"></div>
                <div className="group-hover:left-1/8 absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:w-3/4"></div>
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button with neon effect */}
            <button className="group relative hidden overflow-hidden rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 sm:block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-500"></div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-blue-500 blur-xl"></div>
              </div>
              <a
                href="#contacto"
                className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                Contáctanos
              </a>
              <div className="absolute inset-0 rounded-lg border-2 border-cyan-400/0 transition-all duration-300 group-hover:border-cyan-400/50"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="group relative flex h-10 w-10 items-center justify-center text-white focus:outline-none lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative flex h-5 w-6 flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                    isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto space-y-2 px-6 pb-6">
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#servicios', label: 'Servicios' },
            { href: '#nosotros', label: 'Nosotros' },
            { href: '#portafolio', label: 'Portafolio' },
            { href: '#contacto', label: 'Contacto' },
          ].map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-lg border border-transparent px-4 py-3 font-medium text-gray-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              <span className="drop-shadow-[0_0_8px_rgba(59,130,246,0)] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                {link.label}
              </span>
            </a>
          ))}
          <button className="group relative mt-4 w-full overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-500"></div>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-blue-500 blur-xl"></div>
            </div>
            <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Contáctanos
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
