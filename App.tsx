
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import ProjectsPage from './components/ProjectsPage';
import ContactForm from './components/ContactForm';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    // Simple routing based on URL path
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === '/projects') {
        setCurrentPage('projects');
      } else {
        setCurrentPage('home');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'journey', 'skills', 'projects', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Projects page
  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-transparent text-slate-50 selection:bg-blue-600/50">
        <Background3D />
        <ProjectsPage />
        <Footer />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-transparent text-slate-50 selection:bg-blue-600/50">
      <Background3D />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <section id="home">
          <Hero onOpenContactForm={() => setIsContactFormOpen(true)} />
        </section>

        <section id="journey" className="pt-32 pb-8 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
          <Journey />
        </section>

        <section id="video" className="py-16 bg-gradient-to-b from-transparent via-red-900/5 to-transparent">
          <VideoSection />
        </section>

        <section id="skills" className="pt-8 pb-32">
          <Skills />
        </section>

        <section id="projects" className="py-32 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent">
          <CaseStudies />
        </section>

        <section id="about" className="py-32 bg-slate-950/40 backdrop-blur-sm">
          <About />
        </section>
      </main>

      <Footer />
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
};

export default App;
