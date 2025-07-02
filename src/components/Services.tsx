import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Services = () => {
  // Define services with their images, titles and descriptions
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Graphic Design",
      description: "Creative and eye-catching designs that effectively communicate your brand message.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that provide seamless user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "SEO & Content Writing",
      description: "Strategic content creation and optimization to boost your online visibility and engagement.",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Use scroll animation hook
  const animationClass = useScrollAnimation('services');

  // Calculate previous and next indices
  const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;

  // Define animation variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      y: "-50%",
      opacity: 0,
      rotate: direction > 0 ? 10 : -10,
      scale: 0.9
    }),
    center: {
      x: 0,
      y: "-50%",
      opacity: 1,
      rotate: 0,
      scale: 1,
      zIndex: 10
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      y: "-50%",
      opacity: 0,
      rotate: direction < 0 ? 10 : -10,
      scale: 0.9,
      zIndex: 0
    })
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return; // Prevent rapid clicking during animation
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    if (newDirection > 0) {
      // Moving forward
      setCurrentIndex(nextIndex);
    } else {
      // Moving backward
      setCurrentIndex(prevIndex);
    }
    
    // Reset animation lock after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  return (
    <section id="services" className={`py-20 relative ${animationClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating modern digital solutions using the latest technologies
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center min-h-[500px]">
          {/* Service Card Carousel Container - taking up 80% of section width */}
          <div 
            className="relative w-full mx-auto h-[500px] flex items-center justify-center overflow-visible"
            style={{ perspective: "1200px" }}
          >
            {/* Previous card (left side, partially visible) */}
            <motion.div 
              className="absolute left-0 top-1/2 w-full max-w-2xl hidden sm:block"
              initial={false}
              animate={{
                x: "-20%",
                y: "-50%",
                opacity: 0.6,
                scale: 0.9,
                rotateY: 10,
                zIndex: 0
              }}
              transition={{ duration: 0.5 }}
              style={{ 
                transformStyle: "preserve-3d", 
                transformOrigin: "center center",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative w-full h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${services[prevIndex].image})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{services[prevIndex].title}</h3>
                </div>
              </div>
            </motion.div>

            {/* Current card (center, main focus) */}
            <AnimatePresence initial={false} custom={direction} mode="sync" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute top-1/2 bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-2xl"
                style={{ 
                  zIndex: 10,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="relative w-full h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${services[currentIndex].image})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{services[currentIndex].title}</h3>
                  <p className="text-gray-600">{services[currentIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next card (right side, partially visible) */}
            <motion.div 
              className="absolute right-0 top-1/2 w-full max-w-2xl hidden sm:block"
              initial={false}
              animate={{
                x: "20%",
                y: "-50%",
                opacity: 0.6,
                scale: 0.9,
                rotateY: -10,
                zIndex: 0
              }}
              transition={{ duration: 0.5 }}
              style={{ 
                transformStyle: "preserve-3d", 
                transformOrigin: "center center",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative w-full h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${services[nextIndex].image})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{services[nextIndex].title}</h3>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <Button 
              onClick={() => paginate(-1)}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-lg rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center z-30"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            
            <Button 
              onClick={() => paginate(1)}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-lg rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center z-30"
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setIsAnimating(true);
                  }
                }}
                className={`h-2 rounded-full ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
                animate={{ width: index === currentIndex ? 32 : 8 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
