import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { PricingPage } from './components/PricingPage';
import { LoginPage } from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { GameSelection } from './components/GameSelection';
import { GameSpecificOptimizer } from './components/GameSpecificOptimizer';
import History from './components/History';
import Settings from './components/Settings';
import { Snowflakes } from './components/Snowflakes';

type Page = 'landing' | 'pricing' | 'login' | 'dashboard' | 'games' | 'game-optimizer' | 'settings' | 'history';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [packageName, setPackageName] = useState('');
  const [selectedGame, setSelectedGame] = useState('');

  const handleLoginSuccess = (user: string, packageId: string, pkgName: string, key?: string) => {
    setUsername(user);
    setPackageName(pkgName);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPackageName('');
    setCurrentPage('landing');
  };

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleNavigate = (page: 'home' | 'pricing' | 'login' | 'dashboard') => {
    if (page === 'home') {
      setCurrentPage('landing');
    } else {
      setCurrentPage(page);
    }
  };

  const handleSelectGame = (game: string) => {
    setSelectedGame(game);
    setCurrentPage('game-optimizer');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={(page) => setCurrentPage(page)} />;
      case 'pricing':
        return <PricingPage onGetStarted={handleGetStarted} />;
      case 'login':
        return <LoginPage onLogin={handleLoginSuccess} onBack={() => setCurrentPage('landing')} />;
      case 'dashboard':
        return (
          <Dashboard
            username={username}
            licenseKey={packageName}
            onNavigate={(page) => setCurrentPage(page)}
          />
        );
      case 'games':
        return (
          <GameSelection
            username={username}
            packageName={packageName}
            onSelectGame={handleSelectGame}
            onLogout={handleLogout}
            onBackToDashboard={() => setCurrentPage('dashboard')}
          />
        );
      case 'game-optimizer':
        return (
          <GameSpecificOptimizer
            gameName={selectedGame}
            packageName={packageName}
            onBack={() => setCurrentPage('games')}
          />
        );
      case 'settings':
        return <Settings onBack={() => setCurrentPage('dashboard')} />;
      case 'history':
        return <History onBack={() => setCurrentPage('dashboard')} />;
      default:
        return <LandingPage onNavigate={(page) => setCurrentPage(page)} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      {currentPage !== 'landing' && <Snowflakes />}
      <Navbar
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
      />
      <main className="flex-1 w-full pt-16">{renderPage()}</main>
    </div>
  );
}
```

THE ONLY 2 CHANGES:

Line 56: 
```tsx
// OLD:
return <LandingPage onGetStarted={handleGetStarted} />;

// NEW:
return <LandingPage onNavigate={(page) => setCurrentPage(page)} />;
```

Line 91:
```tsx
// OLD:
return <LandingPage onGetStarted={handleGetStarted} />;

// NEW:
return <LandingPage onNavigate={(page) => setCurrentPage(page)} />;
