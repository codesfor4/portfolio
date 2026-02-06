
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import ScrollProjects from './components/ScrollProjects';
import LadderClimbWrapper from './components/LadderClimbWrapper';
import StepByStepScroll, { ScrollStep } from './components/StepByStepScroll';
import { GlowingLine } from './components/GlowingLine';
import { journeyItems, JourneyCard } from './components/JourneySteps';
import { skillsList, SkillText } from './components/SkillSteps';
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
      const sections = ['home', 'journey', 'video', 'skills', 'projects', 'about'];
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

        <section id="journey">
          <StepByStepScroll steps={[
            // Journey Section Heading
            {
              type: 'heading',
              id: 'journey-heading',
              content: (
                <div className="text-center">
                  <h2 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
                    The Journey So Far
                  </h2>
                </div>
              )
            },
            // Individual Journey cards with bold black backgrounds
            ...journeyItems.map((item, i) => ({
              type: 'card' as const,
              id: `journey-card-${i}`,
              content: <JourneyCard item={item} />
            })),
          ]} />
        </section>

        <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          {/* Yellow diagonal stripes background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"></div>

          {/* Diagonal black stripes - Hidden on mobile for cleaner look */}
          <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-slate-900 transform -skew-y-3 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 sm:h-32 bg-slate-900 transform -skew-y-3 origin-bottom-right"></div>
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-slate-900 transform rotate-45 translate-x-16 sm:translate-x-32 -translate-y-16 sm:-translate-y-32 hidden sm:block"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-slate-900 transform rotate-45 -translate-x-16 sm:-translate-x-32 translate-y-16 sm:translate-y-32 hidden sm:block"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Vertical "Skills" text - Hidden on small mobile */}
              <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden md:block">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-yellow-400 border-l-4 sm:border-l-8 border-yellow-400 pl-2 sm:pl-4">
                  Skills
                </h3>
              </div>

              {/* Main content */}
              <div className="md:ml-12 lg:ml-24">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-4 sm:mb-6 text-center md:text-left">
                  What I do
                </h2>
                <p className="text-slate-400 text-sm sm:text-base text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
                  Specialized in data analysis, automation, and quality assurance with expertise across modern development tools and frameworks.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                  {skillsList.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 lg:space-y-4 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-yellow-400/50 hover:bg-slate-800 transition-all group"
                    >
                      {/* Icon placeholder */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-900 font-black text-lg sm:text-xl lg:text-2xl group-hover:scale-110 transition-transform">
                        {skill.charAt(0)}
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-slate-300 text-center uppercase tracking-wider break-words w-full">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative yellow line - Hidden on mobile */}
              <div className="absolute right-4 sm:right-8 top-1/4 bottom-1/4 w-0.5 sm:w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block"></div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-0 bg-transparent">
          <ScrollProjects />
        </section>

        <section id="about" className="py-16 sm:py-24 lg:py-32 bg-slate-950/40 backdrop-blur-sm">
          <About />
        </section>
      </main>

      <Footer />
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
};

export default App;
