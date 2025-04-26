// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Initialize GA
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
    site_speed_sample_rate: 100,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (window.gtag) {
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