"use client";

import { motion, AnimatePresence } from "framer-motion";
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
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center">
        {/* LOGO */}
        <Link 
          href="/" 
          className="font-bold text-xl tracking-tighter group cursor-pointer shrink-0"
        >
          <span className="text-[#e8e8f0] group-hover:text-white transition-colors">hrmo</span>
          <span className="text-[#ec4899]">.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#a855f7] opacity-80 group-hover:opacity-100 transition-opacity font-black">
            dev
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#8888a8] hover:text-[#ec4899] transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* STATUS BADGE */}
        {/*<div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#10101a] border border-[#1e1e2e] shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a5b4fc]">
            Dostupný na projekty
          </span>
        </div>*/}

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            className="text-[#8888a8] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0d0d14]/98 backdrop-blur-2xl border-b border-[#1e1e2e] shadow-2xl"
          >
            <ul className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-bold text-[#8888a8] hover:text-[#ec4899] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}