'use client';

import { useState, useEffect } from 'react';
import { HeroBackground, HeroHeader, HeroStats, HeroVisual, ScrollIndicator } from '../molecules';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-950 pt-20 lg:pt-0"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 py-6 md:py-12 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <HeroHeader isVisible={isVisible} />
            <HeroStats isVisible={isVisible} />
          </div>

          <HeroVisual isVisible={isVisible} />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
