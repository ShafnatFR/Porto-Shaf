import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Linkedin, Github, ExternalLink, X, CheckCircle2, Link as LinkIcon } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isCopying, setIsCopying] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 2000);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="p-0">
              <img src={project.image} className="w-full aspect-video object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
            
            <div className="p-10 text-left">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">{project.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {project.details}
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-4">Galeri Proyek</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery?.map((img: string, i: number) => (
                      <div key={i} className="rounded-2xl overflow-hidden aspect-video border border-slate-100">
                        <img src={img} className="w-full h-full object-cover" alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-8 border-t">
                {project.link !== '#' && (
                  <a href={project.link} className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    Lihat Proyek Langsung <ExternalLink size={20} />
                  </a>
                )}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a href={project.github} className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                      <Github size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
