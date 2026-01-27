import React from 'react';

type Props = { children: React.ReactNode };

export default function GradientPanel({ children }: Props) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
        {children}
      </div>
    </div>
  );
}
