
import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Building <span className="text-purple-500">Products That Matter</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I'm a product manager with a technical foundation in automation and analytics.
              My journey began with building systems, which taught me the importance of understanding
              both user needs and technical constraints.
            </p>
            <p>
              Today, I focus on creating data-driven products that solve real user problems and drive
              measurable business impact. My technical background helps me collaborate effectively with
              engineering teams, make pragmatic trade-offs, and build products that are both visionary
              and technically feasible.
            </p>
            <p>
              I believe the best products come from deep user understanding, rigorous experimentation,
              and cross-functional collaboration. Whether it's conducting user research, analyzing
              behavioral data, or prioritizing features based on impact, I'm driven by creating value
              for users and businesses alike.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl glass-card hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Thinker</h4>
            <p className="text-slate-400 text-sm">Rapidly prototyping solutions for complex business hurdles.</p>
          </div>

          <div className="p-8 rounded-3xl glass-card hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
              <Target size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Goal Oriented</h4>
            <p className="text-slate-400 text-sm">Focusing on high-impact KPIs and measurable growth results.</p>
          </div>

          <div className="p-8 rounded-3xl glass-card hover:border-blue-500/30 transition-all sm:col-span-2">
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
