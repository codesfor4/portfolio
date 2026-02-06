import React, { useEffect, useRef } from 'react';

export interface ScrollStep {
    type: 'heading' | 'card' | 'skill' | 'climb' | 'youtube' | 'line';
    content: React.ReactNode;
    id: string;
}

interface StepByStepScrollProps {
    steps: ScrollStep[];
}

const StepByStepScroll: React.FC<StepByStepScrollProps> = ({ steps }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const totalScrollDistance = height - viewportHeight;
            const currentScroll = -top;
            const rawProgress = currentScroll / totalScrollDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));

            // Calculate cumulative heights for variable step sizes
            const stepHeights = steps.map(getStepHeight);
            const totalStepHeight = stepHeights.reduce((sum, h) => sum + h, 0);
            const cumulativeHeights = stepHeights.reduce((acc, h) => {
                acc.push((acc[acc.length - 1] || 0) + h);
                return acc;
            }, [] as number[]);

            const globalStepProgress = progress * (totalStepHeight / 100);

            steps.forEach((step, i) => {
                const stepEl = stepRefs.current[i];
                if (!stepEl) return;

                const stepStart = (i === 0 ? 0 : cumulativeHeights[i - 1]) / 100;
                const stepEnd = cumulativeHeights[i] / 100;

                let opacity = 0;
                let translateX = 0;
                let translateY = 0;
                let scale = 1;

                if (step.type === 'climb') {
                    // Climb transition - diagonal movement
                    if (globalStepProgress >= stepStart && globalStepProgress < stepEnd) {
                        const localProgress = globalStepProgress - stepStart;

                        // Full screen overlay during climb
                        opacity = 1;
                        translateX = localProgress * 30; // Move right
                        translateY = -localProgress * 40; // Move up
                        scale = 1 - (localProgress * 0.05);
                    } else {
                        opacity = 0;
                    }
                } else if (step.type === 'heading') {
                    // Heading slides in, then slides out to left
                    if (globalStepProgress >= stepStart && globalStepProgress < stepEnd) {
                        const localProgress = globalStepProgress - stepStart;

                        // Sliding in
                        opacity = localProgress;
                        scale = 0.95 + (0.05 * localProgress);
                        translateX = (1 - localProgress) * 30; // Slide from right (smaller distance)
                        translateY = 0;
                    } else if (globalStepProgress >= stepEnd && globalStepProgress < stepEnd + 1) {
                        // Sliding out to left
                        const exitProgress = globalStepProgress - stepEnd;
                        opacity = 1 - exitProgress;
                        translateX = -exitProgress * 40; // Slide to left
                        scale = 1 - (exitProgress * 0.05);
                        translateY = 0;
                    } else {
                        // Completely gone
                        opacity = 0;
                        translateX = -40;
                    }
                } else if (step.type === 'card' || step.type === 'skill') {
                    // Cards and skills slide in from right, then slide out to left
                    if (globalStepProgress >= stepStart && globalStepProgress < stepEnd) {
                        const localProgress = globalStepProgress - stepStart;

                        // Sliding in from right
                        opacity = localProgress;
                        translateX = (1 - localProgress) * 50; // Slide from right
                        scale = 0.95 + (0.05 * localProgress);
                        translateY = 0;
                    } else if (globalStepProgress >= stepEnd && globalStepProgress < stepEnd + 1) {
                        // Sliding out to left
                        const exitProgress = globalStepProgress - stepEnd;
                        opacity = 1 - exitProgress;
                        translateX = -exitProgress * 50; // Slide to left
                        scale = 1 - (exitProgress * 0.05);
                        translateY = 0;
                    } else {
                        // Completely gone
                        opacity = 0;
                        translateX = -50;
                    }
                } else if (step.type === 'line') {
                    // Glowing line animation
                    if (globalStepProgress >= stepStart && globalStepProgress < stepEnd) {
                        const localProgress = globalStepProgress - stepStart;
                        opacity = 1;
                        scale = 1;
                        translateX = 0;
                        translateY = 0;
                    } else if (globalStepProgress >= stepEnd && globalStepProgress < stepEnd + 0.5) {
                        // Brief fade out
                        const exitProgress = (globalStepProgress - stepEnd) / 0.5;
                        opacity = 1 - exitProgress;
                        translateX = 0;
                        translateY = 0;
                    } else {
                        opacity = 0;
                    }
                } else if (step.type === 'youtube') {
                    // YouTube section
                    if (globalStepProgress >= stepStart) {
                        const localProgress = Math.min(1, globalStepProgress - stepStart);
                        opacity = localProgress;
                        scale = 0.95 + (0.05 * localProgress);
                        translateX = 0;
                        translateY = 0;
                    }
                }

                stepEl.style.opacity = String(opacity);
                stepEl.style.transform = `translate(${translateX}vw, ${translateY}vh) scale(${scale})`;
                stepEl.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';
            });
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
    }, [steps.length]);

    // Give each step scroll space - reduced for journey cards
    const getStepHeight = (step: ScrollStep) => {
        if (step.type === 'card') return 60; // Reduced from 100vh to 60vh for journey cards
        if (step.type === 'heading') return 80; // Slightly reduced for headings
        return 100; // Keep full height for other types
    };
    
    const totalHeight = steps.reduce((sum, step) => sum + getStepHeight(step), 0);

    return (
        <div ref={containerRef} className="relative" style={{ height: `${totalHeight}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {steps.map((step, i) => (
                    <div
                        key={step.id}
                        ref={el => { stepRefs.current[i] = el }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                        style={{
                            willChange: 'transform, opacity',
                            transition: 'pointer-events 0.3s',
                        }}
                    >
                        {step.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepByStepScroll;
