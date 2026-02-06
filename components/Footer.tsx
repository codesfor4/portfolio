
import React from 'react';
import { Linkedin, Github, Mail, Twitter, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ADITYA THORAT</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xs mx-auto md:mx-0 mb-4 sm:mb-6">
              Designing the future through data analytics and intelligent automation.
            </p>
            <a
              href="/assets/Product_Aditya_Resume.pdf"
              download="Aditya_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Get Resume
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 sm:gap-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Let's Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/aditya-thorat-915947210/" },
                { icon: <Github size={18} />, href: "https://www.github.com/Gethc" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Mail size={18} />, href: "mailto:thorataditya859@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Aditya. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
