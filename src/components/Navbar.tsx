import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, children, active, onClick }: NavItemProps) => (
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

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, activeSection, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
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
            href="https://wa.me/6285215376975" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 flex items-center gap-2"
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
  );
}
