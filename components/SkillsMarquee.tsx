"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  emoji: string;
  color: string;
}

const skills: SkillItem[] = [
  { name: "React", emoji: "⚛️", color: "#61DAFB" },
  { name: "Next.js", emoji: "▲", color: "#e8e8f0" },
  { name: "Tailwind CSS", emoji: "🎨", color: "#38BDF8" },
  { name: "TypeScript", emoji: "𝕋", color: "#3178C6" },
  { name: "Node.js", emoji: "🟢", color: "#68A063" },
  { name: "UI/UX Design", emoji: "✦", color: "#a855f7" },
  { name: "Framer Motion", emoji: "◐", color: "#FF4154" },
  { name: "PostgreSQL", emoji: "🐘", color: "#336791" },
];

const secondRowSkills: SkillItem[] = [
  { name: "Git", emoji: "⎇", color: "#F05032" },
  { name: "Prisma", emoji: "◭", color: "#5A67D8" },
  { name: "Stripe", emoji: "▸", color: "#6772E5" },
  { name: "Vercel", emoji: "▲", color: "#e8e8f0" },
  { name: "Lucide Icons", emoji: "✨", color: "#f87171" },
  { name: "Responsive Design", emoji: "📱", color: "#10b981" },
  { name: "Supabase", emoji: "⚡", color: "#3ECF8E" },
  { name: "Clean Code", emoji: "💎", color: "#fbbf24" },
];

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-[#1e1e2e] bg-[#0a0a0f] mx-3 whitespace-nowrap group hover:border-[#6366f1]/40 transition-all duration-300">
      <span className="text-xl leading-none" role="img">
        {skill.emoji}
      </span>
      <span
        className="text-sm font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-white"
        style={{ color: "#8888a8" }}
      >
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 35,
}: {
  items: SkillItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden marquee-wrapper py-2">
      <motion.div
        className="flex"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section id="skills" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />

      {/* Section header */}
      <div className="px-6 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#6366f1]" />
            <span className="text-xs font-black text-[#6366f1] uppercase tracking-[0.4em]">
              Tech Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            Nástroje <br /> <span className="text-[#8888a8]">úspechu.</span>
          </h2>
          <p className="text-[#8888a8] text-xl font-light max-w-xl leading-relaxed">
            Moderné technológie, ktoré transformujú <span className="text-white italic">kreatívne nápady</span> na škálovateľné digitálne produkty.
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-transparent md:from-inherit" 
             style={{ background: 'linear-gradient(to right, rgba(3,3,5,0) 0%, transparent 100%)' }} />
        
        <div className="flex flex-col gap-6">
          <MarqueeRow items={skills} duration={30} />
          <MarqueeRow items={secondRowSkills} reverse duration={35} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 max-w-6xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e2e]/40 rounded-[2.5rem] overflow-hidden border border-[#1e1e2e]/50 backdrop-blur-sm"
        >
          {[
            { value: "2+", label: "Roky v kóde" },
            { value: "8+", label: "Projekty" },
            { value: "12+", label: "Tech stack" },
            { value: "∞", label: "Debug káv" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0f] px-8 py-12 text-center group hover:bg-[#0d0d14] transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter group-hover:text-[#6366f1] transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#4f4f7a] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}