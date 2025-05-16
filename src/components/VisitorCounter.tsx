import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Simulate a growing visitor count
const VisitorCounter: React.FC = () => {
  const [totalVisitors, setTotalVisitors] = useState(47892);
  const [liveVisitors, setLiveVisitors] = useState(128);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Simulate growing total visitor count
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalVisitors(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);
    
    return () => clearInterval(timer);
  }, []);

  // Simulate fluctuating live visitor count
  useEffect(() => {
    const timer = setInterval(() => {
      const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
      setLiveVisitors(prev => Math.max(100, Math.min(200, prev + change)));
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  // Animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full flex flex-col md:flex-row justify-center items-center gap-6"
      variants={counterVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex flex-col items-center bg-dark-200 rounded-lg p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="text-gray-300 text-sm md:text-base mb-2 flex items-center">
          <span className="mr-2">Total Visitors</span>
        </div>
        <div className="relative">
          <motion.span 
            className="text-3xl md:text-4xl font-bold"
            animate={{ 
              scale: hasAnimated ? [1, 1.05, 1] : 1,
              color: hasAnimated ? ['#fff', '#22d3ee', '#fff'] : '#fff' 
            }}
            transition={{ duration: 0.5 }}
          >
            {totalVisitors.toLocaleString()}
          </motion.span>
          <motion.div 
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center bg-dark-200 rounded-lg p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="text-gray-300 text-sm md:text-base mb-2 flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span>Live Now</span>
        </div>
        <motion.span 
          className="text-3xl md:text-4xl font-bold text-primary-400"
          animate={{ 
            scale: liveVisitors > 150 ? [1, 1.05, 1] : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {liveVisitors}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default VisitorCounter;