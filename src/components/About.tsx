import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Empowering Freelancers. <span className="text-gradient">Protecting Payments.</span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            AssuredGig exists to protect and empower freelancers by ensuring they are paid fairly and on time for their work.
          </p>
          
          <p>
            It solves the problem of untrustworthy clients and unpaid gigs through a secure, transparent system that uses <span className="text-primary-400 font-semibold">escrow payments</span>, <span className="text-primary-400 font-semibold">verified users</span>, and <span className="text-primary-400 font-semibold">real-time collaboration tools</span>.
          </p>
          
          <p>
            Whether you're a freelancer or a client, AssuredGig guarantees <span className="text-primary-400 font-semibold">trust, fairness, and smooth project workflows</span> — making freelance and internship experiences safer and more reliable for everyone.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;