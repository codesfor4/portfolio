
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, Code, Database, Globe, Layers, Zap } from 'lucide-react';

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    gradient: string;
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        id: 1,
        category: "Analytics Engine",
        title: "Predictive Market Pulse",
        description: "Real-time forecasting algorithm processing 50k+ data points per second. Achieved 94% accuracy in volatility detection for retail trading desks.",
        gradient: "from-blue-900 via-indigo-900 to-slate-900",
        icon: <Zap size={32} />
    },
    {
        id: 2,
        category: "AI Automation",
        title: "Neural Content Architect",
        description: "Autonomous content generation pipeline using custom LLM agents. Reducing editorial workflow overhead by 68% while maintaining specific brand voice parameters.",
        gradient: "from-purple-900 via-fuchsia-900 to-slate-900",
        icon: <Code size={32} />
    },
    {
        id: 3,
        category: "Infrastructure",
        title: "Global Mesh Network",
        description: "Decentralized edge-computing protocol for IoT devices. Reduced latency by 40ms globally through intelligent peer-to-peer route optimization.",
        gradient: "from-emerald-900 via-teal-900 to-slate-900",
        icon: <Globe size={32} />
    },
    {
        id: 4,
        category: "Data Viz",
        title: "Holographic Dashboard",
        description: "WebGPU-powered 3D visualization suite for complex supply chain data. Rendering millions of entities in real-time with sub-16ms frame times.",
        gradient: "from-amber-900 via-orange-900 to-slate-900",
        icon: <Box size={32} />
    },
    {
        id: 5,
        category: "FinTech",
        title: "Quantum Ledger Core",
        description: "High-frequency trading settlement layer capable of 100k TPS. Built with Rust for zero-cost abstractions and memory safety guarantees.",
        gradient: "from-rose-900 via-red-900 to-slate-900",
        icon: <Database size={32} />
    },
    {
        id: 6,
        category: "System Design",
        title: "Micro-Frontend Orchestrator",
        description: "Framework-agnostic composition layer allowing seamless integration of React, Vue, and Svelte modules into a unified unified enterprise view.",
        gradient: "from-cyan-900 via-blue-900 to-slate-900",
        icon: <Layers size={32} />
    }
];

const ScrollProjects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const pipsRef = useRef<(HTMLDivElement | null)[]>([]);
    const counterRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0); // Only usage of state for low-frequency updates

    // Smoothstep easing: t * t * (3 - 2 * t)
    const smoothStep = (t: number) => {
        const clampedT = Math.max(0, Math.min(1, t));
        return clampedT * clampedT * (3 - 2 * clampedT);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Total visible scroll distance
            const totalScrollDistance = height - viewportHeight;
            const currentScroll = -top;

            const rawProgress = currentScroll / totalScrollDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));
            const totalCards = projects.length;
            const animatedProgress = progress * (totalCards - 1);

            // Optimization: Update state ONLY when index changes to avoid heavy re-renders
            const currentIndex = Math.round(animatedProgress);
            setActiveIndex(prev => prev === currentIndex ? prev : currentIndex);

            // DIRECT DOM MANIPULATION LOOP
            projects.forEach((_, i) => {
                const card = cardsRef.current[i];
                if (!card) return;

                const depth = i - animatedProgress;
                const isPast = depth < 0;
                const isLastCard = i === totalCards - 1;

                if (isPast) {
                    const progressOut = -depth;
                    if (isLastCard) {
                        card.style.transform = `scale(1) translateZ(0)`;
                        card.style.opacity = '1';
                        // Reset other properties just in case
                        card.style.clipPath = 'none';
                        card.style.display = 'block';
                    } else {
                        if (progressOut >= 1) {
                            card.style.display = 'none'; // Better than visibility hidden
                            card.style.transform = 'translateX(-100%) scale(0.9)';
                        } else {
                            card.style.display = 'block';
                            const eased = smoothStep(progressOut);
                            const clipVal = eased * 100;
                            card.style.transform = `translateX(${-eased * 10}%) scale(1) translateZ(0)`;
                            card.style.clipPath = `inset(0 ${clipVal}% 0 0)`;
                            card.style.opacity = '1';
                        }
                    }
                } else {
                    // Stacked cards
                    const relativeDepth = depth;
                    if (relativeDepth > 2) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'block';
                        // Reset clip path from previous animation
                        card.style.clipPath = 'none';

                        const scaleFactor = 0.04;
                        const scale = Math.max(0.9, 1 - (relativeDepth * scaleFactor));
                        const opacity = Math.max(0.6, 1 - (relativeDepth * 0.15));

                        card.style.transform = `scale(${scale}) translateZ(0)`;
                        card.style.filter = 'none';
                        card.style.opacity = String(opacity);
                    }
                }
            });

            // Update counter directly
            if (counterRef.current) {
                const displayIndex = Math.min(Math.round(animatedProgress) + 1, totalCards);
                // We can't easily change innerHTML if we have React children structure inside, 
                // but for simple text defined below it works.
                // Or just rely on the 'activeIndex' state which is throttled.
            }
        };

        let rafId: number;
        const onScroll = () => {
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#08080c]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">

                {/* Progress Track (Right) */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-50 pointer-events-none">
                    {projects.map((_, i) => {
                        const isActive = i === activeIndex; // Use state for cheap UI updates
                        return (
                            <div
                                key={i}
                                ref={el => { pipsRef.current[i] = el }}
                                className={`transition-all duration-300 rounded-full bg-white/20 
                  ${isActive ? 'w-1.5 h-6 md:h-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-1.5 h-1.5'}
                `}
                            />
                        );
                    })}
                </div>

                {/* Counter (Bottom Left) */}
                <div ref={counterRef} className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-50 font-mono text-2xl md:text-4xl text-white/20 font-light pointer-events-none">
                    0{activeIndex + 1} <span className="text-white/10 text-base md:text-xl">of 0{projects.length}</span>
                </div>

                {/* Cards Stack */}
                <div className="relative w-[90vw] md:w-[80vw] h-[60vh] md:h-[70vh]">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={el => { cardsRef.current[i] = el }}
                            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#08080c]"
                            style={{
                                willChange: 'transform, opacity, clip-path',
                                zIndex: projects.length - i,
                                // Initial state will be overridden by JS immediately
                            }}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                            {/* Faded Background Number */}
                            <span className="absolute -right-6 sm:-right-12 -bottom-10 sm:-bottom-20 text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] font-bold text-white/5 select-none pointer-events-none font-serif leading-none">
                                {project.id}
                            </span>

                            {/* Content Container */}
                            <div className="absolute inset-0 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                                {/* Top: Category & Tags */}
                                <div className="flex justify-between items-start">
                                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card bg-white/5 border border-white/10 text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase">
                                        {project.category}
                                    </div>
                                    <div className="flex gap-1 sm:gap-1.5">
                                        {Array.from({ length: 3 }).map((_, j) => (
                                            <div key={j} className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${j === 0 ? 'bg-white' : 'bg-white/20'}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Icon floating */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 transform scale-[2] sm:scale-[2.5] md:scale-[3]">
                                    {project.icon}
                                </div>

                                {/* Main Content */}
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8 z-10 max-w-2xl">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white font-serif leading-tight">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    <button className="group mt-2 sm:mt-4 inline-flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base lg:text-lg font-medium border-b border-white/0 hover:border-white transition-all pb-1">
                                        View Case Study
                                        <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollProjects;
