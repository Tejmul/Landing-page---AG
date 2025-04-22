import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = '1';
      descriptionRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section className="text-center pt-16 md:pt-24 lg:pt-32 pb-8">
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        The Future of{' '}
        <span className="text-gradient">Freelancing</span>
      </motion.h1>
      
      <motion.p 
        ref={descriptionRef}
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 opacity-0 transform translate-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Connect with top talent and opportunities in our premium
        freelance marketplace. Be a client, freelancer, or both - the
        choice is yours.
      </motion.p>
    </section>
  );
};

export default Hero;