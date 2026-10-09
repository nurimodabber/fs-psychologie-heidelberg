import React, { useState } from 'react';
import { 
  FileArrowDown, 
  Eye, 
  ArrowsClockwise, 
  Sparkle, 
  ArrowUpRight,
  BookOpen
} from '@phosphor-icons/react';

export const BlackBoxFeature: React.FC = () => {
  // 3 perception states: 'neutral', 'top', 'bottom'
  const [perspective, setPerspective] = useState<'neutral' | 'top' | 'bottom'>('neutral');
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section id="blackbox" className="py-20 bg-[#F7F5F0] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute top-10 left-6 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        BLACKBOX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-stone-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Studentische Institutszeitschrift</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              BlackBox – Die Heidelberger Psycho-Zeitschrift
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mt-2 lg:mt-0 max-w-[45ch]">
            Unabhängig, forschend, meinungsstark. Von Studierenden für Studierende des Psychologischen Instituts.
          </p>
        </div>

        {/* 2-Column Split: Editorial Image & Magazine Details vs. Interactive Necker Illusion Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Magazine Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Cover Photo */}
              <div className="sm:col-span-5">
                <div className="p-2 rounded-2xl bg-stone-200/80 border border-stone-300 shadow-md">
                  <div className="rounded-xl overflow-hidden aspect-3/4 bg-stone-900 group">
                    <img 
                      src="./images/blackbox-mag.jpg" 
                      alt="BlackBox Ausgabe mit Necker-Würfel auf der Titelseite im Lesezimmer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Editorial Description */}
              <div className="sm:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#85151D]/10 text-[#85151D] text-xs font-bold font-mono">
                  AKTUELLE AUSGABE · WINTER 2026/27
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#121316] leading-tight">
                  Titelthema: Der Necker-Würfel & Bistabile Kognition
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  "Manche von euch kennen bereits die optische Täuschung des Necker-Würfels: Bei dieser Darstellung sieht man den Würfel entweder von oben oder von unten, jedoch niemals beides gleichzeitig. Ein Paradebeispiel für Heidelberger Gestalt- und Wahrnehmungsforschung."
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-200">
                  <div className="text-xs font-bold text-stone-800">Highlights im Heft:</div>
                  <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#85151D]"></span>
                      <span>Interview: Prof. Dr. Fiedler über Kognitionspsychologie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#85151D]"></span>
                      <span>Approbations-Reform: Erfahrungsberichte aus dem ersten KliP-Jahrgang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#85151D]"></span>
                      <span>Glossen, Comics & Institutstratsch aus Raum A001</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#85151D] text-white text-xs font-semibold hover:bg-[#660E15] transition-colors shadow-xs"
                  >
                    <FileArrowDown size={16} weight="bold" />
                    <span>Ausgabe als PDF (8.4 MB)</span>
                  </a>
                  <a
                    href="#mitmachen"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-medium hover:bg-stone-50 transition-colors"
                  >
                    <span>Artikel einreichen</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Necker Cube Perception Experiment (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border border-stone-300/80 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Eye size={20} className="text-[#85151D]" weight="bold" />
                  <span className="text-sm font-bold text-stone-900">
                    Interaktive Täuschung: Necker-Würfel
                  </span>
                </div>
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                    isRotating 
                      ? 'bg-red-50 border-[#85151D] text-[#85151D]' 
                      : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200'
                  }`}
                  title="Bistabile Rotation umschalten"
                >
                  <ArrowsClockwise size={14} className={isRotating ? 'animate-spin' : ''} />
                  <span>{isRotating ? 'Stopp' : 'Spin'}</span>
                </button>
              </div>

              {/* Necker Cube SVG Visualizer */}
              <div className="relative aspect-square max-w-[280px] mx-auto flex items-center justify-center p-4 bg-[#FAF8F5] rounded-2xl border border-stone-200">
                <svg 
                  viewBox="0 0 200 200" 
                  className={`w-full h-full transition-transform duration-700 ${isRotating ? 'animate-[spin_10s_linear_infinite]' : ''}`}
                >
                  {/* Front/Back Faces depending on perspective state */}
                  
                  {/* Shaded highlight for perspective A (Top View) */}
                  {perspective === 'top' && (
                    <polygon 
                      points="50,90 110,50 150,70 90,110" 
                      fill="rgba(133, 21, 29, 0.25)" 
                      stroke="#85151D" 
                      strokeWidth="1.5"
                    />
                  )}

                  {/* Shaded highlight for perspective B (Bottom View) */}
                  {perspective === 'bottom' && (
                    <polygon 
                      points="50,150 90,170 150,130 110,110" 
                      fill="rgba(21, 101, 192, 0.25)" 
                      stroke="#1565C0" 
                      strokeWidth="1.5"
                    />
                  )}

                  {/* The 12 Edges of the Necker Cube */}
                  {/* Square 1 (Front/Offset 1) */}
                  <rect 
                    x="50" 
                    y="90" 
                    width="60" 
                    height="60" 
                    fill="none" 
                    stroke={perspective === 'top' ? '#85151D' : '#121316'} 
                    strokeWidth={perspective === 'top' ? '2.5' : '2'} 
                  />

                  {/* Square 2 (Back/Offset 2) */}
                  <rect 
                    x="90" 
                    y="50" 
                    width="60" 
                    height="60" 
                    fill="none" 
                    stroke={perspective === 'bottom' ? '#1565C0' : '#121316'} 
                    strokeWidth={perspective === 'bottom' ? '2.5' : '2'} 
                  />

                  {/* Connecting Diagonal Edges */}
                  <line x1="50" y1="90" x2="90" y2="50" stroke="#121316" strokeWidth="2" />
                  <line x1="110" y1="90" x2="150" y2="50" stroke="#121316" strokeWidth="2" />
                  <line x1="50" y1="150" x2="90" y2="110" stroke="#121316" strokeWidth="2" />
                  <line x1="110" y1="150" x2="150" y2="110" stroke="#121316" strokeWidth="2" />

                  {/* Center fix point */}
                  <circle cx="100" cy="100" r="3" fill="#85151D" />
                </svg>
              </div>

              {/* Perspective Controller Pills */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold tracking-wider text-center">
                  Wahrnehmungsfokus wählen:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPerspective('neutral')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      perspective === 'neutral'
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Bistabil (Frei)
                  </button>
                  <button
                    onClick={() => setPerspective('top')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      perspective === 'top'
                        ? 'bg-[#85151D] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Blick von oben
                  </button>
                  <button
                    onClick={() => setPerspective('bottom')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      perspective === 'bottom'
                        ? 'bg-blue-800 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Blick von unten
                  </button>
                </div>
              </div>

              <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-200 leading-relaxed text-center">
                🧠 <em>Psychologischer Befund:</em> Das menschliche Gehirn kann die zwei Raumdeutungen nicht gleichzeitig fusionieren. Die Wahrnehmung kippt spontan ca. alle 3–5 Sekunden.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
