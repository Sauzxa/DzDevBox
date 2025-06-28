
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              DzDevVox
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('tech-stack')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Tech Stack</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</button>
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
            <button onClick={() => handleMenuClick('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</button>
            <button onClick={() => handleMenuClick('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</button>
            <button onClick={() => handleMenuClick('tech-stack')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Tech Stack</button>
            <button onClick={() => handleMenuClick('team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Team</button>
            <button onClick={() => handleMenuClick('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};
