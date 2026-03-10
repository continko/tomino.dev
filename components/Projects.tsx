"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Car,
  Building2,
  Layout,
  Zap,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  size: "large" | "small";
  accent: string;
  year: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "elitedrive",
    title: "EliteDrive — Premium Car Rental",
    description: "Rezervačný systém pre prenájom vozidiel s dôrazom na UX, Stripe platby a real-time správu vozového parku.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    icon: <Car size={26} />,
    size: "large",
    accent: "#6366f1",
    year: "2024",
    featured: true,
    stats: [
      { label: "Konverzia", value: "+43%" },
      { label: "Lighthouse", value: "98/100" },
      { label: "Load Time", value: "1.2s" },
    ],
  },
  {
    id: "luxora",
    title: "Luxora Development",
    description: "Digitálna identita a high-end web pre developerskú SRO. Minimalistický dizajn zameraný na architektúru.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    icon: <Building2 size={26} />,
    size: "large",
    accent: "#C5A059",
    year: "2024",
    featured: true,
    stats: [
      { label: "UI Style", value: "Premium" },
      { label: "SEO", value: "100" },
      { label: "Brand", value: "Luxora" },
    ],
  },
  
  {
    id: "landing",
    title: "ConvertLab UI",
    description: "Optimalizovaná pristávacia stránka s vysokým dôrazom na konverzný pomer.",
    tags: ["React", "Tailwind"],
    icon: <Layout size={20} />,
    size: "small",
    accent: "#06b6d4",
    year: "2024",
  },
  {
    id: "saas",
    title: "LaunchKit SaaS",
    description: "Moderný boilerplate pre rýchly štart SaaS projektov.",
    tags: ["Supabase", "Stripe"],
    icon: <Zap size={20} />,
    size: "small",
    accent: "#f59e0b",
    year: "2023",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLarge = project.size === "large";

  return (
    <motion.div
      variants={cardVariants as any}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative group rounded-3xl border border-[#1e1e2e] bg-[#0d0d14]/80 backdrop-blur-md overflow-hidden flex flex-col ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}15 0%, transparent 70%)` }} 
      />

      <div className="p-8 h-full flex flex-col z-10">
        <div className="flex items-start justify-between mb-8">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300"
            style={{ 
              backgroundColor: `${project.accent}10`, 
              borderColor: `${project.accent}30`,
              color: project.accent 
            }}
          >
            {project.icon}
          </div>
          <div className="flex gap-2">
            {project.featured && (
              <span 
                className="text-[10px] px-2 py-1 rounded-full border uppercase tracking-widest font-bold"
                style={{ backgroundColor: `${project.accent}10`, color: project.accent, borderColor: `${project.accent}30` }}
              >
                Featured
              </span>
            )}
            <span className="text-xs text-[#3f3f5a] font-mono">{project.year}</span>
          </div>
        </div>

        <h3 className={`font-bold text-[#e8e8f0] mb-3 tracking-tight ${isLarge ? "text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        
        <p className="text-[#8888a8] leading-relaxed mb-8 text-sm md:text-base max-w-xl">
          {project.description}
        </p>

        {isLarge && project.stats && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-[#050508]/50 border border-[#1e1e2e] p-4 rounded-2xl">
                <div className="text-xl font-bold mb-1" style={{ color: project.accent }}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4f4f7a] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-3 py-1 rounded-lg bg-[#161622] text-[#8888a8] border border-[#1e1e2e] font-mono group-hover:border-[#3f3f5a] transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div 
          className="flex items-center gap-2 text-sm font-semibold group/link cursor-pointer transition-colors"
          style={{ color: project.accent }}
        >
          Detail projektu 
          <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#6366f1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#6366f1]" />
            <span className="text-sm font-bold text-[#6366f1] uppercase tracking-[0.2em]">Portfólio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#e8e8f0] mb-6 tracking-tight">Vybrané projekty</h2>
          <p className="text-[#8888a8] text-lg max-w-2xl leading-relaxed">
            Digitálne riešenia, ktoré spájajú čistý kód s nekompromisným dizajnom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link 
            href="/projects" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full text-[#a5b4fc] font-semibold transition-all hover:bg-[#6366f1]/20 hover:border-[#6366f1]/40"
          >
            Pozrieť všetky projekty
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}