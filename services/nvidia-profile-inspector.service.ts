/**
 * NVIDIA Profile Inspector Configuration Generator
 * Generates .nip files for instant NVIDIA settings import
 * NO MORE MANUAL CLICKING - JUST IMPORT AND GO!
 */

export interface NvidiaProfile {
  gameName: string;
  executable: string;
  profile: string;
}

export class NvidiaProfileInspectorService {
  
  /**
   * UNIVERSAL BASE PROFILE
   * These settings apply to ALL games for maximum performance
   */
  static generateUniversalProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Axira Universal Gaming Profile</ProfileName>
    <Executeables />
    <Settings>
      <!-- POWER MANAGEMENT -->
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue> <!-- Prefer Maximum Performance -->
      </ProfileSetting>
      
      <!-- TEXTURE FILTERING -->
      <ProfileSetting>
        <SettingNameInfo>Texture filtering - Quality</SettingNameInfo>
        <SettingID>268604728</SettingID>
        <SettingValue>20</SettingValue> <!-- High Performance -->
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Texture filtering - Negative LOD bias</SettingNameInfo>
        <SettingID>269954096</SettingID>
        <SettingValue>0</SettingValue> <!-- Allow -->
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Texture filtering - Anisotropic filter optimization</SettingNameInfo>
        <SettingID>276652957</SettingID>
        <SettingValue>1</SettingValue> <!-- On -->
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Texture filtering - Trilinear optimization</SettingNameInfo>
        <SettingID>276031551</SettingID>
        <SettingValue>1</SettingValue> <!-- On -->
      </ProfileSetting>
      
      <!-- LOW LATENCY MODE -->
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>1</SettingValue> <!-- On (Ultra if supported by game) -->
      </ProfileSetting>
      
      <!-- MAX FRAME RATE -->
      <ProfileSetting>
        <SettingNameInfo>Max Frame Rate</SettingNameInfo>
        <SettingID>277041152</SettingID>
        <SettingValue>0</SettingValue> <!-- Off (unlimited) -->
      </ProfileSetting>
      
      <!-- SHADER CACHE -->
      <ProfileSetting>
        <SettingNameInfo>Shader Cache</SettingNameInfo>
        <SettingID>273582877</SettingID>
        <SettingValue>1</SettingValue> <!-- On -->
      </ProfileSetting>
      
      <!-- THREADED OPTIMIZATION -->
      <ProfileSetting>
        <SettingNameInfo>Threaded optimization</SettingNameInfo>
        <SettingID>270412750</SettingID>
        <SettingValue>1</SettingValue> <!-- On -->
      </ProfileSetting>
      
      <!-- VERTICAL SYNC -->
      <ProfileSetting>
        <SettingNameInfo>Vertical Sync</SettingNameInfo>
        <SettingID>276757595</SettingID>
        <SettingValue>138412032</SettingValue> <!-- Force Off -->
      </ProfileSetting>
      
      <!-- TRIPLE BUFFERING -->
      <ProfileSetting>
        <SettingNameInfo>Triple buffering</SettingNameInfo>
        <SettingID>270499198</SettingID>
        <SettingValue>0</SettingValue> <!-- Off -->
      </ProfileSetting>
      
      <!-- PRE-RENDERED FRAMES -->
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue> <!-- 1 frame for lowest latency -->
      </ProfileSetting>
      
      <!-- AMBIENT OCCLUSION -->
      <ProfileSetting>
        <SettingNameInfo>Ambient Occlusion</SettingNameInfo>
        <SettingID>276652971</SettingID>
        <SettingValue>0</SettingValue> <!-- Off -->
      </ProfileSetting>
      
      <!-- ANTIALIASING -->
      <ProfileSetting>
        <SettingNameInfo>Antialiasing - Mode</SettingNameInfo>
        <SettingID>276757595</SettingID>
        <SettingValue>0</SettingValue> <!-- Application-controlled -->
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Antialiasing - FXAA</SettingNameInfo>
        <SettingID>277041154</SettingID>
        <SettingValue>0</SettingValue> <!-- Off -->
      </ProfileSetting>
      
      <!-- CUDA -->
      <ProfileSetting>
        <SettingNameInfo>CUDA - GPUs</SettingNameInfo>
        <SettingID>276652957</SettingID>
        <SettingValue>1</SettingValue> <!-- All -->
      </ProfileSetting>
      
      <!-- DISPLAY FEATURES -->
      <ProfileSetting>
        <SettingNameInfo>G-SYNC</SettingNameInfo>
        <SettingID>276757606</SettingID>
        <SettingValue>268435459</SettingValue> <!-- Enable for fullscreen and windowed -->
      </ProfileSetting>
      
      <!-- ANISOTROPIC FILTERING -->
      <ProfileSetting>
        <SettingNameInfo>Anisotropic filtering mode</SettingNameInfo>
        <SettingID>266801214</SettingID>
        <SettingValue>0</SettingValue> <!-- Application-controlled -->
      </ProfileSetting>
      
      <!-- MULTI-FRAME SAMPLED AA -->
      <ProfileSetting>
        <SettingNameInfo>Multi-Frame Sampled AA (MFAA)</SettingNameInfo>
        <SettingID>276757628</SettingID>
        <SettingValue>0</SettingValue> <!-- Off -->
      </ProfileSetting>
      
      <!-- OPENGL RENDERING GPU -->
      <ProfileSetting>
        <SettingNameInfo>OpenGL rendering GPU</SettingNameInfo>
        <SettingID>270411018</SettingID>
        <SettingValue>0</SettingValue> <!-- Auto-select -->
      </ProfileSetting>
      
