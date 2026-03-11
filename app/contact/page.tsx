"use client";

import { motion } from "framer-motion";
import { 
  Mail, Github, Linkedin, Phone, 
  MapPin, Clock, ArrowUpRight, Sparkles, 
  Copy, CheckCircle2 
} from "lucide-react";
import { useState } from "react";
import Contact from "@/components/Contact";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const email = "tomino.dev@gmail.com";
  const phone = "+421 918 765 525";

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
    <main className="relative min-h-screen pt-32 pb-24 px-6 text-[#e8e8f0] selection:bg-[#6366f1]/30 overflow-x-hidden">
      
      <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 📋 HEADER SECTION */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 mb-6"
          >
            <Sparkles size={14} className="text-[#6366f1]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#6366f1]">Get in touch</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
            Poďme tvoriť <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
              niečo výnimočné.
            </span>
          </h1>
        </div>

        {/* 🎛️ CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* EMAIL CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-7 p-10 rounded-[2.5rem] bg-[#0a0a0f] border border-[#1e1e2e] relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1] mb-8">
                  <Mail size={24} />
                </div>
                <h3 className="text-[#555575] uppercase text-[10px] tracking-[0.4em] font-black mb-2">Emailová adresa</h3>
                
                <p className="text-2xl md:text-4xl font-bold text-white tracking-tighter mb-8 break-all">
                  hrmobusiness@gmail<span style={{ color: '#a855f7' }}>.com</span>
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-[#8888a8] hover:text-white"
                >
                  {copiedEmail ? <CheckCircle2 size={20} className="text-green-400" /> : <Copy size={20} />}
                </button>
                <a href={`mailto:${email}`} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#6366f1] text-white font-bold hover:bg-[#4f46e5] transition-all shadow-lg shadow-[#6366f1]/20">
                  Poslať správu
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6366f1]/5 rounded-full blur-3xl group-hover:bg-[#6366f1]/10 transition-colors" />
          </motion.div>

          {/* PHONE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 p-10 rounded-[2.5rem] bg-[#0a0a0f] border border-[#1e1e2e] relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mb-8">
                <Phone size={24} />
              </div>
              <h3 className="text-[#555575] uppercase text-[10px] tracking-[0.4em] font-black mb-2">Telefónne číslo</h3>
              <p className="text-2xl font-bold text-white tracking-tighter mb-8">
                {phone}
              </p>
            </div>

            <button 
              onClick={() => copyToClipboard(phone, 'phone')}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-[#1e1e2e] hover:border-[#a855f7]/40 text-[#8888a8] hover:text-white transition-all group/btn"
            >
              {copiedPhone ? <CheckCircle2 size={18} className="text-green-400" /> : <Copy size={18} />}
              <span className="font-medium">{copiedPhone ? "Skopírované" : "Kopírovať číslo"}</span>
            </button>
          </motion.div>

          {/* QUICK LINKS & INFO */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[2rem] bg-[#0a0a0f]/50 border border-[#1e1e2e] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#8888a8]"><MapPin size={18} /></div>
              <span className="text-sm font-medium">Žilina, Slovensko</span>
            </div>
            <div className="p-6 rounded-[2rem] bg-[#0a0a0f]/50 border border-[#1e1e2e] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#8888a8]"><Clock size={18} /></div>
              <span className="text-sm font-medium">GMT+1 (9:00 - 18:00)</span>
            </div>
            <a href="#" className="p-6 rounded-[2rem] bg-[#0a0a0f]/50 border border-[#1e1e2e] flex items-center justify-between group hover:border-[#0077b5]/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]"><Linkedin size={18} /></div>
                <span className="text-sm font-medium">LinkedIn</span>
              </div>
              <ArrowUpRight size={16} className="text-[#555575] group-hover:text-white transition-all" />
            </a>
            <a href="#" className="p-6 rounded-[2rem] bg-[#0a0a0f]/50 border border-[#1e1e2e] flex items-center justify-between group hover:border-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"><Github size={18} /></div>
                <span className="text-sm font-medium">GitHub</span>
              </div>
              <ArrowUpRight size={16} className="text-[#555575] group-hover:text-white transition-all" />
            </a>
          </div>
        </div>

        {/* 🚀 BOTTOM SECTION */}
        <section className="pt-20 border-t border-[#1e1e2e]/50">
          <Contact />
        </section>

      </div>
    </main>
  );
}