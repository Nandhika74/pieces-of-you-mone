import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Footprints,
  Sparkles,
  ArrowDown,
  Milestone,
  Star,
} from 'lucide-react';

import { sisterData } from '../data/sisterData';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function YouWentFirst() {
  const { currentTheme } = useThemeAndImage();

  const [activeStep, setActiveStep] = useState(null);

  const stepIcons = [
    {
      icon: Footprints,
      label: 'MILESTONE 01 • PATHFINDING',
    },
    {
      icon: Compass,
      label: 'MILESTONE 02 • TASTES & QUIRKS',
    },
    {
      icon: Milestone,
      label: 'MILESTONE 03 • NEW BEGINNINGS',
    },
    {
      icon: Star,
      label: 'MILESTONE 04 • GUIDING LIGHT',
    },
  ];

  const steps = sisterData.pathmakerSteps || [
    {
      first: 'You explored the world first...',
      second: 'And gave me the quiet confidence to follow.',
    },
    {
      first: 'You built your own tastes & quirks...',
      second: 'And subtly shaped so many things I love today.',
    },
    {
      first: 'You faced new beginnings ahead of me...',
      second: 'And showed me there was nothing to be afraid of.',
    },
    {
      first: 'You walked through every phase first...',
      second: 'So I always had an elder sister lighting up the path.',
    },
  ];

  return (
    <section
      className="
        relative
        flex
        flex-col
        items-center
        px-5
        sm:px-6
        py-16
        sm:py-20
        film-grain
        border-t
        transition-colors
        duration-500
      "
      style={{
        borderColor: currentTheme.borderColor,
      }}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          flex
          items-center
          gap-2
          text-[10px]
          sm:text-xs
          font-sans-clean
          tracking-[0.25em]
          sm:tracking-[0.3em]
          font-semibold
          uppercase
          mb-3
          px-3
          py-1
          rounded-full
          border
        "
        style={{
          backgroundColor: currentTheme.tagBg,
          color: currentTheme.accentDark,
          borderColor: currentTheme.borderColor,
        }}
      >
        <Compass
          className="w-3 h-3"
          style={{ color: currentTheme.accentMain }}
        />

        <span>CHAPTER 02 • THE PATH-MAKER</span>

        <Compass
          className="w-3 h-3"
          style={{ color: currentTheme.accentMain }}
        />
      </motion.div>


      {/* =====================================================
          TITLE
      ====================================================== */}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          text-4xl
          sm:text-6xl
          md:text-7xl
          font-serif-cinematic
          font-light
          tracking-tight
          text-center
          leading-tight
        "
        style={{
          color: currentTheme.textDark,
        }}
      >
        You Went First
      </motion.h2>


      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="
          mt-2
          text-sm
          sm:text-base
          font-serif-cinematic
          italic
          max-w-md
          text-center
          leading-relaxed
        "
        style={{
          color: currentTheme.textMuted,
        }}
      >
        The subtle, beautiful ways having an elder sister shaped who I am today.
      </motion.p>


      {/* =====================================================
          TIMELINE / ROADMAP
      ====================================================== */}

      <div
        className="
          relative
          w-full
          max-w-xl
          mt-8
          sm:mt-10
        "
      >

        {/* =================================================
            CENTRAL PATH
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-2
            bottom-2
            -translate-x-1/2
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#D8A0A6]
            to-transparent
            opacity-70
          "
        />


        {/* =================================================
            MILESTONES
        ================================================== */}

        <div className="relative space-y-5 sm:space-y-6">

          {steps.map((step, idx) => {
            const stepMeta = stepIcons[idx % stepIcons.length];
            const IconComp = stepMeta.icon;
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={idx}

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
                  margin: '-40px',
                }}

                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                }}

                whileHover={{
                  y: -4,
                  scale: 1.015,
                }}

                whileTap={{
                  scale: 0.985,
                }}

                onPointerDown={() => setActiveStep(idx)}
                onPointerUp={() => setActiveStep(null)}
                onPointerLeave={() => setActiveStep(null)}
                onPointerCancel={() => setActiveStep(null)}

                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  text-center
                  px-5
                  py-5
                  sm:px-7
                  sm:py-6
                  rounded-2xl
                  border
                  cursor-pointer
                  overflow-hidden
                  transition-all
                  duration-300
                  select-none
                "

                style={{
                  backgroundColor: isActive
                    ? '#8F3F50'
                    : currentTheme.cardBg,

                  borderColor: isActive
                    ? '#8F3F50'
                    : currentTheme.borderColor,

                  boxShadow: isActive
                    ? '0 14px 35px rgba(123,62,72,0.25)'
                    : '0 5px 20px rgba(91,65,71,0.06)',
                }}
              >

                {/* =================================================
                    ACTIVE PINK GLOW
                ================================================== */}

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      absolute
                      inset-0
                      pointer-events-none
                      bg-gradient-to-br
                      from-[#B8737D]/30
                      via-transparent
                      to-[#6F3040]/20
                    "
                  />
                )}


                {/* =================================================
                    MILESTONE BADGE
                ================================================== */}

                <motion.div
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    rotate: isActive ? 3 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    z-10
                    px-3
                    py-1
                    rounded-full
                    text-[9px]
                    sm:text-[10px]
                    font-sans-clean
                    font-bold
                    tracking-[0.15em]
                    uppercase
                    flex
                    items-center
                    gap-1.5
                    border
                    transition-all
                    duration-300
                  "
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(255,255,255,0.15)'
                      : currentTheme.tagBg,

                    color: isActive
                      ? '#FFF8F8'
                      : currentTheme.accentDark,

                    borderColor: isActive
                      ? 'rgba(255,255,255,0.25)'
                      : currentTheme.borderColor,
                  }}
                >
                  <IconComp
                    className="w-3 h-3"
                    style={{
                      color: isActive
                        ? '#FFDCE1'
                        : currentTheme.accentMain,
                    }}
                  />

                  <span>{stepMeta.label}</span>
                </motion.div>


                {/* =================================================
                    FIRST SENTENCE
                ================================================== */}

                <p
                  className="
                    relative
                    z-10
                    mt-3
                    text-lg
                    sm:text-xl
                    font-serif-cinematic
                    font-semibold
                    leading-snug
                    transition-colors
                    duration-300
                  "
                  style={{
                    color: isActive
                      ? '#FFF8F8'
                      : currentTheme.textDark,
                  }}
                >
                  “{step.first}”
                </p>


                {/* =================================================
                    ARROW
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, 3, 0],
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    relative
                    z-10
                    my-2
                  "
                >
                  <ArrowDown
                    className="w-4 h-4"
                    style={{
                      color: isActive
                        ? '#FFD0D7'
                        : currentTheme.accentMain,
                    }}
                  />
                </motion.div>


                {/* =================================================
                    SECOND SENTENCE
                ================================================== */}

                <p
                  className="
                    relative
                    z-10
                    text-base
                    sm:text-lg
                    font-serif-cinematic
                    italic
                    leading-relaxed
                    max-w-md
                    transition-colors
                    duration-300
                  "
                  style={{
                    color: isActive
                      ? '#FDECEF'
                      : currentTheme.textMuted,
                  }}
                >
                  {step.second}
                </p>


                {/* =================================================
                    ACTIVE INDICATOR
                ================================================== */}

                <motion.div
                  className="
                    relative
                    z-10
                    mt-3
                    h-px
                    rounded-full
                  "
                  animate={{
                    width: isActive ? '55%' : '20%',
                    opacity: isActive ? 0.7 : 0.25,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  style={{
                    backgroundColor: isActive
                      ? '#FFD6DC'
                      : currentTheme.accentMain,
                  }}
                />

              </motion.div>
            );
          })}

        </div>
      </div>


      {/* =====================================================
          FINAL DARK PINK CONCLUSION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
          delay: 0.2,
        }}

        className="
          mt-10
          sm:mt-12
          px-6
          py-8
          sm:px-10
          sm:py-9
          rounded-3xl
          max-w-xl
          w-full
          text-center
          relative
          overflow-hidden
          border
          shadow-[0_15px_40px_rgba(123,62,72,0.20)]
        "

        style={{
          background:
            'linear-gradient(135deg, #8F3F50 0%, #9F4C5C 55%, #7B3748 100%)',

          borderColor: '#B8737D',
        }}
      >

        {/* =================================================
            SOFT GLOW
        ================================================== */}

        <div
          className="
            absolute
            -top-16
            -right-16
            w-40
            h-40
            rounded-full
            bg-[#F3B1B9]/15
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -left-16
            w-44
            h-44
            rounded-full
            bg-[#F8DDE1]/10
            blur-3xl
            pointer-events-none
          "
        />


        {/* =================================================
            DECORATIVE SPARKLES
        ================================================== */}

        <Sparkles
          className="
            absolute
            top-5
            left-5
            w-4
            h-4
            text-[#FFDDE2]
            opacity-70
          "
        />

        <Sparkles
          className="
            absolute
            top-5
            right-5
            w-4
            h-4
            text-[#FFDDE2]
            opacity-70
          "
        />


        {/* =================================================
            MAIN QUOTE
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
            delay: 0.35,
          }}

          className="
            relative
            z-10
            text-2xl
            sm:text-3xl
            font-serif-cinematic
            font-light
            leading-relaxed
            text-[#FFF9F9]
          "
        >
          “Without even realizing it, you've been my
          quiet guide, my path-maker, and my
          constant support.”
        </motion.p>


        {/* =================================================
            DIVIDER
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            gap-3
            my-5
          "
        >

          <span
            className="
              w-10
              sm:w-14
              h-px
              bg-[#FFDDE2]/40
            "
          />

          <Sparkles
            className="
              w-3.5
              h-3.5
              text-[#FFDDE2]
            "
          />

          <span
            className="
              w-10
              sm:w-14
              h-px
              bg-[#FFDDE2]/40
            "
          />

        </div>


        {/* =================================================
            SUBTEXT
        ================================================== */}

        <p
          className="
            relative
            z-10
            text-[9px]
            sm:text-[10px]
            font-sans-clean
            uppercase
            tracking-[0.22em]
            font-semibold
            leading-relaxed
            text-[#FFECEF]
            max-w-md
            mx-auto
          "
        >
          {sisterData.pathmakerSubtext}
        </p>

      </motion.div>


      {/* Small bottom spacing */}

      <div className="h-4 sm:h-6" />

    </section>
  );
}