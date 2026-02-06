
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, Folder } from 'lucide-react';
import TiltCard from './TiltCard';
import ProjectDetailModal from './ProjectDetailModal';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;

  // PM-focused fields
  category: 'product' | 'analytics' | 'automation';
  role: string;
  problemStatement: string;
  solution: string;
  outcome: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  duration?: string;
  stakeholders?: string[];
  methodologies?: string[];
}

const projects: Project[] = [
  {
    title: "Retail Analytics Platform",
    description: "Product strategy for predictive sales forecasting solution",
    longDescription: "Led product development for a retail analytics platform that empowers store managers to make data-driven inventory decisions. Conducted user research with 15 retail partners to identify pain points and prioritized features based on impact.",
    tags: ["Product Strategy", "Analytics", "User Research", "Data-Driven"],
    image: "/assets/projects sample.avif",
    github: "#",
    live: "#",
    featured: true,
    category: "analytics",
    role: "Technical Product Manager",
    problemStatement: "Retail store managers struggled with inventory planning, leading to 30% stockouts and 25% overstock situations. Existing tools were complex and required data science expertise, limiting adoption.",
    solution: "Designed an intuitive analytics dashboard with automated forecasting. Prioritized features using RICE framework based on user interviews. Simplified ML models into actionable insights with confidence scores. Collaborated with engineering to ensure sub-second load times.",
    outcome: "Reduced stockouts by 45% and overstock by 35%. Achieved 92% forecast accuracy. Adopted by 50+ retail locations with 4.6/5 user satisfaction. Generated $200K ARR in first 6 months.",
    metrics: [
      { label: "Forecast Accuracy", value: "92%" },
      { label: "Stockout Reduction", value: "45%" },
      { label: "User Satisfaction", value: "4.6/5" }
    ],
    duration: "5 months",
    stakeholders: ["Retail Partners", "Engineering", "Data Science", "Sales"],
    methodologies: ["User Research", "RICE Prioritization", "Agile/Scrum"]
  },
  {
    title: "B2B Lead Generation Platform",
    description: "End-to-end product development for sales prospecting automation",
    longDescription: "Led product strategy for an intelligent lead generation platform serving B2B sales teams. Conducted 20+ user interviews to understand prospecting challenges, defined product vision, and shipped iterative improvements based on user feedback and behavioral analytics.",
    tags: ["Product Strategy", "B2B SaaS", "Growth", "Automation"],
    image: "/assets/cosmic.avif",
    github: "#",
    live: "#",
    featured: true,
    category: "product",
    role: "Technical Product Manager",
    problemStatement: "Sales teams spent 15+ hours weekly on manual prospect research with poor conversion rates. Existing tools lacked intelligence and required extensive manual verification, creating friction in the sales process.",
    solution: "Designed smart automation combining LinkedIn APIs with verification workflows. Prioritized MVP features: automated discovery, enrichment, scoring, and CRM integration. Made strategic trade-offs between accuracy and speed based on user research. Implemented feedback loops for continuous improvement.",
    outcome: "Reduced prospecting time by 80% (12 hours saved per rep weekly). Improved lead quality with 92% verification accuracy. Adopted by 5 sales teams with 4.7/5 satisfaction rating. Generated positive ROI within first month of deployment.",
    metrics: [
      { label: "Time Reduction", value: "80%" },
      { label: "Lead Quality", value: "92%" },
      { label: "User Satisfaction", value: "4.7/5" }
    ],
    duration: "4 months",
    stakeholders: ["Sales Team", "Engineering", "Marketing", "Customer Success"],
    methodologies: ["Jobs-to-be-Done", "RICE Prioritization", "Agile/Scrum", "A/B Testing"]
  },
  {
    title: "Healthcare QA Platform",
    description: "Product vision for automated quality assurance in health tech",
    longDescription: "Defined product strategy for an automated testing platform tailored to healthcare applications. Collaborated with clinical staff and engineering to understand compliance requirements and designed a QA solution that balances speed with regulatory needs.",
    tags: ["Product Strategy", "Healthcare", "Quality Assurance", "Compliance"],
    image: "/assets/projects sample.avif",
    github: "#",
    featured: true,
    category: "product",
    role: "Product Owner",
    problemStatement: "Healthcare app development teams faced 2-week regression testing cycles for each release, delaying critical features. Manual testing was error-prone and couldn't scale with increasing app complexity and regulatory requirements.",
    solution: "Designed automated testing suite addressing healthcare-specific needs. Prioritized features based on risk assessment and regulatory impact. Built roadmap balancing technical debt reduction with new feature development. Created testing templates for HIPAA compliance scenarios.",
    outcome: "Reduced regression testing time by 60% (from 2 weeks to 3 days). Zero compliance violations in production. Enabled bi-weekly release cycles. Improved team confidence with 95% test coverage. Saved $150K annually in manual QA costs.",
    metrics: [
      { label: "Testing Time Reduction", value: "60%" },
      { label: "Test Coverage", value: "95%" },
      { label: "Cost Savings", value: "$150K/year" }
    ],
    duration: "6 months",
    stakeholders: ["Engineering", "Clinical Staff", "Compliance", "QA Team"],
    methodologies: ["Risk-Based Prioritization", "Lean Product Development", "Continuous Delivery"]
  },
  {
    title: "E-commerce Data Platform",
    description: "Real-time analytics product for inventory and sales optimization",
    longDescription: "Defined product requirements for a real-time data platform serving e-commerce operations teams. Conducted stakeholder interviews across operations, finance, and merchandising to identify key metrics and designed dashboards that drive decision-making.",
    tags: ["Product Analytics", "E-commerce", "Real-time Data", "Operations"],
    image: "/assets/cosmic.avif",
    github: "#",
    live: "#",
    category: "analytics",
    role: "Product Analyst",
    problemStatement: "E-commerce operations teams lacked real-time visibility into inventory and sales trends, leading to stockouts during peak demand and missed revenue opportunities. Data was scattered across multiple systems with 24-hour lag.",
    solution: "Designed unified real-time data platform with sub-second latency. Prioritized key metrics based on business impact analysis. Created role-specific dashboards for operations, merchandising, and finance teams. Collaborated with data engineering on scalable architecture for 100K+ daily transactions.",
    outcome: "Enabled real-time decision-making across operations. Reduced stockout incidents by 40% during peak sales. Improved revenue capture by 15% through better inventory allocation. Platform processes 100K+ transactions daily with 99.9% uptime.",
    metrics: [
      { label: "Transaction Volume", value: "100K+/day" },
      { label: "Stockout Reduction", value: "40%" },
      { label: "Revenue Impact", value: "+15%" }
    ],
    duration: "4 months",
    stakeholders: ["Operations", "Finance", "Merchandising", "Data Engineering"],
    methodologies: ["Data-Driven Decisions", "Stakeholder Mapping", "Agile"]
  },
  {
    title: "AI-Powered Customer Support",
    description: "Product development for intelligent customer service automation",
    longDescription: "Led product strategy for an AI chatbot that revolutionizes customer support. Analyzed support ticket data to identify top issues, designed conversational flows, and measured success through resolution rate and customer satisfaction metrics.",
    tags: ["Product Strategy", "AI/ML", "Customer Experience", "NLP"],
    image: "/assets/projects sample.avif",
    github: "#",
    category: "product",
    role: "Technical Product Manager",
    problemStatement: "Customer support team was overwhelmed with repetitive queries, leading to 4-hour average response times and declining satisfaction scores. Support costs were growing 30% annually while quality decreased.",
    solution: "Designed AI chatbot focusing on top 20% of issues (80/20 rule). Prioritized features based on support ticket analysis and customer pain points. Created escalation flows for complex issues. Implemented continuous learning from customer feedback and support team input.",
    outcome: "Achieved 85% resolution rate without human intervention. Reduced average response time from 4 hours to instant. Improved customer satisfaction from 3.2 to 4.5 stars. Cut support costs by 40% while handling 3x query volume.",
    metrics: [
      { label: "Resolution Rate", value: "85%" },
      { label: "Response Time", value: "Instant" },
      { label: "Cost Reduction", value: "40%" }
    ],
    duration: "5 months",
    stakeholders: ["Customer Support", "Engineering", "ML Team", "Customers"],
    methodologies: ["Data Analysis", "80/20 Rule", "Continuous Improvement", "A/B Testing"]
  },
  {
    title: "Business Automation Platform",
    description: "Product roadmap for workflow automation SaaS",
    longDescription: "Defined product vision and roadmap for a comprehensive workflow automation platform. Conducted competitive analysis, identified market gaps, and prioritized integrations based on user demand. Achieved product-market fit through iterative user feedback and feature experimentation.",
    tags: ["Product Strategy", "SaaS", "Automation", "Integrations"],
    image: "/assets/cosmic.avif",
    github: "#",
    live: "#",
    category: "automation",
    role: "Technical Product Manager",
    problemStatement: "Small businesses spent 40+ hours weekly on repetitive manual tasks across disconnected tools. Existing automation platforms were too complex or lacked key integrations, creating adoption barriers.",
    solution: "Designed user-friendly automation platform with template library for common workflows. Prioritized top 20 integrations based on user research and market demand. Created progressive onboarding to reduce time-to-value. Used Jobs-to-be-Done framework to understand user intent.",
    outcome: "Platform integrates with 20+ services and saves users 40+ hours weekly. Achieved 70% user activation rate with template library. Grew to 500+ active users with 4.8/5 satisfaction. Generated $120K ARR with 20% MoM growth.",
    metrics: [
      { label: "Time Saved", value: "40+ hrs/week" },
      { label: "User Activation", value: "70%" },
      { label: "User Satisfaction", value: "4.8/5" }
    ],
    duration: "6 months",
    stakeholders: ["SMB Users", "Engineering", "Design", "Marketing"],
    methodologies: ["Jobs-to-be-Done", "Product-Market Fit", "Growth Loops", "User Onboarding"]
  }
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <TiltCard
    className={`group rounded-2xl overflow-hidden glass-card cursor-pointer active:scale-[0.98] transition-transform ${project.featured ? 'ring-1 ring-blue-500/30' : ''}`}
    onClick={onClick}
  >
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

      {/* View Details Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-bold text-lg">View Details</span>
      </div>
    </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 text-slate-500">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {project.longDescription}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {project.metrics.slice(0, 2).map((metric, i) => (
            <div
              key={`${metric.label}-${i}`}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <span className="text-[10px] uppercase tracking-wider text-blue-300 font-semibold">
                {metric.label}
              </span>
              <span className="text-xs text-white font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-500 capitalize">{project.role}</span>
        {project.metrics && project.metrics.length > 0 && (
          <>
            <span className="text-slate-700">•</span>
            <span className="text-xs text-slate-500">{project.metrics.length} key metrics</span>
          </>
        )}
      </div>
    </div>
  </TiltCard>
);

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'product' | 'analytics' | 'automation'>('all');

  // Filter projects by category
  const filteredProjects = projects.filter(p =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of product case studies spanning B2B SaaS, analytics platforms,
            and workflow automation. Each showcases user-centered problem solving,
            data-driven decision making, and measurable business impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                : 'glass-card text-slate-400 hover:text-white hover:border-purple-500/30'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory('product')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'product'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                : 'glass-card text-slate-400 hover:text-white hover:border-purple-500/30'
            }`}
          >
            Product Strategy
          </button>
          <button
            onClick={() => setActiveCategory('analytics')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'analytics'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'glass-card text-slate-400 hover:text-white hover:border-blue-500/30'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveCategory('automation')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'automation'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-slate-400 hover:text-white hover:border-cyan-500/30'
            }`}
          >
            Automation
          </button>
        </div>

        {/* Result Count */}
        <p className="text-center text-slate-500 mb-12">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {featuredProjects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-indigo-500"></span>
              Other Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}

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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectsPage;
