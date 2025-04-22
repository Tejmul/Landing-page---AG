import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <motion.div 
        className="flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to learn more</span>
        <div className="w-8 h-14 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-primary-400 rounded-full mt-2 mouse-scroll"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
        <ChevronDown className="h-5 w-5 text-gray-400 mt-2 animate-pulse-slow" />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;