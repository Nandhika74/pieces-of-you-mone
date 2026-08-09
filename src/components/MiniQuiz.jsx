import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom } from './FloralDecorations';

export default function MiniQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const questions = sisterData.quizQuestions || [];
  const currentQuiz = questions[currentQuestion];

  /*
   * ============================================================
   * PLAYFUL CORRECT ANSWERS
   * ============================================================
   */

  const correctMessages = [
    'YAYYY! You actually know yourself! 😂❤️',

    'Obviously you got that one. Main character knowledge. ✨',

    'CORRECT! The Mone archives remain intact. 📚😂',

    'Okayyy, someone knows herself! 🌸❤️',

    'SEE?! I knew you had this. 😂',

    'Correct! Your Mone certification remains valid. 😌🌸',

    'Look at you knowing yourself like you should. 😂❤️',

    'YESSS! Mone has been successfully identified. 🌸😂',

    'Okay, we have evidence that you actually pay attention to yourself. 😭❤️',

    'That was suspiciously easy for you. You clearly know yourself. 😂',
  ];

  /*
   * ============================================================
   * PLAYFUL WRONG ANSWERS
   * ============================================================
   */

  const wrongMessages = [
    'Are you kidding me?! 😭 That was literally about YOU!',

    'Girl… how did you get your OWN question wrong? 😂😭',

    "EXCUSE ME?? Mone would like to know why you don't know Mone. 😭😂",

    'That confidence was impressive. The answer? Not so much. 😂',

    'I’m sorry… WHO are you and what have you done with Mone? 😭',

    'Bestie, we may need to restart your Mone certification. 😂🌸',

    "You really looked at that question and said 'let me betray myself.' 😭😂",

    'WRONG 😭 but honestly… I respect the commitment to that answer.',

    'How are you losing a quiz about YOURSELF?! 😭❤️',

    'Mone.exe has stopped responding. 😂💀',

    'Girl, this is getting concerning. It is literally a quiz about YOU. 😭😂',

    'Interesting choice… unfortunately, Mone disagrees. 😂🌸',

    'You had ONE job: know yourself. 😭❤️',

    'Okay… clearly we need to spend more time getting to know you. 😂🌸',

    'That answer came from somewhere… just apparently not from Mone. 😭😂',
  ];

  /*
   * ============================================================
   * RANDOM MESSAGE HELPER
   * ============================================================
   */

  const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  /*
   * ============================================================
   * SELECT ANSWER
   * ============================================================
   */

  const handleSelect = (index) => {
    if (showFeedback || !currentQuiz) return;

    const isCorrect = index === currentQuiz.correctIndex;

    setSelectedOption(index);
    setShowFeedback(true);

    /*
     * Increase score ONLY when answer is correct.
     */
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    /*
     * If the question has custom feedback in sisterData,
     * use that. Otherwise use our playful random messages.
     */
    if (isCorrect) {
      setFeedbackMessage(
        currentQuiz.correctFeedback ||
          getRandomMessage(correctMessages)
      );
    } else {
      setFeedbackMessage(
        currentQuiz.wrongFeedback ||
          getRandomMessage(wrongMessages)
      );
    }
  };

  /*
   * ============================================================
   * NEXT QUESTION
   * ============================================================
   */

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setFeedbackMessage('');
    } else {
      setIsCompleted(true);
    }
  };

  /*
   * ============================================================
   * RESET QUIZ
   * ============================================================
   */

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsCompleted(false);
    setFeedbackMessage('');
  };

  if (!questions.length) {
    return null;
  }

  const isAnswerCorrect =
    selectedOption === currentQuiz.correctIndex;

  /*
   * ============================================================
   * FINAL SCORE MESSAGE
   * ============================================================
   */

  const getFinalTitle = () => {
    if (score === questions.length) {
      return '100% certified Mone 😂🌸❤️';
    }

    if (score >= Math.ceil(questions.length * 0.75)) {
      return 'Okayyy, you actually know yourself! 😂❤️';
    }

    if (score >= Math.ceil(questions.length * 0.5)) {
      return 'Not bad, Mone… we’ll allow it. 😂🌸';
    }

    return 'Mone… we need to talk. 😭😂';
  };

  const getFinalMessage = () => {
    if (score === questions.length) {
      return 'Perfect score! Your Mone certification is officially approved. 🌸❤️';
    }

    if (score >= Math.ceil(questions.length * 0.75)) {
      return 'Honestly? Pretty impressive. You clearly know your own chaos. 😂❤️';
    }

    if (score >= Math.ceil(questions.length * 0.5)) {
      return 'You know yourself… mostly. There is still some research required. 😂🌸';
    }

    return 'How did you manage to lose a quiz about yourself?! 😭😂 Please go spend some time getting to know Mone.';
  };

  return (
    <section
      className="
        relative
        py-20
        px-4
        sm:px-6
        text-[#2C3322]
        film-grain
        border-t
        border-[#E8D9D3]
      "
      style={{
        background:
          'radial-gradient(circle at top, #F7F1EA 0%, #FFFDF9 45%, #FAF6EF 100%)',
      }}
    >
      {/* ======================================================
          TITLE
      ======================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          flex
          flex-col
          items-center
          gap-2
          mb-8
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
            text-[#7B3E48]
          "
        >
          🌸 FLORAL CHECKPOINT 🌸
        </span>

        <h2
          className="
            text-3xl
            sm:text-4xl
            font-serif-cinematic
            font-light
            text-[#2C3322]
          "
        >
          How well do you know yourself? 👀🌸
        </h2>

        <p className="text-sm text-[#7D6A6E] font-sans-clean">
          A completely serious examination of Mone.
        </p>
      </motion.div>

      {/* ======================================================
          QUIZ CARD
      ======================================================= */}

      <div
        className="
          max-w-2xl
          mx-auto
          bg-white
          p-5
          sm:p-8
          rounded-2xl
          border
          border-[#E8D9D3]
          paper-shadow
          text-left
          relative
          overflow-hidden
          shadow-[0_24px_60px_rgba(0,0,0,0.20)]
        "
      >
        {!isCompleted ? (
          <div>

            {/* ==================================================
                QUESTION HEADER
            =================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
                text-xs
                font-sans-clean
                text-[#7B3E48]
                uppercase
                tracking-wider
                mb-5
                font-semibold
              "
            >
              <span>
                QUESTION {currentQuestion + 1} OF {questions.length}
              </span>

              <span>
                SCORE: {score} 🌸
              </span>
            </div>

            {/* ==================================================
                QUESTION
            =================================================== */}

            <h3
              className="
                text-xl
                sm:text-2xl
                font-serif-cinematic
                font-semibold
                text-[#2C3322]
                mb-6
                leading-relaxed
              "
            >
              {currentQuiz.question}
            </h3>

            {/* ==================================================
                OPTIONS
            =================================================== */}

            <div className="space-y-3 mb-6">
              {currentQuiz.options.map((opt, idx) => {
                const isCorrect =
                  idx === currentQuiz.correctIndex;

                const isSelected =
                  idx === selectedOption;

                let optionStyle =
                  `
                    bg-[#FFFDF9]
                    border-[#E8D9D3]
                    text-[#2C3322]
                    hover:border-[#7B3E48]
                    hover:bg-[#FFF7F8]
                  `;

                /*
                 * AFTER ANSWER IS SELECTED
                 */
                if (showFeedback) {
                  /*
                   * Correct answer
                   */
                  if (isCorrect) {
                    optionStyle =
                      `
                        bg-[#EDF7EE]
                        border-[#6B9B72]
                        text-[#315E38]
                        font-semibold
                      `;
                  }

                  /*
                   * Wrong answer selected by user
                   */
                  else if (isSelected) {
                    optionStyle =
                      `
                        bg-[#FFF0F0]
                        border-[#C75B62]
                        text-[#9B3038]
                        font-semibold
                      `;
                  }

                  /*
                   * Other unanswered options
                   */
                  else {
                    optionStyle =
                      `
                        bg-[#FAFAFA]
                        border-[#E8E8E8]
                        text-[#777]
                      `;
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={showFeedback}
                    type="button"
                    className={`
                      w-full
                      p-3.5
                      sm:p-4
                      rounded-xl
                      border
                      text-left
                      font-serif-cinematic
                      text-base
                      transition-all
                      duration-200
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                      gap-3
                      ${optionStyle}
                    `}
                  >
                    <span>{opt}</span>

                    {/* Correct icon */}
                    {showFeedback && isCorrect && (
                      <CheckCircle2
                        className="
                          w-5
                          h-5
                          flex-shrink-0
                          text-[#5E9567]
                        "
                      />
                    )}

                    {/* Wrong selected icon */}
                    {showFeedback &&
                      isSelected &&
                      !isCorrect && (
                        <XCircle
                          className="
                            w-5
                            h-5
                            flex-shrink-0
                            text-[#C75B62]
                          "
                        />
                      )}
                  </button>
                );
              })}
            </div>

            {/* ==================================================
                PLAYFUL FEEDBACK
            =================================================== */}

            {showFeedback && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                className={`
                  p-4
                  rounded-xl
                  border
                  mb-6
                  ${
                    isAnswerCorrect
                      ? `
                        bg-[#EDF7EE]
                        border-[#C9DEC9]
                      `
                      : `
                        bg-[#FFF0F0]
                        border-[#E8C7C7]
                      `
                  }
                `}
              >
                {/* Correct */}
                {isAnswerCorrect ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2
                        className="w-5 h-5 text-[#5E9567]"
                      />

                      <span
                        className="
                          font-sans-clean
                          text-xs
                          font-bold
                          tracking-wider
                          uppercase
                          text-[#4F7E56]
                        "
                      >
                        Correct! 🌸
                      </span>
                    </div>

                    <p
                      className="
                        font-serif-cinematic
                        italic
                        text-sm
                        text-[#4F6F52]
                      "
                    >
                      {feedbackMessage}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle
                        className="w-5 h-5 text-[#C75B62]"
                      />

                      <span
                        className="
                          font-sans-clean
                          text-xs
                          font-bold
                          tracking-wider
                          uppercase
                          text-[#A33D45]
                        "
                      >
                        Oops 😭
                      </span>
                    </div>

                    <p
                      className="
                        font-serif-cinematic
                        italic
                        text-sm
                        text-[#8F555A]
                        mb-3
                      "
                    >
                      {feedbackMessage}
                    </p>

                    <div
                      className="
                        px-3
                        py-2
                        rounded-lg
                        bg-white/60
                        border
                        border-[#E8C7C7]
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-sans-clean
                          text-[#7D6A6E]
                        "
                      >
                        <span className="font-semibold">
                          The actual answer:
                        </span>{' '}
                        {currentQuiz.options[currentQuiz.correctIndex]}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* ==================================================
                NEXT BUTTON
            =================================================== */}

            {showFeedback && (
              <motion.button
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                onClick={handleNext}
                type="button"
                className="
                  w-full
                  py-3.5
                  rounded-xl
                  bg-[#7B3E48]
                  hover:bg-[#6F3540]
                  text-[#FFFDF9]
                  text-xs
                  font-sans-clean
                  tracking-wider
                  uppercase
                  font-semibold
                  transition-all
                  cursor-pointer
                  border
                  border-[#7B3E48]
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-[1.01]
                  active:scale-[0.98]
                "
              >
                <span>
                  {currentQuestion + 1 < questions.length
                    ? 'Next Question'
                    : 'See My Certification'}
                </span>

                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        ) : (

          /* ====================================================
             COMPLETION SCREEN
          ===================================================== */

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              text-center
              py-6
              space-y-5
            "
          >
            {/* Flower */}
            <div
              className="
                w-20
                h-20
                rounded-full
                bg-[#FFF0F3]
                text-[#7B3E48]
                flex
                items-center
                justify-center
                mx-auto
                border
                border-[#E8D9D3]
              "
            >
              <FlowerBloom className="w-9 h-9" />
            </div>

            {/* Final title */}
            <div>
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-serif-cinematic
                  font-bold
                  text-[#2C3322]
                "
              >
                {getFinalTitle()}
              </h3>

              <p
                className="
                  font-serif-cinematic
                  italic
                  text-lg
                  text-[#7D6A6E]
                  mt-3
                "
              >
                You scored{' '}
                <span
                  className="
                    font-bold
                    text-[#7B3E48]
                  "
                >
                  {score}/{questions.length}
                </span>
              </p>
            </div>

            {/* Final playful message */}
            <p
              className="
                font-serif-cinematic
                italic
                text-sm
                text-[#8C777B]
                max-w-md
                mx-auto
              "
            >
              {getFinalMessage()}
            </p>

            {/* Play Again */}
            <button
              onClick={resetQuiz}
              type="button"
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-[#FFF0F3]
                border
                border-[#E6D8D0]
                text-xs
                font-sans-clean
                text-[#7B3E48]
                hover:bg-[#F3D9DD]
                transition-all
                mt-4
                cursor-pointer
                font-medium
                hover:scale-105
                active:scale-95
              "
            >
              <RotateCcw className="w-3.5 h-3.5" />

              <span>
                Make Me Prove It Again 😂
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
