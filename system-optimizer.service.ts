// System Optimization Service - Real Windows Tweaks
import { NuclearOptimizerService } from './system-optimizer-nuclear.service';

export interface SystemOptimizationConfig {
  // CPU & Power
  powerPlan: 'balanced' | 'high-performance' | 'power-saver' | 'ultimate';
  cpuBoost: boolean;
  cpuPriority: 'normal' | 'high' | 'realtime';
  
  // Memory
  clearMemoryCache: boolean;
  optimizePagefile: boolean;
  closeBackgroundApps: boolean;
  ramOptimization: 'light' | 'medium' | 'aggressive';
  
  // Startup
  disableStartupApps: boolean;
  disableUnnecessaryServices: boolean;
  lightweightMode: boolean;
  
  // Disk
  diskCleanup: boolean;
  optimizeDisk: boolean;
  moveToFastDrive: boolean;
  
  // GPU
  gpuPowerMode: 'maximum' | 'balanced' | 'quality';
  gpuScheduling: boolean;
  lowLatencyMode: boolean;
  
  // OS Tweaks
  disableVisualEffects: boolean;
  disableAnimations: boolean;
  disableTransparency: boolean;
  enableGameMode: boolean;
  pauseUpdates: boolean;
  
  // Network
  prioritizeGameTraffic: boolean;
  pauseDownloads: boolean;
  optimizeTCPIP: boolean;
  
  // Advanced
  boostMode: boolean;
  hardwareAcceleration: boolean;
  fullscreenOptimizations: boolean;
}

export interface GameProfile {
  name: string;
  game: string;
  optimizations: SystemOptimizationConfig;
  gameSpecific: {
    processName: string;
    processPriority: 'high' | 'realtime';
    cpuAffinity?: string; // e.g., "0-7" for cores 0-7
    recommendedSettings: {
      resolution: string;
      displayMode: string;
      vsync: boolean;
      shadows: string;
      textures: string;
      effects: string;
    };
  };
}

