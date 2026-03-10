"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Target, Quote } from "lucide-react";
import Contact from "@/components/Contact"; 

const stats = [
  { label: "Roky v kóde", value: "2" },
  { label: "Projekty", value: "8+" },
  { label: "Tech Stack", value: "12+" },
  { label: "Mindset", value: "100%" },
];

const values = [
  {
    title: "Vizuálna Integrita",
    desc: "Dizajn nie je len o tom, ako to vyzerá, ale ako to funguje. Každý pixel musí mať svoj význam.",
    icon: Sparkles,
    color: "#6366f1"
  },
  {
    title: "Technická Prísnosť",
    desc: "TypeScript a čistá architektúra nie sú voľba, ale povinnosť. Kód musí byť predvídateľný a bezpečný.",
    icon: Code2,
    color: "#a855f7"
  },
  {
    title: "Zameranie na Cieľ",
    desc: "Neriešim len tickety. Riešim biznis problémy mojich klientov pomocou moderných technológií.",
    icon: Target,
    color: "#ec4899"
  }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 text-[#e8e8f0] selection:bg-[#6366f1]/30 overflow-x-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-white">
              Viac ako len <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
                riadky kódu.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-balance text-left">
              <div className="md:col-span-7 space-y-8 text-xl text-[#8888a8] leading-relaxed font-light">
                <p>
                  Ahoj, som <span className="text-white font-medium border-b border-[#6366f1]/30 italic">Tomáš</span>. 
                  Moja cesta k vývoju nebola o drvení sa manuálov, ale o túžbe postaviť veci, ktoré menia digitálny priestor.
                </p>
                <p>
                  Verím, že hranica medzi dizajnérom a developerom by mala byť neviditeľná. 
                  Kód je len prostriedok na vytvorenie <span className="text-white font-normal underline decoration-[#6366f1]/50 underline-offset-8">zážitku</span>.
                </p>
                <div className="p-8 rounded-3xl bg-[#0a0a0f] border-l-4 border-[#6366f1] italic text-lg text-white/80 relative">
                  <Quote size={40} className="absolute -top-4 -right-4 text-[#6366f1]/20" />
                  "Dobrý produkt nevzniká náhodou, ale tisíckami malých rozhodnutí, ktoré do seba zapadnú."
                </div>
              </div>
              
              <div className="md:col-span-5 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#6366f1]/40 transition-all group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-[#a855f7] transition-colors tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#555575] font-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-40">
          <div className="inline-flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-[#6366f1]" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6366f1]">Môj Prístup</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] hover:border-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-[#1e1e2e]/50 group-hover:scale-110 transition-transform duration-500">
                  <v.icon size={30} style={{ color: v.color }} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">{v.title}</h3>
                <p className="text-[#8888a8] leading-relaxed font-light text-base">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-10">
            <Contact />
        </section>

      </div>
    </main>
  );
}