import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { PricingPage } from './components/PricingPage';
import { LoginPage } from './components/LoginPage';
import { MainDashboard } from './components/MainDashboard';
import { Snowflakes } from './components/Snowflakes';
import { AdminPanel } from './components/AdminPanel';
import { LogoTransition } from './components/LogoTransition';

type Page = 'landing' | 'pricing' | 'login' | 'dashboard' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [packageName, setPackageName] = useState('');
  const [showTransition, setShowTransition] = useState(false);

  const handleLoginSuccess = (user: string, packageId: string, pkgName: string, key?: string) => {
    setUsername(user);
    setPackageName(pkgName);
    setIsLoggedIn(true);
    // Show the sick transition
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
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
          <MainDashboard
            username={username}
            licenseKey={packageName}
          />
        );
      case 'admin':
        return <AdminPanel username={username} onBack={() => setCurrentPage('dashboard')} />;
      default:
        return <LandingPage onNavigate={(page) => setCurrentPage(page)} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {currentPage !== 'landing' && <Snowflakes />}
      
      {/* Logo Transition Animation */}
      {showTransition && <LogoTransition onComplete={handleTransitionComplete} />}
      
      {/* Only show content when NOT transitioning */}
      {!showTransition && (
        <>
          {/* Only show Navbar on landing, pricing, and login pages */}
          {(currentPage === 'landing' || currentPage === 'pricing' || currentPage === 'login') && (
            <Navbar
              onNavigate={handleNavigate}
              isLoggedIn={isLoggedIn}
            />
          )}
          <main className="w-full">{renderPage()}</main>
        </>
      )}
    </div>
  );
}
