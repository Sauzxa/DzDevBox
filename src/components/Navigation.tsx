import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add actual dark mode implementation here
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              <span className="text-blue-600">Dev</span>
              <span className="text-blue-800">BoxDZ</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Welcome</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Our Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</button>
            </div>
            <div className="ml-8 flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm">
                <button className="font-medium">EN</button>
                <span className="text-gray-400">/</span>
                <button className="text-gray-400">FR</button>
              </div>
              <button 
                onClick={toggleDarkMode}
                className="ml-4 px-4 py-2 border border-gray-200 rounded-md flex items-center text-sm font-medium"
              >
                Toggle light mode
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => handleMenuClick('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Welcome</button>
            <button onClick={() => handleMenuClick('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</button>
            <button onClick={() => handleMenuClick('team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Our Team</button>
            <button onClick={() => handleMenuClick('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</button>
            <div className="flex items-center px-3 py-2">
              <div className="flex items-center space-x-1 text-sm">
                <button className="font-medium">EN</button>
                <span className="text-gray-400">/</span>
                <button className="text-gray-400">FR</button>
              </div>
              <button 
                onClick={toggleDarkMode}
                className="ml-4 px-3 py-1 border border-gray-200 rounded-md text-sm"
              >
                Toggle light mode
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
