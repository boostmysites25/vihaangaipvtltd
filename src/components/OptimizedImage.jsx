import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  effect = 'blur',
  threshold = 100,
  ...props
}) => {
  // If priority is true, load immediately without lazy loading
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
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
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
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
