export const skills = [
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

  export const experience = [
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

  export const education = [
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

  export  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      description: "Foundational certification covering AWS Cloud concepts, security, architecture, core services, and distributed systems."
    }
  ];

  export const projects = [
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

  export const projectCategories = ["All", "ML & Computer Vision", "Embedded Systems", "Web & Software"];
