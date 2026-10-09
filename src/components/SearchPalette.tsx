import React, { useState, useEffect, useRef } from 'react';
import { 
  MagnifyingGlass, 
  X, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileText, 
  Buildings, 
  EnvelopeSimple,
  Sparkle
} from '@phosphor-icons/react';

interface SearchItem {
  id: string;
  title: string;
  section: string;
  category: string;
  badge: string;
  icon: any;
}

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (sectionId: string) => void;
}

export const SearchPalette: React.FC<SearchPaletteProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: SearchItem[] = [
    { id: 'bachelor', title: 'Bachelor of Science (B.Sc.) & EKS', section: 'studium', category: 'Studium', badge: 'B.Sc.', icon: GraduationCap },
    { id: 'klip', title: 'Master KliP & Weg zur Approbation (PsychThG)', section: 'studium', category: 'Studium', badge: 'M.Sc.', icon: GraduationCap },
    { id: 'msc-psych', title: 'Master Psychologie (Kognition & Wirtschaft)', section: 'studium', category: 'Studium', badge: 'M.Sc.', icon: GraduationCap },
    { id: 'blackbox', title: 'BlackBox Magazin – Necker-Würfel Ausgabe', section: 'blackbox', category: 'Publikation', badge: 'Magazin', icon: FileText },
    { id: 'necker', title: 'Interaktiver Necker-Würfel (Bistabile Täuschung)', section: 'blackbox', category: 'Experiment', badge: 'Kognition', icon: Sparkle },
    { id: 'psychoparty', title: 'Psychoparty & Institutsfeiern', section: 'leben', category: 'Events', badge: 'Kult', icon: Calendar },
    { id: 'ersti-we', title: 'Ersti-Wochenende im Odenwald', section: 'leben', category: 'Events', badge: 'Community', icon: Calendar },
    { id: 'psychokino', title: 'PsychoKino im Hörsaal', section: 'leben', category: 'Events', badge: 'Kultur', icon: Calendar },
    { id: 'fachrat', title: 'FachRat & Institutsvorstand Psychologie', section: 'hopo', category: 'Hochschulpolitik', badge: 'Gremien', icon: Buildings },
    { id: 'qsm', title: 'QSM-Kommission (Qualitätssicherung Lehre)', section: 'hopo', category: 'Hochschulpolitik', badge: 'Finanzen', icon: Buildings },
    { id: 'stura', title: 'StuRa Heidelberg (Verfasste Studierendenschaft)', section: 'hopo', category: 'Hochschulpolitik', badge: 'Uni-Ebene', icon: Buildings },
    { id: 'faq-heico', title: 'heiCO Prüfungsanmeldung & Fristen', section: 'faq', category: 'Service', badge: 'FAQ', icon: BookOpen },
    { id: 'altklausuren', title: 'Altklausuren & Protokoll-Archiv', section: 'faq', category: 'Prüfungen', badge: 'Archiv', icon: FileText },
    { id: 'downloads', title: 'Ersti-Guide 2026/27 & Modulhandbücher', section: 'faq', category: 'Downloads', badge: 'PDF', icon: FileText },
    { id: 'raum', title: 'Fachschaftsraum A001 & Sprechstunden', section: 'kontakt', category: 'Kontakt', badge: 'Vor Ort', icon: EnvelopeSimple },
    { id: 'sitzung', title: 'Offene Fachschaftssitzung (Di 18:00 Uhr)', section: 'kontakt', category: 'Mitmachen', badge: 'Wöchentlich', icon: Buildings }
  ];

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.badge.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          onSelect(filteredItems[selectedIndex].section);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, onSelect]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-[#FAF8F5]">
          <MagnifyingGlass size={22} className="text-[#85151D] shrink-0" weight="bold" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Wonach suchst du? (z.B. KliP, Altklausuren, EKS, Raum A001)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 outline-hidden font-medium"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 flex-1 divide-y divide-stone-100/80">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-stone-500 text-sm">
              Keine Treffer für „{query}“. Versuche Begriffe wie <em>Bachelor</em>, <em>Approbation</em>, <em>Sitzung</em> oder <em>Klausuren</em>.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelect(item.section);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-colors cursor-pointer ${
                    isSelected 
                      ? 'bg-red-50 text-[#85151D]' 
                      : 'hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#85151D] text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <Icon size={18} weight="bold" />
                    </span>
                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/80 font-semibold">
                      {item.badge}
                    </span>
                    <ArrowRight size={14} className={isSelected ? 'text-[#85151D] translate-x-0.5' : 'text-stone-400'} weight="bold" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 border-t border-stone-200 bg-[#FAF8F5] text-[11px] text-stone-500 flex items-center justify-between font-mono">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigieren</span>
            <span>↵ Auswählen</span>
            <span>ESC Schließen</span>
          </div>
          <span className="text-[#85151D] font-bold">Fachschaft Psychologie HD</span>
        </div>
      </div>
    </div>
  );
};
