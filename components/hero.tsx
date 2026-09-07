"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  
  // -1: Waiting for image, 0: title1, 1: title2, 2: title3, 3: done
  const [phase, setPhase] = useState(-1); 
  const [startSequence, setStartSequence] = useState(false);

  useEffect(() => {
    if (!startSequence) return;

    const fullTitle1 = "Liam Tanner";
    const fullTitle2 = "Software Engineer";
    const fullTitle3 = "Welcome to my Portfolio";

    let current1 = "";
    let current2 = "";
    let current3 = "";
    let i = 0;
    let j = 0;
    let k = 0;
    let interval1: ReturnType<typeof setInterval>;
    let interval2: ReturnType<typeof setInterval>;
    let interval3: ReturnType<typeof setInterval>;

    const startTyping3 = () => {
      setPhase(2);
      interval3 = setInterval(() => {
        current3 = fullTitle3.substring(0, k + 1);
        setTitle3(current3);
        k++;
        if (k >= fullTitle3.length) {
          clearInterval(interval3);
          setPhase(3); 
        }
      }, 50); 
    };

    const startTyping2 = () => {
      setPhase(1);
      interval2 = setInterval(() => {
        current2 = fullTitle2.substring(0, j + 1);
        setTitle2(current2);
        j++;
        if (j >= fullTitle2.length) {
          clearInterval(interval2);
          setTimeout(startTyping3, 400); 
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

    // A tiny delay after the image lands before typing starts
    const initialDelay = setTimeout(startTyping1, 200);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [startSequence]);

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
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => {
            setPhase(0);
            setStartSequence(true);
          }}
        >
          <div className="relative mb-6 h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-border shadow-lg cursor-pointer transition-transform duration-600 ease-in-out hover:[transform:rotateY(180deg)_scale(1.1)]">
            <Image
              src="/face.jpg"
              alt="Liam Tanner headshot"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
        </motion.div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
          {title1 || (phase < 0 ? "\u00A0" : "")}
          {phase === 0 && <span className="animate-pulse text-muted-foreground font-light">|</span>}
        </h1>
        
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
          {title2 || (phase < 1 ? "\u00A0" : "")}
          {phase === 1 && <span className="animate-pulse text-muted-foreground font-light">|</span>}
        </h1>

        <p className="text-xl text-foreground font-medium max-w-2xl mb-8">
          {title3 || (phase < 2 ? "\u00A0" : "")}
          {phase === 2 && <span className="animate-pulse text-muted-foreground font-light">|</span>}
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase === 3 ? 1 : 0, y: phase === 3 ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex gap-4 ${phase === 3 ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            See Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}