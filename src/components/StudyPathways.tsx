import React, { useState } from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Brain, 
  CheckCircle, 
  FileArrowDown, 
  CalendarCheck,
  WarningCircle,
  CaretRight
} from '@phosphor-icons/react';

export const StudyPathways: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bsc' | 'klip' | 'msc' | 'approbation'>('bsc');

  return (
    <section id="studium" className="py-20 bg-[#FAF8F5] border-b border-stone-200 relative overflow-hidden">
      {/* Background Watermark (Uni Heidelberg style) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute bottom-0 right-10 text-[10rem] lg:text-[14rem] font-black text-stone-900/[0.03] tracking-tighter leading-none font-serif z-0"
      >
        STUDIUM
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#85151D]"></span>
            <span>Akademischer Leitfaden</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            Infos zum Studium & Approbation
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Alles, was du für einen erfolgreichen Studienverlauf in Heidelberg wissen musst. Zusammengestellt und aktuell gehalten von deinen Kommiliton:innen.
          </p>
        </div>

        {/* Double-Bezel Interactive Tab Bar */}
        <div className="p-1.5 rounded-2xl bg-stone-200/80 border border-stone-300 max-w-4xl mx-auto mb-10 flex flex-wrap sm:flex-nowrap gap-1 shadow-inner">
          <button
            onClick={() => setActiveTab('bsc')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'bsc'
                ? 'bg-white text-[#85151D] shadow-sm'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/50'
            }`}
          >
            <GraduationCap size={18} weight="bold" />
            <span>Bachelor (B.Sc.)</span>
          </button>
          
          <button
            onClick={() => setActiveTab('klip')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'klip'
                ? 'bg-white text-[#85151D] shadow-sm'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/50'
            }`}
          >
            <Stethoscope size={18} weight="bold" />
            <span>Master KliP (Klinisch)</span>
          </button>

          <button
            onClick={() => setActiveTab('msc')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'msc'
                ? 'bg-white text-[#85151D] shadow-sm'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/50'
            }`}
          >
            <Brain size={18} weight="bold" />
            <span>Master Psychologie</span>
          </button>

          <button
            onClick={() => setActiveTab('approbation')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'approbation'
                ? 'bg-[#85151D] text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/50'
            }`}
          >
            <CheckCircle size={18} weight="bold" />
            <span>Approbations-Fahrplan</span>
          </button>
        </div>

        {/* Tab Content Panels (Double-Bezel Card Layout) */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10">
          
          {/* TAB 1: BACHELOR */}
          {activeTab === 'bsc' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase text-[#85151D] font-bold tracking-wider">
                    6 Semester · 180 ECTS · Polyvalenter Bachelor
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#121316] mt-1">
                    Bachelor of Science (B.Sc.) Psychologie
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#faq"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    <FileArrowDown size={16} weight="bold" />
                    <span>Modulhandbuch B.Sc. (PDF)</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Box 1: EKS */}
                <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    EKS – Erstsemester-Einführungstage
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Jedes Wintersemester organisiert die Fachschaft die traditionelle Einführungswoche mit Campus-Rallye, Stundenplanbau, Kneipentour und Ersti-Frühstück.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#85151D]">
                    <CalendarCheck size={16} />
                    <span>Nächste EKS: Oktober 2026</span>
                  </div>
                </div>

                {/* Box 2: Modulaufbau */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Kernmodule & Methodenausbildung
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Heidelberg legt großen Wert auf empirische Fundierung: Statistik I & II, Empiriepraktikum (Expra), Testtheorie sowie Diagnostik und Störungslehre nach neuem PsychThG.
                  </p>
                  <ul className="mt-3 text-xs text-stone-700 space-y-1">
                    <li>• Allgemeine & Biologische Psychologie</li>
                    <li>• Entwicklungs- & Sozialpsychologie</li>
                    <li>• Klinische & Pädagogische Psychologie</li>
                  </ul>
                </div>

                {/* Box 3: Praktika & Bachelorarbeit */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Orientierungspraktikum & BQT I
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Für die Approbationsfähigkeit sind 240 Stunden Orientierungspraktikum (OP) sowie 240 Stunden Berufsqualifizierende Tätigkeit (BQT I) im Bachelor verpflichtend nachzuweisen.
                  </p>
                  <div className="mt-4 p-2.5 rounded-lg bg-white border border-stone-200 text-[11px] text-stone-600">
                    💡 Die Fachschaft pflegt eine interne Praktikumsdatenbank mit Heidelberger Kliniken & Instituten.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KLIP MASTER */}
          {activeTab === 'klip' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase text-[#85151D] font-bold tracking-wider">
                    4 Semester · 120 ECTS · Berufsrechtliche Anerkennung
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#121316] mt-1">
                    M.Sc. Klinische Psychologie & Psychotherapie (KliP)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <span>Reformstudiengang nach PsychThG</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-base font-bold text-stone-900 mb-2">BQT II & BQT III Praxisphasen</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Intensive praktische Tätigkeit in der universitätseigenen Psychotherapeutischen Hochschulambulanz sowie kooperierenden Kliniken (z.B. Universitätsklinikum Heidelberg).
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-base font-bold text-stone-900 mb-2">Staatliche Prüfung (Approbation)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Der Abschluss befähigt direkt zur Teilnahme an der staatlichen psychotherapeutischen Prüfung. Nach Bestehen wird die Approbation als Psychotherapeut:in erteilt.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-base font-bold text-stone-900 mb-2">Fachpsychotherapie-Weiterbildung</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Im Anschluss folgt die 5-jährige Weiterbildung in Anstellung (Erwachsene oder Kinder/Jugendliche) mit Facharzttarif-Vergütung.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MSC PSYCHOLOGIE */}
          {activeTab === 'msc' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase text-[#85151D] font-bold tracking-wider">
                    4 Semester · 120 ECTS · Forschung & Anwendung
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#121316] mt-1">
                    M.Sc. Psychologie (Forschung & Angewandte Fächer)
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-base font-bold text-stone-900 mb-2">Schwerpunkt Kognition, Entwicklung & Lernen</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Heidelberg gehört europaweit zu den Spitzenstandorten der Kognitionsforschung (Exzellenzuniversität). Ausbildung an modernsten Eye-Tracking-, EEG- und Verhaltenslaboren.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>• Neurokognitive Mechanismen & Computational Modeling</li>
                    <li>• Entwicklungspsychologie der Lebensspanne</li>
                    <li>• Vorbereitung auf Promotion & akademische Spitzenforschung</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-base font-bold text-stone-900 mb-2">Schwerpunkt Arbeits-, Organisations- & Wirtschaftspsychologie</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Fokus auf Führung, Teamdynamik, Human Factors und digitale Transformation im Arbeitskontext.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>• Eignungsdiagnostik & Personalauswahl</li>
                    <li>• Organisationsentwicklung & Change Management</li>
                    <li>• Kooperationsprojekte mit Wirtschaftspartnern der Metropolregion</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: APPROBATIONS-NAVIGATOR */}
          {activeTab === 'approbation' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase text-[#85151D] font-bold tracking-wider">
                    Schritt-für-Schritt Wegweiser
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#121316] mt-1">
                    Der Heidelberger Weg zur Approbation
                  </h3>
                </div>
              </div>

              {/* 4-Step Visual Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 relative">
                  <span className="text-xs font-mono font-bold text-[#85151D] uppercase">Stufe 1</span>
                  <h5 className="text-base font-bold text-stone-900 mt-1 mb-2">Polyvalenter B.Sc.</h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Bachelor mit berufsrechtlich anerkannten Modulen. Absolvierung von Orientierungspraktikum (4 Wochen) und BQT I (4 Wochen).
                  </p>
                  <div className="mt-4 text-[11px] font-medium text-stone-500">Dauer: 6 Semester</div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 relative">
                  <span className="text-xs font-mono font-bold text-[#85151D] uppercase">Stufe 2</span>
                  <h5 className="text-base font-bold text-stone-900 mt-1 mb-2">KliP-Master</h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Master Klinische Psychologie & Psychotherapie. Stationäre und ambulante Praxisphasen (BQT II & III).
                  </p>
                  <div className="mt-4 text-[11px] font-medium text-stone-500">Dauer: 4 Semester</div>
                </div>

                <div className="p-5 rounded-2xl bg-red-50/70 border border-[#85151D]/30 relative">
                  <span className="text-xs font-mono font-bold text-[#85151D] uppercase">Stufe 3</span>
                  <h5 className="text-base font-bold text-[#85151D] mt-1 mb-2">Staatsexamen</h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Zentrale mündliche & schriftliche Prüfung. Mit Bestehen: **Erteilung der staatlichen Approbation**.
                  </p>
                  <div className="mt-4 text-[11px] font-medium text-[#85151D] font-semibold">Titel: Psychotherapeut:in</div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 relative">
                  <span className="text-xs font-mono font-bold text-stone-600 uppercase">Stufe 4</span>
                  <h5 className="text-base font-bold text-stone-900 mt-1 mb-2">Fachweiterbildung</h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    5-jährige Weiterbildung in Anstellung zur Erlangung des Fachkunde-Status (Kassensitzfähigkeit).
                  </p>
                  <div className="mt-4 text-[11px] font-medium text-emerald-700 font-semibold">Vergütet nach Tarif</div>
                </div>

              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                <WarningCircle size={20} className="text-amber-700 shrink-0 mt-0.5" weight="fill" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Wichtiger Hinweis der Fachschaft:</strong> Studierende, die ihr Studium noch nach der alten Übergangsregelung begonnen haben, werden von uns bezüglich der Übergangsfristen zur Psychotherapie-Ausbildung bis 2032 individuell beraten. Meldet euch bei Fragen gerne per Mail!
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
