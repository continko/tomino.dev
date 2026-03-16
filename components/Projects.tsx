"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  year: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "elitedrive",
    title: "EliteDrive",
    description: "Premium Car Rental s integráciou Stripe platieb a real-time správou vozidiel.",
    tags: ["Next.js", "Stripe", "Prisma"],
    accent: "#ec4899", 
    year: "02.2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000", 
  },
  {
    id: "luxora",
    title: "Luxora Development",
    description: "Digitálna identita a high-end web pre developerskú SRO zameranú na architektúru.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    accent: "#ec4899",
    year: "11.2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center py-24 border-b border-[#1e1e2e]/50 last:border-0"
    >
      <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xl font-mono text-[#1e1e2e] font-black group-hover:text-[#ec4899] transition-colors">
            0{index + 1}
          </span>
          <div className="h-[1px] w-8 bg-[#1e1e2e]" />
          <span className="text-[10px] font-bold text-[#4f4f7a] uppercase tracking-[0.3em]">{project.year}</span>
        </div>

        <h3 
          className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter transition-colors duration-500 hover:text-[#ec4899] cursor-default"
        >
          {project.title}
        </h3>

        <p className="text-[#8888a8] text-lg leading-relaxed mb-10 max-w-md font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] px-3 py-1 rounded-full border border-[#1e1e2e] text-[#555575] font-bold uppercase tracking-wider group-hover:border-[#ec4899]/30 group-hover:text-[#ec4899]/60 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <Link 
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-4 text-white font-bold group/btn"
        >
          <span className="text-sm uppercase tracking-widest border-b-2 border-white/5 pb-1 group-hover/btn:border-[#ec4899] transition-all">
            Detail projektu
          </span>
          <div className="w-12 h-12 rounded-full border border-[#1e1e2e] flex items-center justify-center group-hover/btn:bg-[#ec4899] group-hover/btn:border-[#ec4899] group-hover/btn:text-white transition-all duration-500">
            <ArrowUpRight size={20} />
          </div>
        </Link>
      </div>

      <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-[#0d0d14] border border-[#1e1e2e] transition-all duration-1000 group-hover:border-[#ec4899]/20">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050508] via-transparent to-transparent opacity-80 z-10" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out opacity-40 group-hover:opacity-100"
          />

          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[120px] pointer-events-none z-20"
            style={{ background: `radial-gradient(circle at center, #ec4899 0%, transparent 75%)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 gap-12">
          <div className="relative">
            <span className="text-xs font-black text-[#ec4899] uppercase tracking-[0.5em] block mb-6">Portfolio</span>
            <h2 className="text-7xl md:text-[120px] font-black text-white tracking-[-0.05em] leading-[0.8]">
              Projekty<span className="text-[#ec4899]">.</span>
            </h2>
          </div>
          <p className="text-[#555575] text-xl max-w-xs leading-relaxed font-medium border-l border-[#1e1e2e] pl-8">
            Digitálne riešenia postavené na <span className="text-[#e8e8f0]">výkone</span> a precíznom <span className="text-[#e8e8f0]">UX</span>.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <Link 
            href="/projects" 
            className="group flex items-center gap-6 px-10 py-5 rounded-full bg-[#0d0d14] border border-[#1e1e2e] hover:border-[#ec4899]/30 transition-all duration-500"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#555575] group-hover:text-white transition-colors">Všetky projekty</span>
            <ChevronRight size={20} className="text-[#3f3f5a] group-hover:text-[#ec4899] transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}