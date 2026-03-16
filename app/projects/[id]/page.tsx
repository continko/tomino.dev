"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Globe, Github, CheckCircle2, 
  Zap, Layout, Code2, Rocket, 
  ShieldCheck, Sparkles, ArrowRight
} from "lucide-react";
import Link from "next/link";

const projectsData = {
  "kovo-sd": {
    title: "KOVO SD",
    subtitle: "Industrial Manufacturing & Export",
    category: "Heavy Industry",
    year: "2026",
    description: "Komplexná digitálna platforma pre poprednú strojársku firmu. Projekt zameraný na zjednotenie domácej identity a expanziu na zahraničné trhy.",
    story: "Cieľom bolo nahradiť neefektívne generické riešenia autentickou prezentáciou, ktorá presne komunikuje technologické kapacity firmy od CNC laserového rezania až po výrobu oceľových hál.",
    challenges: "Implementácia plynulého multijazyčného systému (SK/EN) na doméne .com pri zachovaní vysokého výkonu a SEO v konkurenčnom sektore.",
    solution: "Využitie Next.js a i18n pre okamžité prepínanie jazykov. Architektúra postavená na SSG zaisťuje bleskové načítanie technických výkresov.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "i18n", "Vercel"],
    features: ["Multilingual Engine", "B2B Lead Generation", "Project Showcase", "Performance Optimized"],
    accent: "#6366f1",
    link: "https://kovosd.sk"
  },
  elitedrive: {
    title: "EliteDrive",
    subtitle: "Premium Car Rental",
    category: "Web App / Fintech",
    year: "02.2026",
    description: "Komplexný rezervačný systém pre prémiovú autopožičovňu. Spojenie luxusu a technickej precíznosti.",
    story: "Cieľom bolo vytvoriť platformu s inteligentným systémom filtrovania vozidiel a priamym prepojením na Stripe pre okamžitú autorizáciu platieb.",
    challenges: "Synchronizácia vozidiel v reálnom čase naprieč pobočkami a zamedzenie duplicitných rezervácií.",
    solution: "Použitie Prisma ORM s transakčnou logikou a vlastný webhook systém pre Stripe.",
    tech: ["Next.js 14", "Stripe API", "Prisma", "PostgreSQL", "Tailwind"],
    features: ["Dynamic Fleet Management", "Stripe Connect", "Automated PDF Invoices", "Real-time Booking"],
    accent: "#ec4899",
    link: "https://elite-drive-web.vercel.app/"
  },
  luxora: {
    title: "Luxora",
    subtitle: "Luxury Real Estate",
    category: "Corporate Web / Architecture",
    year: "11.2025",
    description: "Digitálna prezentácia pre developerskú skupinu zameranú na high-end rezidenčné projekty.",
    story: "Luxora potrebovala web, ktorý predáva emóciu cez plynulé prechody a interaktívne galérie.",
    challenges: "Udržať výkon pri použití veľkého množstva 4K vizualizácií a komplexných animácií.",
    solution: "Implementácia pokročilého lazy-loadingu a optimalizácia obrázkov cez Next/Image.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind", "Sanity CMS"],
    features: ["Interactive Floor Plans", "4K Visual Galleries", "SEO Optimized", "Lead Gen Forms"],
    accent: "#C5A059",
    link: "https://luxoradevelopment.vercel.app/"
  },
  launchkit: {
    title: "LaunchKit",
    subtitle: "SaaS Boilerplate",
    category: "Developer Tool",
    year: "02.2025",
    description: "Full-stack štartér pre SaaS projekty, ktorý šetrí týždne vývojového času.",
    story: "Vytvorené na elimináciu repetitívnych úloh pri nastavovaní autentifikácie a platieb pre nové nápady.",
    challenges: "Vytvoriť architektúru, ktorá je dostatočne flexibilná pre rôzne typy SaaS aplikácií.",
    solution: "Modularizovaný kód s jasným oddelením business logiky postavený na modernom T3 stacku.",
    tech: ["Supabase", "Next.js", "Trpc", "Zod", "Tailwind"],
    features: ["Auth & RBAC", "Subscription Engine", "Admin Dashboard", "Email Templates"],
    accent: "#f59e0b",
    link: "https://launchkit.dev"
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508]">
      <Link href="/projects" className="text-[#ec4899] uppercase font-black tracking-widest border-b border-[#ec4899]">Projekt nenájdený / Späť</Link>
    </div>
  );

  return (
    <main className="relative min-h-screen pt-40 pb-40 px-6 text-[#e8e8f0] selection:bg-[#ec4899]/30 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/projects" className="group inline-flex items-center gap-4 mb-24 bg-[#0a0a0f] border border-[#1e1e2e] px-8 py-4 rounded-2xl hover:border-[#ec4899]/50 transition-all duration-500">
            <ArrowLeft size={16} className="text-[#ec4899] group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Späť do portfólia</span>
          </Link>
        </motion.div>

        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
            <Sparkles size={14} className="text-[#ec4899]" />
            <span className="text-[10px] font-black text-[#ec4899] uppercase tracking-[0.5em]">{project.category}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-black text-white tracking-[-0.06em] leading-[0.8] mb-16 break-words"
          >
            {project.title}<span className="bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-8">
                <p className="text-[#8888a8] text-2xl md:text-4xl font-light leading-tight">
                  {project.description}
                </p>
             </div>
             <div className="lg:col-span-4 flex lg:justify-end">
                <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 px-12 py-6 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:text-[#ec4899] transition-all duration-500 shadow-2xl shadow-white/5"
                >
                  Live Projekt <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                </a>
             </div>
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            <section className="p-12 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] relative overflow-hidden group">
               <h3 className="text-[#3f3f5a] font-black text-[10px] uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                 <div className="w-10 h-px bg-[#3f3f5a]" /> Príbeh projektu
               </h3>
               <p className="text-[#e8e8f0] text-xl font-light leading-relaxed">
                 {project.story}
               </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 rounded-[3rem] bg-[#0a0a0f] border border-red-500/10">
                  <h4 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-3">
                    <ShieldCheck size={16} /> Výzva
                  </h4>
                  <p className="text-[#8888a8] font-light leading-relaxed">{project.challenges}</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-[#0a0a0f] border border-green-500/10">
                  <h4 className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-3">
                    <Zap size={16} /> Riešenie
                  </h4>
                  <p className="text-[#8888a8] font-light leading-relaxed">{project.solution}</p>
               </div>
            </div>

            <section className="pt-12">
              <h3 className="text-white font-black text-[10px] uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                 <Layout size={16} className="text-[#ec4899]" /> Kľúčové Funkcie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 rounded-3xl bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#ec4899]/30 transition-all duration-500">
                    <CheckCircle2 size={20} className="text-[#ec4899]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8888a8]">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-8">
               <div className="p-12 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e]">
                  <h3 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-12 flex items-center gap-4">
                    <Code2 size={16} className="text-[#ec4899]" /> Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-[#8888a8] uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-[#1e1e2e] flex items-center justify-between">
                     <span className="text-[10px] font-black text-[#3f3f5a] uppercase tracking-widest">Rok</span>
                     <span className="text-2xl font-black text-white">{project.year}</span>
                  </div>
               </div>
               
               <Link href="/contact" className="group block p-10 rounded-[3rem] bg-gradient-to-br from-[#ec4899]/10 to-transparent border border-[#ec4899]/20 hover:border-[#ec4899]/50 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-4">
                    Chcem niečo podobné <ArrowRight size={16} className="text-[#ec4899] group-hover:translate-x-2 transition-transform" />
                  </span>
               </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}