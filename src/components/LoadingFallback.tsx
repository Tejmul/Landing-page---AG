import React from 'react';

const LoadingFallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-4 border-primary-300 border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback; 