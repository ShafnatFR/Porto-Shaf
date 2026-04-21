import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Star } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { renderWithKoLab } from '../utils/helpers';

interface ExperienceProps {
  experienceRef: React.RefObject<HTMLElement>;
}

export default function Experience({ experienceRef }: ExperienceProps) {
  const { scrollYProgress: expProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"]
  });

  const pathHeight = useTransform(expProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={experienceRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 text-slate-800">
            <div className="sticky top-32">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pengalaman Pengabdian & Profesional</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perjalanan saya dalam mengembangkan solusi digital, mulai dari proyek pengabdian masyarakat hingga inovasi teknologi AI di tingkat nasional.
              </p>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-xs text-blue-600 uppercase font-bold tracking-wider">Status Saat Ini</p>
                  <p className="font-bold text-slate-900">Mencari Peluang Baru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12 relative text-slate-800">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 ml-6 lg:ml-0 overflow-hidden">
              <motion.div 
                style={{ height: pathHeight }}
                className="w-full bg-blue-600 origin-top shadow-[0_0_8px_rgba(37,99,235,0.4)]"
              />
            </div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center z-10 -ml-6">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                        {exp.highlight && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 shadow-sm" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium">
                        {renderWithKoLab(exp.company)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-4 py-1 bg-white rounded-full text-sm font-semibold text-slate-500 shadow-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {renderWithKoLab(exp.description)}
                  </p>
                  
                  {exp.badges && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.badges.map((badge: any, i: number) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${badge.color} shadow-sm`}
                        >
                          {badge.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
