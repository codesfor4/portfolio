import React from 'react';
import { skillsList, SkillText } from './SkillSteps';

export const SkillsSection: React.FC = () => (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm overflow-hidden">
        <div className="w-full max-w-7xl px-6">
            {/* Horizontal layout for skills */}
            <div className="flex flex-col gap-8 items-center justify-center">
                {skillsList.slice(0, 5).map((skill, i) => (
                    <div key={i}>
                        <SkillText skill={skill} index={i} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);
