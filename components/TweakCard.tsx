import { AlertTriangle, CheckCircle, Sparkles, Settings as SettingsIcon } from 'lucide-react';
import { useState } from 'react';

interface TweakCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  warningLevel: 'none' | 'warning' | 'critical';
  isPremium?: boolean;
  hasConfig?: boolean;
  enabled: boolean;
  onToggle: (id: string) => void;
  onConfigure?: (id: string) => void;
  userTier: string;
}

export function TweakCard({
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
}: TweakCardProps) {
  const canUse = !isPremium || userTier === 'ELITE' || userTier === 'FOUNDATION';

  return (
    <div className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border rounded-2xl p-6 transition-all ${
      canUse 
        ? 'border-gray-700/50 hover:border-blue-500/30'
        : 'border-gray-800/50 opacity-50'
    }`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white">{title}</h3>
            {isPremium && (
              <div className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span className="text-xs text-cyan-400">Premium</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Warning Status */}
        <div className="flex items-center gap-2">
          {warningLevel === 'none' ? (
            <>
              <CheckCircle className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-500">No Warnings</span>
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="text-xs text-orange-400">1 Warning</span>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {hasConfig ? (
            <button
              onClick={() => onConfigure?.(id)}
              disabled={!canUse}
              className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                canUse
                  ? 'border-gray-600 hover:border-blue-500/50 text-gray-300 hover:text-white'
                  : 'border-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-2">
                <SettingsIcon className="w-4 h-4" />
                Configure
              </div>
            </button>
          ) : (
            <button
              onClick={() => canUse && onToggle(id)}
              disabled={!canUse}
              className={`relative w-12 h-6 rounded-full transition-all ${
                enabled && canUse
                  ? 'bg-blue-600'
                  : 'bg-gray-700'
              } ${!canUse ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  enabled && canUse ? 'translate-x-6' : ''
                }`}
              ></div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
