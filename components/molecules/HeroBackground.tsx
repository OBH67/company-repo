import React from 'react';

type Props = { children?: React.ReactNode };

export default function HeroBackground({ children }: Props) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-blob rounded-full bg-blue-600 opacity-20 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 animate-blob rounded-full bg-blue-800 opacity-20 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-4000 absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform animate-blob rounded-full bg-blue-700 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      </div>
      {children}
    </>
  );
}
