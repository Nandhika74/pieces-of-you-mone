import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralCornerFlourish } from './FloralDecorations';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function ChildhoodReveal({ onScrollNext }) {
  const [isFocused, setIsFocused] = useState(true);
  const { currentTheme } = useThemeAndImage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 film-grain border-t" style={{ borderColor: currentTheme.borderColor }}>
      <div className="max-w-xl text-center flex flex-col items-center">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase mb-8 flex items-center gap-2 px-3.5 py-1 rounded-full border shadow-xs"
          style={{
            backgroundColor: currentTheme.tagBg,
            color: currentTheme.accentDark,
            borderColor: currentTheme.borderColor,
          }}
        >
          <FlowerBloom className="w-3.5 h-3.5" style={{ color: currentTheme.accentMain }} />
          <span>CHAPTER 01 • THE BEGINNING</span>
          <FlowerBloom className="w-3.5 h-3.5" style={{ color: currentTheme.accentMain }} />
        </motion.span>

        {/* Polaroid Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          onViewportEnter={() => setIsFocused(true)}
          className="polaroid-card max-w-sm sm:max-w-md w-full my-6 relative"
          style={{ backgroundColor: currentTheme.cardBg }}
        >
          {/* Floral Corner Flourish */}
          <FloralCornerFlourish position="top-left" className="w-12 h-12" style={{ color: currentTheme.accentMain }} />
          <FloralCornerFlourish position="bottom-right" className="w-12 h-12" style={{ color: currentTheme.accentMain }} />

          {/* Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 border shadow-xs rotate-1 z-10 opacity-90 rounded-xs" style={{ backgroundColor: currentTheme.tagBg, borderColor: currentTheme.borderColor }}></div>

          {/* Photo Frame with Local Upload Support */}
          <EditablePhotoFrame
            imageKey="childhoodPhoto"
            defaultUrl={sisterData.childhoodPhoto.url}
            alt={sisterData.childhoodPhoto.alt}
            aspectRatio="aspect-[3/4]"
            showLabel="Change Childhood Photo"
            imgClassName={`rounded-sm transition-all duration-700 ease-out ${
              isFocused ? 'blur-0 scale-100 opacity-100' : 'blur-xs scale-102 opacity-90'
            }`}
          />

          {/* Handwritten Caption */}
          <div className="pt-4 pb-1 text-center">
            <p className="font-handwriting text-2xl" style={{ color: currentTheme.textDark }}>
              Mone & Thanu 💖
            </p>
          </div>
        </motion.div>

        {/* Text Lines */}
        <div className="mt-8 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-serif-cinematic font-light"
            style={{ color: currentTheme.textDark }}
          >
            “{sisterData.childhoodPhoto.line1}”
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl sm:text-4xl font-serif-cinematic italic"
            style={{ color: currentTheme.accentDark }}
          >
            “{sisterData.childhoodPhoto.line2}”
          </motion.h3>
        </div>

        {/* Down Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={onScrollNext}
          className="mt-16 p-3 rounded-full transition-colors cursor-pointer border"
          style={{
            color: currentTheme.accentDark,
            backgroundColor: currentTheme.tagBg,
            borderColor: currentTheme.borderColor,
          }}
          title="Scroll to next chapter"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
