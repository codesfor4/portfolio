import React from 'react';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const CaseStudies: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Structure Box / Image */}
        <div className="relative">
          <TiltCard className="rounded-2xl overflow-hidden">
            <img
              src="/assets/projects sample.avif"
              alt="Case Studies Preview"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </TiltCard>
        </div>

        {/* Right Side - Info Content */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Real-world solutions that drive measurable results. From automation to analytics,
            here's how I solve complex business problems with data-driven approaches.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Lead Generation Automation - 80% faster prospecting
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Predictive Analytics Dashboard - 92% accuracy
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Workflow Automation Suite - 40+ hrs saved weekly
            </li>
          </ul>

          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25"
          >
            Show More
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
