import React, { ReactNode } from 'react';
import { Wrench } from 'lucide-react';

interface FixCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  warningLevel?: 'low' | 'medium' | 'high';
  isPremium?: boolean;
  hasConfig?: boolean;
  enabled: boolean;
  onToggle: (id: string) => void;
  onConfigure?: (id: string) => void;
  userTier: string;
}

export function FixCard({ 
  id, 
  title, 
  description, 
  icon,
  warningLevel,
  isPremium = false,
  hasConfig = false,
  enabled,
  onToggle,
  onConfigure,
  userTier
}: FixCardProps) {
  const isLocked = isPremium && userTier !== 'ELITE' && userTier !== 'FOUNDATION';

  const handleFix = () => {
    if (isLocked) return;
    onToggle(id);
  };

  return (
    <div className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border rounded-2xl p-6 transition-all ${
      isLocked 
        ? 'border-gray-700/30 opacity-60' 
        : 'border-gray-700/50 hover:border-blue-500/30'
    }`}>
      <h3 className="text-lg mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px]">{description}</p>
      
      <button
        onClick={handleFix}
        disabled={isLocked}
        className={`w-full px-4 py-2.5 border rounded-lg flex items-center justify-center gap-2 transition-all group ${
          isLocked
            ? 'bg-gray-800/50 border-gray-700/50 cursor-not-allowed'
            : 'bg-gray-800 hover:bg-gray-700 border-gray-700'
        }`}
      >
        <Wrench className={`w-4 h-4 transition-colors ${
          isLocked 
            ? 'text-gray-600' 
            : 'text-gray-400 group-hover:text-cyan-400'
        }`} />
        <span className={`text-sm transition-colors ${
          isLocked
            ? 'text-gray-600'
            : 'text-gray-300 group-hover:text-white'
        }`}>
          Fix now
        </span>
      </button>
    </div>
  );
}
