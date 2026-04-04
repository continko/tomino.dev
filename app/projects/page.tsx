"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "elitedrive",
    title: "EliteDrive",
    subtitle: "Premium Car Rental",
    description: "Komplexný rezervačný systém pre prémiovú autopožičovňu. Spojenie luxusu a technickej precíznosti.",
    tags: ["Next.js 14", "Stripe API", "Prisma", "PostgreSQL", "Tailwind"],
    year: "02.2026",
    category: "Web App / Fintech",
    image: "/image/EliteDriveHomePage.PNG",
    accent: "#ec4899",
  },
  {
    id: "luxora",
    title: "Luxora Development",
    subtitle: "Luxury Real Estate",
    description: "Digitálna identita a high-end web pre developerskú SRO zameranú na architektúru.",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind", "Sanity CMS"],
    year: "11.2025",
    category: "Corporate Web / Architecture",
    image: "/image/LuxoraHomePage.PNG",
    accent: "#C5A059",
  },
  {
    id: "kovo-sd",
    title: "      ",
    subtitle: "Industrial Manufacturing",
    description: "Komplexná digitálna platforma pre poprednú strojársku firmu s expanziou na zahraničné trhy.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "i18n", "Vercel"],
    year: "2026",
    category: "Heavy Industry",
    image: "/image/KovoSDHomePage.png",
    accent: "#6366f1",
  },
  {
    id: "launchkit",
    title: "LaunchKit",
    subtitle: "SaaS Boilerplate",
    description: "Full-stack štartér pre SaaS projekty, ktorý šetrí týždne vývojového času.",
    tags: ["Supabase", "Next.js", "tRPC", "Zod", "Tailwind"],
    year: "02.2025",
    category: "Developer Tool",
    image: "/image/LaunchKit.png",
    accent: "#f59e0b",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-8 overflow-x-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ec4899]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }} className="mb-32">
          <span className="text-[10px] font-black text-[#ec4899] uppercase tracking-[0.6em] block mb-5">Portfolio</span>
          <h1 className="font-black tracking-tighter leading-[0.85] text-white"
            style={{ fontSize: "clamp(56px, 9vw, 120px)" }}>
            Všetky<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
              projekty.
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22,1,0.36,1] }}
              className="flex"
            >
              {/* ZMENENÉ: bg-white/[0.02] a backdrop-blur pre priehľadnosť */}
              <Link href={`/projects/${p.id}`} className="group flex flex-col w-full rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl overflow-hidden hover:border-[#ec4899]/25 transition-all duration-700">
                {/* Image Section */}
                <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                  {/* ZMENENÉ: to-transparent namiesto pevnej farby */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover scale-[1.06] group-hover:scale-100 opacity-50 group-hover:opacity-90 transition-all duration-[1.2s] ease-out" />
                  <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#555575] group-hover:bg-[#ec4899] group-hover:border-[#ec4899] group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[#ec4899]">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#4f4f7a]">{p.year}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 group-hover:translate-x-3 transition-transform duration-500">
                    {p.title} <span className="text-white/10 mx-1">/</span> <br className="hidden sm:block" />
                    <span className="font-light text-[#8888a8] group-hover:text-[#ec4899] transition-colors text-2xl md:text-3xl">{p.subtitle}</span>
                  </h2>

                  <p className="text-[#555575] text-[14px] leading-relaxed mb-8 font-medium flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[9px] px-3 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] text-[#555575] font-black uppercase tracking-wider group-hover:border-[#ec4899]/25 group-hover:text-[#ec4899]/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}