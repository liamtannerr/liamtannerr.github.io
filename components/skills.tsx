"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 border-t overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
      >
        Tools & Technologies
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4 }}
        className="relative w-full flex overflow-x-hidden group mask-image-fade py-4"
      >
        <div className="animate-marquee gap-16 px-8 items-center flex">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4 min-w-[80px]">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/60 bg-muted/30 grayscale hover:grayscale-0 transition-all duration-300 hover:border-orange-400/40 hover:bg-muted/50 hover:scale-105">
                <div className="relative h-12 w-12">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    fill
                    sizes="48px"
                    className={`object-contain ${skill.className ?? ""}`}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
