import { AISupportAgent } from './AISupportAgent';
import { toast } from 'sonner@2.0.3';

interface EnhancedDashboardProps {
  username: string;
  licenseKey: string;
  onNavigate: (page: 'games' | 'settings' | 'history' | 'admin') => void;
}

export function EnhancedDashboard({ username, licenseKey, onNavigate }: EnhancedDashboardProps) {
  const [showAIChat, setShowAIChat] = useState(false);
  const [cpuUsage, setCpuUsage] = useState<number[]>([100, 85, 50, 35, 30, 28]);
  const [backupCount, setBackupCount] = useState(2);
  const [systemSpecs, setSystemSpecs] = useState('Detecting...');

  useEffect(() => {
    // Detect system specs (basic browser detection)
    const detectSpecs = () => {
      const cores = navigator.hardwareConcurrency || 'Unknown';
      const memory = (navigator as any).deviceMemory || 'Unknown';
      setSystemSpecs(`${cores} cores with ${memory}GB RAM`);
    };
    detectSpecs();

    // Get backup count from localStorage
    const backups = localStorage.getItem('axira_backups');
    if (backups) {
      setBackupCount(JSON.parse(backups).length);
    }
  }, []);

  const getLicenseType = () => {
    if (licenseKey.startsWith('ELITE-')) return 'ELITE';
    if (licenseKey.startsWith('FOUNDATION-')) return 'FOUNDATION';
    if (licenseKey.startsWith('CHECKUP-')) return 'CHECKUP';
    return 'STANDARD';
  };

  const createBackup = () => {
    const backup = {
      id: Date.now(),
      name: `Backup ${new Date().toLocaleDateString()}`,
      date: new Date().toISOString(),
      size: '~150 MB'
    };

    const backups = localStorage.getItem('axira_backups');
    const backupList = backups ? JSON.parse(backups) : [];
    backupList.push(backup);
    localStorage.setItem('axira_backups', JSON.stringify(backupList));
    setBackupCount(backupList.length);

    toast.success('System backup created!', {
      description: 'Your current settings have been saved'
    });
  };

  const quickstartItems = [
    {
      icon: CheckCircle,
      title: 'Create a backup',
      desc: 'Back up your system settings for safety',
      color: 'text-green-400',
      completed: backupCount > 0
    },
    {
      icon: Zap,
      title: 'Apply a tweak',
      desc: 'Enable tweaks to boost performance',
      color: 'text-blue-400',
      completed: false
    },
    {
      icon: Trash2,
      title: 'Clean your system files',
      desc: 'Free up the clutter on your drive',
      color: 'text-cyan-400',
      completed: false
    },
    {
      icon: Sliders,
      title: 'Debloat your system',
      desc: 'Apply a service preset to remove useless services',
      color: 'text-purple-400',
      completed: false
    },
    {
      icon: Download,
      title: 'Optimize an app',
      desc: 'Debloat and optimize any application',
      color: 'text-pink-400',
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 digital-grid opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
        </div>
      </div>

      <div className="p-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2">
              Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{username}!</span>
            </h1>
            <p className="text-gray-400">Ready to enhance your system performance?</p>
          </div>
          
          <button
            onClick={() => {/* Upgrade logic */}}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-purple-500/30"
          >
            <Crown className="w-5 h-5" />
            Upgrade to Premium
          </button>
        </div>

        {/* Top Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Create Backup */}
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <button
                onClick={createBackup}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-all"
              >
                Create backup
              </button>
            </div>
            <div className="text-3xl mb-1">{backupCount}</div>
            <div className="text-gray-400 text-sm">Backups found</div>
          </div>

          {/* Need Help */}
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-green-400" />
              </div>
              <button
                onClick={() => setShowAIChat(true)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-all"
              >
                I need help
              </button>
            </div>
            <h3 className="text-xl mb-1">Need help?</h3>
            <div className="text-gray-400 text-sm">Join our dedicated support server</div>
          </div>

          {/* Tutorial */}
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-red-400" />
              </div>
              <button
                onClick={() => window.open('https://youtube.com', '_blank')}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-all"
              >
                Watch Tutorial
              </button>
            </div>
            <h3 className="text-xl mb-1">How to use Guide</h3>
            <div className="text-gray-400 text-sm">Watch our full tutorial video for EXM</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Monitor */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">{systemSpecs}</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-all border border-gray-700">
                    CPU
                  </button>
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-all border border-gray-700">
                    GPU
                  </button>
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-all border border-gray-700">
                    RAM
                  </button>
                </div>
              </div>

              {/* CPU Usage Chart */}
              <div className="relative h-64 bg-black/30 rounded-xl border border-gray-700/50 p-4">
                <div className="absolute inset-0 flex items-end justify-between p-4 gap-2">
                  {cpuUsage.map((usage, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500"
                        style={{ height: `${usage}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                {/* Y-axis labels */}
                <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-gray-500 text-xs">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-2 text-gray-500 text-xs">
                  <span>60 seconds</span>
                  <span>45 seconds</span>
                  <span>30 seconds</span>
                  <span>15 seconds</span>
                  <span>0 seconds</span>
                </div>
              </div>
            </div>

            {/* Updates Section */}
            <div className="mt-6 p-4 bg-black/30 rounded-xl border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-lg">Updates</span>
                </div>
                <span className="text-gray-400 text-sm">EXM Version 2.0</span>
              </div>
            </div>
          </div>

          {/* Quickstart */}
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl">Quickstart</h2>
            </div>

            <div className="space-y-4">
              {quickstartItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                    item.completed
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-black/30 border-gray-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.completed ? 'bg-green-500/20' : 'bg-gray-800'
                  }`}>
                    <item.icon className={`w-4 h-4 ${item.completed ? 'text-green-400' : item.color}`} />
                  </div>
                  <div>
                    <div className={`text-sm mb-1 ${item.completed ? 'text-green-400' : 'text-white'}`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Support Button */}
            <button
              onClick={() => setShowAIChat(true)}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with AI Support
            </button>

            {/* Quick Actions */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => onNavigate('games')}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all text-sm"
              >
                🎮 Optimize Games
              </button>
              <button
                onClick={() => onNavigate('settings')}
                className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all text-sm border border-gray-700"
              >
                ⚙️ System Settings
              </button>
              <button
                onClick={() => onNavigate('history')}
                className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all text-sm border border-gray-700"
              >
                📊 View History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Support Chat Modal */}
      {showAIChat && <AISupportAgent onClose={() => setShowAIChat(false)} />}
    </div>
  );
}
