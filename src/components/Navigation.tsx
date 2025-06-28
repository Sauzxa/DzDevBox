import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main navbar container with 3 sections */}
        <div className="flex justify-between items-center h-16">
          {/* Left section - Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/images/mainlogo.png" alt="DevBoxDZ Logo" className="h-10" />
            </a>
          </div>
          
          {/* Middle section - Navigation links (desktop) */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6">
              <a 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                Welcome
              </a>
              <a 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                Services
              </a>
              <a 
                onClick={() => scrollToSection('team')} 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                Our Team
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right section - Language toggle and theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Language toggle */}
            <div className="hidden md:flex items-center space-x-1 text-sm">
              <button 
                onClick={toggleLanguage} 
                className={`font-medium ${language === 'EN' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
              >
                EN
              </button>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <button 
                onClick={toggleLanguage} 
                className={`font-medium ${language === 'FR' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
              >
                FR
              </button>
            </div>

            {/* Theme toggle button */}
            <button 
              onClick={toggleDarkMode}
              className="hidden md:flex p-2 rounded-md border border-gray-200 dark:border-gray-700 items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-700 dark:text-blue-800" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a onClick={() => handleMenuClick('home')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200">Welcome</a>
            <a onClick={() => handleMenuClick('services')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200">Services</a>
            <a onClick={() => handleMenuClick('team')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200">Our Team</a>
            <a onClick={() => handleMenuClick('contact')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-200">Contact</a>
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center space-x-1 text-sm">
                <button 
                  onClick={toggleLanguage} 
                  className={`font-medium ${language === 'EN' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
                >
                  EN
                </button>
                <span className="text-gray-400 dark:text-gray-500">/</span>
                <button 
                  onClick={toggleLanguage} 
                  className={`font-medium ${language === 'FR' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
                >
                  FR
                </button>
              </div>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={18} className="text-yellow-500" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-blue-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