      <!-- DISPLAY REFRESH RATE -->
      <ProfileSetting>
        <SettingNameInfo>Preferred refresh rate</SettingNameInfo>
        <SettingID>276822875</SettingID>
        <SettingValue>1</SettingValue> <!-- Highest available -->
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  /**
   * GAME-SPECIFIC PROFILES
   * These override the universal settings for specific games
   */
  static getGameProfiles(): NvidiaProfile[] {
    return [
      {
        gameName: 'Fortnite',
        executable: 'FortniteClient-Win64-Shipping.exe',
        profile: this.generateFortniteProfile()
      },
      {
        gameName: 'Apex Legends',
        executable: 'r5apex.exe',
        profile: this.generateApexProfile()
      },
      {
        gameName: 'Valorant',
        executable: 'VALORANT-Win64-Shipping.exe',
        profile: this.generateValorantProfile()
      },
      {
        gameName: 'CS2',
        executable: 'cs2.exe',
        profile: this.generateCS2Profile()
      },
      {
        gameName: 'Call of Duty',
        executable: 'cod.exe',
        profile: this.generateCODProfile()
      },
      {
        gameName: 'Roblox',
        executable: 'RobloxPlayerBeta.exe',
        profile: this.generateRobloxProfile()
      },
      {
        gameName: 'Minecraft',
        executable: 'javaw.exe',
        profile: this.generateMinecraftProfile()
      },
      {
        gameName: 'FiveM',
        executable: 'FiveM.exe',
        profile: this.generateFiveMProfile()
      },
      {
        gameName: 'Warzone',
        executable: 'ModernWarfare.exe',
        profile: this.generateWarzoneProfile()
      },
      {
        gameName: 'Rust',
        executable: 'RustClient.exe',
        profile: this.generateRustProfile()
      }
    ];
  }

  private static generateFortniteProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Fortnite - Axira Optimized</ProfileName>
    <Executeables>
      <string>FortniteClient-Win64-Shipping.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue> <!-- Ultra -->
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Threaded optimization</SettingNameInfo>
        <SettingID>270412750</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Vertical Sync</SettingNameInfo>
        <SettingID>276757595</SettingID>
        <SettingValue>138412032</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateApexProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Apex Legends - Axira Optimized</ProfileName>
    <Executeables>
      <string>r5apex.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateValorantProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Valorant - Axira Optimized</ProfileName>
    <Executeables>
      <string>VALORANT-Win64-Shipping.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateCS2Profile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Counter-Strike 2 - Axira Optimized</ProfileName>
    <Executeables>
      <string>cs2.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateCODProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Call of Duty - Axira Optimized</ProfileName>
    <Executeables>
      <string>cod.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateRobloxProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Roblox - Axira Optimized</ProfileName>
    <Executeables>
      <string>RobloxPlayerBeta.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateMinecraftProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Minecraft - Axira Optimized</ProfileName>
    <Executeables>
      <string>javaw.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Threaded optimization</SettingNameInfo>
        <SettingID>270412750</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateFiveMProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>FiveM - Axira Optimized</ProfileName>
    <Executeables>
      <string>FiveM.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateWarzoneProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Warzone - Axira Optimized</ProfileName>
    <Executeables>
      <string>ModernWarfare.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Low Latency Mode</SettingNameInfo>
        <SettingID>276315629</SettingID>
        <SettingValue>2</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  private static generateRustProfile(): string {
    return `<?xml version="1.0" encoding="utf-16"?>
<ArrayOfProfile>
  <Profile>
    <ProfileName>Rust - Axira Optimized</ProfileName>
    <Executeables>
      <string>RustClient.exe</string>
    </Executeables>
    <Settings>
      <ProfileSetting>
        <SettingNameInfo>Power management mode</SettingNameInfo>
        <SettingID>274197361</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
      <ProfileSetting>
        <SettingNameInfo>Maximum pre-rendered frames</SettingNameInfo>
        <SettingID>270542859</SettingID>
        <SettingValue>1</SettingValue>
      </ProfileSetting>
    </Settings>
  </Profile>
</ArrayOfProfile>`;
  }

  /**
   * Get the profile for a specific game
   */
  static getProfileForGame(gameName: string): string | null {
    const profiles = this.getGameProfiles();
    const profile = profiles.find(p => 
      p.gameName.toLowerCase() === gameName.toLowerCase()
    );
    return profile ? profile.profile : null;
  }

  /**
   * Generate download instructions
   */
  static getInstallInstructions(): string {
    return `HOW TO USE NVIDIA PROFILE INSPECTOR CONFIGS:

1. DOWNLOAD NVIDIA PROFILE INSPECTOR:
   - Visit: https://github.com/Orbmu2k/nvidiaProfileInspector/releases
   - Download the latest release (nvidiaProfileInspector.zip)
   - Extract to a folder

2. IMPORT THE UNIVERSAL PROFILE:
   - Run nvidiaProfileInspector.exe
   - Click "Import Profiles" button (top right)
   - Select "Axira_Universal_Profile.nip"
   - Click "Apply changes" button

3. IMPORT YOUR GAME-SPECIFIC PROFILE:
   - Click "Import Profiles" again
   - Select your game profile (e.g., "Axira_Fortnite.nip")
   - Click "Apply changes"

4. DONE!
   - All settings are now configured perfectly
   - No manual clicking required
   - Launch your game and enjoy!

NOTE: You can import multiple game profiles at once!
The universal profile sets the base, and game profiles override for specific games.`;
  }
}
