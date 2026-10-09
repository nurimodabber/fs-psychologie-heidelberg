import React, { useState, useEffect } from 'react';
import { 
  FileArrowDown, 
  Eye, 
  ArrowsClockwise, 
  Sparkle, 
  ArrowUpRight,
  BookOpen,
  Timer,
  X
} from '@phosphor-icons/react';

export const BlackBoxFeature: React.FC = () => {
  const [perspective, setPerspective] = useState<'neutral' | 'top' | 'bottom'>('neutral');
  const [isRotating, setIsRotating] = useState(false);
  const [articleModalOpen, setArticleModalOpen] = useState(false);

  // Bistable perception experiment tracker
  const [flips, setFlips] = useState<number[]>([]);
  const [lastFlipTime, setLastFlipTime] = useState<number>(Date.now());
  const [flipCount, setFlipCount] = useState<number>(0);

  const handleRegisterFlip = () => {
    const now = Date.now();
    const interval = (now - lastFlipTime) / 1000;
    if (interval > 0.5 && interval < 30) {
      setFlips(prev => [...prev.slice(-4), interval]);
    }
    setLastFlipTime(now);
    setFlipCount(prev => prev + 1);
  };

  const avgInterval = flips.length > 0 
    ? (flips.reduce((a, b) => a + b, 0) / flips.length).toFixed(1)
    : null;

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
                <div className="p-2.5 rounded-3xl bg-stone-200/80 border border-stone-300 shadow-md">
                  <div className="rounded-2xl overflow-hidden aspect-3/4 bg-stone-900 group">
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
                  „Manche von euch kennen bereits die optische Täuschung des Necker-Würfels: Bei dieser Darstellung sieht man den Würfel entweder von oben oder von unten, jedoch niemals beides gleichzeitig. Ein Paradebeispiel für Heidelberger Gestalt- und Wahrnehmungsforschung.“
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-200">
                  <div className="text-xs font-bold text-stone-800">Highlights im aktuellen Heft:</div>
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
                  <button
                    onClick={() => setArticleModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#85151D] text-white text-xs font-semibold hover:bg-[#660E15] transition-colors shadow-xs cursor-pointer"
                  >
                    <BookOpen size={16} weight="bold" />
                    <span>Artikel-Vorschau lesen</span>
                  </button>
                  <a
                    href="#faq"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-medium hover:bg-stone-50 transition-colors"
                  >
                    <FileArrowDown size={14} weight="bold" />
                    <span>PDF (8.4 MB)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Necker Cube Perception Experiment (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border border-stone-300/80 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Eye size={20} className="text-[#85151D]" weight="bold" />
                  <span className="text-sm font-bold text-stone-900">
                    Kognitions-Labor: Necker-Würfel
                  </span>
                </div>
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
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
              <div className="relative aspect-square max-w-[260px] mx-auto flex items-center justify-center p-4 bg-[#FAF8F5] rounded-2xl border border-stone-200">
                <svg 
                  viewBox="0 0 200 200" 
                  className={`w-full h-full transition-transform duration-700 ${isRotating ? 'animate-[spin_10s_linear_infinite]' : ''}`}
                >
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

                  {/* Square 1 */}
                  <rect 
                    x="50" 
                    y="90" 
                    width="60" 
                    height="60" 
                    fill="none" 
                    stroke={perspective === 'top' ? '#85151D' : '#121316'} 
                    strokeWidth={perspective === 'top' ? '2.5' : '2'} 
                  />

                  {/* Square 2 */}
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

                  {/* Center fixation point */}
                  <circle cx="100" cy="100" r="3" fill="#85151D" />
                </svg>
              </div>

              {/* Perspective Controller Pills */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPerspective('neutral')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    perspective === 'neutral'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Bistabil (Frei)
                </button>
                <button
                  onClick={() => setPerspective('top')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    perspective === 'top'
                      ? 'bg-[#85151D] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Blick von oben
                </button>
                <button
                  onClick={() => setPerspective('bottom')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    perspective === 'bottom'
                      ? 'bg-blue-800 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Blick von unten
                </button>
              </div>

              {/* Live Bistability Flip Tracker */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-800 flex items-center gap-1.5">
                    <Timer size={15} className="text-[#85151D]" />
                    <span>Persönlicher Kipp-Test:</span>
                  </span>
                  <span className="font-mono text-[11px] text-stone-500">
                    {flipCount > 0 ? `${flipCount} Wechsel registriert` : 'Fixiere den Mittelpunkt'}
                  </span>
                </div>

                <button
                  onClick={handleRegisterFlip}
                  className="w-full py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-xs font-bold text-stone-900 transition-colors shadow-2xs active:scale-[0.98] cursor-pointer"
                >
                  👁️ Jetzt ist meine Wahrnehmung gekippt!
                </button>

                {avgInterval && (
                  <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded-xl border border-emerald-200 text-center font-medium">
                    Deine gemessene Umkehrrate: <strong>~{avgInterval} Sekunden</strong> pro Wechsel (typischer Normalwert: 3–5s).
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Article Excerpt Modal */}
      {articleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl border border-stone-300 max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#85151D] font-bold">BlackBox Magazin · Ausgabe 03</span>
                <h3 className="text-xl font-extrabold text-[#121316] mt-1">
                  Der Necker-Würfel in der Kognitionswissenschaft
                </h3>
              </div>
              <button
                onClick={() => setArticleModalOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
              <p>
                <em>Aus dem Leitartikel von Clara & Felix (Redaktion BlackBox):</em>
              </p>
              <p>
                „Kaum ein geometrisches Gebilde hat Psycholog:innen und Neurowissenschaftler:innen so nachhaltig fasziniert wie die 1832 vom Schweizer Kristallographen Louis Albert Necker beschriebene Zeichnung. Obwohl die Linien auf dem Papier vollkommen unveränderlich bleiben, schlägt unsere interne neuronale Repräsentation unweigerlich Purzelbäume.“
              </p>
              <p>
                „In der Heidelberger Wahrnehmungsforschung dient dieser Reiz als Modell für sogenannte *Predictive Processing*-Theorien. Unser Gehirn ist kein passiver Empfänger sensorischer Daten, sondern eine generative Vorhersagemaschine, die ständig Hypothesen über die dreidimensionale Beschaffenheit der Welt aufstellt.“
              </p>
              <p>
                „Wenn zwei Hypothesen mathematisch gleich wahrscheinlich sind, weigert sich unser Cortex, einen dauerhaften Kompromiss einzugehen. Nach einigen Sekunden synaptischer Ermüdung kippt das System in die alternative Deutung.“
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-mono">Institut für Psychologie Heidelberg</span>
              <button
                onClick={() => setArticleModalOpen(false)}
                className="px-5 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
