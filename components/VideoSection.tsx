import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Video plays when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Build YouTube URL with autoplay based on visibility
  const videoUrl = isVisible
    ? "https://www.youtube.com/embed/4cQWJViybAQ?si=-nKi2PXhfLYfsDLF&autoplay=1&mute=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=1"
    : "https://www.youtube.com/embed/4cQWJViybAQ?si=-nKi2PXhfLYfsDLF&autoplay=0&mute=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=1";

  return (
    <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          🎬 Watch Me Code
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Video Container */}
        <div className="relative group flex justify-center lg:justify-start">
          <div className="aspect-video w-full max-w-lg rounded-2xl overflow-hidden glass-card border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 relative">
            {/* YouTube Video Embed - Auto plays when visible */}
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6 flex flex-col justify-center text-center lg:text-left">
          <p className="text-2xl md:text-3xl font-bold text-slate-200 leading-relaxed">
            Explore more on YouTube by following me on my YouTube Channel
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-slate-400 text-lg">Get Tech news First </span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 text-lg">Real-time Interaction</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-slate-400 text-lg">No Fluff, Pure Value</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="https://youtu.be/4cQWJViybAQ?si=-nKi2PXhfLYfsDLF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;