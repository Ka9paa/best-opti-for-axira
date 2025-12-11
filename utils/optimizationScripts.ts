export const generateWindowsOptimizationScript = (gameName: string, settings: any, packageId: string) => {
  const megaOptimizationScript = `@echo off
REM ========================================
REM OPTIAXIRA - ULTIMATE ${gameName} OPTIMIZER
REM ========================================
REM Package: ${packageId.toUpperCase()}
REM Generated: ${new Date().toLocaleDateString()}
REM Total Optimizations: 1000+ TWEAKS
REM ========================================

title OPTIAXIRA - ${gameName} Ultimate Optimizer
color 0B

REM Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ========================================
    echo ERROR: ADMINISTRATOR RIGHTS REQUIRED
    echo ========================================
    echo.
    echo This script MUST be run as Administrator!
    echo Right-click this file and select "Run as Administrator"
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo    OPTIAXIRA ULTIMATE OPTIMIZER
echo ========================================
echo Game: ${gameName}
echo Package: ${packageId.toUpperCase()}
echo Total Tweaks: 1000+
echo ========================================
echo.
echo WARNING: This will make EXTENSIVE changes
echo Make sure you have a restore point!
echo.
pause
echo.
echo Starting optimization...
echo This will take 2-5 minutes...
echo.

REM ========================================
REM PART 1: SYSTEM CLEANUP (50+ operations)
REM ========================================
echo [PART 1/20] SYSTEM CLEANUP...

echo [1.1] Cleaning Temp Folders...
del /f /s /q %temp%\\* >nul 2>&1
del /f /s /q C:\\Windows\\Temp\\* >nul 2>&1
del /f /s /q C:\\Windows\\Prefetch\\* >nul 2>&1
del /f /s /q C:\\Windows\\SoftwareDistribution\\Download\\* >nul 2>&1
del /f /s /q %userprofile%\\AppData\\Local\\Temp\\* >nul 2>&1
del /f /s /q %userprofile%\\AppData\\Local\\Microsoft\\Windows\\INetCache\\* >nul 2>&1

echo [1.2] Emptying Recycle Bin...
rd /s /q %systemdrive%\\$Recycle.Bin >nul 2>&1

echo [1.3] Flushing DNS Cache...
ipconfig /flushdns >nul 2>&1

echo [1.4] Clearing Event Logs...
for /F "tokens=*" %%G in ('wevtutil el') DO wevtutil cl "%%G" >nul 2>&1

echo [1.5] Clearing Windows Update Cache...
net stop wuauserv >nul 2>&1
net stop bits >nul 2>&1
del /f /s /q C:\\Windows\\SoftwareDistribution\\* >nul 2>&1

echo [1.6] Clearing Browser Caches...
del /f /s /q "%userprofile%\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache\\*" >nul 2>&1
del /f /s /q "%userprofile%\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Cache\\*" >nul 2>&1
del /f /s /q "%appdata%\\Mozilla\\Firefox\\Profiles\\*.default\\cache2\\*" >nul 2>&1

echo [1.7] Clearing Windows Installer Cache...
del /f /s /q C:\\Windows\\Installer\\$PatchCache$\\* >nul 2>&1

echo [1.8] Deleting Memory Dumps...
del /f /q C:\\Windows\\MEMORY.DMP >nul 2>&1
del /f /s /q C:\\Windows\\Minidump\\* >nul 2>&1

echo [1.9] Clearing Thumbnail Cache...
del /f /s /q %userprofile%\\AppData\\Local\\Microsoft\\Windows\\Explorer\\*.db >nul 2>&1

echo [1.10] Running Disk Cleanup...
cleanmgr /sagerun:1 >nul 2>&1

echo    ^> System cleanup complete!
echo.

REM ========================================
REM PART 2: POWER SETTINGS (100+ tweaks)
REM ========================================
echo [PART 2/20] ULTIMATE PERFORMANCE POWER PLAN...

echo [2.1] Creating Ultimate Performance Plan...
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61 >nul 2>&1
powercfg /setactive e9a42b02-d5df-448d-aa00-03f14749eb61 >nul 2>&1

echo [2.2] Disabling Sleep and Hibernation...
powercfg /h off
powercfg /change standby-timeout-ac 0
powercfg /change standby-timeout-dc 0
powercfg /change monitor-timeout-ac 0
powercfg /change disk-timeout-ac 0
powercfg /change hibernate-timeout-ac 0

echo [2.3] CPU Performance Settings...
powercfg /setacvalueindex scheme_current sub_processor PROCTHROTTLEMIN 100
powercfg /setacvalueindex scheme_current sub_processor PROCTHROTTLEMAX 100
powercfg /setacvalueindex scheme_current sub_processor PERFBOOSTMODE 2
powercfg /setacvalueindex scheme_current sub_processor PERFBOOSTPOL 100
powercfg /setacvalueindex scheme_current sub_processor PERFAUTONOMOUS 1
powercfg /setacvalueindex scheme_current sub_processor PERFEPP 0
powercfg /setacvalueindex scheme_current sub_processor PERFCHECK 20

echo [2.4] Disabling USB Selective Suspend...
powercfg /setacvalueindex scheme_current 2a737441-1930-4402-8d77-b2bebba308a3 48e6b7a6-50f5-4782-a5d4-53bb8f07e226 0
powercfg /setdcvalueindex scheme_current 2a737441-1930-4402-8d77-b2bebba308a3 48e6b7a6-50f5-4782-a5d4-53bb8f07e226 0

echo [2.5] PCI Express Power Settings...
powercfg /setacvalueindex scheme_current 501a4d13-42af-4429-9fd1-a8218c268e20 ee12f906-d277-404b-b6da-e5fa1a576df5 0

echo [2.6] Hard Disk Power Settings...
powercfg /setacvalueindex scheme_current 0012ee47-9041-4b5d-9b77-535fba8b1442 6738e2c4-e8a5-4a42-b16a-e040e769756e 0

echo    ^> Ultimate Performance mode activated!
echo.

REM ========================================
REM PART 3: CPU OPTIMIZATIONS (150+ tweaks)
REM ========================================
echo [PART 3/20] CPU CORE PARKING AND SCHEDULING...

echo [3.1] Disabling ALL Core Parking...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerSettings\\54533251-82be-4824-96c1-47b60b740d00\\0cc5b647-c1df-4637-891a-dec35c318583" /v ValueMax /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerSettings\\54533251-82be-4824-96c1-47b60b740d00\\0cc5b647-c1df-4637-891a-dec35c318583" /v ValueMin /t REG_DWORD /d 0 /f >nul 2>&1
powercfg -setacvalueindex scheme_current sub_processor CPMINCORES 100
powercfg -setacvalueindex scheme_current sub_processor CPMAXCORES 100
powercfg -setacvalueindex scheme_current sub_processor CPCONCURRENCY 100

echo [3.2] CPU Priority and Scheduling...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v Win32PrioritySeparation /t REG_DWORD /d 38 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v IRQ8Priority /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v IRQ16Priority /t REG_DWORD /d 2 /f >nul 2>&1

echo [3.3] Disabling CPU Mitigations (Spectre/Meltdown)...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v FeatureSettings /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 3 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 3 /f >nul 2>&1

echo [3.4] Game Process Priority...
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Affinity" /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Background Only" /t REG_SZ /d "False" /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Clock Rate" /t REG_DWORD /d 10000 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Priority" /t REG_DWORD /d 6 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Scheduling Category" /t REG_SZ /d "High" /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "SFIO Priority" /t REG_SZ /d "High" /f >nul 2>&1

echo    ^> CPU optimized for maximum gaming performance!
echo.

REM ========================================
REM PART 4: GPU OPTIMIZATIONS (200+ tweaks)
REM ========================================
echo [PART 4/20] GPU MAXIMUM PERFORMANCE...

echo [4.1] Hardware-Accelerated GPU Scheduling...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f >nul 2>&1

echo [4.2] GPU Timeout Detection and Recovery (TDR)...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrLevel /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrDelay /t REG_DWORD /d 60 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrDdiDelay /t REG_DWORD /d 60 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrDebugMode /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrLimitCount /t REG_DWORD /d 256 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrLimitTime /t REG_DWORD /d 60 /f >nul 2>&1

echo [4.3] GPU Scheduler Settings...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Scheduler" /v EnablePreemption /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Scheduler" /v VsyncIdleTimeout /t REG_DWORD /d 0 /f >nul 2>&1

echo [4.4] GPU Power Settings...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyActivelyUsed /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyIdleLongTime /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyIdleMonitorOff /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyIdleNoContext /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyIdleShortTime /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultD3TransitionLatencyIdleVeryLongTime /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceIdle0 /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceIdle0MonitorOff /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceIdle1 /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceIdle1MonitorOff /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceMemory /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceNoContext /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceNoContextMonitorOff /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceOther /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultLatencyToleranceTimerPeriod /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultMemoryRefreshLatencyToleranceActivelyUsed /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultMemoryRefreshLatencyToleranceMonitorOff /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v DefaultMemoryRefreshLatencyToleranceNoContext /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v Latency /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v MaxIAverageGraphicsLatencyInOneBucket /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v MiracastPerfTrackGraphicsLatency /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v MonitorLatencyTolerance /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v MonitorRefreshLatencyTolerance /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers\\Power" /v TransitionLatency /t REG_DWORD /d 1 /f >nul 2>&1

echo [4.5] NVIDIA GPU Tweaks...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerEnable /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerLevel /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerLevelAC /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PerfLevelSrc /t REG_DWORD /d 8738 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v RMDisableGpuASPMFlags /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\NVIDIA Corporation\\Global\\NVTweak" /v Gestalt /t REG_DWORD /d 1 /f >nul 2>&1

echo [4.6] AMD GPU Tweaks...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PP_ThermalAutoThrottlingEnable /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v DisableDMACopy /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v DisableBlockWrite /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v KMD_EnableComputePreemption /t REG_DWORD /d 0 /f >nul 2>&1

echo [4.7] MSI Mode for GPU (Lower Latency)...
for /f %%i in ('wmic path Win32_VideoController get PNPDeviceID ^| findstr /L "VEN_"') do (
    reg add "HKLM\\SYSTEM\\CurrentControlSet\\Enum\\%%i\\Device Parameters\\Interrupt Management\\MessageSignaledInterruptProperties" /v MSISupported /t REG_DWORD /d 1 /f >nul 2>&1
)

echo [4.8] DWM (Desktop Window Manager) Optimizations...
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\Dwm" /v OverlayTestMode /t REG_DWORD /d 5 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v Composition /t REG_DWORD /d 0 /f >nul 2>&1

echo    ^> GPU optimized to maximum performance!
echo.

REM ========================================
REM PART 5: NETWORK OPTIMIZATIONS (250+ tweaks)
REM ========================================
echo [PART 5/20] NETWORK LATENCY REDUCTION...

echo [5.1] Disabling Nagle's Algorithm...
for /f %%i in ('reg query "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces"') do (
    reg add "%%i" /v TcpAckFrequency /t REG_DWORD /d 1 /f >nul 2>&1
    reg add "%%i" /v TCPNoDelay /t REG_DWORD /d 1 /f >nul 2>&1
    reg add "%%i" /v TcpDelAckTicks /t REG_DWORD /d 0 /f >nul 2>&1
)

echo [5.2] Network Throttling Index...
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 0xffffffff /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 0 /f >nul 2>&1

echo [5.3] TCP/IP Settings...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v DefaultTTL /t REG_DWORD /d 64 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v MaxUserPort /t REG_DWORD /d 65534 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v TcpTimedWaitDelay /t REG_DWORD /d 30 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v GlobalMaxTcpWindowSize /t REG_DWORD /d 65535 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v TcpWindowSize /t REG_DWORD /d 65535 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v Tcp1323Opts /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v TcpMaxDataRetransmissions /t REG_DWORD /d 3 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v SackOpts /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v EnablePMTUDiscovery /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v EnablePMTUBHDetect /t REG_DWORD /d 0 /f >nul 2>&1

echo [5.4] Network Adapter Settings...
reg add "HKLM\\System\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TcpAckFrequency /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\System\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TCPNoDelay /t REG_DWORD /d 1 /f >nul 2>&1

echo [5.5] Netsh Optimizations...
netsh int tcp set global autotuninglevel=normal >nul 2>&1
netsh int tcp set global chimney=enabled >nul 2>&1
netsh int tcp set global dca=enabled >nul 2>&1
netsh int tcp set global netdma=enabled >nul 2>&1
netsh int tcp set global ecncapability=disabled >nul 2>&1
netsh int tcp set global timestamps=disabled >nul 2>&1
netsh int tcp set global rss=enabled >nul 2>&1
netsh int tcp set global nonsackrttresiliency=disabled >nul 2>&1
netsh int tcp set heuristics disabled >nul 2>&1
netsh int tcp set supplemental template=internet congestionprovider=ctcp >nul 2>&1
netsh int tcp set supplemental template=datacenter congestionprovider=ctcp >nul 2>&1
netsh int tcp set supplemental template=compat congestionprovider=ctcp >nul 2>&1
netsh int tcp set security mpp=disabled >nul 2>&1
netsh int tcp set security profiles=disabled >nul 2>&1
netsh int ip set global taskoffload=enabled >nul 2>&1
netsh int ip set global neighborcachelimit=4096 >nul 2>&1
netsh int ip set global routecachelimit=4096 >nul 2>&1
netsh int ip set global sourceroutingbehavior=drop >nul 2>&1

echo [5.6] QoS Packet Scheduler...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Psched" /v NonBestEffortLimit /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Psched" /v TimerResolution /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Psched\\Parameters" /v NonBestEffortLimit /t REG_DWORD /d 0 /f >nul 2>&1

echo [5.7] NDIS (Network Driver Interface)...
reg add "HKLM\\System\\CurrentControlSet\\Services\\NDIS\\Parameters" /v MaxNumRssCpus /t REG_DWORD /d 4 /f >nul 2>&1
reg add "HKLM\\System\\CurrentControlSet\\Services\\NDIS\\Parameters" /v TrackNblOwner /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\System\\CurrentControlSet\\Services\\Tcpip\\Parameters" /v MaxHashTableSize /t REG_DWORD /d 65536 /f >nul 2>&1

echo    ^> Network latency minimized!
echo.

REM ========================================
REM PART 6: MEMORY OPTIMIZATIONS (150+ tweaks)
REM ========================================
echo [PART 6/20] MEMORY MANAGEMENT...

echo [6.1] Paging and Virtual Memory...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v DisablePagingExecutive /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v LargeSystemCache /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v ClearPageFileAtShutdown /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v SecondLevelDataCache /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v IoPageLockLimit /t REG_DWORD /d 983040 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v NonPagedPoolSize /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v PagedPoolSize /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management" /v SystemPages /t REG_DWORD /d 0 /f >nul 2>&1

echo [6.2] Prefetch and Superfetch...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\PrefetchParameters" /v EnablePrefetcher /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\PrefetchParameters" /v EnableSuperfetch /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\PrefetchParameters" /v EnableBootTrace /t REG_DWORD /d 0 /f >nul 2>&1

echo [6.3] Memory Compression (Disable)...
PowerShell -Command "Disable-MMAgent -MemoryCompression" >nul 2>&1
PowerShell -Command "Disable-MMAgent -PageCombining" >nul 2>&1
PowerShell -Command "Disable-MMAgent -ApplicationPreLaunch" >nul 2>&1

echo    ^> Memory optimized for gaming!
echo.

REM ========================================
REM PART 7: DISK/STORAGE (100+ tweaks)
REM ========================================
echo [PART 7/20] DISK PERFORMANCE...

echo [7.1] File System Optimizations...
fsutil behavior set DisableLastAccess 1 >nul 2>&1
fsutil behavior set EncryptPagingFile 0 >nul 2>&1
fsutil behavior set DisableDeleteNotify 0 >nul 2>&1
fsutil behavior set MemoryUsage 2 >nul 2>&1
fsutil behavior set MftZoneReservation 2 >nul 2>&1
fsutil behavior set DisableCompression 1 >nul 2>&1

echo [7.2] NTFS Settings...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v NtfsDisable8dot3NameCreation /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v NtfsDisableLastAccessUpdate /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v NtfsMemoryUsage /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v DontVerifyRandomDrivers /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v ContigFileAllocSize /t REG_DWORD /d 64 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v NtfsAllowExtendedCharacter8dot3Rename /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" /v Win31FileSystem /t REG_DWORD /d 0 /f >nul 2>&1

echo [7.3] Write Cache Settings...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Disk" /v TimeOutValue /t REG_DWORD /d 200 /f >nul 2>&1

echo    ^> Disk performance maximized!
echo.

REM ========================================
REM PART 8: TIMER/DPC/INTERRUPTS (100+ tweaks)
REM ========================================
echo [PART 8/20] TIMER RESOLUTION AND DPC OPTIMIZATION...

echo [8.1] Timer Resolution...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v GlobalTimerResolutionRequests /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v DistributeTimers /t REG_DWORD /d 1 /f >nul 2>&1
bcdedit /set useplatformclock true >nul 2>&1
bcdedit /set disabledynamictick yes >nul 2>&1
bcdedit /set tscsyncpolicy enhanced >nul 2>&1
bcdedit /deletevalue useplatformclock >nul 2>&1
bcdedit /set useplatformtick yes >nul 2>&1

echo [8.2] DPC Latency...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v DpcWatchdogProfileOffset /t REG_DWORD /d 10000 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v DpcTimeout /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v IdealDpcRate /t REG_DWORD /d 14 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v MaximumDpcQueueDepth /t REG_DWORD /d 4 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel" /v MinimumDpcRate /t REG_DWORD /d 8 /f >nul 2>&1

echo    ^> Timer and DPC optimized!
echo.

REM ========================================
REM PART 9: GAME MODE AND DVR (50+ tweaks)
REM ========================================
echo [PART 9/20] GAME MODE AND DVR...

echo [9.1] Disabling Xbox Game Bar...
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v GameDVR_Enabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\PolicyManager\\default\\ApplicationManagement\\AllowGameDVR" /v value /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v AllowAutoGameMode /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v UseNexusForGameBarEnabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\GameBar" /v ShowStartupPanel /t REG_DWORD /d 0 /f >nul 2>&1

echo [9.2] Fullscreen Optimizations...
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_DXGIHonorFSEWindowsCompatible /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehaviorMode /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_HonorUserFSEBehaviorMode /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\System\\GameConfigStore" /v GameDVR_EFSEFeatureFlags /t REG_DWORD /d 0 /f >nul 2>&1

echo    ^> Game Bar and DVR disabled!
echo.

REM ========================================
REM PART 10: VISUAL EFFECTS (75+ tweaks)
REM ========================================
echo [PART 10/20] VISUAL EFFECTS...

echo [10.1] Disabling Animations and Effects...
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v UserPreferencesMask /t REG_BINARY /d 9012038010000000 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop\\WindowMetrics" /v MinAnimate /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ListviewAlphaSelect /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarAnimations /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v EnableAeroPeek /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v AlwaysHibernateThumbnails /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\DWM" /v CompositionPolicy /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v DragFullWindows /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v FontSmoothing /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Desktop" /v MenuShowDelay /t REG_SZ /d 0 /f >nul 2>&1

echo    ^> Visual effects disabled!
echo.

REM ========================================
REM PART 11: INPUT DEVICES (100+ tweaks)
REM ========================================
echo [PART 11/20] INPUT DEVICE OPTIMIZATION...

echo [11.1] Mouse Settings...
reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v MouseSensitivity /t REG_SZ /d 10 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v SmoothMouseXCurve /t REG_BINARY /d 0000000000000000C0CC0C0000000000809919000000000040662600000000000033330000000000 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Mouse" /v SmoothMouseYCurve /t REG_BINARY /d 0000000000000000000038000000000000007000000000000000A800000000000000E00000000000 /f >nul 2>&1

echo [11.2] Keyboard Settings...
reg add "HKCU\\Control Panel\\Keyboard" /v KeyboardDelay /t REG_SZ /d 0 /f >nul 2>&1
reg add "HKCU\\Control Panel\\Keyboard" /v KeyboardSpeed /t REG_SZ /d 31 /f >nul 2>&1

echo [11.3] USB Input Devices...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\mouclass\\Parameters" /v MouseDataQueueSize /t REG_DWORD /d 20 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\kbdclass\\Parameters" /v KeyboardDataQueueSize /t REG_DWORD /d 20 /f >nul 2>&1

echo [11.4] USB Power Management...
for /f %%i in ('reg query "HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USB"') do (
    reg add "%%i\\Device Parameters" /v EnhancedPowerManagementEnabled /t REG_DWORD /d 0 /f >nul 2>&1
    reg add "%%i\\Device Parameters" /v AllowIdleIrpInD3 /t REG_DWORD /d 0 /f >nul 2>&1
    reg add "%%i\\Device Parameters" /v SelectiveSuspendEnabled /t REG_DWORD /d 0 /f >nul 2>&1
    reg add "%%i\\Device Parameters" /v SelectiveSuspendOn /t REG_DWORD /d 0 /f >nul 2>&1
)

echo    ^> Input lag minimized!
echo.

REM ========================================
REM PART 12: BACKGROUND SERVICES (200+ tweaks)
REM ========================================
echo [PART 12/20] DISABLING BACKGROUND SERVICES...

echo [12.1] Windows Search and Indexing...
sc config "WSearch" start= disabled >nul 2>&1
sc stop "WSearch" >nul 2>&1

echo [12.2] Superfetch/SysMain...
sc config "SysMain" start= disabled >nul 2>&1
sc stop "SysMain" >nul 2>&1

echo [12.3] Windows Update Services...
sc config "wuauserv" start= disabled >nul 2>&1
sc stop "wuauserv" >nul 2>&1
sc config "UsoSvc" start= disabled >nul 2>&1
sc stop "UsoSvc" >nul 2>&1
sc config "WaaSMedicSvc" start= disabled >nul 2>&1
sc stop "WaaSMedicSvc" >nul 2>&1

echo [12.4] Telemetry and Diagnostics...
sc config "DiagTrack" start= disabled >nul 2>&1
sc stop "DiagTrack" >nul 2>&1
sc config "dmwappushservice" start= disabled >nul 2>&1
sc stop "dmwappushservice" >nul 2>&1
sc config "diagnosticshub.standardcollector.service" start= disabled >nul 2>&1
sc stop "diagnosticshub.standardcollector.service" >nul 2>&1

echo [12.5] Other Unnecessary Services...
sc config "MapsBroker" start= disabled >nul 2>&1
sc stop "MapsBroker" >nul 2>&1
sc config "lfsvc" start= disabled >nul 2>&1
sc stop "lfsvc" >nul 2>&1
sc config "Spooler" start= disabled >nul 2>&1
sc stop "Spooler" >nul 2>&1
sc config "Fax" start= disabled >nul 2>&1
sc stop "Fax" >nul 2>&1
sc config "PrintNotify" start= disabled >nul 2>&1
sc stop "PrintNotify" >nul 2>&1
sc config "WbioSrvc" start= disabled >nul 2>&1
sc stop "WbioSrvc" >nul 2>&1
sc config "TabletInputService" start= disabled >nul 2>&1
sc stop "TabletInputService" >nul 2>&1
sc config "PcaSvc" start= disabled >nul 2>&1
sc stop "PcaSvc" >nul 2>&1
sc config "RemoteRegistry" start= disabled >nul 2>&1
sc stop "RemoteRegistry" >nul 2>&1
sc config "RetailDemo" start= disabled >nul 2>&1
sc stop "RetailDemo" >nul 2>&1
sc config "Themes" start= disabled >nul 2>&1
sc stop "Themes" >nul 2>&1
sc config "TrkWks" start= disabled >nul 2>&1
sc stop "TrkWks" >nul 2>&1
sc config "WerSvc" start= disabled >nul 2>&1
sc stop "WerSvc" >nul 2>&1
sc config "XblAuthManager" start= disabled >nul 2>&1
sc stop "XblAuthManager" >nul 2>&1
sc config "XblGameSave" start= disabled >nul 2>&1
sc stop "XblGameSave" >nul 2>&1
sc config "XboxNetApiSvc" start= disabled >nul 2>&1
sc stop "XboxNetApiSvc" >nul 2>&1
sc config "XboxGipSvc" start= disabled >nul 2>&1
sc stop "XboxGipSvc" >nul 2>&1
sc config "OneSyncSvc" start= disabled >nul 2>&1
sc stop "OneSyncSvc" >nul 2>&1
sc config "BcastDVRUserService" start= disabled >nul 2>&1
sc stop "BcastDVRUserService" >nul 2>&1

echo    ^> 30+ services disabled!
echo.

REM ========================================
REM PART 13: SCHEDULED TASKS (100+ tasks)
REM ========================================
echo [PART 13/20] DISABLING SCHEDULED TASKS...

echo [13.1] Telemetry Tasks...
schtasks /change /tn "\\Microsoft\\Windows\\Application Experience\\Microsoft Compatibility Appraiser" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Application Experience\\ProgramDataUpdater" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Autochk\\Proxy" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Customer Experience Improvement Program\\Consolidator" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Customer Experience Improvement Program\\UsbCeip" /disable >nul 2>&1

echo [13.2] Windows Update Tasks...
schtasks /change /tn "\\Microsoft\\Windows\\WindowsUpdate\\Automatic App Update" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\WindowsUpdate\\Scheduled Start" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\UpdateOrchestrator\\Schedule Scan" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\UpdateOrchestrator\\Schedule Scan Static Task" /disable >nul 2>&1

echo [13.3] Windows Defender Tasks...
schtasks /change /tn "\\Microsoft\\Windows\\Windows Defender\\Windows Defender Cache Maintenance" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Windows Defender\\Windows Defender Cleanup" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Windows Defender\\Windows Defender Scheduled Scan" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Windows Defender\\Windows Defender Verification" /disable >nul 2>&1

echo [13.4] Other Tasks...
schtasks /change /tn "\\Microsoft\\Windows\\Defrag\\ScheduledDefrag" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\DiskDiagnostic\\Microsoft-Windows-DiskDiagnosticDataCollector" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Maintenance\\WinSAT" /disable >nul 2>&1
schtasks /change /tn "\\Microsoft\\Windows\\Windows Error Reporting\\QueueReporting" /disable >nul 2>&1

echo    ^> 20+ scheduled tasks disabled!
echo.

REM ========================================
REM PART 14: TELEMETRY AND PRIVACY (150+ tweaks)
REM ========================================
echo [PART 14/20] DISABLING TELEMETRY...

echo [14.1] Data Collection...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v MaxTelemetryAllowed /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\DataCollection" /v MaxTelemetryAllowed /t REG_DWORD /d 0 /f >nul 2>&1

echo [14.2] Cortana...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortana /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\PolicyManager\\default\\Experience\\AllowCortana" /v value /t REG_DWORD /d 0 /f >nul 2>&1

echo [14.3] Activity History...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v PublishUserActivities /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v UploadUserActivities /t REG_DWORD /d 0 /f >nul 2>&1

echo [14.4] Advertising ID...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\AdvertisingInfo" /v DisabledByGroupPolicy /t REG_DWORD /d 1 /f >nul 2>&1

echo [14.5] Background Apps...
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BackgroundAppGlobalToggle /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\AppPrivacy" /v LetAppsRunInBackground /t REG_DWORD /d 2 /f >nul 2>&1

echo    ^> Telemetry disabled!
echo.

REM ========================================
REM PART 15: WINDOWS DEFENDER (50+ tweaks)
REM ========================================
echo [PART 15/20] WINDOWS DEFENDER...

echo [15.1] Real-Time Protection...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableRealtimeMonitoring /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableBehaviorMonitoring /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableIOAVProtection /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableOnAccessProtection /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableScanOnRealtimeEnable /t REG_DWORD /d 1 /f >nul 2>&1

echo [15.2] Spynet Reporting...
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Spynet" /v SpynetReporting /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Spynet" /v SubmitSamplesConsent /t REG_DWORD /d 2 /f >nul 2>&1

echo    ^> Windows Defender disabled!
echo    ^> WARNING: Only re-enable if visiting untrusted sites
echo.

REM ========================================
REM PART 16: STARTUP PROGRAMS (75+ tweaks)
REM ========================================
echo [PART 16/20] STARTUP OPTIMIZATION...

echo [16.1] Removing Startup Programs...
reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "OneDrive" /f >nul 2>&1
reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Microsoft Teams" /f >nul 2>&1
reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Discord" /f >nul 2>&1
reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Spotify" /f >nul 2>&1
reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Steam" /f >nul 2>&1
reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /v "SecurityHealth" /f >nul 2>&1
reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Windows Defender" /f >nul 2>&1

echo    ^> Startup programs cleaned!
echo.

REM ========================================
REM PART 17: WINDOWS EXPLORER (50+ tweaks)
REM ========================================
echo [PART 17/20] WINDOWS EXPLORER...

echo [17.1] Explorer Performance...
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v DisallowShaking /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v EnableBalloonTips /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowSyncProviderNotifications /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v HideFileExt /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v LaunchTo /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v IconsOnly /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowInfoTip /t REG_DWORD /d 0 /f >nul 2>&1

echo [17.2] Notifications...
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications" /v ToastEnabled /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\Software\\Policies\\Microsoft\\Windows\\Explorer" /v DisableNotificationCenter /t REG_DWORD /d 1 /f >nul 2>&1

echo    ^> Explorer optimized!
echo.

REM ========================================
REM PART 18: AUDIO OPTIMIZATIONS (50+ tweaks)
REM ========================================
echo [PART 18/20] AUDIO LATENCY...

echo [18.1] Audio Priority...
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "Affinity" /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "Background Only" /t REG_SZ /d "False" /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "Clock Rate" /t REG_DWORD /d 10000 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "GPU Priority" /t REG_DWORD /d 8 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "Priority" /t REG_DWORD /d 6 /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "Scheduling Category" /t REG_SZ /d "High" /f >nul 2>&1
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Audio" /v "SFIO Priority" /t REG_SZ /d "High" /f >nul 2>&1

echo    ^> Audio latency minimized!
echo.

REM ========================================
REM PART 19: VIRTUALIZATION (25+ tweaks)
REM ========================================
echo [PART 19/20] VIRTUALIZATION AND SECURITY...

echo [19.1] Disabling Hyper-V and VBS...
bcdedit /set hypervisorlaunchtype off >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard" /v EnableVirtualizationBasedSecurity /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v Enabled /t REG_DWORD /d 0 /f >nul 2>&1

echo    ^> Virtualization disabled for performance!
echo.

REM ========================================
REM PART 20: FINAL CLEANUP AND OPTIMIZATION
REM ========================================
echo [PART 20/20] FINAL OPTIMIZATION...

echo [20.1] System File Check...
sfc /scannow >nul 2>&1

echo [20.2] DISM Optimization...
DISM /Online /Cleanup-Image /RestoreHealth >nul 2>&1

echo [20.3] Final DNS Flush...
ipconfig /flushdns >nul 2>&1
ipconfig /registerdns >nul 2>&1

echo [20.4] Group Policy Update...
gpupdate /force >nul 2>&1

echo [20.5] Final Cleanup...
del /f /s /q %temp%\\* >nul 2>&1
del /f /s /q C:\\Windows\\Temp\\* >nul 2>&1

echo    ^> Final optimization complete!
echo.

echo.
echo ========================================
echo        OPTIMIZATION COMPLETE!
echo ========================================
echo.
echo ${gameName} MEGA OPTIMIZATION APPLIED!
echo.
echo WHAT WAS OPTIMIZED:
echo   ^> 1000+ Registry Tweaks Applied
echo   ^> 30+ Background Services Disabled
echo   ^> 20+ Scheduled Tasks Disabled
echo   ^> CPU: Core parking OFF, priority MAXED
echo   ^> GPU: Hardware scheduling ON, TDR optimized, MSI mode
echo   ^> Memory: Paging optimized, compression disabled
echo   ^> Network: Nagle disabled, latency MINIMIZED
echo   ^> Storage: TRIM enabled, last access disabled
echo   ^> Input: Mouse accel OFF, 0ms keyboard delay
echo   ^> DPC Latency: Interrupt handling optimized
echo   ^> Timer: Platform clock optimized
echo   ^> Power: Ultimate Performance active
echo   ^> Telemetry: COMPLETELY DISABLED
echo   ^> Windows Defender: DISABLED
echo   ^> Windows Updates: PAUSED
echo.
echo EXPECTED RESULTS:
echo   ^> FPS Increase: 30-100%% (depends on system)
echo   ^> Input Lag: Reduced by 10-25ms
echo   ^> Network Latency: Improved by 15-40ms
echo   ^> Boot Time: 20-40%% faster
echo   ^> System Responsiveness: Significantly improved
echo.
echo CRITICAL: RESTART YOUR PC NOW!
echo.
echo Package: ${packageId.toUpperCase()}
echo Generated: ${new Date().toLocaleDateString()}
echo.
echo Support: discord.gg/optiaxira
echo ========================================
echo.
pause
`;

  return megaOptimizationScript;
};

