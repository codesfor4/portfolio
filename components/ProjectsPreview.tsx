
import React from 'react';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const ProjectsPreview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            🚀 <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Speed Work</span>
          </h2>

          <p className="text-lg text-slate-400">
            Lightning-fast automation, blazing dashboards, and turbo-charged solutions that crush deadlines.
          </p>

          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25"
          >
            See Speed Builds
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <TiltCard className="rounded-2xl overflow-hidden">
            <img
              src="/assets/projects sample.avif"
              alt="Projects Preview"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </TiltCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
