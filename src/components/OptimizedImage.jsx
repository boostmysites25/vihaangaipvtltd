import React, { useState, useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Simple utility functions to avoid browser-specific imports
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isSlowConnection = () => {
  if (typeof window === 'undefined' || !navigator.connection) return false;
  return navigator.connection.effectiveType === 'slow-2g' || 
         navigator.connection.effectiveType === '2g' ||
         navigator.connection.effectiveType === '3g';
};

const optimizeImage = (src, width = 800, quality = 80) => {
  // For webp images, return as is
  if (src.includes('.webp')) {
    return src;
  }
  
  // For other images, you can implement a CDN transformation here
  // Example: return `${src}?w=${width}&q=${quality}&format=webp`;
  return src;
};

const LAZY_LOAD_THRESHOLD = 100;

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  mobileSrc = null,
  priority = false,
  effect = 'blur',
  threshold = LAZY_LOAD_THRESHOLD,
  placeholder = null,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Optimize image source based on device and connection
    let optimizedSrc = src;
    
    if (mobileSrc && isMobile()) {
      optimizedSrc = mobileSrc;
    }
    
    if (isSlowConnection()) {
      optimizedSrc = mobileSrc || src;
    }
    
    // Apply image optimization
    optimizedSrc = optimizeImage(optimizedSrc, width, 80);
    setImageSrc(optimizedSrc);
  }, [src, mobileSrc, width]);

  const handleLoad = () => {
    setIsLoaded(true);
    // Remove loading optimization after image loads
    if (imgRef.current) {
      imgRef.current.style.willChange = 'auto';
    }
  };

  const handleError = () => {
    // Fallback to original image if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  // If priority is true, load immediately without lazy loading
  if (priority) {
    return (
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Force hardware acceleration
        }}
        {...props}
      />
    );
  }

  return (
    <LazyLoadImage
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
      placeholder={placeholder || imageSrc}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
