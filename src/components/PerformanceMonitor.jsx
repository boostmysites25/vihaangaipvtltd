import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);

    // Custom performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
        
        // Send to analytics in production
        if (process.env.NODE_ENV === 'production') {
          // You can send these metrics to your analytics service
          // Example: analytics.track('performance', { metric: entry.name, value: entry.startTime });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
