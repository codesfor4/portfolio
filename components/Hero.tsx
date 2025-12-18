
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenContactForm: () => void;
}

const TypewriterText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : subIndex === words[index].length ? 2000 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-blue-500 neon-text-blue font-bold tracking-tight">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const Hero: React.FC<HeroProps> = ({ onOpenContactForm }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
      {/* Central Cosmos Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none text-white">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">Aditya</span>
          </h1>

          <div className="text-3xl md:text-5xl font-light text-slate-400 tracking-tight">
            Delivering <br className="md:hidden" />
            <TypewriterText words={["Intelligence.", "Automation.", "Efficiency."]} />
          </div>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
            I craft data-driven solutions and intelligent automated systems 
            that empower the next generation of digital platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start">
            <a 
              href="#journey" 
              className="group relative px-10 py-4 rounded-full bg-blue-600 text-white font-bold transition-all overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10">See Journey</span>
            </a>
            <button
              onClick={onOpenContactForm}
              className="px-10 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Photo */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-[100px]"></div>
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border border-white/10 p-2 glass-card">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/assests/1751608378838.png"
                  alt="Aditya" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            {/* Chat Message Bubble */}
            <div className="absolute top-10 -right-4 hidden md:block">
              <div className="relative glass-card px-4 py-3 rounded-2xl rounded-bl-sm border border-blue-500/30 shadow-lg shadow-blue-500/10">
                {/* Bubble tail pointing to photo */}
                <div className="absolute -left-2 bottom-2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-slate-900/80 border-b-8 border-b-transparent"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-white text-xs font-medium">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
