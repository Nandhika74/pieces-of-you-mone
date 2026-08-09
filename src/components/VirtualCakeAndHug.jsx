import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Gift, MessageCircle, Flame, Wind, Smile, RefreshCw } from 'lucide-react';
import { FlowerBloom, FloralVineDivider } from './FloralDecorations';

// Realistic SVG Animated Cat Component for blowing candles
function RealisticBlowingCat({ isBlowing, candlesBlown }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Animated Wind Particle Stream when blowing */}
      <AnimatePresence>
        {isBlowing && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], x: [10, 80], y: [-5, 15], scale: [0.8, 1.4, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute top-16 right-[-40px] z-30 pointer-events-none flex items-center gap-1"
          >
            <div className="w-8 h-2 bg-gradient-to-r from-white via-cyan-200 to-transparent rounded-full blur-[1px]" />
            <span className="text-xl">💨</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={
          candlesBlown
            ? { y: [0, -12, 0], rotate: [0, -4, 4, 0] }
            : isBlowing
            ? { scale: [1, 1.08, 0.98], rotate: [0, 3, -3, 0] }
            : { y: [0, -3, 0] }
        }
        transition={
          candlesBlown
            ? { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
            : isBlowing
            ? { duration: 0.4, repeat: Infinity }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
        className="relative w-32 h-32 sm:w-36 sm:h-36"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            <linearGradient id="catFur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7C59F" />
              <stop offset="50%" stopColor="#E8A87C" />
              <stop offset="100%" stopColor="#C38D9E" />
            </linearGradient>
            <linearGradient id="catBelly" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDFB" />
              <stop offset="100%" stopColor="#FFE5EC" />
            </linearGradient>
            <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF758F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF758F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Party Hat */}
          <g transform="translate(100, 28)">
            <polygon points="0,-35 -16,10 16,10" fill="#B8737D" stroke="#FFF" strokeWidth="2" />
            <polygon points="0,-35 -8,10 8,10" fill="#C98998" />
            {/* Hat Pom-pom */}
            <circle cx="0" cy="-37" r="6" fill="#FFD166" />
            {/* Polka dots on hat */}
            <circle cx="-5" cy="-10" r="2.5" fill="#FFF" />
            <circle cx="5" cy="-2" r="2" fill="#FFD166" />
            <circle cx="0" cy="4" r="2.5" fill="#FFF" />
          </g>

          {/* Cat Tail swaying */}
          <motion.path
            d="M 40 160 Q 10 150 20 120"
            fill="none"
            stroke="#E8A87C"
            strokeWidth="12"
            strokeLinecap="round"
            animate={{ x: [0, 2, 0, -2, 0], y: [0, -1, 0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cat Body */}
          <ellipse cx="100" cy="140" rx="42" ry="38" fill="url(#catFur)" />
          {/* Cat Belly */}
          <ellipse cx="100" cy="144" rx="26" ry="24" fill="url(#catBelly)" />

          {/* Cat Paws holding table or up in celebration */}
          {!candlesBlown ? (
            <g>
              <ellipse cx="72" cy="165" rx="10" ry="8" fill="#FFFDFB" stroke="#E8A87C" strokeWidth="2" />
              <ellipse cx="128" cy="165" rx="10" ry="8" fill="#FFFDFB" stroke="#E8A87C" strokeWidth="2" />
            </g>
          ) : (
            <motion.g
              animate={{ y: [-4, 2, -4] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <ellipse cx="60" cy="130" rx="10" ry="12" fill="#FFFDFB" stroke="#E8A87C" strokeWidth="2" transform="rotate(-20 60 130)" />
              <ellipse cx="140" cy="130" rx="10" ry="12" fill="#FFFDFB" stroke="#E8A87C" strokeWidth="2" transform="rotate(20 140 130)" />
            </motion.g>
          )}

          {/* Cat Head */}
          <ellipse cx="100" cy="85" rx="46" ry="38" fill="url(#catFur)" />

          {/* Left Ear */}
          <motion.polygon
            points="58,58 38,22 75,48"
            fill="url(#catFur)"
            animate={{ rotate: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <polygon points="60,54 44,28 72,48" fill="#FFB5A7" />

          {/* Right Ear */}
          <motion.polygon
            points="142,58 162,22 125,48"
            fill="url(#catFur)"
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <polygon points="140,54 156,28 128,48" fill="#FFB5A7" />

          {/* Inflated Blowing Cheeks */}
          <ellipse cx="72" cy="94" rx={isBlowing ? "18" : "12"} ry={isBlowing ? "15" : "10"} fill="url(#blushGlow)" />
          <ellipse cx="128" cy="94" rx={isBlowing ? "18" : "12"} ry={isBlowing ? "15" : "10"} fill="url(#blushGlow)" />

          {/* EYES */}
          {candlesBlown ? (
            /* Happy Closed Eyes (^ w ^) */
            <g stroke="#2C3322" strokeWidth="3.5" strokeLinecap="round" fill="none">
              <path d="M 75 80 Q 85 70 91 80" />
              <path d="M 109 80 Q 115 70 125 80" />
            </g>
          ) : isBlowing ? (
            /* Focused Squinting Blowing Eyes (> o <) */
            <g stroke="#2C3322" strokeWidth="3.5" strokeLinecap="round" fill="none">
              <path d="M 74 76 L 88 84 L 74 90" />
              <path d="M 126 76 L 112 84 L 126 90" />
            </g>
          ) : (
            /* Large Realistic Glossy Anime/Meme Eyes with Blinking */
            <g>
              {/* Left Eye */}
              <circle cx="80" cy="80" r="11" fill="#2C3322" />
              <circle cx="77" cy="77" r="4" fill="#FFFDFB" />
              <circle cx="83" cy="83" r="1.5" fill="#FFFDFB" />

              {/* Right Eye */}
              <circle cx="120" cy="80" r="11" fill="#2C3322" />
              <circle cx="117" cy="77" r="4" fill="#FFFDFB" />
              <circle cx="123" cy="83" r="1.5" fill="#FFFDFB" />
            </g>
          )}

          {/* Nose */}
          <polygon points="96,90 104,90 100,95" fill="#FF758F" rx="1" />

          {/* Mouth */}
          {isBlowing ? (
            /* Open "O" Mouth Blowing Air */
            <circle cx="100" cy="104" r="7" fill="#2C3322" stroke="#FF758F" strokeWidth="2" />
          ) : candlesBlown ? (
            /* Open Happy Mouth :3 */
            <path d="M 92 96 Q 96 102 100 97 Q 104 102 108 96" fill="#2C3322" stroke="#FF758F" strokeWidth="1" />
          ) : (
            /* Cute Cat Mouth :3 */
            <path d="M 94 95 Q 100 100 100 95 Q 100 100 106 95" fill="none" stroke="#2C3322" strokeWidth="2.5" strokeLinecap="round" />
          )}

          {/* Whiskers */}
          <g stroke="#2C3322" strokeWidth="1.5" opacity="0.6" strokeLinecap="round">
            {/* Left Whiskers */}
            <line x1="60" y1="88" x2="35" y2="84" />
            <line x1="58" y1="94" x2="32" y2="95" />
            {/* Right Whiskers */}
            <line x1="140" y1="88" x2="165" y2="84" />
            <line x1="142" y1="94" x2="168" y2="95" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

// Realistic SVG Animated Hugging Cats Component
function RealisticHuggingCats() {
  return (
    <motion.div
      animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-44 h-44 sm:w-52 sm:h-52 drop-shadow-2xl"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Pulsing Love Hearts floating above */}
        <motion.g
          animate={{ y: [-5, -20, -5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <path d="M 100 25 C 100 15, 85 15, 85 25 C 85 35, 100 45, 100 50 C 100 45, 115 35, 115 25 C 115 15, 100 15, 100 25 Z" fill="#FF476F" />
          <path d="M 130 35 C 130 28, 118 28, 118 35 C 118 42, 130 50, 130 54 C 130 50, 142 42, 142 35 C 142 28, 130 28, 130 35 Z" fill="#C98998" transform="scale(0.7) translate(50, 10)" />
        </motion.g>

        {/* CAT 1 (LEFT - Soft Pink/White Sister Cat) */}
        <g id="cat1">
          {/* Ear Left */}
          <polygon points="50,60 30,25 65,48" fill="#FFFDFB" />
          <polygon points="52,56 36,32 62,48" fill="#C98998" />
          {/* Ear Right */}
          <polygon points="90,60 100,28 115,58" fill="#FFFDFB" />
          <polygon points="90,56 98,34 110,56" fill="#C98998" />

          {/* Head & Body */}
          <ellipse cx="70" cy="85" rx="36" ry="32" fill="#FFFDFB" />
          <path d="M 40 100 Q 30 170 95 170 Q 110 170 100 110 Z" fill="#FFFDFB" />

          {/* Closed Happy Eyes */}
          <path d="M 52 82 Q 60 75 66 82" fill="none" stroke="#2C3322" strokeWidth="3" strokeLinecap="round" />
          <path d="M 76 82 Q 84 75 90 82" fill="none" stroke="#2C3322" strokeWidth="3" strokeLinecap="round" />

          {/* Blush */}
          <ellipse cx="50" cy="90" rx="8" ry="5" fill="#FF758F" opacity="0.6" />
          <ellipse cx="90" cy="90" rx="8" ry="5" fill="#FF758F" opacity="0.6" />

          {/* Nose & Mouth */}
          <polygon points="69,87 73,87 71,90" fill="#FF758F" />
          <path d="M 67 92 Q 71 96 75 92" fill="none" stroke="#2C3322" strokeWidth="2" />
        </g>

        {/* CAT 2 (RIGHT - Warm Ginger Sister Cat Hugging Cat 1) */}
        <g id="cat2">
          {/* Ear Left */}
          <polygon points="105,62 115,28 135,55" fill="#E8A87C" />
          <polygon points="108,58 116,34 130,53" fill="#FFB5A7" />
          {/* Ear Right */}
          <polygon points="145,62 165,25 130,50" fill="#E8A87C" />
          <polygon points="143,58 158,30 132,48" fill="#FFB5A7" />

          {/* Head & Body */}
          <ellipse cx="125" cy="85" rx="36" ry="32" fill="#E8A87C" />
          <path d="M 95 100 Q 90 170 160 170 Q 170 150 155 100 Z" fill="#E8A87C" />

          {/* Closed Hugging Eyes (> w <) */}
          <path d="M 110 82 Q 118 75 124 82" fill="none" stroke="#2C3322" strokeWidth="3" strokeLinecap="round" />
          <path d="M 134 82 Q 142 75 148 82" fill="none" stroke="#2C3322" strokeWidth="3" strokeLinecap="round" />

          {/* Blush */}
          <ellipse cx="108" cy="90" rx="8" ry="5" fill="#FF758F" opacity="0.6" />
          <ellipse cx="148" cy="90" rx="8" ry="5" fill="#FF758F" opacity="0.6" />

          {/* Nose & Mouth */}
          <polygon points="127,87 131,87 129,90" fill="#FF758F" />
          <path d="M 125 92 Q 129 96 133 92" fill="none" stroke="#2C3322" strokeWidth="2" />
        </g>

        {/* HUGGING ARMS / PAWS WRAPPED AROUND EACH OTHER */}
        <g id="hugging-paws">
          {/* Cat 1 Paw wrapped around Cat 2 */}
          <path d="M 70 115 C 100 115, 130 120, 135 125" fill="none" stroke="#FFFDFB" strokeWidth="16" strokeLinecap="round" />
          <path d="M 70 115 C 100 115, 130 120, 135 125" fill="none" stroke="#F0D5DA" strokeWidth="2" strokeLinecap="round" />

          {/* Cat 2 Paw wrapped around Cat 1 */}
          <path d="M 130 125 C 100 130, 75 125, 65 120" fill="none" stroke="#E8A87C" strokeWidth="16" strokeLinecap="round" />
          <path d="M 130 125 C 100 130, 75 125, 65 120" fill="none" stroke="#C38D9E" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  );
}

export default function VirtualCakeAndHug() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hugSent, setHugSent] = useState(false);
  const [hugCount, setHugCount] = useState(1);

  // Trigger candle blow function
  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setIsBlowing(true);

    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);
      setShowMessage(true);

      // Trigger grand fireworks confetti
      try {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#C98998', '#FFD166', '#06D6A0', '#118AB2', '#EF476F', '#FFFDFB'],
        });
        setTimeout(() => {
          confetti({
            particleCount: 80,
            angle: 60,
            spread: 80,
            origin: { x: 0 },
          });
          confetti({
            particleCount: 80,
            angle: 120,
            spread: 80,
            origin: { x: 1 },
          });
        }, 300);
      } catch (e) {
        console.log('Confetti playback', e);
      }
    }, 1200);
  };

  const handleSendHug = () => {
    setHugSent(true);
    setHugCount(prev => prev + 1);

    try {
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#FF6B6B', '#C98998', '#D8A0A6', '#FFFDFB'],
      });
    } catch (e) {
      console.log('Hug confetti error', e);
    }
  };

  const handleResetCake = () => {
    setCandlesBlown(false);
    setShowMessage(false);
    setHugSent(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#FAF6EF] text-[#2C3322] film-grain overflow-hidden border-t border-[#F0E2E5]/20">
      {/* Soft Glow Background Spheres */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-[#E89CA7]/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#F3D3BD]/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="max-w-3xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-3 mb-8"
        >
          <span className="text-xs font-sans-clean tracking-[0.3em] font-semibold text-[#C98998] uppercase flex items-center gap-2 px-4 py-1 rounded-full bg-[#B8737D]/20 border border-[#B8737D]/40">
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
            <span>SPECIAL BIRTHDAY MOMENT</span>
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif-cinematic font-light text-[#2C3322] tracking-tight">
            Make a Wish, Mone! 🎂
          </h2>

          <p className="text-base sm:text-lg font-serif-cinematic italic text-[#C98998] max-w-md">
            Click the blow button or tap the candles to extinguish the flames & unlock a secret surprise message!
          </p>

          <FloralVineDivider className="w-48 h-5 text-[#D8A0A6]" />
        </motion.div>

        {/* 3D-STYLED ANIMATED BIRTHDAY CAKE & CAT MEME CONTAINER */}
        <div className="relative w-full max-w-lg bg-white/85 border border-[#F0D5DA] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col items-center space-y-8">

          {/* CAT MEME BLOWING ANIMATION DISPLAY */}
          <div className="relative flex items-center justify-center gap-4 py-2">
            {/* Realistic SVG Animated Cat Component */}
            <div className="relative">
              <RealisticBlowingCat isBlowing={isBlowing} candlesBlown={candlesBlown} />

              {/* Speech Bubble from Cat Meme */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-4 -right-8 sm:-right-12 bg-[#FFFDFB] text-[#2C3322] px-3.5 py-1.5 rounded-2xl rounded-bl-none text-xs font-serif-cinematic font-bold shadow-lg border border-[#F0D5DA] max-w-[140px] z-20"
              >
                {candlesBlown
                  ? 'Yay! Happy Birthday Mone! 🎉'
                  : isBlowing
                  ? 'Puffffff... Blowing! 💨'
                  : 'Ready? Take a deep breath! 🐱✨'}
              </motion.div>
            </div>
          </div>

          {/* 3D INTERACTIVE CAKE */}
          <div
            onClick={handleBlowCandles}
            className="relative cursor-pointer group flex flex-col items-center my-4 py-4 px-6 rounded-2xl transition-all hover:scale-102"
          >
            {/* Wind Blow Effect overlay */}
            <AnimatePresence>
              {isBlowing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 0.9, scale: 1.3, y: -40 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute z-30 top-0 text-5xl pointer-events-none select-none"
                >
                  💨💨💨
                </motion.div>
              )}
            </AnimatePresence>

            {/* CANDLES ROW WITH CANDLE FLAMES */}
            <div className="flex items-end justify-center gap-6 sm:gap-8 z-20 mb-[-8px]">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Candle Flame / Smoke */}
                  <div className="h-8 flex items-end justify-center">
                    {!candlesBlown ? (
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 0.95, 1.1, 1],
                          rotate: [-3, 3, -2, 4, 0],
                        }}
                        transition={{
                          duration: 0.8 + idx * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="relative flex flex-col items-center"
                      >
                        {/* Outer Glow */}
                        <div className="w-5 h-7 rounded-full bg-gradient-to-t from-[#FF4500] via-[#FFA500] to-[#FFD700] shadow-[0_0_15px_rgba(255,165,0,0.9)] animate-pulse" />
                        <div className="w-2 h-4 rounded-full bg-[#FFFDFB] absolute top-1.5 shadow-sm" />
                      </motion.div>
                    ) : (
                      /* Smoke puff when blown */
                      <motion.div
                        initial={{ opacity: 1, y: 0, scale: 0.8 }}
                        animate={{ opacity: 0, y: -25, scale: 1.5 }}
                        transition={{ duration: 1.2 }}
                        className="text-xs text-gray-300 font-bold select-none"
                      >
                        💨
                      </motion.div>
                    )}
                  </div>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-2 bg-gray-700" />

                  {/* Candle Body */}
                  <div className={`w-3.5 sm:w-4 ${idx === 1 ? 'h-14 sm:h-16' : 'h-11 sm:h-12'} bg-gradient-to-b from-[#C98998] via-[#D8A0A6] to-[#B8737D] rounded-t-sm shadow-md border-x border-[#FFFDFB]/30 relative overflow-hidden`}>
                    {/* Candle Stripe decoration */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:10px_10px]" />
                  </div>
                </div>
              ))}
            </div>

            {/* CAKE TIER 1 (TOP TIER) */}
            <div className="relative w-36 sm:w-44 h-12 sm:h-14 bg-gradient-to-r from-[#FAD4C0] via-[#FFE2D1] to-[#FAD4C0] rounded-t-2xl shadow-xl border-t-2 border-[#FFFDFB] flex items-center justify-center overflow-hidden">
              {/* Frosting Drips */}
              <div className="absolute top-0 inset-x-0 h-4 bg-[#FFFDFB] rounded-b-xl opacity-90 shadow-xs flex justify-around">
                <div className="w-4 h-5 bg-[#FFFDFB] rounded-b-full shadow-xs" />
                <div className="w-5 h-6 bg-[#FFFDFB] rounded-b-full shadow-xs" />
                <div className="w-4 h-4 bg-[#FFFDFB] rounded-b-full shadow-xs" />
                <div className="w-5 h-6 bg-[#FFFDFB] rounded-b-full shadow-xs" />
              </div>
              <span className="text-xs font-serif-cinematic text-[#2C3322] font-bold z-10 pt-3 tracking-widest">
                MONE 2026
              </span>
            </div>

            {/* CAKE TIER 2 (MIDDLE TIER) */}
            <div className="relative w-48 sm:w-56 h-14 sm:h-16 bg-gradient-to-r from-[#E89CA7] via-[#C98998] to-[#E89CA7] rounded-t-xl shadow-2xl border-t-2 border-[#FFF0F3] flex items-center justify-center overflow-hidden">
              {/* Decorative Flowers / Cream Dots */}
              <div className="absolute top-0 inset-x-0 h-4 bg-[#FFFDFB]/90 rounded-b-lg flex justify-between px-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-[#FFFDFB] rounded-full shadow-xs" />
                ))}
              </div>
              <div className="flex items-center gap-2 pt-3">
                <span className="text-xs text-[#2C3322] font-serif-cinematic font-medium">🌸 Sister's Love 🌸</span>
              </div>
            </div>

            {/* CAKE BASE STAND */}
            <div className="w-60 sm:w-68 h-4 bg-gradient-to-r from-[#7B3E48] via-[#F0D5D9] to-[#7B3E48] rounded-full shadow-2xl border-t border-[#FFFDFB]/60" />
            <div className="w-40 sm:w-48 h-3 bg-gradient-to-r from-[#888] via-[#ccc] to-[#888] rounded-b-xl shadow-md opacity-60" />
          </div>

          {/* INTERACTIVE BLOW BUTTON */}
          <div className="flex flex-col items-center gap-3">
            {!candlesBlown ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBlowCandles}
                disabled={isBlowing}
                id="blow-candles-btn"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B8737D] via-[#D8A0A6] to-[#B8737D] hover:from-[#A35C66] hover:to-[#A35C66] text-[#2C3322] font-sans-clean text-sm tracking-wider uppercase font-bold shadow-xl transition-all border border-[#FFFDFB]/30 flex items-center gap-2 cursor-pointer"
              >
                <Wind className="w-4 h-4 animate-bounce text-[#2C3322]" />
                <span>{isBlowing ? 'Blowing Candle... 💨' : 'Blow the Candles! 🎂'}</span>
              </motion.button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm font-sans-clean text-[#06D6A0] font-bold flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#06D6A0]/15 border border-[#06D6A0]/30">
                  <span>✨ Wish Granted! Candles Blown!</span>
                </span>
                <button
                  onClick={handleResetCake}
                  className="p-2 rounded-full bg-[#FFFDFB]/10 hover:bg-[#FFFDFB]/20 text-[#2C3322] transition-all"
                  title="Relight Cake Candles"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SECRET BIRTHDAY LETTER ENVELOPE (Revealed after candles blown) */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="mt-10 w-full max-w-xl bg-[#FFFDFB] text-[#2C3322] p-6 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#F0D5DA] text-left relative overflow-hidden"
            >
              {/* Envelope Header */}
              <div className="flex items-center justify-between border-b border-[#F0E2E5] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#B8737D] text-[#2C3322] flex items-center justify-center font-bold text-xs">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs font-sans-clean text-[#B8737D] uppercase font-bold tracking-wider block">
                      SECRET BIRTHDAY LETTER FOR MONE
                    </span>
                    <span className="text-[11px] text-[#5A634E]">
                      From your sister with all my love ❤️
                    </span>
                  </div>
                </div>
                <FlowerBloom className="w-6 h-6 text-[#D8A0A6]" />
              </div>

              {/* Heartfelt Letter Content */}
              <div className="space-y-4 font-serif-cinematic text-lg sm:text-xl text-[#2C3322] leading-relaxed italic">
                <p>
                  “Dearest Mone,
                </p>
                <p>
                  Happy Birthday! On this special day, I just want to remind you how deeply loved, valued, and cherished you are. Having you as my sister is the sweetest blessing in my life.
                </p>
                <p>
                  No matter how many years pass, our laughs, our shared reels, our quiet understanding, and our wavelength will always remain unmatched. May this year bring you endless happiness, good health, and all the success your kind heart deserves!
                </p>
                <p className="text-right font-handwriting text-2xl text-[#B8737D] font-bold pt-2">
                  Forever & Always, <br />
                  Your Sister 🌸
                </p>
              </div>

              {/* VIRTUAL HUG BUTTON SECTION */}
              <div className="mt-8 pt-6 border-t border-[#F0E2E5] flex flex-col items-center space-y-4 text-center">
                <span className="text-xs font-sans-clean text-[#5A634E] uppercase tracking-widest font-semibold">
                  WANT A WARM SISTERLY EMBRACE RIGHT NOW?
                </span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendHug}
                  id="send-virtual-hug-btn"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#E89CA7] to-[#FF6B6B] text-[#2C3322] font-sans-clean text-sm uppercase tracking-wider font-bold shadow-xl border border-[#FFFDFB]/40 flex items-center gap-3 cursor-pointer"
                >
                  <Heart className="w-5 h-5 text-[#2C3322] fill-current animate-pulse" />
                  <span>SEND VIRTUAL HUG TO MONE 🤗 ({hugCount})</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* VIRTUAL HUG ANIMATION OVERLAY */}
        <AnimatePresence>
          {hugSent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mt-8 w-full max-w-lg bg-[#FFF0F3] text-[#2C3322] p-8 rounded-3xl border-2 border-[#F0D5DA] shadow-2xl flex flex-col items-center space-y-6 text-center relative overflow-hidden"
            >
              {/* Floating Hearts background in hug overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl"
                >
                  💖
                </motion.div>
              </div>

              {/* Realistic Animated Hugging Cats Vector */}
              <div className="flex items-center justify-center z-10 py-2">
                <RealisticHuggingCats />
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif-cinematic font-bold text-[#B8737D]">
                  Virtual Hug Delivered! 🤗❤️
                </h3>
                <p className="text-base font-serif-cinematic italic text-[#5A634E] max-w-sm mx-auto">
                  A big, warm, cozy sister hug sent across the distance straight to your heart!
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#B8737D]/15 text-[#B8737D] text-xs font-sans-clean font-bold tracking-wider uppercase mt-2">
                  100% SISTER WARMTH GUARANTEED 🌸
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