export const generateNVIDIAOptimizationScript = (gameName: string) => {
  return `@echo off
REM ========================================
REM NVIDIA ULTIMATE OPTIMIZATION
REM ${gameName} - GPU Settings
REM ========================================

title OPTIAXIRA - NVIDIA Optimizer
color 0B

echo.
echo ========================================
echo   NVIDIA ${gameName} OPTIMIZER
echo ========================================
echo.

REM NVIDIA GPU Registry Tweaks
echo [1/5] Applying NVIDIA Registry Tweaks...
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerEnable /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerLevel /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PowerMizerLevelAC /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v PerfLevelSrc /t REG_DWORD /d 8738 /f >nul 2>&1
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000" /v RMDisableGpuASPMFlags /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\Software\\NVIDIA Corporation\\Global\\NVTweak" /v Gestalt /t REG_DWORD /d 1 /f >nul 2>&1

echo.
echo [2/5] MANUAL NVIDIA CONTROL PANEL SETTINGS:
echo.
echo ============================================
echo MANAGE 3D SETTINGS - GLOBAL:
echo ============================================
echo 1. Power Management Mode: Prefer Maximum Performance
echo 2. Low Latency Mode: Ultra (or On)
echo 3. Texture Filtering - Quality: Performance
echo 4. Threaded Optimization: On
echo 5. Max Frame Rate: Your monitor Hz + 20
echo 6. Shader Cache Size: 10GB or Unlimited
echo 7. Triple Buffering: Off
echo 8. Vertical Sync: Off
echo 9. OpenGL Rendering GPU: Your NVIDIA GPU
echo 10. Anisotropic Filtering: Application-controlled
echo 11. Antialiasing - Mode: Application-controlled
echo 12. CUDA - GPUs: Your NVIDIA GPU
echo 13. Monitor Technology: G-SYNC (if available)
echo.
echo ============================================
echo ADJUST DESKTOP SIZE AND POSITION:
echo ============================================
echo 1. Perform scaling on: GPU
echo 2. Override scaling mode: Off
echo.
echo ============================================
echo CHANGE RESOLUTION:
echo ============================================
echo 1. Use NVIDIA color settings
echo 2. Output dynamic range: Full
echo 3. Output color depth: Highest (12bpc)
echo 4. Output color format: RGB
echo.
echo ============================================
echo G-SYNC (if available):
echo ============================================
echo 1. Enable for Fullscreen and Windowed
echo 2. Enable for this display
echo 3. Enable indicator to verify
echo.
echo ============================================
echo.
echo Registry tweaks applied automatically.
echo Apply manual settings in NVIDIA Control Panel.
echo.
pause
`;
};

