import React from 'react';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function EditablePhotoFrame({
  imageKey,
  defaultUrl,
  alt = 'Sister Memory Photo',
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  overlay = null,
  attachmentStyle = 'clip',
}) {
  const { getImage } = useThemeAndImage();

  const src = getImage(imageKey, defaultUrl);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative rounded-[0.2rem] bg-[#F7F1E8] p-3 pb-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] border border-white/80 ${aspectRatio}`}
      >
        {/* Main Image */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-[0.05rem] ${imgClassName}`}
        />

        {/* Optional Custom Overlay */}
        {overlay}
      </div>
    </div>
  );
}

