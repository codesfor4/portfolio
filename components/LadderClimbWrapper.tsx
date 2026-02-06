import React, { useEffect, useRef } from 'react';

interface LadderClimbWrapperProps {
    children: React.ReactNode[];
}

const LadderClimbWrapper: React.FC<LadderClimbWrapperProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress through entire container
            const totalScrollDistance = height - viewportHeight;
            const currentScroll = -top;
            const rawProgress = currentScroll / totalScrollDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));

            const numSections = children.length;

            // Each section gets equal scroll space
            // We divide into: section display + climb transition
            // Pattern: [Section 1] [Climb] [Section 2] [Climb] [Section 3]

            sectionsRef.current.forEach((section, i) => {
                if (!section) return;

                // Each section + transition = 1/numSections of total progress
                const sectionStart = i / numSections;
                const sectionEnd = (i + 1) / numSections;

                // Within each section's space:
                // First 70% = section visible
                // Last 30% = climbing transition
                const sectionRange = sectionEnd - sectionStart;
                const displayEnd = sectionStart + (sectionRange * 0.7);

                let opacity = 0;
                let translateX = 0;
                let translateY = 0;
                let scale = 0.95;

                if (progress < sectionStart) {
                    // Section hasn't appeared yet - hide it below/left
                    opacity = 0;
                    translateX = -30;
                    translateY = 30;
                    scale = 0.9;
                } else if (progress >= sectionStart && progress < displayEnd) {
                    // Section is active and visible
                    const localProgress = (progress - sectionStart) / (displayEnd - sectionStart);

                    if (localProgress < 0.15) {
                        // Fade in from previous climb
                        opacity = localProgress / 0.15;
                        translateX = -30 * (1 - opacity);
                        translateY = 30 * (1 - opacity);
                        scale = 0.9 + (0.1 * opacity);
                    } else {
                        // Fully visible
                        opacity = 1;
                        translateX = 0;
                        translateY = 0;
                        scale = 1;
                    }
                } else if (progress >= displayEnd && progress < sectionEnd) {
                    // Climbing transition - slide up and right
                    const climbProgress = (progress - displayEnd) / (sectionEnd - displayEnd);

                    opacity = 1 - (climbProgress * 0.7); // Fade out a bit
                    translateX = climbProgress * 30; // Move right
                    translateY = -climbProgress * 40; // Move up
                    scale = 1 - (climbProgress * 0.1); // Slightly shrink
                } else {
                    // Section has passed - hide it above/right
                    opacity = 0;
                    translateX = 30;
                    translateY = -40;
                    scale = 0.9;
                }

                section.style.opacity = String(opacity);
                section.style.transform = `translate(${translateX}vw, ${translateY}vh) scale(${scale})`;
                section.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
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
    }, [children.length]);

    // Height calculation: give each section enough space
    // 150vh per section for content + climb transition
    const totalHeight = children.length * 150;

    return (
        <div ref={containerRef} className="relative" style={{ height: `${totalHeight}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {React.Children.map(children, (child, i) => (
                    <div
                        key={i}
                        ref={el => { sectionsRef.current[i] = el }}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            willChange: 'transform, opacity',
                            transition: 'pointer-events 0.3s',
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LadderClimbWrapper;
