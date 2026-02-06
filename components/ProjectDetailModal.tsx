
import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
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

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const categoryColors = {
    product: 'purple',
    analytics: 'blue',
    automation: 'cyan'
  };

  const color = categoryColors[project.category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-slate-950 md:rounded-2xl overflow-hidden border-0 md:border md:border-slate-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="h-full md:max-h-[90vh] overflow-y-auto">
          {/* Hero Image */}
          <div className="relative w-full aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

            {/* Category Badge */}
            <div className={`absolute top-4 left-4 px-4 py-2 rounded-full glass-card border border-${color}-500/30`}>
              <span className={`text-${color}-400 text-sm font-bold capitalize`}>{project.category}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-400 text-xs font-bold`}>
                  {project.role}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h2>
              <p className="text-lg text-slate-300">{project.longDescription}</p>
            </div>

            {/* Quick Stats */}
            {(project.duration || project.stakeholders || project.methodologies) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.duration && (
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                      <Calendar size={16} />
                      <span>Duration</span>
                    </div>
                    <p className="text-white font-semibold">{project.duration}</p>
                  </div>
                )}
                {project.stakeholders && project.stakeholders.length > 0 && (
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                      <Users size={16} />
                      <span>Stakeholders</span>
                    </div>
                    <p className="text-white font-semibold">{project.stakeholders.length}</p>
                  </div>
                )}
                {project.methodologies && project.methodologies.length > 0 && (
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                      <Target size={16} />
                      <span>Methodologies</span>
                    </div>
                    <p className="text-white font-semibold">{project.methodologies.length}</p>
                  </div>
                )}
              </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Key Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className={`glass-card p-6 rounded-xl border border-${color}-500/20 hover:border-${color}-500/40 transition-all`}>
                      <div className={`text-3xl font-bold text-${color}-400 mb-2`}>{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Problem
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.problemStatement}</p>
            </div>

            {/* Solution */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-${color}-500`}></span>
                Solution
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
            </div>

            {/* Outcome */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Outcome
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.outcome}</p>
            </div>

            {/* Stakeholders */}
            {project.stakeholders && project.stakeholders.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">Stakeholders</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stakeholders.map((stakeholder, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
                    >
                      {stakeholder}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Methodologies */}
            {project.methodologies && project.methodologies.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodologies.map((methodology, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full bg-${color}-500/10 text-${color}-400 text-sm border border-${color}-500/20`}
                    >
                      {methodology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded bg-slate-800 text-slate-300 text-sm border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            {(project.github || project.live) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full glass-card text-white hover:bg-slate-800 transition-all active:scale-95"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-${color}-600 text-white hover:bg-${color}-700 transition-all active:scale-95`}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
