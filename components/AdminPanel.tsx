import { useState, useEffect } from 'react';
import { Shield, Users, Key, Search, Ban, UserCheck, Edit2, Plus, X, RotateCcw } from 'lucide-react';

interface AdminPanelProps {
  username: string;
  onBack: () => void;
}

interface UserData {
  username: string;
  key: string;
  packageTier: string;
  registeredDate: string;
  lastLogin: string;
  notes: string;
  status: 'active' | 'banned';
  expiryDate: string;
  hwid?: string;
  hwidLocked?: boolean;
  lastIP?: string;
  loginAttempts?: Array<{
    timestamp: string;
    status: string;
    ip: string;
    hwid: string;
  }>;
  totalLogins?: number;
}

export function AdminPanel({ username, onBack }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'users' | 'admins'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [adminList, setAdminList] = useState<string[]>([]);
  const [newAdminUsername, setNewAdminUsername] = useState('');
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');

  // Check if current user is owner
  useEffect(() => {
    const owner = username.toLowerCase() === 'deccc';
    setIsOwner(owner);
    
    // Load admin list
    const savedAdmins = localStorage.getItem('axira_admins');
    if (savedAdmins) {
      setAdminList(JSON.parse(savedAdmins));
    }
  }, [username]);

  // Load user data from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('optiaxira_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      setUserData(users);
      console.log('📊 Loaded users from localStorage:', users);
    }
  }, []);

  const getTierColor = (tier: string) => {
    if (tier.includes('ELITE')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    if (tier.includes('FOUNDATION')) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (tier.includes('CHECKUP')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const handleToggleBan = (targetUsername: string) => {
    const savedUsers = localStorage.getItem('optiaxira_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: any) => u.username === targetUsername);
      
      if (userIndex !== -1) {
        users[userIndex].status = users[userIndex].status === 'banned' ? 'active' : 'banned';
        localStorage.setItem('optiaxira_users', JSON.stringify(users));
        setUserData(users);
        alert(`User ${targetUsername} ${users[userIndex].status === 'banned' ? 'banned' : 'unbanned'} successfully!`);
      }
    }
  };

  const handleResetHWID = (targetUsername: string) => {
    const savedUsers = localStorage.getItem('optiaxira_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: any) => u.username === targetUsername);
      
      if (userIndex !== -1) {
        users[userIndex].hwid = null;
        users[userIndex].hwidLocked = false;
        localStorage.setItem('optiaxira_users', JSON.stringify(users));
        setUserData(users);
        alert(`HWID lock reset for ${targetUsername}! They can now login from any device.`);
      }
    }
  };

  const handleSaveNotes = (key: string) => {
    const savedUsers = localStorage.getItem('optiaxira_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: any) => u.key === key);
      
      if (userIndex !== -1) {
        users[userIndex].notes = editNotes;
        localStorage.setItem('optiaxira_users', JSON.stringify(users));
        setUserData(users);
        setEditingKey(null);
        alert('Notes saved successfully!');
      }
    }
  };

  const handleAddAdmin = () => {
    const usernameToAdd = newAdminUsername.trim();
    
    if (!usernameToAdd) {
      alert('Please enter a username');
      return;
    }

    // Check if user exists in localStorage
    const savedUsers = localStorage.getItem('optiaxira_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const userExists = users.some((u: any) => u.username.toLowerCase() === usernameToAdd.toLowerCase());
      
      if (!userExists) {
        alert(`❌ USER NOT FOUND\n\n"${usernameToAdd}" has never logged in to Axira Optimizer. Only users who have created an account and logged in can be made admins.\n\nRegistered users:\n${users.map((u: any) => '• ' + u.username).join('\n')}`);
        return;
      }
    } else {
      alert('❌ No users have registered yet!');
      return;
    }

    // Check if already an admin
    if (adminList.includes(usernameToAdd)) {
      alert(`${usernameToAdd} is already an admin!`);
      return;
    }

    // Check if trying to add owner
    if (usernameToAdd.toLowerCase() === 'deccc') {
      alert('deccc is the owner and already has full admin privileges!');
      return;
    }

    // Add to admin list
    const updatedAdmins = [...adminList, usernameToAdd];
    setAdminList(updatedAdmins);
    localStorage.setItem('axira_admins', JSON.stringify(updatedAdmins));
    setNewAdminUsername('');
    alert(`✅ ${usernameToAdd} has been granted admin access!`);
  };

  const handleRemoveAdmin = (adminUsername: string) => {
    if (confirm(`Remove ${adminUsername} from admin list?`)) {
      const updatedAdmins = adminList.filter(a => a !== adminUsername);
      setAdminList(updatedAdmins);
      localStorage.setItem('axira_admins', JSON.stringify(updatedAdmins));
      alert(`${adminUsername} has been removed from admins.`);
    }
  };

  // Filter users based on search
  const filteredUsers = userData.filter(
    item =>
      (item.key?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (item.username?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (item.notes?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all border border-blue-500/30"
          >
            ← Back to Dashboard
          </button>
          <div className="flex items-center gap-4 mb-2">
            <Shield className="w-10 h-10 text-blue-400" />
            <h1 className="text-white text-4xl">Admin Panel</h1>
          </div>
          <p className="text-gray-400">
            {isOwner ? '👑 Owner Access - Full Control' : '🛡️ Admin Access'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeTab === 'users'
                ? 'bg-blue-500/30 text-white border-2 border-blue-500'
                : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800'
            }`}
          >
            <Users className="w-5 h-5 inline mr-2" />
            User Management ({userData.length})
          </button>
          {isOwner && (
            <button
              onClick={() => setActiveTab('admins')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === 'admins'
                  ? 'bg-blue-500/30 text-white border-2 border-blue-500'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800'
              }`}
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Admin Management ({adminList.length})
            </button>
          )}
        </div>

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by username, license key, or notes..."
                  className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* User List */}
            <div className="space-y-4">
              {filteredUsers.length === 0 ? (
                <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 text-center">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">No users match your search</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or clear the search</p>
                </div>
              ) : (
                filteredUsers.map((item) => (
                  <div
                    key={item.key}
                    className={`bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border ${
                      item.status === 'banned' ? 'border-red-500/50' : 'border-blue-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Left Side - User Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-lg border text-sm ${getTierColor(item.packageTier)}`}>
                            {item.packageTier}
                          </span>
                          {item.status === 'banned' && (
                            <span className="px-3 py-1 rounded-lg border bg-red-500/20 text-red-400 border-red-500/30 text-sm">
                              🚫 BANNED
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-400 text-xs mb-1">License Key</p>
                            <p className="text-white font-mono text-sm">{item.key}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Username</p>
                            <p className="text-white text-sm">{item.username}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Registered</p>
                            <p className="text-white text-sm">{item.registeredDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Last Login</p>
                            <p className="text-white text-sm">{item.lastLogin}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Total Logins</p>
                            <p className="text-white text-sm">{item.totalLogins || 0}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">HWID Status</p>
                            <p className="text-white text-sm">
                              {item.hwidLocked ? '🔒 Locked' : '🔓 Unlocked'}
                            </p>
                          </div>
                        </div>

                        {/* Notes Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-gray-400 text-xs">Notes (Real Identity)</p>
                            <button
                              onClick={() => {
                                setEditingKey(item.key);
                                setEditNotes(item.notes);
                              }}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                          </div>

                          {editingKey === item.key ? (
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={editNotes}
                                onChange={(e) => setEditNotes(e.target.value)}
                                placeholder="e.g. John Smith - Discord: john#1234"
                                className="flex-1 bg-black/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white text-sm"
                              />
                              <button
                                onClick={() => handleSaveNotes(item.key)}
                                className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingKey(null)}
                                className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <p className="text-white text-sm bg-black/30 px-3 py-2 rounded-lg">
                              {item.notes || <span className="text-gray-500 italic">No notes added</span>}
                            </p>
                          )}
                        </div>

                        {/* Login History */}
                        {item.loginAttempts && item.loginAttempts.length > 0 && (
                          <div>
                            <p className="text-gray-400 text-xs mb-2">Recent Login Attempts</p>
                            <div className="space-y-1 max-h-40 overflow-y-auto">
                              {item.loginAttempts.slice(-5).reverse().map((attempt, idx) => (
                                <div key={idx} className="text-xs bg-black/30 px-2 py-1 rounded">
                                  <span className={attempt.status.includes('Success') ? 'text-green-400' : 'text-red-400'}>
                                    {attempt.status}
                                  </span>
                                  <span className="text-gray-500"> • {attempt.timestamp}</span>
                                  <span className="text-gray-500"> • IP: {attempt.ip}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side - Actions */}
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleToggleBan(item.username)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            item.status === 'banned'
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                              : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30'
                          }`}
                        >
                          {item.status === 'banned' ? (
                            <>
                              <UserCheck className="w-4 h-4 inline mr-1" />
                              Unban
                            </>
                          ) : (
                            <>
                              <Ban className="w-4 h-4 inline mr-1" />
                              Ban
                            </>
                          )}
                        </button>
                        {item.hwidLocked && (
                          <button
                            onClick={() => handleResetHWID(item.username)}
                            className="px-4 py-2 rounded-lg text-sm transition-all bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border border-yellow-500/30"
                          >
                            <RotateCcw className="w-4 h-4 inline mr-1" />
                            Reset HWID
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Admin Management Tab */}
        {activeTab === 'admins' && (
          <div className="space-y-4">
            {!isOwner ? (
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 text-center">
                <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-white text-xl mb-2">Owner Access Required</h3>
                <p className="text-gray-400">Only the owner can manage admin permissions</p>
              </div>
            ) : (
              <>
                {/* Add Admin */}
                <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
                  <h3 className="text-white text-lg mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Admin
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={newAdminUsername}
                      onChange={(e) => setNewAdminUsername(e.target.value)}
                      placeholder="Enter username..."
                      className="flex-1 bg-black/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500"
                    />
                    <button
                      onClick={handleAddAdmin}
                      className="px-6 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all border border-green-500/30"
                    >
                      Add Admin
                    </button>
                  </div>
                </div>

                {/* Admin List */}
                <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
                  <h3 className="text-white text-lg mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Current Admins ({adminList.length})
                  </h3>

                  {adminList.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">No admins added yet</p>
                  ) : (
                    <div className="space-y-2">
                      {adminList.map((admin) => (
                        <div
                          key={admin}
                          className="flex items-center justify-between bg-black/30 p-4 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-blue-400" />
                            <span className="text-white">{admin}</span>
                          </div>
                          <button
                            onClick={() => handleRemoveAdmin(admin)}
                            className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-all border border-red-500/30 text-sm"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
