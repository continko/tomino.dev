"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowUpRight, 
  MessageCircle, 
  Calendar, 
  Github, 
  Linkedin,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Rýchla správa",
    description: "Odpovedám spravidla do 24 hodín.",
    action: "Napíšte mi",
    href: "mailto:hello@hrmo.dev",
    color: "#6366f1",
  },
  {
    icon: Calendar,
    title: "Video hovor",
    description: "Krátky 15-30 minútový discovery call.",
    action: "Rezervovať termín",
    href: "mailto:hello@hrmo.dev?subject=Discovery%20Call",
    color: "#a855f7",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-visible bg-transparent">
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            <span className="text-white">Máte projekt?</span>
            <br />
            <span
              className="bg-clip-text text-transparent italic pb-2"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366f1 0%, #a855f7 40%, #ec4899 80%)",
              }}
            >
              Poďme ho
            </span>
            <br />
            <span className="text-white">zrealizovať.</span>
          </h2>

          <p className="text-lg md:text-xl text-[#8888a8] max-w-xl mx-auto leading-relaxed text-balance">
            Hľadám zaujímavé výzvy a digitálne produkty. Ak máte nápad, 
            napíšte mi — spoločne ho premeníme na realitu.
          </p>
        </motion.div>

        {/* CONTACT CARDS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.href}
              whileHover={{ y: -5 }}
              className="group relative rounded-[2.5rem] border border-[#1e1e2e] bg-[#0d0d14]/40 backdrop-blur-md p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Glow Effect on Hover */}
              <div 
                className="absolute -right-12 -top-12 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[50px] pointer-events-none"
                style={{ backgroundColor: method.color }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: `${method.color}10`,
                  color: method.color,
                  border: `1px solid ${method.color}20`
                }}
              >
                <method.icon size={26} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-[#8888a8] text-sm mb-8 leading-relaxed">{method.description}</p>
              
              <div
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: method.color }}
              >
                {method.action}
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* BOTTOM ACTION & SOCIALS */}
        <div className="flex flex-col items-center gap-10">
          <motion.a
            href="mailto:hello@hrmo.dev"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Pošlite mi nezáväzný dopyt</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Github, link: "https://github.com/continko" },
              { Icon: Linkedin, link: "https://www.linkedin.com/in/tomas-hrmo" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#1e1e2e] bg-white/5 flex items-center justify-center text-[#555575] hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <item.Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}