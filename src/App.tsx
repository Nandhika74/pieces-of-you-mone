import React, { useRef, useState } from 'react';
import Intro from './components/Intro';
import ChapterMenu from './components/ChapterMenu';

import ChildhoodReveal from './components/ChildhoodReveal';
import YouWentFirst from './components/YouWentFirst';
import UsSection from './components/UsSection';
import SisterStory from './components/SisterStory';
import Bookshelf from './components/Bookshelf';
import MovieSection from './components/MovieSection';
import Wavelength from './components/Wavelength';
import Personality from './components/Personality';
import WhatIAdmire from './components/WhatIAdmire';
import Scrapbook from './components/Scrapbook';
import FunnySection from './components/FunnySection';
import GrowingTogether from './components/GrowingTogether';
import BirthdayLetter from './components/BirthdayLetter';
import MiniQuiz from './components/MiniQuiz';
import VirtualCakeAndHug from './components/VirtualCakeAndHug';
import FinalReveal from './components/FinalReveal';

import BackgroundMusic from './components/BackgroundMusic';
import FloralPetals from './components/FloralPetals';

import { ThemeAndImageProvider } from './context/ThemeAndImageContext';
import ThemeAndImageControls from './components/ThemeAndImageControls';

export default function App() {
  const storyStartRef = useRef(null);
  const [musicStarted, setMusicStarted] = React.useState(false);

const musicRef = useRef(null);
  /*
  |--------------------------------------------------------------------------
  | ENTER STORY
  |--------------------------------------------------------------------------
  */


const handleEnterStory = () => {
  setMusicStarted(true);

  if (storyStartRef.current) {
    storyStartRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};




  /*
  |--------------------------------------------------------------------------
  | SCROLL HELPER
  |--------------------------------------------------------------------------
  */

  const scrollToChapter = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  return (
    <ThemeAndImageProvider>

      {/* ================================================================
          BACKGROUND MUSIC
      ================================================================ */}

      <BackgroundMusic start={musicStarted} />


      {/* ================================================================
          FLOATING FLORAL PETALS
      ================================================================ */}

      <FloralPetals />


      {/* ================================================================
          INTRO / HOME
      ================================================================ */}

      <Intro onEnter={handleEnterStory} />


      {/* ================================================================
          BEAUTIFUL MEMORY MAP
          
          This appears after the home page.
          Clicking a chapter on the map scrolls to that section.
      ================================================================ */}

      <ChapterMenu />


      {/* ================================================================
          STORY START
      ================================================================ */}

      <div
        ref={storyStartRef}
        className="w-full"
      >


        {/* ============================================================
            CHAPTER 01 — THE BEGINNING
        ============================================================ */}

        <div
          id="chapter-childhood"
          className="scroll-mt-4"
        >
          <ChildhoodReveal
            onScrollNext={() => {
              scrollToChapter('chapter-you-went-first');
            }}
          />
        </div>


        {/* ============================================================
            CHAPTER 02 — YOU WENT FIRST
        ============================================================ */}

        <div
          id="chapter-you-went-first"
          className="scroll-mt-4"
        >
          <YouWentFirst />
        </div>


        {/* ============================================================
            CHAPTER 03 — US
        ============================================================ */}

        <div
          id="chapter-us"
          className="scroll-mt-4"
        >
          <UsSection />
        </div>


        {/* ============================================================
            CHAPTER 04 — MONE'S STORY
        ============================================================ */}

        <div
          id="chapter-story"
          className="scroll-mt-4"
        >
          <SisterStory />
        </div>


        {/* ============================================================
            CHAPTER 05 — THINGS I BORROWED FROM YOU
        ============================================================ */}

        <div
          id="chapter-books"
          className="scroll-mt-4"
        >
          <Bookshelf />
        </div>


        {/* ============================================================
            CHAPTER 06 — STORIES THAT STAYED WITH YOU
        ============================================================ */}

        <div
          id="chapter-movies"
          className="scroll-mt-4"
        >
          <MovieSection />
        </div>


        {/* ============================================================
            CHAPTER 07 — SAME WAVELENGTH
        ============================================================ */}

        <div
          id="chapter-wavelength"
          className="scroll-mt-4"
        >
          <Wavelength />
        </div>


        {/* ============================================================
            CHAPTER 08 — OUR STORY THROUGH THE ERAS
        ============================================================ */}

        <div
          id="chapter-eras"
          className="scroll-mt-4"
        >
          <Scrapbook />
        </div>


        {/* ============================================================
            CHAPTER 09 — THE ESSENCE OF MONE
        ============================================================ */}

        <div
          id="chapter-personality"
          className="scroll-mt-4"
        >
          <Personality />
        </div>


        {/* ============================================================
            CHAPTER 10 — WHAT I ADMIRE ABOUT MONE
        ============================================================ */}

        <div
          id="chapter-admire"
          className="scroll-mt-4"
        >
          <WhatIAdmire />
        </div>


        {/* ============================================================
            CHAPTER 11 — THE FUNNIEST PART
        ============================================================ */}

        <div
          id="chapter-funny"
          className="scroll-mt-4"
        >
          <FunnySection />
        </div>


        {/* ============================================================
            CHAPTER 12 — GROWING TOGETHER
        ============================================================ */}

        <div
          id="chapter-growing"
          className="scroll-mt-4"
        >
          <GrowingTogether />
        </div>


        {/* ============================================================
            CHAPTER 13 — A LETTER FOR YOU
        ============================================================ */}

        <div
          id="chapter-letter"
          className="scroll-mt-4"
        >
          <BirthdayLetter />
        </div>


        {/* ============================================================
            MINI QUIZ
        ============================================================ */}

        <div
          id="chapter-quiz"
          className="scroll-mt-4"
        >
          <MiniQuiz />
        </div>


        {/* ============================================================
            VIRTUAL CAKE & HUG
        ============================================================ */}

        <div
          id="chapter-cake"
          className="scroll-mt-4"
        >
          <VirtualCakeAndHug />
        </div>


        {/* ============================================================
            CHAPTER 14 — FINAL SURPRISE
        ============================================================ */}

        <div
          id="chapter-final"
          className="scroll-mt-4"
        >
          <FinalReveal />
        </div>


      </div>


      {/* ================================================================
          THEME / PHOTO CONTROLS

          Currently hidden because ThemeAndImageControls returns null,
          but keeping it here is fine if you want the controls later.
      ================================================================ */}

      <ThemeAndImageControls />

    </ThemeAndImageProvider>
  );
}