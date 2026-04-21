import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import MouseParticleBackground from './MouseParticleBackground';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <MouseParticleBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pendidikan</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(59, 130, 246, 0.5)"
            }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="flex gap-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 group relative overflow-hidden text-left"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-500/30 shadow-lg shadow-blue-500/10 relative z-10"
            >
              <GraduationCap size={40} />
            </motion.div>
            
            <div className="flex-1 relative z-10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-blue-100 group-hover:to-white transition-all duration-300">Universitas Telkom</h3>
                <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold tracking-widest border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">S1 ACTIVE</span>
              </div>
              <p className="text-blue-400 font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                D3 Sistem Informasi • 2025 (Expected)
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm">
                 {[
                   "Aktif dalam Laboratorium FIT",
                   "Terlibat dalam Organisasi HMDSI",
                   "Fokus Frontend & UI/UX Development",
                   "Penerima Beasiswa Prestasi"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 group/item">
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover/item:scale-150 transition-transform"></div>
                     <span>{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 0.7, x: 0 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(148, 163, 184, 0.3)"
            }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 group relative text-left"
          >
            <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center flex-shrink-0 text-slate-500 border border-slate-700/50 group-hover:text-slate-300 transition-colors">
              <GraduationCap size={40} />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-bold text-slate-300 group-hover:text-white transition-colors">SMAS BPS&K 1 Jakarta</h3>
                <span className="px-4 py-1.5 bg-slate-800 text-slate-500 rounded-full text-xs font-bold tracking-widest border border-slate-700">GRADUATED</span>
              </div>
              <p className="text-slate-500 font-medium mb-4">Lulus Tahun 2024</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl text-left">
                Aktif menjabat sebagai <span className="text-slate-200">Bendahara 2 OSIS</span> dan Koordinator Ekstrakurikuler Hadroh. Memimpin tim dokumentasi dan fotografi sekolah dengan berbagai pencapaian kreatif tingkat lokal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
