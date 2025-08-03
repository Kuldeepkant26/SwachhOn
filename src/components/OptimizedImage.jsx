import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  width,
  height,
  onLoad,
  onError,
  ...props 
}) => {
  const handleError = (e) => {
    // Fallback to a default image if the image fails to load
    console.warn(`Failed to load image: ${src}`);
    if (onError) onError(e);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={handleError}
      {...props}
      // Add additional SEO attributes
      decoding="async"
      fetchpriority={loading === 'eager' ? 'high' : 'auto'}
    />
  );
};

export default OptimizedImage;
