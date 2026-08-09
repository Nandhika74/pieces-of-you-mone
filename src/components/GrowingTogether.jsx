import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralVineDivider } from './FloralDecorations';
import EditablePhotoFrame from './EditablePhotoFrame';

export default function GrowingTogether() {
  const { opening, transition, headline, paragraph1, paragraph2 } =
    sisterData.growingTogetherText;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-[#2C3322] film-grain border-t border-[#E8D9D3] overflow-hidden" style={{ background: 'radial-gradient(circle at top, #F7F1EA 0%, #FFFDF9 42%, #FAF6EF 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-16 left-10 h-36 w-36 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212,175,55,0.14)' }} />
        <div className="absolute bottom-24 right-10 h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(243,177,185,0.12)' }} />
      </div>

      <div className="relative max-w-3xl w-full text-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-xs font-sans-clean tracking-[0.3em] font-semibold text-[#7B3E48] uppercase mb-8 px-3.5 py-1 rounded-full bg-[#FFF0F3] border border-[#E6D8D0] inline-flex"
        >
          <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
          <span>CHAPTER 11 • PARALLEL ROADS</span>
          <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
        </motion.div>

        {/* Animated Intersecting Sister Floral Lines SVG */}
        <div className="relative w-full h-24 my-4 flex items-center justify-center">
          <svg className="w-full max-w-md h-full overflow-visible" viewBox="0 0 400 100">
            {/* Sister 1 Path */}
            <motion.path
              d="M 10,20 Q 100,80 200,50 T 390,30"
              fill="none"
              stroke="#C98998"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            {/* Sister 2 Path */}
            <motion.path
              d="M 10,80 Q 100,20 200,50 T 390,70"
              fill="none"
              stroke="#7B3E48"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
            />
            {/* Intersection Glowing Flower Point */}
            <circle cx="200" cy="50" r="7" fill="#7B3E48" stroke="#C98998" strokeWidth="2" />
          </svg>
        </div>

        {/* Opening Phrases */}
        <div className="space-y-2 text-lg sm:text-2xl font-serif-cinematic text-[#C7D0DD]">
          {opening.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Transition */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl font-handwriting text-[#C98998]"
        >
          {transition} 🌸
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-4xl sm:text-6xl font-serif-cinematic font-light text-[#2C3322] tracking-tight"
        >
          {headline}
        </motion.h2>

        <FloralVineDivider className="w-48 h-6 mx-auto text-[#7B3E48]" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mx-auto max-w-lg rounded-[2rem] border border-white/10 bg-[#FFFFFF] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
        >
        </motion.div>

        {/* Paragraphs */}
        <div className="space-y-6 pt-2 text-lg sm:text-2xl font-serif-cinematic italic text-[#2C3322] max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            “{paragraph1}”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-[#7D6A6E]"
          >
            “{paragraph2}”
          </motion.p>
        </div>
      </div>
    </section>
  );
}
