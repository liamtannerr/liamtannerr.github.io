"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Hero() {
  const [title3, setTitle3] = useState("");
  
  // Start the typing sequence after the picture and title slide in together
  const [startTyping, setStartTyping] = useState(false);
  const [phase, setPhase] = useState(-1); // 0: Typing title 3, 1: Done

  useEffect(() => {
    if (!startTyping) return;

    const fullTitle3 = "Welcome to my Portfolio";
    let current3 = "";
    let k = 0;
    let interval3: ReturnType<typeof setInterval>;

    const startTypingSequence = () => {
      setPhase(0);
      interval3 = setInterval(() => {
        current3 = fullTitle3.substring(0, k + 1);
        setTitle3(current3);
        k++;
        if (k >= fullTitle3.length) {
          clearInterval(interval3);
          setPhase(1); // Ends the typing sequence and triggers the button
        }
      }, 50); 
    };

    // A tiny delay after the text lands before typing begins
    const initialDelay = setTimeout(startTypingSequence, 200);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval3);
    };
  }, [startTyping]);

  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center pt-32 pb-32 text-center text-white overflow-hidden border-b">
        <div className="absolute inset-0 z-0">
        <Image
          src="/banner.JPEG"
          alt="Nature Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/10 to-black/15 backdrop-blur-[1px]"></div>
      </div>


      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* Step 1: Profile picture and title slide in together */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <a href="#contact" aria-label="Contact me" className="block">
          <div className="relative mb-6 h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-white/30 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] motion-reduce:transform-none">
            <Image
              src="/face.jpg"
              alt="Liam Tanner headshot"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
          </a>
        </motion.div>

        {/* Title sliding in from the right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => {
            setStartTyping(true); // Triggers the typing effect once the text is done
          }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Liam Tanner
          </h1>
          <p className="text-2xl font-medium tracking-tight lg:text-3xl mb-5 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Software Engineer
          </p>
        </motion.div>

        {/* Step 2: Typing Subtitle */}
        <p className="text-xl text-white/90 font-medium max-w-2xl mb-8 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {title3 || (phase < 0 ? "\u00A0" : "")}
          {phase === 0 && <span className="animate-pulse text-white/70 font-light">|</span>}
        </p>
        
        {/* Step 3: Resume Button fading in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase === 1 ? 1 : 0, y: phase === 1 ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex gap-4 ${phase === 1 ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "orange", size: "lg" }), "h-11 px-6")}
          >
            See Resume
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
