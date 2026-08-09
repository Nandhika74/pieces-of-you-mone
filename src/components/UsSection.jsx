import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Camera, X, Sparkles, ChevronLeft, ChevronRight, Maximize2, Stars } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function UsSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { currentTheme, getImage, setIsGalleryOpen, setCustomImage } = useThemeAndImage();

  const memories = sisterData.usMemories || [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
  }, [lightboxIndex, memories.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === memories.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex, memories.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const currentMem = lightboxIndex !== null ? memories[lightboxIndex] : null;
  const currentPhotoKey = currentMem ? `usMemoryPhoto_${currentMem.id || lightboxIndex}` : null;
  const currentPhotoUrl = currentMem ? getImage(currentPhotoKey, currentMem.url) : null;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 border-t overflow-hidden"
      style={{
        borderColor: currentTheme.borderColor,
        background: `radial-gradient(circle at top, ${currentTheme.tagBg} 0%, ${currentTheme.bgSecondary} 38%, ${currentTheme.bgPrimary} 100%)`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <div className="absolute left-6 top-10 h-28 w-28 rounded-full blur-3xl" style={{ backgroundColor: currentTheme.accentMain }} />
        <div className="absolute right-8 top-24 h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: currentTheme.tagBg }} />
        <div className="absolute bottom-12 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: currentTheme.cardBg }} />
      </div>

      <div className="relative max-w-6xl w-full text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-14"
        >
          <span
            className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase flex items-center gap-2 px-4 py-2 rounded-full border shadow-xs backdrop-blur-md"
            style={{
              backgroundColor: currentTheme.tagBg,
              color: currentTheme.accentDark,
              borderColor: currentTheme.borderColor,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: currentTheme.accentMain }} />
            <span>YOU & ME • PHOTO WALL</span>
            <Sparkles className="w-3.5 h-3.5" style={{ color: currentTheme.accentMain }} />
          </span>

          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl sm:text-6xl font-serif-cinematic font-light" style={{ color: currentTheme.textDark }}>
              Versions of You 💕
            </h2>

            <p className="text-sm sm:text-base font-sans-clean max-w-xl mx-auto" style={{ color: currentTheme.textMuted }}>
              A little scrapbook wall for the many moods, seasons, and versions of you that I love most.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-sans-clean uppercase tracking-[0.28em]" style={{ color: currentTheme.accentDark }}>
            <Stars className="w-3.5 h-3.5" />
            <span>Tap any card to open the full photo</span>
            <Stars className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Photo Wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-[92%] max-w-7xl mx-auto px-2">
          {memories.map((mem, idx) => {
            const photoKey = `usMemoryPhoto_${mem.id || idx}`;
            const slightLift = idx % 2 === 0 ? '-6px' : '10px';
            return (
              <motion.div
                key={mem.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                style={{
                  transform: `translateY(${slightLift}) rotate(${mem.rotation || '0deg'})`,
                  backgroundColor: currentTheme.cardBg,
                }}
                className="group relative mx-auto w-full max-w-[280px] p-3 pb-5 rounded-[1.05rem] border shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Minimal photo marker — no bookmark/tape */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 h-3.5 w-3.5 rounded-full border-2 bg-white shadow-sm" style={{ borderColor: currentTheme.accentMain }} aria-hidden="true" />

                {/* Editable Photo Frame */}
                <EditablePhotoFrame
                  imageKey={photoKey}
                  defaultUrl={mem.url}
                  alt={mem.title}
                  aspectRatio="aspect-[3/4]"
                  attachmentStyle="minimal"
                  showLabel="Change Photo"
                  overlay={
                    <div
                      onClick={() => openLightbox(idx)}
                      className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer rounded-md backdrop-blur-[2px]"
                    >
                      <span className="flex items-center gap-2 px-3 py-1.25 rounded-full bg-[#FFFDF9]/88 text-[11px] font-sans-clean font-semibold text-[#2C3322] shadow-lg uppercase tracking-wider transform scale-95 group-hover:scale-100 transition-transform border border-white/10">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C98998]" />
                        <span>View Fullscreen</span>
                      </span>
                    </div>
                  }
                />

                {/* Polaroid Caption Footer */}
                <div
                  className="pt-3 pb-1 text-center cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <span
                    className="text-[9px] tracking-[0.28em] font-sans-clean uppercase font-bold block"
                    style={{ color: currentTheme.accentDark }}
                  >
                    {mem.date}
                  </span>
                  <h3 className="font-handwriting text-lg mt-1" style={{ color: currentTheme.textDark }}>
                    {mem.title}
                  </h3>
                  <p className="font-serif-cinematic italic text-[10px] mt-1.5 line-clamp-3 px-1.5" style={{ color: currentTheme.textMuted }}>
                    “{mem.caption}”
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX WITH BLURRED BACKDROP */}
      <AnimatePresence>
        {lightboxIndex !== null && currentMem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between items-center p-4 sm:p-8 select-none overflow-hidden"
          >
            {/* Ambient Background Glow from the image */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
              <img
                src={currentPhotoUrl}
                alt=""
                className="w-full h-full object-cover filter blur-3xl scale-125"
              />
            </div>

            {/* Top Navigation Bar */}
            <div
              className="relative z-10 w-full max-w-5xl flex items-center justify-between text-white py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/80 text-white text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>POLAROID {lightboxIndex + 1} OF {memories.length}</span>
                </span>
                <span className="hidden sm:inline text-xs text-white/70 font-mono">
                  Press ← → to navigate • ESC to close
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Upload Button inside Lightbox */}
                <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer border border-white/20">
                  <Camera className="w-3.5 h-3.5 text-rose-300" />
                  <span className="hidden sm:inline">Change Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && currentPhotoKey) {
                        setCustomImage(currentPhotoKey, file);
                      }
                    }}
                  />
                </label>

                <button
                  onClick={closeLightbox}
                  type="button"
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Close Lightbox (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Content Area */}
            <div
              className="relative z-10 my-auto flex items-center justify-center w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-2 sm:-left-12 z-20 p-3 rounded-full bg-black/50 hover:bg-rose-500 text-white transition-all shadow-xl hover:scale-110 border border-white/20 cursor-pointer"
                title="Previous Polaroid (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Box */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="flex flex-col items-center bg-[#FFFFFF] text-[#2C3322] p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/10 max-h-[75vh] max-w-md sm:max-w-xl w-full"
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFDF9] shadow-inner border border-white/10">
                  <img
                    src={currentPhotoUrl}
                    alt={currentMem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-4 text-center w-full">
                  <span className="text-[10px] tracking-[0.25em] font-sans-clean uppercase font-bold text-[#7B3E48] block">
                    {currentMem.date}
                  </span>
                  <h3 className="font-handwriting text-3xl sm:text-4xl text-[#2C3322] mt-1">
                    {currentMem.title}
                  </h3>
                  <p className="font-serif-cinematic italic text-sm text-[#7D6A6E] mt-1 max-w-md mx-auto">
                    “{currentMem.caption}”
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                type="button"
                className="absolute right-2 sm:-right-12 z-20 p-3 rounded-full bg-black/50 hover:bg-rose-500 text-white transition-all shadow-xl hover:scale-110 border border-white/20 cursor-pointer"
                title="Next Polaroid (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Dots Indicator */}
            <div
              className="relative z-10 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {memories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === lightboxIndex
                      ? 'bg-rose-500 w-7'
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  title={`Go to polaroid ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

