import React, { useState } from 'react';
import { ShieldCheck, Heartbeat, Scales, ArrowUpRight } from '@phosphor-icons/react';

interface MissionBannerProps {
  onLearnMore: () => void;
}

export const MissionBanner: React.FC<MissionBannerProps> = ({ onLearnMore }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Evidenz & Lehrqualität',
      icon: Scales,
      summary: 'QSM-Mittel gezielt für studentische Tutorien, freie R- & SPSS-Lizenzen sowie moderne Testotheks-Ausstattung einsetzen.',
      action: 'Zu den Gremien'
    },
    {
      title: 'PsychThG-Reform & Fairness',
      icon: ShieldCheck,
      summary: 'Sicherung ausreichender KliP-Masterplätze in Baden-Württemberg und tarifliche Absicherung während der 5-jährigen Weiterbildung.',
      action: 'Zum Approbations-Fahrplan'
    },
    {
      title: 'Mentale Gesundheit & Entlastung',
      icon: Heartbeat,
      summary: 'Abbau von toxischem Prüfungsdruck, flexible Härtefallprüfungen und anonyme Beratungsangebote im Fachschaftsraum A001.',
      action: 'Zur Sprechstunde'
    }
  ];

  return (
    <section className="py-12 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-Bezel Statement Box (Directly inspired by Uni Heidelberg's Statement Banner) */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-stone-200/80 border border-stone-300 shadow-md">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#121316] text-white relative overflow-hidden">
            
            {/* Background watermark */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none select-none absolute -right-6 -bottom-8 text-8xl sm:text-9xl font-serif font-black text-white/[0.03]"
            >
              EVIDENZ
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Statement (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Fachschafts-Leitbild & Position</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Empirische Wissenschaft braucht <br className="hidden sm:inline" />
                  <span className="text-amber-300">starke studentische Stimmen.</span>
                </h2>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-[55ch]">
                  Als Verfasste Studierendenschaft setzen wir uns seit Jahrzehnten dafür ein, dass die Heidelberger Psychologie exzellente Forschung mit menschlichen Studienbedingungen und gelebter Solidarität vereint.
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {pillars.map((pillar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePillar(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePillar === idx
                          ? 'bg-[#85151D] text-white shadow-xs'
                          : 'bg-white/10 text-stone-300 hover:bg-white/20'
                      }`}
                    >
                      {pillar.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Interactive Pillar Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#85151D] text-white flex items-center justify-center font-bold">
                      {React.createElement(pillars[activePillar].icon, { size: 22, weight: 'bold' })}
                    </span>
                    <div>
                      <div className="text-xs text-amber-300 font-mono uppercase font-bold">
                        Schwerpunkt 0{activePillar + 1}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {pillars[activePillar].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {pillars[activePillar].summary}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={onLearnMore}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group"
                    >
                      <span>{pillars[activePillar].action}</span>
                      <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] font-mono text-stone-400">
                      Ruperto Carola Heidelberg
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
