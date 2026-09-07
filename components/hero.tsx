"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const fullTitle1 = "Liam Tanner";
    const fullTitle2 = "Software Engineer";

    let current1 = "";
    let current2 = "";
    let i = 0;
    let j = 0;
    let interval1: ReturnType<typeof setInterval>;
    let interval2: ReturnType<typeof setInterval>;

    const startTyping2 = () => {
      setPhase(1);
      interval2 = setInterval(() => {
        current2 = fullTitle2.substring(0, j + 1);
        setTitle2(current2);
        j++;
        if (j >= fullTitle2.length) {
          clearInterval(interval2);
          setPhase(2);
        }
      }, 70);
    };

    const startTyping1 = () => {
      interval1 = setInterval(() => {
        current1 = fullTitle1.substring(0, i + 1);
        setTitle1(current1);
        i++;
        if (i >= fullTitle1.length) {
          clearInterval(interval1);
          setTimeout(startTyping2, 400); 
        }
      }, 100);
    };

    const initialDelay = setTimeout(startTyping1, 300);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center pt-32 pb-32 text-center overflow-hidden border-b">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.JPEG"
          alt="Nature Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="relative mb-6 h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-border shadow-lg cursor-pointer transition-transform duration-600 ease-in-out hover:[transform:rotateY(180deg)_scale(1.1)]">
          <Image
            src="/face.jpg"
            alt="Liam Tanner headshot"
            fill
            className="object-cover scale-110"
            priority
          />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
          {title1}
          {phase === 0 && <span className="animate-pulse text-muted-foreground font-light">|</span>}
        </h1>
        
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
          {title2 || (phase === 0 ? "\u00A0" : "")}
          {phase === 1 && <span className="animate-pulse text-muted-foreground font-light">|</span>}
        </h1>

        <p className="text-xl text-foreground font-medium max-w-2xl mb-8">
          Welcome to my Portfolio
        </p>
        <div className="flex gap-4">
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            See Resume
          </Link>
        </div>
      </div>
    </section>
  );
}