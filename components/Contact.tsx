"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle, Calendar, Github, Linkedin } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Rýchla správa",
    description: "Odpovedám do 24 hodín",
    action: "Napíšte mi",
    href: "mailto:marek@example.com",
    color: "#6366f1",
  },
  {
    icon: Calendar,
    title: "Video hovor",
    description: "30-minútový discovery call",
    action: "Rezervovať termín",
    href: "mailto:marek@example.com?subject=Discovery%20Call",
    color: "#a855f7",
  },
];

export default function Contact() {
  return (
    /* FIX: Odstránil som tie "breaking" šírky w-screen, ktoré robili paseku s overflowom.
       Namiesto toho necháme sekciu prirodzene dýchať.
    */
    <section id="contact" className="relative py-24 md:py-40 overflow-visible">
      
      {/* GRADIENT FIX: 
          Zmenil som ellipse na 100% 100% a posunul opacity, 
          aby gradient plynulo zanikol skôr, než narazí na okraj sekcie.
          Tým zmizne tá "horná a dolná čiara".
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95] mb-8">
            <span className="text-[#e8e8f0]">Máte projekt?</span>
            <br />
            <span
              className="bg-clip-text text-transparent italic"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366f1 0%, #a855f7 40%, #ec4899 80%)",
              }}
            >
              Poďme ho
            </span>
            <br />
            <span className="text-[#e8e8f0]">zrealizovať.</span>
          </h2>

          <p className="text-xl text-[#8888a8] max-w-xl mx-auto leading-relaxed">
            Hľadám zaujímavé projekty a spolupráce. Ak máte nápad, neváhajte mi
            napísať — rád si vypočujem viac.
          </p>
        </motion.div>

        {/* Karty */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.href}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative rounded-2xl border border-[#1e1e2e] bg-[#0d0d14]/50 backdrop-blur-sm p-6 hover:border-[#6366f1]/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${method.color}15`,
                  color: method.color,
                }}
              >
                <method.icon size={20} />
              </div>
              <h3 className="text-[#e8e8f0] font-semibold mb-1">{method.title}</h3>
              <p className="text-sm text-[#8888a8] mb-4">{method.description}</p>
              <div
                className="inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: method.color }}
              >
                {method.action}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Email Button & Socials */}
        <div className="flex flex-col items-center gap-6">
          <motion.a
            href="mailto:marek@example.com"
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] shadow-lg shadow-indigo-500/10"
          >
            <Mail size={20} />
            <span>Otvoriť emailového klienta</span>
          </motion.a>

          <div className="flex items-center gap-3 mt-4">
            {[Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full border border-[#1e1e2e] flex items-center justify-center text-[#8888a8] hover:text-white hover:border-white/20 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}