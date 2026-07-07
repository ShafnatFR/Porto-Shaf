import React from 'react';
import { motion } from 'motion/react';
// import { Zap, Flame, Star, Code, Award } from 'lucide-react';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Keahlian & Teknologi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto md:mx-0">
            Perpaduan antara logika pemrograman yang kuat dan estetika visual yang tajam. Fokus pada pengembangan aplikasi web modern (Full Stack) dan antarmuka pengguna yang intuitif.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-slate-800 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: '#fff' }}
                  className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 transition-all duration-300 flex-shrink-0"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {skill.details}
              </p>

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[11px] font-medium rounded-md border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vibe Coder Final Bos Card */}
        {/* <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          className="mt-16 p-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 rounded-[3.5rem] shadow-[0_0_50px_rgba(245,158,11,0.2)] group"
        >
          <div className="bg-slate-900 rounded-[3.4rem] p-10 lg:p-16 relative overflow-hidden h-full w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <motion.div 
                  animate={{ 
                    rotate: [12, -12, 12],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                >
                  <Zap size={64} fill="currentColor" strokeWidth={1} />
                </motion.div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-yellow-500/20">
                  <Flame size={14} fill="currentColor" />
                  Ultimate Skill
                </div>
                <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter italic">
                  "VIBE CODER <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">FINAL BOS"</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium mb-10">
                  "Menguasai seni pengkodean berdasarkan intuisi dan estetika. Membangun pengalaman digital yang tidak hanya berfungsi secara teknis, tapi memiliki 'jiwa' dan harmoni visual yang sempurna."
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {["Deep Focus", "Coffee Powered", "Aesthetic Sense", "Vibe Architecture"].map((vibe) => (
                    <span key={vibe} className="px-6 py-2 bg-white/5 text-slate-300 rounded-xl text-sm font-bold border border-white/10 group-hover:border-yellow-500/30 group-hover:text-yellow-400 transition-all">
                      {vibe}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="hidden xl:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500/20 group-hover:text-yellow-500 transition-colors">
                    <Zap size={32} />
                  </div>
                  <div className="w-20 h-20 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500/20 group-hover:text-yellow-500 transition-colors">
                    <Star size={32} />
                  </div>
                  <div className="w-20 h-20 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500/20 group-hover:text-yellow-500 transition-colors">
                    <Code size={32} />
                  </div>
                  <div className="w-20 h-20 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500/20 group-hover:text-yellow-500 transition-colors">
                    <Award size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
