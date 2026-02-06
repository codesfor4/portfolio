
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

        <section id="skills" className="py-32 relative overflow-hidden">
          {/* Yellow diagonal stripes background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"></div>
          
          {/* Diagonal black stripes */}
          <div className="absolute top-0 left-0 w-full h-32 bg-slate-900 transform -skew-y-3 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-slate-900 transform -skew-y-3 origin-bottom-right"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900 transform rotate-45 translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900 transform rotate-45 -translate-x-32 translate-y-32"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* Vertical "Skills" text */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                <h3 className="text-4xl font-black tracking-wider text-yellow-400 border-l-8 border-yellow-400 pl-4">
                  Skills
                </h3>
              </div>
              
              {/* Main content */}
              <div className="ml-16 md:ml-24">
                <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6">
                  What I do
                </h2>
                <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
                  Specialized in data analysis, automation, and quality assurance with expertise across modern development tools and frameworks.
                </p>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                  {skillsList.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center justify-center space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-yellow-400/50 hover:bg-slate-800 transition-all group"
                    >
                      {/* Icon placeholder - you can replace with actual icons */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-900 font-black text-2xl group-hover:scale-110 transition-transform">
                        {skill.charAt(0)}
                      </div>
                      <span className="text-sm md:text-base font-bold text-slate-300 text-center uppercase tracking-wider">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative yellow line */}
              <div className="absolute right-8 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-0 bg-transparent">
          <ScrollProjects />
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
