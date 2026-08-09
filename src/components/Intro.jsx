
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flower2 } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralVineDivider } from './FloralDecorations';

export default function Intro({ onEnter }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#FFFDF9]">

      {/* Soft Pinterest-style Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EF] to-[#F7F1EA]" />

      {/* Soft Rose & Sage Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="absolute top-[15%] left-[10%] w-96 h-96 rounded-full
          bg-[#E8B8C0]/20 blur-3xl animate-pulse"
          style={{ animationDuration: '7s' }}
        />

        <div
          className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full
          bg-[#C9D8C4]/25 blur-3xl animate-pulse"
          style={{ animationDuration: '9s' }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full bg-[#F3D9DD]/15 blur-3xl"
        />
      </div>

      {/* Very Subtle Paper Texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none
        bg-[radial-gradient(#3A2C31_0.7px,transparent_0.7px)]
        [background-size:12px_12px]"
      />

      {/* Decorative Flowers */}
      <div className="absolute top-12 left-10 opacity-30 pointer-events-none">
        <FlowerBloom className="w-12 h-12 text-[#C98998]" />
      </div>

      <div className="absolute top-20 right-16 opacity-25 pointer-events-none">
        <FlowerBloom className="w-8 h-8 text-[#B8737D]" />
      </div>

      <div className="absolute bottom-20 left-20 opacity-20 pointer-events-none">
        <FlowerBloom className="w-10 h-10 text-[#C98998]" />
      </div>

      <div className="absolute bottom-14 right-12 opacity-30 pointer-events-none">
        <FlowerBloom className="w-12 h-12 text-[#A9BDA3]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center flex flex-col items-center">

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="
            flex items-center gap-2
            px-4 py-1.5
            rounded-full
            bg-white/50
            backdrop-blur-md
            border border-[#DDBBC1]/40
            text-xs
            font-sans-clean
            font-semibold
            tracking-[0.25em]
            uppercase
            text-[#8C6870]
            mb-8
            shadow-sm
          "
        >
          <FlowerBloom className="w-4 h-4 text-[#C98998]" />

          <span>{sisterData.tagline}</span>

          <FlowerBloom className="w-4 h-4 text-[#C98998]" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col items-center my-2 relative"
        >
          <h1
            className="
              text-7xl
              sm:text-8xl
              md:text-[112px]
              leading-[0.85]
              font-light
              font-serif-cinematic
              tracking-tighter
              text-[#3A2C31]
            "
          >
            PIECES
            <br />
            OF
            <br />

            <span className="italic font-normal text-[#B8737D] flex items-center justify-center gap-3">
              YOU.

              <Flower2
                className="w-8 h-8 sm:w-12 sm:h-12 text-[#C98998] animate-spin"
                style={{ animationDuration: '18s' }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Floral Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <FloralVineDivider
            className="w-56 h-6 my-5 text-[#C98998]/70"
          />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="
            text-lg
            sm:text-xl
            font-serif-cinematic
            italic
            text-[#6F6266]
            max-w-lg
            mx-auto
            mt-2
            mb-8
            leading-relaxed
          "
        >
          “{sisterData.centralQuote}”
        </motion.p>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={onEnter}
          id="enter-story-btn"
          className="
            group
            relative
            inline-flex
            items-center
            gap-3
            px-9
            py-4
            rounded-full
            bg-[#B8737D]
            hover:bg-[#A96570]
            text-white
            font-sans-clean
            text-xs
            tracking-[0.2em]
            uppercase
            font-bold
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
            cursor-pointer
            border border-[#D9AAB2]
          "
        >
          <span>ENTER STORY</span>

          <ArrowRight
            className="
              w-4 h-4
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.button>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="
          absolute
          bottom-8
          text-[11px]
          font-sans-clean
          tracking-[0.25em]
          text-[#8C6870]
          uppercase
          font-medium
          flex
          items-center
          gap-2
          z-10
        "
      >
        <span>🌸</span>
        <span>A Little Floral World Made For Mone</span>
        <span>🌸</span>
      </motion.div>

    </section>
  );
}

