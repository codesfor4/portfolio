import React from 'react';
import { journeyItems, JourneyCard } from './JourneySteps';

export const JourneySection: React.FC = () => (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm overflow-hidden">
        <div className="w-full max-w-7xl px-6">
            {/* Horizontal scrolling container */}
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth">
                <div className="flex-shrink-0 w-[5vw]"></div>
                {journeyItems.map((item, i) => (
                    <div key={i} className="snap-center">
                        <JourneyCard item={item} />
                    </div>
                ))}
                <div className="flex-shrink-0 w-[5vw]"></div>
            </div>
        </div>
    </div>
);
