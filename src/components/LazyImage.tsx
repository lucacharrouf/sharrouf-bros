import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  fallback?: string;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  placeholder = "/placeholder-image.jpg",
  fallback = "/fallback-image.jpg"
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setImageSrc(fallback);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setImageSrc(fallback);
      setIsLoading(false);
      setHasError(true);
    };
    img.src = src;
  }, [src, fallback]);

  if (isLoading) {
    return (
      <Skeleton 
        className={`${className} bg-gray-200`}
        style={{ width: width || '100%', height: height || 200 }}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      onError={() => {
        if (!hasError) {
          setImageSrc(fallback);
          setHasError(true);
        }
      }}
    />
  );
}; 