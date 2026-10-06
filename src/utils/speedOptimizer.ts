import { loadedImageGlobalCache } from '../components/OptimizedImage';

// In-memory cache to keep decoded image instances alive and hot in browser RAM
const imageMemoryCache = new Map<string, HTMLImageElement>();

export const PRIORITY_IMAGES = [
  'https://i.ibb.co/ksT9pstk/Chat-GPT-Image-29-de-ago-de-2026-07-40-17.png',
  'https://i.ibb.co/QvzsLbLM/Screenshot-20260829-210037-Adobe-Acrobat.jpg',
  'https://i.ibb.co/xSbVVzc4/Screenshot-20260829-210055-Adobe-Acrobat.jpg',
  'https://i.ibb.co/LDvZV3v0/Screenshot-20260829-210115-Adobe-Acrobat.jpg',
  'https://i.ibb.co/r26sb2Tg/Chat-GPT-Image-24-de-set-de-2026-10-26-12.png',
  'https://i.ibb.co/nMhVd9Sv/Chat-GPT-Image-29-de-ago-de-2026-20-28-37.png',
  'https://i.ibb.co/27R0MsBF/Chat-GPT-Image-29-de-ago-de-2026-20-35-08.png'
];

export const SECONDARY_IMAGES = [
  'https://i.ibb.co/cX77hXxq/Chat-GPT-Image-29-de-ago-de-2026-20-37-24.png',
  'https://i.ibb.co/XkkxWdZ5/comprimida.png',
  'https://i.ibb.co/bg3pg300/Chat-GPT-Image-29-de-ago-de-2026-20-43-32.png',
  'https://i.ibb.co/FLt4HBRX/Chat-GPT-Image-29-de-ago-de-2026-20-46-58.png',
  'https://i.ibb.co/9HCcjhZt/Chat-GPT-Image-24-de-set-de-2026-10-33-16.png',
  'https://i.ibb.co/j9BFPsdd/Ejercicios-Adicionales-de-F-tbol-Sala.png',
  'https://i.ibb.co/svDT74sM/Chat-GPT-Image-29-de-ago-de-2026-22-24-02.png',
  'https://i.ibb.co/jPB4bR85/Screenshot-20260829-210132-Adobe-Acrobat.jpg',
  'https://i.ibb.co/RTGPgVdC/Screenshot-20260829-210150-Adobe-Acrobat.jpg',
  '/images/testimonial_1.webp',
  '/images/testimonial_2.webp',
  '/images/testimonial_3.webp',
  '/images/author.webp'
];

export const ALL_IMAGES = [...PRIORITY_IMAGES, ...SECONDARY_IMAGES];

/**
 * Preload and hardware-decode an image into browser memory
 */
export function preloadImage(src: string): Promise<void> {
  if (!src || typeof window === 'undefined') return Promise.resolve();

  if (imageMemoryCache.has(src) || loadedImageGlobalCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.decoding = 'async';

      const onDone = () => {
        loadedImageGlobalCache.add(src);
        imageMemoryCache.set(src, img);
        if ('decode' in img && typeof img.decode === 'function') {
          img.decode().then(() => resolve()).catch(() => resolve());
        } else {
          resolve();
        }
      };

      img.onload = onDone;
      img.onerror = () => resolve();
      img.src = src;

      if (img.complete && img.naturalWidth > 0) {
        onDone();
      }
    } catch {
      resolve();
    }
  });
}

/**
 * Ultra-fast non-blocking background preloader with parallel HTTP pipeline
 */
export function initSpeedOptimizer(): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. Immediately preload top critical images
    PRIORITY_IMAGES.forEach((src) => {
      preloadImage(src);
    });

    // 2. Preload remaining images quickly in parallel
    const preloadRest = () => {
      SECONDARY_IMAGES.forEach((src) => {
        preloadImage(src);
      });
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadRest, { timeout: 100 });
    } else {
      setTimeout(preloadRest, 10);
    }
  } catch {
    // Fail gracefully
  }
}
