import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-slate-900 mb-2 tracking-tighter">
              SF<span className="text-blue-600">RAMADHAN.</span>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Shafnat Fuaini Ramadhan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/shafnat-fuaini-ramadhan" referrerPolicy="no-referrer" target="_blank" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/shafnatf.r" referrerPolicy="no-referrer" target="_blank" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/shafnatfuaini" referrerPolicy="no-referrer" target="_blank" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <Github size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Built with <span className="text-blue-600 font-bold">React</span> & <span className="text-blue-600 font-bold">Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
