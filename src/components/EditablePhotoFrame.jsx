import React, { useRef } from 'react';
import { useThemeAndImage } from '../context/ThemeAndImageContext';
import { Camera, RefreshCw, Upload } from 'lucide-react';

export default function EditablePhotoFrame({
  imageKey,
  defaultUrl,
  alt = 'Sister Memory Photo',
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  overlay = null,
  showLabel = 'Change Photo',
  attachmentStyle = 'clip',
}) {
  const { getImage, setCustomImage, removeCustomImage, customImages, currentTheme } = useThemeAndImage();
  const fileInputRef = useRef(null);

  const src = getImage(imageKey, defaultUrl);
  const isCustomized = Boolean(customImages[imageKey]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomImage(imageKey, file);
    }
  };

  return (
    <div className={`relative group/frame ${className}`}>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 h-2.5 w-[78%] rounded-full bg-black/30 blur-sm pointer-events-none" />

      <div className={`relative group/frame rounded-[0.2rem] bg-[#F7F1E8] p-3 pb-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] border border-white/80 ${aspectRatio}`}>
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* Main Image */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover/frame:scale-105 rounded-[0.05rem] ${imgClassName}`}
        />

        {/* Optional Custom Overlay */}
        {overlay}

        {/* Quick Local Upload Badge */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover/frame:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/frame:translate-y-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            type="button"
            title="Upload your own local photo"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-full bg-[#FFFDF9]/80 backdrop-blur-md text-[#2C3322] shadow-md hover:bg-[#F3D9DD] hover:scale-105 transition-all border border-white/10"
            style={{ borderColor: currentTheme.borderColor }}
          >
            <Camera className="w-3.5 h-3.5 text-[#C98998]" />
            <span>{isCustomized ? 'Replace' : showLabel}</span>
          </button>

          {isCustomized && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeCustomImage(imageKey);
              }}
              type="button"
              title="Reset to default photo"
              className="p-1.5 rounded-full bg-[#FFFDF9]/92 backdrop-blur-md text-[#4B3B3F] hover:bg-white hover:scale-105 transition-all border border-white/10"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Customized Indicator Badge */}
        {isCustomized && (
          <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#FFFDF9]/85 border border-[#7B3E48]/25 text-[#7B3E48] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
            Your Local Photo
          </div>
        )}
      </div>
    </div>
  );
}
