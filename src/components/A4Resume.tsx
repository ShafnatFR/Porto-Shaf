import React from 'react';
import { Mail, MapPin, Printer } from 'lucide-react';
import { projects, skills } from '../data/portfolio';

export default function A4Resume() {
  return (
    <div className="bg-slate-200 min-h-screen py-8 flex justify-center font-sans text-slate-700 antialiased">
      {/* Tombol Print/Download (Sembunyi saat dicetak) */}
      <div className="no-print fixed top-6 right-6 flex flex-col gap-2 z-50">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2 font-medium"
        >
          <Printer size={20} /> Cetak / PDF
        </button>
        <a 
          href="/"
          className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow-lg hover:bg-slate-50 transition flex items-center gap-2 font-medium border border-slate-200 justify-center"
        >
          Kembali
        </a>
      </div>

      {/* Container Kertas A4 */}
      <div className="a4-paper bg-white">
        
        {/* Header Profile */}
        <header className="mb-6 flex justify-between items-end border-b-2 border-slate-100 pb-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-1">Shafnat Fuaini R.</h1>
            <h2 className="text-lg font-semibold text-blue-600">Full Stack Developer • End-to-End Product Developer</h2>
          </div>
          <div className="text-right text-xs text-slate-500 space-y-1">
            <div className="flex items-center justify-end gap-1"><MapPin size={12} /> Bandung, Indonesia</div>
            <div className="flex items-center justify-end gap-1"><Mail size={12} /> shafnatfuainiramadhan@gmail.com</div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Kolom Kiri (Lebar: 8 kolom) - Profil & Pengalaman */}
          <div className="col-span-8">
            
            {/* Tentang Saya */}
            <section className="mb-6 break-avoid">
              <h3 className="border-b-2 border-slate-200 pb-1 mb-3 font-extrabold text-slate-900 uppercase tracking-wide text-sm">Profil Profesional</h3>
              <p className="text-sm leading-relaxed text-justify text-slate-700">
                Mahasiswa D3 Sistem Informasi Telkom University yang berfokus pada pengembangan produk digital end-to-end. Memadukan perancangan UI/UX intuitif dengan eksekusi teknis menggunakan Full Stack Web Tech (React, Tailwind, Node, PHP). Berpengalaman merancang arsitektur aplikasi serta mengelola infrastruktur untuk menghasilkan solusi teknologi yang tangguh dan inovatif.
              </p>
            </section>

            {/* Pengalaman Proyek */}
            <section className="mb-6">
              <h3 className="border-b-2 border-slate-200 pb-1 mb-3 font-extrabold text-slate-900 uppercase tracking-wide text-sm">Proyek & Inovasi Utama</h3>
              
              <div className="space-y-4">
                {projects.slice(0, 3).map((project, index) => (
                  <div key={index} className="break-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{project.title}</h4>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">{((project as any).category) || 'Portfolio'}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-1.5 font-medium">{project.tech ? project.tech.join(' • ') : 'Tech Stack'}</p>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pendidikan */}
            <section className="break-avoid">
              <h3 className="border-b-2 border-slate-200 pb-1 mb-3 font-extrabold text-slate-900 uppercase tracking-wide text-sm">Pendidikan</h3>
              
              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-900 text-sm">Telkom University</h4>
                  <span className="text-xs text-slate-500">2022 - 2025 (Expected)</span>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-1">Diploma 3 (D3) Sistem Informasi</p>
                <ul className="text-xs text-slate-500 list-disc list-outside ml-4 space-y-0.5">
                  <li>Aktif dalam Laboratorium FIT</li>
                  <li>Fokus Frontend & UI/UX Development</li>
                  <li>Penerima Beasiswa Prestasi</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-900 text-sm">SMAS BPS&K 1 Jakarta</h4>
                  <span className="text-xs text-slate-500">2021 - 2024</span>
                </div>
                <ul className="text-xs text-slate-500 list-disc list-outside ml-4 space-y-0.5 mt-1">
                  <li>Aktif sebagai Bendahara 2 OSIS</li>
                  <li>Koordinator Ekstrakurikuler Hadroh</li>
                  <li>Memimpin Tim Dokumentasi & Fotografi</li>
                </ul>
              </div>
            </section>

          </div>

          {/* Kolom Kanan (Lebar: 4 kolom) - Skills & Info */}
          <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100 h-fit">
            
            {/* Keahlian Utama */}
            <div className="mb-5 break-avoid">
              <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Keahlian Inti</h3>
              <div className="flex flex-col gap-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <p className="text-xs font-bold text-slate-700 mb-1">{skill.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.techs.map((tech, i) => (
                        <span key={i} className="text-[9px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistik */}
            <div className="mb-5 break-avoid">
               <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Highlight</h3>
               <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white border border-slate-200 rounded py-2">
                    <p className="text-lg font-bold text-blue-600">2+</p>
                    <p className="text-[9px] font-medium text-slate-500 uppercase">Tahun Pengalaman</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded py-2">
                    <p className="text-lg font-bold text-blue-600">150</p>
                    <p className="text-[9px] font-medium text-slate-500 uppercase">Tim Unggulan</p>
                  </div>
               </div>
            </div>

            {/* Portofolio Digital / Live Preview */}
            <div className="break-avoid">
               <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Portofolio Digital</h3>
               <a 
                 href="https://shafnat-porto.vercel.app" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block group"
               >
                 <div className="w-full h-[96px] rounded border border-slate-300 overflow-hidden bg-slate-900 relative shadow-sm mb-2">
                   <iframe 
                     src="https://shafnat-porto.vercel.app" 
                     title="Live Portofolio Preview"
                     className="pointer-events-none border-0"
                     style={{ width: '900px', height: '506px', transform: 'scale(0.19)', transformOrigin: '0 0' }}
                   />
                 </div>
                 <div className="flex items-center justify-between bg-white border border-slate-200 rounded px-2 py-1.5 text-[10px] font-bold text-blue-600 group-hover:bg-blue-50 transition">
                   <span className="truncate">shafnat-porto.vercel.app</span>
                   <span>↗</span>
                 </div>
               </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
