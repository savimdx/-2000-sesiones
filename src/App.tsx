import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  Star,
  Trophy,
  ShieldCheck,
  BookOpen,
  Check,
  Plus,
  Minus,
  HelpCircle,
  Flame,
  ArrowRight,
  Eye,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';

// Custom components
import HeaderBanner from './components/HeaderBanner';
import OptimizedImage from './components/OptimizedImage';
const PurchaseModal = lazy(() => import('./components/PurchaseModal'));
const NotificationToast = lazy(() => import('./components/NotificationToast'));
import { useCurrency } from './context/CurrencyContext';

// Static Data
import {
  HERO_BULLETS,
  BENEFITS,
  BONUSES,
  TESTIMONIALS,
  FAQS,
  CHECKOUT_URL
} from './data';

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Ignored
    }
  }
};

const PRODUCT_IMAGES = [
  {
    src: "/images/print_sesion_1.webp",
    fallback: "https://i.ibb.co/QvzsLbLM/Screenshot-20260829-210037-Adobe-Acrobat.jpg",
    alt: "Ficha de entrenamiento técnico"
  },
  {
    src: "/images/print_sesion_2.webp",
    fallback: "https://i.ibb.co/xSbVVzc4/Screenshot-20260829-210055-Adobe-Acrobat.jpg",
    alt: "Ficha de ejercicios tácticos con balón"
  },
  {
    src: "/images/print_sesion_3.webp",
    fallback: "https://i.ibb.co/LDvZV3v0/Screenshot-20260829-210115-Adobe-Acrobat.jpg",
    alt: "Ficha de preparación física integrada"
  },
  {
    src: "/images/print_sesion_4.webp",
    fallback: "https://i.ibb.co/jPB4bR85/Screenshot-20260829-210132-Adobe-Acrobat.jpg",
    alt: "Ficha de situaciones de finalización"
  },
  {
    src: "/images/print_sesion_5.webp",
    fallback: "https://i.ibb.co/RTGPgVdC/Screenshot-20260829-210150-Adobe-Acrobat.jpg",
    alt: "Ficha de juego de posición y rondos"
  }
];

declare global {
  interface Window {
    redirectWithParams: (destination: string) => void;
  }
}

export function getUrlWithParams(destination: string): string {
  if (typeof window === 'undefined') return destination;
  const currentParams = window.location.search;

  if (currentParams) {
    const separator = destination.includes("?") ? "&" : "?";
    return destination + separator + currentParams.substring(1);
  }

  return destination;
}

export function redirectWithParams(destination: string) {
  const finalUrl = getUrlWithParams(destination);
  try {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
  } catch (err) {
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  window.location.href = finalUrl;
}

if (typeof window !== 'undefined') {
  window.redirectWithParams = redirectWithParams;
}

interface UtmifyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  baseUrl: string;
  children?: React.ReactNode;
}

