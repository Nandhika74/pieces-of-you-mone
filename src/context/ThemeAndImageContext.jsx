import React, { createContext, useContext, useState, useEffect } from 'react';
import { sisterData } from '../data/sisterData';

// THEME PALETTES DEFINITION
export const THEMES = [
  {
    id: 'rose',
    name: 'Blush Rose & Gold',
    icon: '🌸',
    bgPrimary: '#FAF6EF',
    bgSecondary: '#FFFDF9',
    accentMain: '#D8A0A6',
    accentDark: '#7B3E48',
    textDark: '#2C3322',
    textMuted: '#7D6A6E',
    borderColor: '#F0E2E5',
    cardBg: '#FFFFFF',
    tagBg: '#FFF0F3',
  },
  {
    id: 'sage',
    name: 'Sage & Botanical',
    icon: '🌿',
    bgPrimary: '#F3F6F3',
    bgSecondary: '#FCFFFC',
    accentMain: '#8A9A86',
    accentDark: '#2D3B2D',
    textDark: '#1E281E',
    textMuted: '#526352',
    borderColor: '#E0EAE0',
    cardBg: '#FFFFFF',
    tagBg: '#EEF4EE',
  },
  {
    id: 'sunset',
    name: 'Terracotta & Honey',
    icon: '🌅',
    bgPrimary: '#FAF3EE',
    bgSecondary: '#FFFBF8',
    accentMain: '#D9826C',
    accentDark: '#8C3827',
    textDark: '#36221D',
    textMuted: '#825F56',
    borderColor: '#F5E4DC',
    cardBg: '#FFFFFF',
    tagBg: '#FCF0EB',
  },
  {
    id: 'lavender',
    name: 'Lavender Dusk',
    icon: '🍇',
    bgPrimary: '#F6F3F9',
    bgSecondary: '#FDFBFF',
    accentMain: '#9C8CB9',
    accentDark: '#4A3B69',
    textDark: '#261E33',
    textMuted: '#6B5B85',
    borderColor: '#EBE3F2',
    cardBg: '#FFFFFF',
    tagBg: '#F3EEF8',
  },
  {
    id: 'celestial',
    name: 'Soft Blush Light',
    icon: '🌷',
    bgPrimary: '#FAF6EF',
    bgSecondary: '#FFFDF9',
    accentMain: '#7B3E48',
    accentDark: '#5F3038',
    textDark: '#2C3322',
    textMuted: '#6F6265',
    borderColor: '#E8D5D8',
    cardBg: '#FFFFFF',
    tagBg: '#FFF0F3',
  },
  {
    id: 'ocean',
    name: 'Eucalyptus & Sea',
    icon: '🌊',
    bgPrimary: '#F2F7F7',
    bgSecondary: '#FAFCFC',
    accentMain: '#649A99',
    accentDark: '#2C5251',
    textDark: '#1E2B2C',
    textMuted: '#517071',
    borderColor: '#DCEDED',
    cardBg: '#FFFFFF',
    tagBg: '#EAF4F4',
  },
];

// INDEXEDDB PERSISTENT IMAGE STORAGE HELPERS
const DB_NAME = 'mone_app_media_db';
const DB_VERSION = 1;
const STORE_NAME = 'custom_images';

function openDB() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

async function getAllFromIDB() {
  const db = await openDB();
  if (!db) return {};
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.openCursor();
      const result = {};
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          result[cursor.key] = cursor.value;
          cursor.continue();
        } else {
          resolve(result);
        }
      };
      req.onerror = () => resolve({});
    } catch {
      resolve({});
    }
  });
}

async function saveToIDB(key, value) {
  const db = await openDB();
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(value, key);
  } catch (e) {
    console.warn('IDB save warning:', e);
  }
}

async function removeFromIDB(key) {
  const db = await openDB();
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(key);
  } catch (e) {
    console.warn('IDB delete warning:', e);
  }
}

async function clearIDB() {
  const db = await openDB();
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();
  } catch (e) {
    console.warn('IDB clear warning:', e);
  }
}

const ThemeAndImageContext = createContext(null);

