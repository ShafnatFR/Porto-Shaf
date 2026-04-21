import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Animation Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 z-0"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="flex-1"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
              Tentang Saya
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Saya adalah mahasiswa <span className="font-semibold text-slate-900 underline decoration-blue-500 underline-offset-4">Telkom University</span> angkatan 2024 dengan fokus utama pada pengembangan aplikasi yang berdampak sosial. Saat ini, saya aktif terlibat dalam pengerjaan <span className="font-semibold text-slate-900">Proyek Dosen untuk Abdi Masyarakat</span>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Salah satu pencapaian utama saya adalah menjadi bagian dari tim developer <span className="font-semibold text-slate-900 italic">Food AI Rescue</span>, sebuah terobosan aplikasi yang berhasil terpilih menjadi bagian dari 150 tim unggulan di program <span className="text-blue-600 font-bold">Innovillage</span>.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-sm text-slate-500 mb-1">Pendidikan Utama</p>
                <p className="font-bold">D3 Sistem Informasi</p>
                <p className="text-xs text-blue-600">Telkom University</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-4"
          >
            <div className="bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold mb-2">5+</span>
              <span className="text-sm opacity-80 uppercase tracking-widest">Tahun Pengalaman</span>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold mb-2">3+</span>
              <span className="text-sm opacity-80 uppercase tracking-widest">Keahlian Inti</span>
            </div>
            <div className="bg-white border text-slate-900 border-slate-100 p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg shadow-slate-100">
              <span className="text-4xl font-bold mb-2">150</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Tim Unggulan</span>
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl text-blue-600 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold mb-2">24/7</span>
              <span className="text-sm opacity-80 uppercase tracking-widest">Dedicated</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
