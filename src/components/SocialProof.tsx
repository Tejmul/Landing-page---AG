import React from 'react';
import { motion } from 'framer-motion';
import VisitorCounter from './VisitorCounter';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Freelance Designer',
    text: 'AssuredGig made sure I got paid on time and gave me peace of mind with every project. The escrow system is a game changer!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul M.',
    role: 'Startup Founder',
    text: "We found top talent and the platform handled all the contracts and payments. It's the safest way to hire freelancers.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Aisha K.',
    role: 'Web Developer',
    text: 'I love the transparency and the support team is super responsive. Highly recommend for anyone serious about freelancing!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
      delay: i * 0.5,
    },
  }),
};

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Visitor Counter Section */}
        <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">Trusted by thousands</h3>
        <div className="w-full flex justify-center items-center mb-12">
          <VisitorCounter />
        </div>
        {/* Testimonial Cards Row */}
        <h3 className="text-2xl font-bold text-primary-400 mb-8 text-center">What our users say</h3>
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-6 w-full">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={
                `relative bg-gradient-to-br from-dark-300 via-dark-200 to-dark-300 rounded-2xl flex flex-col items-center text-center
                border-2 border-primary-400/20 shadow-xl transition-all duration-300
                hover:scale-105 hover:shadow-2xl hover:border-primary-400/40 cursor-pointer
                aspect-[5/6] w-full max-w-[320px] min-w-[220px] min-h-[260px] sm:min-w-[240px] sm:min-h-[300px] md:min-w-[260px] md:min-h-[320px] lg:min-w-[280px] lg:min-h-[340px]
                ${i === 0 ? '-rotate-2' : i === 2 ? 'rotate-2' : 'rotate-0'}`
              }
              custom={i}
              animate="animate"
              variants={floatVariants}
            >
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-2 border-primary-400 shadow" />
              <div className="text-lg font-semibold text-primary-300 mb-1">{t.name}</div>
              <div className="text-sm text-gray-400 mb-2">{t.role}</div>
              <div className="text-gray-200 text-base italic">"{t.text}"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 