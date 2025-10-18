import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavigation('landing')}
          >
            <div className="relative">
              <Brain className="w-8 h-8 text-[#0A66C2]" />
              <div className="absolute inset-0 blur-md bg-[#0A66C2] opacity-50"></div>
            </div>
            <span className="font-bold bg-gradient-to-r from-[#0A66C2] to-[#6A00FF] bg-clip-text text-transparent">
              AI Profile Analyzer
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-[#0A66C2] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-[#0A66C2] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-[#0A66C2] transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#0A66C2] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => handleNavigation('login')}
              className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              Login
            </Button>
            <Button 
              onClick={() => handleNavigation('signup')}
              className="gradient-primary text-white neon-glow hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-[#0A66C2] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left hover:text-[#0A66C2] transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left hover:text-[#0A66C2] transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-[#0A66C2] transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => handleNavigation('login')}
                  className="w-full border-[#0A66C2] text-[#0A66C2]"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => handleNavigation('signup')}
                  className="w-full gradient-primary text-white"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
