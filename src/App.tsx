import React, { Suspense } from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingFallback from './components/LoadingFallback';

// Lazy load components
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const ScrollIndicator = React.lazy(() => import('./components/ScrollIndicator'));
const About = React.lazy(() => import('./components/About'));
const Features = React.lazy(() => import('./components/Features'));
const Blog = React.lazy(() => import('./components/Blog'));
const EngagementTracker = React.lazy(() => import('./components/EngagementTracker'));
const SocialProof = React.lazy(() => import('./components/SocialProof'));
const LearnMore = React.lazy(() => import('./components/LearnMore'));

const App: React.FC = () => {
  // Set launch date to June 28th, 2025
  const launchDate = new Date('2025-06-28T00:00:00');
  
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-dark bg-grid-pattern bg-grid-overlay overflow-hidden">
        <Toaster 
          position="top-center" 
          expand={true} 
          richColors 
          closeButton
          theme="dark"
        />
        <Suspense fallback={<LoadingFallback />}>
          <EngagementTracker />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingFallback />}>
            <Header />
          </Suspense>
          <Routes>
            <Route path="/" element={
              <main>
                <Suspense fallback={<LoadingFallback />}>
                  <Hero />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Features />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <SocialProof />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Blog />
                </Suspense>
                <Suspense fallback={null}>
                  <ScrollIndicator />
                </Suspense>
              </main>
            } />
            <Route path="/learn-more" element={
              <Suspense fallback={<LoadingFallback />}>
                <LearnMore />
              </Suspense>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;