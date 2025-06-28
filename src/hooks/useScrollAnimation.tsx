
import { useState, useEffect } from 'react';

export const useScrollAnimation = (sectionId: string, delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const element = document.getElementById(sectionId) || 
                   document.querySelector(`[data-section="${sectionId}"]`);
    
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, delay]);

  return isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0';
};
