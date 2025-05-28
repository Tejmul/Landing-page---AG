import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import { initGA } from './utils/analytics';

// Lazy load the main App component
const App = React.lazy(() => import('./App'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div role="alert" className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-dark">
    <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong:</h2>
    <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-auto max-w-full text-left">{error.message}</pre>
    <button 
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
    >
      Try again
    </button>
  </div>
);

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-dark">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary-300 border-t-transparent animate-spin"></div>
      </div>
    </div>
  </div>
);

// Initialize GA on component mount
const AnalyticsInitializer = () => {
  React.useEffect(() => {
    // Defer GA initialization
    const timer = setTimeout(() => {
      initGA('G-KCM87LNJY4');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return null;
};

// Initialize the app
const initializeApp = () => {
  const root = document.getElementById('root');
  if (!root) {
    console.error('Root element not found');
    return;
  }

  try {
    const rootElement = createRoot(root);
    rootElement.render(
      <React.StrictMode>
        <ErrorBoundary 
          FallbackComponent={ErrorFallback} 
          onReset={() => window.location.reload()}
          onError={(error) => {
            console.error('Error caught by boundary:', error);
          }}
        >
          <React.Suspense fallback={<LoadingFallback />}>
            <AnalyticsInitializer />
            <App />
          </React.Suspense>
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error initializing app:', error);
    // Render error state directly
    root.innerHTML = `
      <div class="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-dark">
        <h2 class="text-2xl font-bold text-red-500 mb-4">Failed to initialize app</h2>
        <button onclick="window.location.reload()" class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
          Try again
        </button>
      </div>
    `;
  }
};

// Use requestIdleCallback if available, otherwise setTimeout
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => initializeApp());
  } else {
    setTimeout(initializeApp, 1);
  }
}

// Register Service Worker
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.error('ServiceWorker registration failed:', err);
      });
  });
}
