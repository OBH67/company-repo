import React from 'react';

type Props = { children: React.ReactNode; className?: string };

export default function FloatingCard({ children, className = '' }: Props) {
  return (
    <div
      className={`absolute ${className} animate-float rounded-xl border border-blue-500/30 bg-blue-600/20 p-4 backdrop-blur-sm`}
    >
      {children}
    </div>
  );
}
