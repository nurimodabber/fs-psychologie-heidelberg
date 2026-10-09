import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { QuickLinks } from './components/QuickLinks.tsx';
import { StudyPathways } from './components/StudyPathways.tsx';
import { BlackBoxFeature } from './components/BlackBoxFeature.tsx';
import { LifeAtInstitute } from './components/LifeAtInstitute.tsx';
import { HopoSection } from './components/HopoSection.tsx';
import { FaqDownloads } from './components/FaqDownloads.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('top');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('top');
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['studium', 'quicklinks', 'blackbox', 'leben', 'hopo', 'faq', 'kontakt'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121316]">
      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero 
          onExploreStudy={() => scrollToSection('studium')}
          onExploreLife={() => scrollToSection('leben')}
        />
        
        <QuickLinks onSelectTopic={scrollToSection} />

        <StudyPathways />

        <BlackBoxFeature />

        <LifeAtInstitute />

        <HopoSection />

        <FaqDownloads />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
