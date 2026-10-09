import React, { useState } from 'react';
import { 
  Confetti, 
  FilmSlate, 
  Flame, 
  Compass, 
  UsersThree, 
  MapPin, 
  Clock, 
  CalendarPlus,
  ArrowRight,
  Sparkle
} from '@phosphor-icons/react';

export const LifeAtInstitute: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'partys' | 'kultur' | 'community'>('all');
  const [activePhoto, setActivePhoto] = useState<'courtyard' | 'facade'>('courtyard');

  const events = [
    {
      id: 'ersti-we',
      title: 'Ersti-Wochenende 2026',
      category: 'community',
      date: '24. – 26. Oktober 2026',
      location: 'Hütte im Odenwald',
      desc: 'Das legendäre Hüttenwochenende zum Kennenlernen! Spiele, Wanderungen, Lagerfeuer und Insider-Tipps fürs Psychologiestudium.',
      badge: 'Highlights',
      icon: UsersThree,
      icsData: {
        title: 'Ersti-Wochenende Psychologie Heidelberg',
        start: '20261024T160000Z',
        end: '20261026T140000Z',
        location: 'Odenwald Hütte',
        description: 'Traditionelles Ersti-Wochenende der Fachschaft Psychologie Heidelberg.'
      }
    },
    {
      id: 'psychoparty',
      title: 'Psychoparty Winter-Edition',
      category: 'partys',
      date: '14. November 2026 · ab 22:00 Uhr',
      location: 'Halle02 / Marstall Heidelberg',
      desc: 'Die größte Fachschaftsparty der Heidelberger Geistes- und Verhaltenswissenschaften. DJs, Welcome-Drinks und unvergessliche Nächte.',
      badge: 'Kult-Event',
      icon: Confetti,
      icsData: {
        title: 'Psychoparty Heidelberg Winter-Edition',
        start: '20261114T210000Z',
        end: '20261115T040000Z',
        location: 'Halle02 Heidelberg',
        description: 'Offizielle Fachschaftsparty Psychologie Heidelberg.'
      }
    },
    {
      id: 'psychokino',
      title: 'PsychoKino: „A Beautiful Mind“',
      category: 'kultur',
      date: '03. Dezember 2026 · 19:30 Uhr',
      location: 'Großer Hörsaal, Hauptstr. 47',
      desc: 'Filmabend auf Großleinwand mit Popcorn. Im Anschluss: Impulsvortrag & offene Diskussion über Schizophrenie und Diagnostik.',
      badge: 'Freier Eintritt',
      icon: FilmSlate,
      icsData: {
        title: 'PsychoKino: A Beautiful Mind',
        start: '20261203T183000Z',
        end: '20261203T213000Z',
        location: 'Psychologisches Institut, Großer Hörsaal',
        description: 'Filmabend & Diskussion der Fachschaft Psychologie.'
      }
    },
    {
      id: 'pumpkinparty',
      title: 'Pumpkinparty & Glühweinumtrunk',
      category: 'partys',
      date: '10. Dezember 2026 · 17:00 Uhr',
      location: 'Innenhof Psychologisches Institut',
      desc: 'Gemütlicher Winterumtrunk mit heißem Punsch, Kürbissuppe und Waffeln direkt nach den Nachmittagsvorlesungen.',
      badge: 'Campus Life',
      icon: Flame,
      icsData: {
        title: 'Pumpkinparty & Glühweinumtrunk',
        start: '20261210T160000Z',
        end: '20261210T200000Z',
        location: 'Innenhof Hauptstraße 47, Heidelberg',
        description: 'Winterumtrunk im Hof des Psychologischen Instituts.'
      }
    },
    {
      id: 'wechslertreffen',
      title: 'Wechslertreffen & Master-Welcome',
      category: 'community',
      date: 'Jeden Semesterstart',
      location: 'Fachschaftsraum A001',
      desc: 'Du wechselst die Uni oder startest deinen Master in Heidelberg? Wir vernetzen dich mit Alt- und Neu-Heidelbergern!',
      badge: 'Networking',
      icon: Compass,
      icsData: {
        title: 'Wechslertreffen Psychologie Heidelberg',
        start: '20261015T160000Z',
        end: '20261015T180000Z',
        location: 'Fachschaftsraum A001, Hauptstr. 47',
        description: 'Kennenlerntreffen für Master-Erstis und Hochschulwechsler:innen.'
      }
    },
  ];

  const handleDownloadIcs = (evt: typeof events[0]) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Fachschaft Psychologie Heidelberg//Events//DE
