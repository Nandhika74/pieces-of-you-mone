import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Music,
  Play,
  Pause,
  Disc,
  Volume2,
  VolumeX,
  Youtube,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Maximize2,
  Minimize2,
  Tv,
  Radio,
  Heart
} from 'lucide-react';
import { sisterData } from '../data/sisterData';
import { FlowerBloom, FloralVineDivider } from './FloralDecorations';

export default function MusicPlayer({ className = "", embedded = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState('audio'); // 'youtube' | 'synth' | 'audio'
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showYoutubeVideo, setShowYoutubeVideo] = useState(false);

  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);
  const delayGainRef = useRef(null);

  // Music metadata fallback
  const musicInfo = sisterData.music || {
    title: "Mia & Sebastian's Theme",
    movie: "La La Land",
    composer: "Justin Hurwitz",
    audioPath: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=CL3j45_G-eA",
    youtubeEmbedId: "CL3j45_G-eA",
    verifiedText: "YouTube Verified Soundtrack • Justin Hurwitz",
    quote: "A quiet piano melody that feels like nostalgia, growth, and two sisters on the same wavelength.",
  };

// Initialize HTML5 Audio fallback
  useEffect(() => {
    const audio = new Audio();
    audio.src = musicInfo.audioPath;
    audio.loop = true;
    audio.volume = volume;
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;

    audio.onerror = () => {
      // Fallback to Web Audio acoustic piano synth
      setAudioSource('synth');
    };

    // Auto-play the original background music on load
    const autoPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Browsers block autoplay with sound; wait for first user interaction
        const enableOnInteraction = () => {
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
          window.removeEventListener('click', enableOnInteraction);
          window.removeEventListener('touchstart', enableOnInteraction);
        };
        window.addEventListener('click', enableOnInteraction);
        window.addEventListener('touchstart', enableOnInteraction);
      });
    };

    autoPlay();

