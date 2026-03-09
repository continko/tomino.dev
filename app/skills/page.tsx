"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Globe, 
  Palette, 
  Layers, 
  Workflow, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Timer
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Globe className="text-[#6366f1]" size={28} />,
    skills: [
      { name: "Next.js 15", level: "95%", note: "App Router & Server Actions" },
      { name: "React 19", level: "90%", note: "Modern Hooks & Suspense" },
      { name: "TypeScript", level: "85%", note: "Type-safe Architecture" },
      { name: "Tailwind CSS", level: "100%", note: "Rapid UI Development" },
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="text-[#a855f7]" size={28} />,
    skills: [
      { name: "PostgreSQL", level: "80%", note: "Relational DB Modeling" },
      { name: "Prisma / Drizzle", level: "85%", note: "Modern ORM Workflows" },
      { name: "Node.js", level: "85%", note: "Scalable Server Solutions" },
      { name: "NextAuth", level: "90%", note: "Secure Authentication" },
    ]
  },
  {
    title: "Design & Motion",
    icon: <Palette className="text-[#ec4899]" size={28} />,
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
    <main className="relative min-h-screen pt-32 pb-24 px-6 text-[#e8e8f0] selection:bg-[#6366f1]/30 overflow-x-hidden">
      
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="max-w-3xl mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-12"
          >
            Sila v <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">detailoch.</span>
          </motion.h1 >
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#8888a8] text-xl font-light max-w-xl leading-relaxed"
          >
            Nezbieram technológie ako nálepky. Vyberám si tie, ktoré mi umožňujú doručovať 
            riešenia s nekompromisným výkonom a čistou architektúrou.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-48">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-[#0a0a0f] border border-[#1e1e2e] relative group hover:border-[#6366f1]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-[#1e1e2e]/50 text-white group-hover:bg-[#6366f1]/10 group-hover:text-[#6366f1] transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tighter text-white uppercase">{category.title}</h3>
              </div>

              <div className="space-y-9">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-sm font-bold text-[#e8e8f0] group-hover/skill:text-[#6366f1] transition-colors uppercase tracking-widest">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#4f4f7a]">{skill.level}</span>
                    </div>
                    
                    <div className="h-[2px] w-full bg-[#1e1e2e] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.3 + (idx * 0.1) }}
                        className="h-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]"
                      />
                    </div>
                    
                    <p className="text-[10px] text-[#4f4f7a] font-light mt-2 opacity-0 group-hover/skill:opacity-100 transition-all translate-y-1 group-hover/skill:translate-y-0 italic text-right">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        <section className="mb-48 relative">
          <div className="text-center mb-24">
            <h2 className="text-[13px] font-black uppercase tracking-[0.5em] text-[#6366f1] mb-4">Development Workflow</h2>
            <p className="text-3xl font-black text-white tracking-tighter uppercase">Kód s jasným cieľom</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {methodology.map((item, i) => (
              <motion.div 
                key={i} 
                className="text-center group relative px-4"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl font-black text-white/[0.02] group-hover:text-[#6366f1]/[0.05] transition-colors duration-500">
                  {item.id}
                </span>

                <div className="w-20 h-20 rounded-3xl bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-center mx-auto mb-8 group-hover:border-[#6366f1]/50 transition-all duration-500 transform group-hover:-rotate-6">
                  <div className="text-[#6366f1]">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">{item.title}</h4>
                <p className="text-[#8888a8] text-sm font-light leading-relaxed mb-8">{item.desc}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {item.details.map(detail => (
                    <span key={detail} className="text-[10px] px-3 py-1 rounded-full border border-[#1e1e2e] text-[#4f4f7a] uppercase font-black tracking-widest group-hover:text-[#8888a8] transition-all">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[4rem] border border-[#1e1e2e] bg-[#0a0a0f] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6366f1]/5 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#6366f1] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                <Rocket size={14} /> Konzultácie & Audity
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                Váš projekt <br /> <span className="text-[#4f4f7a]">v najlepšej forme.</span>
              </h3>
              <p className="text-[#8888a8] text-xl font-light leading-relaxed mb-10">
                Máte existujúci produkt, ktorý je pomalý, alebo potrebujete navrhnúť architektúru pre nový nápad? Pomôžem vám eliminovať technický dlh a nastaviť stack, ktorý vás nebude brzdiť.
              </p>
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#6366f1] hover:text-white transition-all duration-500"
              >
                Rezervovať konzultáciu
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Timer size={20} />, title: "Audit Výkonu", text: "Analýza úzkych hrdiel a optimalizácia rýchlosti načítania.",textSize: "text-lg" },
                { icon: <ShieldCheck size={20} />, title: "Code Review", text: "Kontrola kvality kódu, bezpečnosti a škálovateľnosti." },
                { icon: <Layers size={20} />, title: "Tech Strategy", text: "Výber správnych technológií pre váš dlhodobý cieľ." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-[#1e1e2e] bg-[#050507]/50 hover:border-[#6366f1]/30 transition-colors group">
                  <div className="text-[#6366f1] mb-4 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h4 className="text-white font-bold uppercase tracking-tighter mb-2">{item.title}</h4>
                  <p className="text-[#6f6f86] text-base font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}