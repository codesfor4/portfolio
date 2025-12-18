
import React, { useRef } from 'react';
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface JourneyCardProps {
  title: string;
  subtitle: string;
  details: string;
  period: string;
  // Use React.ReactElement instead of React.ReactNode to satisfy cloneElement requirements
  icon: React.ReactElement;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, subtitle, details, period, icon }) => (
  <div className="w-[280px] md:w-[340px] flex-shrink-0 glass-card rounded-[2rem] p-6 transition-all duration-700 hover:-translate-y-6 hover:border-blue-500/60 group relative snap-center">
    {/* Connection Point to the Line - Precision Aligned closer to the dot (12px instead of 30px) */}
    <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
      <div className="w-px h-[12px] bg-gradient-to-b from-blue-600/40 to-blue-600/80"></div>
      <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-black shadow-[0_0_25px_rgba(37,99,235,1)] group-hover:scale-150 transition-all duration-500 z-10"></div>
    </div>
    
    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
      {/* Fix: cast element to any generic to allow dynamic props like size */}
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center text-[12px] font-bold text-blue-400 uppercase tracking-[0.3em]">
        <Calendar size={14} className="mr-3" />
        {period}
      </div>
      <h3 className="text-2xl font-black text-white leading-tight group-hover:text-blue-100 transition-colors">{title}</h3>
      <p className="text-lg font-semibold text-slate-300">{subtitle}</p>
      <div className="pt-6 border-t border-white/10">
        <p className="text-slate-400 text-sm leading-relaxed font-light">
          {details}
        </p>
      </div>
    </div>
  </div>
);

const Journey: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const journeyItems = [
    {
      title: "Bachelor of Engineering",
      subtitle: "Comp Eng. & Visual Arts",
      details: "Focusing on the intersection of technical excellence and creative expression. Maintaining a high academic standard with a CGPA of 7.75.",
      period: "2021 - 2025",
      icon: <GraduationCap />
    },
    {
      title: "Data Analysis Intern",
      subtitle: "Kanishka Software",
      details: "Transformed raw datasets into actionable insights. Developed predictive models and optimized complex SQL queries for real-time reporting.",
      period: "June 2025 – Oct 2025",
      icon: <Briefcase />
    },
    {
      title: "AI Automation Lead",
      subtitle: "Personal Projects",
      details: "Pioneering autonomous workflows using LLMs and n8n. Building systems that bridge the gap between human intent and automated execution.",
      period: "Jan 2024 - Present",
      icon: <Briefcase />
    },
    {
      title: "Workflow Consultant",
      subtitle: "Independent",
      details: "Partnering with businesses to audit and overhaul their digital infrastructure, implementing intelligent automations that scale.",
      period: "Aug 2024 - Present",
      icon: <Briefcase />
    }
  ];

  return (
    <div className="w-full relative py-2 overflow-hidden">
      {/* Centered Title Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Journey So Far
        </h2>
      </div>

      <div className="relative group pt-12">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-90 md:flex hidden"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-90 md:flex hidden"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>

        {/* The Timeline Axis - Adjusted to top-12 to align with dots */}
        <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent z-0"></div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-24 pt-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Edge Spacers to center initial cards */}
          <div className="flex-shrink-0 w-[5vw] md:w-[10vw]"></div>
          
          {journeyItems.map((item, index) => (
            <JourneyCard key={index} {...item} />
          ))}

          <div className="flex-shrink-0 w-[5vw] md:w-[10vw]"></div>
        </div>
      </div>
      
      {/* Refined Edge Gradients */}
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-black via-black/60 to-transparent pointer-events-none z-20"></div>
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default Journey;
