import React from 'react';
import { motion } from 'motion/react';
import { Heart, Feather, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import {
  FlowerBloom,
  FloralCornerFlourish,
  FloralVineDivider,
} from './FloralDecorations';

export default function BirthdayLetter() {
  const { salutation, paragraphs, closing, signature } =
    sisterData.birthdayLetter;

  return (
    <section
      className="
        relative
        min-h-[90vh]
        sm:min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-5
        sm:px-8
        py-16
        sm:py-20
        overflow-hidden
        film-grain
        border-t
        border-[#D89AA5]
      "
      style={{
        background:
          'radial-gradient(circle at top, #F8E3E5 0%, #FFF8F5 48%, #F9EEE9 100%)',
      }}
    >

      {/* =========================================================
          SOFT BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[-160px]
            left-1/2
            -translate-x-1/2
            w-[450px]
            h-[450px]
            sm:w-[650px]
            sm:h-[650px]
            rounded-full
            bg-[#D88492]/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-100px]
            w-[350px]
            h-[350px]
            rounded-full
            bg-[#D9E4D3]/30
            blur-3xl
          "
        />

        {/* Decorative petals */}

        <span className="absolute top-[15%] left-[7%] text-[#C98998]/40 text-xl">
          ❀
        </span>

        <span className="absolute top-[25%] right-[8%] text-[#B7C9AE]/50 text-lg">
          ✦
        </span>

        <span className="absolute bottom-[18%] left-[10%] text-[#C98998]/30 text-2xl">
          ❀
        </span>

        <span className="absolute bottom-[12%] right-[10%] text-[#B7C9AE]/40 text-xl">
          ✦
        </span>

      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 w-full max-w-4xl mx-auto">

        {/* =======================================================
            HEADER
        ======================================================== */}

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
          transition={{ duration: 0.8 }}
          className="
            flex
            flex-col
            items-center
            text-center
            mb-8
            sm:mb-10
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#FFF0F3]
              border
              border-[#E1B6BD]
              shadow-sm
            "
          >

            <Sparkles className="w-3 h-3 text-[#9D4C5B]" />

            <span
              className="
                text-[9px]
                sm:text-[10px]
                tracking-[0.3em]
                uppercase
                font-sans-clean
                font-semibold
                text-[#7B3E48]
              "
            >
              Chapter 12 • The Heart Of It
            </span>

            <Sparkles className="w-3 h-3 text-[#9D4C5B]" />

          </div>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              font-serif-cinematic
              italic
              text-[#80676C]
            "
          >
            Okay... now the actual message.
          </p>

        </motion.div>


        {/* =======================================================
            LETTER CARD
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#A94F5F]
            bg-[#8F4655]
            shadow-[0_25px_70px_rgba(123,62,72,0.28)]
            transition-all
            duration-500
            hover:bg-[#9D4D5D]
            hover:shadow-[0_30px_80px_rgba(123,62,72,0.34)]
          "
        >

          {/* =====================================================
              INNER GLOW
          ====================================================== */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_48%)]
            "
          />

          {/* Soft hover glow */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-700
              pointer-events-none
              bg-[radial-gradient(circle_at_50%_45%,rgba(255,210,218,0.10),transparent_55%)]
            "
          />


          {/* =====================================================
              FLORAL CORNERS
          ====================================================== */}

          <FloralCornerFlourish
            position="top-left"
            className="
              absolute
              top-0
              left-0
              w-14
              h-14
              text-[#F1C7CE]/60
              pointer-events-none
            "
          />

          <FloralCornerFlourish
            position="bottom-right"
            className="
              absolute
              bottom-0
              right-0
              w-14
              h-14
              text-[#F1C7CE]/60
              pointer-events-none
            "
          />


          {/* =====================================================
              BIRTHDAY STAMP
          ====================================================== */}

          <div
            className="
              absolute
              top-5
              right-5
              sm:top-7
              sm:right-7
              w-16
              h-16
              sm:w-20
              sm:h-20
              rounded-full
              border
              border-[#F6D9DE]/40
              bg-[#6F3543]/30
              flex
              flex-col
              items-center
              justify-center
              rotate-3
              opacity-90
              pointer-events-none
            "
          >

            <FlowerBloom
              className="
                w-4
                h-4
                sm:w-5
                sm:h-5
                text-[#F6D9DE]
                mb-1
              "
            />

            <span
              className="
                text-[7px]
                sm:text-[8px]
                font-sans-clean
                uppercase
                tracking-widest
                text-[#FFF1F3]
                text-center
                leading-tight
                font-semibold
              "
            >
              MONE
              <br />
              {sisterData.birthDateText}
            </span>

          </div>


          {/* =====================================================
              LETTER CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-10
              px-6
              py-8
              sm:px-12
              sm:py-12
              md:px-16
              md:py-14
            "
          >

            {/* Feather */}

            <div
              className="
                flex
                items-center
                gap-3
                mb-7
                text-[#F6D9DE]/80
              "
            >

              <Feather className="w-5 h-5" />

              <span
                className="
                  h-px
                  flex-1
                  bg-[#F5D6DB]/25
                "
              />

            </div>


            {/* =================================================
                SALUTATION
            ================================================== */}

            <motion.h3
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                font-serif-cinematic
                font-semibold
                text-2xl
                sm:text-3xl
                text-[#FFF8F5]
                mb-7
                flex
                items-center
                gap-2
              "
            >

              <span>{salutation}</span>

              <Heart
                className="
                  w-4
                  h-4
                  sm:w-5
                  sm:h-5
                  text-[#F3C4CC]
                  fill-[#F3C4CC]
                  animate-pulse
                "
              />

            </motion.h3>


            {/* =================================================
                PARAGRAPHS
            ================================================== */}

            <div
              className="
                space-y-5
                sm:space-y-6
                text-[15px]
                sm:text-lg
                font-serif-cinematic
                text-[#FFF3F1]
                leading-[1.8]
              "
            >

              {paragraphs.map((p, idx) => (

                <motion.p
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 12,
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
                    duration: 0.75,
                    delay: idx * 0.12,
                  }}
                  className="
                    transition-colors
                    duration-300
                    group-hover:text-[#FFF8F6]
                  "
                >
                  {p}
                </motion.p>

              ))}

            </div>


            {/* =================================================
                DIVIDER
            ================================================== */}

            <div className="my-8 sm:my-10 flex justify-center">

              <FloralVineDivider
                className="
                  w-40
                  sm:w-52
                  h-6
                  text-[#F1C7CE]/70
                "
              />

            </div>


            {/* =================================================
                CLOSING
            ================================================== */}

            <div
              className="
                pt-6
                border-t
                border-[#F5D6DB]/25
                flex
                items-end
                justify-between
                gap-6
              "
            >

              <div>

                <p
                  className="
                    font-serif-cinematic
                    italic
                    text-sm
                    sm:text-base
                    text-[#F6DDE0]
                  "
                >
                  {closing}
                </p>

                <p
                  className="
                    font-handwriting
                    text-3xl
                    sm:text-4xl
                    text-[#FFF7F5]
                    mt-1
                  "
                >
                  {signature}
                </p>

              </div>


              <Heart
                className="
                  flex-shrink-0
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  text-[#F3C4CC]
                  fill-[#F3C4CC]/30
                "
              />

            </div>

          </div>


          {/* =====================================================
              BOTTOM ACCENT
          ====================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-32
              h-1
              rounded-full
              bg-[#F2C4CB]/60
              group-hover:w-48
              transition-all
              duration-500
            "
          />

        </motion.div>


        {/* =======================================================
            FINAL LITTLE MESSAGE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <span className="w-10 h-px bg-[#C98998]/40" />

          <Heart
            className="
              w-4
              h-4
              text-[#A95665]
              fill-[#A95665]/20
            "
          />

          <span className="w-10 h-px bg-[#C98998]/40" />

        </motion.div>

      </div>

    </section>
  );
}