BEGIN:VEVENT
SUMMARY:${evt.icsData.title}
DESCRIPTION:${evt.icsData.description}
LOCATION:${evt.icsData.location}
DTSTART:${evt.icsData.start}
DTEND:${evt.icsData.end}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${evt.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <section id="leben" className="py-20 bg-[#FAF8F5] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute top-12 right-0 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        CAMPUS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-stone-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Gemeinschaft & Traditionen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Leben am Institut: Events, Partys & Kultur
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mt-2 lg:mt-0 max-w-[48ch]">
            Psychologie in Heidelberg ist mehr als nur Statistik und Vorlesungen. Entdecke unsere legendären Events und die Gemeinschaft im Institutshof.
          </p>
        </div>

        {/* Feature Bento Grid: Community Photography + Event Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Visual: Double-Bezel Courtyard Photography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-stone-200/80 border border-stone-300 shadow-md h-full flex flex-col">
              
              {/* Photo Switcher Pills */}
              <div className="flex items-center gap-2 p-1.5 mb-2 bg-stone-100 rounded-2xl border border-stone-200/80">
                <button
                  onClick={() => setActivePhoto('courtyard')}
                  className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activePhoto === 'courtyard'
                      ? 'bg-white text-[#85151D] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  🌾 Sommerfest im Innenhof
                </button>
                <button
                  onClick={() => setActivePhoto('facade')}
                  className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activePhoto === 'facade'
                      ? 'bg-white text-[#85151D] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  🏛️ Institutsportal Hauptstraße 47
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[380px] sm:min-h-[460px] bg-stone-900 group">
                <img 
                  src={activePhoto === 'courtyard' ? './images/events-community.jpg' : './images/institute-facade.jpg'} 
                  alt={activePhoto === 'courtyard' 
                    ? "Studierende beim stimmungsvollen Sommerfest im Innenhof des Psychologischen Instituts mit Lichterketten"
                    : "Historische Sandsteinfassade des Psychologischen Instituts an der Hauptstraße Heidelberg"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                {/* Badge top left */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{activePhoto === 'courtyard' ? 'Institutsinnenhof · Hauptstr. 47' : 'Hauptstraße 47–51 · Altstadt'}</span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs font-mono uppercase text-amber-300 tracking-wider font-semibold">
                    {activePhoto === 'courtyard' ? 'Traditionelles Sommer- & Institutsgrillen' : 'Sandstein & Wissenschaft seit 1886'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activePhoto === 'courtyard' ? 'Gemeinsam feiern, forschen & vernetzen' : 'Zwischen Universitätsplatz und Marstall'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-[50ch] leading-relaxed">
                    {activePhoto === 'courtyard' 
                      ? 'Jedes Semester kommen Studierende aller Jahrgänge, Alumni und Professor:innen im malerischen Hof zusammen. Kühle Getränke, Musik und offener Austausch.'
                      : 'Das Psychologische Institut verbindet historische Heidelberger Altstadt-Architektur mit modernsten kognitiven und klinischen Versuchslaboren.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Filterable Event Feed (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-200/80 border border-stone-300">
              <button
                onClick={() => setFilter('all')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'all' ? 'bg-white text-[#85151D] shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Alle
              </button>
              <button
                onClick={() => setFilter('partys')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'partys' ? 'bg-white text-[#85151D] shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Partys
              </button>
              <button
                onClick={() => setFilter('kultur')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'kultur' ? 'bg-white text-[#85151D] shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Kino & Kultur
              </button>
              <button
                onClick={() => setFilter('community')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'community' ? 'bg-white text-[#85151D] shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Ersti & Welcome
              </button>
            </div>

            {/* Scrollable Event List */}
            <div className="space-y-3 overflow-y-auto max-h-[460px] pr-1">
              {filteredEvents.map((evt) => {
                const Icon = evt.icon;
                return (
                  <div
                    key={evt.id}
                    className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-[#85151D]/40 transition-all duration-200 shadow-xs hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-red-50 text-[#85151D] flex items-center justify-center shrink-0">
                          <Icon size={18} weight="bold" />
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#121316]">
                            {evt.title}
                          </h4>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-semibold">
                            {evt.badge}
                          </span>
                        </div>
                      </div>

                      {/* ICS Export Button */}
                      <button
                        onClick={() => handleDownloadIcs(evt)}
                        className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        title="In Kalender eintragen (.ics)"
                      >
                        <CalendarPlus size={15} className="text-[#85151D]" />
                        <span className="hidden sm:inline">.ics</span>
                      </button>
                    </div>

                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {evt.desc}
                    </p>

                    <div className="mt-3 pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between text-[11px] text-stone-500 gap-2">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{evt.location}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
