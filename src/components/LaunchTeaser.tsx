import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Check } from 'lucide-react';
import { toast } from 'sonner';

const LaunchTeaser: React.FC = () => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinWaitlist = () => {
    setIsJoined(true);
    toast.success('Successfully joined the waitlist!', {
      description: "You'll be notified when AssuredGig launches.",
      icon: <Check className="h-5 w-5 text-green-500" />,
      duration: 5000,
    });
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-dark-300 to-dark-400 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
      >
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Zap className="h-8 w-15 text-primary-400 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            The Future of{' '}
            <span className="text-gradient">Freelancing</span>
            </h2>
          
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Be part of a new era of trusted freelancing.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Rocket className="h-6 w-6 text-primary-400 mr-2" />
            <p className="text-2xl font-semibold">
              Launching June 1st, 2025
            </p>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            All rights Reserved - Founded by Tejmul Movin
          </motion.p>
          
          <AnimatePresence>
            {!isJoined ? (
              <motion.button
                onClick={handleJoinWaitlist}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-400 text-white px-8 py-3 rounded-lg font-medium text-lg hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20"
              >
                Join the Waitlist
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-primary-400"
              >
                <Check className="h-6 w-6" />
                <span className="text-lg font-medium">You're on the list!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default LaunchTeaser;