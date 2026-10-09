import React from 'react';
import { 
  Scales, 
  Bank, 
  UsersFour, 
  Coins, 
  ShieldCheck, 
  GlobeStand,
  ChatCircleText,
  DoorOpen,
  ArrowRight
} from '@phosphor-icons/react';

export const HopoSection: React.FC = () => {
  const gremien = [
    {
      id: 'fachrat',
      acronym: 'FachRat',
      title: 'Institutsebene Psychologie',
      desc: 'Hier sitzen wir mit Professor:innen und dem akademischen Mittelbau am Tisch. Wir entscheiden über Studienpläne, Lehrveranstaltungsangebot, Institutsausstattung und Berufung neuer Professuren mit.',
      icon: Bank,
      tag: 'Direkte Instituts-Mitbestimmung',
    },
    {
      id: 'fakrat',
      acronym: 'FakRat',
      title: 'Fakultätsrat Verhaltenswissenschaften',
      desc: 'Die übergeordnete Fakultät für Verhaltens- und Empirische Kulturwissenschaften. Unsere studentischen Vertreter:innen bringen die Interessen der Psychologie-Studierenden gegenüber Dekanat und Rektorat ein.',
      icon: Scales,
      tag: 'Fakultätsebene',
    },
    {
      id: 'stura',
      acronym: 'StuRa',
      title: 'Studierendenrat der Universität',
      desc: 'Das oberste beschlussfassende Organ der gesamten Heidelberger Verfassten Studierendenschaft. Themen: Semesterticket, Nachtbusse, Mensen, politische Positionierung und studentischer Haushalt.',
      icon: UsersFour,
      tag: 'Uni-Gesamtvertretung',
    },
    {
      id: 'qsm',
      acronym: 'QSM',
      title: 'Qualitätssicherungsmittel-Kommission',
      desc: 'Über die QSM fließen jedes Jahr Hunderttausende Euro in die Verbesserung der Studienbedingungen. Wir sorgen dafür, dass das Geld für Tutorien, Softwarelizenzen (SPSS/R), Testotheks-Materialien und Laptops verwendet wird.',
      icon: Coins,
      tag: 'Finanzkontrolle für Lehre',
    },
    {
      id: 'pruefung',
      acronym: 'PrüfAusschuss',
      title: 'Prüfungsausschuss B.Sc. & M.Sc.',
      desc: 'Wacht über die Einhaltung der Prüfungsordnung. Unsere studentischen Mitglieder prüfen Härtefallanträge, Fristverlängerungen bei Krankheiten und die Anerkennung externer Studienleistungen.',
      icon: ShieldCheck,
      tag: 'Studentenrechte & Härtefälle',
    },
    {
      id: 'psyfako',
      acronym: 'PsyFaKo',
      title: 'Psychologie-Fachschaften-Konferenz',
      desc: 'Zweimal im Jahr vertreten wir Heidelberg auf der bundesweiten PsyFaKo. Hier kämpfen wir gemeinsam mit Fachschaften aus ganz Deutschland für faire Bedingungen bei der Psychotherapie-Reform und Master-Kapazitäten.',
      icon: GlobeStand,
      tag: 'Bundesweites Netzwerk',
    },
  ];

  return (
    <section id="hopo" className="py-20 bg-[#F7F5F0] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute top-10 left-0 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        POLITIK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-stone-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Demokratische Mitbestimmung</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Hochschulpolitik: Wo deine Stimme zählt
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mt-2 lg:mt-0 max-w-[48ch]">
            Als Verfasste Studierendenschaft haben wir rechtlich verankerte Sitze in allen Entscheidungsgremien der Universität Heidelberg.
          </p>
        </div>

        {/* 6-Card Grid of Committees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gremien.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#85151D]/30 transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-stone-100 text-[#85151D] flex items-center justify-center">
                      <Icon size={22} weight="bold" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#85151D] bg-red-50 px-2 py-0.5 rounded-md">
                      {g.acronym}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#121316] mb-1">
                    {g.title}
                  </h3>
                  
                  <span className="inline-block text-[11px] font-mono text-stone-500 uppercase tracking-wider font-semibold mb-3">
                    {g.tag}
                  </span>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {g.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Studentische Vertreter:innen aktiv gewählt</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action Banner: Mitmachen! */}
        <div className="p-8 rounded-3xl bg-[#121316] text-white border border-white/10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
                <DoorOpen size={16} weight="bold" />
                <span>Offene Fachschaftssitzung</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Lust auf Mitgestaltung? Komm einfach vorbei!
              </h3>
              <p className="text-sm text-stone-300 max-w-[65ch] leading-relaxed">
                Unsere wöchentlichen Fachschaftssitzungen sind für alle Psychologie-Studierenden offen. Ob du nur ein konkretes Problem mit einer Klausur hast, eine Party organisieren oder dich langfristig hochschulpolitisch engagieren möchtest: Du bist herzlich willkommen!
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs text-stone-400">Jeden Dienstag während der Vorlesungszeit</div>
                <div className="text-lg font-bold text-white mt-0.5">18:00 Uhr s.t.</div>
                <div className="text-xs text-stone-400 mt-1">Fachschaftsraum A001 (Hauptstr. 47)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
