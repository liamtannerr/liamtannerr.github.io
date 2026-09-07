"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 border-t">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
      >
        About Me
      </motion.h2>            
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-muted-foreground leading-relaxed">
          Outside of tech, I like to play sports and explore nature. I grew up playing
          hockey and baseball, and love spending time in the mountains, racing enduro mountain bikes and
          skiing. This connection to the outdoors has directly shaped my professional life.
          During an 8-month co-op with Natural Resources Canada on the Induced Seismicity
          Project, I modeled real-world sites to ensure fracking and wastewater disposal
          wouldn't trigger harmful seismic activity in remote communities. Later, as a
          Software Developer at the Pacific Forestry Centre, I collaborated with like-minded
          engineers and scientists who care deeply about protecting BC’s forests. In my final two years
          at the University of Victoria, I've been building skills in machine learning and computer vision
          such as mathematical optimization, data mining techniques and the design and training of convolutional
          neural networks; exploring these skills through projects, class work and contributions as a member
          of the Autonomous Underwater Vehicles Interdisciplinary Club, where we build autonomous submarines. 
          Through the club, I represented my University at RoboSub 2026
          in Irvine, California. On top of that, I always have fun playing around with full stack and web dev
          projects like the website you are currently on!
        </p>
      </motion.div>
    </section>
  );
}