export function ThemeAndImageProvider({ children }) {
  // 1. Theme State
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('mone_app_theme') || 'rose';
  });

  // Global dark mode override (independent of selected palette)
  // For quick preview, default dark mode is enabled. Change to `false` to default light.
  // Light Pinterest-style theme is the default final experience.
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = THEMES.find((t) => t.id === currentThemeId) || THEMES[0];

  useEffect(() => {
    localStorage.setItem('mone_app_theme', currentThemeId);
    // Apply CSS custom properties to document root. If isDarkMode is on,
    // use the 'celestial' palette as a dark override.
    const root = document.documentElement;
    const appliedTheme = isDarkMode ? THEMES.find((t) => t.id === 'celestial') || currentTheme : currentTheme;
    root.style.setProperty('--color-bg-primary', appliedTheme.bgPrimary);
    root.style.setProperty('--color-bg-secondary', appliedTheme.bgSecondary);
    root.style.setProperty('--color-accent-main', appliedTheme.accentMain);
    root.style.setProperty('--color-accent-dark', appliedTheme.accentDark);
    root.style.setProperty('--color-text-dark', appliedTheme.textDark);
    root.style.setProperty('--color-text-muted', appliedTheme.textMuted);
    root.style.setProperty('--color-border', appliedTheme.borderColor);
    root.style.setProperty('--color-card-bg', appliedTheme.cardBg);
    root.style.setProperty('--color-tag-bg', appliedTheme.tagBg);

    if (appliedTheme.id === 'celestial' || isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [currentThemeId, currentTheme]);

  useEffect(() => {
    try {
      localStorage.setItem('mone_dark_mode', isDarkMode ? 'true' : 'false');
    } catch {}
    // re-apply theme CSS vars when dark mode toggles
    const root = document.documentElement;
    const appliedTheme = isDarkMode ? THEMES.find((t) => t.id === 'celestial') || currentTheme : currentTheme;
    root.style.setProperty('--color-bg-primary', appliedTheme.bgPrimary);
    root.style.setProperty('--color-bg-secondary', appliedTheme.bgSecondary);
    root.style.setProperty('--color-accent-main', appliedTheme.accentMain);
    root.style.setProperty('--color-accent-dark', appliedTheme.accentDark);
    root.style.setProperty('--color-text-dark', appliedTheme.textDark);
    root.style.setProperty('--color-text-muted', appliedTheme.textMuted);
    root.style.setProperty('--color-border', appliedTheme.borderColor);
    root.style.setProperty('--color-card-bg', appliedTheme.cardBg);
    root.style.setProperty('--color-tag-bg', appliedTheme.tagBg);
    if (isDarkMode) document.body.classList.add('dark-theme'); else document.body.classList.remove('dark-theme');
  }, [isDarkMode]);

  // 2. Custom Images Storage (Local & IndexedDB Persistence)
  const [customImages, setCustomImages] = useState(() => {
    let merged = {};
    try {
      const keysToTry = [
        'mone_custom_images_v2',
        'mone_custom_images',
        'mone_app_custom_photos',
        'mone_images',
        'custom_images',
        'mone_photos',
      ];
      for (const key of keysToTry) {
        const saved = localStorage.getItem(key);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            merged = { ...parsed, ...merged };
          } catch (e) {
            console.error(e);
          }
        }
      }
    } catch {
      // fallback
    }
    return merged;
  });

  // Comprehensive ID <-> Index Alias Mapping
  const idMap = {
    // Books
    'bookCover_borrowed-1': 'bookCover_0',
    'bookCover_borrowed-2': 'bookCover_1',
    'bookCover_borrowed-3': 'bookCover_2',
    'bookCover_borrowed-4': 'bookCover_3',
    'bookCover_0': 'bookCover_borrowed-1',
    'bookCover_1': 'bookCover_borrowed-2',
    'bookCover_2': 'bookCover_borrowed-3',
    'bookCover_3': 'bookCover_borrowed-4',

    // Movies
    'moviePoster_special_movie-special': 'moviePoster_special_0',
    'moviePoster_special_0': 'moviePoster_special_movie-special',
    'moviePoster_movie-1': 'moviePoster_0',
    'moviePoster_movie-2': 'moviePoster_1',
    'moviePoster_movie-3': 'moviePoster_2',
    'moviePoster_movie-4': 'moviePoster_3',
    'moviePoster_movie-5': 'moviePoster_4',
    'moviePoster_movie-6': 'moviePoster_5',
    'moviePoster_0': 'moviePoster_movie-1',
    'moviePoster_1': 'moviePoster_movie-2',
    'moviePoster_2': 'moviePoster_movie-3',
    'moviePoster_3': 'moviePoster_movie-4',
    'moviePoster_4': 'moviePoster_movie-5',
    'moviePoster_5': 'moviePoster_movie-6',

    // Series
    'moviePoster_series-1': 'moviePoster_6',
    'moviePoster_series-2': 'moviePoster_7',

    // Us Memories
    'usMemoryPhoto_us-1': 'usMemoryPhoto_0',
    'usMemoryPhoto_us-2': 'usMemoryPhoto_1',
    'usMemoryPhoto_us-3': 'usMemoryPhoto_2',
    'usMemoryPhoto_us-4': 'usMemoryPhoto_3',
    'usMemoryPhoto_us-5': 'usMemoryPhoto_4',
    'usMemoryPhoto_us-6': 'usMemoryPhoto_5',
    'usMemoryPhoto_0': 'usMemoryPhoto_us-1',
    'usMemoryPhoto_1': 'usMemoryPhoto_us-2',
    'usMemoryPhoto_2': 'usMemoryPhoto_us-3',
    'usMemoryPhoto_3': 'usMemoryPhoto_us-4',
    'usMemoryPhoto_4': 'usMemoryPhoto_us-5',
    'usMemoryPhoto_5': 'usMemoryPhoto_us-6',

    // Mone Story
    'moneStoryPhoto_story-1': 'moneStoryPhoto_0',
    'moneStoryPhoto_story-2': 'moneStoryPhoto_1',
    'moneStoryPhoto_story-3': 'moneStoryPhoto_2',
    'moneStoryPhoto_story-4': 'moneStoryPhoto_3',
    'moneStoryPhoto_story-5': 'moneStoryPhoto_4',
    'moneStoryPhoto_story-6': 'moneStoryPhoto_5',
    'moneStoryPhoto_story-7': 'moneStoryPhoto_6',
    'moneStoryPhoto_story-8': 'moneStoryPhoto_7',
    'moneStoryPhoto_0': 'moneStoryPhoto_story-1',
    'moneStoryPhoto_1': 'moneStoryPhoto_story-2',
    'moneStoryPhoto_2': 'moneStoryPhoto_story-3',
    'moneStoryPhoto_3': 'moneStoryPhoto_story-4',
    'moneStoryPhoto_4': 'moneStoryPhoto_story-5',
    'moneStoryPhoto_5': 'moneStoryPhoto_story-6',
    'moneStoryPhoto_6': 'moneStoryPhoto_story-7',
    'moneStoryPhoto_7': 'moneStoryPhoto_story-8',

    // Scrapbook (Same Wavelength)
    'scrapbookPhoto_wave-1': 'scrapbookPhoto_0',
    'scrapbookPhoto_wave-2': 'scrapbookPhoto_1',
    'scrapbookPhoto_wave-3': 'scrapbookPhoto_2',
    'scrapbookPhoto_0': 'scrapbookPhoto_wave-1',
    'scrapbookPhoto_1': 'scrapbookPhoto_wave-2',
    'scrapbookPhoto_2': 'scrapbookPhoto_wave-3',

    // Timeline / Archive
    'timelinePhoto_archive-1': 'timelinePhoto_0',
    'timelinePhoto_archive-2': 'timelinePhoto_1',
    'timelinePhoto_archive-3': 'timelinePhoto_2',
    'timelinePhoto_archive-4': 'timelinePhoto_3',
    'timelinePhoto_archive-5': 'timelinePhoto_4',
    'timelinePhoto_archive-6': 'timelinePhoto_5',
    'timelinePhoto_archive-7': 'timelinePhoto_6',
    'timelinePhoto_archive-8': 'timelinePhoto_7',
    'timelinePhoto_0': 'timelinePhoto_archive-1',
    'timelinePhoto_1': 'timelinePhoto_archive-2',
    'timelinePhoto_2': 'timelinePhoto_archive-3',
    'timelinePhoto_3': 'timelinePhoto_archive-4',
    'timelinePhoto_4': 'timelinePhoto_archive-5',
    'timelinePhoto_5': 'timelinePhoto_archive-6',
    'timelinePhoto_6': 'timelinePhoto_archive-7',
    'timelinePhoto_7': 'timelinePhoto_archive-8',
  };

  // Async load from IndexedDB on startup to catch large uploaded photos
  useEffect(() => {
    getAllFromIDB().then((idbImages) => {
      if (idbImages && Object.keys(idbImages).length > 0) {
        setCustomImages((prev) => ({ ...idbImages, ...prev }));
      }
    });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('mone_custom_images_v2', JSON.stringify(customImages));
      localStorage.setItem('mone_custom_images', JSON.stringify(customImages));
    } catch (e) {
      console.warn('LocalStorage limit reached for custom images, using IndexedDB fallback:', e);
    }
  }, [customImages]);

  // Helper to get image (custom override or default) with fuzzy alias matching
  const getImage = (key, defaultUrl) => {
    if (!key) return defaultUrl;
    if (customImages[key]) return customImages[key];

    const cleanKey = String(key);
    const candidateKeys = [cleanKey];

    if (idMap[cleanKey]) {
      candidateKeys.push(idMap[cleanKey]);
    }

    const prefixes = [
      'moviePoster_special_',
      'moviePoster_',
      'bookCover_',
      'usMemoryPhoto_',
      'moneStoryPhoto_',
      'scrapbookPhoto_',
      'timelinePhoto_',
      'childhoodPhoto_',
      'childhoodPhoto',
    ];

    for (const prefix of prefixes) {
      if (cleanKey.startsWith(prefix)) {
        const rawId = cleanKey.replace(prefix, '');
        candidateKeys.push(rawId);
        for (const p of prefixes) {
          candidateKeys.push(p + rawId);
        }
      } else {
        candidateKeys.push(prefix + cleanKey);
      }
    }

    for (const cand of candidateKeys) {
      if (customImages[cand]) return customImages[cand];
    }

    // Suffix / Index fallback check
    const cleanNumber = cleanKey.match(/\d+/)?.[0];
    if (cleanNumber) {
      for (const [storedKey, storedVal] of Object.entries(customImages)) {
        if (!storedVal) continue;
        if (storedKey.match(/\d+/)?.[0] === cleanNumber) {
          if (
            (cleanKey.includes('book') && storedKey.includes('book')) ||
            (cleanKey.includes('movie') && storedKey.includes('movie')) ||
            (cleanKey.includes('us') && storedKey.includes('us')) ||
            (cleanKey.includes('story') && storedKey.includes('story')) ||
            (cleanKey.includes('timeline') && storedKey.includes('timeline')) ||
            (cleanKey.includes('scrapbook') && storedKey.includes('scrapbook'))
          ) {
            return storedVal;
          }
        }
      }
    }

    return defaultUrl;
  };

  // Upload photo handler
  const setCustomImage = (key, fileOrBase64) => {
    const saveKey = (k, base64) => {
      setCustomImages((prev) => {
        const next = { ...prev, [k]: base64 };
        const alias = idMap[k];
        if (alias) {
          next[alias] = base64;
          saveToIDB(alias, base64);
        }
        return next;
      });
      saveToIDB(k, base64);
    };

    if (typeof fileOrBase64 === 'string') {
      saveKey(key, fileOrBase64);
    } else if (fileOrBase64 instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        saveKey(key, e.target.result);
      };
      reader.readAsDataURL(fileOrBase64);
    }
  };

  const removeCustomImage = (key) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    removeFromIDB(key);
  };

  const resetAllImages = () => {
    setCustomImages({});
    localStorage.removeItem('mone_custom_images_v2');
    localStorage.removeItem('mone_custom_images');
    clearIDB();
  };

  // Modals & Floating UI State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <ThemeAndImageContext.Provider
      value={{
        currentTheme,
        currentThemeId,
        setTheme: setCurrentThemeId,
        THEMES,
        customImages,
        getImage,
        setCustomImage,
        removeCustomImage,
        resetAllImages,
        isGalleryOpen,
        setIsGalleryOpen,
          isDarkMode,
          setIsDarkMode,
      }}
    >
      <div
        className="min-h-screen transition-colors duration-500 ease-in-out"
        style={{
          backgroundColor: currentTheme.bgPrimary,
          color: currentTheme.textDark,
        }}
      >
        {children}
      </div>
    </ThemeAndImageContext.Provider>
  );
}

export function useThemeAndImage() {
  const context = useContext(ThemeAndImageContext);
  if (!context) {
    throw new Error('useThemeAndImage must be used within ThemeAndImageProvider');
  }
  return context;
}
