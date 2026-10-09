import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Newspaper, 
  FileLock, 
  Confetti, 
  Scales, 
  GlobeHemisphereWest, 
  ChatsCircle,
  ArrowRight
} from '@phosphor-icons/react';

interface QuickLinksProps {
  onSelectTopic: (topic: string) => void;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ onSelectTopic }) => {
  const quickLinks = [
    {
      id: 'bachelor',
      category: 'Erstsemester & B.Sc.',
      title: 'Bachelor Psychologie & EKS',
      desc: 'Einführungswoche, Modulpläne, Stundenplanberatung & Prüfungstermine',
      icon: GraduationCap,
      targetSection: 'studium',
    },
    {
      id: 'approbation',
      category: 'Master & Reform',
      title: 'KliP & Weg zur Approbation',
      desc: 'Psychotherapie-Ausbildung, Praktika-Vorgaben & Approbationsordnung',
      icon: Stethoscope,
      targetSection: 'studium',
    },
    {
      id: 'blackbox',
      category: 'Studentisches Magazin',
      title: 'BlackBox — Aktuelle Ausgabe',
      desc: 'Necker-Würfel Phänomen, Interviews mit Dozierenden & Kolumnen',
      icon: Newspaper,
      targetSection: 'blackbox',
    },
    {
      id: 'altklausuren',
      category: 'Prüfungsservice',
      title: 'Altklausuren & Prüfungsausschuss',
      desc: 'Gedächtnisprotokolle, Klausurvorbereitung & Fristen-Übersicht',
      icon: FileLock,
      targetSection: 'faq',
    },
    {
      id: 'events',
      category: 'Traditionen & Feiern',
      title: 'Psychoparty & Institutsleben',
      desc: 'Legendäre Semester-Events, Ersti-Hütte, Sommergrillen & PsychoKino',
      icon: Confetti,
      targetSection: 'leben',
    },
    {
      id: 'hopo',
      category: 'Deine Mitbestimmung',
      title: 'Hochschulpolitik & StuRa',
      desc: 'Stimmrecht in FachRat, FakRat, Prüfungsausschuss & PsyFaKo',
      icon: Scales,
      targetSection: 'hopo',
    },
    {
      id: 'ausland',
      category: 'Internationales',
      title: 'Auslandssemester & Praktika',
      desc: 'Erasmus+, Partneruniversitäten & validierte Praktikumsstellen',
      icon: GlobeHemisphereWest,
      targetSection: 'faq',
    },
    {
      id: 'kontakt',
      category: 'Offene Sprechstunde',
      title: 'Fachschaftsraum & Sitzungen',
      desc: 'Jeden Dienstag 18:00 Uhr s.t. im Raum A001 oder via E-Mail',
      icon: ChatsCircle,
      targetSection: 'kontakt',
    },
  ];

  return (
    <section id="quicklinks" className="py-16 bg-[#F7F5F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Uni Heidelberg Grid Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-300">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#85151D] font-bold">
              Schnellzugriff · Quick-Links
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight mt-1">
              Die wichtigsten Anlaufstellen am Institut
            </h2>
          </div>
          <p className="text-sm text-stone-600 mt-2 md:mt-0 font-medium">
            Direkter Zugriff auf Leitfäden, Downloads & Beratung
          </p>
        </div>

        {/* 8-Tile High-Impact Grid (Inspired directly by Uni Heidelberg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTopic(item.targetSection)}
                className="group p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-[#85151D]/40 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-xl bg-stone-100 group-hover:bg-red-50 text-stone-700 group-hover:text-[#85151D] flex items-center justify-center transition-colors">
                      <Icon size={20} weight="bold" />
                    </span>
                    <span className="text-[11px] font-mono text-stone-600 uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#121316] group-hover:text-[#85151D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-600 group-hover:text-[#85151D] transition-colors">
                  <span>Mehr erfahren</span>
                  <ArrowRight 
                    size={15} 
                    weight="bold" 
                    className="transform transition-transform duration-200 group-hover:translate-x-1" 
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
