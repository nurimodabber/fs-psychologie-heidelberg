import React from 'react';
import { ArrowUpRight, Compass, CalendarCheck, Users, Books } from '@phosphor-icons/react';

interface HeroProps {
  onExploreStudy: () => void;
  onExploreLife: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStudy, onExploreLife }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-stone-200/60 bg-[#FAF8F5]">
      {/* Heidelberg Watermark Background Typo (Design Cue Uni HD) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute -top-8 right-0 text-[11rem] lg:text-[16rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        SEMPER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* MetaTitle / Eyebrow (Uni Heidelberg Style) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 text-xs font-semibold text-stone-800 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Institut für Psychologie · Heidelberg</span>
            </div>

            {/* Main Headline (Max 2 lines, tight tracking) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121316] leading-[1.08]">
              Deine Stimme. <br className="hidden sm:inline" />
              <span className="text-[#85151D] underline decoration-[#85151D]/20 underline-offset-8">
                Dein Psychologie-Studium.
              </span>
            </h1>

            {/* Subtext (Max 20 words, concise, high impact) */}
            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-[56ch]">
              Die gewählte Fachschaftsvertretung für über 900 Studierende. Wir begleiten dich von der Orientierungswoche bis zur Approbation.
            </p>

            {/* Dual CTAs (Button-in-Button Architecture) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreStudy}
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-[#85151D] text-white font-medium text-sm hover:bg-[#660E15] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
              >
                <span>Studien-Guide & Approbation</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </button>

              <button
                onClick={onExploreLife}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-stone-800 border border-stone-300 font-medium text-sm hover:bg-stone-50 hover:border-stone-400 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Leben am Institut & Events</span>
              </button>
            </div>

            {/* Key Information Chips */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-stone-200/80">
              <div className="p-2.5 rounded-xl bg-stone-100/70 border border-stone-200/60">
                <div className="text-xl font-extrabold text-[#85151D]">920+</div>
                <div className="text-xs text-stone-600 font-medium">Studierende</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-100/70 border border-stone-200/60">
                <div className="text-xl font-extrabold text-[#121316]">18</div>
                <div className="text-xs text-stone-600 font-medium">Aktive Rät:innen</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-100/70 border border-stone-200/60">
                <div className="text-xl font-extrabold text-[#121316]">3</div>
                <div className="text-xs text-stone-600 font-medium">Studiengänge</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-100/70 border border-stone-200/60">
                <div className="text-xl font-extrabold text-emerald-700">Di 18h</div>
                <div className="text-xs text-stone-600 font-medium">Offene Sitzung</div>
              </div>
            </div>

          </div>

          {/* Right Column: Double-Bezel Editorial Campus Image (5 cols) */}
          <div className="lg:col-span-5">
            {/* Outer Shell: Doppelrand / Machined bezel */}
            <div className="p-2 sm:p-2.5 rounded-3xl bg-stone-200/70 border border-stone-300/80 shadow-md">
              {/* Inner Core */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-stone-900 group">
                <img
                  src="./images/hero-campus.jpg"
                  alt="Studierende im historischen Sandsteinhof des Psychologischen Instituts Heidelberg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                {/* Floating Tag over Image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/70 backdrop-blur-md text-white text-xs font-medium border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Hauptstraße 47-51 · Altstadt</span>
                </div>

                {/* Bottom Caption on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-300">
                    Institut für Psychologie · Heidelberg
                  </p>
                  <p className="text-sm font-semibold text-white drop-shadow-xs">
                    Traditionsreichste universitäre Psychologie in Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
