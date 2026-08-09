import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Utensils,
  Award,
  Heart,
  Crown,
} from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function Personality() {
  const { currentTheme } = useThemeAndImage();

  const {
    greenLays,
    paniPuri,
    nccGirl,
    herBoldness,
  } = sisterData.personality;

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-24
        film-grain
        border-t
        transition-colors
        duration-500
        overflow-hidden
      "
      style={{
        borderColor: currentTheme.borderColor,
      }}
    >

      {/* =====================================================
          HEADER
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
        className="
          flex
          flex-col
          items-center
          gap-2
          mb-16
          relative
          z-10
        "
      >

        {/* Chapter Label */}

        <span
          className="
            text-xs
            font-sans-clean
            tracking-[0.3em]
            font-semibold
            uppercase
            flex
            items-center
            gap-2
            px-3.5
            py-1
            rounded-full
            border
            shadow-xs
          "
          style={{
            backgroundColor: currentTheme.tagBg,
            color: currentTheme.accentDark,
            borderColor: currentTheme.borderColor,
          }}
        >

          <Crown
            className="w-3.5 h-3.5"
            style={{
              color: currentTheme.accentMain,
            }}
          />

          CHAPTER 08 • ESSENCE OF MONE

          <Crown
            className="w-3.5 h-3.5"
            style={{
              color: currentTheme.accentMain,
            }}
          />

        </span>


        {/* Main Heading */}

        <h2
          className="
            text-4xl
            sm:text-6xl
            font-serif-cinematic
            font-light
            text-center
          "
          style={{
            color: currentTheme.textDark,
          }}
        >
          Things That Are Very, Very Mone ✨
        </h2>


        {/* Subtitle */}

        <p
          className="
            text-sm
            font-sans-clean
            max-w-md
            mt-1
            text-center
          "
          style={{
            color: currentTheme.textMuted,
          }}
        >
          The quirks, passions, tastes, and quiet strengths
          that make her irreplaceable.
        </p>

      </motion.div>


      {/* =====================================================
          FOUR PERSONALITY CARDS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          max-w-5xl
          w-full
          mx-auto
          relative
          z-10
        "
      >


        {/* ===================================================
            CARD 1 — GREEN LAYS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          }}
          className="
            group
            relative
            min-h-[420px]
            rounded-2xl
            paper-shadow
            text-left
            border
            transition-all
            duration-500
            hover:scale-[1.02]
            overflow-hidden
          "
          style={{
            borderColor: currentTheme.borderColor,
          }}
        >

          {/* Background Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
            style={{
              backgroundImage: greenLays?.backgroundImage
                ? `url("${greenLays.backgroundImage}")`
                : 'none',
            }}
          />

          {/* Dark Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/45
              to-black/10
            "
          />


          {/* Content */}

          <div
            className="
              relative
              z-10
              p-8
              h-full
              min-h-[420px]
              flex
              flex-col
              justify-end
            "
          >

            {/* Label */}

            <div className="flex items-center justify-between mb-4">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-sans-clean
                  tracking-[0.2em]
                  uppercase
                  font-bold
                  flex
                  items-center
                  gap-1.5
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                "
              >
                <Sparkles className="w-3.5 h-3.5" />

                <span>HER ICONIC SNACK</span>
              </span>

              <span className="text-xl">
                
              </span>

            </div>


            {/* Title */}

            <h3
              className="
                text-3xl
                font-serif-cinematic
                font-bold
                mb-2
                tracking-wide
                text-white
              "
            >
              {greenLays?.title}
            </h3>


            {/* Tagline */}

            <p
              className="
                font-serif-cinematic
                italic
                text-xl
                mb-3
                text-white/90
              "
            >
              “{greenLays?.tagline}”
            </p>


            {/* Description */}

            <p
              className="
                text-sm
                font-sans-clean
                leading-relaxed
                p-4
                rounded-xl
                border
                bg-black/30
                backdrop-blur-md
                border-white/20
                text-white/90
              "
            >
              {greenLays?.description}
            </p>

          </div>

        </motion.div>


        {/* ===================================================
            CARD 2 — PANI PURI
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.15,
          }}
          className="
            group
            relative
            min-h-[420px]
            rounded-2xl
            paper-shadow
            text-left
            border
            transition-all
            duration-500
            hover:scale-[1.02]
            overflow-hidden
          "
          style={{
            borderColor: currentTheme.borderColor,
          }}
        >

          {/* Background Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
            style={{
              backgroundImage: paniPuri?.backgroundImage
                ? `url("${paniPuri.backgroundImage}")`
                : 'none',
            }}
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/45
              to-black/10
            "
          />


          {/* Content */}

          <div
            className="
              relative
              z-10
              p-8
              h-full
              min-h-[420px]
              flex
              flex-col
              justify-end
            "
          >

            {/* Label */}

            <div className="flex items-center justify-between mb-4">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-sans-clean
                  tracking-[0.2em]
                  uppercase
                  font-bold
                  flex
                  items-center
                  gap-1.5
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                "
              >

                <Utensils className="w-3.5 h-3.5" />

                <span>HER WEAKNESS</span>

              </span>

              <Sparkles
                className="
                  w-5
                  h-5
                  text-white
                "
              />

            </div>


            {/* Title */}

            <h3
              className="
                text-3xl
                font-serif-cinematic
                font-bold
                mb-2
                tracking-wide
                text-white
              "
            >
              {paniPuri?.title}
            </h3>


            {/* Tagline */}

            <p
              className="
                font-serif-cinematic
                italic
                text-xl
                mb-3
                text-white/90
              "
            >
              “{paniPuri?.tagline}”
            </p>


            {/* Description */}

            <p
              className="
                text-sm
                font-sans-clean
                leading-relaxed
                p-4
                rounded-xl
                border
                bg-black/30
                backdrop-blur-md
                border-white/20
                text-white/90
              "
            >
              {paniPuri?.description}
            </p>

          </div>

        </motion.div>


        {/* ===================================================
            CARD 3 — NCC GIRL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.3,
          }}
          className="
            group
            relative
            min-h-[420px]
            rounded-2xl
            paper-shadow
            text-left
            border
            transition-all
            duration-500
            hover:scale-[1.02]
            overflow-hidden
          "
          style={{
            borderColor: currentTheme.borderColor,
          }}
        >

          {/* Background Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
            style={{
              backgroundImage: nccGirl?.backgroundImage
                ? `url("${nccGirl.backgroundImage}")`
                : 'none',
            }}
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/45
              to-black/10
            "
          />


          {/* Content */}

          <div
            className="
              relative
              z-10
              p-8
              h-full
              min-h-[420px]
              flex
              flex-col
              justify-end
            "
          >

            {/* Label */}

            <div className="flex items-center justify-between mb-4">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-sans-clean
                  tracking-[0.2em]
                  uppercase
                  font-bold
                  flex
                  items-center
                  gap-1.5
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                "
              >

                <Award className="w-3.5 h-3.5" />

                <span>HER DISCIPLINE</span>

              </span>


            </div>


            {/* Title */}

            <h3
              className="
                text-3xl
                font-serif-cinematic
                font-semibold
                mb-2
                text-white
              "
            >
              {nccGirl?.title}
            </h3>


            {/* Tagline */}

            <p
              className="
                font-serif-cinematic
                italic
                text-xl
                mb-3
                text-white/90
              "
            >
              “{nccGirl?.tagline}”
            </p>


            {/* Description */}

            <p
              className="
                text-sm
                font-sans-clean
                leading-relaxed
                p-4
                rounded-xl
                border
                bg-black/30
                backdrop-blur-md
                border-white/20
                text-white/90
              "
            >
              {nccGirl?.description}
            </p>

          </div>

        </motion.div>


        {/* ===================================================
            CARD 4 — HER INDEPENDENCE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.45,
          }}
          className="
            group
            relative
            min-h-[420px]
            rounded-2xl
            paper-shadow
            text-left
            border
            transition-all
            duration-500
            hover:scale-[1.02]
            overflow-hidden
          "
          style={{
            borderColor: currentTheme.borderColor,
          }}
        >

          {/* Background Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
            style={{
              backgroundImage: herBoldness?.backgroundImage
                ? `url("${herBoldness.backgroundImage}")`
                : 'none',
            }}
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/50
              to-black/10
            "
          />


          {/* Content */}

          <div
            className="
              relative
              z-10
              p-8
              h-full
              min-h-[420px]
              flex
              flex-col
              justify-end
            "
          >

            {/* Label */}

            <div className="flex items-center justify-between mb-4">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-sans-clean
                  tracking-[0.2em]
                  uppercase
                  font-bold
                  flex
                  items-center
                  gap-1.5
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                "
              >


                <span>HER INDEPENDENCE</span>

              </span>

              <Heart
                className="
                  w-5
                  h-5
                  fill-current
                  text-white
                "
              />

            </div>


            {/* Title */}

            <h3
              className="
                text-3xl
                sm:text-4xl
                font-serif-cinematic
                font-bold
                mb-2
                text-white
              "
            >
              {herBoldness?.title}
            </h3>


            {/* Tagline */}

            <p
              className="
                font-serif-cinematic
                italic
                text-lg
                sm:text-xl
                mb-3
                text-white/95
              "
            >
              “{herBoldness?.tagline}”
            </p>


            {/* Description */}

            <p
              className="
                text-sm
                font-sans-clean
                leading-relaxed
                p-4
                rounded-xl
                border
                bg-black/30
                backdrop-blur-md
                border-white/20
                text-white/95
              "
            >
              {herBoldness?.description}
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}