import React from 'react';
import { Camera, Video, Edit, Mic, Users, Heart } from 'lucide-react';

const FunSection: React.FC = () => {
  const funActivities = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Creation",
      description: "Creating engaging tech tutorials and coding walkthroughs that make complex concepts simple and fun.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Capturing moments and creating visual stories that inspire. From tech setups to creative portraits.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Content Editing",
      description: "Crafting polished content with smooth transitions, engaging effects, and storytelling that connects.",
      color: "from-sky-500 to-indigo-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Podcasting",
      description: "Sharing insights about tech, automation, and the future of work through engaging conversations.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          What I Do For Fun
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          When I'm not automating workflows or analyzing data, I'm creating content that brings tech to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {funActivities.map((activity, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden glass-card hover:scale-[1.02] transition-all duration-500"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative p-8">
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${activity.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {activity.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                {activity.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {activity.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Featured Content Creation Image */}
      <div className="relative rounded-3xl overflow-hidden glass-card group">
        <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
          {/* Placeholder for content creation image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-cyan-600/20" />
          
          {/* Content overlay */}
          <div className="relative z-10 text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Content Creation Studio</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
              Where ideas come to life through pixels, frames, and stories. Every piece of content is crafted with passion and purpose.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Community Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Made with Love</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>High Quality</span>
              </div>
            </div>
          </div>

          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        {/* Bottom info bar */}
        <div className="p-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Latest Content</h4>
              <p className="text-slate-400 text-sm">Tech tutorials, automation guides, and behind-the-scenes</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Creating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <p className="text-slate-400 mb-6">
          Want to collaborate on content or just chat about creative projects?
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <Video className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <Camera className="w-5 h-5" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FunSection;