return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopPianoSynthSequence();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Web Audio Context for Piano Synth
  const getAudioContext = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();

      // Delay Node for ambient piano reverb
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.24; // 240ms delay

      const delayGain = ctx.createGain();
      delayGain.gain.value = 0.32; // feedback gain

      delay.connect(delayGain);
      delayGain.connect(delay);
      delay.connect(ctx.destination);

      delayGainRef.current = delay;
      audioCtxRef.current = ctx;
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    return audioCtxRef.current;
  };

  // Play a single rich acoustic piano note
  const playAcousticPianoNote = (freq, duration = 2.4, vol = 0.16) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const effectiveVol = isMuted ? 0 : vol * volume;

      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, effectiveVol), now + 0.015);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);

      const osc2Gain = ctx.createGain();
      osc2Gain.gain.value = 0.22;

      osc1.connect(filter);
      osc2.connect(osc2Gain);
      osc2Gain.connect(filter);

      filter.connect(noteGain);
      noteGain.connect(ctx.destination);

      if (delayGainRef.current) {
        noteGain.connect(delayGainRef.current);
      }

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch (e) {
      console.log('Piano note play error', e);
    }
  };

  // La La Land (Mia & Sebastian's Theme) Piano Waltz Sequence
  const startPianoSynthSequence = () => {
    stopPianoSynthSequence();

    // Notes map in Hz for Mia & Sebastian's Theme waltz
    const melody = [
      // Measure 1 (Am)
      { note: 659.25, bass: 110.00 },  // E5, A2
      { note: 783.99 },               // G5
      { note: 880.00, bass: 164.81 },  // A5, E3
      { note: 987.77 },               // B5
      { note: 1046.50 },              // C6
      { note: 987.77 },               // B5
      { note: 880.00 },               // A5
      { note: 783.99 },               // G5

      // Measure 2 (Fmaj7)
      { note: 698.46, bass: 87.31 },   // F5, F2
      { note: 783.99 },               // G5
      { note: 880.00, bass: 130.81 },  // A5, C3
      { note: 987.77 },               // B5
      { note: 880.00 },               // A5
      { note: 783.99 },               // G5
      { note: 698.46 },               // F5
      { note: 659.25 },               // E5

      // Measure 3 (C)
      { note: 523.25, bass: 65.41 },   // C5, C2
      { note: 659.25 },               // E5
      { note: 783.99, bass: 98.00 },   // G5, G2
      { note: 880.00 },               // A5
      { note: 783.99 },               // G5
      { note: 659.25 },               // E5
      { note: 587.33 },               // D5
      { note: 523.25 },               // C5

      // Measure 4 (E7)
      { note: 493.88, bass: 82.41 },   // B4, E2
      { note: 587.33 },               // D5
      { note: 659.25, bass: 207.65 },  // E5, G#3
      { note: 783.99 },               // G5
      { note: 659.25 },               // E5
      { note: 587.33 },               // D5
      { note: 493.88 },               // B4
      { note: 440.00 },               // A4
    ];

    let index = 0;
    synthIntervalRef.current = setInterval(() => {
      const step = melody[index % melody.length];
      playAcousticPianoNote(step.note, 2.2, 0.17);
      if (step.bass) {
        playAcousticPianoNote(step.bass, 2.8, 0.13);
      }
      index++;
    }, 400); // Waltz tempo (~110 bpm)
  };

  const stopPianoSynthSequence = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current && audioSource === 'audio') {
        audioRef.current.pause();
      }
      stopPianoSynthSequence();
      setIsPlaying(false);
    } else {
      if (audioSource === 'youtube') {
        setShowYoutubeVideo(true);
        setIsPlaying(true);
      } else if (audioSource === 'audio' && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setAudioSource('synth');
          startPianoSynthSequence();
          setIsPlaying(true);
        });
      } else {
        startPianoSynthSequence();
        setIsPlaying(true);
      }
    }
  };

  const handleSourceChange = (source) => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopPianoSynthSequence();
    }
    setAudioSource(source);

    if (source === 'youtube') {
      setShowYoutubeVideo(true);
      setIsPlaying(true);
    } else if (source === 'synth') {
      setShowYoutubeVideo(false);
      startPianoSynthSequence();
      setIsPlaying(true);
    } else if (source === 'audio' && audioRef.current) {
      setShowYoutubeVideo(false);
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setAudioSource('synth');
        startPianoSynthSequence();
        setIsPlaying(true);
      });
    }
  };

  return (
    <>
      {/* 1. STANDALONE BIG VISIBLE PLAYER CARD (embedded in page flow if requested) */}
      {embedded ? (
        <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 bg-[#FFFDFB] rounded-3xl border border-[#F0E2E5] paper-shadow relative overflow-hidden text-[#2C3322]">
          {/* Header & YouTube Verification Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F0E2E5]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F3] border border-[#F0D5DA] flex items-center justify-center text-[#B8737D] shadow-xs">
                <Music className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-sans-clean tracking-[0.25em] text-[#B8737D] uppercase font-bold block">
                  CHAPTER SOUNDTRACK • LA LA LAND
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-cinematic font-bold text-[#2C3322]">
                  {musicInfo.title}
                </h3>
              </div>
            </div>

            {/* YouTube Verification Badge */}
            <a
              href={musicInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 text-xs font-sans-clean text-[#D00000] font-semibold transition-all duration-300 shadow-xs group"
            >
              <Youtube className="w-4 h-4 text-[#FF0000] fill-current" />
              <span>Verified YouTube Track</span>
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <ExternalLink className="w-3 h-3 text-[#D00000] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Main Controls & Cover Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
            {/* Album Cover & Vinyl Record Spin */}
            <div className="md:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                {/* Vinyl Disc Shadow */}
                <div
                  className={`absolute -right-4 top-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#1A1F16] border-4 border-[#2C3322] shadow-2xl flex items-center justify-center transition-all duration-700 ${
                    isPlaying ? 'rotate-12 translate-x-6' : 'translate-x-0'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full border-2 border-[#7B3E48] bg-[#B8737D] flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                    <Disc className="w-8 h-8 text-[#FFFDFB]" />
                  </div>
                </div>

                {/* Album Cover Artwork */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#F0E2E5] shadow-xl bg-[#F0E2E5]">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop"
                    alt="La La Land Mia and Sebastian Piano"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23171A]/80 via-transparent to-transparent flex flex-col justify-end p-4 text-[#FFFDFB]">
                    <span className="text-[10px] uppercase font-bold text-[#C98998] tracking-widest">
                      Justin Hurwitz
                    </span>
                    <span className="text-sm font-serif-cinematic italic">
                      Original Motion Picture Soundtrack
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Playback Controls & Audio Mode Selection */}
            <div className="md:col-span-7 flex flex-col space-y-6">
              <p className="font-serif-cinematic italic text-lg sm:text-xl text-[#5A634E] leading-relaxed bg-[#FFF0F3] p-4 rounded-2xl border border-[#F0D5DA]">
                “{musicInfo.quote}”
              </p>

              {/* Source Switcher Buttons */}
              <div className="space-y-2">
                <span className="text-[10px] font-sans-clean uppercase tracking-widest text-[#B8737D] font-bold block">
                  Select Audio Experience:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleSourceChange('youtube')}
                    className={`px-3 py-2 rounded-xl text-xs font-sans-clean font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      audioSource === 'youtube'
                        ? 'bg-[#FF0000] text-[#FFFDFB] shadow-md'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube Original</span>
                  </button>

                  <button
                    onClick={() => handleSourceChange('synth')}
                    className={`px-3 py-2 rounded-xl text-xs font-sans-clean font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      audioSource === 'synth'
                        ? 'bg-[#B8737D] text-[#FFFDFB] shadow-md'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>Acoustic Piano</span>
                  </button>

                  <button
                    onClick={() => handleSourceChange('audio')}
                    className={`px-3 py-2 rounded-xl text-xs font-sans-clean font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      audioSource === 'audio'
                        ? 'bg-[#3A472E] text-[#FFFDFB] shadow-md'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Music className="w-3.5 h-3.5" />
                    <span>HQ Stream</span>
                  </button>
                </div>
              </div>

              {/* Play Pause Big Button & Volume Slider */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={togglePlay}
                  id="embedded-play-btn"
                  className="px-8 py-3.5 rounded-full bg-[#B8737D] hover:bg-[#A35C66] text-[#FFFDFB] font-sans-clean text-sm tracking-wider uppercase font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 border border-[#E8C5C8]"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current" />
                      <span>PAUSE SOUNDTRACK</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      <span>PLAY MIA & SEBASTIAN'S THEME 🌸</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 bg-[#FFF0F3] px-3.5 py-2 rounded-full border border-[#F0D5DA]">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-[#B8737D] hover:text-[#A35C66] cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-20 accent-[#B8737D] cursor-pointer"
                  />
                </div>
              </div>

              {/* YouTube Frame Video Player Embed (When Youtube Selected) */}
              {audioSource === 'youtube' && showYoutubeVideo && (
                <div className="mt-4 pt-4 border-t border-[#F0E2E5]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-sans-clean font-bold text-[#D00000] flex items-center gap-1.5">
                      <Youtube className="w-4 h-4 text-[#FF0000]" />
                      <span>YouTube Official Video Frame</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                    </span>
                    <a
                      href={musicInfo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#B8737D] underline hover:text-[#A35C66]"
                    >
                      Open directly on YouTube ↗
                    </a>
                  </div>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-[#F0D5DA] shadow-md bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${musicInfo.youtubeEmbedId}?autoplay=1&enablejsapi=1`}
                      title="Mia & Sebastian's Theme - Justin Hurwitz"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* 2. FLOATING & EXPANDABLE DOCK AT BOTTOM RIGHT */
        <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
          {/* Expanded Modal Deck */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mb-4 w-80 sm:w-96 bg-[#FFFDFB] p-5 rounded-3xl paper-shadow border border-[#F0E2E5] text-[#2C3322] relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E2E5]">
                  <div className="flex items-center gap-2">
                    <FlowerBloom className="w-4 h-4 text-[#B8737D]" />
                    <span className="text-xs font-sans-clean font-bold text-[#B8737D] uppercase tracking-wider">
                      La La Land Soundtrack
                    </span>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 rounded-full hover:bg-[#FFF0F3] text-[#B8737D] transition-colors cursor-pointer"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Track Info & YouTube Verification Badge */}
                <div className="my-4 space-y-2">
                  <h4 className="text-xl font-serif-cinematic font-bold text-[#2C3322]">
                    {musicInfo.title}
                  </h4>
                  <p className="text-xs font-sans-clean text-[#5A634E]">
                    {musicInfo.composer} • {musicInfo.movie}
                  </p>

                  <a
                    href={musicInfo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 text-[10px] font-sans-clean text-[#D00000] font-bold mt-1"
                  >
                    <Youtube className="w-3 h-3 text-[#FF0000] fill-current" />
                    <span>YouTube Verified Track</span>
                    <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                  </a>
                </div>

                {/* Source Selection */}
                <div className="grid grid-cols-3 gap-1.5 my-3">
                  <button
                    onClick={() => handleSourceChange('youtube')}
                    className={`py-1.5 rounded-lg text-[10px] font-sans-clean font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                      audioSource === 'youtube'
                        ? 'bg-[#FF0000] text-white'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Youtube className="w-3 h-3" />
                    <span>YouTube</span>
                  </button>
                  <button
                    onClick={() => handleSourceChange('synth')}
                    className={`py-1.5 rounded-lg text-[10px] font-sans-clean font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                      audioSource === 'synth'
                        ? 'bg-[#B8737D] text-white'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Radio className="w-3 h-3" />
                    <span>Piano Synth</span>
                  </button>
                  <button
                    onClick={() => handleSourceChange('audio')}
                    className={`py-1.5 rounded-lg text-[10px] font-sans-clean font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                      audioSource === 'audio'
                        ? 'bg-[#3A472E] text-white'
                        : 'bg-[#FFF0F3] text-[#2C3322] hover:bg-[#F0D5DA]'
                    }`}
                  >
                    <Music className="w-3 h-3" />
                    <span>Audio</span>
                  </button>
                </div>

                {/* YouTube Video View inside expanded dock if source = youtube */}
                {audioSource === 'youtube' && (
                  <div className="my-3 aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#F0D5DA]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${musicInfo.youtubeEmbedId}?autoplay=1&enablejsapi=1`}
                      title="Mia & Sebastian's Theme"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                )}

                {/* Main Play Action */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={togglePlay}
                    className="px-5 py-2.5 rounded-full bg-[#B8737D] hover:bg-[#A35C66] text-[#FFFDFB] text-xs font-sans-clean font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Theme 🌸</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full hover:bg-[#FFF0F3] text-[#B8737D]"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-16 accent-[#B8737D] cursor-pointer"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prominent Floating Pill Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              id="music-player-pill-btn"
              className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#B8737D]/95 hover:bg-[#A35C66] text-[#FFFDFB] backdrop-blur-md border border-[#E8C5C8] shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF0F3]/20 text-[#FFFDFB]">
                {isPlaying ? (
                  <Disc className="w-5 h-5 animate-spin text-[#C98998]" style={{ animationDuration: '4s' }} />
                ) : (
                  <Music className="w-5 h-5 text-[#FFFDFB]" />
                )}
              </div>

              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] tracking-widest uppercase text-[#C98998] font-bold leading-none">
                    {isPlaying ? 'NOW PLAYING' : 'LA LA LAND SOUNDTRACK'}
                  </span>
                  <CheckCircle2 className="w-3 h-3 text-[#A8E6CF]" />
                </div>
                <span className="text-xs font-serif-cinematic font-semibold text-[#FFFDFB] tracking-wide mt-0.5">
                  Mia & Sebastian's Theme
                </span>
              </div>

              {/* Equalizer */}
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-3.5 pl-1 pr-1">
                  <span className="w-0.5 h-full bg-[#C98998] animate-pulse rounded-full"></span>
                  <span className="w-0.5 h-2 bg-[#C98998] animate-pulse rounded-full delay-75"></span>
                  <span className="w-0.5 h-4 bg-[#C98998] animate-pulse rounded-full delay-150"></span>
                </div>
              ) : (
                <Play className="w-4 h-4 text-[#C98998] ml-1 fill-current" />
              )}
            </button>

            {/* Expand Deck Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 rounded-full bg-[#FFFDFB] text-[#B8737D] border border-[#F0D5DA] shadow-xl hover:bg-[#FFF0F3] transition-transform hover:scale-110 cursor-pointer"
              title="Expand Music Player Deck"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Named export for placing the prominent standalone Music Deck anywhere on the main page layout!
export function MusicPlayerSection() {
  return <MusicPlayer embedded={true} />;
}
