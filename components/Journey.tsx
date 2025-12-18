
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
    {/* Connection Point - Dot sits on the timeline, line flows down to card */}
    <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
      {/* The dot on the timeline */}
      <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-black shadow-[0_0_20px_rgba(37,99,235,0.8)] group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(37,99,235,1)] transition-all duration-500 z-10"></div>
      {/* Vertical line from dot to card */}
      <div className="w-px h-[24px] bg-gradient-to-b from-blue-600 to-blue-600/40"></div>
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
      {/* Centered Title Section with Flow Line */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-0 relative">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Journey So Far
        </h2>
        {/* Vertical Flow Line from title to timeline */}
        <div className="flex justify-center mt-4">
          <div className="w-px h-24 bg-gradient-to-b from-blue-600/80 via-blue-600/50 to-blue-600/30 relative">
            {/* Animated pulse traveling down */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-px bg-blue-500/50 blur-sm"></div>
          </div>
        </div>
      </div>

      <div className="relative group pt-0">
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

        {/* The Timeline Axis - Connected to flow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent z-0"></div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-24 pt-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
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
