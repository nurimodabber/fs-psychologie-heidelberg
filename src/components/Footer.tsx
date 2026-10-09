import React from 'react';
import { ArrowUp, Heart, InstagramLogo, EnvelopeSimple } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121316] text-[#FAF8F5] border-t border-white/10 relative overflow-hidden">
      {/* University Latin Motto Background Typo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute -bottom-10 right-0 text-[9rem] lg:text-[14rem] font-serif font-black text-white/[0.02] tracking-tighter leading-none"
      >
        HEIDELBERG
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Institute Brand & Motto (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#85151D] flex items-center justify-center text-white font-serif text-2xl font-bold shadow-sm">
                Ψ
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Fachschaft Psychologie
                </span>
                <div className="text-base font-bold text-white tracking-tight">
                  Universität Heidelberg
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-[36ch]">
              Die gesetzliche Interessenvertretung der Studierenden am Psychologischen Institut der Ruprecht-Karls-Universität Heidelberg.
            </p>

            <div className="text-xs font-serif italic text-stone-400">
              „Semper Apertus – Stets offen dem Geist der Wissenschaft seit 1386.“
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/psyheidelberg/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#85151D] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="bold" />
              </a>
              <a
                href="mailto:fachschaft@psychologie.uni-heidelberg.de"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#85151D] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="E-Mail"
              >
                <EnvelopeSimple size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
              Navigation
            </h4>
            <ul className="text-xs text-stone-300 space-y-2">
              <li>
                <a href="#studium" className="hover:text-amber-300 transition-colors">
                  Bachelor (B.Sc.) & EKS
                </a>
              </li>
              <li>
                <a href="#studium" className="hover:text-amber-300 transition-colors">
                  Master KliP & Approbation
                </a>
              </li>
              <li>
                <a href="#blackbox" className="hover:text-amber-300 transition-colors">
                  BlackBox Magazin
                </a>
              </li>
              <li>
                <a href="#leben" className="hover:text-amber-300 transition-colors">
                  Leben am Institut & Events
                </a>
              </li>
              <li>
                <a href="#hopo" className="hover:text-amber-300 transition-colors">
                  Gremien & Hochschulpolitik
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Altklausuren, FAQ & Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: University Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
              Uni-Portale & Services
            </h4>
            <ul className="text-xs text-stone-300 space-y-2">
              <li>
                <a 
                  href="https://heico.uni-heidelberg.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  heiCO – Campus-Management ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://moodle.uni-heidelberg.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Moodle – Lernplattform ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.psychologie.uni-heidelberg.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Institut für Psychologie (Offiziell) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.stura.uni-heidelberg.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  StuRa Heidelberg (Verfasste Studierendenschaft) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ub.uni-heidelberg.de" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Universitätsbibliothek (UB) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Scroll Action (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#85151D] text-stone-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs font-medium cursor-pointer"
            >
              <span>Nach oben</span>
              <ArrowUp size={14} weight="bold" />
            </button>
            <div className="text-[11px] text-stone-500 font-mono mt-6 lg:mt-0 text-left lg:text-right">
              Hauptstr. 47–51<br />
              69117 Heidelberg
            </div>
          </div>

        </div>

        {/* Sub-Footer Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Fachschaft Psychologie Heidelberg.</span>
            <span>·</span>
            <span>Gestaltet mit Liebe für empirische Wissenschaft.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#impressum" className="hover:text-stone-300 transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-stone-300 transition-colors">
              Datenschutz
            </a>
            <a href="#barrierefreiheit" className="hover:text-stone-300 transition-colors">
              Barrierefreiheit
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
