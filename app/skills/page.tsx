"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Globe, Palette, Layers, Workflow, 
  Zap, ArrowRight, ShieldCheck, Rocket, Timer
} from "lucide-react";
import Link from "next/link";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Globe size={24} />,
    color: "#6366f1",
    skills: [
      { name: "Next.js 15", level: "95%", note: "App Router & Server Actions" },
      { name: "React 19", level: "90%", note: "Modern Hooks & Suspense" },
      { name: "TypeScript", level: "85%", note: "Type-safe Architecture" },
      { name: "Tailwind CSS", level: "100%", note: "Rapid UI Development" },
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Terminal size={24} />,
    color: "#a855f7",
    skills: [
      { name: "PostgreSQL", level: "80%", note: "Relational DB Modeling" },
      { name: "Prisma / Drizzle", level: "85%", note: "Modern ORM Workflows" },
      { name: "Node.js", level: "85%", note: "Scalable Server Solutions" },
      { name: "NextAuth", level: "90%", note: "Secure Authentication" },
    ]
  },
  {
    title: "Design & Motion",
    icon: <Palette size={24} />,
    color: "#ec4899",
    skills: [
      { name: "Framer Motion", level: "85%", note: "Micro-interactions" },
      { name: "UI/UX Design", level: "80%", note: "Visual Systems" },
      { name: "Figma", level: "70%", note: "Prototyping & Layouts" },
      { name: "Lucide Icons", level: "95%", note: "Consistent Iconography" },
    ]
  }
];

const methodology = [
  { 
    id: "01",
    title: "Clean Code", 
    desc: "Píšem kód, ktorý je čitateľný, modulárny a pripravený na tímovú spoluprácu.",
    details: ["Modularita", "Dokumentácia", "Type-safety"],
    icon: <Workflow size={24} />
  },
  { 
    id: "02",
    title: "Performance", 
    desc: "Optimalizácia Core Web Vitals. Rýchlosť, ktorú pocítia používatelia aj SEO.",
    details: ["Lighthouse 100", "LCP < 1.2s", "Zero Layout Shift"],
    icon: <Zap size={24} />
  },
  { 
    id: "03",
    title: "Scalability", 
    desc: "Architektúra pripravená na rast. Od MVP až po enterprise riešenia.",
    details: ["Cloud Ready", "SQL/NoSQL", "CI/CD Pipeline"],
    icon: <Layers size={24} />
  }
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 text-[#e8e8f0] selection:bg-[#ec4899]/30 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="max-w-4xl mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-12"
          >
            Sila v <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
              detailoch.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#8888a8] text-xl md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            Nezbieram technológie ako nálepky. Vyberám si tie, ktoré mi umožňujú doručovať 
            riešenia s nekompromisným výkonom a čistou architektúrou.
          </motion.p>
        </header>

        {/* SKILLS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-48">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] relative group hover:border-[#ec4899]/30 transition-all duration-700"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 rounded-2xl bg-[#1e1e2e]/50 text-white group-hover:text-[#ec4899] transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tighter text-white uppercase">{category.title}</h3>
              </div>

              <div className="space-y-10">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] font-black text-[#e8e8f0] group-hover/skill:text-[#ec4899] transition-colors uppercase tracking-[0.2em]">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#3f3f5a]">{skill.level}</span>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#1e1e2e] relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (idx * 0.1) }}
                        className="absolute inset-y-0 left-0 bg-[#ec4899]"
                      />
                    </div>
                    
                    <p className="text-[9px] text-[#3f3f5a] font-black uppercase tracking-widest mt-3 opacity-0 group-hover/skill:opacity-100 transition-all group-hover/skill:text-[#8888a8]">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* WORKFLOW */}
        <section className="mb-48 relative">
          <div className="text-center mb-32">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#ec4899] mb-6">Development Workflow</h2>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">Kód s jasným cieľom</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {methodology.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group relative px-4"
              >
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/[0.02] group-hover:text-[#ec4899]/[0.05] transition-colors duration-700 pointer-events-none">
                  {item.id}
                </span>

                <div className="w-20 h-20 rounded-3xl bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-center mx-auto mb-10 group-hover:border-[#ec4899]/50 transition-all duration-700 transform group-hover:-rotate-6">
                  <div className="text-[#ec4899]">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-[#8888a8] text-lg font-light leading-relaxed mb-10">{item.desc}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {item.details.map(detail => (
                    <span key={detail} className="text-[9px] px-4 py-2 rounded-full border border-[#1e1e2e] text-[#3f3f5a] uppercase font-black tracking-widest group-hover:border-[#ec4899]/30 group-hover:text-white transition-all">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONSULTATION CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[4rem] border border-[#1e1e2e] bg-[#0a0a0f] overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ec4899]/5 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                <Rocket size={14} /> Konzultácie & Audity
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                Váš projekt <br /> 
                <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent italic">v najlepšej forme.</span>
              </h3>
              <p className="text-[#8888a8] text-xl font-light leading-relaxed mb-12 max-w-xl">
                Máte existujúci produkt, ktorý je pomalý? Pomôžem vám eliminovať technický dlh a nastaviť stack, ktorý vás nebude brzdiť.
              </p>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:text-[#ec4899] transition-all duration-500 shadow-2xl shadow-white/5"
              >
                Rezervovať konzultáciu
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Timer size={24} />, title: "Audit Výkonu", text: "Analýza úzkych hrdiel a optimalizácia rýchlosti načítania." },
                { icon: <ShieldCheck size={24} />, title: "Code Review", text: "Kontrola kvality kódu, bezpečnosti a škálovateľnosti." },
                { icon: <Layers size={24} />, title: "Tech Strategy", text: "Výber správnych technológií pre váš dlhodobý cieľ." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] border border-[#1e1e2e] bg-black/40 hover:border-[#ec4899]/40 hover:bg-[#0a0a0f] transition-all duration-500 group/item">
                  <div className="text-[#ec4899] mb-6 group-hover/item:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-3">{item.title}</h4>
                  <p className="text-[#3f3f5a] text-lg font-light group-hover/item:text-[#8888a8] transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}