import React, { useEffect, useRef } from 'react';
import { sisterData } from '../data/sisterData';

// Hidden background music player that auto-plays the original song.
// No visible UI is rendered.
export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "/audio/mia-and-seb-theme.mp3";
    audio.loop = true;
    audio.volume = 0.28;
    audio.preload = 'auto';
    audioRef.current = audio;

    const startPlayback = () => {
      audio.play()
        .then(() => {})
        .catch(() => {
          // Autoplay blocked; wait for first user interaction
          const enableOnInteraction = () => {
            audio.play().catch(() => {});
            window.removeEventListener('click', enableOnInteraction);
            window.removeEventListener('touchstart', enableOnInteraction);
            window.removeEventListener('scroll', enableOnInteraction);
            window.removeEventListener('keydown', enableOnInteraction);
          };
          window.addEventListener('click', enableOnInteraction);
          window.addEventListener('touchstart', enableOnInteraction);
          window.addEventListener('scroll', enableOnInteraction);
          window.addEventListener('keydown', enableOnInteraction);
        });
    };

    // Delay slightly so the page can render first
    const timer = setTimeout(startPlayback, 300);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return null;
}