function UtmifyLink({ baseUrl, children, onClick, className, ...props }: UtmifyLinkProps) {
  const finalHref = getUrlWithParams(baseUrl);

  const handleWarmup = () => {
    try {
      const target = getUrlWithParams(baseUrl);
      if (!document.querySelector(`link[data-warmup="${target}"]`)) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = target;
        link.setAttribute('data-warmup', target);
        document.head.appendChild(link);
      }
    } catch (e) {
      // Ignored
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    const targetUrl = getUrlWithParams(baseUrl);

    try {
      if (window.self !== window.top) {
        e.preventDefault();
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
        return;
      }
    } catch (err) {
      e.preventDefault();
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      window.location.href = targetUrl;
    }
  };

  return (
    <a
      href={finalHref}
      onClick={handleClick}
      onMouseEnter={handleWarmup}
      onTouchStart={handleWarmup}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export default function App() {
  const { formattedPrice, convertAndFormat } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(1800); // 30 minutes in seconds
  const checkoutUrl = CHECKOUT_URL;

  useEffect(() => {
    document.title = "+2000 Sesiones de Entrenamiento de Fútbol";
    const now = Math.floor(Date.now() / 1000);
    const newExpiration = now + 1800;
    safeLocalStorage.setItem('urgency_timer_30m', newExpiration.toString());
    setTimeLeft(1800);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const now = Math.floor(Date.now() / 1000);
          safeLocalStorage.setItem('urgency_timer_30m', (now + 1800).toString());
          return 1800;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* SECCIÓN 0: Sticky Countdown Banner */}
      <HeaderBanner timeLeft={timeLeft} />

      {/* Abstract radial background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/30 via-white to-white pointer-events-none -z-10" />

      {/* --- SECCIÓN 1: HERO --- */}
      <header className="relative py-8 md:py-14 lg:py-16 px-4 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 flex flex-col items-center">
          {/* Top category pill */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>METODOLOGÍA PRÁCTICA PARA ENTRENADORES</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1] max-w-4xl mx-auto break-words">
            +2000 Sesiones de <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600">
              Entrenamiento de Fútbol
            </span> <br className="hidden sm:inline" />
            <span className="inline-block">Listas para Aplicar</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Más de 2000 sesiones de entrenamiento listas para aplicar en el campo, diseñadas para ahorrar horas de planificación y ayudar a los entrenadores a trabajar la técnica, táctica, físico y toma de decisiones de sus jugadores.
          </p>

          {/* Hero Pack Image */}
          <div className="my-6 flex justify-center w-full max-w-3xl sm:max-w-4xl relative mx-auto">
            <OptimizedImage 
              src="/images/hero_2000_sesiones.webp" 
              fallbackSrc="https://i.ibb.co/ksT9pstk/Chat-GPT-Image-29-de-ago-de-2026-07-40-17.png"
              fallbackSources={[
                "/images/hero_2000_sesiones.webp",
                "https://i.ibb.co/ksT9pstk/Chat-GPT-Image-29-de-ago-de-2026-07-40-17.png",
                "/images/hero_pack.webp"
              ]}
              alt="+2000 Sesiones de Entrenamiento de Fútbol Listas para Aplicar" 
              className="w-full max-w-2xl h-auto max-h-[550px] object-contain rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="600"
              height="600"
            />
          </div>

          {/* Credibility checklist bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2 w-full">
            {HERO_BULLETS.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-base text-slate-900 font-bold bg-white border border-emerald-100/80 shadow-sm rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md flex items-center justify-center text-sm font-black flex-shrink-0">
                  ✓
                </div>
                <span className="tracking-tight">{bullet}</span>
              </li>
            ))}
          </ul>



        </div>
      </header>

      {/* --- SECCIÓN 3: TRANSFORMACIÓN (The difference between an improviser and a real professional coach) --- */}
      <section className="py-14 md:py-20 px-4 border-t border-b border-slate-100 bg-gradient-to-b from-slate-50 via-emerald-50/10 to-slate-50 relative overflow-hidden lazy-render-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Centralized Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-flex text-[10px] bg-amber-100 text-amber-800 border border-amber-200 px-3.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">
              LA VERDADERA TRANSFORMACIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              La diferencia entre un entrenador que improvisa y un verdadero profesional
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Cerca del <span className="font-bold text-slate-800">92% de los entrenadores</span> pierden hasta 6 horas por semana buscando ejercicios aislados en internet o redes sociales. Con esta biblioteca estructurada, dispones de sesiones listas para aplicar que elevan el nivel táctico, técnico y físico desde el primer día.
            </p>
            
            <div className="inline-flex flex-col bg-white border border-slate-200/60 shadow-sm px-6 py-4 rounded-2xl items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
              <span className="text-3xl text-emerald-600 mb-1">🏅</span>
              <span className="text-center">Validado y utilizado por entrenadores y formadores de fútbol</span>
            </div>
          </div>

          {/* Centralized Grid list - 3-column bento style with premium hover cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={benefit.id} 
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between hover:-translate-y-0.5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center text-xs font-extrabold font-mono mb-4 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* --- SECCIÓN 4: BONOS EXCLUSIVOS --- */}
      <section className="py-10 md:py-12 px-4 bg-gradient-to-b from-white to-emerald-50/20 border-t border-slate-100 lazy-render-section">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest font-mono shadow-md animate-badge-pulse">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-flame-bounce flex-shrink-0" /> 10 BONOS EXCLUSIVOS INCLUIDOS HOY
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Llévate Hoy Estos 10 Bonos Exclusivos (100 % Gratis)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Accede a la biblioteca completa de entrenamientos hoy y recibe como regalo estos diez manuales metodológicos, videotecas y recursos tácticos de alto valor.
            </p>
          </div>

          {/* Bonuses layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {BONUSES.map((bonus, index) => (
              <div
                key={bonus.id}
                className="bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between p-5 relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
              >
                <div>
                  {/* Image container on top */}
                  {bonus.image ? (
                    <div className="flex items-center justify-center mb-5 h-[320px] sm:h-[360px] w-full p-3 overflow-hidden bg-slate-50/50 border border-slate-100/80 rounded-2xl relative group-hover:bg-slate-100/30 transition-colors">
                      <OptimizedImage 
                        src={bonus.image} 
                        fallbackSrc={bonus.fallbackImage}
                        fallbackSources={bonus.fallbackSources}
                        alt={bonus.title} 
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-md transform transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading={index < 6 ? "eager" : "lazy"}
                        fetchPriority={index < 6 ? "high" : "auto"}
                        decoding="async"
                        width="320"
                        height="320"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-between mb-5 h-[320px] sm:h-[360px] text-center relative overflow-hidden shadow-lg group-hover:shadow-emerald-950/20 transition-all">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
                      <div className="w-full flex justify-between items-center relative z-10">
                        <span className="text-[9px] font-mono tracking-widest text-amber-400 font-extrabold uppercase bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-full">
                          BONO #{bonus.number}
                        </span>
                        <span className="text-[9px] font-bold tracking-wider text-emerald-400 uppercase">
                          PDF DIGITAL
                        </span>
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-2">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/25 mb-4 group-hover:scale-110 transition-transform">
                          <BookOpen className="w-7 h-7 stroke-[2.5]" />
                        </div>
                        <h4 className="text-sm sm:text-base font-black text-white leading-snug max-w-[220px]">
                          {bonus.title}
                        </h4>
                        <span className="text-[11px] text-emerald-300 font-semibold mt-1.5">
                          {bonus.tag}
                        </span>
                      </div>

                      <div className="w-full relative z-10 pt-2 border-t border-slate-700/50 flex items-center justify-center gap-1.5 text-[10px] text-slate-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Acceso Inmediato en Descarga
                      </div>
                    </div>
                  )}

                  {/* Title and Badge Row */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-2.5 justify-center sm:justify-start text-center sm:text-left">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[11px] flex-shrink-0 sm:mt-1">
                      {bonus.number}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug text-center sm:text-left">
                      {bonus.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 text-center sm:text-left pl-0">
                    {bonus.description}
                  </p>
                </div>

                {/* Pricing / original value breakdown in footer */}
                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold tracking-wider uppercase font-sans">VALOR REAL:</span>
                    <span className="text-sm font-bold text-red-500 line-through">{convertAndFormat(bonus.originalPrice)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-600 block font-bold tracking-wider uppercase font-sans">¡HOY GRATIS!</span>
                    <span className="text-base font-extrabold text-emerald-600 uppercase tracking-tight">¡GRATIS!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 6: APERÇU DU PRODUIT (Descubre el Interior del Pack) --- */}
      <section className="pt-4 pb-10 md:pt-5 md:pb-12 px-4 bg-[#f8fafc] border-t border-b border-slate-100 overflow-hidden lazy-render-section" id="muestra">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1.5 rounded-full font-black text-[11px] sm:text-xs uppercase tracking-widest font-mono shadow-sm">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span>VISTA PREVIA DEL PRODUCTO</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            Descubre el <span className="text-emerald-600">Interior del Pack</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Visualiza la calidad gráfica, organización metódica y claridad de las sesiones listas para aplicar directamente en el campo de entrenamiento.
          </p>

          {/* Infinite Scroll Area */}
          <div className="relative overflow-hidden w-full py-4">
            {/* Gradient overlay left/right for elegant fades */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {/* First track */}
              <div className="flex gap-6">
                {PRODUCT_IMAGES.map((imgItem, idx) => (
                  <div
                    key={`track1-${idx}`}
                    className="w-[240px] sm:w-[320px] h-[340px] sm:h-[450px] shrink-0 border border-slate-200/80 shadow-md hover:shadow-xl rounded-2xl overflow-hidden bg-white transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center p-2 relative"
                  >
                    <OptimizedImage 
                      src={imgItem.src} 
                      fallbackSrc={imgItem.fallback}
                      alt={imgItem.alt || `Página de ejemplo ${idx + 1}`} 
                      className="w-full h-full object-contain bg-white rounded-lg select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      width="320"
                      height="450"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate track for seamless infinite scroll */}
              <div className="flex gap-6">
                {PRODUCT_IMAGES.map((imgItem, idx) => (
                  <div
                    key={`track2-${idx}`}
                    className="w-[240px] sm:w-[320px] h-[340px] sm:h-[450px] shrink-0 border border-slate-200/80 shadow-md hover:shadow-xl rounded-2xl overflow-hidden bg-white transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center p-2 relative"
                  >
                    <OptimizedImage 
                      src={imgItem.src} 
                      fallbackSrc={imgItem.fallback}
                      alt={imgItem.alt ? `${imgItem.alt} - copia` : `Página de ejemplo ${idx + 1} - copia`} 
                      className="w-full h-full object-contain bg-white rounded-lg select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      width="320"
                      height="450"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECCIÓN 7: TESTIMONIOS --- */}
      <section className="pt-4 pb-10 md:pt-5 md:pb-12 px-4 bg-white border-b border-slate-100 lazy-render-section">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
            <span className="text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-bold uppercase tracking-widest font-mono">
              COMUNIDAD Y OPINIONES REALES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Testimonios reales de entrenadores en el campo
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Únete a cientos de directores técnicos, formadores y preparadores que ya aplican esta metodología con éxito en sus equipos.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="relative overflow-hidden w-full py-4">
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {/* First track */}
              <div className="flex gap-6">
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={`track1-${testimonial.id}`}
                    className="w-[280px] sm:w-[350px] shrink-0 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between relative shadow-md"
                  >
                    <div>
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4 text-amber-400">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Profile detail */}
                    <div className="border-t border-slate-200 pt-4 mt-6 flex items-center gap-3">
                      {testimonial.avatarUrl ? (
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-emerald-200 relative overflow-hidden flex-shrink-0">
                          <OptimizedImage
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                            width="40"
                            height="40"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-emerald-600 font-mono text-sm flex-shrink-0">
                          {testimonial.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{testimonial.name}</h4>
                        <p className="text-[10px] text-slate-500 font-medium">{testimonial.role}</p>
                        <span className="inline-block bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded mt-1">
                          {testimonial.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicate track for seamless infinite scroll */}
              <div className="flex gap-6">
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={`track2-${testimonial.id}`}
                    className="w-[280px] sm:w-[350px] shrink-0 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between relative shadow-md"
                  >
                    <div>
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4 text-amber-400">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Profile detail */}
                    <div className="border-t border-slate-200 pt-4 mt-6 flex items-center gap-3">
                      {testimonial.avatarUrl ? (
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-emerald-200 relative overflow-hidden flex-shrink-0">
                          <OptimizedImage
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                            width="40"
                            height="40"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-emerald-600 font-mono text-sm flex-shrink-0">
                          {testimonial.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{testimonial.name}</h4>
                        <p className="text-[10px] text-slate-500 font-medium">{testimonial.role}</p>
                        <span className="inline-block bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded mt-1">
                          {testimonial.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 5: OFERTA ESPECIAL (Special pricing pitch) --- */}
      <section id="oferta" className="py-10 md:py-12 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 relative lazy-render-section">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto">

          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight max-w-4xl mx-auto mb-6 text-center tracking-tight">
            ¡La Biblioteca de Entrenamiento de Fútbol que Todo Entrenador Necesita!
          </h2>

          {/* Offer card with orange border */}
          <div className="bg-white border-2 border-orange-500 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(249,115,22,0.12)] relative">
            
            {/* OFERTA ESPECIAL overlap badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-black text-[10px] sm:text-xs uppercase px-5 py-1.5 rounded-full tracking-widest shadow-md">
              OFERTA ESPECIAL
            </div>

            <div className="text-center space-y-1 mb-8 pt-4">
              <h3 className="text-2xl sm:text-3xl font-black text-orange-600 tracking-wide">
                +2000 Sesiones de Entrenamiento de Fútbol Listas para Aplicar
              </h3>
              <p className="text-xs sm:text-sm text-orange-500 font-semibold italic">
                Todo lo que necesitas para planificar entrenamientos variados, organizados y profesionales sin perder horas buscando ejercicios.
              </p>
            </div>

            {/* Product image */}
            <div className="flex justify-center mb-8 relative w-full min-h-[300px] sm:min-h-[420px] md:min-h-[480px]">
              <OptimizedImage
                src="/images/hero_2000_sesiones.webp"
                fallbackSrc="https://i.ibb.co/ksT9pstk/Chat-GPT-Image-29-de-ago-de-2026-07-40-17.png"
                fallbackSources={[
                  "/images/hero_2000_sesiones.webp",
                  "https://i.ibb.co/ksT9pstk/Chat-GPT-Image-29-de-ago-de-2026-07-40-17.png",
                  "/images/hero_pack.webp"
                ]}
                alt="+2000 Sesiones de Entrenamiento de Fútbol Listas para Aplicar"
                referrerPolicy="no-referrer"
                className="max-w-full h-full max-h-[500px] object-contain rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="480"
              />
            </div>

            {/* Checklist of what is included */}
            <div className="max-w-md mx-auto space-y-3.5 mb-8 text-left text-xs sm:text-sm font-bold text-slate-800">
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>
                  +2000 Sesiones de Entrenamiento de Fútbol Listas para Aplicar{" "}
                  <span className="text-red-500 line-through whitespace-nowrap font-bold">
                    (Valorado en {convertAndFormat(49)})
                  </span>
                </span>
              </div>
              {BONUSES.map((bonus) => (
                <div key={bonus.id} className="flex items-start gap-3">
                  <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                  <span>
                    Bono {bonus.number}: {bonus.title}{" "}
                    <span className="text-red-500 line-through whitespace-nowrap font-bold">
                      (Valorado en {convertAndFormat(bonus.originalPrice)})
                    </span>
                  </span>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>Acceso digital inmediato tras la compra</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>Acceso de por vida sin cuotas ni suscripciones</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>Actualizaciones futuras incluidas sin costo adicional</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>Soporte técnico y atención personalizada para entrenadores</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4.5 h-4.5 text-orange-500 shrink-0 stroke-[3.5] mt-0.5" />
                <span>GARANTÍA INCONDICIONAL DE 7 DÍAS</span>
              </div>
            </div>

            {/* Divider */}
            <div id="scroll-target-oferta" className="h-[1px] bg-slate-100 max-w-md mx-auto my-6" />

            {/* Price section */}
            <div id="precio-oferta" className="text-center space-y-4 mb-8 max-w-2xl mx-auto w-full px-2">
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-bold text-slate-500">
                <span>Antes <span className="text-red-500 font-extrabold line-through text-base sm:text-lg md:text-xl">{convertAndFormat(69)}</span></span>
                <span className="bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  -90%
                </span>
              </div>
              <div className="w-full flex items-center justify-center py-2 sm:py-5 overflow-hidden">
                <div
                  style={{ fontFamily: "'Montserrat', 'Arial Black', Impact, sans-serif" }}
                  className="text-center select-none text-orange-500 font-black tracking-tight whitespace-nowrap text-[2.2rem] min-[360px]:text-[2.7rem] min-[410px]:text-[3.25rem] sm:text-6xl md:text-7xl leading-none"
                >
                  {formattedPrice}
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 font-medium">
                (Puedes pagar en tu moneda local)
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-slate-100 max-w-md mx-auto my-6" />

            {/* CTA Button */}
            <div className="max-w-md mx-auto space-y-4">
              <UtmifyLink
                baseUrl={checkoutUrl}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black py-4 px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_8px_24px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                QUIERO ACCEDER AHORA <ArrowRight className="w-5 h-5" />
              </UtmifyLink>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-4 flex items-center justify-center gap-1.5">
                <span>🔥</span> Oferta promocional por tiempo limitado
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN 8: GARANTÍA INCONDICIONAL DE 7 DÍAS --- */}
      <section id="garantia" className="py-12 md:py-16 px-4 bg-gradient-to-b from-white via-amber-50/20 to-white border-t border-slate-100 lazy-render-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(245,158,11,0.08)] relative">
            
            {/* Guarantee Badge */}
            <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs uppercase px-5 sm:px-6 py-1 sm:py-1.5 rounded-full tracking-widest shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap w-max max-w-[95%] z-10 border border-amber-600/30">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 flex-shrink-0" />
              <span className="whitespace-nowrap font-black">GARANTÍA DE 7 DÍAS - 100% SATISFACCIÓN</span>
            </div>

            <div className="flex flex-col items-center text-center gap-6 pt-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-500/10 border-2 border-amber-400/40 flex items-center justify-center flex-shrink-0 shadow-inner">
                <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-amber-500 animate-pulse" />
              </div>

              <div className="max-w-2xl mx-auto space-y-3 text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Pruébalo Durante 7 Días Sin Ningún Riesgo
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto text-center">
                  Estamos tan convencidos del valor y la practicidad de estas más de 2000 sesiones que asumimos todo el riesgo por ti. Descarga el material, aplica los ejercicios con tu plantilla y comprueba la mejora sobre el césped. Si durante los primeros 7 días consideras que el pack no cumple con tus expectativas, te reembolsamos <span className="font-bold text-slate-900">el 100% de tu dinero</span> de inmediato, sin preguntas.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs sm:text-sm font-bold text-slate-800">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Reembolso del 100%
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Cero Riesgo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Acceso Inmediato
                  </span>
                </div>
              </div>
            </div>

            {/* CTA inside Guarantee card */}
            <div className="mt-8 pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">¿Listo para transformar tus entrenamientos?</span>
                <span className="text-[11px] text-slate-500">Prueba todo el material durante 7 días con total tranquilidad</span>
              </div>
              <UtmifyLink
                baseUrl={checkoutUrl}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black py-3.5 px-7 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 hover:-translate-y-0.5 text-center shrink-0 cursor-pointer"
              >
                QUIERO ACCEDER AHORA <ArrowRight className="w-4 h-4" />
              </UtmifyLink>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN: PREGUNTAS FRECUENTES (FAQ) --- */}
      <section id="faq" className="py-10 md:py-12 px-4 bg-white lazy-render-section">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-6">
            <span className="text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-bold uppercase tracking-widest font-mono">
              RESOLVEMOS TUS DUDAS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm text-slate-600">
              ¿Tienes dudas sobre la Biblioteca de Entrenamiento? Aquí tienes las respuestas para resolver todas tus preguntas.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-950 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100 border-t border-slate-200/40 p-5' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Box below FAQs */}
          <div className="mt-8 text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <UtmifyLink
                baseUrl={checkoutUrl}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_8px_24px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 hover:-translate-y-0.5 group border border-emerald-400 text-center cursor-pointer"
              >
                QUIERO EMPEZAR A ENTRENAR MEJOR <ArrowRight className="w-4 h-4" />
              </UtmifyLink>
            </div>
            <div className="space-y-1.5 pt-2">
              <p className="text-sm md:text-base text-slate-600 font-medium">
                ¿Tienes más preguntas? Escríbenos a soporte por correo electrónico:
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800 tracking-tight break-all">
                soporte@entrenamientosdefutbol.online
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 10: FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="font-extrabold tracking-tight text-slate-900 uppercase text-sm">
              +2000 SESIONES DE ENTRENAMIENTO DE FÚTBOL
            </span>
          </div>

          <div className="h-[1px] bg-slate-200 my-4" />

          <p className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} +2000 Sesiones de Entrenamiento de Fútbol. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-slate-400 max-w-xl mx-auto">
            Material metodológico y práctico de entrenamiento deportivo digital diseñado para técnicos, formadores y educadores de fútbol.
          </p>

        </div>
      </footer>

      {/* Checkout Simulator Dialog Portal Modal */}
      <Suspense fallback={null}>
        {isModalOpen && <PurchaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </Suspense>

      {/* Floating social proof notification toast */}
      <Suspense fallback={null}>
        <NotificationToast />
      </Suspense>
    </div>
  );
}
