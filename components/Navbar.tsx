"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "O mne", href: "/about" },
  { label: "Projekty", href: "/projects" },
  { label: "Schopnosti", href: "/skills" },
  { label: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/80 backdrop-blur-xl border-b border-[#1e1e2e]/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center">
        <Link 
          href="/" 
          className="font-bold text-xl tracking-tighter group cursor-pointer shrink-0"
        >
          <span className="text-[#e8e8f0] group-hover:text-white transition-colors">hrmo</span>
          <span className="text-[#a855f7]">.</span>
          <span className="text-[#a855f7] opacity-80 group-hover:opacity-100 transition-opacity">dev</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#8888a8] hover:!text-[#a855f7] transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#10101a] border border-[#1e1e2e] group hover:border-[#6366f1]/30 transition-colors shrink-0">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a5b4fc]">
            Dostupný na projekty
          </span>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            className="text-[#8888a8] hover:text-[#a855f7] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0d0d14]/98 backdrop-blur-2xl border-b border-[#1e1e2e] shadow-2xl"
        >
          <ul className="px-8 py-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold text-[#8888a8] hover:!text-[#a855f7] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-[#1e1e2e]">
               <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Dostupný na projekty</span>
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}