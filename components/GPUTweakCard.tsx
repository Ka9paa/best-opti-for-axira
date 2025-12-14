import { Sparkles, AlertTriangle, Crown } from 'lucide-react';

interface GPUTweakCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  warningLevel: 'none' | 'warning';
  premiumTier: 'none' | 'CHECKUP' | 'FOUNDATION' | 'ELITE';
  enabled: boolean;
  onToggle: (id: string) => void;
  userTier: string;
}

export function GPUTweakCard({ 
  id, 
  title, 
  description, 
  icon,
  warningLevel, 
  premiumTier, 
  enabled, 
  onToggle,
  userTier
}: GPUTweakCardProps) {
  // Check if user has access to this tweak
  const isLocked = () => {
    if (premiumTier === 'none') return false;
    if (premiumTier === 'CHECKUP') return false; // Everyone has access
    if (premiumTier === 'FOUNDATION') return userTier === 'CHECKUP'; // Only CHECKUP users locked out
    if (premiumTier === 'ELITE') return userTier !== 'ELITE'; // Only ELITE users have access
    return false;
  };

  const locked = isLocked();

  // Get badge color based on tier
  const getBadgeStyle = () => {
    if (premiumTier === 'CHECKUP') {
      return {
        bg: 'bg-gray-500/20',
        border: 'border-gray-500/50',
        text: 'text-gray-400',
        label: 'Checkup'
      };
    }
    if (premiumTier === 'FOUNDATION') {
      return {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        label: 'Foundation'
      };
    }
    if (premiumTier === 'ELITE') {
      return {
        bg: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20',
        border: 'border-yellow-500/50',
        text: 'text-yellow-400',
        label: 'Elite'
      };
    }
    return null;
  };

  const badgeStyle = getBadgeStyle();

  return (
    <div className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border rounded-2xl p-6 transition-all ${
      locked 
        ? 'border-gray-700/30 opacity-60' 
        : 'border-gray-700/50 hover:border-blue-500/30'
    }`}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg mb-1">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Warning Level */}
        <div className="flex items-center gap-2">
          {warningLevel === 'warning' ? (
            <>
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">1 Warning</span>
            </>
          ) : (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
              <span className="text-sm text-gray-500">No Warnings</span>
            </>
          )}
        </div>

        {/* Toggle or Premium Badge */}
        {premiumTier !== 'none' && locked ? (
          <div className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs text-purple-400">Premium</span>
          </div>
        ) : premiumTier !== 'none' && badgeStyle ? (
          <div className={`px-3 py-1.5 ${badgeStyle.bg} border ${badgeStyle.border} rounded-lg flex items-center gap-1.5`}>
            <Crown className={`w-3.5 h-3.5 ${badgeStyle.text}`} />
            <span className={`text-xs ${badgeStyle.text}`}>{badgeStyle.label}</span>
          </div>
        ) : (
          <button
            onClick={() => onToggle(id)}
            disabled={locked}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              enabled 
                ? 'bg-cyan-600' 
                : 'bg-gray-700'
            } ${locked ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
