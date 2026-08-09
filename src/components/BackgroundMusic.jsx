
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

const BackgroundMusic = forwardRef(function BackgroundMusic(_, ref) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio/mia-and-seb-theme.mp3');

    audio.loop = true;
    audio.volume = 0.28;
    audio.preload = 'auto';

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    startMusic() {
      const audio = audioRef.current;

      if (!audio) return;

      audio.play().catch((error) => {
        console.log('Music playback was blocked:', error);
      });
    },

    pauseMusic() {
      const audio = audioRef.current;

      if (audio) {
        audio.pause();
      }
    },

    toggleMusic() {
      const audio = audioRef.current;

      if (!audio) return;

      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    },
  }));

  return null;
});

export default BackgroundMusic;
