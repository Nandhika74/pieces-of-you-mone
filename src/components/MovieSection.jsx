
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Heart, X, Sparkles, Tv } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import EditablePhotoFrame from './EditablePhotoFrame';
import { useThemeAndImage } from '../context/ThemeAndImageContext';

export default function MovieSection() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const { currentTheme, getImage } = useThemeAndImage();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 film-grain border-t"
      style={{ borderColor: currentTheme.borderColor }}
    >

      {/* =========================
          HEADER
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2 mb-16 text-center"
      >
        <span
          className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase"
          style={{ color: currentTheme.accentDark }}
        >
          CHAPTER 05 • CINEMATIC ARCHIVE
        </span>

        <h2
          className="text-4xl sm:text-6xl font-serif-cinematic font-light"
          style={{ color: currentTheme.textDark }}
        >
          Stories that stayed with you.
        </h2>

        <p
          className="text-sm font-sans-clean max-w-md mt-2"
          style={{ color: currentTheme.textMuted }}
        >
          The movies and stories she discovered, wept over, and held close.
        </p>
      </motion.div>


      {/* =========================================================
          SPECIAL MOVIE — PRIDE & PREJUDICE
      ========================================================== */}
      <div className="mb-20 w-full max-w-5xl mx-auto">

        {sisterData.movies
          .filter((m) => m.isSpecial)
          .map((movie, idx) => {

            const movieKey = `moviePoster_special_${movie.id || idx}`;

            return (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{
                  backgroundColor: currentTheme.bgSecondary,
                  borderColor: currentTheme.borderColor,
                }}
                className="
                  group
                  relative
                  cursor-pointer
                  p-6
                  sm:p-8
                  md:p-10
                  rounded-3xl
                  shadow-xl
                  overflow-hidden
                  border
                  flex
                  flex-col
                  md:flex-row
                  items-center
                  gap-8
                  md:gap-12
                  text-left
                  transition-all
                  duration-500
                  hover:scale-[1.01]
                  hover:shadow-2xl
                "
              >

                {/* Soft Decorative Background */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#E8B8C0]/15 blur-3xl pointer-events-none" />

                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#C9D8C4]/15 blur-3xl pointer-events-none" />


                {/* Special Tag */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    sm:top-7
                    sm:right-7
                    flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-full
                    bg-[#7B3E48]/10
                    border
                    border-[#7B3E48]/30
                    text-xs
                    font-sans-clean
                    tracking-widest
                    uppercase
                    text-[#7B3E48]
                  "
                >
                  <Sparkles className="w-3.5 h-3.5" />

                  <span>
                    {movie.specialTag || 'A Favourite'}
                  </span>
                </div>


                {/* =========================
                    POSTER
                ========================== */}
                <div
                  className="
                    relative
                    w-48
                    sm:w-56
                    md:w-64
                    flex-shrink-0
                    mt-8
                    md:mt-0
                  "
                  onClick={() =>
                    setSelectedMedia({
                      ...movie,
                      activeUrl: getImage(movieKey, movie.posterUrl),
                    })
                  }
                >
                  <EditablePhotoFrame
                    imageKey={movieKey}
                    defaultUrl={movie.posterUrl}
                    alt={movie.title}
                    aspectRatio="aspect-[2/3]"
                    showLabel="Upload Poster"
                  />
                </div>


                {/* =========================
                    INFO
                ========================== */}
                <div
                  className="
                    flex
                    flex-col
                    space-y-4
                    flex-1
                    min-w-0
                  "
                  onClick={() =>
                    setSelectedMedia({
                      ...movie,
                      activeUrl: getImage(movieKey, movie.posterUrl),
                    })
                  }
                >

                  {/* Category */}
                  <span className="
                    text-xs
                    sm:text-sm
                    font-sans-clean
                    tracking-[0.2em]
                    font-bold
                    text-[#7B3E48]
                    uppercase
                  ">
                    THE HOLY GRAIL • {movie.year}
                  </span>


                  {/* =================================================
                      BIG PRIDE & PREJUDICE TITLE
                  ================================================== */}
                  <h3
                    className="
                      text-4xl
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                      font-serif-cinematic
                      font-semibold
                      leading-[0.95]
                      tracking-tight
                      text-[#3A2C31]
                      drop-shadow-sm
                    "
                  >
                    {movie.title}
                  </h3>


                  {/* Special Quote */}
                  {movie.specialCaption && (
                    <p
                      className="
                        font-serif-cinematic
                        italic
                        text-xl
                        sm:text-2xl
                        text-[#8C4F5A]
                        leading-relaxed
                        max-w-xl
                      "
                    >
                      “{movie.specialCaption}”
                    </p>
                  )}


                  {/* Description */}
                  <p
                    className="
                      text-base
                      sm:text-lg
                      font-sans-clean
                      text-[#51484B]
                      leading-relaxed
                      pt-1
                      max-w-2xl
                    "
                  >
                    {movie.caption}
                  </p>


                  {/* Memory Hint */}
                  <div
                    className="
                      pt-3
                      flex
                      items-center
                      gap-2
                      text-xs
                      sm:text-sm
                      font-sans-clean
                      text-[#7B3E48]
                      uppercase
                      tracking-wider
                      font-semibold
                    "
                  >
                    <Heart className="w-4 h-4 fill-current text-[#7B3E48]" />

                    <span>
                      Click to view full memory details
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}

      </div>


      {/* =========================================================
          REGULAR MOVIES & SERIES
      ========================================================== */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          gap-4
          sm:gap-6
          max-w-6xl
          mx-auto
          w-full
        "
      >

        {sisterData.movies
          .filter((m) => !m.isSpecial)
          .concat(sisterData.series)
          .map((item, idx) => {

            const itemKey = `moviePoster_${item.id || idx}`;

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                }}
                style={{
                  backgroundColor: currentTheme.cardBg,
                  borderColor: currentTheme.borderColor,
                }}
                className="
                  group
                  relative
                  cursor-pointer
                  p-2.5
                  rounded-xl
                  border
                  shadow-xs
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  flex
                  flex-col
                "
              >

                {/* Poster */}
                <div
                  onClick={() =>
                    setSelectedMedia({
                      ...item,
                      activeUrl: getImage(
                        itemKey,
                        item.posterUrl
                      ),
                    })
                  }
                >
                  <EditablePhotoFrame
                    imageKey={itemKey}
                    defaultUrl={item.posterUrl}
                    alt={item.title}
                    aspectRatio="aspect-[3/4]"
                    showLabel="Upload Poster"
                  />
                </div>


                {/* Title & Year */}
                <div
                  className="text-left px-1 pt-2 pb-1"
                  onClick={() =>
                    setSelectedMedia({
                      ...item,
                      activeUrl: getImage(
                        itemKey,
                        item.posterUrl
                      ),
                    })
                  }
                >

                  <h4
                    className="
                      text-[13px]
                      font-serif-cinematic
                      font-semibold
                      line-clamp-1
                    "
                    style={{
                      color: currentTheme.textDark,
                    }}
                  >
                    {item.title}
                  </h4>

                  <span
                    className="
                      text-[9px]
                      font-sans-clean
                      font-medium
                    "
                    style={{
                      color: currentTheme.accentDark,
                    }}
                  >
                    {item.year}
                  </span>

                </div>

              </motion.div>
            );
          })}

      </div>


      {/* =========================================================
          CINEMATIC MEDIA MODAL
      ========================================================== */}
      <AnimatePresence>

        {selectedMedia && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
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
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                p-5
                sm:p-6
                rounded-2xl
                max-w-xl
                w-full
                paper-shadow
                relative
                border
                shadow-2xl
                text-left
              "
              style={{
                backgroundColor:
                  currentTheme.cardBg,

                color:
                  currentTheme.textDark,

                borderColor:
                  currentTheme.borderColor,
              }}
            >

              {/* Close Button */}
              <button
                onClick={() =>
                  setSelectedMedia(null)
                }
                className="
                  absolute
                  top-4
                  right-4
                  p-2
                  rounded-full
                  hover:bg-black/10
                  transition-colors
                  cursor-pointer
                "
              >
                <X className="w-5 h-5" />
              </button>


              {/* Modal Content */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-6
                  items-center
                "
              >

                {/* Modal Poster */}
                <div
                  className="
                    w-32
                    h-46
                    flex-shrink-0
                  "
                >
                  <img
                    src={
                      selectedMedia.activeUrl ||
                      selectedMedia.posterUrl
                    }
                    alt={selectedMedia.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-md
                      shadow-lg
                      border
                    "
                    style={{
                      borderColor:
                        currentTheme.borderColor,
                    }}
                  />
                </div>


                {/* Modal Information */}
                <div
                  className="
                    flex
                    flex-col
                    text-left
                    space-y-3
                  "
                >

                  {/* Category */}
                  <span
                    className="
                      text-xs
                      font-sans-clean
                      tracking-[0.25em]
                      font-semibold
                      uppercase
                      flex
                      items-center
                      gap-1.5
                    "
                    style={{
                      color:
                        currentTheme.accentDark,
                    }}
                  >

                    {selectedMedia.category ===
                    'Series' ? (
                      <Tv className="w-3.5 h-3.5" />
                    ) : (
                      <Film className="w-3.5 h-3.5" />
                    )}

                    <span>
                      {selectedMedia.category ||
                        'Movie'}{' '}
                      • {selectedMedia.year}
                    </span>

                  </span>


                  {/* Modal Title */}
                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      font-serif-cinematic
                      font-semibold
                    "
                  >
                    {selectedMedia.title}
                  </h3>


                  {/* Quote */}
                  {selectedMedia.quote && (
                    <p
                      className="
                        font-serif-cinematic
                        italic
                        text-lg
                      "
                      style={{
                        color:
                          currentTheme.accentDark,
                      }}
                    >
                      “{selectedMedia.quote}”
                    </p>
                  )}


                  {/* Caption */}
                  <p
                    className="
                      text-sm
                      font-sans-clean
                      p-3
                      rounded-xl
                      border
                      leading-relaxed
                    "
                    style={{
                      backgroundColor:
                        currentTheme.tagBg,

                      borderColor:
                        currentTheme.borderColor,
                    }}
                  >
                    {selectedMedia.caption}
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

