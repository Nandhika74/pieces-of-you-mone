import React from 'react';
import { motion } from 'motion/react';
import { Radio, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';

export default function Wavelength() {
  const phrases = sisterData.wavelengthPhrases || [];

  const positions = [
    { top: '7%', left: '5%' },
    { top: '7%', right: '5%' },

    { top: '31%', left: '2%' },
    { top: '31%', right: '2%' },

    { bottom: '23%', left: '5%' },
    { bottom: '23%', right: '5%' },

    {
      bottom: '6%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-20 sm:py-24">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            top-[8%]
            left-[-10%]
            w-80
            h-80
            rounded-full
            bg-[#E8B8C0]/20
            blur-3xl
            animate-pulse
          "
          style={{ animationDuration: '8s' }}
        />

        <div
          className="
            absolute
            bottom-[8%]
            right-[-10%]
            w-80
            h-80
            rounded-full
            bg-[#C9D8C4]/25
            blur-3xl
            animate-pulse
          "
          style={{ animationDuration: '10s' }}
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-[#F3D9DD]/15
            blur-3xl
          "
        />

      </div>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">


        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-white/70
            border
            border-[#D8A0A6]/40
            text-xs
            font-sans-clean
            tracking-[0.3em]
            font-semibold
            text-[#7B3E48]
            uppercase
            shadow-sm
            backdrop-blur-md
          "
        >
          <Radio className="w-3.5 h-3.5" />

          <span>CHAPTER 06 • SHARED VOCABULARY</span>

          <Sparkles className="w-3 h-3 opacity-60" />
        </motion.div>


        {/* =================================================
            TITLE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mt-7"
        >

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-serif-cinematic
              font-light
              text-[#2C3322]
              leading-[1.05]
              max-w-4xl
              mx-auto
            "
          >
            Somehow, your <span className="italic text-[#B8737D]">Pichakaariii</span>
            <br className="hidden sm:block" />
            became my daily vocabulary.
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              font-serif-cinematic
              italic
              text-[#7A716F]
              max-w-xl
              mx-auto
            "
          >
            The little things only we seem to understand.
          </p>

        </motion.div>


        {/* =================================================
            WAVELENGTH SPACE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            relative
            w-full
            max-w-5xl
            h-[545px]
            sm:h-[550px]
            mt-10
            rounded-[2rem]
            border
            border-[#E8DDE0]
            bg-white/40
            backdrop-blur-sm
            shadow-[0_20px_60px_rgba(91,65,71,0.05)]
            overflow-hidden
          "
        >

          {/* LARGE ORBIT */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[340px]
              h-[340px]
              sm:w-[430px]
              sm:h-[430px]
              rounded-full
              border
              border-[#E8DDE0]/80
            "
          />

          {/* DASHED ORBIT */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[265px]
              h-[265px]
              sm:w-[350px]
              sm:h-[350px]
              rounded-full
              border
              border-dashed
              border-[#D8A0A6]/40
            "
          />


          {/* INNER GLOW */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[190px]
              h-[190px]
              sm:w-[235px]
              sm:h-[235px]
              rounded-full
              bg-[#FFFDFB]/90
              border
              border-[#F0E6E8]
              shadow-[0_10px_40px_rgba(91,65,71,0.07)]
            "
          />


          {/* =================================================
              FLOATING THOUGHTS
          ================================================== */}

          {phrases.slice(0, 7).map((phrase, idx) => {
            const pos = positions[idx];

            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -6, 0],
                  rotate: idx % 2 === 0 ? [-1, 1, -1] : [1, -1, 1],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: idx * 0.1,
                  },
                  scale: {
                    duration: 0.6,
                    delay: idx * 0.1,
                  },
                  y: {
                    duration: 4 + idx * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: 5 + idx * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                style={pos}
                className="
                  absolute
                  z-20
                  px-4
                  sm:px-5
                  py-3
                  sm:py-3.5
                  rounded-2xl
                  bg-[#FFFDFB]/95
                  border
                  border-[#E8DDE0]
                  text-[12px]
                  sm:text-sm
                  font-serif-cinematic
                  italic
                  text-[#51484B]
                  shadow-[0_10px_30px_rgba(91,65,71,0.08)]
                  w-[145px]
                  sm:w-[195px]
                  text-center
                  leading-relaxed
                  pointer-events-none
                "
              >
                “{phrase}”

                {/* tiny accent dot */}
                <span
                  className={`
                    absolute
                    top-1/2
                    -translate-y-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    ${
                      idx % 2 === 0
                        ? 'bg-[#B8737D]'
                        : 'bg-[#7A8C6A]'
                    }
                  `}
                  style={{
                    [idx % 2 === 0 ? 'right' : 'left']: '-10px',
                  }}
                />
              </motion.div>
            );
          })}


          {/* =================================================
              CENTER CONNECTION
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50
              flex
              flex-col
              items-center
            "
          >

            <div className="flex items-center gap-3 sm:gap-7">

              {/* MONE */}

              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    '0 0 20px rgba(184,115,125,0.20)',
                    '0 0 40px rgba(184,115,125,0.45)',
                    '0 0 20px rgba(184,115,125,0.20)',
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-full
                  bg-[#B8737D]
                  text-white
                  text-sm
                  sm:text-base
                  font-sans-clean
                  font-semibold
                  border
                  border-[#F0D5DA]
                "
              >
                Mone
              </motion.div>


              {/* CONNECTION */}

              <div
                className="
                  relative
                  w-[50px]
                  sm:w-[85px]
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#B8737D]
                  via-[#D8A0A6]
                  to-[#7A8C6A]
                "
              >

                <motion.span
                  animate={{
                    x: [0, 70, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-[#F3B1B9]
                    shadow-[0_0_10px_rgba(243,177,185,0.8)]
                  "
                />

              </div>


              {/* THANU */}

              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    '0 0 20px rgba(122,140,106,0.20)',
                    '0 0 40px rgba(122,140,106,0.45)',
                    '0 0 20px rgba(122,140,106,0.20)',
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-full
                  bg-[#7A8C6A]
                  text-white
                  text-sm
                  sm:text-base
                  font-sans-clean
                  font-semibold
                  border
                  border-[#E8E4D9]
                "
              >
                Thanu
              </motion.div>

            </div>


            {/* CENTER LABEL */}

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="
                mt-4
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#8C6870]
                font-sans-clean
              "
            >
              SAME FREQUENCY
            </motion.div>

          </div>


          {/* SIDE LABELS */}

          <div
            className="
              absolute
              top-1/2
              left-5
              sm:left-10
              -translate-y-1/2
              text-[8px]
              sm:text-[9px]
              tracking-[0.25em]
              uppercase
              text-[#B8737D]/70
              font-sans-clean
            "
          >
            MONE
          </div>

          <div
            className="
              absolute
              top-1/2
              right-5
              sm:right-10
              -translate-y-1/2
              text-[8px]
              sm:text-[9px]
              tracking-[0.25em]
              uppercase
              text-[#7A8C6A]/70
              font-sans-clean
            "
          >
            THANU
          </div>


          {/* CORNER DETAILS */}

          <div className="absolute top-5 left-5 w-6 h-6 border-l border-t border-[#D8A0A6]/40 rounded-tl-lg" />
          <div className="absolute top-5 right-5 w-6 h-6 border-r border-t border-[#D8A0A6]/40 rounded-tr-lg" />
          <div className="absolute bottom-5 left-5 w-6 h-6 border-l border-b border-[#7A8C6A]/40 rounded-bl-lg" />
          <div className="absolute bottom-5 right-5 w-6 h-6 border-r border-b border-[#7A8C6A]/40 rounded-br-lg" />

        </motion.div>


        {/* =================================================
            FINAL LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            mt-9
            max-w-2xl
            px-4
          "
        >

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-10 sm:w-16 h-px bg-[#D8A0A6]/50" />

            <Sparkles className="w-4 h-4 text-[#B8737D]/60" />

            <span className="w-10 sm:w-16 h-px bg-[#D8A0A6]/50" />

          </div>

          <p
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-serif-cinematic
              italic
              text-[#5F5558]
              leading-relaxed
            "
          >
            
          </p>

        </motion.div>


        <div className="h-6 sm:h-10" />

      </div>

    </section>
  );
}