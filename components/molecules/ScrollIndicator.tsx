import React from 'react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
      <div className="animate-bounce">
        <svg
          className="h-6 w-6 text-gray-400"
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
  );
}
