"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-20 border-t">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
      >
        Experience
      </motion.h2>          
      <div className="space-y-6">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="w-full flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end text-left md:text-right">
                      <Badge variant="outline" className="w-fit mb-1">
                        {job.date}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              {job.link && (
                <CardFooter>
                  <Link
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "default", size: "sm" })}
                  >
                    View Website
                  </Link>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}