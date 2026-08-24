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
        "Engineered automated data processing pipelines to transform large PostgreSQL datasets into optimized SQLite and flatfile releases, reducing processing time from hours to seconds.",
        "Engineered a release-versioning system using SQL and encryption to encode and track all future release metadata.",
        "Rebuilt a legacy public website from scratch in JavaScript, then wrote Bash scripts to automate the process for all future developers on my team.",
      ],
    },
    {
      role: "Research Assistant - Induced Seismicity Project",
      company: "Natural Resources Canada",
      location: "Sidney, BC",
      date: "Sept 2023 — April 2024",
      link: null,
      bullets: [
        "Engineered 3 increasingly complex CO₂ injection simulations using Python meshes and the OpenGeoSys finite element solver, becoming the first NRCan employee to implement this workflow successfully.",
        "Advanced the project from stylized models to a real-world case study by engineering a 3-layer finite element simulation of the SECURE INGA wastewater disposal well, utilizing precise depth profiles and material properties.",
      ],
    },
  ];

  const projects = [
    {
      title: "Motion Estimation Video Compression Optimizations",
      date: "July - Aug 2026",
      description:
        "Engineered a high-performance 16x16 Sum-of-Absolute-Differences (SAD) kernel for block-matching motion estimation on an ARM architecture. Developed a custom, stateless SAD4 operation, and integrated it via a patched QEMU emulator and inline assembly. Achieved an 11.89x execution speedup using the custom opcode and a peak 34.93x speedup by implementing an ARM NEON SIMD vectorization pipeline.",
      tech: ["C", "ARM Assembly", "Hardware Optimization"],
      link: "https://github.com/BenJTowers/motion_estimation/blob/main/report/SAD_Optimizations_for_Motion_Estimation.pdf",
      images: ["Motion-Estimation-Pic.png"],
    },
    {
      title: "AI Incident Orchestrator",
      date: "May - Aug 2026",
      description:
        "Engineered a production-ready AI orchestration pipeline leveraging LLMs and RAG context to automate system incident triage in a distributed environment. Collaborated within a 17-member software engineering team utilizing automated test harnesses and GitHub Actions CI/CD to validate system stability.",
      tech: ["Python", "PostgreSQL", "Groq API", "CI/CD"],
      link: null,
      images: ["ACIRO-Pic.png"],
    },
    {
      title: "Convolutional Engine",
      date: "Apr 2026",
      description:
        "Engineered a high-performance image processing library that uses shared memory tiling to minimize global memory bottlenecks and maximize GPU throughput for convolutional computations.",
      tech: ["CUDA", "C++"],
      link: "https://github.com/liamtannerr/convolutional-engine",
    },
    {
      title: "EfficientAD Anomaly Detector",
      date: "Mar 2026",
      description:
        "Engineered a state-of-the-art anomaly detection pipeline in PyTorch, by writing the Patch Description Network class, training the teacher network and removing bottlenecks from the student/autoencoder training algorithm to allow for 70,000 training iterations in under 2 hours. Achieved an AUROC score of 0.88 on a diverse industrial dataset with less than 1 millisecond performance.",
      tech: ["PyTorch", "CNN Architecture"],
      link: "https://github.com/liamtannerr/Anomaly-Detection-Paper/blob/main/EfficientAD_Implementation.pdf",
      images: ["Anomaly1.png", "Anomaly2.png"],
    },
    {
      title: "Breast Cancer Diagnosis Model",
      date: "Feb 2026",
      description:
        "Engineered a regularized logistic regression model for breast cancer diagnosis, achieving a 98.59% accuracy on the WDBC dataset by implementing a regularized softmax cost function and gradient descent from scratch.",
      tech: ["MATLAB", "Machine Learning"],
      link: "https://github.com/liamtannerr/Optimization-Papers/blob/main/LogisticRegression.pdf",
    },
    {
      title: "AI Exoplanet Identifier and Visualizer",
      date: "Oct 2025",
      description:
        "Trained a Random Forest model to classify whether or not an event is likely to be an exoplanet using NASA's Kepler data for the NASA Space Apps Hackathon.",
      tech: ["Scikit-learn", "Python"],
      link: "https://github.com/liamtannerr/exoplanet-identifier/tree/deploy",
      liveLink: "https://exovis.vercel.app",
      images: ["ExoVis1-Pic.png", "ExoVis2-Pic.png"],
    },
    {
      title: "Ray Tracer",
      date: "Mar — Jun 2025",
      description:
        "Developed a ray tracer capable of rendering 3D animations using core vector math and rendering logic without relying on graphics APIs by following a textbook.",
      tech: ["C++"],
      link: "https://github.com/liamtannerr/RayTracer",
      images: ["RayTracer.png"],
    },
    {
      title: "Embedded Traffic Light Simulation",
      date: "Feb — March 2025",
      description:
        "Engineered the hardware architecture for an STM32F4-based traffic simulation, integrating a custom circuit with 22 LEDs, a potentiometer, and 3 daisy-chained shift registers. Synchronized the 19-bit LED array via shared GPIO pins and ensured circuit safety by calculating and wiring precise series resistors to protect the power supply and components.",
      tech: ["RTOS", "Circuit Design", "Embedded C"],
      link: "https://github.com/liamtannerr/Traffic-Lights",
      images: ["TrafficLights-Pic.png"],
    },
    {
      title: "Virtual Triage System",
      date: "Sept — Nov 2024",
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
      description:
        "Engineered an IR light detection robot from scratch, capable of detecting an IR beacon, travelling towards it and depositing a payload.",
      tech: ["ROBOTC", "C"],
      images: ["Robo.mp4"],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl tracking-tight">Liam Tanner</div>
          <div className="flex items-center gap-4">
<nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-2">
              <Link href="#projects" className="hover:text-amber-400 transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="hover:text-amber-400 transition-colors">
                Experience
              </Link>
              <Link href="#about" className="hover:text-amber-400 transition-colors">
                About Me
              </Link>
            </nav>
            <div className="h-5 w-px bg-border hidden sm:block" ></div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-32 text-center overflow-hidden border-b">
          {/* NATURE BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <Image
              src="banner.JPEG"
              alt="Nature Background"
              fill
              className="object-cover object-center"
              priority
            />
            {/* DYNAMIC OVERLAY: Adapts to light/dark mode and adds a slight blur */}
            <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]"></div>
          </div>

          {/* HERO CONTENT (Wrapped in relative z-10 to float above the background) */}
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            {/* Added transition-transform, duration-1000, and hover:[transform:rotateY(180deg)_scale(1.2)] */}
            <div className="relative mb-6 h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-border shadow-lg cursor-pointer transition-transform duration-800 ease-in-out hover:[transform:rotateY(180deg)_scale(1.2)]">
              <Image
                src="face.jpg"
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
            <p className="text-xl text-foreground font-medium max-w-2xl mb-8">
              Welcome to my personal portfolio website
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

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full relative overflow-hidden">
          {/* THE POINTING BACKGROUND IMAGE */}
          <div className="absolute top-40 right-0 w-28 md:w-[23rem] z-0 opacity-80 pointer-events-none select-none">
            <Image
              src="pointing.png"
              alt="Pointing at projects"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-right-top"
            />
          </div>

          {/* THE CONTENT */}
            <div className="container mx-auto pl-4 pr-20 sm:pr-36 md:pr-[12rem] py-20 border-t relative z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Dialog key={index}>
                  {/* 1. THE CARD CONTAINER */}
                  <div className="relative h-full group outline-none">
                    <Card className="relative flex flex-col justify-between h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber-400/30 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] bg-card/50 backdrop-blur-sm will-change-transform">
                      
                      {/* THE INVISIBLE BUTTON OVERLAY */}
                      
                      {/* THE INVISIBLE BUTTON OVERLAY */}
                      <DialogTrigger className="absolute inset-0 w-full h-full z-20 cursor-pointer outline-none border-none bg-transparent">
                        <span className="sr-only">View {project.title} details</span>
                      </DialogTrigger>

                      {/* CARD CONTENT (Wrapped to sit securely beneath the invisible button) */}
                      <div className="relative z-10 pointer-events-none">
                        <CardHeader>
                          <div className="flex justify-between items-start pb-2">
                            <CardTitle className="text-xl transition-colors duration-300 group-hover:text-amber-400">
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
                  </div>

                  {/* 2. THE MODAL */}
                  <DialogContent className="sm:max-w-[800px] bg-background border-border max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex justify-between items-start pr-6 gap-4">
                        <DialogTitle className="text-2xl font-bold leading-tight">
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

                      {/* DYNAMIC MEDIA SECTION */}
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

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="container mx-auto px-4 py-20 border-t">
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
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="container mx-auto px-4 py-20 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
            <div>
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
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container mx-auto px-4 py-24 border-t text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I am currently looking for new opportunities and collaborations. Whether you have a
            question about my work or just want to say hi, I will try my best to get back to you!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
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
          </div>
        </section>

        {/* HIDDEN PRELOADER FOR MODAL MEDIA */}
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

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Liam Tanner. All rights reserved.</p>
      </footer>
    </div>
  );
}