// System Specs Detection Service
export interface SystemSpecs {
  cpu: string;
  gpu: string;
  ram: string;
  os: string;
  screen: string;
  browser: string;
  cores: number;
  threads: number;
  platform: string;
  userAgent: string;
}

export class SystemSpecsService {
  static async getSystemSpecs(): Promise<SystemSpecs> {
    // Get basic info from navigator
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    // Detect CPU cores
    const cores = navigator.hardwareConcurrency || 4;
    const threads = cores; // Logical processors

    // Detect RAM (approximate from device memory API if available)
    let ram = 'Unknown';
    if ('deviceMemory' in navigator) {
      const deviceMemory = (navigator as any).deviceMemory;
      ram = `${deviceMemory} GB`;
    } else {
      // Estimate based on performance
      ram = '8-16 GB (estimated)';
    }

    // Detect OS
    let os = 'Unknown OS';
    if (userAgent.includes('Windows NT 10.0')) os = 'Windows 10/11';
    else if (userAgent.includes('Windows NT 6.3')) os = 'Windows 8.1';
    else if (userAgent.includes('Windows NT 6.2')) os = 'Windows 8';
    else if (userAgent.includes('Windows NT 6.1')) os = 'Windows 7';
    else if (userAgent.includes('Mac OS X')) {
      const version = userAgent.match(/Mac OS X ([0-9_]+)/);
      os = version ? `macOS ${version[1].replace(/_/g, '.')}` : 'macOS';
    } else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';

    // Detect CPU
    let cpu = 'Unknown CPU';
    if (platform.includes('Win')) {
      cpu = `${cores}-Core CPU (Intel/AMD)`;
    } else if (platform.includes('Mac')) {
      if (userAgent.includes('ARM')) {
        cpu = `Apple M1/M2 (${cores} cores)`;
      } else {
        cpu = `Intel CPU (${cores} cores)`;
      }
    } else if (platform.includes('Linux')) {
      cpu = `${cores}-Core CPU`;
    }

    // Detect GPU using WebGL
    let gpu = 'Unknown GPU';
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (gl) {
        const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          gpu = renderer;
          
          // Clean up GPU name
          if (gpu.includes('ANGLE')) {
            gpu = gpu.replace('ANGLE (', '').replace(')', '').replace(' Direct3D11 vs_5_0 ps_5_0', '');
          }
        }
      }
    } catch (e) {
      gpu = 'GPU detection blocked';
    }

    // Detect Screen Resolution
    const screen = `${window.screen.width}x${window.screen.height}`;

    // Detect Browser
    let browser = 'Unknown Browser';
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome';
    else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Edg')) browser = 'Edge';
    else if (userAgent.includes('Opera') || userAgent.includes('OPR')) browser = 'Opera';

    return {
      cpu,
      gpu,
      ram,
      os,
      screen,
      browser,
      cores,
      threads,
      platform,
      userAgent
    };
  }

  // Determine system tier based on specs
  static getSystemTier(specs: SystemSpecs): 'low-end' | 'medium' | 'high-end' {
    const cores = specs.cores;
    const gpuLower = specs.gpu.toLowerCase();

    // Check for high-end GPUs
    const highEndGPUs = ['rtx 40', 'rtx 30', 'rtx 20', 'rx 7900', 'rx 6900', 'rx 6800', 'apple m2 pro', 'apple m2 max'];
    const mediumGPUs = ['gtx 16', 'gtx 10', 'rx 6600', 'rx 5700', 'apple m1', 'apple m2'];
    
    const isHighEnd = highEndGPUs.some(gpu => gpuLower.includes(gpu)) || cores >= 12;
    const isMedium = mediumGPUs.some(gpu => gpuLower.includes(gpu)) || (cores >= 6 && cores < 12);

    if (isHighEnd) return 'high-end';
    if (isMedium) return 'medium';
    return 'low-end';
  }

  // Get performance score (0-100)
  static getPerformanceScore(specs: SystemSpecs): number {
    let score = 50; // Base score

    // CPU score (max 25 points)
    const cores = specs.cores;
    if (cores >= 16) score += 25;
    else if (cores >= 12) score += 20;
    else if (cores >= 8) score += 15;
    else if (cores >= 6) score += 10;
    else if (cores >= 4) score += 5;

    // GPU score (max 25 points)
    const gpuLower = specs.gpu.toLowerCase();
    if (gpuLower.includes('rtx 40')) score += 25;
    else if (gpuLower.includes('rtx 30') || gpuLower.includes('rx 7900')) score += 22;
    else if (gpuLower.includes('rtx 20') || gpuLower.includes('rx 6900') || gpuLower.includes('rx 6800')) score += 18;
    else if (gpuLower.includes('gtx 16') || gpuLower.includes('rx 6600')) score += 14;
    else if (gpuLower.includes('gtx 10') || gpuLower.includes('rx 5')) score += 10;
    else if (gpuLower.includes('intel') && gpuLower.includes('uhd')) score += 3;
    else score += 8; // Unknown GPU

    return Math.min(100, score);
  }

  // Save specs to localStorage
  static saveSpecs(specs: SystemSpecs): void {
    localStorage.setItem('axira_system_specs', JSON.stringify(specs));
    localStorage.setItem('axira_specs_timestamp', Date.now().toString());
  }

  // Load specs from localStorage (if recent)
  static loadSpecs(): SystemSpecs | null {
    try {
      const specs = localStorage.getItem('axira_system_specs');
      const timestamp = localStorage.getItem('axira_specs_timestamp');
      
      if (specs && timestamp) {
        const age = Date.now() - parseInt(timestamp);
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        
        if (age < maxAge) {
          return JSON.parse(specs);
        }
      }
    } catch (e) {
      console.error('Failed to load specs:', e);
    }
    return null;
  }
}
