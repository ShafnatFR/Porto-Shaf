import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Camera, 
  Code, 
  Layers, 
  User, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  Award,
  Globe,
  Star,
  Twitter,
  Link as LinkIcon,
  CheckCircle2,
  AlertCircle,
  Layout,
  Server,
  Palette
} from 'lucide-react';

function MouseParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, originalX: number, originalY: number, size: number, color: string }[] = [];
    const connectDistance = 100;
    const mouseRadius = 150;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      particles = [];
      const spacing = 25; // Jarak antar titik agar teratur
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          particles.push({
            x,
            y,
            originalX: x,
            originalY: y,
            size: 1.2,
            color: 'rgba(59, 130, 246, 0.4)'
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0 && distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          p.x -= directionX * force * 5;
          p.y -= directionY * force * 5;
        } else {
          const dxOrig = p.originalX - p.x;
          const dyOrig = p.originalY - p.y;
          p.x += dxOrig * 0.05;
          p.y += dyOrig * 0.05;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resize();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto opacity-50" />;
}

const experiences = [
  {
    title: "PKM Dosen",
    company: "Proyek Dosen FIT Telkom University",
    period: "2026",
    location: "Bandung, Jawa Barat",
    description: "Fokus pada pengerjaan proyek dosen untuk pengabdian masyarakat sebagai bagian dari inisiatif Ko+Lab. Berkontribusi dalam pengembangan solusi teknologi yang berdampak langsung pada komunitas lokal."
  },
  {
    title: "PIC Educator Jago AI",
    company: "Jago AI (Ko+Lab)",
    period: "2025",
    location: "Online / Bandung",
    description: "Melalui keanggotaan Ko+Lab, saya berpindah ke startup JagoAI di akhir tahun. Bertanggung jawab dalam merancang modul, membuat video tutorial penggunaan AI, serta mengembangkan tools berbasis web yang terintegrasi AI."
  },
  {
    title: "Developer - Implementor Food AI Rescue",
    company: "Innovillage (Ko+Lab)",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Proyek unggulan yang dikembangkan bersama tim Ko+Lab. Berhasil menembus 150 tim terbaik di program Innovillage dengan fokus pada pengembangan fitur pencegahan food waste."
  },
  {
    title: "PKM Dosen",
    company: "Proyek Dosen FIT Telkom University",
    period: "2025",
    location: "Bandung, Jawa Barat",
    description: "Keterlibatan awal dalam proyek pengabdian masyarakat (PKM) bersama tim dosen FIT Telkom University saat pertama kali bergabung dengan Ko+Lab."
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

const projects = [
  {
    title: "Food AI Rescue",
    description: "Aplikasi revolusioner untuk meminimalisir pemborosan makanan (food waste) melalui optimasi distribusi berbasis AI. Terpilih sebagai Top 150 Innovillage.",
    tech: ["React Native", "Python", "Flask", "TensorFlow"],
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
  {
    title: "JagoAI Educator Dashboard",
    description: "Dashboard administratif untuk mengelola kurikulum dan memantau progres belajar siswa secara otomatis.",
    tech: ["TypeScript", "Vite", "Motion", "Tailwind"],
    link: "#",
    github: "https://github.com/shafnatfuaini/jagoai-dashboard",
    image: "https://picsum.photos/seed/edu-dashboard/800/600",
    details: "Dashboard ini memungkinkan pendidik untuk memantau performa siswa secara real-time menggunakan metrik yang dihasilkan sistem. Dibangun dengan fokus pada kecepatan dan responsivitas.",
    gallery: ["https://picsum.photos/seed/edu1/800/600", "https://picsum.photos/seed/edu2/800/600"]
  },
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

const skills = [
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

const NavItem = ({ href, children, active, onClick }: { href: string, children: React.ReactNode, active?: boolean, onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`relative px-3 py-2 transition-colors duration-300 font-medium text-sm lg:text-base ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
  >
    {children}
    {active && (
      <motion.span 
        layoutId="nav-badge"
        className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </a>
);

const renderWithKoLab = (text: string) => {
  return text.split(/(Ko\+Lab)/g).map((part, i) => 
    part === 'Ko+Lab' ? (
      <span key={i} className="font-extrabold tracking-tight">
        <span className="text-black">Ko</span>
        <span className="text-yellow-400">+</span>
        <span className="text-black">Lab</span>
      </span>
    ) : part
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // Refs
  const experienceRef = useRef(null);
  const contactRef = useRef<HTMLElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<any>({});
  const [isCopying, setIsCopying] = useState(false);
  
  // Mouse Tracker State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  const { scrollYProgress: expProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"]
  });

  const pathHeight = useTransform(expProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} tidak boleh kosong`;
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Format email tidak valid';
    }
    setFormErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 2000);
  };

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(activeFilter));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active Section Detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ x: useSpring(mouseX, { stiffness: 1000, damping: 40 }), y: useSpring(mouseY, { stiffness: 1000, damping: 40 }), marginLeft: 13, marginTop: 13 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-500">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-slate-900 tracking-tighter"
          >
            SF<span className="text-blue-600">RAMADHAN.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavItem href="#home" active={activeSection === 'home'}>Home</NavItem>
            <NavItem href="#about" active={activeSection === 'about'}>About</NavItem>
            <NavItem href="#skills" active={activeSection === 'skills'}>Skills</NavItem>
            <NavItem href="#projects" active={activeSection === 'projects'}>Projects</NavItem>
            <NavItem href="#experience" active={activeSection === 'experience'}>Experience</NavItem>
            <NavItem href="#contact" active={activeSection === 'contact'}>Contact</NavItem>
            <a 
              href="#contact" 
              className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <NavItem href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
                <NavItem href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavItem>
                <NavItem href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavItem>
                <NavItem href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavItem>
                <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
              AVAILABLE FOR PROJECTS
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Shafnat Fuaini <br />
              <span className="text-blue-600">Ramadhan</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
               Full Stack Developer • Tim Developer <span className="font-semibold text-slate-900">Food AI Rescue</span> • Fokus pada pengerjaan Proyek Dosen untuk Pengabdian Masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#experience" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Lihat Pengalaman <ChevronRight size={20} />
              </a>
              <a href="#contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                Hubungi Saya
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <a href="https://www.linkedin.com/in/shafnat-fuaini-ramadhan" referrerPolicy="no-referrer" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shafnatfuaini@student.telkomuniversity.ac.id" className="text-slate-400 hover:text-red-500 transition-colors">
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
              {/* Profile Image Placeholder with Design */}
              <div className="absolute inset-0 bg-blue-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[morph_8s_ease-in-out_infinite] opacity-10"></div>
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <User size={120} className="text-white opacity-20 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-xl">Shafnat Fuaini</p>
                  <p className="text-blue-200 text-sm">Full Stack Developer</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl floating animate-bounce-slow text-slate-800">
                <Award className="text-yellow-500 w-8 h-8 mb-1" />
                <p className="text-xs font-bold">5+ Tahun</p>
                <p className="text-[10px] text-slate-500">Fotografi</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl floating-delayed text-slate-800">
                <Code className="text-blue-500 w-8 h-8 mb-1" />
                <p className="text-xs font-bold">Food AI Rescue</p>
                <p className="text-[10px] text-slate-500">Dev Team</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-5">
           <div className="w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* About Section */}
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
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500 mb-1">Pendidikan Utama</p>
                  <p className="font-bold">D3 Sistem Informasi</p>
                  <p className="text-xs text-blue-600">Telkom University</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500 mb-1">Lokasi</p>
                  <p className="font-bold">Bandung, Indonesia</p>
                  <p className="text-xs text-blue-600">Jawa Barat</p>
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

      {/* Skills Section */}
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
        </div>
      </section>

      {/* Projects Section - Hidden for now */}
      {false && (
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proyek Pilihan</h2>
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
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === tech 
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
              {filteredProjects.map((project, index) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer relative"
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
                        {/* Social Share Buttons on Hover */}
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
                        <a 
                          href={project.link} 
                          target="_blank"
                          referrerPolicy="no-referrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                        >
                          Pelajari Selengkapnya <ExternalLink size={18} />
                        </a>
                      )}

                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                          title="View on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      )}

      {/* Experience Section */}
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
              {/* Animated Roadmap Path */}
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
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
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
                    <div className="flex items-center text-sm text-slate-500 mb-4 gap-2">
                       <MapPin size={14} /> <span>{exp.location}</span>
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

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Magic Dot Background */}
        <MouseParticleBackground />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pendidikan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-500/30">
                <GraduationCap size={32} />
              </div>
              <div className="border-l-2 border-blue-600/30 pl-8 pb-8">
                <h3 className="text-2xl font-bold mb-1">Universitas Telkom</h3>
                <p className="text-blue-400 font-medium mb-4">D3 Sistem Informasi • 2025 (Expected/Active)</p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center gap-2">• Aktif dalam Laboratorium Fakultas Ilmu Terapan (FIT)</li>
                  <li className="flex items-center gap-2">• Terlibat dalam organisasi tingkat fakultas (HMDSI)</li>
                  <li className="flex items-center gap-2">• Fokus pada pengembangan Frontend & UI/UX</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start opacity-70"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-slate-500">
                <GraduationCap size={32} />
              </div>
              <div className="border-l-2 border-slate-800 pl-8">
                <h3 className="text-2xl font-bold mb-1">SMAS BPS&K 1 Jakarta</h3>
                <p className="text-slate-500 font-medium mb-2">Lulus Tahun 2024</p>
                <p className="text-slate-400 text-sm">
                  Aktif menjabat sebagai Bendahara 2 OSIS dan Koordinator Ekstrakurikuler Hadroh. Memimpin tim dokumentasi dan fotografi sekolah.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-blue-600 rounded-[40px] p-10 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative group/contact">
            {/* Busy Background Patterns */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
              <div className="absolute rotate-45 -right-20 -top-20 w-80 h-80 border-4 border-white/30 rounded-full"></div>
              <div className="absolute rotate-45 -right-10 -top-10 w-96 h-96 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/15 rounded-full blur-3xl"></div>
              <div className="absolute top-10 left-1/3 w-1 h-32 bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>
              <div className="absolute bottom-10 right-1/4 w-1 h-48 bg-gradient-to-t from-white/0 via-white/10 to-white/0"></div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-[100px]"
              />
            </div>

            {/* Spotlight Glow following Cursor */}
            <motion.div 
              className="absolute pointer-events-none w-[800px] h-[800px] rounded-full z-0 hidden lg:block opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                x: useSpring(useTransform(mouseX, x => x - 400), { stiffness: 100, damping: 20 }),
                y: useSpring(useTransform(mouseY, y => y - (contactRef.current?.offsetTop || 0) - 400), { stiffness: 100, damping: 20 }),
                left: 0,
                top: 0
              }}
            />

            <div className="flex-1 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ayo Berkolaborasi!</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
                Apakah Anda memiliki proyek menarik atau peluang kerja? Saya terbuka untuk diskusi lebih lanjut.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Kirim Email</p>
                    <p className="font-bold">shafnat@student.telkomuniversity.ac.id</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Telepon / WhatsApp</p>
                    <p className="font-bold">085215376975</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Lokasi</p>
                    <p className="font-bold">Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center lg:justify-end relative z-10">
              <div className="bg-white p-2 rounded-[32px] w-full max-w-md shadow-2xl">
                <div className="bg-slate-50 p-8 rounded-[28px]">
                  <h3 className="text-slate-900 text-2xl font-bold mb-6">Hubungi Langsung</h3>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    if (!formErrors.name && !formErrors.email && !formErrors.message && formData.name && formData.email && formData.message) {
                      alert('Pesan berhasil dikirim!');
                    } else {
                      alert('Mohon lengkapi formulir dengan benar.');
                    }
                  }}>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nama Anda" 
                        className={`w-full px-5 py-4 bg-white border ${formErrors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`} 
                      />
                      {formErrors.name && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Anda" 
                        className={`w-full px-5 py-4 bg-white border ${formErrors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`} 
                      />
                      {formErrors.email && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Pesan Anda..." 
                        rows={4} 
                        className={`w-full px-5 py-4 bg-white border ${formErrors.message ? 'border-red-500' : 'border-slate-200'} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                      ></textarea>
                      {formErrors.message && (
                        <div className="absolute right-4 top-4 text-red-500">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>

                    <button 
                      type="submit"
                      disabled={Object.values(formErrors).some(err => !!err) || !formData.name}
                      className={`w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      Kirim Sekarang
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-800">
          <div className="mb-8 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/shafnat-fuaini-ramadhan" aria-label="LinkedIn" referrerPolicy="no-referrer" target="_blank" className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Github" className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
              <Github size={20} />
            </a>
            <a href="mailto:shafnatfuaini@student.telkomuniversity.ac.id" aria-label="Email" className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shafnat Fuaini Ramadhan. Dibuat dengan 💙 di Bandung.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="p-0">
                <img src={selectedProject.image} className="w-full aspect-video object-cover" alt="" referrerPolicy="no-referrer" />
              </div>
              
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 rounded-full text-xs font-bold text-blue-600">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {selectedProject.details}
                </p>
                
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-4">Galeri Proyek</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img: string, i: number) => (
                        <img key={i} src={img} className="rounded-xl aspect-square object-cover border border-slate-100" alt="" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-64 space-y-4">
                    <h3 className="font-bold text-xl mb-4">Statistik</h3>
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                      <Star className="text-yellow-500" />
                      <div>
                        <p className="text-xs text-slate-500">Kualitas</p>
                        <p className="font-bold">Premium</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                      <Globe className="text-blue-500" />
                      <div>
                        <p className="text-xs text-slate-500">Aksesibilitas</p>
                        <p className="font-bold">Publik</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-8 border-t">
                  <a href={selectedProject.link} className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    Lihat Proyek Langsung <ExternalLink size={20} />
                  </a>
                  <button onClick={() => setSelectedProject(null)} className="text-slate-500 font-medium hover:text-slate-800 px-6 py-2">
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        
        .floating {
          animation: float_anim 6s ease-in-out infinite;
        }
        
        .floating-delayed {
          animation: float_anim 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce_anim 3s infinite;
        }
        
        @keyframes float_anim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce_anim {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}</style>
    </div>
  );
}

