import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { UploadPage } from './components/UploadPage';
import { ReportsPage } from './components/ReportsPage';
import { SettingsPage } from './components/SettingsPage';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { ChatBot } from './components/ChatBot';

type Page = 'landing' | 'login' | 'signup' | 'dashboard' | 'upload' | 'analysis' | 'reports' | 'settings' | 'features';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    // Show chatbot on dashboard pages
    if (['dashboard', 'upload', 'analysis', 'reports', 'settings'].includes(page)) {
      setShowChatBot(true);
    } else {
      setShowChatBot(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
      case 'features':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return (
          <LoginPage
            onNavigate={handleNavigate}
            onForgotPassword={() => setShowForgotPassword(true)}
          />
        );
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'upload':
        return <UploadPage onNavigate={handleNavigate} />;
      case 'analysis':
        return <ReportsPage onNavigate={handleNavigate} />;
      case 'reports':
        return <ReportsPage onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showNavbar = ['landing', 'features'].includes(currentPage);

  return (
    <div className="min-h-screen">
      {showNavbar && <Navbar onNavigate={handleNavigate} currentPage={currentPage} />}
      {renderPage()}
      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />
      {showChatBot && <ChatBot />}
    </div>
  );
}
