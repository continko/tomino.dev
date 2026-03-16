"use client";

import { motion } from "framer-motion";
import { 
  Car, Building2, Zap, ArrowUpRight, 
  Search, Sparkles, Wrench
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
    year: "03.2026"
  },
  {
    /*id: "kovo-sd",
    title: "KOVO SD",*/
    status: "In Development", 
    subtitle: "Industrial Manufacturing & Export",
    icon: <Wrench size={24} />,
    accent: "#6366f1",
    tags: ["Next.js", "Industrial SEO", "i18n"],
    description: "Komplexná digitálna platforma pre poprednú strojársku firmu.",
    image: "/image/KovoSDHomePage.png",
    category: "Heavy Industry",
    year: "2026"
  }, 
  {
    id: "elitedrive",
    title: "EliteDrive",
    subtitle: "Car Rental",
    status: "Finished", 
    category: "Web App / Fintech",
    description: "Komplexný rezervačný systém s integráciou Stripe a správou vozového parku v reálnom čase.",
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
    description: "Digitálna prezentácia pre realitný projekt s dôrazom na high-end architektúru a plynulé animácie.",
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
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-10"
            >
              Moje <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
                Projekty.
              </span>
            </motion.h1>
          </div>

          <motion.div className="hidden lg:block">
            <div className="flex items-center gap-4 bg-[#0a0a0f] border border-[#1e1e2e] px-8 py-5 rounded-[2rem] focus-within:border-[#6366f1]/50 transition-all">
              <Search size={20} className="text-[#4f4f7a]" />
              <input 
                type="text" 
                placeholder="HĽADAŤ PROJEKT" 
                className="bg-transparent border-none outline-none text-white text-sm font-black tracking-[0.2em] placeholder:text-[#4f4f7a] uppercase"
              />
            </div>
          </motion.div>
        </div>

        {/* GRID */}
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
                <div className="relative aspect-[16/11] rounded-[3rem] overflow-hidden bg-[#0a0a0f] border border-[#1e1e2e] mb-10 group-hover:border-[#6366f1]/40 transition-all duration-700 shadow-2xl">
                  <motion.div className="absolute inset-0 z-0" whileHover={{ scale: 1.05 }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-700 z-10">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-white">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>

                  <div className="absolute top-10 left-10 z-20">
                    <div className="w-14 h-14 rounded-2xl border flex items-center justify-center backdrop-blur-2xl" style={{ backgroundColor: `${project.accent}15`, borderColor: `${project.accent}30`, color: project.accent }}>
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="absolute top-12 right-12 z-20">
                    <span className="text-[11px] font-black font-mono text-white/40 tracking-[0.4em] uppercase">{project.year}</span>
                  </div>
                </div>

                <div className="px-6">
                  <div className="flex items-center gap-3 mb-5">
                    {project.status === "Finished" ? (
                      <div className="px-2 py-1 rounded-md bg-[#f703ea]/5 border border-[#f703ea]/40">
                        <span className="text-[11px] font-black text-[#f703ea] uppercase tracking-widest text-center">Finished ✅</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#dbd7db]/5 border border-[#dbd7db]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff22] animate-pulse" />
                        <span className="text-[11px] font-black text-[#00ff22] uppercase tracking-widest text-center">Building 👨‍💻</span>
                      </div>
                    )}
                    <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: project.accent }}>{project.category}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:translate-x-3 transition-transform duration-500">
                    {project.title} <span className="text-white/10 mx-2">/</span> <span className="font-light text-[#8888a8] group-hover:text-white transition-colors">{project.subtitle}</span>
                  </h2>
                  <p className="text-[#8888a8] text-lg font-light leading-relaxed max-w-lg">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}