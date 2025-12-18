
import React from 'react';
import { Linkedin, Github, Mail, Twitter, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ADITYA THORAT</h2>
            <p className="text-slate-400 max-w-xs mb-6">
              Designing the future through data analytics and intelligent automation.
            </p>
            <a
              href="/assets/Product_Aditya_Resume.pdf"
              download="Aditya_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
            >
              <Download size={18} />
              Get Resume
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aditya-thorat-915947210/" },
                { icon: <Github size={20} />, href: "https://www.github.com/Gethc" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Mail size={20} />, href: "mailto:thorataditya859@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aditya. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
