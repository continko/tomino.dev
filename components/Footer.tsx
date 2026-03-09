export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#3f3f5a]">
          © {year} Tomáš Hrmo. Všetky práva vyhradené.
        </div>

        <div className="text-sm text-[#3f3f5a]">
          Vytvorené s{" "}
          <span className="text-[#6366f1]">Next.js</span> &{" "}
          <span className="text-[#a855f7]">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
