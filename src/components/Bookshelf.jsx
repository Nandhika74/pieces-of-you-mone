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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 film-grain border-t" style={{ borderColor: currentTheme.borderColor }}>
      <div className="max-w-5xl w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-16"
        >
          <span className="text-xs font-sans-clean tracking-[0.3em] font-semibold uppercase" style={{ color: currentTheme.accentDark }}>
            CHAPTER 04 • BORROWED PAGES
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif-cinematic font-light" style={{ color: currentTheme.textDark }}>
            Things I borrowed from you.
          </h2>
          <p className="text-sm font-sans-clean max-w-md mt-2" style={{ color: currentTheme.textMuted }}>
            Books she read first, whose worlds quietly spilled into my shelf.
          </p>
        </motion.div>

        {/* Physical Bookshelf Visual */}
        <div className="relative max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl shadow-2xl border" style={{ backgroundColor: currentTheme.accentDark, borderColor: currentTheme.borderColor }}>
          {/* Top Wooden Shelf Trim */}
          <div className="w-full h-3 bg-black/40 rounded-t-lg mb-8 shadow-inner"></div>

          {/* Book Spines Grid */}
          <div className="flex items-end justify-center gap-3 sm:gap-6 min-h-[260px] pb-4 px-2 overflow-x-auto">
            {sisterData.books.map((book, idx) => {
              const bookKey = `bookCover_${book.id || idx}`;
              const activeCover = getImage(bookKey, book.coverUrl);

              return (
                <motion.div
                  key={book.id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  onClick={() => setActiveBook({ ...book, activeCover })}
                  className="group relative cursor-pointer flex flex-col items-center flex-shrink-0"
                >
                  {/* Book Spine */}
                  <div
                    className="w-12 sm:w-16 h-52 sm:h-64 rounded-sm flex flex-col justify-between p-3 text-center shadow-lg transition-all duration-300 relative border-l-2 border-r-2 border-white/10"
                    style={{
                      backgroundColor: book.color || currentTheme.accentMain,
                      boxShadow: 'inset -3px 0 10px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Decorative Spine Gold Line */}
                    <div className="w-full h-1 bg-[#7B3E48]/60 rounded-full my-1"></div>

                    {/* Vertical Book Title */}
                    <span
                      className="text-xs sm:text-sm font-serif-cinematic text-[#FDFCF8] font-medium tracking-wide uppercase line-clamp-2"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {book.title}
                    </span>

                    <div className="w-full h-1 bg-[#7B3E48]/60 rounded-full my-1"></div>
                  </div>

                  {/* Author Name Tag on Hover */}
                  <span className="text-[10px] font-sans-clean text-white/80 tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {book.author}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Shelf Base */}
          <div className="w-full h-5 bg-black/40 rounded-b-lg border-t border-white/10 shadow-md flex items-center justify-center">
            <span className="text-[10px] font-sans-clean tracking-[0.25em] font-semibold text-white/80 uppercase">
              MONE'S LIBRARY • CLICK ANY BOOK
            </span>
          </div>
        </div>
      </div>

      {/* Book Drawer Modal */}
      <AnimatePresence>
        {activeBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBook(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="p-6 sm:p-8 rounded-2xl max-w-xl w-full paper-shadow relative border shadow-2xl"
              style={{
                backgroundColor: currentTheme.cardBg,
                color: currentTheme.textDark,
                borderColor: currentTheme.borderColor,
              }}
            >
              <button
                onClick={() => setActiveBook(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-36 h-52 flex-shrink-0">
                  <EditablePhotoFrame
                    imageKey={`bookCover_${activeBook.id}`}
                    defaultUrl={activeBook.coverUrl}
                    alt={activeBook.title}
                    aspectRatio="aspect-[2/3]"
                    showLabel="Upload Cover"
                  />
                </div>

                <div className="flex flex-col text-left space-y-3">
                  <span className="text-xs font-sans-clean tracking-[0.25em] font-semibold uppercase" style={{ color: currentTheme.accentDark }}>
                    BORROWED BOOK
                  </span>
                  <h3 className="text-2xl font-serif-cinematic font-semibold">
                    {activeBook.title}
                  </h3>
                  <p className="text-xs font-sans-clean font-medium" style={{ color: currentTheme.textMuted }}>
                    by {activeBook.author}
                  </p>

                  {/* YOU -> ME Transfer Visual */}
                  <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border text-xs font-sans-clean font-medium my-2 w-fit" style={{ backgroundColor: currentTheme.tagBg, borderColor: currentTheme.borderColor }}>
                    <span className="font-bold" style={{ color: currentTheme.accentDark }}>MONE (You)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7B3E48]" />
                    <span className="font-bold" style={{ color: currentTheme.textDark }}>ME</span>
                  </div>

                  <p className="font-serif-cinematic italic text-lg p-3.5 rounded-xl border" style={{ backgroundColor: currentTheme.tagBg, borderColor: currentTheme.borderColor }}>
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
