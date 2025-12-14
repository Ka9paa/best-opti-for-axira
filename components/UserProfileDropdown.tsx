import { Settings, Edit, Scan, ExternalLink, LogOut, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

interface UserProfileDropdownProps {
  username: string;
  email: string;
  packageTier: string;
  onSmartSystemDetection: () => void;
  onLogout: () => void;
}

export function UserProfileDropdown({ 
  username, 
  email, 
  packageTier, 
  onSmartSystemDetection,
  onLogout 
}: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitial = () => {
    return username.charAt(0).toUpperCase();
  };

  const getTierLabel = () => {
    if (packageTier === 'ELITE') return 'Elite User';
    if (packageTier === 'FOUNDATION') return 'Foundation User';
    return 'Free User';
  };

  const getTierColor = () => {
    if (packageTier === 'ELITE') return 'text-yellow-400';
    if (packageTier === 'FOUNDATION') return 'text-blue-400';
    return 'text-gray-400';
  };

  const handleSettings = () => {
    setIsOpen(false);
    toast.info('Settings', {
      description: 'Settings panel coming soon!'
    });
  };

  const handleLeaveReview = () => {
    setIsOpen(false);
    toast.info('Leave a Review', {
      description: 'Thank you for your feedback! Review system coming soon.'
    });
  };

  const handleJoinDiscord = () => {
    setIsOpen(false);
    window.open('https://discord.gg/axira', '_blank');
  };

  const handleSmartSystemDetection = () => {
    setIsOpen(false);
    onSmartSystemDetection();
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 rounded-xl flex items-center gap-3 transition-all"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <span className="text-lg">{getInitial()}</span>
        </div>
        <div className="flex-1 text-left">
          <div className="text-sm mb-0.5">{username}</div>
          <div className={`text-xs ${getTierColor()}`}>{getTierLabel()}</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full left-0 w-full mb-2 bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="px-4 py-4 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{getInitial()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm mb-0.5 truncate">{username}</div>
                <div className="text-xs text-gray-400 truncate">{email}</div>
                <div className={`text-xs ${getTierColor()}`}>{getTierLabel()}</div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button
              onClick={handleSettings}
              className="w-full px-3 py-2.5 hover:bg-gray-800 rounded-lg flex items-center gap-3 text-left transition-all"
            >
              <Settings className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Settings</span>
            </button>

            <button
              onClick={handleLeaveReview}
              className="w-full px-3 py-2.5 hover:bg-gray-800 rounded-lg flex items-center gap-3 text-left transition-all"
            >
              <Edit className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Leave a review</span>
            </button>

            <button
              onClick={handleSmartSystemDetection}
              className="w-full px-3 py-2.5 hover:bg-gray-800 rounded-lg flex items-center gap-3 text-left transition-all"
            >
              <Scan className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Smart System Detection</span>
            </button>

            <button
              onClick={handleJoinDiscord}
              className="w-full px-3 py-2.5 hover:bg-gray-800 rounded-lg flex items-center gap-3 text-left transition-all"
            >
              <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="text-sm flex-1">Join our Discord</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </button>

            <div className="h-px bg-gray-700/50 my-2"></div>

            <button
              onClick={handleLogout}
              className="w-full px-3 py-2.5 hover:bg-red-500/10 rounded-lg flex items-center gap-3 text-left transition-all text-red-400"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
