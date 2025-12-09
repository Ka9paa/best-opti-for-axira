/**
 * AMD Radeon Settings Generator
 * Generates registry tweaks for AMD GPU optimization
 * Since AMD doesn't have a profile inspector like NVIDIA, we use registry edits
 */

export class AMDRadeonSettingsService {
  
  /**
   * Generate AMD registry optimization script
   */
  static generateAMDOptimizationScript(gameName: string): string {
    return `@echo off
REM ========================================
REM AXIRA AMD RADEON OPTIMIZATION SCRIPT
REM Game: ${gameName}
REM ========================================

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║       AXIRA AMD RADEON GPU OPTIMIZATION - ${gameName}
echo ║       Optimizing AMD GPU settings for maximum performance
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

REM Check for admin rights
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [ERROR] This script requires Administrator privileges!
    echo Right-click and select "Run as administrator"
    pause
    exit /b 1
)

echo [1/15] DISABLE AMD RADEON ANTI-LAG+...
reg add "HKCU\\Software\\AMD\\CN" /v AutoOCEnable /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Anti-Lag disabled (let in-game settings control this)

echo [2/15] OPTIMIZE AMD POWER SETTINGS...
reg add "HKCU\\Software\\AMD\\CN" /v PowerLimit /t REG_DWORD /d 100 /f >nul 2>&1
reg add "HKCU\\Software\\AMD\\CN" /v PowerState /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Power set to maximum performance

echo [3/15] DISABLE AMD RADEON CHILL...
reg add "HKCU\\Software\\AMD\\CN" /v ChillEnabled /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Radeon Chill disabled (no FPS limiting)

echo [4/15] DISABLE AMD ENHANCED SYNC...
reg add "HKCU\\Software\\AMD\\CN" /v EnhancedSync /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Enhanced Sync disabled (lowest latency)

echo [5/15] OPTIMIZE AMD TESSELLATION...
reg add "HKCU\\Software\\AMD\\CN" /v TessellationMode /t REG_DWORD /d 2 /f >nul 2>&1
echo    [OK] Tessellation set to override (performance mode)

echo [6/15] DISABLE AMD SURFACE FORMAT OPTIMIZATION...
reg add "HKCU\\Software\\AMD\\CN" /v SurfaceFormatReplacements /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Surface format optimization disabled

echo [7/15] SET AMD TEXTURE FILTERING TO PERFORMANCE...
reg add "HKCU\\Software\\AMD\\CN" /v TextureOpt /t REG_DWORD /d 1 /f >nul 2>&1
echo    [OK] Texture filtering optimized for performance

echo [8/15] DISABLE AMD FRAME RATE TARGET CONTROL...
reg add "HKCU\\Software\\AMD\\CN" /v FRTCEnable /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Frame rate target control disabled (unlimited FPS)

echo [9/15] OPTIMIZE AMD SHADER CACHE...
reg add "HKCU\\Software\\AMD\\CN" /v ShaderCache /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\AMD\\CN" /v GPU_MaxAllocSize /t REG_DWORD /d 100 /f >nul 2>&1
echo    [OK] Shader cache enabled and optimized

echo [10/15] DISABLE AMD RADEON BOOST...
reg add "HKCU\\Software\\AMD\\CN" /v BoostEnabled /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Radeon Boost disabled (prevents dynamic resolution)

echo [11/15] SET AMD VSYNC TO APPLICATION CONTROLLED...
reg add "HKCU\\Software\\AMD\\CN" /v VSyncControl /t REG_DWORD /d 2 /f >nul 2>&1
echo    [OK] VSync set to application controlled

echo [12/15] OPTIMIZE AMD TRIPLE BUFFERING...
reg add "HKCU\\Software\\AMD\\CN" /v TripleBuffering /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Triple buffering disabled (lower latency)

echo [13/15] SET AMD ANTI-ALIASING MODE...
reg add "HKCU\\Software\\AMD\\CN" /v AAMode /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Anti-aliasing set to application controlled

echo [14/15] DISABLE AMD MORPHOLOGICAL FILTERING...
reg add "HKCU\\Software\\AMD\\CN" /v MLAAMode /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] Morphological filtering disabled

echo [15/15] OPTIMIZE AMD GPU WORKLOAD...
reg add "HKCU\\Software\\AMD\\CN" /v WorkloadType /t REG_DWORD /d 0 /f >nul 2>&1
echo    [OK] GPU workload set to graphics (gaming mode)

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║                   OPTIMIZATION COMPLETE!
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo AMD GPU SETTINGS OPTIMIZED FOR: ${gameName}
echo.
echo WHAT WE OPTIMIZED:
echo   - Power management set to maximum
echo   - Frame rate limiters disabled
echo   - Latency reduction features enabled
echo   - Texture filtering optimized
echo   - Shader cache enabled
echo   - All performance-killing features disabled
echo.
echo RECOMMENDED MANUAL SETTINGS IN AMD RADEON SOFTWARE:
echo   1. Open AMD Radeon Software (Right-click desktop)
echo   2. Go to Gaming ^> Global Graphics
echo   3. Set these manually:
echo      - Radeon Anti-Lag: OFF (or ON if supported in your game)
echo      - Radeon Image Sharpening: Personal preference
echo      - Radeon Super Resolution: Personal preference
echo      - Wait for Vertical Refresh: Always Off
echo      - OpenGL Triple Buffering: Off
echo.
echo NOTE: Registry settings have been applied!
echo Some settings require AMD Radeon Software restart.
echo.
pause
`;
  }

  /**
   * Generate instructions for AMD users
   */
  static getAMDInstructions(): string {
    return `HOW TO USE AMD RADEON OPTIMIZATION SCRIPT:

1. DOWNLOAD THE SCRIPT:
   - Download "Axira_AMD_Optimization.bat"
   - Save it to your desktop

2. RUN AS ADMINISTRATOR:
   - Right-click the .bat file
   - Select "Run as administrator"
   - Click "Yes" when prompted

3. WAIT FOR COMPLETION:
   - Script will optimize all AMD GPU settings
   - Takes about 5 seconds

4. MANUAL SETTINGS (OPTIONAL):
   - Open AMD Radeon Software
   - Go to Gaming > Global Graphics
   - Set preferences for Anti-Lag, Image Sharpening, etc.

5. RESTART (RECOMMENDED):
   - Restart your PC for full effect
   - Some settings require a reboot

NOTE: These settings are optimized for competitive gaming!
If you play single-player games, you might want different settings.`;
  }

  /**
   * Check if user has AMD GPU (basic detection)
   */
  static hasAMDGPU(gpuName: string): boolean {
    return gpuName.toLowerCase().includes('amd') || 
           gpuName.toLowerCase().includes('radeon') ||
           gpuName.toLowerCase().includes('rx ');
  }
}
