import React from 'react';
import { Zap, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary-400" />
          <span className="text-xl font-semibold tracking-tight">AssuredGig</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#updates" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 hover:scale-110 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <a 
            href="#notify" 
            className="bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Get Notified
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;