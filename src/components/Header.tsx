import React, { useState } from 'react';
import {  Linkedin, Instagram, Twitter, Youtube, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const DiscordIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Header: React.FC = () => {
  const [isNotified, setIsNotified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNotify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsNotified(true);
      toast.success('You will be notified! 🎉', {
        description: "Thanks for your interest. We'll keep you updated with the latest news and launch details.",
        icon: <Check className="h-5 w-5 text-green-500" />,
        duration: 4000,
      });
      setTimeout(() => setIsNotified(false), 4000);
    }, 1200);
  };

  // Social links for random redirect
  const updateLinks = [
    'https://www.youtube.com/@assuredgig',
    'https://www.instagram.com/assuredgig/?hl=en',
    'https://www.linkedin.com/company/assuredgig/'
  ];

  const handleRandomUpdate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const randomUrl = updateLinks[Math.floor(Math.random() * updateLinks.length)];
    window.open(randomUrl, '_blank');
  };

  return (
    <header className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <img 
            src="/assuredgiglogo.webp" 
            alt="AssuredGig Logo" 
            className="h-8 w-8 object-contain"
            width="32"
            height="32"
            loading="eager"
            fetchPriority="high"
          />
          <span className="text-xl font-semibold tracking-tight">AssuredGig</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="text-gray-100 font-semibold hover:text-primary-400 transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-gray-100 font-semibold hover:text-primary-400 transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
          </a>
          <a
            href="#updates"
            onClick={handleRandomUpdate}
            className="text-gray-100 font-semibold hover:text-primary-400 transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Updates
          </a>
        </nav>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center space-x-4 bg-gray-800/50 px-4 py-2 rounded-full">
            <span className="text-sm text-gray-400">Follow us:</span>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/assuredgig/people/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/assuredgig/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/AssuredGig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@assuredgig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/TA3k6sxuz8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
            </div>
          </div>
          
          <button
            onClick={handleNotify}
            disabled={isLoading || isNotified}
            className={`bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center space-x-2 ${isLoading || isNotified ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span>Processing...</span>
              </>
            ) : isNotified ? (
              <>
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span>Notified!</span>
              </>
            ) : (
              'Get Notified'
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;