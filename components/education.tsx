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
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="container mx-auto px-4 py-20 border-t">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
      >
        Education & Certifications
      </motion.h2>
      
      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="w-full relative overflow-hidden transition-all duration-300 hover:border-orange-400/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-orange-400" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-xl font-medium text-foreground mt-2">
                      {edu.school}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end text-left md:text-right">
                    <Badge variant="outline" className="w-fit mb-2 text-sm py-1 px-3">
                      {edu.date}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{edu.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  {edu.gpaLines.map((line, i) => (
                    <p key={i} className="text-muted-foreground font-medium">{line}</p>
                  ))}
                </div>
                
                {edu.courses && edu.courses.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-base font-semibold text-foreground">Highlighted Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="px-3 py-1 text-sm bg-muted/50 hover:bg-muted">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {certifications.map((cert, index) => (
          <motion.div
            key={`cert-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="w-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-orange-400/30">
              <div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Award className="h-6 w-6 text-orange-400" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-foreground mt-2">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {cert.description}
                  </p>
                </CardContent>
              </div>
              {cert.link && (
                <CardFooter>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "default", size: "sm" })}
                  >
                    View Certificate
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