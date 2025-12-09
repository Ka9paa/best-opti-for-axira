import { X, Cpu, Monitor, HardDrive, Circle, Zap, TrendingUp } from 'lucide-react';
import { SystemSpecs, SystemSpecsService } from '../services/system-specs.service';

interface SystemSpecsModalProps {
  specs: SystemSpecs | null;
  onClose: () => void;
  showWelcome?: boolean;
}

export function SystemSpecsModal({ specs, onClose, showWelcome = false }: SystemSpecsModalProps) {
  if (!specs) return null;
  
  const tier = SystemSpecsService.getSystemTier(specs);
  const performanceScore = SystemSpecsService.getPerformanceScore(specs);

  const getTierColor = () => {
    if (tier === 'high-end') return 'from-purple-500 to-pink-500';
    if (tier === 'medium') return 'from-blue-500 to-cyan-500';
    return 'from-orange-500 to-red-500';
  };

  const getTierEmoji = () => {
    if (tier === 'high-end') return '🚀';
    if (tier === 'medium') return '⚡';
    return '💻';
  };

  const getTierLabel = () => {
    if (tier === 'high-end') return 'HIGH-END GAMING RIG';
    if (tier === 'medium') return 'MEDIUM PERFORMANCE PC';
    return 'LOW-END / BUDGET PC';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-white text-2xl mb-1">System Specifications</h2>
            <p className="text-gray-400 text-sm">Your hardware detected by OPTIAXIRA</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Performance Score */}
        <div className="p-6">
          <div className={`bg-gradient-to-r ${getTierColor()} p-6 rounded-xl mb-6`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-white/80 text-sm mb-1">System Tier</div>
                <div className="text-white text-3xl">{getTierEmoji()} {getTierLabel()}</div>
              </div>
              <div className="text-right">
                <div className="text-white/80 text-sm mb-1">Performance Score</div>
                <div className="text-white text-5xl">{performanceScore}</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${performanceScore}%` }}
              ></div>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* CPU */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/20 border border-blue-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-blue-400 text-sm mb-1">Processor</div>
                  <div className="text-white mb-2 break-words">{specs.cpu}</div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-gray-400">Cores: <span className="text-white">{specs.cores}</span></span>
                    <span className="text-gray-400">Threads: <span className="text-white">{specs.threads}</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* GPU */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/20 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-purple-400 text-sm mb-1">Graphics Card</div>
                  <div className="text-white break-words">{specs.gpu}</div>
                </div>
              </div>
            </div>

            {/* RAM */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-900/20 border border-green-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-green-400 text-sm mb-1">Memory (RAM)</div>
                  <div className="text-white text-xl">{specs.ram}</div>
                </div>
              </div>
            </div>

            {/* Display */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/20 border border-cyan-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-cyan-400 text-sm mb-1">Display Resolution</div>
                  <div className="text-white text-xl">{specs.screen}</div>
                </div>
              </div>
            </div>

            {/* OS */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-900/20 border border-orange-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Circle className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-orange-400 text-sm mb-1">Operating System</div>
                  <div className="text-white">{specs.os}</div>
                  <div className="text-gray-400 text-xs mt-1">{specs.platform}</div>
                </div>
              </div>
            </div>

            {/* Browser */}
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-900/20 border border-pink-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-pink-400 text-sm mb-1">Browser</div>
                  <div className="text-white">{specs.browser}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className={`bg-gradient-to-r ${getTierColor()} bg-opacity-10 border ${tier === 'high-end' ? 'border-purple-500/30' : tier === 'medium' ? 'border-blue-500/30' : 'border-orange-500/30'} rounded-xl p-5`}>
            <h3 className={`text-white mb-3 flex items-center gap-2`}>
              <Zap className="w-5 h-5" />
              Optimization Recommendations
            </h3>
            
            {tier === 'low-end' && (
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  • Use <span className="text-orange-400">LOW-END profile</span> for maximum FPS gains (+150-250% boost)
                </p>
                <p className="text-gray-300">
                  • Enable ALL optimizations in game-specific settings
                </p>
                <p className="text-gray-300">
                  • Focus on <span className="text-orange-400">Graphics</span> and <span className="text-orange-400">Performance</span> tweaks
                </p>
                <p className="text-gray-300">
                  • Use BOOST MODE for nuclear performance
                </p>
              </div>
            )}

            {tier === 'medium' && (
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  • Use <span className="text-blue-400">MEDIUM profile</span> for balanced optimization (+100-200% boost)
                </p>
                <p className="text-gray-300">
                  • Enable CPU and Network optimizations
                </p>
                <p className="text-gray-300">
                  • Keep some visual quality while boosting FPS
                </p>
                <p className="text-gray-300">
                  • BOOST MODE will give you ultra performance
                </p>
              </div>
            )}

            {tier === 'high-end' && (
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  • Use <span className="text-purple-400">HIGH-END profile</span> for quality-focused optimization (+80-150% boost)
                </p>
                <p className="text-gray-300">
                  • Focus on Network and Advanced tweaks
                </p>
                <p className="text-gray-300">
                  • Your system can handle high settings - optimize for consistency
                </p>
                <p className="text-gray-300">
                  • BOOST MODE will push your rig to the absolute limit
                </p>
              </div>
            )}
          </div>

          {/* Close Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Got it, let&apos;s optimize!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}