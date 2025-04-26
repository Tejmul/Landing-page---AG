import React from 'react';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import VisitorCounter from './components/VisitorCounter';
import ScrollIndicator from './components/ScrollIndicator';
import About from './components/About';
import Features from './components/Features';
import LaunchTeaser from './components/LaunchTeaser';
import Blog from './components/Blog';
import EngagementTracker from './components/EngagementTracker';

function App() {
  // Set launch date to June 1st, 2025
  const launchDate = new Date('2025-06-01T00:00:00');
  
  return (
    <div className="min-h-screen w-full bg-dark bg-grid-pattern bg-grid-overlay overflow-hidden">
      <Toaster position="top-center" expand={true} richColors />
      <EngagementTracker />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <div className="flex flex-col items-center my-16">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl mb-2 text-gray-300">Official Launch In</h2>
            </div>
            <CountdownTimer targetDate={launchDate} />
            <div className="mt-16 w-full max-w-md">
              <VisitorCounter />
            </div>
          </div>
          <About />
          <Features />
          <Blog />
          <LaunchTeaser />
          <ScrollIndicator />
        </main>
      </div>
    </div>
  );
}

export default App;