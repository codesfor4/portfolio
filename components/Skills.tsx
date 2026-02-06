import React, { useRef } from 'react';
import { Code, Database, Workflow, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactElement;
  gradient: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, gradient }) => (
  <div className="w-[320px] md:w-[420px] flex-shrink-0 glass-card rounded-[2rem] p-6 transition-all duration-700 hover:-translate-y-6 hover:border-purple-500/60 group relative snap-center">
    {/* Connection Point - Dot sits on the timeline */}
    <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
      <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.8)] group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(168,85,247,1)] transition-all duration-500 z-10"></div>
      <div className="w-px h-[24px] bg-gradient-to-b from-purple-600 to-purple-600/40"></div>
    </div>

    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all duration-500`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
    </div>

    <div className="space-y-4">
      <h3 className="text-2xl font-black text-white leading-tight group-hover:text-purple-100 transition-colors">{title}</h3>
      <div className="pt-6 border-t border-white/10 space-y-2">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
            <p className="text-slate-300 text-sm">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const skillCategories = [
    {
      title: "Automation & Workflows",
      skills: ["n8n Automation", "Workflow Design", "Process Optimization", "API Integration"],
      icon: <Workflow />,
      gradient: "from-purple-600/20 to-purple-600/10"
    },
    {
      title: "Data & Analytics",
      skills: ["SQL Querying", "MySQL Database", "Power BI Visualization", "Data Analysis"],
      icon: <Database />,
      gradient: "from-blue-600/20 to-blue-600/10"
    },
    {
      title: "Development",
      skills: ["Python Engineering", "QA Testing", "A/B Testing", "System Testing"],
      icon: <Code />,
      gradient: "from-cyan-600/20 to-cyan-600/10"
    }
  ];

  return (
    <div className="w-full relative py-2 overflow-hidden">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-0 relative">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Skills
        </h2>
        {/* Flow Line */}
        <div className="flex justify-center mt-4">
          <div className="w-px h-24 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/30 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-px bg-purple-500/50 blur-sm"></div>
          </div>
        </div>
      </div>

      <div className="relative group pt-0">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-2xl active:scale-90 md:flex hidden"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-2xl active:scale-90 md:flex hidden"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Timeline Axis */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent z-0"></div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-24 pt-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0 w-[5vw] md:w-[10vw]"></div>

          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}

          <div className="flex-shrink-0 w-[5vw] md:w-[10vw]"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
