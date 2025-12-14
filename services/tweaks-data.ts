// All system tweaks organized by category

export interface Tweak {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'hardware' | 'network' | 'debloat' | 'gamemode' | 'advanced';
  warningLevel: 'none' | 'warning' | 'critical';
  isPremium: boolean;
  hasConfig?: boolean;
  defaultEnabled: boolean;
}

export const TWEAKS_DATA: Tweak[] = [
  // ====================================
  // GENERAL (Core System Tweaks)
  // ====================================
  {
    id: 'disable-notifications',
    title: 'Disable All Notifications',
    description: 'Turns off all app and system notifications to reduce distractions and free background resources.',
    category: 'general',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-animations',
    title: 'Disable Animations',
    description: 'Disables unnecessary animations for better performance and a smoother experience.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-driver-searching',
    title: 'Disable Driver Searching',
    description: 'Stops Windows from automatically searching and installing drivers.',
    category: 'general',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-experimental-features',
    title: 'Disable Experimental Features',
    description: 'Prevents Windows from automatically enabling experimental or beta features.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-scheduled-maintenance',
    title: 'Disable Scheduled Maintenance',
    description: 'Prevents the system from running automatic maintenance tasks.',
    category: 'general',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-startup-delay',
    title: 'Disable Startup Delay For Apps',
    description: 'Prevents Windows from delaying startup of apps after login.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-transparency',
    title: 'Disable Transparency Effects',
    description: 'Disables window and taskbar transparency which frees up some memory.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-windows-updates',
    title: 'Disable Windows Updates',
    description: 'Disables Windows updates which ensures system stability, tweaks getting reset and prevents bandwidth usage.',
    category: 'general',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'enable-game-mode',
    title: 'Enable Game Mode',
    description: 'Activates Game Mode to reduce background tasks and improve frametimes.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'optimize-hung-apps',
    title: 'Optimize Hung Apps',
    description: 'Automatically terminates unresponsive applications.',
    category: 'general',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'optimize-visual-settings',
    title: 'Optimize Visual Settings',
    description: 'Disables unnecessary visual effects for better performance.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'optimize-windows-search',
    title: 'Optimize Windows Search',
    description: 'Disables Bing web results in Windows Search.',
    category: 'general',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },

  // ====================================
  // HARDWARE (CPU/GPU Tweaks)
  // ====================================
  {
    id: 'set-priority-separation',
    title: 'Set Windows 32 Priority Separation',
    description: 'Optimizes CPU scheduling by giving higher priority to the active foreground application for smoother gameplay.',
    category: 'hardware',
    warningLevel: 'none',
    isPremium: false,
    hasConfig: true,
    defaultEnabled: false
  },
  {
    id: 'disable-core-parking',
    title: 'Disable CPU Core Parking',
    description: 'Prevents Windows from parking CPU cores to save power, ensuring all cores are always available.',
    category: 'hardware',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-power-throttling',
    title: 'Disable Power Throttling',
    description: 'Disables CPU power throttling for maximum performance.',
    category: 'hardware',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'gpu-hardware-scheduling',
    title: 'Enable GPU Hardware Scheduling',
    description: 'Offloads GPU scheduling to the hardware for reduced latency.',
    category: 'hardware',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'high-performance-power',
    title: 'Ultimate Performance Power Plan',
    description: 'Activates the hidden Ultimate Performance power plan.',
    category: 'hardware',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'msi-mode',
    title: 'Enable MSI Mode (GPU)',
    description: 'Enables Message Signaled Interrupts for GPU to reduce DPC latency.',
    category: 'hardware',
    warningLevel: 'critical',
    isPremium: true,
    defaultEnabled: false
  },

  // ====================================
  // NETWORK (TCP/IP Optimization)
  // ====================================
  {
    id: 'disable-nagle',
    title: 'Disable Nagle\'s Algorithm',
    description: 'Reduces network latency by disabling TCP packet batching.',
    category: 'network',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'network-throttling',
    title: 'Disable Network Throttling',
    description: 'Removes Windows network throttling limit for faster speeds.',
    category: 'network',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'tcp-optimizer',
    title: 'TCP/IP Stack Optimization',
    description: 'Optimizes TCP receive window, MTU, and other network settings.',
    category: 'network',
    warningLevel: 'warning',
    isPremium: false,
    hasConfig: true,
    defaultEnabled: false
  },
  {
    id: 'dns-cache',
    title: 'Optimize DNS Cache',
    description: 'Increases DNS cache size for faster domain resolution.',
    category: 'network',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'qos-policy',
    title: 'Disable QoS Packet Scheduler',
    description: 'Removes bandwidth reservation by Windows QoS.',
    category: 'network',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },

  // ====================================
  // DEBLOAT (Remove Bloatware)
  // ====================================
  {
    id: 'disable-telemetry',
    title: 'Disable Windows Telemetry',
    description: 'Disables all Windows telemetry and data collection services.',
    category: 'debloat',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-cortana',
    title: 'Disable Cortana',
    description: 'Completely disables Cortana voice assistant.',
    category: 'debloat',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'remove-bloatware-apps',
    title: 'Remove Bloatware Apps',
    description: 'Uninstalls pre-installed Windows Store apps (Xbox, OneDrive, etc).',
    category: 'debloat',
    warningLevel: 'warning',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-background-apps',
    title: 'Disable Background Apps',
    description: 'Prevents apps from running in the background.',
    category: 'debloat',
    warningLevel: 'none',
    isPremium: false,
    defaultEnabled: false
  },
  {
    id: 'disable-windows-defender',
    title: 'Disable Windows Defender (Extreme)',
    description: 'Completely disables Windows Defender antivirus. Only use if you have alternative protection!',
    category: 'debloat',
    warningLevel: 'critical',
    isPremium: true,
    defaultEnabled: false
  },

  // ====================================
  // GAME MODE (Gaming-Specific)
  // ====================================
  {
    id: 'game-dvr-disable',
    title: 'Disable Game DVR',
    description: 'Disables Xbox Game Bar and Game DVR recording.',
    category: 'gamemode',
    warningLevel: 'none',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'fullscreen-optimizations',
    title: 'Disable Fullscreen Optimizations',
    description: 'Forces true fullscreen mode for all games.',
    category: 'gamemode',
    warningLevel: 'none',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'nvidia-reflex',
    title: 'Enable NVIDIA Reflex Low Latency',
    description: 'Activates NVIDIA Reflex for reduced input lag (NVIDIA GPUs only).',
    category: 'gamemode',
    warningLevel: 'none',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'game-priority-boost',
    title: 'Game Process Priority Boost',
    description: 'Automatically sets game processes to high priority.',
    category: 'gamemode',
    warningLevel: 'warning',
    isPremium: true,
    defaultEnabled: false
  },

  // ====================================
  // ADVANCED (Dangerous/Expert Tweaks)
  // ====================================
  {
    id: 'configure-tsync-policy',
    title: 'Configure Tsync Policy',
    description: 'Defines how the OS synchronizes timing events between CPU cores and system timers.',
    category: 'advanced',
    warningLevel: 'critical',
    isPremium: true,
    hasConfig: true,
    defaultEnabled: false
  },
  {
    id: 'disable-hypervisor',
    title: 'Disable Hypervisor',
    description: 'Disables hypervirtualisation and hypervisor features that are unnecessary for most users.',
    category: 'advanced',
    warningLevel: 'critical',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'disable-scheduled-tasks',
    title: 'Disable Scheduled Tasks',
    description: 'Stops unnecessary background scheduled tasks to free resources.',
    category: 'advanced',
    warningLevel: 'warning',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'tweak-latency-tolerance',
    title: 'Tweak Latency Tolerance',
    description: 'Adjusts Windows and GPU power management latency thresholds to prioritize responsiveness over power efficiency.',
    category: 'advanced',
    warningLevel: 'warning',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'disable-hpet',
    title: 'Disable HPET (High Precision Event Timer)',
    description: 'Disables HPET which can improve performance in some games.',
    category: 'advanced',
    warningLevel: 'critical',
    isPremium: true,
    defaultEnabled: false
  },
  {
    id: 'timer-resolution',
    title: 'Set Timer Resolution to 0.5ms',
    description: 'Forces Windows timer resolution to 0.5ms for better frame pacing.',
    category: 'advanced',
    warningLevel: 'warning',
    isPremium: true,
    defaultEnabled: false
  }
];

export const getTweaksByCategory = (category: string): Tweak[] => {
  return TWEAKS_DATA.filter(tweak => tweak.category === category);
};

export const getAllTweaks = (): Tweak[] => {
  return TWEAKS_DATA;
};
