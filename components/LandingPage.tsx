import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Snowflakes } from './Snowflakes';

interface LandingPageProps {
  onNavigate: (page: 'pricing' | 'login') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Snowflakes />
      
      {/* CHRISTMAS BANNER */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 py-2 text-center z-50">
        <p className="text-sm">🎅 MERRY CHRISTMAS! HAPPY HOLIDAYS! 🎄 SPECIAL FESTIVE EDITION! ❄️</p>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" className="drop-shadow-2xl" />
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl mb-6 tracking-tight">
            Axira Optimizer <span className="inline-block">❄️</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Ultimate Game Optimization Suite 🎄
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Maximize your FPS and minimize input lag across 8 popular games with 98 unique optimization tweaks. Professional-grade performance tuning at your fingertips.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate('login')}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-2 group text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-10 py-4 bg-white/5 border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                98
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-widest">
                Unique Tweaks
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                8
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-widest">
                Games Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-widest">
                Safe &{'&'} Transparent
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
