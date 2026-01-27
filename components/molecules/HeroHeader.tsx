import React from 'react';

type Props = { isVisible?: boolean };

export default function HeroHeader({ isVisible = false }: Props) {
  return (
    <div
      className={`space-y-8 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
        Mejoramos la{' '}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          imagen digital
        </span>{' '}
        de tu negocio
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
        Transformamos tu presencia digital con soluciones modernas, claras y efectivas. Cre amos
        experiencias que conectan con tu audiencia y elevan tu marca al siguiente nivel.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#servicios"
          className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/50"
        >
          Nuestros Servicios
        </a>
        <a
          href="#nosotros"
          className="inline-block rounded-lg border-2 border-gray-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-blue-500/10"
        >
          Conocer Más
        </a>
      </div>
    </div>
  );
}
