import React, { useState } from 'react';
import {  Linkedin, Instagram, Twitter, Youtube, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

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
          <img src="/assuredgiglogo.png" alt="AssuredGig Logo" className="h-8 w-8 object-contain" />
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