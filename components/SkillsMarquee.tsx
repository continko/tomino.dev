"use client";

import { motion } from "framer-motion";

const row1 = ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion", "Stripe"];
const row2 = ["Node.js", "PostgreSQL", "Prisma", "Supabase", "Three.js", "Redux"];
const row3 = ["UI/UX Design", "Git", "Vercel", "Clean Code", "Responsive", "Linux"];

function MarqueeRow({ 
  items, 
  reverse = false, 
  speed = 40 
}: { 
  items: string[]; 
  reverse?: boolean; 
  speed?: number 
}) {
  return (
    <div className="flex overflow-hidden select-none py-6 border-y border-white/[0.03]">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap min-w-full items-center"
      >
        {[...items, ...items].map((skill, i) => (
          <span 
            key={`${skill}-${i}`} 
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter px-12
                       text-transparent transition-all duration-500 cursor-default hover:scale-105"
            style={{ 
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.webkitTextStroke = "1px #ec4899";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.webkitTextStroke = "1px rgba(255,255,255,0.3)";
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-transparent relative">
      <div className="px-6 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <span className="text-[10px] font-black text-[#ec4899] uppercase tracking-[0.6em] block mb-6">Tech Stack</span>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-[-0.06em] leading-[0.8]">
              Nástroje<span className="text-[#ec4899]">.</span>
            </h2>
          </div>
          <div className="">
            <p className="text-[#555575] text-xl max-w-xs leading-relaxed font-medium border-l border-[#1e1e2e] pl-8">
            Nástroje, ktoré transformujú <span className="text-white">víziu</span> na funkčný kód.
          </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <MarqueeRow items={row1} speed={30} />
        <MarqueeRow items={row2} reverse speed={40} />
        <MarqueeRow items={row3} speed={35} />
      </div>

      {/* Stats */}
      <div className="px-6 max-w-7xl mx-auto mt-40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { value: "2+", label: "ROKY SKÚSENOSTÍ" },
            { value: "8+", label: "DOKONČENÝCH PROJEKTOV" },
            { value: "12+", label: "TECHNOLÓGIÍ" },
            { value: "∞", label: "CHUŤ RÁSŤ" },
          ].map((stat) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-7xl md:text-9xl font-black text-white group-hover:text-[#ec4899] transition-colors duration-500 tracking-tighter leading-none mb-4">
                {stat.value}
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#ec4899] group-hover:w-12 transition-all duration-500" />
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ec4899]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}