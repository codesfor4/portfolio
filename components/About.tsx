
import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Passion for Building <span className="text-blue-500">Efficient Solutions</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am a results-driven professional with a deep passion for data, AI, and automation. 
              My journey began with a curiosity for how complex systems can be simplified through 
              smart logic and data-driven insights.
            </p>
            <p>
              Today, I focus on bridging the gap between raw information and business value. 
              Whether it's architecting a robust SQL database or engineering an automated 
              workflow that saves hours of manual labor, my goal is always scalability and efficiency.
            </p>
            <p>
              When I'm not digging into datasets, I'm exploring the latest in generative AI 
              and finding new ways to integrate machine learning into everyday problem-solving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Thinker</h4>
            <p className="text-slate-400 text-sm">Rapidly prototyping solutions for complex business hurdles.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
              <Target size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Goal Oriented</h4>
            <p className="text-slate-400 text-sm">Focusing on high-impact KPIs and measurable growth results.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all sm:col-span-2">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Growth Mindset</h4>
                <p className="text-slate-400 text-sm">Continuously learning and adapting to the fast-evolving tech landscape to bring the most modern solutions to the table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
