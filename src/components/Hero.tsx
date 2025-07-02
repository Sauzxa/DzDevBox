import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for device animations - position mockups to sides as scrolling occurs
  const laptopScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const laptopY = useTransform(scrollYProgress, [0, 0.3], [0, -10]);
  
  // Phone moves from center-right to far-right
  const phoneX = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    isMobile ? [20, windowWidth / 2 - 70] : [50, windowWidth / 2 - 110]
  );
  const phoneY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 0.9]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.3], [0, 5]);
  
  // Tablet moves from center-left to far-left
  const tabletX = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    isMobile ? [-20, -windowWidth / 2 + 70] : [-50, -windowWidth / 2 + 110]
  );
  const tabletY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const tabletScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 0.9]);
  const tabletRotate = useTransform(scrollYProgress, [0, 0.3], [0, -5]);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex flex-col items-center relative overflow-hidden font-kantumruy">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      
      {/* Hero Text Content - At the top after navbar */}
      <motion.div 
        className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32 sm:mt-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-4 sm:mb-8">
            A Creative Web Agency Building<br className="hidden sm:block" />
            Seamless, Scalable Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-4xl mx-auto font-normal leading-relaxed">
            We design and develop modern, high-performance websites tailored to your goals.<br className="hidden sm:block" />
            From responsive layouts to secure, scalable solutions, our team delivers clean code<br className="hidden sm:block" />
            and creative design that help your business stand out and grow online.
          </p>
        </div>
      </motion.div>
      
      {/* Device Mockups - In the center of the screen */}
      <motion.div 
        className="relative z-10 w-full flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Container to position mockups */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Laptop Mockup - Center/Foreground */}
          <motion.div
            className="absolute z-30 transform"
            style={{
              scale: laptopScale,
              y: laptopY,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src="/images/mockups/laptopMockup.png" 
              alt="Laptop Mockup"
              className="w-[500px] max-w-[90vw] sm:max-w-[70vw] md:max-w-full"
              initial={{ filter: "brightness(0.9)" }}
              whileHover={{ filter: "brightness(1.05)" }}
            />
          </motion.div>
          
          {/* Phone Mockup - Right Side */}
          <motion.div
            className="absolute z-20 transform"
            style={{
              x: phoneX,
              y: phoneY,
              scale: phoneScale,
              rotate: phoneRotate
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
            whileHover={{ scale: 0.9, rotate: 8, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src="/images/mockups/phoneMockup.png" 
              alt="Phone Mockup"
              className="w-[120px] sm:w-[150px] md:w-[180px] max-w-full"
              initial={{ filter: "brightness(0.9)" }}
              whileHover={{ filter: "brightness(1.05)" }}
            />
          </motion.div>
          
          {/* Tablet Mockup - Left Side */}
          <motion.div
            className="absolute z-10 transform"
            style={{
              x: tabletX,
              y: tabletY,
              scale: tabletScale,
              rotate: tabletRotate
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4
            }}
            whileHover={{ scale: 0.9, rotate: -8, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src="/images/mockups/tabletMockup.png" 
              alt="Tablet Mockup"
              className="w-[180px] sm:w-[200px] md:w-[250px] max-w-full"
              initial={{ filter: "brightness(0.9)" }}
              whileHover={{ filter: "brightness(1.05)" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <ChevronDown 
          className="text-blue-600" 
          size={32} 
          onClick={() => scrollToSection('services')}
          style={{ cursor: 'pointer' }}
        />
      </motion.div>
    </section>
  );
};
