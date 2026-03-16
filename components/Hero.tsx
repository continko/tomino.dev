"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/continko", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tomas-hrmo", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      
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
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] mb-10"
        >
          <span className="text-[#e8e8f0]">Full-Stack</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
            Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-[#8888a8] max-w-2xl mx-auto leading-relaxed mb-14 font-medium"
        >
          Transformujem <span className="text-[#e8e8f0]">komplexné nápady</span> na škálovateľnú <span className="text-[#e8e8f0]">produkčnú architektúru</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all hover:scale-105 shadow-lg shadow-indigo-500/10"
          >
            Pozrieť projekty
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold text-[#a5b4fc] bg-[#1e1e2e]/50 border border-[#1e1e2e] hover:bg-[#1e1e2e] transition-all"
          >
            Kontaktovať ma
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-10">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#4f4f7a] hover:text-[#e8e8f0] transition-colors"
            >
              <Icon size={26} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#3f3f5a] font-bold">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#6366f1]">
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}