import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface MachineImageProps {
  imageUrl: string | null;
  alt: string;
  className?: string;
}

const MachineImage = ({ imageUrl, alt, className = "" }: MachineImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!imageUrl) {
    return (
      <div className={`relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">No image available</p>
        </div>
      </div>
    );
  }

  if (imageError) {
    return (
      <div className={`relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">External image blocked</p>
          <p className="text-xs mt-1">CORS policy prevents loading</p>
          <a 
            href={imageUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-industrial-blue hover:underline mt-2 block"
          >
            View original image →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-48 bg-gray-100 overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onLoad={() => {
          setLoading(false);
          console.log('✅ Image loaded successfully:', imageUrl);
        }}
        onError={(e) => {
          console.error('❌ Image failed to load:', imageUrl, e);
          setImageError(true);
          setLoading(false);
        }}
        style={{ display: loading ? 'none' : 'block' }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-industrial-blue"></div>
        </div>
      )}
    </div>
  );
};

export default MachineImage; 