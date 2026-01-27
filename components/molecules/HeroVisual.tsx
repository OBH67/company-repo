import React from 'react';
import RobotIlustrator from '../atoms/RobotIlustrator';
import FloatingCard from './FloatingCard';

type Props = { isVisible?: boolean };

export default function HeroVisual({ isVisible = false }: Props) {
  return (
    <div
      className={`relative transition-all delay-300 duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
    >
      <div className="relative mx-auto aspect-square w-full max-w-lg">
        <FloatingCard className="right-0 top-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                className="h-6 w-6 text-white"
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
              <p className="text-sm font-medium text-white">Chat IA</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="animation-delay-2000 bottom-20 left-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                className="h-6 w-6 text-white"
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
              <p className="text-sm font-medium text-white">Automatización</p>
              <p className="text-xs text-gray-400">Activa</p>
            </div>
          </div>
        </FloatingCard>

        <RobotIlustrator />
        <div className="absolute inset-0 -z-10 rounded-full bg-blue-600/10 blur-3xl filter"></div>
      </div>
    </div>
  );
}
