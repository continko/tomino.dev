import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tomáš Hrmo — Full-Stack Dev",
  description:
    "Full-stack developer špecializujúci sa na moderné webové aplikácie s dôrazom na výkon, dizajn a používateľský zážitok.",
  keywords: ["full-stack developer", "Next.js", "React", "TypeScript", "UI/UX"],
  authors: [{ name: "Tomáš Hrmo" }],
  openGraph: {
    title: "Tomáš Hrmo — Full-Stack Dev",
    description: "Full-stack developer špecializujúci sa na moderné webové aplikácie.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-[#050508] text-[#e8e8f0]"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        <div className="mesh-bg" aria-hidden="true" />
        
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}