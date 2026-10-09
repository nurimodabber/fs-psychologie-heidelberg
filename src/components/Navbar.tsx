import React, { useState, useEffect } from 'react';
import { 
  List, 
  X, 
  ArrowUpRight, 
  BookOpen, 
  Calendar, 
  Compass, 
  Buildings, 
  FileText,
  EnvelopeSimple,
  MagnifyingGlass
} from '@phosphor-icons/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'studium', label: 'Studium & Approbation', icon: Compass },
    { id: 'quicklinks', label: 'Quick Links', icon: BookOpen },
    { id: 'blackbox', label: 'BlackBox Magazin', icon: FileText },
    { id: 'leben', label: 'Leben am Institut', icon: Calendar },
    { id: 'hopo', label: 'Hochschulpolitik', icon: Buildings },
    { id: 'faq', label: 'FAQ & Downloads', icon: FileText },
    { id: 'kontakt', label: 'Kontakt & Raum', icon: EnvelopeSimple },
  ];

  return (
    <>
      {/* Top University Heritage Stripe */}
      <div className="bg-[#121316] text-[#FAF8F5] text-xs font-medium border-b border-white/10 tracking-wide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#85151D] text-white font-serif font-bold text-xs">
              Ψ
            </span>
            <span className="text-stone-300">
              Ruprecht-Karls-Universität Heidelberg · Fakultät für Verhaltens- und Empirische Kulturwissenschaften
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Sitzung: Di 18:00 Uhr · Hauptstr. 47
            </span>
            <span className="font-mono text-[11px] text-amber-300/90 font-medium">
              SEMPER APERTUS 1386
            </span>
          </div>
        </div>
      </div>

      {/* Main Island Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FCFBF9]/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs py-3' 
          : 'bg-[#FCFBF9] py-4 border-b border-stone-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Institute Identity */}
          <button 
            onClick={() => onNavigate('top')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#85151D] flex items-center justify-center text-white font-serif text-2xl font-bold shadow-xs transition-transform duration-300 group-hover:scale-105">
              Ψ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#85151D]">
                  Fachschaft
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-sm bg-stone-100 text-stone-600 border border-stone-200">
                  Psychologie
                </span>
              </div>
              <div className="text-base font-extrabold tracking-tight text-[#121316] group-hover:text-[#85151D] transition-colors">
                Universität Heidelberg
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#85151D] bg-red-50/90 font-semibold'
                      : 'text-stone-700 hover:text-[#85151D] hover:bg-stone-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search & CTA */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 border border-stone-200/90 text-xs font-medium text-stone-700 transition-colors cursor-pointer"
                title="Schnellsuche öffnen (⌘K)"
              >
                <MagnifyingGlass size={15} className="text-[#85151D]" weight="bold" />
                <span>Suche</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-white border border-stone-200 text-stone-500">
                  ⌘K
                </span>
              </button>
            )}

            <button
              onClick={() => onNavigate('studium')}
              className="hidden sm:inline-flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full bg-[#85151D] text-white text-xs font-semibold hover:bg-[#660E15] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group active:scale-[0.98]"
            >
              <span>Ersti-Guide</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </button>

            {/* Mobile Search Icon */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="sm:hidden p-2 rounded-lg text-stone-700 hover:text-[#85151D] hover:bg-stone-100 cursor-pointer"
                aria-label="Suche öffnen"
              >
                <MagnifyingGlass size={20} weight="bold" />
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:text-[#85151D] hover:bg-stone-100 focus:outline-hidden cursor-pointer"
              aria-label="Navigation umschalten"
            >
              {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-stone-200 bg-[#FCFBF9] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-red-50 text-[#85151D] font-semibold'
                        : 'text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-[#85151D]' : 'text-stone-500'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onNavigate('kontakt');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#85151D] text-white text-sm font-semibold hover:bg-[#660E15] transition-colors"
                >
                  <span>Fachschaft kontaktieren</span>
                  <ArrowUpRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
