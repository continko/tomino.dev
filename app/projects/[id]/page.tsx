"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Globe, 
  Github, 
  CheckCircle2, 
  Zap,
  Layout,
  Code2,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowRight
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
    challenges: "Implementácia plynulého multijazyčného systému (SK/EN) na doméne .com pri zachovaní vysokého výkonu a optimalizácie pre vyhľadávače v konkurenčnom priemyselnom sektore.",
    solution: "Využitie Next.js a i18n pre okamžité prepínanie jazykov. Architektúra postavená na statickom generovaní stránok (SSG) zaisťuje bleskové načítanie technických výkresov a galérií projektov.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "i18n", "Vercel"],
    features: ["Multilingual Engine (SK/EN)", "B2B Lead Generation", "Project Showcase Grid", "Performance Optimized Architecture"],
    accent: "#6366f1",
    link: "https://kovosd.sk"
  },
  elitedrive: {
    title: "EliteDrive",
    subtitle: "Premium Car Rental",
    category: "Web App / Fintech",
    year: "02.2026",
    description: "Komplexný rezervačný systém pre prémiovú autopožičovňu. Spojenie luxusu a technickej precíznosti v jednom ekosystéme.",
    story: "Cieľom bolo vytvoriť platformu, ktorá neodradí klienta zložitým procesom. Implementoval som inteligentný systém filtrovania vozidiel a priame prepojenie na Stripe pre okamžitú autorizáciu platieb a depozitov.",
    challenges: "Najväčšou výzvou bola synchronizácia vozidiel v reálnom čase naprieč viacerými pobočkami a zamedzenie duplicitných rezervácií počas špičky.",
    solution: "Použitie Prisma ORM s transakčnou logikou a vlastný webhook systém pre Stripe, ktorý okamžite blokuje vozidlo v databáze po inicializácii platby.",
    tech: ["Next.js 14", "Stripe API", "Prisma", "PostgreSQL", "Tailwind", "Framer Motion"],
    features: ["Dynamic Fleet Management", "Stripe Connect", "Automated PDF Invoices", "Real-time Booking Engine"],
    accent: "#6366f1",
    link: "https://elite-drive-web.vercel.app/"
  },
  luxora: {
    title: "Luxora",
    subtitle: "Luxury Real Estate",
    category: "Corporate Web / Architecture",
    year: "11.2025",
    description: "Digitálna prezentácia pre developerskú skupinu zameranú na high-end rezidenčné projekty.",
    story: "Luxora potrebovala web, ktorý predáva emóciu. Stavil som na plynulé prechody a interaktívne galérie, ktoré prezentujú nehnuteľnosti ako umelecké diela.",
    challenges: "Udržať vysoký výkon stránky pri použití veľkého množstva 4K vizualizácií a komplexných animácií.",
    solution: "Implementácia pokročilého lazy-loadingu, optimalizácia obrázkov cez Next/Image a použitie Framer Motion pre plynulý scroll zážitok.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind", "Sanity CMS"],
    features: ["Interactive Floor Plans", "4K Visual Galleries", "SEO Optimized Architecture", "Lead Gen Forms"],
    accent: "#C5A059",
    link: "https://luxoradevelopment.vercel.app/"
  },
  launchkit: {
    title: "LaunchKit",
    subtitle: "SaaS Boilerplate",
    category: "Developer Tool",
    year: "02.2025",
    description: "Full-stack štartér pre SaaS projekty, ktorý šetrí týždne vývojového času.",
    story: "Postavil som LaunchKit, pretože ma nebavilo stále dookola nastavovať autentifikáciu a platby pre každý nový nápad.",
    challenges: "Vytvoriť architektúru, ktorá je dostatočne flexibilná pre rôzne typy SaaS aplikácií.",
    solution: "Modularizovaný kód s jasným oddelením business logiky a infraštruktúry, postavený na modernom T3 stacku.",
    tech: ["Supabase", "Next.js", "Trpc", "Zod", "Tailwind"],
    features: ["Auth & RBAC", "Subscription Engine", "Admin Dashboard", "Email Templates"],
    accent: "#f59e0b",
    link: "https://luxoradevelopment.vercel.app/"
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508]">
      <Link href="/projects" className="text-[#6366f1] uppercase font-black tracking-widest">Projekt nenájdený / Späť</Link>
    </div>
  );

  return (
    <main className="relative min-h-screen pt-32 pb-40 px-6 text-[#e8e8f0] selection:bg-[#6366f1]/40 overflow-x-hidden">
      
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#6366f1]/15 rounded-full blur-[160px] -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#a855f7]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/projects" className="group inline-flex items-center gap-4 mb-20 bg-[#0c0c12]/50 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hover:border-[#6366f1]/50 transition-all">
            <ArrowLeft size={18} className="text-[#6366f1] group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Späť do portfólia</span>
          </Link>
        </motion.div>

        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
            <Sparkles size={16} className="text-[#6366f1]" />
            <span className="text-[11px] font-black text-[#6366f1] uppercase tracking-[0.5em]">{project.category}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12"
          >
            {project.title}<span className="text-[#6366f1]">.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-7">
                <p className="text-[#8888a8] text-xl md:text-3xl font-light leading-snug">
                  {project.description}
                </p>
             </div>
             <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
                <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-10 py-5 bg-[#6366f1] text-white rounded-[2rem] font-black text-[11px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all"
                >
              Live Project <Globe size={18} />
              </a>
             </div>
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">

            <section className="relative p-12 rounded-[3rem] bg-[#0c0c12]/80 border border-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Rocket size={120} />
               </div>
               <h3 className="text-[#6366f1] font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                 <div className="w-8 h-px bg-[#6366f1]" /> Príbeh projektu
               </h3>
               <p className="text-[#e8e8f0] text-xl font-light leading-relaxed">
                 {project.story}
               </p>
            </section>

            {/* Challenges & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-10 rounded-[2.5rem] bg-[#0c0c12]/60 border border-red-400/30 backdrop-blur-xl">
                  <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-6 flex items-center gap-2 text-red-400/70">
                    <ShieldCheck size={14} /> Výzva
                  </h4>
                  <p className="text-[#8888a8] font-light leading-relaxed">{project.challenges}</p>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-[#0c0c12]/90 border border-[#059669]/40 backdrop-blur-xl">
                  <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-6 flex items-center gap-2 text-[#059669]">
                    <Zap size={14} /> Riešenie
                  </h4>
                  <p className="text-[#8888a8] font-light leading-relaxed">{project.solution}</p>
               </div>
            </div>

            {/* Key Features */}
            <section className="pt-10">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                 <Layout size={16} className="text-[#6366f1]" /> Kľúčové Funkcie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-[#0c0c12]/40 border border-white/5 hover:bg-[#6366f1]/5 transition-all">
                    <CheckCircle2 size={18} className="text-[#6366f1]" />
                    <span className="text-sm font-bold tracking-tight">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR - Tech Stack */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
               <div className="p-10 rounded-[3rem] bg-[#0c0c12] border border-white/10 relative overflow-hidden">
                  <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 flex items-center gap-3">
                    <Code2 size={16} className="text-[#6366f1]" /> Technológie
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[11px] font-bold text-[#8888a8]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-between">
                     <span className="text-[10px] font-black text-[#4f4f7a] uppercase tracking-widest">Dokončené</span>
                     <span className="text-xl font-black text-white">{project.year}</span>
                  </div>
               </div>
               
               <div className="mt-8 p-10 rounded-[3rem] bg-gradient-to-br from-[#6366f1]/20 to-transparent border border-[#6366f1]/20">
                  <Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-3 hover:gap-5 transition-all">
                    Chcem niečo podobné <ArrowRight size={14} className="text-[#6366f1]" />
                  </Link>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}