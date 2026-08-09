import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function SisterStory() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { currentTheme, getImage } = useThemeAndImage();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 py-24 overflow-hidden"
      style={{
        backgroundColor: currentTheme.bgPrimary,
        borderColor: currentTheme.borderColor,
      }}
    >

      {/* =====================================================
          SOFT BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: currentTheme.accentMain }}
        />

        <div
          className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: currentTheme.accentMain }}
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center text-center mb-16"
      >
        <span
          className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase mb-3"
          style={{ color: currentTheme.accentDark }}
        >
          CHAPTER 03 • HER STORY
        </span>

        <h2
          className="text-4xl sm:text-6xl font-serif-cinematic font-light"
          style={{ color: currentTheme.textDark }}
        >
          Mone's Desk & Memories
        </h2>

        <p
          className="text-sm font-sans-clean max-w-md mt-3 leading-relaxed"
          style={{ color: currentTheme.textMuted }}
        >
          Little pieces of her life, hanging together like memories on a wall.
        </p>

        <div
          className="flex items-center gap-2 mt-5 text-xs font-sans-clean tracking-widest uppercase"
          style={{ color: currentTheme.accentDark }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          memories worth keeping
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </motion.div>


      {/* =====================================================
          PHOTO WALL
      ====================================================== */}

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* =================================================
            FAIRY LIGHT STRING 1
        ================================================== */}

        <div className="relative w-full h-12 mb-2">

          {/* Wire */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 25 Q125 70 250 25 T500 25 T750 25 T1000 25"
              fill="none"
              stroke="#9B837B"
              strokeWidth="2"
              opacity="0.55"
            />
          </svg>

          {/* Hanging lights */}
          <div className="absolute inset-0 flex justify-around items-start pointer-events-none">

            {[0, 1, 2, 3, 4, 5].map((light) => (
              <div
                key={light}
                className="relative"
                style={{
                  marginTop: light % 2 === 0 ? '14px' : '27px',
                }}
              >
                <div className="w-[2px] h-4 bg-[#8A766F] mx-auto" />

                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: '#FFE7A8',
                    boxShadow:
                      '0 0 8px rgba(255,220,130,0.9), 0 0 18px rgba(255,220,130,0.5)',
                    animationDelay: `${light * 0.3}s`,
                  }}
                />
              </div>
            ))}

          </div>
        </div>


        {/* =================================================
            POLAROID HANGING GRID
        ================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 px-3 sm:px-8">

          {sisterData.moneStoryPhotos.map((photo, idx) => {

            const photoKey = `moneStoryPhoto_${photo.id || idx}`;

            // Different rotations for natural scrapbook feel
            const rotations = [-3, 2.5, -1.5, 2, -2.5, 3, -1, 2, -2];

            return (
              <motion.div
                key={photo.id || idx}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: rotations[idx % rotations.length],
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[idx % rotations.length],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.12,
                }}
                className="relative flex justify-center"
              >

                {/* ==========================================
                    HANGING STRING
                =========================================== */}

                <div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-[2px] h-20 z-10"
                  style={{
                    backgroundColor: '#806D65',
                  }}
                />

                {/* ==========================================
                    WOODEN CLOTHESPIN
                =========================================== */}

                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-30"
                  style={{
                    transform: 'translateX(-50%) rotate(-3deg)',
                  }}
                >

                  {/* Clip body */}
                  <div
                    className="relative w-5 h-9 rounded-[4px]"
                    style={{
                      background:
                        'linear-gradient(90deg, #9B6B45, #D1A06D, #8D5F3E)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                    }}
                  >

                    {/* Clip split */}
                    <div
                      className="absolute left-1/2 top-0 bottom-0 w-[1px]"
                      style={{
                        backgroundColor: 'rgba(80,50,30,0.45)',
                      }}
                    />

                    {/* Metal spring */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2"
                      style={{
                        borderColor: '#705B4F',
                      }}
                    />

                  </div>

                </div>


                {/* ==========================================
                    POLAROID
                =========================================== */}

                <div
                  className="relative w-full max-w-[280px] p-3 pb-5 rounded-[3px]"
                  style={{
                    backgroundColor: '#FFFDF9',
                    boxShadow:
                      '0 14px 30px rgba(67,52,45,0.18), 0 3px 8px rgba(67,52,45,0.08)',
                  }}
                >

                  {/* Tiny warm glow behind photo */}
                  <div
                    className="absolute -inset-2 -z-10 rounded-lg opacity-20 blur-xl"
                    style={{
                      backgroundColor: '#FFD978',
                    }}
                  />

                  {/* Photo */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() =>
                      setSelectedPhoto({
                        ...photo,
                        activeUrl: getImage(photoKey, photo.url),
                      })
                    }
                  >

                    <EditablePhotoFrame
                      imageKey={photoKey}
                      defaultUrl={photo.url}
                      alt={photo.title}
                      aspectRatio="aspect-[4/5]"
                      showLabel="Upload Photo"
                    />

                    {/* Hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-white/90 text-[#3A2C31] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-lg">
                        View Memory
                      </span>
                    </div>

                  </div>


                  {/* ========================================
                      POLAROID CAPTION
                  ========================================= */}

                  <div
                    className="pt-4 text-center cursor-pointer"
                    onClick={() =>
                      setSelectedPhoto({
                        ...photo,
                        activeUrl: getImage(photoKey, photo.url),
                      })
                    }
                  >

                    <span
                      className="text-[9px] tracking-[0.22em] uppercase font-sans-clean font-semibold"
                      style={{
                        color: currentTheme.accentDark,
                      }}
                    >
                      {photo.category}
                    </span>

                    <h3
                      className="font-handwriting text-2xl mt-1"
                      style={{
                        color: currentTheme.textDark,
                      }}
                    >
                      {photo.title}
                    </h3>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* =================================================
            SECOND FAIRY LIGHT STRING
        ================================================== */}

        <div className="relative w-full h-16 mt-10">

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q125 80 250 30 T500 30 T750 30 T1000 30"
              fill="none"
              stroke="#9B837B"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>

          <div className="absolute inset-0 flex justify-around items-start pointer-events-none">

            {[0, 1, 2, 3, 4, 5].map((light) => (
              <div
                key={light}
                className="relative"
                style={{
                  marginTop: light % 2 === 0 ? '20px' : '32px',
                }}
              >
                <div className="w-[2px] h-4 bg-[#8A766F] mx-auto" />

                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: '#FFE7A8',
                    boxShadow:
                      '0 0 8px rgba(255,220,130,0.9), 0 0 18px rgba(255,220,130,0.5)',
                    animationDelay: `${light * 0.4}s`,
                  }}
                />
              </div>
            ))}

          </div>
        </div>

      </div>


      {/* =====================================================
          BOTTOM NOTE
      ====================================================== */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-8 font-handwriting text-2xl"
        style={{
          color: currentTheme.accentDark,
        }}
      >
        some memories deserve a place on the wall ✨
      </motion.p>


      {/* =====================================================
          PHOTO MODAL
      ====================================================== */}

      <AnimatePresence>

        {selectedPhoto && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="p-6 sm:p-8 rounded-2xl max-w-lg w-full paper-shadow relative border shadow-2xl"
              style={{
                backgroundColor: currentTheme.cardBg,
                color: currentTheme.textDark,
                borderColor: currentTheme.borderColor,
              }}
            >

              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-6 border"
                style={{
                  borderColor: currentTheme.borderColor,
                }}
              >

                <img
                  src={selectedPhoto.activeUrl || selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />

              </div>

              <span
                className="text-xs font-sans-clean tracking-[0.25em] font-semibold uppercase block mb-1"
                style={{
                  color: currentTheme.accentDark,
                }}
              >
                {selectedPhoto.category}
              </span>

              <h3 className="text-2xl font-serif-cinematic font-medium mb-3">
                {selectedPhoto.title}
              </h3>

              <p
                className="font-serif-cinematic italic text-lg p-4 rounded-xl border"
                style={{
                  backgroundColor: currentTheme.tagBg,
                  borderColor: currentTheme.borderColor,
                }}
              >
                “{selectedPhoto.caption}”
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}