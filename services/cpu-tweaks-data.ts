export interface CPUTweak {
  id: string;
  title: string;
  description: string;
  warningLevel: 'none' | 'warning';
  isPremium: boolean;
}

export const cpuTweaks: CPUTweak[] = [
  {
    id: 'disable-basic-c-states',
    title: 'Disable Basic C-states',
    description: 'Disables low-power idle states in the CPU, reducing latency and avoiding performance drops.',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-coalescable-timer',
    title: 'Disable Coalescable Timer',
    description: 'Prevents Windows from grouping timer events together, improving input latency and CPU responsiveness.',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-cpu-core-parking',
    title: 'Disable CPU Core Parking',
    description: 'Keeps all CPU cores active at all times, improving multi-core performance',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-cpu-power-throttling',
    title: 'Disable CPU Power Throttling',
    description: 'Prevents Windows from reducing CPU frequency, keeping CPU at maximum performance.',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-modern-standby',
    title: 'Disable Modern Standby',
    description: 'Disables Modern Standby to stop the system from entering low-power connected states',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'set-energy-performance-preference',
    title: 'Set Energy Performance Preference',
    description: 'Configures Windows to prioritize performance over energy savings, ensuring consistent CPU performance.',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'set-minimum-maximum-processor-state',
    title: 'Set Minimum And Maximum Processor State',
    description: 'Forces CPU cores to stay at 100% performance minimum and maximum, eliminates dynamic frequency scaling.',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-eventprocessor',
    title: 'Disable Eventprocessor',
    description: 'Disables the Event Processor to reduce background cpu cycles',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'set-kernel-worker-threads',
    title: 'Set Kernel Worker Threads',
    description: 'Optimizes how Windows handles low-level background tasks by adjusting kernel thread priorities.',
    warningLevel: 'none',
    isPremium: true
  }
];

export function getAllCPUTweaks(): CPUTweak[] {
  return cpuTweaks;
}
