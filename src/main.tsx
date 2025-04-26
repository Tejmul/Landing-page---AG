import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA } from './utils/analytics';

// Initialize Google Analytics
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize GA on component mount
const AnalyticsInitializer = () => {
  useEffect(() => {
    initGA(GA_MEASUREMENT_ID);
  }, []);
  
  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnalyticsInitializer />
    <App />
  </StrictMode>
);
