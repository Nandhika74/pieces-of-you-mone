import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralVineDivider } from './FloralDecorations';

export default function MiniQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = sisterData.quizQuestions;

  const handleSelect = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);

    if (index === questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section className="relative py-20 px-6 text-[#2C3322] film-grain border-t border-[#E8D9D3]" style={{ background: 'radial-gradient(circle at top, #F7F1EA 0%, #FFFDF9 45%, #FAF6EF 100%)' }}>
      <div className="max-w-xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <span className="text-xs font-sans-clean tracking-[0.3em] font-semibold text-[#7B3E48] uppercase flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F3] border border-[#E6D8D0]">
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
            <span>FLORAL CHECKPOINT</span>
            <FlowerBloom className="w-3.5 h-3.5 text-[#C98998]" />
          </span>
          <h2 className="text-3xl font-serif-cinematic font-medium text-[#2C3322]">
            How well do you know yourself? 👀🌸
          </h2>
          <FloralVineDivider className="w-40 h-5 text-[#7B3E48]" />
        </motion.div>

        {/* Quiz Card */}
        <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-white/10 paper-shadow text-left relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          {!isCompleted ? (
            <div>
              {/* Question Header */}
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#7B3E48] uppercase tracking-wider mb-4 font-semibold">
                <span>QUESTION {currentQuestion + 1} OF {questions.length}</span>
                <span>MONE CERTIFICATION 🌸</span>
              </div>

              <h3 className="text-xl font-serif-cinematic font-semibold text-[#2C3322] mb-6">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {questions[currentQuestion].options.map((opt, idx) => {
                  const isCorrect = idx === questions[currentQuestion].correctIndex;
                  const isSelected = idx === selectedOption;

                  let optionStyle =
                    'bg-[#FFFDF9] border-white/10 text-[#2C3322] hover:border-[#7B3E48]';
                  if (showFeedback) {
                    if (isCorrect) {
                      optionStyle =
                        'bg-[#FFF0F3] border-[#7B3E48] text-[#7B3E48] font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-red-950/40 border-red-400 text-red-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={showFeedback}
                      className={`w-full p-3.5 rounded-xl border text-left font-serif-cinematic text-base transition-all duration-200 cursor-pointer flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {showFeedback && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-[#B8737D]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-[#FFF0F3] border border-[#E6D8D0] mb-6"
                >
                  <p className="font-serif-cinematic italic text-sm text-[#C98998]">
                    {questions[currentQuestion].feedback}
                  </p>
                </motion.div>
              )}

              {/* Next Button */}
              {showFeedback && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl bg-[#7B3E48] hover:bg-[#6F3540] text-[#FFFDF9] text-xs font-sans-clean tracking-wider uppercase font-semibold transition-colors cursor-pointer border border-[#7B3E48]"
                >
                  {currentQuestion + 1 < questions.length ? 'Next Question →' : 'See Certification 🌸 →'}
                </button>
              )}
            </div>
          ) : (
            /* Result Completion */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFF0F3] text-[#7B3E48] flex items-center justify-center mx-auto mb-2 border border-white/10">
                <FlowerBloom className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif-cinematic font-bold text-[#2C3322]">
                100% certified Mone 😂🌸❤️
              </h3>
              <p className="font-serif-cinematic italic text-lg text-[#7D6A6E]">
                Verified sister credentials & floral honors confirmed!
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF0F3] border border-[#E6D8D0] text-xs font-sans-clean text-[#7B3E48] hover:bg-[#F3D9DD] transition-colors mt-4 cursor-pointer font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Play Again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
