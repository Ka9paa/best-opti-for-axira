import { X, Sparkles, RefreshCw, Monitor, Cpu, Package, MemoryStick, HardDrive, Wifi, Laptop } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

interface SmartSystemDetectionProps {
  onClose: () => void;
  packageTier: string;
}

export function SmartSystemDetection({ onClose, packageTier }: SmartSystemDetectionProps) {
  const [lastScan, setLastScan] = useState('13th December 2025');
  const [isScanning, setIsScanning] = useState(false);

  const handleRescan = () => {
    setIsScanning(true);
    toast.info('Scanning System', {
      description: 'Detecting your hardware and software configuration...'
    });

    setTimeout(() => {
      setIsScanning(false);
      const now = new Date();
      setLastScan(now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));
      toast.success('System Scan Complete!', {
        description: 'Your system specifications have been updated.'
      });
    }, 2000);
  };

  const systemInfo = [
    {
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      label: 'Windows Build & Account',
      value: 'Windows 11 Pro 25H2 | Local Account'
    },
    {
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      label: 'Is Windows 11',
      value: 'Yes'
    },
    {
      icon: <Laptop className="w-5 h-5 text-blue-400" />,
      label: 'Chasis Type',
      value: 'Desktop'
    },
    {
      icon: <Package className="w-5 h-5 text-blue-400" />,
      label: 'GPU',
      value: 'NVIDIA GeForce RTX 3060 | 591.44 Driver'
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      label: 'CPU',
      value: 'AMD Ryzen 5 5600G with Radeon Graphics | 6 Cores | 12 Threads'
    },
    {
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      label: 'Motherboard & Bios',
      value: 'HP 8876 | HPQOEM - 1072009 F.12 - 50011 (50011)'
    },
    {
      icon: <MemoryStick className="w-5 h-5 text-blue-400" />,
      label: 'Memory',
      value: '16 GB | Max module speed 3200MHz | Modules=2'
    },
    {
      icon: <HardDrive className="w-5 h-5 text-blue-400" />,
      label: 'Storage',
      value: 'WDC PC SN530 SDBPNPZ-1T00-1006 | NVMe | 954 GB'
    },
    {
      icon: <Wifi className="w-5 h-5 text-blue-400" />,
      label: 'Network',
      value: 'Wi-Fi | Realtek RTL8822CE 802.11ac PCIe Adapter | Driver 2024.10.228.2'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative p-8 border-b border-gray-700/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-3xl mb-2">Smart System Detection</h2>
              <p className="text-gray-400">
                We have analyzed your system and tailored the optimizations for your specs!
              </p>
            </div>
            <div className="flex items-center gap-3">
              {packageTier !== 'ELITE' && packageTier !== 'FOUNDATION' && (
                <button className="px-5 py-2.5 bg-purple-600/20 border border-purple-500/50 rounded-xl flex items-center gap-2 hover:bg-purple-600/30 transition-all">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400">Upgrade to Premium</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Last Scan & Rescan */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-gray-400">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Last scan</span>
              <span className="text-sm text-white">{lastScan}</span>
            </div>
            <button
              onClick={handleRescan}
              disabled={isScanning}
              className={`px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl flex items-center gap-2 transition-all ${
                isScanning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Scanning...' : 'Rescan'}</span>
            </button>
          </div>

          {/* System Info List */}
          <div className="space-y-4">
            {systemInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 bg-black/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <span className="text-gray-300">{info.label}</span>
                </div>
                <span className="text-gray-400">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
