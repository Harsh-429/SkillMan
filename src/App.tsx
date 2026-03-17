import { useState } from 'react';
import { CustomerDashboard } from './components/CustomerDashboard';
import { WorkerDashboard } from './components/WorkerDashboard';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { AdminDashboard } from './components/AdminDashboard';
import { ChatBot } from './components/ChatBot';

type UserType = 'customer' | 'worker' | 'admin' | null;
type Theme = 'light' | 'dark';
type Page = 'landing' | 'auth' | 'dashboard';

export default function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [authUserType, setAuthUserType] = useState<'customer' | 'worker' | 'admin'>('customer');
  const [theme, setTheme] = useState<Theme>('light');
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigateToAuth = (type: 'customer' | 'worker' | 'admin') => {
    setAuthUserType(type);
    setCurrentPage('auth');
  };

  const handleLogin = (type: UserType) => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage('landing');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToAuth={handleNavigateToAuth} theme={theme} setTheme={setTheme} />
      ) : currentPage === 'auth' ? (
        <AuthPage theme={theme} onLogin={handleLogin} onBack={handleBackToLanding} userType={authUserType} />
      ) : userType === 'customer' ? (
        <CustomerDashboard onLogout={handleLogout} theme={theme} setTheme={setTheme} />
      ) : userType === 'admin' ? (
        <AdminDashboard onLogout={handleLogout} theme={theme} setTheme={setTheme} />
      ) : (
        <WorkerDashboard onLogout={handleLogout} theme={theme} setTheme={setTheme} />
      )}
      
      {/* Chatbot - Available on dashboard pages */}
      {currentPage === 'dashboard' && <ChatBot theme={theme} />}
    </div>
  );
}