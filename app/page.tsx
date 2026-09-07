import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Education from "@/components/education";
import About from "@/components/about";
import Contact from "@/components/contact";
import Preloader from "@/components/preloader";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />

      <Header />

      <main className="w-full">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <About />
        <Contact />
        <Preloader />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Liam Tanner. All rights reserved.</p>
      </footer>
    </div>
  );
}