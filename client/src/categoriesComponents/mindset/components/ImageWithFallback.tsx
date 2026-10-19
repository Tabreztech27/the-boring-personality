import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#131827] flex flex-col items-center justify-center p-6 text-center border border-[#8055F5]/20 ${className}`}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#8055F5]/10 border border-[#8055F5]/30 flex items-center justify-center text-[#A78BFA] mb-3">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <span className="text-xs uppercase tracking-wider font-semibold text-[#A78BFA]/90">
          TBP Mindset
        </span>
        {fallbackTitle && (
          <p className="text-sm text-gray-300 font-medium mt-1 line-clamp-2">
            {fallbackTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || "TBP Mindset"}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
};

export default ImageWithFallback;

