import React from 'react';

type Props = { children: React.ReactNode };

export default function GradientPanel({ children }: Props) {
  return (
    <div className="relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 p-3 sm:p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}
