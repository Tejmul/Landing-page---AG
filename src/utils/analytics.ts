// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);

    // Make gtag available globally
    window.gtag = gtag;
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-KCM87LNJY4', {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user engagement
export const trackEngagement = (type: string, details: string) => {
  if (window.gtag) {
    window.gtag('event', 'user_engagement', {
      engagement_type: type,
      engagement_details: details,
    });
  }
}; 