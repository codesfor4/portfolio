import React from 'react';

interface SkillTextProps {
    skill: string;
    index: number;
}

export const skillsList = [
    "Python Engineering",
    "SQL & MySQL",
    "Power BI Visualization",
    "QA & Testing",
    "Workflow Automation"
];

export const SkillText: React.FC<SkillTextProps> = ({ skill }) => (
    <div className="text-4xl md:text-5xl font-black tracking-tight text-white px-8">
        {skill}
    </div>
);
