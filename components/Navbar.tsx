import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'pricing' | 'login' | 'dashboard') => void;
  onScrollToSection?: (section: string) => void;
  isLoggedIn?: boolean;
}

export function Navbar({ onNavigate, onScrollToSection, isLoggedIn }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
              <Logo size="md" className="relative z-10 !w-8 !h-8" />
            </div>
            <span className="text-white text-lg tracking-tight">Axira Optimizer</span>
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleScrollTo('games')}
              className="text-gray-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider hover:scale-105"
            >
              Games
            </button>
            <button
              onClick={() => handleScrollTo('how-it-works')}
              className="text-gray-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider hover:scale-105"
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-gray-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider hover:scale-105"
            >
              Pricing
            </button>
            <button
              onClick={() => handleScrollTo('features')}
              className="text-gray-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider hover:scale-105"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollTo('cta')}
              className="text-gray-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-5 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 text-xs uppercase tracking-wider"
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-1.5 text-gray-300 hover:text-white transition-all duration-300 text-xs uppercase tracking-wider border border-white/10 rounded-full hover:border-white/30"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 text-xs uppercase tracking-wider"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1.5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 space-y-2">
            <button
              onClick={() => {
                handleScrollTo('games');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors py-1.5 text-xs uppercase tracking-wider"
            >
              Games
            </button>
            <button
              onClick={() => {
                handleScrollTo('how-it-works');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors py-1.5 text-xs uppercase tracking-wider"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                onNavigate('pricing');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors py-1.5 text-xs uppercase tracking-wider"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                handleScrollTo('features');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors py-1.5 text-xs uppercase tracking-wider"
            >
              Features
            </button>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  onNavigate('dashboard');
                  setMobileMenuOpen(false);
                }}
                className="block w-full px-5 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all text-xs uppercase tracking-wider"
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  onNavigate('login');
                  setMobileMenuOpen(false);
                }}
                className="block w-full px-5 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all text-xs uppercase tracking-wider"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
