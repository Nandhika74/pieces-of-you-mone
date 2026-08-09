import React, { useEffect, useRef } from 'react';

export default function BackgroundMusic({ start }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio/mia-and-seb-theme.mp3');

    audio.loop = true;
    audio.volume = 0.28;
    audio.preload = 'auto';
    audio.load();

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);
  
useEffect(() => {
  if (start && audioRef.current) {
    const audio = audioRef.current;

    audio.currentTime = 0;

    audio.play().catch((error) => {
      console.log('Audio playback blocked:', error);
    });
  }
}, [start]);
  

  return null;
}

