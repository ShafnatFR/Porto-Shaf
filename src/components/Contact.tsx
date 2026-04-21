import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden group/contact" onMouseMove={handleMouseMove}>
      {/* Contact Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
      </div>

      {/* Modern Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-1/3 w-1 h-32 bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>
        <div className="absolute bottom-10 right-1/4 w-1 h-48 bg-gradient-to-t from-white/0 via-white/10 to-white/0"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Spotlight Glow following Cursor */}
      <motion.div 
        className="absolute pointer-events-none w-[800px] h-[800px] rounded-full z-0 hidden lg:block opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          left: useSpring(mouseX, { stiffness: 100, damping: 50 }),
          top: useSpring(mouseY, { stiffness: 100, damping: 50 }),
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Hubungi Saya</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
              Apakah Anda memiliki proyek menarik atau peluang kerja? Saya terbuka untuk diskusi lebih lanjut.
            </p>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4 group cursor-pointer text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email Saya</p>
                  <p className="font-bold">shafnatfuainiramadhan@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Telepon / WhatsApp</p>
                  <p className="font-bold">+62 852-1537-6975</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Lokasi</p>
                  <p className="font-bold">Bandung, Jawa Barat</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center lg:justify-end relative z-10">
            <div className="bg-white p-2 rounded-[32px] w-full max-w-md shadow-2xl">
              <div className="bg-slate-50 p-12 rounded-[28px] text-center">
                <h3 className="text-slate-900 text-2xl font-bold mb-6">Hubungi Langsung</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Gunakan tombol di bawah untuk langsung terhubung dengan saya melalui WhatsApp secara instan.
                </p>
                <a 
                  href="https://wa.me/6285215376975" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-100 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
