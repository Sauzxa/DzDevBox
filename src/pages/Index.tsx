
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <TechStack />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
