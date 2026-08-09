import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FloralVineDivider } from './FloralDecorations';

export default function WhatIAdmire() {
  const statements = sisterData.admireStatements || [];

  return (
    <section
      className="
        relative
        min-h-[85vh]
        sm:min-h-screen
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        py-16
        sm:py-20
        overflow-hidden
        film-grain
        border-t
        border-[#E8D9D3]
      "
      style={{
        background:
          'radial-gradient(circle at 50% 0%, #F8EEE9 0%, #FFFDF9 45%, #FAF6EF 100%)',
      }}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Soft rose glow */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[420px]
            h-[420px]
            sm:w-[650px]
            sm:h-[650px]
            rounded-full
            bg-[#E8B8C0]/20
            blur-3xl
          "
        />

        {/* Sage glow */}
        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#DDE8D8]/25
            blur-3xl
          "
        />

        {/* Floating petals */}
        <motion.span
          animate={{
            y: [0, -10, 0],
            rotate: [-10, 4, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[16%]
            left-[7%]
            text-[#D8A0A6]/40
            text-xl
          "
        >
          ❀
        </motion.span>

        <motion.span
          animate={{
            y: [0, 8, 0],
            rotate: [5, -8, 5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[24%]
            right-[8%]
            text-[#B8C9B1]/50
            text-lg
          "
        >
          ✦
        </motion.span>

        <span
          className="
            absolute
            bottom-[18%]
            left-[10%]
            text-[#D8A0A6]/30
            text-2xl
          "
        >
          ❀
        </span>

        <span
          className="
            absolute
            bottom-[14%]
            right-[11%]
            text-[#B8C9B1]/35
            text-xl
          "
        >
          ✦
        </span>
      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full max-w-4xl mx-auto">

        {/* =================================================
            CHAPTER HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex
            items-center
            justify-center
            gap-3
            mb-7
          "
        >
          <span className="w-8 sm:w-12 h-px bg-[#D8A0A6]/50" />

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#FFF2F4]
              border
              border-[#E8C9CE]
              shadow-sm
            "
          >
            <Sparkles className="w-3 h-3 text-[#A95665]" />

            <span
              className="
                text-[9px]
                sm:text-[10px]
                tracking-[0.28em]
                uppercase
                font-sans-clean
                font-semibold
                text-[#7B3E48]
              "
            >
              Chapter 09 • Quiet Belief
            </span>

            <Sparkles className="w-3 h-3 text-[#A95665]" />
          </div>

          <span className="w-8 sm:w-12 h-px bg-[#D8A0A6]/50" />
        </motion.div>


        {/* =================================================
            TITLE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              tracking-[0.25em]
              uppercase
              font-sans-clean
              text-[#A27B82]
              mb-3
            "
          >
            A few things I quietly notice about you
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-serif-cinematic
              font-light
              leading-tight
              tracking-tight
              text-[#34402F]
            "
          >
            The things I admire
          </h2>
        </motion.div>


        {/* =================================================
            STATEMENTS
        ================================================== */}

        <div className="relative">

          {statements.map((line, idx) => {
            const isBelief = line
              .toLowerCase()
              .includes('believe in you');

            return (
              <motion.div
                key={`${line}-${idx}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.1,
                  ease: 'easeOut',
                }}
                className={`
                  flex
                  justify-center
                  ${isBelief ? 'my-8 sm:my-10' : 'my-2 sm:my-3'}
                `}
              >

                {isBelief ? (

                  /* =================================================
                     MAIN BELIEF CARD
                  ================================================== */

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      relative
                      w-full
                      max-w-3xl
                      overflow-hidden
                      cursor-pointer
                      rounded-[1.75rem]
                      sm:rounded-[2rem]
                      px-6
                      py-8
                      sm:px-12
                      sm:py-10
                      bg-[#8F4655]
                      border
                      border-[#A95A68]
                      shadow-[0_18px_50px_rgba(123,62,72,0.22)]
                      transition-all
                      duration-500
                      hover:bg-[#A64F60]
                      hover:shadow-[0_24px_60px_rgba(123,62,72,0.32)]
                      active:bg-[#A64F60]
                    "
                  >

                    {/* Soft inner light */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.20),transparent_55%)]
                        pointer-events-none
                      "
                    />

                    {/* Decorative border corners */}
                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        w-7
                        h-7
                        border-l
                        border-t
                        border-white/20
                        rounded-tl-lg
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        w-7
                        h-7
                        border-r
                        border-b
                        border-white/20
                        rounded-br-lg
                      "
                    />

                    {/* Floating sparkle */}
                    <Sparkles
                      className="
                        absolute
                        top-5
                        right-6
                        w-4
                        h-4
                        text-[#F8DDE2]/70
                        group-hover:scale-125
                        group-hover:rotate-12
                        transition-all
                        duration-500
                      "
                    />

                    <div className="relative z-10 text-center">

                      {/* Small label */}
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1
                          rounded-full
                          bg-white/10
                          border
                          border-white/15
                          mb-5
                        "
                      >
                        <Heart
                          className="
                            w-3
                            h-3
                            text-[#F8DDE2]
                            fill-[#F8DDE2]
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            sm:text-[10px]
                            uppercase
                            tracking-[0.25em]
                            font-sans-clean
                            font-semibold
                            text-[#F8E7E9]
                          "
                        >
                          What I hope you always remember
                        </span>
                      </div>


                      {/* Main quote */}
                      <h2
                        className="
                          text-3xl
                          sm:text-5xl
                          md:text-6xl
                          font-serif-cinematic
                          font-medium
                          leading-[1.12]
                          tracking-tight
                          text-[#FFF9F7]
                        "
                      >
                        “{line}”
                      </h2>


                      {/* Decorative divider */}
                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                      >
                        <span className="w-10 h-px bg-white/25" />

                        <Heart
                          className="
                            w-4
                            h-4
                            text-[#F7DDE1]
                            fill-[#F7DDE1]
                            group-hover:scale-125
                            transition-transform
                            duration-300
                          "
                        />

                        <span className="w-10 h-px bg-white/25" />
                      </div>

                    </div>
                  </motion.div>

                ) : (

                  /* =================================================
                     NORMAL STATEMENT
                  ================================================== */

                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      w-full
                      max-w-3xl
                      px-4
                      py-3
                      text-center
                      rounded-xl
                      transition-all
                      duration-300
                      hover:bg-[#FFF7F6]/70
                    "
                  >
                    <p
                      className="
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        font-serif-cinematic
                        font-light
                        leading-relaxed
                        text-[#3D4638]
                        transition-colors
                        duration-300
                        hover:text-[#6F3D47]
                      "
                    >
                      {line}
                    </p>
                  </motion.div>
                )}

              </motion.div>
            );
          })}

        </div>


        {/* =================================================
            FINAL THOUGHT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-8
            sm:mt-10
            flex
            flex-col
            items-center
          "
        >

          <FloralVineDivider
            className="
              w-36
              sm:w-48
              h-5
              text-[#A96A76]
              opacity-65
            "
          />

          <div
            className="
              mt-4
              flex
              items-center
              gap-3
            "
          >
            <span className="text-[#C98998]/70 text-xs">
              ✦
            </span>

            <Heart
              className="
                w-4
                h-4
                text-[#A95665]
                fill-[#A95665]/20
                animate-pulse
              "
            />

            <span className="text-[#C98998]/70 text-xs">
              ✦
            </span>
          </div>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              font-serif-cinematic
              italic
              text-[#806F72]
              text-center
            "
          >
          </p>

        </motion.div>

      </div>
    </section>
  );
}