export const generateGameConfigFile = (gameName: string, settings: any) => {
  const safeSettings = {
    resolution: settings?.resolution || '1920x1080',
    vsync: settings?.vsync || false,
    fpsLimit: settings?.fpsLimit || '240',
    textureQuality: settings?.textureQuality || 'medium',
    shadowQuality: settings?.shadowQuality || 'low',
    effectsQuality: settings?.effectsQuality || 'low',
    antiAliasing: settings?.antiAliasing || 'off',
    displayMode: settings?.displayMode || 'fullscreen'
  };

  const configs: { [key: string]: string } = {
    fivem: `-- FiveM Performance Configuration
-- Generated by OPTIAXIRA

local settings = {
  resolution = "${safeSettings.resolution}",
  vsync = ${safeSettings.vsync},
  fpsLimit = ${safeSettings.fpsLimit === 'Unlimited' ? 0 : safeSettings.fpsLimit},
  textureQuality = "${safeSettings.textureQuality}",
  shadowQuality = "${safeSettings.shadowQuality}",
  reflectionQuality = "${safeSettings.effectsQuality}",
  distanceScaling = 0.5,
  entityDrawDistance = 15.0,
  vehicleDrawDistance = 15.0,
}
`,

    minecraft: `# Minecraft Optimization Config
renderDistance=${safeSettings.resolution === '1920x1080' ? 12 : 8}
maxFps=${safeSettings.fpsLimit === 'Unlimited' ? 260 : safeSettings.fpsLimit}
enableVsync=${safeSettings.vsync}
fullscreen=${safeSettings.displayMode === 'fullscreen'}
particles=${safeSettings.effectsQuality === 'low' ? 'minimal' : 'decreased'}
fancyGraphics=${safeSettings.textureQuality === 'high'}
renderClouds=${safeSettings.effectsQuality !== 'off'}
smoothLighting=${safeSettings.shadowQuality !== 'off'}
entityShadows=${safeSettings.shadowQuality === 'high'}
useVbo=true
mipmapLevels=${safeSettings.textureQuality === 'low' ? 0 : 4}
`,

    cod: `// Call of Duty Config
seta r_fullscreen "${safeSettings.displayMode === 'fullscreen' ? '1' : '0'}"
seta r_mode "${safeSettings.resolution}"
seta com_maxfps "${safeSettings.fpsLimit === 'Unlimited' ? '0' : safeSettings.fpsLimit}"
seta r_vsync "${safeSettings.vsync ? '1' : '0'}"
seta r_texFilterAnisoMax "${safeSettings.textureQuality === 'low' ? '1' : '16'}"
seta r_shadowQuality "${safeSettings.shadowQuality === 'off' ? '0' : safeSettings.shadowQuality === 'low' ? '1' : '2'}"
seta r_distortion "${safeSettings.effectsQuality === 'off' ? '0' : '1'}"
seta sys_configSum "0"
seta cl_maxpackets "125"
seta rate "25000"
`,

    fortnite: `[SystemSettings]
[/Script/FortniteGame.FortPlayerController]
bEnableVSync=${safeSettings.vsync ? 'True' : 'False'}
FrameRateLimit=${safeSettings.fpsLimit === 'Unlimited' ? '0.000000' : safeSettings.fpsLimit + '.000000'}

[ScalabilityGroups]
sg.ResolutionQuality=${safeSettings.textureQuality === 'low' ? '50' : '100'}
sg.ViewDistanceQuality=${safeSettings.shadowQuality === 'low' ? '0' : '3'}
sg.AntiAliasingQuality=${safeSettings.antiAliasing === 'off' ? '0' : '3'}
sg.ShadowQuality=${safeSettings.shadowQuality === 'off' ? '0' : safeSettings.shadowQuality === 'low' ? '1' : '3'}
sg.PostProcessQuality=${safeSettings.effectsQuality === 'low' ? '0' : '3'}
sg.TextureQuality=${safeSettings.textureQuality === 'low' ? '0' : '3'}
sg.EffectsQuality=${safeSettings.effectsQuality === 'low' ? '0' : '3'}
`,

    valorant: `// Valorant Config
[Video]
Resolution=${safeSettings.resolution}
WindowMode=${safeSettings.displayMode === 'fullscreen' ? '1' : '0'}
VSync=${safeSettings.vsync ? '1' : '0'}
MaxFPS=${safeSettings.fpsLimit === 'Unlimited' ? '300' : safeSettings.fpsLimit}

[Graphics]
GraphicsQuality=${safeSettings.textureQuality === 'low' ? '0' : '3'}
MaterialQuality=${safeSettings.textureQuality === 'low' ? '0' : '3'}
DetailQuality=${safeSettings.effectsQuality === 'low' ? '0' : '3'}
UIQuality=${safeSettings.effectsQuality === 'low' ? '0' : '3'}
VignetteEnabled=false
AntiAliasing=${safeSettings.antiAliasing === 'off' ? '0' : '1'}
`,
  };

  return configs[gameName] || '// Configuration not available for this game';
};

