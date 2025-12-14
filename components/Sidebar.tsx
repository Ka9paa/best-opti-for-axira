import React from 'react';
import { 
  Home, 
  Database, 
  Wrench, 
  Cpu, 
  Network, 
  Trash2, 
  Gamepad2, 
  Settings,
  Sparkles,
  Crown,
  ChevronDown,
  Zap
} from 'lucide-react';
import { Logo } from './Logo';
import { UserProfileDropdown } from './UserProfileDropdown';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onAIAssistant: () => void;
  onApplyOptimizations: () => void;
  onSmartSystemDetection: () => void;
  onLogout: () => void;
  username: string;
  packageTier: string;
}

export function Sidebar({ activeSection, onSectionChange, onAIAssistant, onApplyOptimizations, onSmartSystemDetection, onLogout, username, packageTier }: SidebarProps) {
  const isPremium = packageTier === 'ELITE' || packageTier === 'FOUNDATION';

  const generalSections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'backups', label: 'Backups', icon: Database },
    { id: 'fixes', label: 'Fixes', icon: Wrench }
  ];

  const mainSections = [
    { id: 'general', label: 'General', icon: Settings, premium: false },
    { id: 'hardware', label: 'Hardware', icon: Cpu, premium: false },
    { id: 'network', label: 'Network', icon: Network, premium: false },
    { id: 'debloat', label: 'Debloat', icon: Trash2, premium: false },
    { id: 'gamemode', label: 'Axira Game Mode', icon: Gamepad2, premium: true },
    { id: 'advanced', label: 'Advanced', icon: Sparkles, premium: true }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Logo size="md" />
          <span className="text-xl">TWEAKS</span>
        </div>
      </div>

      {/* AI Assistant */}
      <button
        onClick={onAIAssistant}
        className="mx-4 mt-6 mb-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/30"
      >
        <Sparkles className="w-5 h-5" />
        <span>AI Assistant</span>
      </button>

      {/* Apply Optimizations */}
      <button
        onClick={onApplyOptimizations}
        className="mx-4 mb-4 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/30"
      >
        <Zap className="w-5 h-5" />
        <span>Apply Optimizations</span>
      </button>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* General Section */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3">General</div>
          <div className="space-y-1">
            {generalSections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full px-3 py-2 rounded-lg flex items-center gap-3 transition-all ${
                  activeSection === section.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="text-sm">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Section */}
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3">Main</div>
          <div className="space-y-1">
            {mainSections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                disabled={section.premium && !isPremium}
                className={`w-full px-3 py-2 rounded-lg flex items-center gap-3 transition-all ${
                  activeSection === section.id
                    ? 'bg-gray-800 text-white'
                    : section.premium && !isPremium
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="text-sm flex-1 text-left">{section.label}</span>
                {section.premium && (
                  <Sparkles className={`w-3 h-3 ${isPremium ? 'text-cyan-400' : 'text-gray-600'}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <UserProfileDropdown
          username={username}
          email={`${username}@gmail.com`}
          packageTier={packageTier}
          onSmartSystemDetection={onSmartSystemDetection}
          onLogout={onLogout}
        />
      </div>
    </div>
  );
}
