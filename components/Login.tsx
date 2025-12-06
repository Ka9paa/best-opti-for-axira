import { useState } from 'react';
import { Lock, User, Key, AlertCircle } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: (username: string, licenseType: string) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateLicenseKey = (key: string): string | null => {
    if (key.startsWith('ELITE-')) return 'Elite';
    if (key.startsWith('FOUNDATION-')) return 'Foundation';
    if (key.startsWith('CHECKUP-')) return 'Checkup';
    if (key.startsWith('PRO-')) return 'Pro';
    if (key.startsWith('BASIC-')) return 'Basic';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validate inputs
    if (!username || !password || !licenseKey) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    // Validate license key format
    const licenseType = validateLicenseKey(licenseKey);
    if (!licenseType) {
      setError('Invalid license key format');
      setLoading(false);
      return;
    }

    // Mock authentication - Replace with actual API call
    if (password.length < 6) {
      setError('Invalid credentials');
      setLoading(false);
      return;
    }

    // Check HWID (simulated - will be real in production)
    const storedHWID = localStorage.getItem(`hwid_${username}`);
    const currentHWID = navigator.userAgent + navigator.platform;
    
    if (storedHWID && storedHWID !== currentHWID) {
      setError('HWID mismatch - Account locked to another device');
      setLoading(false);
      // Log failed attempt (would be sent to backend in production)
      console.error('Failed login attempt - HWID mismatch', {
        username,
        timestamp: new Date().toISOString(),
      });
      return;
    }

    // Store HWID on first login
    if (!storedHWID) {
      localStorage.setItem(`hwid_${username}`, currentHWID);
    }

    setLoading(false);
    onLoginSuccess(username, licenseType);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-blue-500 mb-2">Axira Optimizer</h1>
          <p className="text-gray-400">Sign in to access your optimization tools</p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-white mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your username"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  disabled={loading}
                />
              </div>
            </div>

            {/* License Key */}
            <div>
              <label htmlFor="license" className="block text-white mb-2">
                License Key
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="license"
                  type="text"
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value.toUpperCase())}
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  placeholder="ELITE-XXXX-XXXX-XXXX"
                  disabled={loading}
                />
              </div>
              <p className="mt-2 text-gray-500 text-sm">
                Format: ELITE-, FOUNDATION-, CHECKUP-, PRO-, BASIC-
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-500">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-colors"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Don&apos;t have a license?</p>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              Purchase on Discord
            </a>
          </div>
        </div>

        {/* HWID Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            🔒 Protected by HWID locking - One device per account
          </p>
        </div>
      </div>
    </div>
  );
}
