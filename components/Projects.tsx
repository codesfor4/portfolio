
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ title: string; desc: string; tags: string[]; img: string }> = ({ title, desc, tags, img }) => (
  <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02]">
    <div className="aspect-video w-full overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-4 sm:p-6 relative">
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">{desc}</p>
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs sm:text-sm font-medium">
          <Github size={14} className="sm:w-4 sm:h-4" /> Code
        </button>
        <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs sm:text-sm font-medium">
          <ExternalLink size={14} className="sm:w-4 sm:h-4" /> Live Demo
        </button>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Lightning-Fast Analytics Engine",
      desc: "Blazing SQL + Power BI pipeline that crushes retail forecasting with 92% precision. Built for speed, optimized for results.",
      tags: ["SQL", "Power BI", "Python"],
      img: "https://picsum.photos/seed/project1/600/400"
    },
    {
      title: "Turbo Lead Hunter Bot",
      desc: "Insane n8n automation that rips through LinkedIn, finds leads, and sorts them faster than you can blink. Pure efficiency.",
      tags: ["n8n", "Node.js", "Automation"],
      img: "https://picsum.photos/seed/project2/600/400"
    },
    {
      title: "Rocket-Speed QA Machine",
      desc: "Automated testing beast that slashes regression time by 60%. Healthcare-grade precision meets lightning execution.",
      tags: ["QA", "Selenium", "JavaScript"],
      img: "https://picsum.photos/seed/project3/600/400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          🚀 Speed Projects
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl px-4 sm:px-0">
          Fast builds, faster results. Automation that moves at the speed of thought.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  );
};

export default Projects;
