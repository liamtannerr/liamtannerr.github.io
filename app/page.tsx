import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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

import { Mail } from "lucide-react";

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
  const experience = [
    {
      role: "Software Engineer",
      company: "AUVIC - Autonomous Underwater Vehicles Club",
      location: "Victoria, BC",
      date: "Jan 2025 — Present",
      link: "https://auvic.ca/index.html",
      bullets: [
        "Engineered a ROS 2 dynamic configuration pipeline to extract PID values and Kalman filter matrices from YAML files, eliminating C++ recompilation downtime and enabling real-time parameter tuning during pool testing.",
        "Represented the University of Victoria at RoboSub 2026 in Irvine, California, resolving critical thruster saturation limits in the C++ control loop and engineering a state machine for autonomous navigation, advancing the team to the semi-finals of an international engineering competition."
      ]
    },
    {
      role: "Software Developer",
      company: "Natural Resources Canada",
      location: "Victoria, BC",
      date: "June — Dec 2025",
      link: null,
      bullets: [
        "Implemented an ETL workflow to transform large PostgreSQL datasets into SQLite and flatfile releases, reducing processing time from hours to seconds.",
        "Engineered a release-versioning system using SQL and encryption to encode and track all future release metadata.",
        "Rebuilt a legacy public website from scratch in JavaScript, then wrote Bash scripts to automate the process for all future developers on my team."
      ]
    },
    {
      role: "Research Assistant - Induced Seismicity Project",
      company: "Natural Resources Canada",
      location: "Sidney, BC",
      date: "Sept 2023 — April 2024",
      link: null,
      bullets: [
        "Engineered 3 increasingly complex CO₂ injection simulations using Python meshes and the OpenGeoSys finite element solver, becoming the first NRCan employee to implement this workflow successfully.",
        "Advanced the project from stylized models to a real-world case study by engineering a 3-layer finite element simulation of the SECURE INGA wastewater disposal well, utilizing precise depth profiles and material properties."
      ]
    }
  ];

  const projects = [
    {
      title: "AI Incident Orchestrator",
      date: "May - Aug 2026",
      description: "Engineered a production-ready AI orchestration pipeline leveraging LLMs and RAG context to automate system incident triage in a distributed environment. Collaborated within a 17-member software engineering team utilizing automated test harnesses and GitHub Actions CI/CD to validate system stability.",
      tech: ["Python", "PostgreSQL", "Groq API", "Llama", "CI/CD"],
      link: null,
    },
    {
      title: "Convolutional Engine",
      date: "Apr 2026",
      description: "Engineered a high-performance image processing library that uses shared memory tiling to minimize global memory bottlenecks and maximize GPU throughput for convolutional computations.",
      tech: ["CUDA", "C++"],
      link: "https://github.com/liamtannerr/convolutional-engine",
    },
    {
      title: "EfficientAD Anomaly Detector",
      date: "Mar 2026",
      description: "Engineered a state-of-the-art anomaly detection pipeline in PyTorch, by writing the Patch Description Network class, training the teacher network and removing bottlenecks from the student/autoencoder training algorithm to allow for 70,000 training iterations in under 2 hours. Achieved an AUROC score of 0.88 on a diverse industrial dataset with less than 1 millisecond performance.",
      tech: ["PyTorch", "CNN Architecture"],
      link: "https://github.com/liamtannerr/Anomaly-Detection-Paper/blob/main/EfficientAD_Implementation.pdf",
    },
    {
      title: "Breast Cancer Diagnosis Model",
      date: "Feb 2026",
      description: "Engineered a regularized logistic regression model for breast cancer diagnosis, achieving a 98.59% accuracy on the WDBC dataset by implementing a regularized softmax cost function and gradient descent from scratch.",
      tech: ["MATLAB", "Optimization"],
      link: null,
    },
    {
      title: "AI Exoplanet Identifier and Visualizer",
      date: "Oct 2025",
      description: "Trained a Random Forest model to classify whether or not an event is likely to be an exoplanet using NASA's Kepler data for the NASA Space Apps Hackathon.",
      tech: ["Scikit-learn", "Python"],
      link: "https://github.com/liamtannerr/exoplanet-identifier/tree/deploy",
    },
    {
      title: "Ray Tracer",
      date: "Mar — Jun 2025",
      description: "Developed a ray tracer capable of rendering 3D animations using core vector math and rendering logic without relying on graphics APIs by following a textbook.",
      tech: ["C++"],
      link: "https://github.com/liamtannerr/RayTracer",
    },
    {
      title: "Embedded Traffic Light Simulation",
      date: "Feb — March 2025",
      description: "Engineered the hardware architecture for an STM32F4-based traffic simulation, integrating a custom circuit with 22 LEDs, a potentiometer, and 3 daisy-chained shift registers. Synchronized the 19-bit LED array via shared GPIO pins and ensured circuit safety by calculating and wiring precise series resistors to protect the power supply and components.",
      tech: ["RTOS", "Circuit Design", "Embedded C"],
      link: "https://github.com/liamtannerr/Traffic-Lights",
    },
    {
      title: "Virtual Triage System",
      date: "Sept — Nov 2024",
      description: "Engineered an emergency department, virtual triaging web application that allows patients to wait for an available physician from home.",
      tech: ["ReactJS", "Python", "MongoDB", "FastAPI"],
      link: "https://github.com/liamtannerr/Virtual-Triage-System",
    },
    {
      title: "Autonomous IR Detecting Robot",
      date: "Jan — Apr 2022",
      description: "Engineered an IR light detection robot from scratch, capable of detecting an IR beacon, travelling towards it and depositing a payload.",
      tech: ["ROBOTC", "C"],
      link: null,
    }
  ];

  return (
<div className="min-h-screen bg-background font-sans antialiased">
{/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl tracking-tight">Liam Tanner</div>
          
          <div className="flex items-center gap-4">
            
            <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-2">
              <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
              <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="#about" className="hover:text-foreground transition-colors">About Me</Link>

            </nav>
            
            <div className="h-5 w-px bg-border hidden sm:block"></div>
            
            <ThemeToggle />
            
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center pt-24 pb-20 text-center">
          <div className="relative mb-6 h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-lg">
            <Image
              src="/headshot.png"
              alt="Liam Tanner headshot"
              fill
              className="object-cover scale-110" 
              priority
            />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
            Liam Tanner
          </h1>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4">
            Software Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            I like to solve problems and learn new things every day.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg"  })}
            >
              See Resume
            </Link>
          </div>
        </section>

{/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Dialog key={index}>
                
                {/* 1. THE CARD (This acts as the button to open the modal) */}
                <DialogTrigger className="text-left w-full group outline-none">
                  {/* Updated: Changed border hover color to match gold theme */}
                  <Card className="flex flex-col justify-between h-full cursor-pointer transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-500/30 group-hover:shadow-[0_0_40px_rgba(255,255,0,0.25)] bg-card/50 backdrop-blur-sm">
                    <div>
                      <CardHeader>
                        <div className="flex justify-between items-start pb-2">
                          {/* Updated: Added smooth gold text color on group-hover */}
                          <CardTitle className="text-xl transition-colors duration-300 group-hover:text-yellow-400">{project.title}</CardTitle>
                          <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
                        </div>
                        {/* We use line-clamp-3 here so the preview text doesn't make the card too massive */}
                        <CardDescription className="text-base text-foreground mt-2 line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </DialogTrigger>

                {/* 2. THE MODAL (This pops up when the card is clicked) */}
                <DialogContent className="sm:max-w-[700px] bg-background border-border">
                  <DialogHeader>
                    <div className="flex justify-between items-start pr-6 gap-4">
                      <DialogTitle className="text-2xl font-bold leading-tight">
                        {project.title}
                      </DialogTitle>
                      <span className="text-sm text-muted-foreground whitespace-nowrap mt-1">
                        {project.date}
                      </span>
                    </div>
                    {/* The full description without truncation */}
                    <DialogDescription className="text-lg text-foreground mt-6 leading-relaxed">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col gap-6 mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="px-3 py-1 text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* We moved the link inside the modal so it's the main call-to-action */}
                    {project.link && (
                      <div className="flex justify-end pt-4 border-t">
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={buttonVariants({ variant: "default" })}
                        >
                          View Source Code
                        </Link>
                      </div>
                    )}
                  </div>
                </DialogContent>

              </Dialog>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="w-full flex flex-col justify-between">
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
                        <Badge variant="outline" className="w-fit mb-1">{job.date}</Badge>
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
            ))}
          </div>
        </section>

       {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Who I am</h3>
              <p className="text-muted-foreground leading-relaxed">
                Outside of tech, I am an athlete and an outdoorsman. I grew up playing competitive hockey, and love spending time in the mountains, racing enduro mountain bikes and skiing. This connection to the outdoors has directly shaped my professional life. During an 8-month co-op with Natural Resources Canada on the Induced Seismicity Project, I modeled real-world sites to ensure fracking and wastewater disposal wouldn't trigger harmful seismic activity in remote communities. Later, as a software developer at the Pacific Forestry Centre, I collaborated with like-minded engineers and scientists who care deeply about protecting BC’s forests. For me, software hasn't just about building applications; it's about engineering systems that interact with and protect the physical world.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">My story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I walked into the University of Victoria without any previous coding experience. My first computer science class was a brutal wake-up call, I was used to visualizing math and physics, and abstract code didn’t click the same. That initial struggle fuelled my early passion for software engineering as I have always enjoyed a challenge. My focus on machine learning, robotics and GPU programming began when I joined the Autonomous Underwater Vehicles Club (AUVIC) on the computer vision team at the beginning of 2025. Seeing firsthand how critical efficient GPU computing is for real-time robotics completely rewired my focus. That hands-on experience drove the tail end of my degree, pushing me to specialize in mathematical optimization and computer vision, ultimately finishing my final year of study with a 93% academic average. The learning curve never ends, and I'm still climbing.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I am currently looking for new opportunities and collaborations. Whether you have a question about my work or just want to say hi, I will try my best to get back to you!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="mailto:liam.tanner@brentwood.ca" 
              className={`${buttonVariants({ variant: "outline", size: "icon" })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email Me</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/liam-tanner-792b43275" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "outline", size: "icon" })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="https://github.com/liamtannerr" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "outline", size: "icon" })} h-14 w-14 rounded-full hover:border-emerald-500/50 hover:text-emerald-500 transition-colors`}
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </section>

      </main>


      
      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Liam Tanner. All rights reserved.</p>
      </footer>
    </div>
  );
}