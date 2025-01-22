import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import KeyIssuesSection from './components/KeyIssuesSection';
import MissionVisionSection from './components/MissionVisionSection';
import NewsSection from './components/NewsSection';
import PDFViewerSection from './components/PDFViewerSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="key-issues">
          <KeyIssuesSection />
        </section>
        <section id="mission-vision">
          <MissionVisionSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="pdf-viewer">
          <PDFViewerSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Srikanth Rathnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
