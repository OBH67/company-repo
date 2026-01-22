'use client';

import { useState, useEffect } from 'react';
import RobotIlustrator from './RobotIlustrator';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-6 md:py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Mejoramos la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                imagen digital
              </span>{' '}
              de tu negocio
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transformamos tu presencia digital con soluciones modernas, claras y efectivas. 
              Creamos experiencias que conectan con tu audiencia y elevan tu marca al siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                Nuestros Servicios
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500/10">
                Conocer Más
              </button>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Rápido</p>
                  <p className="text-gray-400 text-sm">Soluciones ágiles</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Efectivo</p>
                  <p className="text-gray-400 text-sm">Resultados reales</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">24/7</p>
                  <p className="text-gray-400 text-sm">Siempre activo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating UI Elements */}
              <div className="absolute top-10 right-0 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Chat IA</p>
                    <p className="text-gray-400 text-xs">En línea</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Automatización</p>
                    <p className="text-gray-400 text-xs">Activa</p>
                  </div>
                </div>
              </div>

              {/* Robot Illustration */}
              <RobotIlustrator />
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
