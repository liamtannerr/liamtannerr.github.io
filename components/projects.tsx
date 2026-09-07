"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/lib/data";

const projectCategories = ["All", "ML & Computer Vision", "Embedded Systems", "Web & Software"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="w-full relative overflow-hidden">
      
        <div 
        className={`hidden lg:block absolute right-0 w-[23rem] z-0 pointer-events-none select-none transition-all duration-500 ease-in-out ${
            activeFilter === "All" ? "top-[15rem]" : "top-[2rem]"
        }`}
        >
        <Image
          src="/pointing.png"
          alt="Pointing at projects"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-right-top"
        />
      </div>

      <div className="container mx-auto px-4 lg:pr-[18rem] py-20 border-t relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
        >
          Projects
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-orange-400 text-white border-orange-400 shadow-md font-semibold"
                  : "bg-muted/30 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Dialog key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="relative h-full group outline-none"
              >
                <Card className="relative flex flex-col justify-between h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-400/30 group-hover:shadow-[-25px_0_50px_rgba(252,211,77,0.3),_25px_0_50px_rgba(249,115,22,0.45)] bg-card/50 backdrop-blur-sm will-change-transform">
                  <DialogTrigger className="absolute inset-0 w-full h-full z-20 cursor-pointer outline-none border-none bg-transparent">
                    <span className="sr-only">View {project.title} details</span>
                  </DialogTrigger>
                  <div className="relative z-10 pointer-events-none">
                    <CardHeader>
                      <div className="flex justify-between items-start pb-2">
                        <CardTitle className="text-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:via-orange-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">
                          {project.title}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {project.date}
                        </span>
                      </div>     
                      <CardDescription className="text-base text-foreground mt-2 line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <DialogContent className="sm:max-w-[800px] bg-background border-border max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex justify-between items-start pr-6 gap-4">
                    <DialogTitle className="text-2xl font-bold leading-tight bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit">                          
                      {project.title}
                    </DialogTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap mt-1">
                      {project.date}
                    </span>
                  </div>
                  <DialogDescription className="text-lg text-foreground mt-6 leading-relaxed">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col mt-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="px-3 py-1 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.images && project.images.length > 0 && (
                    <div
                      className={`grid gap-4 mb-6 ${
                        project.images.length === 2 ? "grid-cols-2" : "grid-cols-1"
                      }`}
                    >
                      {project.images.map((mediaSrc, mediaIndex) => {
                        const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");

                        return (
                          <div
                            key={mediaIndex}
                            className="relative w-full overflow-hidden rounded-lg border border-border shadow-sm bg-muted/20"
                          >
                            {isVideo ? (
                              <video
                                src={`/${mediaSrc}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                              />
                            ) : (
                              <Image
                                src={`/${mediaSrc}`}
                                alt={`${project.title} preview ${mediaIndex + 1}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {(project.link || project.liveLink || project.demoLink) && (
                    <div className="flex justify-end gap-3 pt-4 border-t mt-auto">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({ variant: "outline" })}
                        >
                          View Source
                        </Link>
                      )}

                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({ variant: "default" })}
                        >
                          View Live Site
                        </Link>
                      )}
                      {project.demoLink && (
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({ variant: "default" })}
                        >
                          View Demo
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}