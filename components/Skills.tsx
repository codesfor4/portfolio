
import React, { useEffect, useRef, useState } from 'react';

interface SkillItem {
  name: string;
  side: 'left' | 'right';
}

const SkillCard: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection status to allow disappearing when scrolling away
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px' // Slightly inset so it disappears just before hitting edges
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isLeft = skill.side === 'left';

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center justify-center relative transition-all duration-700 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0' 
          : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'} translate-y-12 scale-95 blur-sm`
      } ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`w-full md:w-1/2 px-4 ${
        isLeft ? 'md:text-left ' : 'md:text-right'
      }`}>
        <div className="inline-block p-4 px-4 rounded-3xl glass-card hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-500 cursor-default group w-full md:w-auto overflow-hidden relative">
          {/* Subtle hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-blue-400 group-hover:neon-text-blue transition-all relative z-10">
            {skill.name}
          </span>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-2 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>

      <div className="hidden md:block md:w-1/2 px-2"></div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when section top enters viewport, 100 when section bottom exits
      const progress = Math.max(0, Math.min(100,
        ((viewportHeight - rect.top) / (sectionHeight + viewportHeight)) * 100
      ));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills: SkillItem[] = [
    { name: 'QA (Quality Assurance)', side: 'left' },
    { name: 'n8n Automation', side: 'right' },
    { name: 'Python Engineering', side: 'left' },
    { name: 'A/B Testing', side: 'right' },
    { name: 'System Testing', side: 'left' },
    { name: 'Workflow Automation', side: 'right' },
    { name: 'SQL Querying', side: 'left' },
    { name: 'MySQL Database', side: 'right' },
    { name: 'Power BI Visualization', side: 'left' },
  ];

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-6 relative">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Tech Stack</h2>
        <p className="text-slate-500 text-xl font-light">
          A collection of tools that drive my <span className="text-blue-500">automation ecosystem</span>.
        </p>
      </div>

      {/* Vertical Line with Scroll-Driven Glow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-blue-600/30 via-blue-400/20 to-transparent hidden md:block">
        {/* Scroll-driven glow that travels down/up with scroll */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-20 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-full blur-sm transition-all duration-150"
          style={{ top: `${Math.min(scrollProgress, 85)}%` }}
        />
        {/* Bright center glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-white via-cyan-300 to-transparent rounded-full transition-all duration-150"
          style={{ top: `${Math.min(scrollProgress, 85)}%` }}
        />
        {/* Base line glow */}
        <div className="absolute inset-0 w-px bg-blue-500/30 blur-sm"></div>
      </div>

      <div className="space-y-4 md:space-y-6 relative">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
