import React, { useState } from 'react';
import { 
  MagnifyingGlass, 
  FileArrowDown, 
  CaretDown, 
  LockKey, 
  Check, 
  BookBookmark,
  FilePdf,
  GraduationCap
} from '@phosphor-icons/react';

export const FaqDownloads: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'bachelor' | 'master' | 'pruefung' | 'praktika'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'bachelor',
      question: 'Was sind Versuchspersonenstunden (VP-Stunden) und wie viele brauche ich?',
      answer: 'Im Bachelor-Studium musst du in der Regel 30 VP-Stunden ableisten, um Einblicke in unterschiedliche psychologische Forschungsmethoden und Experimente zu erhalten. Die Vergabe läuft digital über das Heidelberger SONA-System sowie Aushänge im Institut.'
    },
    {
      category: 'bachelor',
      question: 'Wie funktioniert die Anmeldung zu Klausuren und Seminaren über heiCO?',
      answer: 'Die Belegung von Vorlesungen und Seminaren erfolgt vor Vorlesungsbeginn über das heiCO-Portal der Universität Heidelberg. Beachte bitte die gestaffelten Belegphasen und Nachrückfristen. Bei technischen Problemen hilft unsere Sprechstunde.'
    },
    {
      category: 'master',
      question: 'Kann ich mit dem neuen Heidelberger Bachelor an jede andere Universität für den KliP-Master wechseln?',
      answer: 'Ja, unser Polyvalenter Bachelor erfüllt die bundesweiten Kriterien der Approbationsordnung für Psychotherapeutinnen und Psychotherapeuten (PsychThApprO) und ist uneingeschränkt berufsrechtlich anerkannt.'
    },
    {
      category: 'pruefung',
      question: 'Was muss ich tun, wenn ich am Tag einer Klausur krank werde?',
      answer: 'Du musst unverzüglich (spätestens am Tag der Prüfung) eine Prüfungsunfähigkeitsbescheinigung (ärztliches Attest) einholen und dieses zusammen mit dem Rücktrittsformular innerhalb von drei Werktagen beim Gemeinsamen Prüfungsamt einreichen.'
    },
    {
      category: 'praktika',
      question: 'Welche Voraussetzungen gelten für das Orientierungspraktikum (OP)?',
      answer: 'Das Orientierungspraktikum umfasst mindestens 4 Wochen (150 bzw. 240 Stunden je nach Studienordnung) und muss in einer interdisziplinären Einrichtung der psychosozialen oder klinischen Versorgung unter fachpsychologischer Anleitung absolviert werden.'
    },
    {
      category: 'pruefung',
      question: 'Wie komme ich an Altklausuren und Gedächtnisprotokolle der Fachschaft?',
      answer: 'Die Fachschaft verwaltet ein geschütztes Protokoll-Archiv für Heidelberger Studierende. Du kannst nach vorheriger Verifizierung mit deiner Uni-ID Protokolle einsehen. Im Gegenzug freuen wir uns, wenn du nach deinen Prüfungen selbst ein Gedächtnisprotokoll einreichst!'
    }
  ];

  const downloads = [
    {
      title: 'Ersti-Guide Psychologie 2026/27',
      desc: 'Der vollständige Wegweiser für alle Studienanfänger:innen in Heidelberg.',
      size: '4.2 MB',
      type: 'PDF',
      highlight: true
    },
    {
      title: 'Modulhandbuch B.Sc. Polyvalent',
      desc: 'Offizielle Studienverlaufspläne, ECTS-Übersicht & Prüfungsanforderungen.',
      size: '2.8 MB',
      type: 'PDF',
      highlight: false
    },
    {
      title: 'KliP Master & Approbations-Leitfaden',
      desc: 'Praxisphasen BQT II/III, staatliche Prüfung und Weiterbildung.',
      size: '1.9 MB',
      type: 'PDF',
      highlight: false
    },
    {
      title: 'Laufzettel Orientierungspraktikum (OP)',
      desc: 'Bescheinigungsformular für Praktikumsstellen zur Anerkennung.',
      size: '340 KB',
      type: 'PDF',
      highlight: false
    },
    {
      title: 'Fachschaftssatzung & Geschäftsordnung',
      desc: 'Grundordnung der studentischen Vertretung am Institut.',
      size: '520 KB',
      type: 'PDF',
      highlight: false
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute bottom-0 left-8 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        DOWNLOADS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-stone-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
              <span>Wissen & Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Häufige Fragen (FAQ) & Download-Center
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mt-2 lg:mt-0 max-w-[45ch]">
            Finde sofortige Antworten auf die drängendsten Fragen oder lade aktuelle Leitfäden herunter.
          </p>
        </div>

        {/* 2-Column Layout: FAQ Accordion + Download Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Searchable FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search Input & Category Bar */}
            <div className="space-y-3">
              <div className="relative">
                <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Thema oder Frage suchen (z.B. heiCO, Klausur, Praktikum)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-300 focus:border-[#85151D] focus:ring-2 focus:ring-[#85151D]/10 text-sm text-stone-900 placeholder:text-stone-400 outline-hidden transition-all shadow-xs"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'Alle Themen' },
                  { id: 'bachelor', label: 'Bachelor' },
                  { id: 'master', label: 'Master & KliP' },
                  { id: 'pruefung', label: 'Prüfungen' },
                  { id: 'praktika', label: 'Praktika' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#85151D] text-white shadow-xs'
                        : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300/70'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 rounded-2xl bg-white border border-stone-200 text-center text-sm text-stone-500">
                  Keine Einträge für diese Suche gefunden. Schreib uns gern eine Mail!
                </div>
              ) : (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white border border-stone-200 overflow-hidden transition-all duration-200 shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors cursor-pointer"
                      >
                        <span className="text-sm font-bold text-[#121316]">
                          {faq.question}
                        </span>
                        <CaretDown
                          size={18}
                          weight="bold"
                          className={`text-stone-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#85151D]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed bg-[#FCFBF9]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* Right Column: Download Center (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <FilePdf size={22} className="text-[#85151D]" weight="bold" />
                  <h3 className="text-base font-bold text-[#121316]">
                    Wichtige Dokumente & Leitfäden
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md font-semibold">
                  Aktuell: WS 26/27
                </span>
              </div>

              {/* Download Cards */}
              <div className="space-y-2.5">
                {downloads.map((doc, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                      doc.highlight
                        ? 'bg-red-50/50 border-[#85151D]/40 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:bg-stone-100/60'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-900">
                          {doc.title}
                        </span>
                        {doc.highlight && (
                          <span className="text-[9px] font-mono bg-[#85151D] text-white px-1.5 py-0.2 rounded-sm font-bold uppercase">
                            Empfohlen
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {doc.desc}
                      </p>
                    </div>

                    <a
                      href="#download"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 hover:text-[#85151D] hover:border-[#85151D] transition-colors shrink-0 shadow-2xs"
                    >
                      <FileArrowDown size={14} weight="bold" />
                      <span>{doc.size}</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Exam Protocol Archive Locked Box */}
              <div className="p-4 rounded-2xl bg-stone-100/90 border border-stone-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <LockKey size={16} className="text-[#85151D]" weight="bold" />
                  <span>Altklausuren- & Protokollarchiv</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Aus Datenschutz- und Prüfungsrechtsgründen ist unser Protokollarchiv passwortgeschützt. Du erhältst das Zugangspasswort bei der EKS oder auf Anfrage mit deiner Heidelberger Studierenden-Mail (<code>@stud.uni-heidelberg.de</code>).
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
