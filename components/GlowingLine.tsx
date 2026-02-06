import React from 'react';

export const GlowingLine: React.FC = () => (
    <div className="w-full h-screen flex items-center justify-center">
        <div className="relative w-3/4 h-1">
            {/* Main line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent blur-xl"></div>

            {/* Animated traveling light */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-32 h-3 bg-gradient-to-r from-transparent via-white to-transparent blur-sm animate-glow-slide"
                style={{ left: 0 }}
            ></div>
        </div>
    </div>
);
