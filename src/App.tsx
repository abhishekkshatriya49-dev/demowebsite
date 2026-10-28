import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollVideoHero } from './components/ScrollVideoHero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MenuSection } from './components/MenuSection';
import { FavoritesSection } from './components/FavoritesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BottomCallBar } from './components/BottomCallBar';

export const App: React.FC = () => {
  useEffect(() => {
    // Set up scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="velvet-bean-app">
      <Navbar onNavigate={scrollToSection} />

      <main>
        <ScrollVideoHero
          onExploreMenu={() => scrollToSection('menu')}
          onFindCafe={() => scrollToSection('contact')}
        />

        <AboutSection onDiscoverMenu={() => scrollToSection('menu')} />

        <FeaturesSection />

        <MenuSection />

        <FavoritesSection />

        <GallerySection />

        <TestimonialsSection />

        <CtaSection onPlanVisit={() => scrollToSection('contact')} />

        <ContactSection />
      </main>

      <Footer onNavigate={scrollToSection} />

      {/* Persistent thumb-reachable call bar for phones with safe-area spacing */}
      <BottomCallBar onNavigateToContact={() => scrollToSection('contact')} />
    </div>
  );
};

export default App;
