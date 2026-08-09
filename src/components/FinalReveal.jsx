import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Updated import if standard setup
import confetti from 'canvas-confetti';
import { Heart, Gift, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FloralCornerFlourish, FloralVineDivider } from './FloralDecorations';
import FloralPetals from './FloralPetals';

export default function FinalReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoFocused, setPhotoFocused] = useState(false);

  const { finalReveal } = sisterData;

  const handleOpenFinalSurprise = () => {
    setIsOpen(true);

    setTimeout(() => {
      setPhotoFocused(true);
    }, 700);

    try {
      confetti({
        particleCount: 120,
        spread: 110,
        startVelocity: 30,
        origin: { y: 0.65 },
        colors: ['#B76E79', '#D9A3AB', '#F4D9DC', '#FFF8F3', '#7B4650'],
      });
    } catch (e) {
      console.log('Confetti error', e);
    }
  };

  return (
    <section
      id="final-reveal"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#F8EDEE]
        text-[#4B2930]
        px-5 sm:px-8
        py-20 sm:py-28
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#E8B9C1]/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-[#F2D7D9]/60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/40 blur-3xl" />
      </div>

      {/* Floating petals */}
      {isOpen && <FloralPetals />}

      {/* Decorative frame */}
      <div className="absolute inset-4 sm:inset-8 rounded-[2rem] border border-[#B76E79]/20 pointer-events-none select-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* BEFORE OPEN */
            <motion.div
              key="pre-reveal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="min-h-[75vh] flex flex-col items-center justify-center text-center gap-7"
            >
              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.3em' }}
                transition={{ duration: 1 }}
                className="flex items-center gap-3 text-[10px] sm:text-xs uppercase font-semibold text-[#8B4D58]"
              >
                <span className="w-8 h-px bg-[#B76E79]/50" />
                THE LAST PAGE
                <span className="w-8 h-px bg-[#B76E79]/50" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="font-serif-cinematic text-5xl sm:text-7xl font-medium leading-tight text-[#542D35]"
              >
                One last thing...
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="max-w-md font-handwriting text-2xl sm:text-3xl leading-relaxed text-[#8B4D58]"
              >
                Before you leave this little world I made for you. ♡
              </motion.p>

              <FloralVineDivider className="w-48 h-8 text-[#B76E79]" />

              <motion.button
                onClick={handleOpenFinalSurprise}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                  mt-3 group flex items-center gap-3 rounded-full
                  bg-[#7B4650] px-8 sm:px-10 py-4 text-sm font-semibold
                  tracking-[0.15em] uppercase text-[#FFF9F6]
                  shadow-[0_12px_35px_rgba(91,48,58,0.25)]
                  transition-all hover:bg-[#633740] cursor-pointer
                "
              >
                <Gift className="w-4 h-4" />
                <span>Open the last page</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>

              <p className="text-xs tracking-wider text-[#9B6870]">
                made especially for Mone
              </p>
            </motion.div>
          ) : (
            /* GRAND REVEAL */
            <motion.div
              key="post-reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-10 sm:mb-14 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#8B4D58]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                THE LAST PAGE
                <Sparkles className="w-3.5 h-3.5" />
              </motion.div>

              {/* PHOTO FRAME */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[420px] sm:max-w-[480px]"
              >
                <div className="absolute inset-4 translate-y-5 rounded-2xl bg-[#7B4650]/15 blur-xl" />

                <div className="relative rounded-2xl bg-[#FFFDF9] p-3 sm:p-4 shadow-[0_25px_70px_rgba(91,48,58,0.18)] border border-[#D7A7AE]/40">
                  <FloralCornerFlourish position="top-left" className="absolute z-20 -top-4 -left-4 w-14 h-14 text-[#B76E79]" />
                  <FloralCornerFlourish position="bottom-right" className="absolute z-20 -bottom-4 -right-4 w-14 h-14 text-[#B76E79]" />

                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EBD4D6]">
                    <img
                      src={finalReveal.bestPhotoUrl}
                      alt="Mone and sibling"
                      referrerPolicy="no-referrer"
                      className={`
                        w-full h-full object-cover transition-all duration-[1600ms] ease-out
                        ${photoFocused ? 'blur-0 scale-100' : 'blur-md scale-110'}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B2930]/10 via-transparent to-white/10 pointer-events-none" />
                  </div>

                  <p className="mt-4 font-handwriting text-xl sm:text-2xl text-[#633740]">
                    US, always. ♡
                  </p>
                </div>
              </motion.div>

              {/* QUOTES */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 sm:mt-16 max-w-2xl px-4"
              >
                <p className="font-serif-cinematic italic text-xl sm:text-2xl leading-relaxed text-[#633740]">
                  “{finalReveal.quoteLine1}”
                </p>
                <p className="mt-3 font-serif-cinematic italic text-xl sm:text-2xl leading-relaxed text-[#633740]">
                  “{finalReveal.quoteLine2}”
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="mt-3 font-serif-cinematic italic text-xl sm:text-2xl font-medium leading-relaxed text-[#4B2930]"
                >
                  “{finalReveal.quoteLine3}”
                </motion.p>
              </motion.div>

              {/* DIVIDER */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="my-10 sm:my-14"
              >
                <FloralVineDivider className="w-52 sm:w-64 h-8 text-[#B76E79]" />
              </motion.div>

              {/* HAPPY BIRTHDAY */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
                className="px-3"
              >
                <p className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-[#9B6870]">
                  and finally...
                </p>
                <h1 className="font-serif-cinematic text-5xl sm:text-7xl md:text-8xl font-medium leading-[0.95] tracking-tight text-[#542D35]">
                  HAPPY<br />BIRTHDAY,<br />
                  <span className="text-[#9B5362]">MONE</span>
                  <span className="inline-block ml-2">♡</span>
                </h1>
                <p className="mt-7 max-w-xl mx-auto font-serif-cinematic text-lg sm:text-2xl leading-relaxed text-[#633740]">
                  “{finalReveal.subHeadline}”
                </p>
                <p className="mt-5 text-sm sm:text-base font-sans-clean tracking-[0.12em] uppercase font-medium text-[#8B4D58]">
                  {finalReveal.toast}
                </p>
              </motion.div>

              {/* FINAL I LOVE YOU */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 3 }}
                className="mt-16 sm:mt-20 flex flex-col items-center"
              >
                <div className="flex items-center gap-3 sm:gap-5">
                  <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-[#B76E79] fill-[#B76E79]" />
                  <motion.h2
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="font-serif-cinematic text-4xl sm:text-6xl md:text-7xl font-medium tracking-wide text-[#542D35]"
                  >
                    {finalReveal.finalILoveYou}
                  </motion.h2>
                  <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-[#B76E79] fill-[#B76E79]" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.7 }}
                  className="mt-8 flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#8B4D58]"
                >
                  <span className="w-8 h-px bg-[#B76E79]/50" />
                  {finalReveal.footerNote}
                  <span className="w-8 h-px bg-[#B76E79]/50" />
                </motion.div>
              </motion.div>

              <div className="h-16 sm:h-24" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}