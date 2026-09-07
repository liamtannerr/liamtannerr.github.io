"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
          Liam Tanner
        </div>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-2">
            {["projects", "experience", "skills", "education", "about"].map((section) => (
              <Link 
                key={section}
                href={`#${section}`} 
                className={`transition-all hover:text-orange-400 capitalize ${activeSection === section ? "text-orange-400 font-semibold" : ""}`}
              >
                {section === "skills" ? "Tools" : section}
              </Link>
            ))}
          </nav>
          <div className="h-5 w-px bg-border hidden sm:block" ></div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}