import React, { useState, useEffect, useRef } from 'react';
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
