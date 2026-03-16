"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Target, Quote } from "lucide-react";
import Contact from "@/components/Contact"; 

const stats = [
  { label: "ROKY V KÓDE", value: "2" },
  { label: "PROJEKTOV", value: "8+" },
  { label: "TECH STACK", value: "12+" },
  { label: "MINDSET", value: "100%" },
];

const values = [
  {
    title: "Vizuálna Integrita",
    desc: "Dizajn nie je len o tom, ako to vyzerá, ale ako to funguje. Každý pixel musí mať svoj význam.",
    icon: Sparkles,
  },
  {
    title: "Technická Prísnosť",
    desc: "TypeScript a čistá architektúra nie sú voľba, ale povinnosť. Kód musí byť predvídateľný a bezpečný.",
    icon: Code2,
  },
  {
    title: "Zameranie na Cieľ",
    desc: "Neriešim len tickety. Riešim biznis problémy mojich klientov pomocou moderných technológií.",
    icon: Target,
  }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 bg-transparent selection:bg-[#ec4899]/30">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-white">
              Viac ako len <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
                riadky kódu.
              </span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mt-20">
              <div className="lg:col-span-7 space-y-10">
                <p className="text-2xl md:text-3xl text-[#8888a8] leading-tight font-medium">
                  Ahoj, som <span className="text-white italic">Tomáš</span>. 
                  Moja cesta k vývoju nebola o drvení sa manuálov, ale o túžbe stavať veci, ktoré menia digitálny priestor.
                </p>
                <p className="text-xl text-[#555575] leading-relaxed max-w-2xl">
                  Verím, že hranica medzi dizajnérom a developerom by mala byť neviditeľná. 
                  Kód je len prostriedok na vytvorenie <span className="text-white border-b-2 border-[#ec4899] pb-1">zážitku</span>.
                </p>
                
                <div className="relative p-10 rounded-[2.5rem] bg-[#0d0d14] border border-[#1e1e2e] overflow-hidden group">
                  <Quote size={60} className="absolute -top-2 -right-2 text-[#ec4899]/10 group-hover:text-[#ec4899]/20 transition-colors" />
                  <p className="text-white text-xl italic font-medium relative z-10 leading-relaxed">
                    "Dobrý produkt nevzniká náhodou, ale tisíckami malých rozhodnutí, ktoré do seba zapadnú."
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#ec4899]/30 transition-all duration-500 group">
                    <div className="text-5xl font-black text-white mb-3 group-hover:text-[#ec4899] transition-colors tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.4em] text-[#3f3f5a] font-bold group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="mb-40">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#ec4899]">Môj Prístup</h2>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group p-12 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#ec4899]/20 transition-all duration-700"
              >
                <div className="w-12 h-12 mb-10 flex items-center justify-center text-[#ec4899] group-hover:scale-110 transition-transform duration-500">
                  <v.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
                  {v.title}<span className="text-[#ec4899]">.</span>
                </h3>
                <p className="text-[#555575] leading-relaxed text-lg font-medium group-hover:text-[#8888a8] transition-colors">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-[#1e1e2e] pt-20">
            <Contact />
        </section>

      </div>
    </main>
  );
}