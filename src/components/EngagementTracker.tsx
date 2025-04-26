import React, { useEffect } from 'react';
import { trackEngagement } from '../utils/analytics';

const EngagementTracker: React.FC = () => {
  useEffect(() => {
    // Track time spent on page
    const startTime = Date.now();
    
    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100% scroll depth
        if (maxScroll >= 25 && maxScroll < 26) {
          trackEngagement('scroll', '25%');
        } else if (maxScroll >= 50 && maxScroll < 51) {
          trackEngagement('scroll', '50%');
        } else if (maxScroll >= 75 && maxScroll < 76) {
          trackEngagement('scroll', '75%');
        } else if (maxScroll >= 100) {
          trackEngagement('scroll', '100%');
        }
      }
    };
    
    // Track clicks on important elements
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Track clicks on navigation links
      if (target.tagName === 'A' && target.getAttribute('href')) {
        trackEngagement('click', `link:${target.getAttribute('href')}`);
      }
      
      // Track clicks on buttons
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        trackEngagement('click', `button:${target.textContent?.trim() || 'unknown'}`);
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      
      // Track time spent on page
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEngagement('time_spent', `${timeSpent} seconds`);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default EngagementTracker; 