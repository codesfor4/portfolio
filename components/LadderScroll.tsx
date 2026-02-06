
import React, { useEffect, useRef } from 'react';

interface LadderScrollProps {
    children: React.ReactNode[];
}

const LadderScroll: React.FC<LadderScrollProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress through this container
            const totalScrollDistance = height - viewportHeight;
            const currentScroll = -top;
            const rawProgress = currentScroll / totalScrollDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));

            const numSections = children.length;

            // Each section gets an equal portion of the scroll
            sectionsRef.current.forEach((section, i) => {
                if (!section) return;

                // Calculate this section's progress window
                // Section 0: active from 0 to 0.33
                // Section 1: active from 0.33 to 0.66
                // Section 2: active from 0.66 to 1.0

                const sectionStart = i / numSections;
                const sectionEnd = (i + 1) / numSections;

                // Map global progress to this section's local progress (0-1)
                let localProgress = (progress - sectionStart) / (sectionEnd - sectionStart);
                localProgress = Math.max(0, Math.min(1, localProgress));

                // Diagonal transform logic:
                // Start: translateX(-100vw) translateY(100vh) - offscreen bottom-left
                // End: translateX(100vw) translateY(-100vh) - offscreen top-right

                // But we want it visible in the middle, so:
                // At progress 0: start position (left, slightly below)
                // At progress 0.5: center (visible)
                // At progress 1: end position (right, above)

                const xStart = -50; // Start 50vw to the left
                const xEnd = 50;    // End 50vw to the right
                const yStart = 20;  // Start 20vh below
                const yEnd = -80;   // End 80vh above

                const xPos = xStart + (xEnd - xStart) * localProgress;
                const yPos = yStart + (yEnd - yStart) * localProgress;

                // Opacity: fade in at start, fade out at end
                let opacity = 1;
                if (localProgress < 0.2) {
                    opacity = localProgress / 0.2; // Fade in
                } else if (localProgress > 0.8) {
                    opacity = (1 - localProgress) / 0.2; // Fade out
                }

                section.style.transform = `translate(${xPos}vw, ${yPos}vh)`;
                section.style.opacity = String(opacity);
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

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {React.Children.map(children, (child, i) => (
                    <div
                        key={i}
                        ref={el => { sectionsRef.current[i] = el }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            willChange: 'transform, opacity',
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LadderScroll;