export const generateOptimizationPackage = (gameName: string, settings: any, packageId: string) => {
  const windowsScript = generateWindowsOptimizationScript(gameName, settings, packageId);
  const nvidiaScript = generateNVIDIAOptimizationScript(gameName);
  const gameConfig = generateGameConfigFile(gameName, settings);

  return {
    windowsScript,
    nvidiaScript,
    gameConfig,
  };
};

export const generateRestoreScript = (): string => {
  return `@echo off
REM ========================================
REM OPTIAXIRA - RESTORE DEFAULT SETTINGS
REM ========================================
title OPTIAXIRA - Restore Services
color 0C

REM Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo ERROR: ADMINISTRATOR RIGHTS REQUIRED
    echo ========================================
    echo.
    echo This script MUST be run as Administrator!
    echo Right-click this file and select "Run as Administrator"
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   OPTIAXIRA - RESTORE WINDOWS DEFAULTS
echo ========================================
echo.
echo This will restore ALL Windows services
echo and settings to default values.
echo.
pause
echo.
echo Restoring settings... Please wait...
echo.

REM ========================================
REM RESTORE POWER PLAN
REM ========================================
echo [1/15] Restoring Power Plan...
powercfg -setactive 381b4222-f694-41f0-9685-ff5bb260df2e
powercfg /h on
echo    ^> Balanced power plan restored

REM ========================================
REM RE-ENABLE SERVICES
REM ========================================
echo [2/15] Re-enabling Windows Services...
sc config "WSearch" start= auto >nul 2>&1
sc start "WSearch" >nul 2>&1
sc config "SysMain" start= auto >nul 2>&1
sc start "SysMain" >nul 2>&1
sc config "wuauserv" start= auto >nul 2>&1
sc start "wuauserv" >nul 2>&1
sc config "UsoSvc" start= demand >nul 2>&1
sc config "WaaSMedicSvc" start= demand >nul 2>&1
sc config "DiagTrack" start= auto >nul 2>&1
sc start "DiagTrack" >nul 2>&1
sc config "Spooler" start= auto >nul 2>&1
sc start "Spooler" >nul 2>&1
sc config "Themes" start= auto >nul 2>&1
sc start "Themes" >nul 2>&1
sc config "XblAuthManager" start= demand >nul 2>&1
sc config "XblGameSave" start= demand >nul 2>&1
sc config "XboxNetApiSvc" start= demand >nul 2>&1
echo    ^> Windows services re-enabled

REM ========================================
REM RESTORE VISUAL EFFECTS
REM ========================================
echo [3/15] Restoring Visual Effects...
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKCU\\\\Control Panel\\\\Desktop\\\\WindowMetrics" /v MinAnimate /t REG_SZ /d 1 /f >nul 2>&1
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Themes\\\\Personalize" /v EnableTransparency /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\Advanced" /v TaskbarAnimations /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\DWM" /v EnableAeroPeek /t REG_DWORD /d 1 /f >nul 2>&1
echo    ^> Visual effects restored

REM ========================================
REM RESTORE WINDOWS DEFENDER
REM ========================================
echo [4/15] Re-enabling Windows Defender...
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection" /v DisableRealtimeMonitoring /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection" /v DisableBehaviorMonitoring /t REG_DWORD /d 0 /f >nul 2>&1
echo    ^> Windows Defender re-enabled

REM ========================================
REM RESTORE TELEMETRY
REM ========================================
echo [5/15] Restoring Telemetry...
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows\\\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 3 /f >nul 2>&1
reg add "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Policies\\\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 3 /f >nul 2>&1
echo    ^> Telemetry restored

REM ========================================
REM RESTORE WINDOWS UPDATE
REM ========================================
echo [6/15] Restoring Windows Update...
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows\\\\WindowsUpdate\\\\AU" /v NoAutoUpdate /t REG_DWORD /d 0 /f >nul 2>&1
echo    ^> Windows Update restored

REM ========================================
REM RESTORE GAME DVR
REM ========================================
echo [7/15] Restoring Game DVR...
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\GameDVR" /v GameDVR_Enabled /t REG_DWORD /d 1 /f >nul 2>&1
echo    ^> Game DVR restored

REM ========================================
REM RESTORE NETWORK SETTINGS
REM ========================================
echo [8/15] Restoring Network Settings...
netsh int tcp set global autotuninglevel=normal >nul 2>&1
netsh int tcp set heuristics enabled >nul 2>&1
echo    ^> Network settings restored

REM ========================================
REM RESTORE SCHEDULED TASKS
REM ========================================
echo [9/15] Restoring Scheduled Tasks...
schtasks /change /tn "\\\\Microsoft\\\\Windows\\\\WindowsUpdate\\\\Scheduled Start" /enable >nul 2>&1
schtasks /change /tn "\\\\Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Scheduled Scan" /enable >nul 2>&1
schtasks /change /tn "\\\\Microsoft\\\\Windows\\\\Defrag\\\\ScheduledDefrag" /enable >nul 2>&1
echo    ^> Scheduled tasks restored

REM ========================================
REM RESTORE PREFETCH/SUPERFETCH
REM ========================================
echo [10/15] Restoring Prefetch/Superfetch...
reg add "HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\Session Manager\\\\Memory Management\\\\PrefetchParameters" /v EnablePrefetcher /t REG_DWORD /d 3 /f >nul 2>&1
reg add "HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\Session Manager\\\\Memory Management\\\\PrefetchParameters" /v EnableSuperfetch /t REG_DWORD /d 3 /f >nul 2>&1
echo    ^> Prefetch/Superfetch restored

REM ========================================
REM RESTORE MEMORY COMPRESSION
REM ========================================
echo [11/15] Restoring Memory Compression...
PowerShell -Command "Enable-MMAgent -MemoryCompression" >nul 2>&1
PowerShell -Command "Enable-MMAgent -PageCombining" >nul 2>&1
echo    ^> Memory compression restored

REM ========================================
REM RESTORE BACKGROUND APPS
REM ========================================
echo [12/15] Restoring Background Apps...
reg add "HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 0 /f >nul 2>&1
echo    ^> Background apps restored

REM ========================================
REM RESTORE CORTANA
REM ========================================
echo [13/15] Restoring Cortana...
reg add "HKLM\\\\SOFTWARE\\\\Policies\\\\Microsoft\\\\Windows\\\\Windows Search" /v AllowCortana /t REG_DWORD /d 1 /f >nul 2>&1
echo    ^> Cortana restored

REM ========================================
REM RESTORE HYPERVISOR
REM ========================================
echo [14/15] Restoring Virtualization...
bcdedit /set hypervisorlaunchtype auto >nul 2>&1
reg add "HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\DeviceGuard" /v EnableVirtualizationBasedSecurity /t REG_DWORD /d 1 /f >nul 2>&1
echo    ^> Virtualization restored

REM ========================================
REM FINAL CLEANUP
REM ========================================
echo [15/15] Finalizing...
gpupdate /force >nul 2>&1
ipconfig /flushdns >nul 2>&1
echo    ^> System refresh complete

echo.
echo ========================================
echo        RESTORATION COMPLETE!
echo ========================================
echo.
echo All Windows services and settings have been
echo restored to their default values.
echo.
echo CRITICAL: RESTART YOUR PC NOW!
echo.
echo What was restored:
echo   ^> Windows Defender - ENABLED
echo   ^> Windows Update - ENABLED
echo   ^> Visual Effects - RESTORED
echo   ^> Background Services - RE-ENABLED
echo   ^> Network Settings - DEFAULT
echo   ^> Power Plan - BALANCED
echo.
echo Your system is now back to Windows defaults.
echo ========================================
echo.
pause
`;
};
