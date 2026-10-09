import React, { useState } from 'react';
import { 
  EnvelopeSimple, 
  MapPin, 
  Clock, 
  InstagramLogo, 
  PaperPlaneRight, 
  CheckCircle,
  Building,
  ChatDots,
  NavigationArrow,
  Wheelchair
} from '@phosphor-icons/react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activePoi, setActivePoi] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'bachelor',
    message: ''
  });

  const pois = [
    {
      id: 'institut',
      title: 'Psychologisches Institut (Raum A001)',
      distance: 'Vor Ort',
      time: '0 Min.',
      location: 'Hauptstraße 47–51, Hinterhaus EG',
      tip: 'Hier tagt die Fachschaft dienstags um 18:00 Uhr s.t. Offene Tür, Kaffeemaschine & Sofa für alle Psychologie-Studierenden.',
      access: 'Barrierefrei erreichbar über die Rampe im Innenhof.'
    },
    {
      id: 'unplatz',
      title: 'Universitätsplatz & Neue Uni',
      distance: '180 Meter',
      time: '2 Min. Fußweg',
      location: 'Grabengasse / Universitätsplatz',
      tip: 'Zentraler Campus-Treffpunkt der Altstadt. Hier halten die Buslinien 31, 32 & 33. Große Vorlesungssäle und Triplex-Mensa.',
      access: 'Zentrale Bushaltestelle Universitätsplatz.'
    },
    {
      id: 'marstall',
      title: 'Marstall Mensa & Zeughaus',
      distance: '260 Meter',
      time: '3 Min. Fußweg',
      location: 'Marstallhof 1',
      tip: 'Die beliebteste Mensa Heidelbergs mit schönem Innenhof-Biergarten, Café Marstall und Abendbetrieb bis 23:30 Uhr.',
      access: 'Studi-Karten-Aufladung & Verpflegung.'
    },
    {
      id: 'ub',
      title: 'Universitätsbibliothek (UB Altstadt)',
      distance: '340 Meter',
      time: '4 Min. Fußweg',
      location: 'Plöck 107–109',
      tip: 'Riesiger psychologischer Fachbuchbestand, Gruppenarbeitsräume, Scanstellen und Ruhearbeitsplätze bis spät in die Nacht.',
      access: 'Ausleihe mit Heidelberger Uni-ID.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#F7F5F0] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute top-10 right-0 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        KONTAKT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-stone-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Offene Tür & Sprechstunde</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Komm vorbei oder schreib uns
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mt-2 lg:mt-0 max-w-[45ch]">
            Wir sind immer für dich ansprechbar. Egal ob vertrauliche Studienberatung, Prüfungssorgen oder Anregungen.
          </p>
        </div>

        {/* 2-Column Split: Info Cards vs. Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Location & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Room Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-red-50 text-[#85151D] flex items-center justify-center">
                  <MapPin size={22} weight="bold" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#121316]">
                    Fachschaftsraum A001
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Psychologisches Institut Heidelberg
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-600 space-y-1 pl-1 border-l-2 border-[#85151D]/40">
                <p className="font-semibold text-stone-800">Hauptstraße 47–51 (Hinterhaus, EG)</p>
                <p>69117 Heidelberg (Altstadt)</p>
                <p className="text-stone-500">Haltestellen: Universitätsplatz oder Marstallstraße</p>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                ☕ <em>Im Fachschaftsraum gibt es immer frischen Kaffee, Tee, bequeme Sofas und offene Ohren.</em>
              </div>
            </div>

            {/* Hours & Schedule Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                  <Clock size={22} weight="bold" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#121316]">
                    Sitzungs- & Sprechzeiten
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Vorlesungszeit Wintersemester
                  </p>
                </div>
              </div>

              <ul className="text-xs text-stone-700 space-y-2 pt-1">
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-stone-900">Offene Fachschaftssitzung:</span>
                  <span className="font-mono text-[#85151D] font-bold">Di 18:00 Uhr s.t.</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-stone-900">Persönliche Sprechstunde:</span>
                  <span className="font-mono text-stone-600">Di 16:30 – 18:00 Uhr</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-stone-900">In der vorlesungsfreien Zeit:</span>
                  <span className="font-mono text-stone-500">Nach Vereinbarung per Mail</span>
                </li>
              </ul>
            </div>

            {/* Digital Channels */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <h4 className="text-xs font-mono uppercase text-stone-500 font-semibold tracking-wider">
                Direkte Kanäle:
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:fachschaft@psychologie.uni-heidelberg.de"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-medium text-stone-800 transition-colors"
                >
                  <EnvelopeSimple size={18} className="text-[#85151D]" weight="bold" />
                  <span className="truncate">fachschaft@psychologie.uni-heidelberg.de</span>
                </a>
                <a
                  href="https://www.instagram.com/psyheidelberg/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-medium text-stone-800 transition-colors"
                >
                  <InstagramLogo size={18} className="text-[#85151D]" weight="bold" />
                  <span>@psyheidelberg (Instagram)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <ChatDots size={22} className="text-[#85151D]" weight="bold" />
                <h3 className="text-xl font-extrabold text-[#121316]">
                  Nachricht oder Beratungsanfrage senden
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Deine Anfrage wird direkt an die zuständigen Fachschaftsmitglieder weitergeleitet.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <CheckCircle size={48} className="mx-auto text-emerald-600" weight="fill" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    Vielen Dank für deine Nachricht!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-[40ch] mx-auto leading-relaxed">
                    Wir haben deine Anfrage erhalten und melden uns in der Regel innerhalb von 24–48 Stunden bei dir.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'bachelor', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Weitere Nachricht verfassen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Dein Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. Clara Schmidt"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#85151D] focus:ring-2 focus:ring-[#85151D]/10 text-xs text-stone-900 outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Deine E-Mail (am besten Uni-Mail)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="clara@stud.uni-heidelberg.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#85151D] focus:ring-2 focus:ring-[#85151D]/10 text-xs text-stone-900 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Betreff / Anliegen
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#85151D] focus:ring-2 focus:ring-[#85151D]/10 text-xs text-stone-900 outline-hidden transition-all"
                    >
                      <option value="bachelor">Bachelor-Studium & EKS</option>
                      <option value="klip">KliP-Master & Approbation</option>
                      <option value="msc">Master Psychologie (Forschung)</option>
                      <option value="pruefung">Prüfungsausschuss & Härtefall</option>
                      <option value="praktikum">Praktikum oder Auslandssemester</option>
                      <option value="blackbox">BlackBox Magazin (Beitrag einreichen)</option>
                      <option value="mitmachen">In der Fachschaft aktiv werden</option>
                      <option value="sonstiges">Sonstiges Anliegen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Deine Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Wie können wir dir helfen? Beschreibe dein Anliegen kurz..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#85151D] focus:ring-2 focus:ring-[#85151D]/10 text-xs text-stone-900 outline-hidden transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#85151D] text-white text-xs font-bold hover:bg-[#660E15] transition-all duration-200 shadow-sm cursor-pointer active:scale-[0.98]"
                    >
                      <span>Nachricht absenden</span>
                      <PaperPlaneRight size={16} weight="bold" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* INTERACTIVE ALTSTADT CAMPUS NAVIGATOR */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-stone-200/80 border border-stone-300 shadow-sm">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-stone-100 text-[#85151D] flex items-center justify-center">
                  <NavigationArrow size={20} weight="bold" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#121316]">
                    Altstadt-Campus Wegweiser: Rund um Hauptstraße 47
                  </h3>
                  <p className="text-xs text-stone-500">
                    Entfernungen & studentische Orientierungspunkte zu Fuß
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-stone-400">49.4124° N, 8.7053° E</span>
            </div>

            {/* POI Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {pois.map((poi, idx) => (
                <button
                  key={poi.id}
                  onClick={() => setActivePoi(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    activePoi === idx
                      ? 'bg-red-50/80 border-[#85151D] text-[#85151D] shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span>{poi.distance}</span>
                    <span>{poi.time}</span>
                  </div>
                  <div className="text-xs font-bold mt-1 text-[#121316] line-clamp-1">
                    {poi.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed Selected POI Card */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-stone-900">
                  {pois[activePoi].title}
                </h4>
                <span className="text-xs font-mono text-[#85151D] font-bold">
                  {pois[activePoi].location}
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {pois[activePoi].tip}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <Wheelchair size={15} className="text-stone-700" />
                <span>{pois[activePoi].access}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
