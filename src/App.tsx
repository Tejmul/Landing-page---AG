import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';

import ScrollIndicator from './components/ScrollIndicator';
import About from './components/About';
import Features from './components/Features';
import Blog from './components/Blog';
import EngagementTracker from './components/EngagementTracker';
import SocialProof from './components/SocialProof';
import LearnMore from './components/LearnMore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // Set launch date to June 28th, 2025
  const launchDate = new Date('2025-06-28T00:00:00');
  
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-dark bg-grid-pattern bg-grid-overlay overflow-hidden">
        <Toaster position="top-center" expand={true} richColors />
        <EngagementTracker />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Features />
                <SocialProof />
                <Blog />
                <ScrollIndicator />
              </main>
            } />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;