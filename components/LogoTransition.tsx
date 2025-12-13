import { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LogoTransitionProps {
  onComplete: () => void;
}

export function LogoTransition({ onComplete }: LogoTransitionProps) {
  const [stage, setStage] = useState<'zoom' | 'fade'>('zoom');

  useEffect(() => {
    // Start zoom animation immediately
    const zoomTimer = setTimeout(() => {
      setStage('fade');
    }, 1200); // Zoom for 1.2 seconds

    // Complete transition after fade
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000); // Total 2 seconds

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-800 ${
        stage === 'fade' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo with clean zoom animation */}
      <div
        className={`relative transform transition-all duration-1200 ease-in ${
          stage === 'zoom' ? 'scale-100' : 'scale-[25]'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Logo */}
        <Logo size="xl" className="relative drop-shadow-[0_0_50px_rgba(0,150,255,0.6)]" />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
      </div>
    </div>
  );
}
