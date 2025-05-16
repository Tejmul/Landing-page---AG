import React from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { 
  Lock, Users, FileText, LayoutDashboard, 
  MessageSquare, Bell, Star, Shield 
} from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Escrow Payment System',
    description: 'Clients deposit payments upfront. Funds are only released when milestones are approved — protecting both sides.'
  },
  {
    icon: Users,
    title: 'Verified Users',
    description: 'Strict verification for both freelancers and clients. No scams, only serious professionals.'
  },
  {
    icon: FileText,
    title: 'Smart Contracts',
    description: 'Every job has a digitally signed contract covering scope, deadlines, and pay. Say goodbye to miscommunication.'
  },
  {
    icon: LayoutDashboard,
    title: 'Project Dashboard',
    description: 'View milestones, messages, payments, and files — all in one dashboard for real-time collaboration.'
  },
  {
    icon: MessageSquare,
    title: 'In-App Messaging',
    description: 'Chat and share documents directly in the platform. Smooth communication, no third-party tools.'
  },
  {
    icon: Bell,
    title: 'Milestone Notifications',
    description: 'Get notified instantly for updates, approvals, and payments. Always stay on track.'
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Build your credibility through transparent, mutual reviews after every gig.'
  },
  {
    icon: Shield,
    title: 'Dispute Resolution Support',
    description: 'If things go south, our team helps resolve conflicts quickly and fairly.'
  }
];

const stats = [
  { label: 'Total Freelancers', value: 12800 },
  { label: 'Clients Protected', value: 3200 },
  { label: 'Gigs Secured', value: 54000 },
];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    let startTime: number | null = null;
    const duration = 1500;
    function animateNumber(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    }
    requestAnimationFrame(animateNumber);
    return () => {};
  }, [value]);
  return <span>{display.toLocaleString()}</span>;
}

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Removed animated statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Features for <span className="text-gradient">Secure Freelancing</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 8px 32px 0 rgba(34,211,238,0.15)',
              zIndex: 10
            }}
            className="bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer backdrop-blur-sm group relative"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="bg-dark-400 p-4 rounded-full mb-6 relative"
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6, type: 'spring' }}
              >
                <feature.icon className="h-8 w-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary-400/10 rounded-full blur-xl" />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-400 leading-relaxed mb-2 min-h-[64px]">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;