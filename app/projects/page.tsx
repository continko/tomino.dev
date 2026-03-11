"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Building2, 
  Layout, 
  Zap, 
  ArrowUpRight, 
  Search,
  Sparkles, 
  Wrench
} from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    id: "launchkit",
    title: "LaunchKit",
    subtitle: "SaaS Boilerplate",
    status: "In Development", 
    category: "Developer Tool",
    description: "Full-stack štartér pre SaaS projekty. Obsahuje predpripravenú autentifikáciu, databázovú schému a integráciu platieb.",
    icon: <Zap size={24} />,
    accent: "#f59e0b",
    image: "/image/LaunchKit.png",
    tags: ["Supabase", "Next.js"],
    year: "02.2025"
  },
  {
    status: "In Development", 
    subtitle: "Industrial Manufacturing & Export",
    icon: <Wrench size={24} />,
    accent: "#6366f1",
    tags: ["Next.js", "Industrial SEO", "i18n"],
    description: "Komplexná digitálna platforma pre poprednú strojársku firmu.",
    image: "/image/KovoSDHomePage.png",
    category: "Heavy Industry",
    /*id: "kovo-sd",
    title: "KOVO SD",
    subtitle: "Industrial Manufacturing & Export",
    category: "Heavy Industry",
    status: "In Development", 
    description: "Komplexná digitálna platforma pre poprednú strojársku firmu. Momentálne pracujem na implementácii multijazyčného rozhrania a interaktívnych galérií.",
    icon: <Wrench size={24} />,
    accent: "#6366f1",
    image: "/image/KovoSDHomePage.png",
    tags: ["Next.js", "Industrial SEO", "i18n"],
    year: "2026"
  */},
  {
    id: "elitedrive",
    title: "EliteDrive",
    subtitle: "Car Rental",
    status: "Finished", 
    category: "Web App / Fintech",
    description: "Komplexný rezervačný systém s integráciou Stripe a správou vozového parku v reálnom čase. Optimalizované pre maximálny konverzný pomer.",
    icon: <Car size={24} />,
    accent: "#6366f1",
    image: "/image/EliteDriveHomePage.PNG",
    tags: ["Next.js", "Stripe", "Prisma"],
    year: "02.2026"
  },
  {
    id: "luxora",
    title: "Luxora Development",
    subtitle: "Construction Company",
    status: "Finished", 
    category: "Corporate Web",
    description: "Digitálna prezentácia pre realitný projekt s dôrazom na high-end architektúru. Obsahuje plynulé scroll animácie a interaktívne galérie.",
    icon: <Building2 size={24} />,
    accent: "#C5A059",
    image: "/image/LuxoraHomePage.PNG",
    tags: ["Framer Motion", "Tailwind"],
    year: "11.2025"
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 text-[#e8e8f0] selection:bg-[#6366f1]/30 overflow-x-hidden">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SEKCIA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 mb-8 w-fit"
            >
              <Sparkles size={14} className="text-[#6366f1]" />
              <span className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.3em]">Selected Works</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-10"
            >
              Moje <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
                Projekty.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#8888a8] text-xl md:text-2xl font-light max-w-2xl leading-relaxed"
            >
              Výber riešení, kde sa technológia stretáva s dizajnom. Od komplexných systémov po vizuálne zážitky.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group hidden lg:block"
          >
             <div className="flex items-center gap-4 bg-[#0a0a0f] border border-[#1e1e2e] pl-6 pr-10 py-5 rounded-[2rem] backdrop-blur-xl focus-within:border-[#6366f1]/50 transition-all duration-300">
              <Search size={20} className="text-[#4f4f7a] group-focus-within:text-[#6366f1] transition-colors" />
              <input 
                type="text" 
                placeholder="HĽADAŤ PROJEKT" 
                className="bg-transparent border-none outline-none text-white text-sm font-black tracking-[0.2em] placeholder:text-[#4f4f7a] w-40 uppercase"
              />
            </div>
          </motion.div>
        </div>

        {/* GRID PROJEKTOV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="group block">
                {/* Visual Cover */}
                <div className="relative aspect-[16/11] rounded-[3rem] overflow-hidden bg-[#0a0a0f] border border-[#1e1e2e] mb-10 group-hover:border-[#6366f1]/40 transition-all duration-700 ease-out shadow-2xl shadow-black/50">
                  
                  {/* PROJECT IMAGE */}
                  <motion.div 
                    className="absolute inset-0 z-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                  </motion.div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#0a0a0f]/40 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-700 z-10 flex items-center justify-center">
                    <motion.div 
                       whileHover={{ scale: 1.1 }}
                       className="w-20 h-20 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-2xl"
                    >
                      <ArrowUpRight size={32} />
                    </motion.div>
                  </div>

                  {/* Icon & Year */}
                  <div className="absolute top-10 left-10 z-20 flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl border flex items-center justify-center backdrop-blur-2xl"
                      style={{ backgroundColor: `${project.accent}15`, borderColor: `${project.accent}30`, color: project.accent }}
                    >
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="absolute top-12 right-12 z-20">
                    <span className="text-[11px] font-black font-mono text-white/40 tracking-[0.4em] uppercase">
                      {project.year}
                    </span>
                  </div>

                  <div 
                    className="absolute -bottom-32 -right-32 w-80 h-80 blur-[120px] opacity-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000"
                    style={{ background: project.accent }}
                  />
                </div>

                {/* Text Content */}
                <div className="px-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      
                      {/* 1. IN PROGRESS BADGE (TERAZ PRVÝ) */}
                      {project.status === "Finished" && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#f703ea]/5 border border-[#f703ea]/40">
                          <span className="text-[11px] font-black text-[#f703ea] uppercase tracking-widest">Finished✅</span>
                        </div>
                      )}
                      {project.status === "In Development" && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#dbd7db]/5 border border-[#dbd7db]/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff22] animate-pulse shadow-[0_0_8px_#00ff22]" />
                          <span className="text-[11px] font-black text-[#00ff22] uppercase tracking-widest">Building👨‍💻</span>
                        </div>
                      )}

                      {/* 2. CATEGORY */}
                      <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: project.accent }}>
                        {project.category}
                      </span>
                    </div>

                    <div className="w-8 h-px bg-[#1e1e2e]" />
                    <span className="text-[11px] font-bold text-[#4f4f7a] uppercase tracking-[0.2em]">
                      {/*
                      {project.tags[0]} • {project.tags[1]}
                      */}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {project.title} <span className="text-white/10 mx-2">/</span> <span className="font-light text-[#8888a8] group-hover:text-white transition-colors">{project.subtitle}</span>
                  </h2>
                  
                  <p className="text-[#8888a8] text-lg font-light leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}