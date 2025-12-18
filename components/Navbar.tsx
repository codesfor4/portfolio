
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, FileText, ChevronDown } from 'lucide-react';
import ContactForm from './ContactForm';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsConnectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  const handleMailClick = () => {
    setIsConnectOpen(false);
    window.location.href = 'mailto:thorataditya859@gmail.com';
  };

  const handleFormClick = () => {
    setIsConnectOpen(false);
    setIsFormOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled ? 'bg-black/40 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Left Side (Empty to keep center elements centered) */}
          <div className="flex-1 md:flex hidden"></div>

          {/* Center Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-blue-500 whitespace-nowrap ${
                  activeSection === item.href.slice(1) ? 'text-blue-500 neon-text-blue' : 'text-slate-500'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side - Connect Button with Dropdown */}
          <div className="flex-1 flex justify-end">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsConnectOpen(!isConnectOpen)}
                className="px-6 py-2.5 rounded-full border border-blue-600/50 text-blue-500 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] md:flex hidden items-center gap-2"
              >
                Connect
                <ChevronDown size={14} className={`transition-transform ${isConnectOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isConnectOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 glass-card rounded-xl overflow-hidden animate-fade-in">
                  <button
                    onClick={handleMailClick}
                    className="w-full px-4 py-3 flex items-center gap-3 text-slate-300 hover:bg-blue-600/20 hover:text-white transition-all text-left"
                  >
                    <Mail size={18} className="text-blue-400" />
                    <span className="text-sm font-medium">Send Email</span>
                  </button>
                  <button
                    onClick={handleFormClick}
                    className="w-full px-4 py-3 flex items-center gap-3 text-slate-300 hover:bg-blue-600/20 hover:text-white transition-all text-left border-t border-slate-700/50"
                  >
                    <FileText size={18} className="text-indigo-400" />
                    <span className="text-sm font-medium">Contact Form</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl p-12 flex flex-col items-center space-y-8 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black tracking-tight text-white hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}
            <div className="w-full space-y-3">
              <a
                href="mailto:thorataditya859@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 text-white font-bold"
              >
                <Mail size={18} />
                Send Email
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFormOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-blue-600/50 text-blue-400 font-bold hover:bg-blue-600/20 transition-all"
              >
                <FileText size={18} />
                Contact Form
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;
