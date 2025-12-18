
import React from 'react';
import { ExternalLink, Github, ArrowLeft, Folder } from 'lucide-react';
import TiltCard from './TiltCard';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Predictive Analytics Dashboard",
    description: "End-to-end data pipeline for retail sales forecasting",
    longDescription: "Built a comprehensive analytics dashboard using SQL and Power BI to forecast retail sales trends with 92% accuracy. Implemented ETL pipelines and automated reporting systems.",
    tags: ["SQL", "Power BI", "Python", "ETL"],
    image: "https://picsum.photos/seed/dashboard/800/600",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Automated Lead Gen Bot",
    description: "Complex n8n workflow for B2B lead generation",
    longDescription: "Developed an intelligent automation system that scrapes, verifies, and categorizes potential B2B leads via LinkedIn APIs. Reduced manual prospecting time by 80%.",
    tags: ["n8n", "Node.js", "Automation", "API"],
    image: "https://picsum.photos/seed/leadbot/800/600",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Health Tech QA Suite",
    description: "Comprehensive automated testing for healthcare apps",
    longDescription: "Created an automated testing suite for a healthcare application, reducing regression testing time by 60%. Includes unit, integration, and E2E test coverage.",
    tags: ["QA", "Selenium", "JavaScript", "Jest"],
    image: "https://picsum.photos/seed/qatest/800/600",
    github: "#",
    featured: true
  },
  {
    title: "E-commerce Data Pipeline",
    description: "Real-time inventory and sales tracking system",
    longDescription: "Designed and implemented a real-time data pipeline for e-commerce analytics, processing over 100K transactions daily with sub-second latency.",
    tags: ["Python", "Apache Kafka", "PostgreSQL"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
    github: "#",
    live: "#"
  },
  {
    title: "AI Customer Support Bot",
    description: "NLP-powered chatbot for customer queries",
    longDescription: "Built an intelligent chatbot using NLP techniques to handle customer support queries, achieving 85% resolution rate without human intervention.",
    tags: ["Python", "NLP", "FastAPI", "Redis"],
    image: "https://picsum.photos/seed/aibot/800/600",
    github: "#"
  },
  {
    title: "Workflow Automation Suite",
    description: "Business process automation platform",
    longDescription: "Developed a comprehensive workflow automation platform that integrates with 20+ third-party services, saving 40+ hours of manual work weekly.",
    tags: ["n8n", "Zapier", "REST APIs", "Webhooks"],
    image: "https://picsum.photos/seed/workflow/800/600",
    github: "#",
    live: "#"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <TiltCard className={`group rounded-2xl overflow-hidden glass-card ${project.featured ? 'ring-1 ring-blue-500/30' : ''}`}>
    {project.featured && (
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
        <span className="text-blue-400 text-xs font-bold">Featured</span>
      </div>
    )}

    <div className="aspect-video w-full overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
    </div>

    <div className="p-6 relative">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {project.longDescription}
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
        {project.github && (
          <a
            href={project.github}
            className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </TiltCard>
);

const ProjectsPage: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </a>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Folder size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">My Work</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of my work spanning automation, data analytics, quality assurance,
            and AI-powered solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            Other Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center glass-card rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:thorataditya859@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
