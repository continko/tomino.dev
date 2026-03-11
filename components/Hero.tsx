"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as any 
    },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tight leading-[0.85] mb-10"
        >
          <span className="text-[#e8e8f0]">Full-Stack</span>
          <br />
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]"
          >
            Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-[#8888a8] max-w-2xl mx-auto leading-relaxed mb-14 text-balance font-medium"
        >
          Transformujem{" "}
          <span className="text-[#e8e8f0]">komplexné nápady</span> na škálovateľnú{" "}
          <span className="text-[#e8e8f0]">produkčnú architektúru</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
            }}
          >
            Pozrieť projekty
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-[#a5b4fc] bg-[#1e1e2e]/50 border border-[#1e1e2e] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all duration-300"
          >
            Kontaktovať ma
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-10"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#4f4f7a] hover:text-[#6366f1] transition-all duration-300"
            >
              <Icon size={26} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-[0.3em] text-[#3f3f5a] font-bold">Scroll</span>
           <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[#6366f1]"
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}