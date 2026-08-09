import React from 'react';
import { motion } from 'motion/react';
import {
  Flower2,
  Heart,
  BookOpen,
  Film,
  Sparkles,
  Camera,
  Mail,
  Cake,
} from 'lucide-react';

const chapters = [
  {
    id: 'chapter-childhood',
    number: '01',
    title: 'The Beginning',
    subtitle: 'where it all started',
    icon: Flower2,
  },
  {
    id: 'chapter-you-went-first',
    number: '02',
    title: 'You Went First',
    subtitle: 'before I even knew it',
    icon: Sparkles,
  },
  {
    id: 'chapter-us',
    number: '03',
    title: 'Us',
    subtitle: 'the little world we made',
    icon: Heart,
  },
  {
    id: 'chapter-story',
    number: '04',
    title: "Mone's Story",
    subtitle: 'pieces that make you, you',
    icon: Camera,
  },
  {
    id: 'chapter-books',
    number: '05',
    title: 'Things I Borrowed From You',
    subtitle: 'books, thoughts & little habits',
    icon: BookOpen,
  },
  {
    id: 'chapter-movies',
    number: '06',
    title: 'Stories That Stayed',
    subtitle: 'movies & stories we loved',
    icon: Film,
  },
  {
    id: 'chapter-wavelength',
    number: '07',
    title: 'Same Wavelength',
    subtitle: 'somehow, you just get me',
    icon: Sparkles,
  },
  {
    id: 'chapter-eras',
    number: '08',
    title: 'Our Story Through The Eras',
    subtitle: 'then • now • always',
    icon: Flower2,
  },
  {
    id: 'chapter-personality',
    number: '09',
    title: 'The Essence Of Mone',
    subtitle: 'all the things that are you',
    icon: Flower2,
  },
  {
    id: 'chapter-admire',
    number: '10',
    title: 'What I Admire',
    subtitle: 'things I may not say enough',
    icon: Heart,
  },
  {
    id: 'chapter-funny',
    number: '11',
    title: 'The Funniest Part',
    subtitle: 'because we cannot be serious',
    icon: Sparkles,
  },
  {
    id: 'chapter-growing',
    number: '12',
    title: 'Growing Together',
    subtitle: 'still becoming us',
    icon: Flower2,
  },
  {
    id: 'chapter-letter',
    number: '13',
    title: 'A Letter For You',
    subtitle: 'things I wanted you to know',
    icon: Mail,
  },
  {
    id: 'chapter-final',
    number: '14',
    title: 'The End... Or Not',
    subtitle: 'one last little surprise',
    icon: Cake,
  },
];

export default function ChapterMenu() {
  const goToChapter = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      className="
        relative
        w-full
        py-14
        sm:py-20
        overflow-hidden
        bg-[#FFFDF9]
      "
    >

      {/* =====================================================
          VERY SUBTLE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            -top-20
            left-[10%]
            w-64
            h-64
            rounded-full
            bg-[#F3D9DD]/25
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            right-[10%]
            w-64
            h-64
            rounded-full
            bg-[#DDE8D8]/25
            blur-3xl
          "
        />

      </div>


      {/* =====================================================
          SMALL MAP LABEL
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          mb-8
          sm:mb-10
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            sm:text-[10px]
            tracking-[0.35em]
            uppercase
            font-sans-clean
            font-semibold
            text-[#9B737C]
          "
        >
          <span className="w-6 h-px bg-[#D8A0A6]" />

          OUR LITTLE MAP

          <span className="w-6 h-px bg-[#D8A0A6]" />
        </div>

        <p
          className="
            mt-2
            text-xs
            sm:text-sm
            font-serif-cinematic
            italic
            text-[#8A777C]
          "
        >
          pick a memory
        </p>

      </motion.div>


      {/* =====================================================
          HORIZONTAL MAP
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          overflow-x-auto
          overflow-y-hidden
          scrollbar-hide
          pb-5
        "
      >

        {/* 
          Important:
          Width grows with the number of chapters.
          This prevents the map from becoming a huge
          vertical line on mobile.
        */}

        <div
          className="
            relative
            flex
            items-start
            gap-3
            sm:gap-5
            px-6
            sm:px-10
            md:px-16
            min-w-max
          "
        >

          {/* =================================================
              CONNECTING LINE
          ================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[31px]
              h-px
              bg-[#DDBBC1]
            "
          />

          {/* =================================================
              CHAPTER NODES
          ================================================== */}

          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;

            return (
              <motion.button
                key={chapter.id}
                type="button"
                onClick={() => goToChapter(chapter.id)}
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
                  margin: '-40px',
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  w-[135px]
                  sm:w-[170px]
                  flex-shrink-0
                  cursor-pointer
                  text-center
                "
              >

                {/* =================================================
                    NUMBER NODE
                ================================================== */}

                <div
                  className="
                    relative
                    w-16
                    h-16
                    rounded-full
                    bg-[#FFFDF9]
                    border
                    border-[#D8A0A6]
                    shadow-[0_5px_20px_rgba(123,62,72,0.10)]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:border-[#B8737D]
                    group-hover:shadow-[0_8px_25px_rgba(123,62,72,0.18)]
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#F8E7E9]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-[#EFD0D5]
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-serif-cinematic
                        text-[#7B3E48]
                      "
                    >
                      {chapter.number}
                    </span>
                  </div>

                </div>


                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    mt-4
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white
                    border
                    border-[#E8D5D8]
                    transition-all
                    duration-300
                    group-hover:bg-[#F8E7E9]
                    group-hover:border-[#D8A0A6]
                  "
                >
                  <Icon
                    className="
                      w-3.5
                      h-3.5
                      text-[#C98998]
                      group-hover:text-[#7B3E48]
                      transition-colors
                    "
                  />
                </div>


                {/* =================================================
                    CHAPTER LABEL
                ================================================== */}

                <span
                  className="
                    mt-2
                    text-[8px]
                    sm:text-[9px]
                    tracking-[0.25em]
                    uppercase
                    font-sans-clean
                    font-semibold
                    text-[#B8737D]
                  "
                >
                  Chapter {chapter.number}
                </span>


                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    font-serif-cinematic
                    font-medium
                    leading-tight
                    text-[#3A2C31]
                    group-hover:text-[#7B3E48]
                    transition-colors
                  "
                >
                  {chapter.title}
                </h3>


                {/* =================================================
                    SUBTITLE
                ================================================== */}

                <p
                  className="
                    mt-1
                    text-[10px]
                    sm:text-xs
                    font-serif-cinematic
                    italic
                    leading-relaxed
                    text-[#8A777C]
                  "
                >
                  {chapter.subtitle}
                </p>

              </motion.button>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          MOBILE SCROLL HINT
      ====================================================== */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="
          relative
          z-10
          mt-1
          text-center
          text-[9px]
          tracking-[0.25em]
          uppercase
          font-sans-clean
          text-[#B18A91]
          sm:hidden
        "
      >
        swipe to explore →
      </motion.p>

    </section>
  );
}