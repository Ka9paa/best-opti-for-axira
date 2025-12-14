export interface MemoryTweak {
  id: string;
  title: string;
  description: string;
  warningLevel: 'none' | 'warning';
  isPremium: boolean;
}

export const memoryTweaks: MemoryTweak[] = [
  {
    id: 'clear-page-file-shutdown',
    title: 'Clear Page File At Shutdown',
    description: 'Clears the page file on shutdown to improve security and prevent data leaks',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-memory-compression',
    title: 'Disable Memory Compression',
    description: 'Disables Windows memory compression to reduce CPU overhead',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-page-combining',
    title: 'Disable Page Combining',
    description: 'Disables Kernel Windows page combining to stop CPU overhead on systems with high ram',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-prefetcher',
    title: 'Disable Prefetcher',
    description: 'Disables Prefetcher to reduce disk and RAM usage',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-ram-diagnostics',
    title: 'Disable RAM Diagnostics',
    description: 'Disables automatic memory diagnostic checks during boot',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'enable-superfetch',
    title: 'Enable Superfetch',
    description: 'Turns on Superfetch (SysMain) for faster app loading without any performance dip',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-diagnostic-execution',
    title: 'Disable Diagnostic Execution On RAM Error',
    description: 'Prevents Windows from running automatic diagnostics when RAM errors occur',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-kernel-paging-executive',
    title: 'Disable Kernel Paging Executive',
    description: 'Keeps critical kernel components in memory to reduce latency',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-tracking-memory-diagnostics',
    title: 'Disable Tracking Of Memory Diagnostic Runs',
    description: 'Stops Windows from storing logs of memory diagnostic runs',
    warningLevel: 'none',
    isPremium: true
  }
];

export function getAllMemoryTweaks(): MemoryTweak[] {
  return memoryTweaks;
}
