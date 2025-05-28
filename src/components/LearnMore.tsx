import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Rocket, Sparkles } from 'lucide-react';

const LearnMore: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const versions = [
    {
      version: "V1",
      title: "Secure Payments",
      description: "The foundation of trust in freelancing",
      icon: Shield,
      features: [
        "Escrow-based payment protection",
        "Verified user profiles",
        "Basic dispute resolution",
        "Secure communication channels"
      ]
    },
    {
      version: "V2",
      title: "Smart Matching",
      description: "Intelligent project allocation",
      icon: Sparkles,
      features: [
        "AI-powered skill matching",
        "Automated project scoping",
        "Smart pricing recommendations",
        "Performance analytics"
      ]
    },
    {
      version: "V3",
      title: "Future of Work",
      description: "The next generation of freelancing",
      icon: Rocket,
      features: [
        "Decentralized work marketplace",
        "Blockchain-based reputation",
        "Global talent network",
        "Automated smart contracts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-transparent opacity-50" />
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-400 mb-6 drop-shadow-glow">
            The Evolution of Freelancing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From secure payments to the future of work - AssuredGig is redefining how freelancing works
          </p>
        </motion.div>
      </section>

      {/* Version Showcase */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {versions.map((version, index) => (
              <motion.div
                key={version.version}
                className="bg-dark-200 rounded-2xl p-8 border border-primary-400/20 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 bg-primary-400/10 px-4 py-2 rounded-bl-2xl">
                  <span className="text-primary-400 font-bold">{version.version}</span>
                </div>
                <version.icon className="h-12 w-12 text-primary-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-2">{version.title}</h3>
                <p className="text-gray-400 mb-6">{version.description}</p>
                <ul className="space-y-3">
                  {version.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article 
            className="prose prose-invert prose-lg max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary-400 mb-6">Beyond Traditional Freelancing</h2>
            <p className="text-gray-300 mb-8">
              AssuredGig isn't just another freelance platform. We're building the future of work, 
              starting with secure payments and evolving into a comprehensive ecosystem that 
              revolutionizes how freelancers and clients connect, collaborate, and succeed.
            </p>

            <div className="bg-dark-200 rounded-2xl p-8 mb-12 border border-primary-400/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                From V1's foundation of trust and security to V3's vision of a decentralized, 
                AI-powered marketplace, we're creating a platform that grows with the future of work. 
                Each version builds upon the last, creating a seamless evolution from traditional 
                freelancing to the next generation of work.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-400 mb-6">The Journey</h2>
            <div className="space-y-8">
              <div className="bg-dark-200 rounded-2xl p-6 border border-primary-400/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary-400 mr-4">V1</span>
                  <h3 className="text-xl font-semibold text-white">Building Trust</h3>
                </div>
                <p className="text-gray-300">
                  Starting with the fundamental need for security and trust in freelancing, 
                  V1 establishes the foundation for a reliable platform where payments are 
                  protected and users are verified.
                </p>
              </div>

              <div className="bg-dark-200 rounded-2xl p-6 border border-primary-400/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary-400 mr-4">V2</span>
                  <h3 className="text-xl font-semibold text-white">Smart Integration</h3>
                </div>
                <p className="text-gray-300">
                  V2 introduces intelligent matching and automation, making it easier for 
                  freelancers to find the right projects and for clients to find the perfect talent.
                </p>
              </div>

              <div className="bg-dark-200 rounded-2xl p-6 border border-primary-400/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary-400 mr-4">V3</span>
                  <h3 className="text-xl font-semibold text-white">Future of Work</h3>
                </div>
                <p className="text-gray-300">
                  V3 represents the future of freelancing - a decentralized, blockchain-powered 
                  marketplace where work is more efficient, transparent, and rewarding than ever before.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://www.instagram.com/assuredgig/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-400 text-dark font-semibold rounded-xl hover:bg-primary-300 transition-all duration-300"
              >
                Join the Evolution
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default LearnMore; 