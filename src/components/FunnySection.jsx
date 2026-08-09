import React from 'react';
import { motion } from 'motion/react';
import { Check, XCircle, AlertCircle } from 'lucide-react';
import { sisterData } from '../data/sisterData';

export default function FunnySection() {
  const items = sisterData.funnyInheritance;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-[#2C3322] film-grain border-t border-[#E8D9D3]" style={{ background: 'radial-gradient(circle at top, #F7F1EA 0%, #FFFDF9 45%, #FAF6EF 100%)' }}>
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-12"
        >
          <span className="text-xs font-sans-clean tracking-[0.3em] font-semibold text-[#7B3E48] uppercase">
            CHAPTER 10 • SISTER INHERITANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-cinematic font-light text-[#2C3322]">
            Things I successfully inherited from you.
          </h2>
        </motion.div>

        {/* Checklist */}
        <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-white/10 paper-shadow space-y-4 max-w-lg mx-auto text-left shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          {items.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-3.5 rounded-xl flex flex-col gap-2 transition-all ${
                entry.isDenied
                  ? 'bg-[#FFF1F2] text-[#7B3E48] border border-[#E7B8BE] shadow-md'
                  : 'bg-[#FFFDF9] border border-white/10 text-[#2C3322]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-cinematic text-xl font-medium">
                  {entry.item}
                </span>

                {entry.isDenied ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold font-sans-clean text-[#B8737D] uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFF1F2] border border-[#E7B8BE]">
                    <XCircle className="w-3.5 h-3.5 text-[#B8737D]" />
                    <span>{entry.deniedReason}</span>
                  </span>
                ) : (
                  <span className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#7B3E48] flex items-center justify-center font-bold text-sm border border-white/10">
                    ✓
                  </span>
                )}
              </div>

              {entry.isDenied && (
                <div className="pt-2 border-t border-white/10 text-xs font-sans-clean space-y-1">
                  <p className="text-red-200 italic font-serif-cinematic text-sm">
                    “{entry.punchline}”
                  </p>
                  <p className="text-[#7D6A6E] font-medium pt-1">
                    {entry.followUp}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
