"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Preloader() {
  return (
    <div className="hidden">
      {projects
        .flatMap((project) => project.images || [])
        .map((mediaSrc, index) => {
          const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");
          if (isVideo) {
            return <video key={index} src={`/${mediaSrc}`} preload="auto" />;
          }
          return (
            <Image key={index} src={`/${mediaSrc}`} alt="preload" width={1} height={1} priority />
          );
        })}
    </div>
  );
}