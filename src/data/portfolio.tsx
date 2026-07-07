import React from 'react';
import { Layout, Server, Palette, GraduationCap } from 'lucide-react';

export const experiences = [
  {
    title: "PKM Dosen",
    company: "Proyek Dosen FIT Telkom University",
    period: "2026",
    location: "Bandung, Jawa Barat",
    description: "Fokus pada pengerjaan proyek dosen untuk pengabdian masyarakat sebagai bagian dari inisiatif Ko+Lab. Berkontribusi dalam pengembangan solusi teknologi yang berdampak langsung pada komunitas lokal.",
    highlight: true
  },
  {
    title: "PIC Educator JagoAI",
    company: "JagoAI (Ko+Lab)",
    period: "2025",
    location: "Online / Bandung",
    description: "Melalui keanggotaan Ko+Lab, saya berpindah ke startup JagoAI di akhir tahun. Bertanggung jawab dalam merancang modul, membuat video tutorial penggunaan AI, serta mengembangkan tools berbasis web yang terintegrasi AI."
  },
  {
    title: "Developer - Implementor Food AI Rescue",
    company: "Innovillage (Ko+Lab)",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Proyek unggulan yang dikembangkan bersama tim Ko+Lab. Berhasil menembus 150 tim terbaik di program Innovillage dengan fokus pada pengembangan fitur pencegahan food waste.",
    highlight: true
  },
  {
    title: "PKM Dosen",
    company: "Proyek Dosen FIT Telkom University",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Keterlibatan awal dalam proyek pengabdian masyarakat (PKM) bersama tim dosen FIT Telkom University saat pertama kali bergabung dengan Ko+Lab.",
    highlight: true
  },
  {
    title: "Team Member & PIC Kebersihan",
    company: "Startup Ngolab (Ko+Lab Research Alliance)",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Awal perjalanan di Ko+Lab melalui Research Alliance pada startup Ngolab yang bergerak di bidang FnB. Diawali sebagai anggota tim, kemudian diamanahkan sebagai PIC Kebersihan Dapur."
  },
  {
    title: "Asisten Praktikum (Asprak)",
    company: "Telkom University",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Membantu mahasiswa dalam memahami materi praktikum dan membimbing pengerjaan tugas lab.",
    badges: [
      { name: "Algoritma Pemrograman", color: "bg-blue-100 text-blue-600 border-blue-200" },
      { name: "Desain Antarmuka", color: "bg-purple-100 text-purple-600 border-purple-200" },
      { name: "Web Programming", color: "bg-green-100 text-green-600 border-green-200" },
      { name: "UX", color: "bg-orange-100 text-orange-600 border-orange-200" }
    ]
  }
];

export const projects = [
  {
    title: "Food AI Rescue",
    description: "Aplikasi revolusioner untuk meminimalisir pemborosan makanan (food waste) melalui optimasi distribusi berbasis AI. Terpilih sebagai Top 150 Innovillage.",
    tech: ["React", "MySQL", "Tailwind", "Vercel", "Supabase"],
    link: "https://innovillage.id",
    github: "https://github.com/shafnatfuaini/food-ai-rescue",
    image: "https://picsum.photos/seed/foodai/800/600",
    details: "Food AI Rescue adalah aplikasi penghubung antara surplus makanan dari bisnis kuliner dengan komunitas yang membutuhkan. Menggunakan AI untuk memprediksi potensi surplus dan mengoptimalkan rute logistik distribusi.",
    gallery: ["https://picsum.photos/seed/food1/800/600", "https://picsum.photos/seed/food2/800/600"]
  },
  {
    title: "Smart POS System",
    description: "Sistem Manajemen Penjualan (Point of Sale) yang membantu UMKM dalam mengelola inventaris dan laporan transaksi.",
    tech: ["JavaScript", "React", "Firebase", "Chart.js"],
    link: "#",
    github: "https://github.com/shafnatfuaini/smart-pos",
    image: "https://picsum.photos/seed/pos-system/800/600",
    details: "Sistem POS ini dirancang khusus untuk efisiensi operasional UMKM. Menggunakan Firebase untuk sinkronisasi data real-time dan Chart.js untuk visualisasi laporan penjualan harian dan bulanan.",
    gallery: ["https://picsum.photos/seed/pos1/800/600", "https://picsum.photos/seed/pos2/800/600"]
  },
  // {
  //   title: "JagoAI Educator Dashboard",
  //   description: "Dashboard administratif untuk mengelola kurikulum dan memantau progres belajar siswa secara otomatis.",
  //   tech: ["TypeScript", "Vite", "Motion", "Tailwind"],
  //   link: "#",
  //   github: "https://github.com/shafnatfuaini/jagoai-dashboard",
  //   image: "https://picsum.photos/seed/edu-dashboard/800/600",
  //   details: "Dashboard ini memungkinkan pendidik untuk memantau performa siswa secara real-time menggunakan metrik yang dihasilkan sistem. Dibangun dengan fokus pada kecepatan dan responsivitas.",
  //   gallery: ["https://picsum.photos/seed/edu1/800/600", "https://picsum.photos/seed/edu2/800/600"]
  // },
  {
    title: "EcoCapture Photography",
    description: "Website galeri foto profesional dengan optimasi gambar dan animasi transisi yang halus.",
    tech: ["React", "Framer Motion", "Cloudinary"],
    link: "#",
    image: "https://picsum.photos/seed/photography/800/600",
    details: "Menampilkan portofolio fotografi profesional dengan integrasi Cloudinary untuk manajemen aset media yang efisien. Animasi transisi yang halus memberikan pengalaman pengguna yang mewah.",
    gallery: ["https://picsum.photos/seed/photo1/800/600", "https://picsum.photos/seed/photo2/800/600"]
  }
];

export const skills = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    level: 90,
    details: "Membangun antarmuka yang responsif dan interaktif dengan performa optimal. Mahir dalam menerjemahkan desain menjadi kode yang bersih.",
    techs: ["React.js", "TypeScript", "Tailwind CSS", "HTML", "Bootstrap"]
  },
  {
    name: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    level: 80,
    details: "Mengembangkan logika sisi server, manajemen basis data, dan API yang aman untuk mendukung fungsionalitas aplikasi.",
    techs: ["Node.js", "PHP", "Java", "Laravel", "SQL", "Oracle Database", "MariaDB", "MongoDB"]
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="w-5 h-5" />,
    level: 85,
    details: "Merancang pengalaman pengguna yang intuitif melalui riset, wireframing, dan prototyping berkualitas tinggi.",
    techs: ["Figma", "Wireframing", "Prototyping", "Design Systems"]
  },
];
