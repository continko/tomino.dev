"use client";

import { motion } from "framer-motion";
import { 
  Mail, Github, Linkedin, Phone, 
  MapPin, Clock, ArrowUpRight, Sparkles, 
  MessageCircle, PhoneOutgoing, Send
} from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/Contact"; 

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const email = "hello@hrmo.dev";
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "";

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 bg-transparent selection:bg-[#ec4899]/30 overflow-x-hidden">
      
      {/* Glow efekt */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Sparkles size={14} className="text-[#ec4899]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#ec4899]">Kontakt</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[120px] font-black tracking-[-0.06em] text-white leading-[0.8]">
            Poďme vytvoriť <br />
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">niečo výnimočné.</span>
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          
          {/* EMAIL CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 p-10 md:p-12 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] relative overflow-hidden group flex flex-col justify-between min-h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899] mb-12 group-hover:scale-110 transition-transform duration-500">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#3f3f5a] uppercase text-[10px] tracking-[0.4em] font-black mb-4">Projektové dopyty</h3>
              
              <button 
                onClick={() => copyToClipboard(email, 'email')}
                className="block text-left group/copy relative"
              >
                <p className={`text-2xl md:text-5xl font-black tracking-tighter transition-all duration-500 ${copiedEmail ? 'text-green-400' : 'text-white group-hover/copy:text-[#ec4899]'}`}>
                  {copiedEmail ? "SKOPÍROVANÉ!" : email}
                </p>
                {!copiedEmail && (
                  <span className="block mt-4 text-[10px] text-[#3f3f5a] font-bold uppercase tracking-widest opacity-0 group-hover/copy:opacity-100 transition-opacity">
                    Kliknutím skopírovať
                  </span>
                )}
              </button>
            </div>
            
            <div className="relative z-10 mt-12">
              <a href={`mailto:${email}`} className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:text-[#ec4899] transition-all duration-500 group/btn">
                <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                Poslať správu
              </a>
            </div>
          </motion.div>

          {/* PHONE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 p-10 md:p-12 rounded-[3rem] bg-[#0a0a0f] border border-[#1e1e2e] relative overflow-hidden group flex flex-col justify-between min-h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899] mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Phone size={24} />
              </div>
              <h3 className="text-[#555575] uppercase text-[10px] tracking-[0.4em] font-black mb-2">Kontakt</h3>
              
              <button 
                onClick={() => copyToClipboard(phone, 'phone')}
                className="block text-left group/copy relative"
              >
                <p className={`text-2xl md:text-3xl font-bold tracking-tighter transition-all duration-500 ${copiedPhone ? 'text-green-400 scale-95' : 'text-white group-hover/copy:text-[#ec4899]'}`}>
                  {copiedPhone ? "Číslo skopírované!" : phone}
                </p>
                {!copiedPhone && (
                   <span className="block mt-4 text-[10px] text-[#3f3f5a] font-bold uppercase tracking-widest opacity-0 group-hover/copy:opacity-100 transition-opacity">
                   Kliknutím skopírovať
                 </span>
                )}
              </button>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-12">
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`} 
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-black hover:text-[#ec4899] transition-all duration-500 font-bold text-sm uppercase tracking-widest"
              >
                <PhoneOutgoing size={18} />
                Zavolať
              </a>

              <a 
                href={`https://wa.me/${phone.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] hover:bg-[#25d366] hover:text-black transition-all duration-500 font-semibold text-sm uppercase tracking-widest"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* QUICK INFO BAR */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, text: "Dolný Kubín, Slovensko" },
              { icon: Clock, text: "GMT+1 (9:00 - 18:00)" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#0a0a0f] border border-[#1e1e2e] flex items-center gap-6 group hover:border-[#ec4899]/30 transition-all duration-500">
                <item.icon size={20} className="text-[#3f3f5a] group-hover:text-[#ec4899] transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#8888a8] group-hover:text-white transition-colors">{item.text}</span>
              </div>
            ))}
            
            <a href="https://linkedin.com/in/tomas-hrmo/" target="_blank" className="p-8 rounded-[2rem] bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-between group hover:border-[#ec4899]/30 transition-all duration-500">
              <div className="flex items-center gap-6">
                <Linkedin size={20} className="text-[#3f3f5a] group-hover:text-[#ec4899] transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#8888a8] group-hover:text-white transition-colors">LinkedIn</span>
              </div>
              <ArrowUpRight size={16} className="text-[#1e1e2e] group-hover:text-white transition-colors" />
            </a>

            <a href="https://github.com/continko" target="_blank" className="p-8 rounded-[2rem] bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-between group hover:border-[#ec4899]/30 transition-all duration-500">
              <div className="flex items-center gap-6">
                <Github size={20} className="text-[#3f3f5a] group-hover:text-[#ec4899] transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#8888a8] group-hover:text-white transition-colors">GitHub</span>
              </div>
              <ArrowUpRight size={16} className="text-[#1e1e2e] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* BOTTOM FORM */}
        <section className="pt-32 border-t border-[#1e1e2e]">
          <div className="max-w-3xl mx-auto">
             <ContactForm />
          </div>
        </section>

      </div>
    </main>
  );
}