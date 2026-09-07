"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Mail, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [phase, setPhase] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("");

  // Typing Effect Hook
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

  // Intersection Observer for Active Nav Highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // Triggers when the section is near the upper-middle of the viewport
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Bash", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "MATLAB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
    { name: "ReactJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "OpenCV", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "ROS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "AUVIC - Autonomous Underwater Vehicles Club",
      location: "Victoria, BC",
      date: "Jan 2025 — Aug 2026",
      link: "https://auvic.ca/index.html",
      bullets: [
        "Engineered a ROS 2 dynamic configuration pipeline to extract PID and Kalman filter values from YAML files, eliminating C++ recompilation downtime and enabling real-time parameter tuning during pool testing of an autonomous submarine.",
        "Represented the University of Victoria at RoboSub 2026 in Irvine, California, resolving critical thruster saturation limits and engineering a state machine for autonomous navigation, advancing the team to the semi-finals of an international engineering competition.",
      ],
    },
    {
      role: "Software Developer",
      company: "Natural Resources Canada",
      location: "Victoria, BC",
      date: "June — Dec 2025",
      link: null,
      bullets: [
        "Engineered automated data processing pipelines to transform large PostgreSQL datasets into SQLite and flatfile releases, reducing processing time from hours to seconds.",
        "Engineered a release-versioning system using SQL and encryption to encode and track all future release metadata.",
        "Authored custom Linux Bash scripts to automate the extraction and repair of a legacy website without source code, enabling the engineering team to instantiate a fully functional local environment with a single command.",
      ],
    },
    {
      role: "Research Assistant - Induced Seismicity Project",
      company: "Natural Resources Canada",
      location: "Sidney, BC",
      date: "Sept 2023 — April 2024",
      link: null,
      bullets: [
        "Engineered 3 increasingly complex CO₂ injection simulations using Python meshes and the OpenGeoSys finite element solver, becoming the first NRCan researcher to implement this workflow successfully.",
        "Advanced the project from stylized models to a real-world case study by engineering a 3-layer finite element simulation of the SECURE INGA wastewater disposal well, utilizing precise depth profiles and material properties.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "University of Victoria",
      location: "Victoria, BC",
      date: "Sept 2021 — Aug 2026",
      gpaLines: [
        "8.80/9.00 GPA (93% Avg) During my final year.",
        "8.05/9.00 Overall GPA."
      ],
      courses: [
        "Optimization for Machine Learning",
        "Computer Vision",
        "Embedded Systems",
        "Communication Networks",
        "Operating Systems",
        "Database Systems",
        "Data Mining",
        "Security Engineering",
        "Software Architecture & Design",
        "Control Theory",
        "Microprocessor-Based Systems",
        "Matrix Algebra",
        "Probability and Statistics",
        "Signal Processing",
        "Algorithms & Data Structures I & II"
      ],
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      description: "Foundational certification covering AWS Cloud concepts, security, architecture, core services, and distributed systems."
    }
  ];

  const projects = [
    {
      title: "Motion Estimation Video Compression Optimizations",
      date: "July - Aug 2026",
      category: "Embedded Systems",
      description:
        "Optimized a 16x16 Sum-of-Absolute-Differences (SAD) kernel for motion estimation on an ARM architecture. Developed a custom, stateless SAD4 operation, and integrated it via a patched QEMU emulator and inline assembly. Achieved an 11.89x execution speedup using the custom opcode and a peak 34.93x speedup by implementing an ARM NEON SIMD vectorization pipeline.",
      tech: ["C", "ARM Assembly", "Hardware Optimization"],
      link: "https://github.com/BenJTowers/motion_estimation/blob/main/report/SAD_Optimizations_for_Motion_Estimation.pdf",
      images: ["Motion-Estimation-Pic.png"],
    },
    {
      title: "AI Incident Orchestrator",
      date: "May - Aug 2026",
      category: "ML & Computer Vision",
      description:
        "Engineered a production-ready AI orchestration pipeline for diagnosing and providing recommended actions to mitigate cyber security threats. Leveraged LLMs and RAG context to automate recommendation generation in a distributed environment.",
      tech: ["Python", "PostgreSQL", "Groq API", "CI/CD"],
      link: null,
      images: ["ACIRO-Pic.png"],
    },
    {
      title: "Convolutional Engine",
      date: "Apr 2026",
      category: "Web & Software",
      description:
        "Engineered a high-performance image processing library that uses shared memory tiling to minimize global memory bottlenecks and maximize GPU throughput for convolutional computations.",
      tech: ["CUDA", "C++"],
      link: "https://github.com/liamtannerr/convolutional-engine",
    },
    {
      title: "EfficientAD Anomaly Detector",
      date: "Mar 2026",
      category: "ML & Computer Vision",
      description:
        "Engineered a state-of-the-art anomaly detection pipeline in PyTorch, by writing the Patch Description Network class, training the teacher network and removing bottlenecks from the student/autoencoder training algorithm to allow for 70,000 training iterations in under 2 hours. Achieved an AUROC score of 0.88 on a diverse industrial dataset with less than 1 millisecond performance.",
      tech: ["PyTorch", "CNN Architecture"],
      link: "https://github.com/liamtannerr/Anomaly-Detection-Paper/blob/main/EfficientAD_Implementation.pdf",
      images: ["Anomaly1.png", "Anomaly2.png"],
    },
    {
      title: "Breast Cancer Diagnosis Model",
      date: "Feb 2026",
      category: "ML & Computer Vision",
      description:
        "Engineered a regularized logistic regression model for breast cancer diagnosis, achieving a 98.59% accuracy on the WDBC dataset by implementing a regularized softmax cost function and gradient descent from scratch.",
      tech: ["MATLAB", "Machine Learning"],
      link: "https://github.com/liamtannerr/Optimization-Papers/blob/main/LogisticRegression.pdf",
    },
    {
      title: "ML Exoplanet Identifier and Visualizer",
      date: "Oct 2025",
      category: "ML & Computer Vision",
      description:
        "Trained a Random Forest model to classify whether or not an event is likely to be an exoplanet using NASA's Kepler data for the NASA Space Apps Hackathon. Built an interactive application to visualize the data, hosting the frontend on Vercel and the backend/ML on Render. Check out this live site below!",
      tech: ["Scikit-learn", "Python", "Vercel", "Render"],
      link: "https://github.com/liamtannerr/exoplanet-identifier/tree/deploy",
      liveLink: "https://exovis.vercel.app",
      images: ["ExoVis1-Pic.png", "ExoVis2-Pic.png"],
    },
    {
      title: "Ray Tracer",
      date: "Mar — Jun 2025",
      category: "Web & Software",
      description:
        "Developed a ray tracer capable of rendering 3D animations using vector math and rendering logic without relying on graphics APIs by following a textbook.",
      tech: ["C++"],
      link: "https://github.com/liamtannerr/RayTracer",
      images: ["RayTracer.png"],
    },
    {
      title: "Embedded Traffic Light Simulation",
      date: "Feb — March 2025",
      category: "Embedded Systems",
      description:
        "Designed the hardware architecture for an STM32F4-based traffic simulation, using 22 LEDs, a potentiometer, and 3 daisy-chained shift registers. Synchronized the 19-bit LED array to simulate traffic flow through a stoplight controlled intersection. Calculated and wired precise series resistors to protect the power supply and components.",
      tech: ["RTOS", "Circuit Design", "Embedded C"],
      link: "https://github.com/liamtannerr/Traffic-Lights",
      images: ["TrafficLights-Pic.png"],
    },
    {
      title: "Virtual Triage System",
      date: "Sept — Nov 2024",
      category: "Web & Software",
      description:
        "With emergency department wait times exceeding 8 hours in BC, we need a more efficient way to diagnose prospective emergency deparment patients in order to determine the severity of their afflictions. Our Virtual Triage System allows patients to submit their symptoms to a remote nurse who assigns patient priorities in order to create a virtual queue. Patients can then wait for an available physician from the comfort of their own homes. Furthermore, patients can monitor the current wait times of the emergency deparments in their area.",
      tech: ["ReactJS", "Python", "MongoDB", "FastAPI"],
      link: "https://github.com/liamtannerr/Virtual-Triage-System",
      demoLink: "https://www.youtube.com/watch?v=FPSUo2NT2v0",
      images: ["MrED-Pic.png"],
    },
    {
      title: "Autonomous IR Detecting Robot",
      date: "Jan — Apr 2022",
      category: "Embedded Systems",
      description:
        "Built a custom IR light detection robot capable of detecting an IR beacon, travelling towards it and depositing a payload.",
      tech: ["C"],
      images: ["Robo.mp4"],
      link: null,
    },
  ];

  const projectCategories = ["All", "ML & Computer Vision", "Embedded Systems", "Web & Software"];
  
  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />

      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            Liam Tanner
          </div>
          
          <div className="flex items-center gap-4">
         <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-2">
              <Link 
                href="#projects" 
                className={`transition-all hover:text-orange-400 ${activeSection === "projects" ? "text-orange-400 font-semibold" : ""}`}
              >
                Projects
              </Link>
              <Link 
                href="#experience" 
                className={`transition-all hover:text-orange-400 ${activeSection === "experience" ? "text-orange-400 font-semibold" : ""}`}
              >
                Experience
              </Link>
              <Link 
                href="#skills" 
                className={`transition-all hover:text-orange-400 ${activeSection === "skills" ? "text-orange-400 font-semibold" : ""}`}
              >
                Tools
              </Link>
              <Link 
                href="#education" 
                className={`transition-all hover:text-orange-400 ${activeSection === "education" ? "text-orange-400 font-semibold" : ""}`}
              >
                Education
              </Link>
              <Link 
                href="#about" 
                className={`transition-all hover:text-orange-400 ${activeSection === "about" ? "text-orange-400 font-semibold" : ""}`}
              >
                About Me
              </Link>
            </nav>
            <div className="h-5 w-px bg-border hidden sm:block" ></div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="w-full">
        <section id="hero" className="relative w-full flex flex-col items-center justify-center pt-32 pb-32 text-center overflow-hidden border-b">
          <div className="absolute inset-0 z-0">
            <Image
              src="banner.JPEG"
              alt="Nature Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-background/15 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            <div className="relative mb-6 h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-border shadow-lg cursor-pointer transition-transform duration-600 ease-in-out hover:[transform:rotateY(180deg)_scale(1.1)]">
              <Image
                src="face.jpg"
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

        <section id="projects" className="w-full relative overflow-hidden">
          
          <div 
            className={`hidden lg:block absolute right-0 w-[23rem] z-0 opacity-90 pointer-events-none select-none transition-all duration-500 ease-in-out ${
              activeFilter === "All" ? "top-[15rem]" : "top-[2rem]"
            }`}
          >
            <Image
              src="pointing.png"
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
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
            >
              Projects
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
                    viewport={{ once: true, margin: "-45px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
                                    src={mediaSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto"
                                  />
                                ) : (
                                  <Image
                                    src={mediaSrc}
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

        <section id="experience" className="container mx-auto px-4 py-20 border-t">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
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
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <section id="skills" className="container mx-auto px-4 py-20 border-t overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
          >
            Tools & Technologies
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex overflow-x-hidden group mask-image-fade py-4"
          >
            <div className="animate-marquee gap-16 px-8 items-center flex">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-4 min-w-[80px]">
                  <div className="h-16 w-16 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="container mx-auto px-4 py-20 border-t">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
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
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="w-full relative overflow-hidden transition-all duration-300 hover:border-orange-400/30">
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
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-20 border-t">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit"
          >
            About Me
          </motion.h2>            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-45px" }}
            transition={{ duration: 0.6 }}
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

        <section id="contact" className="container mx-auto px-4 py-24 border-t text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent w-fit mx-auto"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-45px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I am currently looking for new opportunities and collaborations. Whether you have a
            question about my work or just want to say hi, I will try my best to get back to you!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-45px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              href="mailto:liam.tanner@brentwood.ca"
              className={`${buttonVariants({
                variant: "outline",
                size: "icon",
              })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email Me</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/liam-tanner-792b43275"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({
                variant: "outline",
                size: "icon",
              })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/liamtannerr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({
                variant: "outline",
                size: "icon",
              })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </section>

        <div className="hidden">
          {projects
            .flatMap((project) => project.images || [])
            .map((mediaSrc, index) => {
              const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");
              if (isVideo) {
                return <video key={index} src={mediaSrc} preload="auto" />;
              }
              return (
                <Image key={index} src={mediaSrc} alt="preload" width={1} height={1} priority />
              );
            })}
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Liam Tanner. All rights reserved.</p>
      </footer>
    </div>
  );
}