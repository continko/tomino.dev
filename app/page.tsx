import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsMarquee from "@/components/SkillsMarquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      
      <section className="relative">
        <Projects />
        
      </section>

      <SkillsMarquee />
      
      <Contact />
    </main>
  );
}