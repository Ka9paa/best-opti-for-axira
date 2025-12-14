import { useState, useEffect } from 'react';
import {
  Zap,
  Crown,
  Database,
  HelpCircle,
  PlayCircle,
  CheckCircle,
  Trash2,
  Sliders,
  Download,
  MessageCircle,
  Settings,
  ChevronRight,
  Shield,
  Gauge,
  Sparkles,
  Cpu,
  Monitor,
  MemoryStick,
  HardDrive,
  Battery,
  Wifi,
  Lock,
  Eye,
  EyeOff,
  RefreshCw,
  Download as DownloadIcon,
  History,
  Search,
  X,
  AlertTriangle,
  Check,
  Info,
  ExternalLink
} from 'lucide-react';
import { AISupportAgent } from './AISupportAgent';
import { SmartSystemDetection } from './SmartSystemDetection';
import { getAllCleanupTasks } from '../services/debloat-data';
import { toast } from 'sonner';

const SettingsIcon = Settings;

interface MainDashboardProps {
  username: string;
  licenseKey: string;
}

export function MainDashboard({ username, licenseKey }: MainDashboardProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [showAIChat, setShowAIChat] = useState(false);
  const [showSmartDetection, setShowSmartDetection] = useState(false);
  const [enabledTweaks, setEnabledTweaks] = useState<{ [key: string]: boolean }>({});
  const [backupCount, setBackupCount] = useState(2);
  const [activeChart, setActiveChart] = useState('cpu');
  const [systemSpecs, setSystemSpecs] = useState('AMD Ryzen 5 5600G with Radeon Graphics');
  const [generalTab, setGeneralTab] = useState<'core' | 'privacy' | 'powerplan'>('core');
  const [hardwareTab, setHardwareTab] = useState<'gpu' | 'cpu' | 'memory'>('gpu');
  const [activePowerplan, setActivePowerplan] = useState('desktop');
  const [activeNvidiaProfile, setActiveNvidiaProfile] = useState('desktop');
  const [debloatTab, setDebloatTab] = useState<'system-cleaner' | 'services' | 'autoruns' | 'uninstall'>('system-cleaner');
  const [selectedCleanupTasks, setSelectedCleanupTasks] = useState<{ [key: string]: boolean }>({});
  const [lastCleaned, setLastCleaned] = useState<string | null>(null);

  const quickstartItems = [
    {
      title: 'Create a backup',
      desc: 'Back up your system settings for safety',
      completed: false
    },
    {
      title: 'Apply a tweak',
      desc: 'Enable tweaks to boost performance',
      completed: false
    },
    {
      title: 'Clean your system files',
      desc: 'Free up the clutter on your drive',
      completed: false
    },
    {
      title: 'Debloat your system',
      desc: 'Apply a service preset to remove useless services',
      completed: false
    },
    {
      title: 'Optimize an app',
      desc: 'Debloat and optimize any application',
      completed: false
    }
  ];

  const packageTier = licenseKey.startsWith('ELITE-') 
    ? 'ELITE' 
    : licenseKey.startsWith('FOUNDATION-') 
    ? 'FOUNDATION' 
    : 'CHECKUP';

  useEffect(() => {
    // Load saved tweaks from localStorage
    const savedTweaks = localStorage.getItem('axira_enabled_tweaks');
    if (savedTweaks) {
      setEnabledTweaks(JSON.parse(savedTweaks));
    }

    // Detect system specs
    const cores = navigator.hardwareConcurrency || 'Unknown';
    const memory = (navigator as any).deviceMemory || 'Unknown';
    setSystemSpecs(`${cores} cores CPU with ${memory}GB RAM`);

    // Load backup count
    const backups = localStorage.getItem('axira_backups');
    if (backups) {
      setBackupCount(JSON.parse(backups).length);
    }
  }, []);

  const createBackup = () => {
    const backup = {
      id: Date.now(),
      name: `Backup ${new Date().toLocaleDateString()}`,
      date: new Date().toISOString()
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

  const getChartData = (): number[] => {
    if (activeChart === 'cpu') {
      return [35, 42, 38, 45, 52, 48, 55, 50, 58, 62];
    } else if (activeChart === 'gpu') {
      return [40, 35, 38, 32, 28, 25, 30, 45, 50, 48];
    } else {
      return [68, 70, 69, 71, 70, 72, 71, 73, 70, 72];
    }
  };

  const handleToggleTweak = (id: string) => {
    setEnabledTweaks(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      localStorage.setItem('axira_enabled_tweaks', JSON.stringify(newState));
      
      toast.success(newState[id] ? 'Tweak Enabled' : 'Tweak Disabled', {
        description: newState[id] 
          ? 'This tweak will be applied on next optimization'
          : 'This tweak has been disabled'
      });
      
      return newState;
    });
  };

  const handleConfigureTweak = (id: string) => {
    toast.info('Configure Feature', {
      description: 'Advanced configuration coming soon!'
    });
  };

  const handleApplyOptimizations = () => {
    const enabledCount = Object.values(enabledTweaks).filter(Boolean).length;
    
    if (enabledCount === 0) {
      toast.error('No Tweaks Selected', {
        description: 'Please enable at least one tweak before applying optimizations.'
      });
      return;
    }

    toast.success(`Applying ${enabledCount} Optimizations`, {
      description: 'Your tweaks are being applied. This may take a few moments...'
    });

    // Simulate optimization process
    setTimeout(() => {
      toast.success('Optimizations Complete!', {
        description: `${enabledCount} tweaks have been successfully applied to your system.`
      });
    }, 2000);
  };

  const getIconForTweak = (title: string) => {
    if (title.includes('Notification')) return <Bell className="w-5 h-5 text-blue-400" />;
    if (title.includes('Animation')) return <Eye className="w-5 h-5 text-blue-400" />;
    if (title.includes('Driver')) return <Wrench className="w-5 h-5 text-blue-400" />;
    if (title.includes('Experimental')) return <SettingsIcon className="w-5 h-5 text-blue-400" />;
    if (title.includes('Maintenance')) return <Wrench className="w-5 h-5 text-blue-400" />;
    if (title.includes('Startup')) return <Zap className="w-5 h-5 text-blue-400" />;
    if (title.includes('Transparency')) return <SettingsIcon className="w-5 h-5 text-blue-400" />;
    if (title.includes('Updates')) return <SettingsIcon className="w-5 h-5 text-blue-400" />;
    if (title.includes('Game Mode')) return <Gamepad2 className="w-5 h-5 text-blue-400" />;
    if (title.includes('Hung Apps')) return <Zap className="w-5 h-5 text-blue-400" />;
    if (title.includes('Visual')) return <Eye className="w-5 h-5 text-blue-400" />;
    if (title.includes('Search')) return <SettingsIcon className="w-5 h-5 text-blue-400" />;
    if (title.includes('CPU') || title.includes('Priority')) return <Cpu className="w-5 h-5 text-purple-400" />;
    if (title.includes('Network') || title.includes('TCP') || title.includes('DNS')) return <Network className="w-5 h-5 text-green-400" />;
    if (title.includes('Debloat') || title.includes('Telemetry') || title.includes('Cortana')) return <Trash2 className="w-5 h-5 text-red-400" />;
    return <SettingsIcon className="w-5 h-5 text-blue-400" />;
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'home': return 'Home';
      case 'backups': return 'Backups';
      case 'fixes': return 'Fixes';
      case 'general': return 'Core';
      case 'hardware': return 'Hardware';
      case 'network': return 'Network';
      case 'debloat': return 'Debloat';
      case 'gamemode': return 'Axira Game Mode';
      case 'advanced': return 'Advanced';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <div className="space-y-6">
          {/* Top Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Create Backup */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <button
                  onClick={createBackup}
                  className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg text-sm text-blue-400 transition-all"
                >
                  Create backup
                </button>
              </div>
              <div className="text-3xl mb-1">{backupCount}</div>
              <div className="text-gray-400 text-sm">Backups found</div>
            </div>

            {/* Need Help */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </div>
                <button
                  onClick={() => setShowAIChat(true)}
                  className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/50 rounded-lg text-sm text-green-400 transition-all"
                >
                  I need help
                </button>
              </div>
              <h3 className="text-xl mb-1">Need help?</h3>
              <div className="text-gray-400 text-sm">Join our dedicated support server</div>
            </div>

            {/* How to use Guide */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-gray-400" />
                </div>
                <button
                  onClick={() => window.open('https://youtube.com', '_blank')}
                  className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 rounded-lg text-sm text-red-400 transition-all"
                >
                  Watch Tutorial
                </button>
              </div>
              <h3 className="text-xl mb-1">How to use Guide</h3>
              <div className="text-gray-400 text-sm">Watch our Full tutorial video for Axira</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* System Monitor - 2 columns */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">{systemSpecs}</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveChart('cpu')}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeChart === 'cpu' 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    CPU
                  </button>
                  <button 
                    onClick={() => setActiveChart('gpu')}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeChart === 'gpu' 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    GPU
                  </button>
                  <button 
                    onClick={() => setActiveChart('ram')}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeChart === 'ram' 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    RAM
                  </button>
                </div>
              </div>

              {/* Chart */}
              <SystemChart data={getChartData()} />

              {/* Updates Section */}
              <div className="mt-6 p-4 bg-black/30 rounded-xl border border-gray-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span className="text-lg">Updates</span>
                </div>
                <span className="text-gray-400">Axira Version 1.0</span>
              </div>
            </div>

            {/* Quickstart - 1 column */}
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
                        ? 'bg-blue-500/10 border-blue-500/30'
                        : 'bg-black/30 border-gray-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.completed ? 'bg-blue-500/20' : 'bg-gray-800'
                    }`}>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        item.completed 
                          ? 'border-blue-400 bg-blue-400' 
                          : 'border-gray-600'
                      }`}>
                        {item.completed && (
                          <CheckCircle className="w-3 h-3 text-white -ml-0.5 -mt-0.5" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className={`text-sm mb-1 ${item.completed ? 'text-white' : 'text-gray-300'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeSection === 'backups') {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-2xl mb-4">System Backups</h2>
            <p className="text-gray-400 mb-6">
              Create and manage system restore points before applying tweaks.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all">
              Create New Backup
            </button>
          </div>
        </div>
      );
    }

    if (activeSection === 'fixes') {
      const fixes = getAllFixes();
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fixes.map((fix) => (
            <FixCard
              key={fix.id}
              id={fix.id}
              title={fix.title}
              description={fix.description}
              icon={getIconForTweak(fix.title)}
              warningLevel={fix.warningLevel}
              isPremium={fix.isPremium}
              hasConfig={fix.hasConfig}
              enabled={enabledTweaks[fix.id] || false}
              onToggle={handleToggleTweak}
              onConfigure={handleConfigureTweak}
              userTier={packageTier}
            />
          ))}
        </div>
      );
    }

    // General section with tabs
    if (activeSection === 'general') {
      return (
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setGeneralTab('core')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                generalTab === 'core'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Core</span>
            </button>
            <button
              onClick={() => setGeneralTab('privacy')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                generalTab === 'privacy'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Privacy</span>
            </button>
            <button
              onClick={() => setGeneralTab('powerplan')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                generalTab === 'powerplan'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Battery className="w-4 h-4" />
              <span>Powerplan</span>
            </button>
          </div>

          {/* Tab Content */}
          {generalTab === 'powerplan' && (
            <div className="space-y-6">
              {/* Active Powerplan & CPU Info */}
              <div className="flex items-center gap-6 p-4 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Active Powerplan</div>
                    <div className="text-lg">Axira Desktop Power Plan</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">CPU</div>
                    <div className="text-lg">AMD Ryzen 5 5600G with Radeon Graphics @ 3.89 GHz</div>
                  </div>
                </div>
              </div>

              {/* Powerplan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PowerplanCard
                  id="laptop"
                  name="Axira Laptop Powerplan"
                  description="Keeps your system cool and efficient, preventing overheating while still delivering solid performance when gaming."
                  isActive={activePowerplan === 'laptop'}
                  isLaptop={true}
                  metrics={{
                    responsiveness: 4,
                    powerConsumption: 3,
                    temperature: 3,
                    fpsStability: 4
                  }}
                  onApply={(id) => {
                    setActivePowerplan(id);
                    toast.success('Powerplan Applied!', {
                      description: 'Axira Laptop Powerplan is now active'
                    });
                  }}
                />
                <PowerplanCard
                  id="desktop"
                  name="Axira Desktop Powerplan"
                  description="Unlocks maximum performance and responsiveness, perfect for gaming or heavy workloads."
                  isActive={activePowerplan === 'desktop'}
                  isLaptop={false}
                  metrics={{
                    responsiveness: 5,
                    powerConsumption: 4,
                    temperature: 4,
                    fpsStability: 5
                  }}
                  onApply={(id) => {
                    setActivePowerplan(id);
                    toast.success('Powerplan Applied!', {
                      description: 'Axira Desktop Powerplan is now active'
                    });
                  }}
                />
              </div>
            </div>
          )}

          {generalTab === 'core' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTweaksByCategory('general').map((tweak) => (
                <TweakCard
                  key={tweak.id}
                  id={tweak.id}
                  title={tweak.title}
                  description={tweak.description}
                  icon={getIconForTweak(tweak.title)}
                  warningLevel={tweak.warningLevel}
                  isPremium={tweak.isPremium}
                  hasConfig={tweak.hasConfig}
                  enabled={enabledTweaks[tweak.id] || false}
                  onToggle={handleToggleTweak}
                  onConfigure={handleConfigureTweak}
                  userTier={packageTier}
                />
              ))}
            </div>
          )}

          {generalTab === 'privacy' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAllPrivacyTweaks().map((tweak) => (
                <PrivacyCard
                  key={tweak.id}
                  id={tweak.id}
                  title={tweak.title}
                  description={tweak.description}
                  warningLevel={tweak.warningLevel}
                  isPremium={tweak.isPremium}
                  enabled={enabledTweaks[tweak.id] || false}
                  onToggle={handleToggleTweak}
                  userTier={packageTier}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    // Hardware section with tabs
    if (activeSection === 'hardware') {
      return (
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setHardwareTab('gpu')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                hardwareTab === 'gpu'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>GPU</span>
            </button>
            <button
              onClick={() => setHardwareTab('cpu')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                hardwareTab === 'cpu'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>CPU</span>
            </button>
            <button
              onClick={() => setHardwareTab('memory')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                hardwareTab === 'memory'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <MemoryStick className="w-4 h-4" />
              <span>Memory</span>
            </button>
          </div>

          {/* Tab Content */}
          {hardwareTab === 'gpu' && (
            <div className="space-y-6">
              {/* Search, Filter, Sort, Refresh, GPU Selector */}
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-11 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl text-sm focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="text-sm">Sort</span>
                </button>
                <button 
                  onClick={() => toast.success('Tweaks Refreshed!')}
                  className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Refresh tweaks</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <Package className="w-4 h-4" />
                  <span className="text-sm">NVIDIA GeForce RTX 3060</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-1.5">
                  <span className="text-xs text-green-400">Driver 591.44</span>
                </div>
              </div>

              {/* Advanced NVIDIA GPU Driver Installer */}
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg">Advanced NVIDIA GPU Driver Installer</h3>
                  </div>
                  <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-xs text-red-400">Warning</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Installs a debloated NVIDIA driver. Removes telemetry, unnecessary components and optimizes driver settings.
                </p>
                <button
                  onClick={() => toast.info('Driver Installer', { description: 'Advanced driver installation coming soon!' })}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>Open</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* NVIDIA Profile Inspector */}
              <div>
                <h2 className="text-2xl mb-4">NVIDIA Profile Inspector</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NvidiaProfileCard
                    id="laptop"
                    name="Axira Laptop Nvidia Profile"
                    description="Applies driver-level optimizations through NVIDIA Profile Inspector. Optimizes global NVIDIA 3d settings and over 80 hidden settings for high performance and low latency without significantly impacting temperatures"
                    isActive={activeNvidiaProfile === 'laptop'}
                    isLaptop={true}
                    performanceLatency={4}
                    temperaturePower={3}
                    onApply={(id) => {
                      setActiveNvidiaProfile(id);
                      toast.success('NVIDIA Profile Applied!', {
                        description: 'Axira Laptop Nvidia Profile is now active'
                      });
                    }}
                  />
                  <NvidiaProfileCard
                    id="desktop"
                    name="Axira Desktop Nvidia Profile"
                    description="Applies driver-level optimizations through NVIDIA Profile Inspector. Optimizes global NVIDIA 3d settings and over 100 hidden settings for maximum performance and ultra low latency."
                    isActive={activeNvidiaProfile === 'desktop'}
                    isLaptop={false}
                    performanceLatency={5}
                    temperaturePower={4}
                    onApply={(id) => {
                      setActiveNvidiaProfile(id);
                      toast.success('NVIDIA Profile Applied!', {
                        description: 'Axira Desktop Nvidia Profile is now active'
                      });
                    }}
                  />
                </div>
              </div>

              {/* GPU Tweaks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAllGPUTweaks().map((tweak) => (
                  <GPUTweakCard
                    key={tweak.id}
                    id={tweak.id}
                    title={tweak.title}
                    description={tweak.description}
                    icon={getIconForTweak(tweak.title)}
                    warningLevel={tweak.warningLevel}
                    premiumTier={tweak.premiumTier}
                    enabled={enabledTweaks[tweak.id] || false}
                    onToggle={handleToggleTweak}
                    userTier={packageTier}
                  />
                ))}
              </div>
            </div>
          )}

          {hardwareTab === 'cpu' && (
            <div className="space-y-6">
              {/* Search, Filter, Sort, Refresh, Detecting CPU Badge */}
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-11 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl text-sm focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="text-sm">Sort</span>
                </button>
                <button 
                  onClick={() => toast.success('Tweaks Refreshed!')}
                  className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Refresh tweaks</span>
                </button>
                <div className="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded-lg flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs text-gray-400">Detecting CPU...</span>
                </div>
              </div>

              {/* CPU Tweaks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAllCPUTweaks().map((tweak) => (
                  <CPUTweakCard
                    key={tweak.id}
                    id={tweak.id}
                    title={tweak.title}
                    description={tweak.description}
                    icon={getIconForTweak(tweak.title)}
                    warningLevel={tweak.warningLevel}
                    isPremium={tweak.isPremium}
                    enabled={enabledTweaks[tweak.id] || false}
                    onToggle={handleToggleTweak}
                    userTier={packageTier}
                  />
                ))}
              </div>
            </div>
          )}

          {hardwareTab === 'memory' && (
            <div className="space-y-6">
              {/* Search, Filter, Sort, Refresh, Detecting Memory Badge */}
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-11 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl text-sm focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm">Filter</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all">
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="text-sm">Sort</span>
                </button>
                <button 
                  onClick={() => toast.success('Tweaks Refreshed!')}
                  className="px-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-blue-500/30 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Refresh tweaks</span>
                </button>
                <div className="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded-lg flex items-center gap-1.5">
                  <MemoryStick className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs text-gray-400">Detecting Memory...</span>
                </div>
              </div>

              {/* Memory Tweaks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAllMemoryTweaks().map((tweak) => (
                  <MemoryTweakCard
                    key={tweak.id}
                    id={tweak.id}
                    title={tweak.title}
                    description={tweak.description}
                    icon={getIconForTweak(tweak.title)}
                    warningLevel={tweak.warningLevel}
                    isPremium={tweak.isPremium}
                    enabled={enabledTweaks[tweak.id] || false}
                    onToggle={handleToggleTweak}
                    userTier={packageTier}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Network section with tabs
    if (activeSection === 'network') {
      return (
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              className="px-5 py-2.5 rounded-xl border bg-gray-800 border-gray-600 text-white flex items-center gap-2 transition-all"
            >
              <Wifi className="w-4 h-4" />
              <span>Tweaks</span>
            </button>
          </div>

          {/* Network Tweaks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllNetworkTweaks().map((tweak) => (
              <NetworkTweakCard
                key={tweak.id}
                id={tweak.id}
                title={tweak.title}
                description={tweak.description}
                warningLevel={tweak.warningLevel}
                isPremium={tweak.isPremium}
                enabled={enabledTweaks[tweak.id] || false}
                onToggle={handleToggleTweak}
                userTier={packageTier}
              />
            ))}
          </div>
        </div>
      );
    }

    // Debloat section with tabs
    if (activeSection === 'debloat') {
      const handleToggleCleanupTask = (id: string) => {
        setSelectedCleanupTasks(prev => ({
          ...prev,
          [id]: !prev[id]
        }));
      };

      const handleSelectAll = () => {
        const allTasks = getAllCleanupTasks();
        const allSelected = allTasks.every(task => selectedCleanupTasks[task.id]);
        
        if (allSelected) {
          setSelectedCleanupTasks({});
        } else {
          const newState: { [key: string]: boolean } = {};
          allTasks.forEach(task => {
            newState[task.id] = true;
          });
          setSelectedCleanupTasks(newState);
        }
      };

      const handleStartCleaning = () => {
        const selectedCount = Object.values(selectedCleanupTasks).filter(Boolean).length;
        
        if (selectedCount === 0) {
          toast.error('No Tasks Selected', {
            description: 'Please select at least one cleanup task.'
          });
          return;
        }

        toast.success('Cleaning System', {
          description: `Cleaning ${selectedCount} items...`
        });

        setTimeout(() => {
          setLastCleaned('Just now');
          setSelectedCleanupTasks({});
          toast.success('Cleaning Complete!', {
            description: `Successfully cleaned ${selectedCount} items and freed up disk space.`
          });
        }, 2000);
      };

      const getCleanupIcon = (iconName: string) => {
        switch (iconName) {
          case 'package': return <Package className="w-5 h-5 text-gray-400" />;
          case 'chrome': return <Globe className="w-5 h-5 text-gray-400" />;
          case 'gamepad': return <Gamepad2 className="w-5 h-5 text-gray-400" />;
          case 'x': return <X className="w-5 h-5 text-gray-400" />;
          case 'zap': return <Zap className="w-5 h-5 text-gray-400" />;
          case 'monitor': return <Monitor className="w-5 h-5 text-gray-400" />;
          case 'wrench': return <Wrench className="w-5 h-5 text-gray-400" />;
          case 'file-text': return <FileText className="w-5 h-5 text-gray-400" />;
          case 'refresh-cw': return <RefreshCw className="w-5 h-5 text-gray-400" />;
          case 'trash': return <Trash2 className="w-5 h-5 text-gray-400" />;
          default: return <Package className="w-5 h-5 text-gray-400" />;
        }
      };

      const allSelected = getAllCleanupTasks().every(task => selectedCleanupTasks[task.id]);

      return (
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setDebloatTab('system-cleaner')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                debloatTab === 'system-cleaner'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>System Cleaner</span>
            </button>
            <button
              onClick={() => setDebloatTab('services')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                debloatTab === 'services'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Services</span>
            </button>
            <button
              onClick={() => setDebloatTab('autoruns')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                debloatTab === 'autoruns'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Autoruns</span>
            </button>
            <button
              onClick={() => setDebloatTab('uninstall')}
              className={`px-5 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                debloatTab === 'uninstall'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>Uninstall</span>
            </button>
          </div>

          {/* System Cleaner Tab */}
          {debloatTab === 'system-cleaner' && (
            <div className="space-y-6">
              {/* Last Ran & Select All */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Last ran</span>
                  <span className="text-sm text-white">{lastCleaned || 'Never'}</span>
                </div>
                <button
                  onClick={handleSelectAll}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl text-sm transition-all flex items-center gap-2"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span>{allSelected ? 'Deselect all' : 'Select all'}</span>
                </button>
              </div>

              {/* Cleanup Tasks List */}
              <div className="space-y-3">
                {getAllCleanupTasks().map((task) => (
                  <div
                    key={task.id}
                    className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-5 flex items-center justify-between hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                        {getCleanupIcon(task.icon)}
                      </div>
                      <span>{task.name}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedCleanupTasks[task.id] || false}
                      onChange={() => handleToggleCleanupTask(task.id)}
                      className="w-5 h-5 rounded border-2 border-gray-600 bg-transparent checked:bg-blue-600 checked:border-blue-600 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Start Cleaning Button */}
              <button
                onClick={handleStartCleaning}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-2xl text-lg transition-all"
              >
                Start cleaning
              </button>
            </div>
          )}

          {/* Services Tab */}
          {debloatTab === 'services' && (
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center">
              <SettingsIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Services Management</h3>
              <p className="text-gray-400">
                Manage Windows services to optimize performance. Coming soon!
              </p>
            </div>
          )}

          {/* Autoruns Tab */}
          {debloatTab === 'autoruns' && (
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center">
              <Zap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Startup Programs</h3>
              <p className="text-gray-400">
                Control which programs run at startup. Coming soon!
              </p>
            </div>
          )}

          {/* Uninstall Tab */}
          {debloatTab === 'uninstall' && (
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center">
              <Trash2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Uninstall Applications</h3>
              <p className="text-gray-400">
                Remove unwanted programs and bloatware. Coming soon!
              </p>
            </div>
          )}
        </div>
      );
    }

    // Render tweaks for the selected category
    const tweaks = getTweaksByCategory(activeSection);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tweaks.map((tweak) => (
          <TweakCard
            key={tweak.id}
            id={tweak.id}
            title={tweak.title}
            description={tweak.description}
            icon={getIconForTweak(tweak.title)}
            warningLevel={tweak.warningLevel}
            isPremium={tweak.isPremium}
            hasConfig={tweak.hasConfig}
            enabled={enabledTweaks[tweak.id] || false}
            onToggle={handleToggleTweak}
            onConfigure={handleConfigureTweak}
            userTier={packageTier}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onAIAssistant={() => setShowAIChat(true)}
        onApplyOptimizations={handleApplyOptimizations}
        onSmartSystemDetection={() => setShowSmartDetection(true)}
        onLogout={() => {
          toast.success('Logged Out', {
            description: 'Redirecting to login...'
          });
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
        }}
        username={username}
        packageTier={packageTier}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Futuristic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 digital-grid opacity-20"></div>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-4xl mb-2">
                {activeSection === 'home' ? (
                  <>Welcome Back, <span className="text-white">{username}</span>!</>
                ) : (
                  getSectionTitle()
                )}
              </h1>
              <p className="text-gray-400">
                {activeSection === 'home' && 'Ready to enhance your system performance?'}
                {activeSection === 'general' && 'Core system optimizations for better performance'}
                {activeSection === 'hardware' && 'CPU and GPU performance tweaks'}
                {activeSection === 'network' && 'Network and connection optimizations'}
                {activeSection === 'debloat' && 'Remove bloatware and unnecessary services'}
                {activeSection === 'gamemode' && 'Gaming-specific performance enhancements'}
                {activeSection === 'advanced' && 'Advanced system tweaks (use with caution)'}
              </p>
            </div>
            {activeSection === 'home' && (
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/30">
                <Crown className="w-5 h-5" />
                Upgrade Package
              </button>
            )}
          </div>

          {/* Render Content */}
          {renderContent()}
        </div>
      </div>

      {/* AI Support Chat */}
      {showAIChat && <AISupportAgent onClose={() => setShowAIChat(false)} packageName={licenseKey} />}

      {/* Smart System Detection */}
      {showSmartDetection && (
        <SmartSystemDetection
          onClose={() => setShowSmartDetection(false)}
          packageTier={packageTier}
        />
      )}
    </div>
  );
}
