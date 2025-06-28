import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden font-kantumruy">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-8">
            A Creative Web Agency Building<br />
            Seamless, Scalable Experience
          </h1>
          <p className="text-xl md:text-xl text-gray-500 mb-10 max-w-4xl mx-auto font-normal leading-relaxed">
            We design and develop modern, high-performance websites tailored to your goals.<br />
            From responsive layouts to secure, scalable solutions, our team delivers clean code<br />
            and creative design that help your business stand out and grow online.
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
