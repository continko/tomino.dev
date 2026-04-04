"use client";

import { motion } from "framer-motion";
import { Terminal, Globe, Palette, Layers, Workflow, Zap, ArrowRight, ShieldCheck, Rocket, Timer } from "lucide-react";
import Link from "next/link";

const skillCategories = [
  {
    title: "Frontend Engineering", icon: Globe,  color: "#6366f1",
    skills: [
      { name: "Next.js 15",   tag: "Expert",       note: "App Router & Server Actions" },
      { name: "React 19",     tag: "Expert",       note: "Modern Hooks & Suspense" },
      { name: "TypeScript",   tag: "Advanced",     note: "Type-safe Architecture" },
      { name: "Tailwind CSS", tag: "Expert",       note: "Rapid UI Development" },
    ],
  },
  {
    title: "Backend & Systems",   icon: Terminal, color: "#a855f7",
    skills: [
      { name: "PostgreSQL",       tag: "Advanced",     note: "Relational DB Modeling" },
      { name: "Prisma / Drizzle", tag: "Advanced",     note: "Modern ORM Workflows" },
      { name: "Node.js",          tag: "Advanced",     note: "Scalable Server Solutions" },
      { name: "NextAuth",         tag: "Expert",       note: "Secure Authentication" },
    ],
  },
  {
    title: "Design & Motion",     icon: Palette, color: "#ec4899",
    skills: [
      { name: "Framer Motion",    tag: "Advanced",     note: "Micro-interactions" },
      { name: "UI/UX Design",     tag: "Advanced",     note: "Visual Systems" },
      { name: "Figma",            tag: "Intermediate", note: "Prototyping & Layouts" },
      { name: "Lucide Icons",     tag: "Expert",       note: "Consistent Iconography" },
    ],
  },
];

const tagStyle: Record<string, string> = {
  Expert:       "border-[#6366f1]/40 text-[#a5b4fc] bg-[#6366f1]/8",
  Advanced:     "border-[#a855f7]/40 text-[#d8b4fe] bg-[#a855f7]/8",
  Intermediate: "border-[#ec4899]/40 text-[#f9a8d4] bg-[#ec4899]/8",
};

const methodology = [
  { id: "01", icon: Workflow,   title: "Clean Code",  desc: "Píšem kód, ktorý je čitateľný, modulárny a pripravený na tímovú spoluprácu.", details: ["Modularita", "Dokumentácia", "Type-safety"] },
  { id: "02", icon: Zap,        title: "Performance", desc: "Optimalizácia Core Web Vitals. Rýchlosť, ktorú pocítia používatelia aj SEO.",   details: ["Lighthouse 100", "LCP < 1.2s", "Zero Layout Shift"] },
  { id: "03", icon: Layers,     title: "Scalability", desc: "Architektúra pripravená na rast. Od MVP až po enterprise riešenia.",            details: ["Cloud Ready", "SQL/NoSQL", "CI/CD Pipeline"] },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-8 overflow-x-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="max-w-4xl mb-32">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-black tracking-tighter leading-[0.85] text-white mb-10"
            style={{ fontSize: "clamp(56px, 9vw, 112px)" }}>
            Sila v <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
              detailoch.
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[#8888a8] text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            Nezbieram technológie ako nálepky. Vyberám si tie, ktoré mi umožňujú doručovať
            riešenia s nekompromisným výkonom a čistou architektúrou.
          </motion.p>
        </header>

        {/* Skills grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-40">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] group hover:border-[#ec4899]/25 transition-all duration-700">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-[#1e1e2e]/60 text-white group-hover:text-[#ec4899] transition-colors duration-500">
                  <cat.icon size={22} />
                </div>
                <h3 className="text-[13px] font-black uppercase tracking-wider text-white">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#e8e8f0]">{skill.name}</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#3f3f5a] mt-1">{skill.note}</p>
                    </div>
                    <span className={`shrink-0 text-[9px] font-black uppercase tracking-[0.12em] px-3 py-1 rounded-full border ${tagStyle[skill.tag]}`}>
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Methodology */}
        <section className="mb-40">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ec4899] block mb-5">Development Workflow</span>
            <h2 className="font-black text-white tracking-tighter uppercase leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
              Kód s jasným cieľom.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {methodology.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group relative px-4">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-white/[0.02] group-hover:text-[#ec4899]/[0.05] transition-colors duration-700 pointer-events-none leading-none select-none"
                  style={{ fontSize: "120px" }}>{item.id}</span>
                <div className="w-20 h-20 rounded-3xl bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-center mx-auto mb-8 text-[#ec4899] group-hover:border-[#ec4899]/50 group-hover:-rotate-6 transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-[#8888a8] text-[15px] leading-relaxed mb-8">{item.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.details.map((d) => (
                    <span key={d} className="text-[9px] px-4 py-2 rounded-full border border-[#1e1e2e] text-[#3f3f5a] font-black uppercase tracking-widest group-hover:border-[#ec4899]/30 group-hover:text-white transition-all">
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[4rem] border border-[#1e1e2e] bg-[#0a0a0f] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ec4899]/5 to-transparent -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                <Rocket size={13} /> Konzultácie & Audity
              </div>
              <h3 className="font-black text-white mb-8 tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                Váš projekt <br />
                <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent italic">
                  v najlepšej forme.
                </span>
              </h3>
              <p className="text-[#8888a8] text-lg leading-relaxed mb-10 max-w-lg">
                Máte existujúci produkt, ktorý je pomalý? Pomôžem vám eliminovať technický dlh a nastaviť stack, ktorý vás nebude brzdiť.
              </p>
              <Link href="/contact"
                className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:text-[#ec4899] transition-all duration-500">
                Rezervovať konzultáciu
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: Timer,       title: "Audit Výkonu",  text: "Analýza úzkych hrdiel a optimalizácia rýchlosti načítania." },
                { icon: ShieldCheck, title: "Code Review",   text: "Kontrola kvality kódu, bezpečnosti a škálovateľnosti." },
                { icon: Layers,      title: "Tech Strategy", text: "Výber správnych technológií pre váš dlhodobý cieľ." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-[#1e1e2e] bg-black/40 hover:border-[#ec4899]/35 hover:bg-[#0a0a0f] transition-all duration-500 group/item">
                  <item.icon size={22} className="text-[#ec4899] mb-5 group-hover/item:scale-110 transition-transform origin-left" />
                  <h4 className="text-white font-black uppercase tracking-tighter text-[17px] mb-2">{item.title}</h4>
                  <p className="text-[#3f3f5a] text-[14px] leading-relaxed group-hover/item:text-[#8888a8] transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
