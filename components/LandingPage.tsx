import { ArrowRight, Zap, Shield, Download, Gauge, Cpu, Wifi, HardDrive, TrendingUp, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { Snowflakes } from './Snowflakes';

interface LandingPageProps {
  onNavigate: (page: 'pricing' | 'login') => void;
}

const games = [
  { 
    name: 'FiveM', 
    image: 'https://images.unsplash.com/photo-1652380275602-b1cd02808552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaXZlTSUyMEdUQXxlbnwxfHx8fDE3NjU2MDAyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    glow: 'shadow-purple-500/50',
    desc: 'GTA V Multiplayer'
  },
  { 
    name: 'Fortnite', 
    image: 'https://images.unsplash.com/photo-1656639969809-31bd8f5cc62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGb3J0bml0ZSUyMGdhbWV8ZW58MXx8fHwxNzY1NjAwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
    glow: 'shadow-blue-500/50',
    desc: 'Battle Royale'
  },
  { 
    name: 'Valorant', 
    image: 'https://images.unsplash.com/photo-1637594439872-44d1b1fe0a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYWxvcmFudCUyMHNob290ZXJ8ZW58MXx8fHwxNzY1NjAwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-red-600 via-pink-600 to-rose-600',
    glow: 'shadow-red-500/50',
    desc: 'Tactical FPS'
  },
  { 
    name: 'CS2', 
    image: 'https://images.unsplash.com/photo-1595472968262-48209bf5b390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3VudGVyJTIwU3RyaWtlfGVufDF8fHx8MTc2NTYwMDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-yellow-600 via-orange-600 to-red-600',
    glow: 'shadow-yellow-500/50',
    desc: 'Counter-Strike 2'
  },
  { 
    name: 'Apex Legends', 
    image: 'https://images.unsplash.com/photo-1558743941-459179fe00e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcGV4JTIwTGVnZW5kc3xlbnwxfHx8fDE3NjU2MDAyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-red-600 via-orange-600 to-yellow-600',
    glow: 'shadow-orange-500/50',
    desc: 'Battle Royale'
  },
  { 
    name: 'Warzone', 
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWxsJTIwb2YlMjBEdXR5JTIwV2Fyem9uZXxlbnwxfHx8fDE3NjU2MDAyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    glow: 'shadow-green-500/50',
    desc: 'Call of Duty'
  },
  { 
    name: 'Minecraft', 
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaW5lY3JhZnQlMjBnYW1lfGVufDF8fHx8MTc2NTYwMDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-green-600 via-lime-600 to-emerald-600',
    glow: 'shadow-lime-500/50',
    desc: 'Sandbox Game'
  },
  { 
    name: 'Rust', 
    image: 'https://images.unsplash.com/photo-1759085644473-14f9c45cf8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSdXN0JTIwc3Vydml2YWx8ZW58MXx8fHwxNzY1NjAwMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-600 via-red-700 to-rose-800',
    glow: 'shadow-orange-500/50',
    desc: 'Survival'
  },
];

const features = [
  {
    icon: Cpu,
    title: 'CPU Optimization',
    description: 'Disable core parking, remove CPU mitigations, max performance mode',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Gauge,
    title: 'GPU Boost',
    description: 'Hardware scheduling, disable TDR, NVIDIA/AMD tweaks',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Wifi,
    title: 'Network Latency',
    description: 'Disable Nagle\'s algorithm, optimize TCP/IP, reduce ping by 10-20ms',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: HardDrive,
    title: 'Memory & Disk',
    description: 'Disable paging, superfetch, memory compression, NTFS optimization',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Debloat Windows',
    description: 'Remove 20+ bloat services, telemetry, Windows Defender (optional)',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Real Performance',
    description: '15-30% FPS boost, smoother frame times, lower input lag',
    gradient: 'from-yellow-500 to-orange-500'
  },
];

const steps = [
  {
    number: '01',
    title: 'Login & Select Game',
    description: 'Enter your license key and choose from 8 supported games',
  },
  {
    number: '02',
    title: 'Download Scripts',
    description: 'Get Windows optimization, NVIDIA tweaks, and game configs',
  },
  {
    number: '03',
    title: 'Run as Admin',
    description: 'Execute the scripts with administrator privileges',
  },
  {
    number: '04',
    title: 'Restart & Enjoy',
    description: 'Restart your PC and experience massive FPS gains',
  },
];

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Snowflakes />
      
      {/* CHRISTMAS BANNER */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 py-2.5 text-center z-50 shadow-lg shadow-blue-500/50">
        <p className="text-sm font-medium tracking-wide">🎅 MERRY CHRISTMAS! HAPPY HOLIDAYS! 🎄 SPECIAL FESTIVE EDITION! ❄️</p>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 digital-grid"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 opacity-10">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* Logo with glow */}
          <div className="flex justify-center mb-8 animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-full"></div>
              <Logo size="lg" className="relative drop-shadow-2xl" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight animate-slideUp">
            <span className="gradient-text-blue">Axira</span> Optimizer <span className="inline-block animate-pulse">❄️</span>
          </h1>
          
          {/* Subtitle */}
          <div className="inline-block mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="px-6 py-2 glass rounded-full border border-cyan-400/30">
              <p className="text-xl md:text-2xl text-cyan-400">
                Ultimate Game Optimization Suite 🎄
              </p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Debloat Windows, optimize CPU/GPU, reduce network latency. Real working tweaks used by competitive gamers and streamers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => onNavigate('login')}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-2 group text-lg font-medium hover-glow btn-press relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-10 py-4 glass border-2 border-white/10 text-white rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-lg font-medium btn-press neon-border"
            >
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto pt-8">
            <div className="glass-strong rounded-2xl p-6 hover-glow card-hover stagger-item">
              <div className="text-5xl md:text-6xl mb-3 gradient-text-blue font-bold">
                98+
              </div>
              <div className="text-xs md:text-sm text-cyan-400/80 uppercase tracking-widest">
                Unique Tweaks
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 hover-glow card-hover stagger-item">
              <div className="text-5xl md:text-6xl mb-3 gradient-text-blue font-bold">
                8
              </div>
              <div className="text-xs md:text-sm text-cyan-400/80 uppercase tracking-widest">
                Games Supported
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 hover-glow card-hover stagger-item">
              <div className="text-5xl md:text-6xl mb-3 gradient-text-blue font-bold">
                100%
              </div>
              <div className="text-xs md:text-sm text-cyan-400/80 uppercase tracking-widest">
                Safe & Transparent
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center p-2 glass">
            <div className="w-1.5 h-2 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Supported Games Section - ULTRA FUTURISTIC */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Insane Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
          
          {/* Hexagon Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300d4ff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border-2 border-cyan-400/40 mb-8 group hover:border-cyan-400/60 transition-all">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 uppercase tracking-[0.3em] font-bold">Supported Games</span>
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
              Optimize Your <span className="gradient-text-blue">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional-grade optimization for the most demanding competitive titles
            </p>
          </div>

          {/* Game Cards - INSANE DESIGN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={game.name}
                className="group relative stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Holographic Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-pulse"></div>
                
                {/* Main Card */}
                <div className="relative h-72 rounded-2xl overflow-hidden bg-black border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
                  {/* Game Image Background */}
                  <div className="absolute inset-0">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-40 group-hover:opacity-50 mix-blend-multiply transition-opacity duration-500`}></div>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* Animated Grid */}
                    <div className="absolute inset-0 opacity-10 digital-grid"></div>
                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500"></div>
                    
                    {/* Main Game Title */}
                    <div className="relative text-center">
                      <h3 className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]`}>
                        {game.name}
                      </h3>
                      
                      {/* Subtitle */}
                      <div className="glass-strong px-4 py-2 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 inline-block">
                        <p className="text-sm text-cyan-400/80 uppercase tracking-[0.2em] font-bold">{game.desc}</p>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:shadow-lg group-hover:shadow-cyan-400/50"></div>
                        <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">OPTIMIZED</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Holographic Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-400/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl mb-4">
              What Gets <span className="gradient-text-blue">Optimized</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real working Windows tweaks that competitive gamers use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-strong rounded-2xl p-8 hover-glow card-hover stagger-item group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 digital-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-400/30 mb-6">
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl mb-4">
              How It <span className="gradient-text-blue">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple 4-step process to unlock maximum performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative glass-strong rounded-2xl p-8 hover-glow card-hover stagger-item group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
                
                {/* Step number */}
                <div className="text-6xl font-bold mb-4 gradient-text-blue opacity-50">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('login')}
              className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-3 group text-xl font-medium hover-glow btn-press mx-auto relative overflow-hidden"
            >
              <span className="relative z-10">Start Optimizing Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
            <p className="text-gray-500 text-sm mt-4">No credit card required • License key from Discord bot</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo size="sm" />
          </div>
          <p className="text-gray-400 mb-2">Axira Optimizer © 2024</p>
          <p className="text-gray-500 text-sm">Professional game optimization for competitive players</p>
        </div>
      </footer>
    </div>
  );
}
