import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

interface JourneyCardData {
    title: string;
    subtitle: string;
    details: string;
    period: string;
    icon: React.ReactElement;
}

export const journeyItems: JourneyCardData[] = [
    {
        title: "Bachelor of Engineering",
        subtitle: "Comp Eng. & Visual Arts",
        details: "Focusing on the intersection of technical excellence and creative expression. Maintaining a high academic standard with a CGPA of 7.75.",
        period: "2021 - 2025",
        icon: <GraduationCap />
    },
    {
        title: "Product Analyst Intern",
        subtitle: "Kanishka Software",
        details: "Analyzed user behavior data to inform product decisions. Built predictive models and dashboards to track product metrics and KPIs.",
        period: "June 2025 – Oct 2025",
        icon: <Briefcase />
    },
    {
        title: "Product Strategy & Development",
        subtitle: "Independent Projects",
        details: "Leading end-to-end product development for automation and analytics solutions. Conducting user research and defining product vision.",
        period: "Jan 2024 - Present",
        icon: <Briefcase />
    }
];

export const JourneyCard: React.FC<{ item: JourneyCardData }> = ({ item }) => (
    <div className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] glass-card rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 border border-white/10 mx-4 sm:mx-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 sm:mb-8">
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, className: "sm:w-8 sm:h-8" })}
        </div>

        <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-[11px] sm:text-[12px] font-bold text-blue-400 uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                <Calendar size={12} className="sm:w-[14px] sm:h-[14px] mr-2 sm:mr-3" />
                {item.period}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">{item.title}</h3>
            <p className="text-base sm:text-lg font-semibold text-slate-300">{item.subtitle}</p>
            <div className="pt-4 sm:pt-6 border-t border-white/10">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.details}
                </p>
            </div>
        </div>
    </div>
);
