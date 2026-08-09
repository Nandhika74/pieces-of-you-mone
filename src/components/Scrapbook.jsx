import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronDown } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralCornerFlourish, FloralVineDivider } from './FloralDecorations';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function Scrapbook() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { currentTheme, getImage } = useThemeAndImage();
  const memories = sisterData.storyThroughEras || [];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 film-grain border-t overflow-hidden text-[#2C3322]"
      style={{
        borderColor: '#E8D9D3',
        background: 'radial-gradient(circle at top, #F7F1EA 0%, #FFFDF9 45%, #FAF6EF 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-14 left-10 h-36 w-36 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212,175,55,0.14)' }} />
        <div className="absolute top-40 right-10 h-44 w-44 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(243,177,185,0.12)' }} />
        <div className="absolute bottom-12 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(148,163,184,0.12)' }} />
      </div>

      <div className="relative max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-14"
        >
          <span className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase flex items-center gap-2 px-4 py-2 rounded-full border shadow-xs backdrop-blur-md" style={{ backgroundColor: '#FFF0F3', color: '#7B3E48', borderColor: '#E6D8D0' }}>
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
            <span>CHAPTER 07 • OUR STORY THROUGH THE ERAS</span>
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
          </span>

          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl sm:text-6xl font-serif-cinematic font-light text-[#2C3322]">
              Our Story Through the Eras
            </h2>
            <p className="text-sm sm:text-base font-sans-clean max-w-2xl mx-auto text-[#7D6A6E]">
              One continuous wall of memories, moving from childhood to now like a dark cinematic scrapbook.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-sans-clean uppercase tracking-[0.24em] text-[#7B3E48] max-w-3xl">
            {['Childhood', 'School', 'Friendship', 'Adventures', 'Random Moments', 'Conversations', 'Laughs', 'Growing Up', 'Special Days', 'Us'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[#FFF0F3] border border-[#F0E2E5] shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative mx-auto mb-8 h-12 w-[92%] max-w-7xl px-4">
          <svg viewBox="0 0 1200 120" className="absolute inset-0 h-full w-full overflow-visible">
            <path d="M 10 70 Q 300 20 600 58 T 1190 68" stroke="#7B3E48" strokeWidth="2" fill="none" opacity="0.75" />
            <path d="M 10 72 Q 300 22 600 60 T 1190 70" stroke="#C98998" strokeWidth="0.8" fill="none" opacity="0.35" />
            {Array.from({ length: 8 }).map((_, index) => (
              <circle
                key={index}
                cx={95 + index * 145}
                cy={index % 2 === 0 ? 56 : 58}
                r="4"
                fill={index % 3 === 0 ? '#D8A0A6' : index % 3 === 1 ? '#C98998' : '#7B3E48'}
                opacity="0.95"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255,216,138,0.8))' }}
              />
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-[92%] max-w-6xl mx-auto px-2">
          {memories.map((memory, idx) => {
            const photoKey = `storyEra_${memory.id || idx}`;
            const lift = idx % 2 === 0 ? '-8px' : '12px';
            const tagList = memory.tags || [];

            return (
              <motion.div
                key={memory.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: idx * 0.08 }}
                style={{
                  transform: `translateY(${lift}) rotate(${idx % 3 === 0 ? '-2deg' : idx % 3 === 1 ? '1.5deg' : '-1deg'})`,
                  backgroundColor: '#FFFFFF',
                }}
                className="group relative mx-auto w-full max-w-[320px] p-3 pb-5 rounded-[1.05rem] border border-[#F0E2E5] shadow-[0_24px_60px_rgba(96,70,75,0.12)] hover:shadow-[0_30px_70px_rgba(96,70,75,0.18)] transition-all duration-300"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  <div className="h-10 w-px bg-gradient-to-b from-[#7B3E48] via-[#C98998] to-transparent opacity-70" />
                  <div className="-mt-1 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D8A0A6] shadow-[0_0_16px_rgba(255,216,138,0.9)]" />
                    <span className="h-3.5 w-3.5 rounded-full bg-[#C98998] shadow-[0_0_18px_rgba(243,177,185,0.8)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7B3E48] shadow-[0_0_16px_rgba(212,175,55,0.85)]" />
                  </div>
                </div>

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 h-4 w-[72%] rounded-full bg-[#D8C8C0]/25 blur-sm pointer-events-none" />

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 border shadow-xs z-10 opacity-90 rounded-xs flex items-center justify-center text-[8px] font-mono tracking-widest uppercase" style={{ backgroundColor: currentTheme.tagBg, borderColor: currentTheme.borderColor, color: currentTheme.accentDark }}>
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>

                <EditablePhotoFrame
                  imageKey={photoKey}
                  defaultUrl={memory.url}
                  alt={memory.title}
                  aspectRatio="aspect-[3/4]"
                  showLabel="Change Photo"
                  overlay={
                    <div
                      onClick={() => setSelectedPhoto({ ...memory, activeUrl: getImage(photoKey, memory.url) })}
                      className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer rounded-md backdrop-blur-[2px]"
                    >
                      <span className="flex items-center gap-2 px-3 py-1.25 rounded-full bg-[#FFFDF9]/88 text-[11px] font-sans-clean font-semibold text-[#2C3322] shadow-lg uppercase tracking-wider transform scale-95 group-hover:scale-100 transition-transform border border-[#F0E2E5]">
                        <span>Open</span>
                      </span>
                    </div>
                  }
                />

                <div className="pt-3 pb-1 text-center cursor-pointer" onClick={() => setSelectedPhoto({ ...memory, activeUrl: getImage(photoKey, memory.url) })}>
                  <span className="text-[9px] tracking-[0.28em] font-sans-clean uppercase font-bold block text-[#7B3E48]">
                    {memory.era}
                  </span>
                  <h3 className="font-handwriting text-lg mt-1 text-[#2C3322]">
                    {memory.title}
                  </h3>
                  <p className="font-serif-cinematic italic text-[10px] mt-1.5 line-clamp-3 px-1.5 text-[#7D6A6E]">
                    “{memory.caption}”
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {tagList.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.2em] bg-[#FFF0F3] text-[#7B3E48] border border-[#F0E2E5]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C98998]">
                    <Sparkles className="w-3 h-3" />
                    <span>{memory.date}</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="p-5 sm:p-6 rounded-2xl max-w-md w-full paper-shadow relative border text-center shadow-2xl bg-[#FFFFFF] text-[#2C3322] border-white/10"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-[#2C3322]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[3/4] w-full rounded-lg overflow-hidden mb-5 border border-[#F0E2E5]" style={{ borderColor: '#E6D8D0' }}>
                <img
                  src={selectedPhoto.activeUrl || selectedPhoto.url}
                  alt={selectedPhoto.title || selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-sans-clean tracking-[0.25em] font-semibold uppercase block mb-1 text-[#7B3E48]">
                {selectedPhoto.era}
              </span>
              <h3 className="text-2xl font-serif-cinematic font-semibold mb-2 text-[#2C3322]">
                {selectedPhoto.title || 'Special Memory'}
              </h3>

              <p className="font-handwriting text-2xl p-4 rounded-xl border bg-[#FFF0F3] border-white/10 text-[#C98998]">
                “{selectedPhoto.caption}” 🌸
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
