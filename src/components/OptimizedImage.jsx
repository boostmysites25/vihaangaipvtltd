import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { optimizeImage, isMobile, isSlowConnection, LAZY_LOAD_THRESHOLD } from '../utils/performance';

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
  const [imageSrc, setImageSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original image if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  // If priority is true, load immediately without lazy loading
  if (priority) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        {...props}
      />
    );
  }

  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
      placeholder={placeholder}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default OptimizedImage;
