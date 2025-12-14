export interface NetworkTweak {
  id: string;
  title: string;
  description: string;
  warningLevel: 'none' | 'warning';
  isPremium: boolean;
}

export const networkTweaks: NetworkTweak[] = [
  {
    id: 'disable-nagles-algorithm',
    title: 'Disable Nagles Algorithm',
    description: 'Disables packet combining which will result in faster responsiveness in online applications',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'disable-teredo',
    title: 'Disable Teredo',
    description: 'Disables the legacy IPv6 Teredo tunneling interface to prevent latency spikes and improve network stability',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'enable-weakhost-send-receive',
    title: 'Enable Weakhost Send And Recieve',
    description: 'Allows network interfaces to send and receive packets even if the destination doesn\'t match the interface\'s IP address',
    warningLevel: 'none',
    isPremium: false
  },
  {
    id: 'optimize-mtu-size',
    title: 'Optimize Mtu Size',
    description: 'Sets max packet size to 1500 bytes for optimal delivery, reducing fragmentation',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'optimize-tcp-ip-settings',
    title: 'Optimize Tcp/Ip Settings',
    description: 'Improves TCP latency by sending ACKs immediately, disabling delayed ACK timers and enabling fast retransmit',
    warningLevel: 'warning',
    isPremium: false
  },
  {
    id: 'disable-adapter-power-management',
    title: 'Disable Adapter Power Management',
    description: 'Disables all NIC-level power-saving features, preventing the adapter from entering low-power states for consistent performance',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-forced-window-scaling',
    title: 'Disable Forced Window Scaling',
    description: 'Stops Windows from automatically adjusting TCP window scaling parameters, providing more control over network behavior',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-hidden-nic-powersaving',
    title: 'Disable Hidden Nic Powersaving',
    description: 'Disable Network card related powersaving features for lower latency and more consistent network performance',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-rsc',
    title: 'Disable Rsc',
    description: 'Stops the NIC from merging incoming packets before sending them to the OS, preventing packet reordering',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'disable-tcp-security-profile',
    title: 'Disable TCP Security Profile',
    description: 'Prevents Windows from automatically applying per-profile TCP security policies, results in a leaner TCP stack',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'enable-direct-cache-access',
    title: 'Enable Direct Cache Access',
    description: 'Allows the NIC to prefetch incoming network data directly into the CPU\'s cache, minimizing memory latency',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'enable-task-offloading',
    title: 'Enable Task Offloading',
    description: 'Allows your network card to handle TCP and data processing tasks instead of the CPU, This frees up CPU',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'optimize-ipv4-networking',
    title: 'Optimize IPv4 Networking',
    description: 'Optimizes IPv4 networking by increasing ARP cache',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'optimize-mpp',
    title: 'Optimize Mpp',
    description: 'Simplifies TCP handling and slightly reduces latency by removing additional validation and processing steps',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'optimize-network-priority',
    title: 'Optimize Network Priority',
    description: 'Configures network service provider priorities (Local→Hosts→DNS→NetBT).',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'optimize-smb-lan-server-tweaks',
    title: 'Optimize SMB & Lan Server Tweaks',
    description: 'Disables SMB auto-disconnect, limits sessions, disables opportunistic locks, sets IRP stack size, and optimizes cache',
    warningLevel: 'none',
    isPremium: true
  },
  {
    id: 'optimize-socket-address',
    title: 'Optimize Socket Adress',
    description: 'Optimize socket address sizes to ensure low-latency routing and predictable packet delivery',
    warningLevel: 'none',
    isPremium: true
  }
];

export function getAllNetworkTweaks(): NetworkTweak[] {
  return networkTweaks;
}
