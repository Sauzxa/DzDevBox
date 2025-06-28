
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              DzDevVox
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Algerian developers crafting modern digital experiences with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-blue-600" size={32} />
      </div>
    </section>
  );
};
