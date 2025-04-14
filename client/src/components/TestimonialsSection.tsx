import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials, Testimonial } from '@/data/testimonials';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();
  
  // Handle testimonial rotation
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  // Pause autoplay when hovering over testimonials
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Manual navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={cn(
          "w-5 h-5", 
          i < rating 
            ? "text-yellow-400" 
            : "text-gray-300 dark:text-gray-600"
        )}
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };
  
  // Calculate positions and z-index for 3D effect
  const getCardStyles = (index: number) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    const normalizedDiff = diff > testimonials.length / 2 ? diff - testimonials.length : diff;
    
    // Base styles
    let opacity = 1;
    let scale = 1;
    let zIndex = 1;
    let x = '0%';
    let rotateY = '0deg';
    
    // Position based on distance from active
    if (normalizedDiff === 0) {
      // Active card
      zIndex = 3;
    } else if (normalizedDiff === 1 || normalizedDiff === -1) {
      // Adjacent cards
      opacity = 0.7;
      scale = 0.85;
      x = normalizedDiff === 1 ? '85%' : '-85%';
      rotateY = normalizedDiff === 1 ? '-15deg' : '15deg';
      zIndex = 2;
    } else if (normalizedDiff === 2 || normalizedDiff === -2) {
      // Further cards
      opacity = 0.4;
      scale = 0.7;
      x = normalizedDiff === 2 ? '150%' : '-150%';
      rotateY = normalizedDiff === 2 ? '-25deg' : '25deg';
      zIndex = 1;
    } else {
      // Hidden cards
      opacity = 0;
      scale = 0.5;
      x = normalizedDiff > 0 ? '200%' : '-200%';
      zIndex = 0;
    }
    
    return {
      opacity,
      scale,
      x,
      rotateY,
      zIndex
    };
  };
  
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what my clients have to say about working together on their projects.
          </p>
        </motion.div>
        
        <div 
          className="relative py-10 px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 3D Effect - Perspective container */}
          <div 
            className="relative h-[500px] md:h-[400px] perspective-1000 w-full max-w-4xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => {
              const styles = getCardStyles(index);
              
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute top-0 left-0 right-0 w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: styles.opacity,
                    scale: styles.scale,
                    x: styles.x,
                    rotateY: styles.rotateY,
                    zIndex: styles.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <div className="relative mr-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-400">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic relative">
                        <svg
                          className="absolute -top-6 -left-2 h-10 w-10 text-gray-200 dark:text-gray-700 transform -rotate-180"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative z-10 text-base md:text-lg">{testimonial.content}</p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex
                      ? 'bg-primary-500'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}