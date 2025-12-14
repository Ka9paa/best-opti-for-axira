export interface GPUTweak {
  id: string;
  title: string;
  description: string;
  warningLevel: 'none' | 'warning';
  premiumTier: 'none' | 'CHECKUP' | 'FOUNDATION' | 'ELITE';
}

export const gpuTweaks: GPUTweak[] = [
  {
    id: 'disable-geforce-driver-update',
    title: 'Disable Geforce Driver Update',
    description: 'Prevents GeForce Experience from showing update notifications and checking for new drivers automatically.',
    warningLevel: 'none',
    premiumTier: 'none'
  },
  {
    id: 'disable-hdcp',
    title: 'Disable HDCP',
    description: 'Removes HDCP (DRM) enforcement to eliminate handshake delays and reduce input lag in some scenarios.',
    warningLevel: 'none',
    premiumTier: 'CHECKUP'
  },
  {
    id: 'disable-nvidia-disable-logging',
    title: 'Disable NVIDIA Disable Logging',
    description: 'Stops driver warning, error, and event logging to reduce disk writes and improve background performance.',
    warningLevel: 'none',
    premiumTier: 'CHECKUP'
  },
  {
    id: 'disable-nvidia-dma-remapping',
    title: 'Disable NVIDIA DMA Remapping',
    description: 'Disables DMA remapping to reduce memory translation overhead. Minor latency improvement.',
    warningLevel: 'none',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'disable-nvidia-uvm',
    title: 'Disable NVIDIA Uvm',
    description: 'Disables Unified Virtual Memory driver. Reduces overhead for gaming but breaks CUDA applications.',
    warningLevel: 'warning',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'force-contiguous-memory',
    title: 'Force Contiguous Memory Allocation',
    description: 'Prioritizes contiguous system memory allocation to reduce fragmentation and improve frame pacing.',
    warningLevel: 'none',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'optimize-gpu-idle-thresholds',
    title: 'Optimize GPU Idle Thresholds',
    description: 'Keeps GPU engines and memory controllers active longer before power-saving, eliminating wake-up delays.',
    warningLevel: 'none',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'optimize-memory-latency',
    title: 'Optimize Memory Latency Settings',
    description: 'Reduces GPU deep sleep entry latency to minimize wake-up delays from idle states for faster response.',
    warningLevel: 'none',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'optimize-direct-flip-vrr',
    title: 'Optimize NVIDIA Direct Flip & VRR',
    description: 'Minimizes timing margins for Direct Flip and VRR (G-SYNC/FreeSync), reducing display latency.',
    warningLevel: 'none',
    premiumTier: 'FOUNDATION'
  },
  {
    id: 'optimize-frame-scheduling',
    title: 'Optimize NVIDIA Frame Scheduling',
    description: 'Tunes GPU frame scheduling parameters to minimize frame time variance and reduce stuttering.',
    warningLevel: 'none',
    premiumTier: 'none'
  },
  {
    id: 'optimize-geforce-experience',
    title: 'Optimize NVIDIA Geforce Experience',
    description: 'Removes NVIDIA virtual audio devices and telemetry services. Disables automatic updates and overlays.',
    warningLevel: 'warning',
    premiumTier: 'none'
  },
  {
    id: 'disable-nvidia-aspm',
    title: 'Disable NVIDIA Aspm',
    description: 'Disables PCIe Active State Power Management to prevent GPU link from entering low-power states.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-display-power-saving',
    title: 'Disable NVIDIA Display Power Saving',
    description: 'Prevents GPU from downclocking display pipelines to save power, ensuring maximum display responsiveness.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-nvidia-ecc',
    title: 'Disable NVIDIA ECC',
    description: 'Disables ecc to reduce idle power draw and eliminate the extra memory-checking overhead.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-gc5-caching',
    title: 'Disable NVIDIA Gc5 Caching',
    description: 'Disables GC5 engine caching and power-down behavior to keep GPU engines immediately responsive.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-misc-power',
    title: 'Disable NVIDIA Misc Power',
    description: 'Disables unused low-level power features for more consistent performance stability.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-thermal-throttle',
    title: 'Disable NVIDIA Thermal Throttle',
    description: 'Disables software thermal throttling thresholds for higher sustained performance.',
    warningLevel: 'none',
    premiumTier: 'ELITE'
  },
  {
    id: 'disable-tcc',
    title: 'Disable TCC',
    description: "Ensure's the GPU runs in standard graphics mode for better compatibility with gaming and multimedia.",
    warningLevel: 'none',
    premiumTier: 'ELITE'
  }
];

export function getAllGPUTweaks(): GPUTweak[] {
  return gpuTweaks;
}
