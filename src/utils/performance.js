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

// Optimize animations for better performance
export const optimizeAnimation = (element, animation) => {
  if (element) {
    element.style.willChange = 'transform, opacity';
    element.style.transform = 'translateZ(0)'; // Force hardware acceleration
  }
};

// Clean up animation optimizations
export const cleanupAnimation = (element) => {
  if (element) {
    element.style.willChange = 'auto';
  }
};

// Batch DOM updates for better performance
export const batchDOMUpdates = (updates) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Optimize scroll events
export const optimizeScroll = (callback, threshold = 16) => {
  let ticking = false;
  
  return function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Optimize CSS animations
export const optimizeCSSAnimations = () => {
  const style = document.createElement('style');
  style.textContent = `
    .optimized-animation {
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  document.head.appendChild(style);
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Optimize CSS animations
  optimizeCSSAnimations();
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
    lazyLoadImages();
  }
  
  // Preload critical resources
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadResource('/static/js/bundle.js', 'script');
    });
  }
};
