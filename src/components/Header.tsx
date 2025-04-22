import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
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
        <div className="flex items-center">
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