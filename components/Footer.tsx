export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] py-10 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-xs md:text-sm text-[#555575] tracking-wide">
          © {year} <span className="text-[#e8e8f0] font-medium ml-1">Tomáš Hrmo</span>. Všetky práva vyhradené.
        </div>

        <div className="text-sm text-[#3f3f5a] flex flex-wrap items-center justify-center gap-x-1.5">
  <span>Vytvorené pomocou</span>
  <span className="text-[#6366f1] font-medium">Next.js</span>
  <span>&</span>
  <span className="text-[#a855f7] font-medium">Framer Motion</span>
</div>
        
      </div>
    </footer>
  );
}