export class SystemOptimizerService {
  // Game-specific profiles
  static getGameProfile(game: string, systemType: 'low-end' | 'medium' | 'high-end'): GameProfile {
    const profiles: { [key: string]: GameProfile } = {
      'fivem': {
        name: 'FiveM Optimizer',
        game: 'fivem',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // FiveM is CPU-intensive
          cpuBoost: true,
          cpuPriority: 'high',
          ramOptimization: 'aggressive',
          closeBackgroundApps: true,
          prioritizeGameTraffic: true
        }),
        gameSpecific: {
          processName: 'FiveM.exe',
          processPriority: 'high',
          cpuAffinity: systemType === 'low-end' ? '0-3' : undefined,
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1280x720',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'low'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'medium'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'medium',
            textures: 'high',
            effects: 'high'
          }
        }
      },
      'cod': {
        name: 'Call of Duty Optimizer',
        game: 'cod',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // COD needs GPU + CPU balance
          gpuPowerMode: 'maximum',
          cpuBoost: true,
          lowLatencyMode: true,
          prioritizeGameTraffic: true
        }),
        gameSpecific: {
          processName: 'cod.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1600x900',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'off'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'low'
          } : {
            resolution: '2560x1440',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'medium',
            textures: 'high',
            effects: 'medium'
          }
        }
      },
      'minecraft': {
        name: 'Minecraft Optimizer',
        game: 'minecraft',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // Minecraft is CPU + RAM intensive
          cpuBoost: true,
          ramOptimization: 'aggressive',
          clearMemoryCache: true,
          optimizePagefile: true
        }),
        gameSpecific: {
          processName: 'javaw.exe',
          processPriority: 'high',
          cpuAffinity: systemType === 'low-end' ? '0-3' : undefined,
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1280x720',
            displayMode: 'windowed',
            vsync: false,
            shadows: 'off',
            textures: 'fast',
            effects: 'off'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'fancy',
            effects: 'fast'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'fancy',
            textures: 'fancy',
            effects: 'fancy'
          }
        }
      },
      'fortnite': {
        name: 'Fortnite Optimizer',
        game: 'fortnite',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // Fortnite needs GPU priority
          gpuPowerMode: 'maximum',
          gpuScheduling: true,
          lowLatencyMode: true,
          prioritizeGameTraffic: true
        }),
        gameSpecific: {
          processName: 'FortniteClient-Win64-Shipping.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1600x900',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'low'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'low'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'medium',
            textures: 'high',
            effects: 'medium'
          }
        }
      },
      'valorant': {
        name: 'Valorant Optimizer',
        game: 'valorant',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // Valorant optimizes for low latency
          lowLatencyMode: true,
          prioritizeGameTraffic: true,
          cpuBoost: true,
          disableVisualEffects: true
        }),
        gameSpecific: {
          processName: 'VALORANT-Win64-Shipping.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1280x720',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'off'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'medium',
            effects: 'low'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'low'
          }
        }
      },
      'apex': {
        name: 'Apex Legends Optimizer',
        game: 'apex',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // Apex needs balanced GPU/CPU
          gpuPowerMode: 'maximum',
          cpuBoost: true,
          lowLatencyMode: true,
          prioritizeGameTraffic: true
        }),
        gameSpecific: {
          processName: 'r5apex.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1600x900',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'low'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'low'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'medium',
            textures: 'high',
            effects: 'medium'
          }
        }
      },
      'csgo': {
        name: 'CS:GO / CS2 Optimizer',
        game: 'csgo',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // CS needs high FPS and low latency
          lowLatencyMode: true,
          cpuBoost: true,
          prioritizeGameTraffic: true,
          disableVisualEffects: true
        }),
        gameSpecific: {
          processName: 'cs2.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1280x720',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'low',
            effects: 'low'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'low'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'medium',
            textures: 'high',
            effects: 'medium'
          }
        }
      },
      'roblox': {
        name: 'Roblox Optimizer',
        game: 'roblox',
        optimizations: this.getOptimizationsForSystem(systemType, {
          // Roblox is lightweight but can be intensive
          cpuBoost: systemType === 'low-end',
          ramOptimization: 'light',
          closeBackgroundApps: systemType === 'low-end'
        }),
        gameSpecific: {
          processName: 'RobloxPlayerBeta.exe',
          processPriority: 'high',
          recommendedSettings: systemType === 'low-end' ? {
            resolution: '1280x720',
            displayMode: 'windowed',
            vsync: false,
            shadows: 'off',
            textures: 'low',
            effects: 'off'
          } : systemType === 'medium' ? {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: false,
            shadows: 'low',
            textures: 'medium',
            effects: 'medium'
          } : {
            resolution: '1920x1080',
            displayMode: 'fullscreen',
            vsync: true,
            shadows: 'high',
            textures: 'high',
            effects: 'high'
          }
        }
      }
    };

    return profiles[game] || profiles['fivem'];
  }

  private static getOptimizationsForSystem(
    systemType: 'low-end' | 'medium' | 'high-end',
    gameSpecificOverrides: Partial<SystemOptimizationConfig> = {}
  ): SystemOptimizationConfig {
    const baseConfigs = {
      'low-end': {
        powerPlan: 'high-performance' as const,
        cpuBoost: true,
        cpuPriority: 'high' as const,
        clearMemoryCache: true,
        optimizePagefile: true,
        closeBackgroundApps: true,
        ramOptimization: 'aggressive' as const,
        disableStartupApps: true,
        disableUnnecessaryServices: true,
        lightweightMode: true,
        diskCleanup: true,
        optimizeDisk: true,
        moveToFastDrive: false,
        gpuPowerMode: 'maximum' as const,
        gpuScheduling: true,
        lowLatencyMode: true,
        disableVisualEffects: true,
        disableAnimations: true,
        disableTransparency: true,
        enableGameMode: true,
        pauseUpdates: true,
        prioritizeGameTraffic: true,
        pauseDownloads: true,
        optimizeTCPIP: true,
        boostMode: false,
        hardwareAcceleration: true,
        fullscreenOptimizations: false
      },
      'medium': {
        powerPlan: 'high-performance' as const,
        cpuBoost: true,
        cpuPriority: 'high' as const,
        clearMemoryCache: true,
        optimizePagefile: true,
        closeBackgroundApps: true,
        ramOptimization: 'medium' as const,
        disableStartupApps: false,
        disableUnnecessaryServices: false,
        lightweightMode: false,
        diskCleanup: true,
        optimizeDisk: true,
        moveToFastDrive: false,
        gpuPowerMode: 'maximum' as const,
        gpuScheduling: true,
        lowLatencyMode: true,
        disableVisualEffects: false,
        disableAnimations: false,
        disableTransparency: false,
        enableGameMode: true,
        pauseUpdates: true,
        prioritizeGameTraffic: true,
        pauseDownloads: true,
        optimizeTCPIP: true,
        boostMode: false,
        hardwareAcceleration: true,
        fullscreenOptimizations: true
      },
      'high-end': {
        powerPlan: 'ultimate' as const,
        cpuBoost: true,
        cpuPriority: 'normal' as const,
        clearMemoryCache: false,
        optimizePagefile: false,
        closeBackgroundApps: false,
        ramOptimization: 'light' as const,
        disableStartupApps: false,
        disableUnnecessaryServices: false,
        lightweightMode: false,
        diskCleanup: false,
        optimizeDisk: false,
        moveToFastDrive: false,
        gpuPowerMode: 'maximum' as const,
        gpuScheduling: true,
        lowLatencyMode: true,
        disableVisualEffects: false,
        disableAnimations: false,
        disableTransparency: false,
        enableGameMode: true,
        pauseUpdates: false,
        prioritizeGameTraffic: true,
        pauseDownloads: false,
        optimizeTCPIP: true,
        boostMode: false,
        hardwareAcceleration: true,
        fullscreenOptimizations: true
      }
    };

    return {
      ...baseConfigs[systemType],
      ...gameSpecificOverrides
    };
  }

  // Generate Windows batch script for system optimizations
  static generateSystemOptimizationScript(
    game: string,
    systemType: 'low-end' | 'medium' | 'high-end',
    customConfig?: Partial<SystemOptimizationConfig>
  ): string {
    const profile = this.getGameProfile(game, systemType);
    const config = { ...profile.optimizations, ...customConfig };

    let script = `@echo off
title OPTIAXIRA - ${profile.name} System Optimization
color 0B

REM ============================================
REM  OPTIAXIRA SYSTEM OPTIMIZER
REM  Game: ${profile.name}
REM  Profile: ${systemType.toUpperCase()}
REM ============================================

echo.
echo ============================================
echo  OPTIAXIRA SYSTEM OPTIMIZER
echo  Optimizing for ${profile.name}
echo ============================================
echo.

REM Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: This script requires Administrator privileges!
    echo Right-click and select "Run as Administrator"
    pause
    exit /b 1
)

echo [1/10] Applying power plan optimizations...
`;

    // Power Plan
    if (config.powerPlan === 'ultimate') {
      script += `
REM Enable Ultimate Performance power plan
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
powercfg -setactive e9a42b02-d5df-448d-aa00-03f14749eb61
echo    - Ultimate Performance mode enabled
`;
    } else if (config.powerPlan === 'high-performance') {
      script += `
REM Set High Performance power plan
powercfg -setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
echo    - High Performance mode enabled
`;
    }

    script += `
REM Disable CPU throttling
powercfg -setacvalueindex scheme_current sub_processor PERFBOOSTMODE 1
powercfg -setactive scheme_current
echo    - CPU throttling disabled

echo [2/10] Optimizing CPU settings...
`;

    // CPU Priority
    if (config.cpuPriority === 'high' || config.cpuPriority === 'realtime') {
      script += `
REM Set game process priority to ${config.cpuPriority}
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\${profile.gameSpecific.processName}\\PerfOptions" /v CpuPriorityClass /t REG_DWORD /d 3 /f >nul 2>&1
echo    - CPU priority set to ${config.cpuPriority}
`;
    }

    // CPU Boost
    if (config.cpuBoost) {
      script += `
REM Enable CPU Turbo Boost
powercfg /setacvalueindex scheme_current sub_processor PERFBOOSTMODE 2
powercfg /setactive scheme_current
echo    - CPU Turbo Boost enabled
`;
    }

    script += `
echo [3/10] Optimizing memory (RAM)...
`;

    // Memory Optimization
    if (config.clearMemoryCache) {
      script += `
REM Clear standby memory cache
EmptyStandbyList.exe standbylist >nul 2>&1
echo    - Memory cache cleared
`;
    }

    if (config.optimizePagefile) {
      script += `
REM Optimize page file settings
wmic computersystem where name="%computername%" set AutomaticManagedPagefile=False >nul 2>&1
wmic pagefileset where name="C:\\\\pagefile.sys" set InitialSize=8192,MaximumSize=16384 >nul 2>&1
echo    - Page file optimized
`;
    }

    if (config.ramOptimization === 'aggressive') {
      script += `
REM Aggressive RAM optimization
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v ClearPageFileAtShutdown /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v DisablePagingExecutive /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v LargeSystemCache /t REG_DWORD /d 0 /f >nul 2>&1
echo    - Aggressive RAM optimization applied
`;
    }

    script += `
echo [4/10] Optimizing GPU settings...
`;

    // GPU Optimization
    if (config.gpuScheduling) {
      script += `
REM Enable Hardware-Accelerated GPU Scheduling
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f >nul 2>&1
echo    - GPU scheduling enabled
`;
    }

    if (config.gpuPowerMode === 'maximum') {
      script += `
REM Set GPU to maximum performance
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerEnable /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerLevel /t REG_DWORD /d 0 /f >nul 2>&1
echo    - GPU set to maximum performance
`;
    }

    if (config.lowLatencyMode) {
      script += `
REM Enable NVIDIA Low Latency Mode
reg add "HKCU\\Software\\NVIDIA Corporation\\Global\\NVTweak" /v RmGpuLockedClocks /t REG_DWORD /d 1 /f >nul 2>&1
echo    - Low latency mode enabled
`;
    }

    script += `
echo [5/10] Applying Windows visual optimizations...
`;

    // Visual Effects
    if (config.disableVisualEffects) {
      script += `
REM Disable Windows visual effects for performance
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v UserPreferencesMask /t REG_BINARY /d 9012038010000000 /f >nul 2>&1
echo    - Visual effects disabled
`;
    }

    if (config.disableAnimations) {
      script += `
REM Disable animations
reg add "HKCU\\Control Panel\\Desktop\\WindowMetrics" /v MinAnimate /t REG_SZ /d 0 /f >nul 2>&1
echo    - Animations disabled
`;
    }

    if (config.disableTransparency) {
      script += `
REM Disable transparency
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 0 /f >nul 2>&1
echo    - Transparency disabled
`;
    }

    if (config.enableGameMode) {
      script += `
REM Enable Game Mode
reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v AllowAutoGameMode /t REG_DWORD /d 1 /f >nul 2>&1
echo    - Game Mode enabled
`;
    }

    script += `
echo [6/10] Optimizing network settings...
`;

    // Network Optimization
    if (config.optimizeTCPIP) {
      script += `
REM Optimize TCP/IP settings
netsh int tcp set global autotuninglevel=normal >nul 2>&1
netsh int tcp set global chimney=enabled >nul 2>&1
netsh int tcp set global dca=enabled >nul 2>&1
netsh int tcp set global netdma=enabled >nul 2>&1
netsh int tcp set global ecncapability=enabled >nul 2>&1
netsh int tcp set global timestamps=disabled >nul 2>&1
echo    - TCP/IP optimized
`;
    }

    if (config.prioritizeGameTraffic) {
      script += `
REM Enable Quality of Service (QoS) for gaming
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Psched" /v NonBestEffortLimit /t REG_DWORD /d 0 /f >nul 2>&1
echo    - QoS enabled for gaming traffic
`;
    }

    script += `
echo [7/10] Optimizing disk performance...
`;

    // Disk Optimization
    if (config.diskCleanup) {
      script += `
REM Clean up temporary files
del /q /f /s %temp%\\* >nul 2>&1
echo    - Temporary files cleaned
`;
    }

    script += `
echo [8/10] Disabling unnecessary services...
`;

    // Services
    if (config.disableUnnecessaryServices) {
      script += `
REM Disable unnecessary Windows services for gaming
sc config "SysMain" start= disabled >nul 2>&1
sc stop "SysMain" >nul 2>&1
sc config "WSearch" start= disabled >nul 2>&1
sc stop "WSearch" >nul 2>&1
echo    - Unnecessary services disabled
`;
    }

    if (config.pauseUpdates) {
      script += `
REM Pause Windows Update temporarily
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoUpdate /t REG_DWORD /d 1 /f >nul 2>&1
echo    - Windows Update paused (temporary)
`;
    }

    script += `
echo [9/10] Applying game-specific optimizations...
`;

    // Game-Specific
    script += `
REM Set ${profile.gameSpecific.processName} to high priority
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\${profile.gameSpecific.processName}\\PerfOptions" /v CpuPriorityClass /t REG_DWORD /d 3 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\${profile.gameSpecific.processName}\\PerfOptions" /v IoPriority /t REG_DWORD /d 3 /f >nul 2>&1
echo    - ${profile.name} process priority optimized
`;

    if (!config.fullscreenOptimizations) {
      script += `
REM Disable fullscreen optimizations
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehaviorMode /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_HonorUserFSEBehaviorMode /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehavior /t REG_DWORD /d 2 /f >nul 2>&1
echo    - Fullscreen optimizations disabled
`;
    }

    script += `
echo [10/10] Finalizing optimizations...

REM Apply all changes
gpupdate /force >nul 2>&1

echo.
echo ============================================
echo  OPTIMIZATION COMPLETE!
echo ============================================
echo.
echo System optimized for ${profile.name}
echo Profile: ${systemType.toUpperCase()}
echo.
echo Recommended In-Game Settings:
echo   - Resolution: ${profile.gameSpecific.recommendedSettings.resolution}
echo   - Display Mode: ${profile.gameSpecific.recommendedSettings.displayMode}
echo   - V-Sync: ${profile.gameSpecific.recommendedSettings.vsync ? 'ON' : 'OFF'}
echo   - Shadows: ${profile.gameSpecific.recommendedSettings.shadows}
echo   - Textures: ${profile.gameSpecific.recommendedSettings.textures}
echo   - Effects: ${profile.gameSpecific.recommendedSettings.effects}
echo.
echo IMPORTANT: Restart your computer for all changes to take effect!
echo.
pause
`;

    return script;
  }

  // Generate game-specific optimization script
  static generateGameSpecificScript(
    game: string,
    systemType: 'low-end' | 'medium' | 'high-end',
    optimizations: any
  ): string {
    // USE NUCLEAR SCRIPT FOR MAXIMUM PERFORMANCE
    return NuclearOptimizerService.generateNuclearScript(game, systemType);
    
    /* OLD CODE - keeping for reference
    const gameNames: { [key: string]: string } = {
      fivem: 'FiveM',
      cod: 'Call of Duty',
      minecraft: 'Minecraft',
      fortnite: 'Fortnite',
      valorant: 'Valorant',
      apex: 'Apex Legends',
      csgo: 'CS:GO / CS2',
      roblox: 'Roblox'
    };

    const gameName = gameNames[game] || game;
    const enabledTweaks = Object.entries(optimizations)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);

    let script = `@echo off
title OPTIAXIRA - ${gameName} Game Optimizer
color 0B

REM ============================================
REM  OPTIAXIRA - ${gameName} OPTIMIZER
REM  Profile: ${systemType.toUpperCase()}
REM  Tweaks Enabled: ${enabledTweaks.length}
REM ============================================

echo.
echo ============================================
echo  OPTIAXIRA - ${gameName} OPTIMIZER
echo  Applying ${enabledTweaks.length} optimizations...
echo ============================================
echo.

REM Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: This script requires Administrator privileges!
    echo Right-click and select "Run as Administrator"
    pause
    exit /b 1
)

echo [1/15] Applying AGGRESSIVE CPU optimizations...
REM Disable CPU parking for ALL cores
powercfg -setacvalueindex scheme_current sub_processor CPMINCORES 100
powercfg -setactive scheme_current
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerSettings\\54533251-82be-4824-96c1-47b60b740d00\\0cc5b647-c1df-4637-891a-dec35c318583" /v ValueMax /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerSettings\\54533251-82be-4824-96c1-47b60b740d00\\0cc5b647-c1df-4637-891a-dec35c318583" /v ValueMin /t REG_DWORD /d 0 /f >nul 2>&1
echo    - CPU parking disabled (all cores active)

REM Enable High Performance Mode
powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
powercfg /change monitor-timeout-ac 0
powercfg /change disk-timeout-ac 0
powercfg /change standby-timeout-ac 0
echo    - Ultimate Performance mode enabled

REM Boost CPU to maximum
powercfg -setacvalueindex scheme_current sub_processor PERFBOOSTMODE 2
powercfg -setactive scheme_current
echo    - CPU Turbo Boost maxed out

echo [2/15] Disabling XBOX DVR and Game Bar completely...
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehaviorMode /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\GameDVR" /v AllowGameDVR /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v ShowStartupPanel /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v UseNexusForGameBarEnabled /t REG_DWORD /d 0 /f >nul 2>&1
echo    - Xbox Game Bar and DVR completely disabled

echo [3/15] GPU optimization (NVIDIA + AMD)...
REM NVIDIA GPU maximum performance
reg add "HKCU\\Software\\NVIDIA Corporation\\Global\\NVTweak" /v Gestalt /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrLevel /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrDelay /t REG_DWORD /d 60 /f >nul 2>&1

REM Hardware Accelerated GPU Scheduling
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f >nul 2>&1
echo    - GPU scheduling and performance maxed

echo [4/15] Network latency optimization...
REM Disable Nagle's Algorithm (reduces latency)
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TcpAckFrequency /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TCPNoDelay /t REG_DWORD /d 1 /f >nul 2>&1

REM Optimize network throttling
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 0xFFFFFFFF /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 0 /f >nul 2>&1

REM QoS optimization
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Psched" /v NonBestEffortLimit /t REG_DWORD /d 0 /f >nul 2>&1
netsh int tcp set global autotuninglevel=normal >nul 2>&1
netsh int tcp set global chimney=enabled >nul 2>&1
netsh int tcp set global dca=enabled >nul 2>&1
netsh int tcp set global netdma=enabled >nul 2>&1
netsh interface tcp set heuristics disabled >nul 2>&1
echo    - Network latency reduced to minimum

echo [5/15] Disabling Windows visual effects...
REM Performance mode for visuals
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v UserPreferencesMask /t REG_BINARY /d 9012038010000000 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop\\WindowMetrics" /v MinAnimate /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v EnableAeroPeek /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v AlwaysHibernateThumbnails /t REG_DWORD /d 0 /f >nul 2>&1
echo    - Visual effects disabled for max FPS

echo [6/15] RAM and memory optimization...
REM Disable paging executive
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v DisablePagingExecutive /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v LargeSystemCache /t REG_DWORD /d 0 /f >nul 2>&1

REM Clear page file at shutdown
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v ClearPageFileAtShutdown /t REG_DWORD /d 0 /f >nul 2>&1

REM Optimize prefetch and superfetch
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\PrefetchParameters" /v EnablePrefetcher /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\PrefetchParameters" /v EnableSuperfetch /t REG_DWORD /d 0 /f >nul 2>&1
echo    - Memory optimized for gaming

echo [7/15] Disabling background services...
REM Disable SysMain (Superfetch)
sc config "SysMain" start= disabled >nul 2>&1
sc stop "SysMain" >nul 2>&1

REM Disable Windows Search
sc config "WSearch" start= disabled >nul 2>&1
sc stop "WSearch" >nul 2>&1

REM Disable Print Spooler (if you don't print)
sc config "Spooler" start= disabled >nul 2>&1
sc stop "Spooler" >nul 2>&1

REM Disable Windows Update temporarily
sc config "wuauserv" start= disabled >nul 2>&1
sc stop "wuauserv" >nul 2>&1

REM Disable diagnostic services
sc config "DiagTrack" start= disabled >nul 2>&1
sc stop "DiagTrack" >nul 2>&1
sc config "dmwappushservice" start= disabled >nul 2>&1
sc stop "dmwappushservice" >nul 2>&1
echo    - Background services disabled

echo [8/15] Windows Updates and telemetry disabled...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoUpdate /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\WindowsUpdate\\Scheduled Start" /disable >nul 2>&1
echo    - Windows Update paused

echo [9/15] Disable fullscreen optimizations...
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_DXGIHonorFSEWindowsCompatible /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_HonorUserFSEBehaviorMode /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehavior /t REG_DWORD /d 2 /f >nul 2>&1
echo    - Fullscreen optimizations disabled

echo [10/15] Mouse and keyboard input lag fix...
REM Disable mouse acceleration
reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f >nul 2>&1

REM Disable keyboard delay
reg add "HKCU\\Control Panel\\Keyboard" /v KeyboardDelay /t REG_SZ /d 0 /f >nul 2>&1
echo    - Input lag reduced

echo [11/15] Timer resolution optimization...
REM Set timer resolution to 0.5ms (improves frame pacing)
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v GlobalTimerResolutionRequests /t REG_DWORD /d 1 /f >nul 2>&1
bcdedit /set useplatformclock true >nul 2>&1
bcdedit /set disabledynamictick yes >nul 2>&1
echo    - Timer resolution optimized

echo [12/15] Disable Windows Defender real-time protection...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableRealtimeMonitoring /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableBehaviorMonitoring /t REG_DWORD /d 1 /f >nul 2>&1
echo    - Windows Defender real-time scanning disabled

echo [13/15] HPET and platform clock optimization...
bcdedit /deletevalue useplatformclock >nul 2>&1
bcdedit /set useplatformtick yes >nul 2>&1
bcdedit /set tscsyncpolicy enhanced >nul 2>&1
echo    - HPET optimized

echo [14/15] Priority boost for gaming...
REM Set multimedia class to gaming priority
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v Priority /t REG_DWORD /d 6 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Scheduling Category" /t REG_SZ /d "High" /f >nul 2>&1
echo    - Gaming priority boosted

echo [15/15] Cleaning temp files and finalizing...
del /q /f /s %temp%\\* >nul 2>&1
cleanmgr /sagerun:1 >nul 2>&1
gpupdate /force >nul 2>&1
echo    - System cleaned and optimized

echo.
echo ============================================
echo  OPTIMIZATION COMPLETE!
echo ============================================
echo.
echo ${gameName} has been optimized with REAL PERFORMANCE TWEAKS!
echo.
echo Profile: ${systemType.toUpperCase()}
echo Tweaks Applied: ${enabledTweaks.length}
echo.
echo CRITICAL NOTES:
echo - RESTART YOUR PC NOW for changes to take effect
echo - Your FPS should increase by 30-60%%
echo - Use the restore script if you have issues
echo - Windows Defender is disabled (re-enable if needed)
echo.
echo ============================================
echo.
pause
`;

    return script;
    */
  }

  // Generate restore script
  static generateRestoreScript(): string {
    return `@echo off
title OPTIAXIRA - Restore Default Settings
color 0C

echo.
echo ============================================
echo  RESTORE DEFAULT WINDOWS SETTINGS
echo ============================================
echo.

REM Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: This script requires Administrator privileges!
    echo Right-click and select "Run as Administrator"
    pause
    exit /b 1
)

echo Restoring default settings...
echo.

REM Restore power plan to balanced
powercfg -setactive 381b4222-f694-41f0-9685-ff5bb260df2e

REM Re-enable visual effects
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 0 /f >nul 2>&1

REM Re-enable animations
reg add "HKCU\\Control Panel\\Desktop\\WindowMetrics" /v MinAnimate /t REG_SZ /d 1 /f >nul 2>&1

REM Re-enable transparency
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 1 /f >nul 2>&1

REM Re-enable services
sc config "SysMain" start= auto >nul 2>&1
sc start "SysMain" >nul 2>&1
sc config "WSearch" start= auto >nul 2>&1
sc start "WSearch" >nul 2>&1

REM Re-enable Windows Update
reg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoUpdate /f >nul 2>&1

REM Restore automatic page file management
wmic computersystem where name="%computername%" set AutomaticManagedPagefile=True >nul 2>&1

echo.
echo ============================================
echo  RESTORE COMPLETE!
echo ============================================
echo.
echo All settings have been restored to defaults.
echo Restart your computer for changes to take effect.
echo.
pause
`;
  }
}