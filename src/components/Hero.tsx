import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import profileImg from '../../image/IMG-20260420-WA0052.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-right"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            AVAILABLE FOR PROJECTS
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Shafnat Fuaini <br />
            <span className="text-blue-600">Ramadhan</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl ml-auto leading-relaxed font-light">
            Full Stack Developer • Tim Dev <span className="font-semibold text-slate-900">Food AI Rescue</span> <br></br>
            PIC Educator <span className="font-semibold text-slate-900">Jago AI</span> • Tim Dev <span className="font-semibold text-slate-900">jagoCV</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <a href="#experience" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Lihat Pengalaman <ChevronRight size={20} />
            </a>
            <a href="https://wa.me/6285215376975" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
              Hubungi Saya (WA)
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-end gap-6">
            <a href="https://www.linkedin.com/in/shafnat-fuaini-ramadhan" referrerPolicy="no-referrer" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/shafnatf.r" referrerPolicy="no-referrer" target="_blank" className="text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:shafnatfuainiramadhan@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:085215376975" className="text-slate-400 hover:text-green-500 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mx-auto relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[morph_8s_ease-in-out_infinite] opacity-10"></div>
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <img 
                src={profileImg} 
                alt="Shafnat Fuaini Ramadhan" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-right">
                <p className="text-white font-bold text-xl">Shafnat Fuaini</p>
                <p className="text-blue-200 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-5">
        <div className="w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
}
