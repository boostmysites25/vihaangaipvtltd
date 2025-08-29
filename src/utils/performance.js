// Performance optimization utilities

// Image optimization helper
export const optimizeImage = (src, width = 800, quality = 80) => {
  // For webp images, return as is
  if (src.includes('.webp')) {
    return src;
  }
  
  // For other images, you can implement a CDN transformation here
  // Example: return `${src}?w=${width}&q=${quality}&format=webp`;
  return src;
};

// Lazy loading threshold configuration
export const LAZY_LOAD_THRESHOLD = 100;

// Intersection Observer options for lazy loading
export const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1,
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
  
  return result;
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href, as = 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Check if device is mobile
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Check if connection is slow
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    return navigator.connection.effectiveType === 'slow-2g' || 
           navigator.connection.effectiveType === '2g' ||
           navigator.connection.effectiveType === '3g';
  }
  return false;
};

// Optimize images based on connection speed
export const getOptimizedImageSrc = (src, mobileSrc = null) => {
  if (isSlowConnection()) {
    return mobileSrc || src;
  }
  return src;
};

// Memory management for large lists
export const createVirtualScroller = (items, itemHeight, containerHeight) => {
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = 0;
  const endIndex = Math.min(visibleCount, items.length);
  
  return {
    visibleItems: items.slice(startIndex, endIndex),
    startIndex,
    endIndex,
    totalHeight: items.length * itemHeight,
  };
};
