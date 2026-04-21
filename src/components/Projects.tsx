import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Linkedin, Github, ExternalLink, X, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { projects } from '../data/portfolio';

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isCopying, setIsCopying] = React.useState(false);

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(activeFilter));

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 2000);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Proyek Pilihan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Beberapa hasil karya saya yang menunjukkan kemampuan dalam pengembangan perangkat lunak dan desain solusi digital.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === tech
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105 active:scale-95'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => onProjectClick(project)}
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer relative text-left"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {project.link !== '#' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); window.open(`https://twitter.com/intent/tweet?text=Check out this project: ${project.title}&url=${encodeURIComponent(project.link)}`, '_blank'); }}
                        className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-400 hover:text-white transition-all shadow-lg"
                      >
                        <Twitter size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(project.link)}`, '_blank'); }}
                        className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-700 hover:text-white transition-all shadow-lg"
                      >
                        <Linkedin size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); copyToClipboard(project.link); }}
                        className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-lg"
                      >
                        {isCopying ? <CheckCircle2 size={20} className="text-green-500" /> : <LinkIcon size={20} />}
                      </motion.button>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-blue-600 border border-blue-500/10 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {project.link === '#' ? (
                      <div className="inline-flex items-center gap-2 text-slate-400 font-bold cursor-not-allowed">
                        Internal Project <X size={18} />
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                        Pelajari Selengkapnya <ExternalLink size={18} />
                      </div>
                    )}

                    {project.github && (
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                        <Github size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
