
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, X, Sparkles, Camera } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function Bookshelf() {
  const [activeBook, setActiveBook] = useState(null);
  const { currentTheme, getImage } = useThemeAndImage();

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
        py-20
        sm:py-24
        film-grain
        border-t
      "
      style={{
        borderColor: currentTheme.borderColor,
      }}
    >
      {/* ============================================================
          HEADER
      ============================================================ */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          flex
          flex-col
          items-center
          gap-2
          mb-10
          sm:mb-16
          text-center
        "
      >
        <span
          className="
            text-xs
            font-sans-clean
            tracking-[0.3em]
            font-semibold
            uppercase
          "
          style={{
            color: currentTheme.accentDark,
          }}
        >
          CHAPTER 04 • BORROWED PAGES
        </span>

        <h2
          className="
            text-4xl
            sm:text-6xl
            font-serif-cinematic
            font-light
          "
          style={{
            color: currentTheme.textDark,
          }}
        >
          Things I borrowed from you.
        </h2>

        <p
          className="
            text-sm
            font-sans-clean
            max-w-md
            mt-2
            px-4
          "
          style={{
            color: currentTheme.textMuted,
          }}
        >
          Books she read first, whose worlds quietly spilled into my shelf.
        </p>
      </motion.div>

      {/* ============================================================
          PHYSICAL BOOKSHELF
      ============================================================ */}

      <div
        className="
          relative
          w-full
          max-w-4xl
          mx-auto
          p-4
          sm:p-10
          rounded-2xl
          shadow-2xl
          border
        "
        style={{
          backgroundColor: currentTheme.accentDark,
          borderColor: currentTheme.borderColor,
        }}
      >
        {/* Top Wooden Shelf Trim */}
        <div
          className="
            w-full
            h-3
            bg-black/40
            rounded-t-lg
            mb-6
            sm:mb-8
            shadow-inner
          "
        />

        {/* ============================================================
            BOOK SPINES GRID

            Mobile:
            - Books wrap into multiple rows
            - No horizontal scrolling
            - Every book remains visible

            Desktop:
            - Books remain in a single row when space allows
        ============================================================ */}

        <div
          className="
            flex
            flex-wrap
            items-end
            justify-center
            gap-x-2
            gap-y-6
            sm:gap-x-6
            sm:gap-y-8
            min-h-[260px]
            pb-6
            px-1
            overflow-visible
          "
        >
          {sisterData.books.map((book, idx) => {
            const bookKey = `bookCover_${book.id || idx}`;
            const activeCover = getImage(
              bookKey,
              book.coverUrl
            );

            return (
              <motion.div
                key={book.id || idx}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                whileHover={{
                  y: -16,
                  scale: 1.05,
                }}
                onClick={() =>
                  setActiveBook({
                    ...book,
                    activeCover,
                  })
                }
                className="
                  group
                  relative
                  cursor-pointer
                  flex
                  flex-col
                  items-center
                  flex-shrink-0
                "
              >
                {/* ====================================================
                    BOOK SPINE
                ==================================================== */}

                <div
                  className="
                    w-10
                    sm:w-16
                    h-44
                    sm:h-64
                    rounded-sm
                    flex
                    flex-col
                    justify-between
                    p-2
                    sm:p-3
                    text-center
                    shadow-lg
                    transition-all
                    duration-300
                    relative
                    border-l-2
                    border-r-2
                    border-white/10
                  "
                  style={{
                    backgroundColor:
                      book.color ||
                      currentTheme.accentMain,

                    boxShadow:
                      'inset -3px 0 10px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Decorative Spine Line */}
                  <div
                    className="
                      w-full
                      h-1
                      bg-[#7B3E48]/60
                      rounded-full
                      my-1
                    "
                  />

                  {/* Vertical Book Title */}
                  <span
                    className="
                      text-[10px]
                      sm:text-sm
                      font-serif-cinematic
                      text-[#FDFCF8]
                      font-medium
                      tracking-wide
                      uppercase
                      line-clamp-2
                    "
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {book.title}
                  </span>

                  {/* Decorative Spine Line */}
                  <div
                    className="
                      w-full
                      h-1
                      bg-[#7B3E48]/60
                      rounded-full
                      my-1
                    "
                  />
                </div>

                {/* ====================================================
                    AUTHOR
                ==================================================== */}

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    font-sans-clean
                    text-white/80
                    tracking-widest
                    mt-2
                    sm:mt-3
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    text-center
                    max-w-[60px]
                  "
                >
                  {book.author}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM SHELF BASE
        ============================================================ */}

        <div
          className="
            w-full
            h-5
            bg-black/40
            rounded-b-lg
            border-t
            border-white/10
            shadow-md
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              text-[8px]
              sm:text-[10px]
              font-sans-clean
              tracking-[0.15em]
              sm:tracking-[0.25em]
              font-semibold
              text-white/80
              uppercase
              text-center
              px-2
            "
          >
            MONE'S LIBRARY • CLICK ANY BOOK
          </span>
        </div>
      </div>

      {/* ============================================================
          BOOK DRAWER MODAL
      ============================================================ */}

      <AnimatePresence>
        {activeBook && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setActiveBook(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/75
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              overflow-y-auto
            "
          >
            <motion.div
              initial={{
                scale: 0.9,
                y: 20,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                p-5
                sm:p-8
                rounded-2xl
                max-w-xl
                w-full
                paper-shadow
                relative
                border
                shadow-2xl
                my-4
              "
              style={{
                backgroundColor: currentTheme.cardBg,
                color: currentTheme.textDark,
                borderColor: currentTheme.borderColor,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveBook(null)}
                className="
                  absolute
                  top-3
                  right-3
                  sm:top-4
                  sm:right-4
                  p-2
                  rounded-full
                  hover:bg-black/10
                  transition-colors
                  cursor-pointer
                  z-10
                "
                type="button"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ======================================================
                  MODAL CONTENT
              ====================================================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-6
                  items-center
                  sm:items-start
                "
              >
                {/* Book Cover */}
                <div
                  className="
                    w-32
                    sm:w-36
                    h-48
                    sm:h-52
                    flex-shrink-0
                  "
                >
                  <EditablePhotoFrame
                    imageKey={`bookCover_${activeBook.id}`}
                    defaultUrl={activeBook.coverUrl}
                    alt={activeBook.title}
                    aspectRatio="aspect-[2/3]"
                    showLabel="Upload Cover"
                  />
                </div>

                {/* Book Information */}
                <div
                  className="
                    flex
                    flex-col
                    text-center
                    sm:text-left
                    space-y-3
                    w-full
                  "
                >
                  <span
                    className="
                      text-xs
                      font-sans-clean
                      tracking-[0.25em]
                      font-semibold
                      uppercase
                    "
                    style={{
                      color: currentTheme.accentDark,
                    }}
                  >
                    BORROWED BOOK
                  </span>

                  <h3
                    className="
                      text-2xl
                      font-serif-cinematic
                      font-semibold
                    "
                  >
                    {activeBook.title}
                  </h3>

                  <p
                    className="
                      text-xs
                      font-sans-clean
                      font-medium
                    "
                    style={{
                      color: currentTheme.textMuted,
                    }}
                  >
                    by {activeBook.author}
                  </p>

                  {/* YOU → ME Transfer Visual */}
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      px-3.5
                      py-1.5
                      rounded-full
                      border
                      text-xs
                      font-sans-clean
                      font-medium
                      my-2
                      w-fit
                      mx-auto
                      sm:mx-0
                    "
                    style={{
                      backgroundColor:
                        currentTheme.tagBg,
                      borderColor:
                        currentTheme.borderColor,
                    }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        color:
                          currentTheme.accentDark,
                      }}
                    >
                      MONE (You)
                    </span>

                    <ArrowRight className="w-3.5 h-3.5 text-[#7B3E48]" />

                    <span
                      className="font-bold"
                      style={{
                        color:
                          currentTheme.textDark,
                      }}
                    >
                      ME
                    </span>
                  </div>

                  {/* Caption */}
                  <p
                    className="
                      font-serif-cinematic
                      italic
                      text-lg
                      p-3.5
                      rounded-xl
                      border
                    "
                    style={{
                      backgroundColor:
                        currentTheme.tagBg,
                      borderColor:
                        currentTheme.borderColor,
                    }}
                  >
                    “{activeBook.caption}”
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}