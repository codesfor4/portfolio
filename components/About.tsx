
import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Building <span className="text-purple-500">Products That Matter</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 sm:mb-6">
              <Zap size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-2">Fast Thinker</h4>
            <p className="text-slate-400 text-xs sm:text-sm">Rapidly prototyping solutions for complex business hurdles.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card hover:border-indigo-500/30 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 sm:mb-6">
              <Target size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-2">Goal Oriented</h4>
            <p className="text-slate-400 text-xs sm:text-sm">Focusing on high-impact KPIs and measurable growth results.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card hover:border-blue-500/30 transition-all sm:col-span-2">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <TrendingUp size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">Growth Mindset</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Continuously learning and adapting to the fast-evolving tech landscape to bring the most modern solutions to the table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
