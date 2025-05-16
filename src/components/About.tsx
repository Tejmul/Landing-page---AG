import React from 'react';
import { motion } from 'framer-motion';

const valueProps = [
  {
    text: 'Empowering Freelancers.',
    highlight: false,
  },
  {
    text: 'Protecting Payments.',
    highlight: true,
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Split-screen animation */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            {valueProps.map((vp, i) => (
              <motion.span
                key={i}
                className={vp.highlight ? 'text-gradient' : ''}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3, duration: 0.7 }}
                viewport={{ once: true }}
              >
                {vp.text} <br />
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            className="space-y-6 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p>
              AssuredGig exists to protect and empower freelancers by ensuring they are paid fairly and on time for their work.
            </p>
            <p>
              It solves the problem of untrustworthy clients and unpaid gigs through a secure, transparent system that uses <span className="text-primary-400 font-semibold">escrow payments</span>, <span className="text-primary-400 font-semibold">verified users</span>, and <span className="text-primary-400 font-semibold">real-time collaboration tools</span>.
            </p>
            <p>
              Whether you're a freelancer or a client, AssuredGig guarantees <span className="text-primary-400 font-semibold">trust, fairness, and smooth project workflows</span> — making freelance and internship experiences safer and more reliable for everyone.
            </p>
          </motion.div>
        </div>
        {/* Split-screen illustration */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative min-h-[320px] w-full gap-6 md:gap-0">
          {/* Left: Freelancer insecurity */}
          <motion.div
            className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-1/2 h-48 md:h-64 bg-gradient-to-r from-red-400/30 to-transparent rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-2xl font-bold text-red-300 mb-2">Insecurity</span>
            <span className="text-gray-300 text-sm">Unpaid gigs, unreliable clients</span>
          </motion.div>
          {/* Right: AssuredGig protection */}
          <motion.div
            className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-1/2 h-48 md:h-64 bg-gradient-to-l from-primary-400/30 to-transparent rounded-2xl shadow-lg flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-2xl font-bold text-primary-300 mb-2">Protection</span>
            <span className="text-gray-300 text-sm">Escrow, verification, trust</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;