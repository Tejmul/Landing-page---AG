import React, { Suspense, lazy } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Lock, FileText, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Lazy load CountdownTimer
const CountdownTimer = lazy(() => import('./CountdownTimer'));

const launchDate = new Date('2025-06-28T00:00:00');

const floatingFeatures = [
  { icon: Lock, className: 'top-10 left-8', delay: 0 },
  { icon: FileText, className: 'bottom-20 left-10', delay: 0.5 },
  { icon: Users, className: 'top-24 right-10', delay: 1 },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-dark overflow-hidden pt-16 pb-20">
      {/* Abstract background graphic (subtle wave) */}
      <svg className="absolute top-0 left-0 w-full h-48 opacity-20 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#22d3ee" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
      {/* Title */}
      <LazyMotion features={domAnimation}>
        <motion.h1
          className="mb-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">Welcome to</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-400 drop-shadow-glow">AssuredGig</span>
        </motion.h1>
      </LazyMotion>
      {/* Value Proposition Badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 z-10">
        <span className="bg-primary-400/10 text-primary-300 px-6 py-3 rounded-full font-semibold text-base border border-primary-400/30 min-w-[200px] cursor-pointer hover:bg-primary-400/20 transition-all duration-200">Guaranteed Payments</span>
        <span className="bg-primary-400/10 text-primary-300 px-6 py-3 rounded-full font-semibold text-base border border-primary-400/30 min-w-[200px] cursor-pointer hover:bg-primary-400/20 transition-all duration-200">Verified Clients & Freelancers</span>
        <span className="bg-primary-400/10 text-primary-300 px-6 py-3 rounded-full font-semibold text-base border border-primary-400/30 min-w-[200px] cursor-pointer hover:bg-primary-400/20 transition-all duration-200">Dispute Resolution</span>
      </div>
      {/* Countdown Timer Label */}
      <div className="mb-2 z-10">
        <span className="block text-primary-300 font-semibold tracking-wide text-lg">Launching In</span>
      </div>
      {/* Countdown Timer with border/background */}
      <div className="mb-12 z-10 flex justify-center">
        <div className="rounded-2xl border border-primary-400/30 bg-dark-300/60 px-8 py-6 shadow-lg inline-block">
          <Suspense fallback={<div className="text-primary-300">Loading...</div>}>
            <CountdownTimer targetDate={launchDate} />
          </Suspense>
        </div>
      </div>
      {/* CTA Buttons */}
      <LazyMotion features={domAnimation}>
        <motion.div
          className="z-10 flex flex-col sm:flex-row items-center justify-center gap-6 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <button
            className="bg-yellow-400 text-dark px-12 py-5 rounded-xl font-bold text-xl shadow-lg animate-pulse hover:bg-yellow-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            onClick={() => window.open('https://www.instagram.com/assuredgig/?hl=en', '_blank')}
          >
            Join the Waitlist
          </button>
          <button
            className="bg-transparent border-2 border-primary-400 text-primary-300 px-12 py-5 rounded-xl font-bold text-xl hover:bg-primary-400 hover:text-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
            onClick={() => navigate('/learn-more')}
          >
            Learn More
          </button>
        </motion.div>
      </LazyMotion>
      {/* Floating 3D Feature Icons (moved away from center) */}
      {floatingFeatures.map((feature, i) => (
        <LazyMotion key={i} features={domAnimation}>
          <motion.div
            className={`absolute ${feature.className} z-0`}
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: feature.delay }}
          >
            <feature.icon className="h-10 w-10 text-primary-300 drop-shadow-glow bg-dark-300/80 rounded-full p-2" />
          </motion.div>
        </LazyMotion>
      ))}
    </section>
  );
};

export default Hero;