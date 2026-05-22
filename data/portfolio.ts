const GITHUB = "https://github.com/Prakash2503";

export const siteConfig = {
  name: "Prakash S",
  role: "AI Trainee Developer & Full Stack Engineer",
  tagline:
    "Building intelligent systems using AI, Generative AI, Computer Vision, and modern full-stack technologies.",
  email: "prakashkrishnan526@gmail.com",
  phone: "+91 90032 18977",
  location: "Chennai, India",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/prakash-s-962b6a25a/",
  resumeUrl: "/resume.pdf",
  githubRepos: 15,
  currentRole: {
    title: "AI Trainee Developer",
    company: "Himitsu Labs",
    period: "Jan 2026 – Present",
  },
};

export const techStack = [
  "Python",
  "PyTorch",
  "React",
  "Next.js",
  "Flask",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Gemini AI",
  "OpenCV",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const typingRoles = [
  "AI Trainee Developer",
  "Full Stack AI Engineer",
  "Machine Learning Engineer",
  "Generative AI Developer",
];

export const aboutContent = {
  summary:
    "B.Tech in Artificial Intelligence and Data Science at St. Joseph's Institute of Technology (Nov 2022 – May 2026, CGPA 8.36 up to 7th semester). AI Trainee Developer at Himitsu Labs, with experience in recruitment platforms, multimodal GenAI, legal AI assistants, and IEEE-published research in computer vision and smart agriculture.",
  objective:
    "To build scalable, user-centric AI solutions — from model training and fine-tuning to full-stack deployment — for hiring, healthcare, safety, and legal accessibility.",
  education: [
    {
      degree: "B.Tech — Artificial Intelligence and Data Science",
      institution: "St. Joseph's Institute of Technology",
      year: "Nov 2022 – May 2026 · CGPA 8.36 (up to 7th sem)",
    },
  ],
  experience: [
    "AI Trainee Developer at Himitsu Labs (Jan 2026 – Present)",
    "ML Trainee at Altrosyn Technologies — Multimodal GenAI Meme Creator",
    "AI Developer at Read Automation — NeuroHire platform",
  ],
  certifications: [
    {
      name: "NPTEL Elite Certification — Data Science",
      url: "https://nptel.ac.in/",
    },
    {
      name: "Data Science in KNIME Analytics Platform — Basic Proficiency",
      url: "https://www.knime.com/",
    },
    {
      name: "Data Science for Engineers — NPTEL",
      url: "https://nptel.ac.in/",
    },
    {
      name: "Statistics 101 — IBM",
      url: "https://www.coursera.org/",
    },
    {
      name: "Prompt Engineering Essentials — Simplilearn",
      url: "https://www.simplilearn.com/",
    },
  ],
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: "Layout",
    skills: ["C", "Python", "SQL", "HTML", "CSS", "React", "Next.js", "Go", "Rust"],
  },
  {
    id: "ai",
    title: "AI / ML",
    icon: "Brain",
    skills: [
      "Deep Learning",
      "Generative AI",
      "Model Training",
      "Fine-Tuning",
      "Feature Engineering",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    id: "backend",
    title: "Backend & Auth",
    icon: "Server",
    skills: ["Flask", "FastAPI", "REST APIs", "Keycloak", "OpenFGA"],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "Neo4j"],
  },
  {
    id: "data",
    title: "Data Skills",
    icon: "Cloud",
    skills: [
      "Data Visualization",
      "Data Cleaning & ETL",
      "SQL Queries",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "Docker",
      "Git / GitHub",
      "KNIME",
      "ChatGPT",
      "Prompt Engineering",
      "Stitch",
      "Cursor",
      "Windsurf",
      "Zod",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Medical Chatbot Assistant",
    description:
      "Flask web app leveraging Google Gemini AI for medical condition prediction, symptom analysis, and hospital recommendations with secure data handling and user privacy.",
    highlights: [
      "AI-driven diagnosis with PDF generation for treatment suggestions",
      "Location-based hospital recommendation system",
      "Integrated feedback loops to improve AI accuracy over time",
    ],
    image: "/images/projects/medical-chatbot.jpg",
    tech: ["Python", "Flask", "Gemini AI", "PDF Generation"],
    github: `${GITHUB}/Medi-ChatBot`,
    demo: null,
    repoName: "Medi-ChatBot",
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: 2,
    title: "AI-Powered Accident Assistance System",
    description:
      "Flask-based AI system that detects accidents, extracts license plates via PaddleOCR and OpenCV, and predicts injury severity with a ResNet model.",
    highlights: [
      "Automated emergency response using Twilio API",
      "Notifies authorities and nearby hospitals",
      "Deep learning pipeline for severity classification",
    ],
    image: "/images/projects/accident-assistance.jpg",
    tech: ["Python", "Flask", "OpenCV", "PaddleOCR", "ResNet", "Twilio"],
    github: `${GITHUB}/AI-Emergency-Response`,
    demo: null,
    repoName: "AI-Emergency-Response",
    gradient: "from-red-500/20 via-orange-500/20 to-purple-500/20",
  },
  {
    id: 3,
    title: "NeuroHire: AI-Powered Recruitment Platform",
    description:
      "Full-stack, AI-driven recruitment platform to automate candidate screening and streamline the hiring process with intelligent resume parsing and recruiter dashboards.",
    highlights: [
      "Ranks candidates by job relevance on recruiter dashboard",
      "Job posting management and smart candidate shortlisting",
      "Hiring analytics: time-to-hire and top skills",
      "Smart interview scheduling with calendar integration",
    ],
    image: "/images/projects/neurohire.png",
    imagePosition: "center 42%",
    imageScale: 1.15,
    tech: ["Python", "AI/ML", "Full Stack", "REST APIs", "Analytics"],
    github: GITHUB,
    demo: null,
    repoName: null,
    privateProject: true,
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: 4,
    title: "Nyayavani: Offline Voice Legal Guardian",
    description:
      "Offline AI legal assistant providing multilingual voice and text-based legal guidance for rural and low-literacy users.",
    highlights: [
      "Legal situation detection with PyTorch and BERT/IndicBERT",
      "Neo4j knowledge graph for context-aware legal reasoning",
      "Offline STT/TTS: Whisper/Vosk and Coqui TTS",
      "FastAPI, React.js, and PostgreSQL stack",
    ],
    image: "/images/projects/nyayavani.png",
    imagePosition: "center 32%",
    imageScale: 1.25,
    tech: ["FastAPI", "React.js", "PostgreSQL", "PyTorch", "Neo4j", "BERT"],
    github: `${GITHUB}/LexBot-AI-Powered-Legal-Research-Assistant`,
    demo: null,
    repoName: "LexBot-AI-Powered-Legal-Research-Assistant",
    gradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
  },
];

export const experienceTimeline = [
  {
    id: 1,
    type: "internship",
    title: "AI Trainee Developer",
    company: "Himitsu Labs",
    period: "Jan 2026 – Present",
    description:
      "AI-based application development across backend and frontend — APIs, AI modules, workflow logic, model integration, and modern web technologies.",
    impact: [
      "Backend APIs and AI workflow logic for intelligent apps",
      "AI feature development and model integration",
      "Scalable architecture, automation, and user-centric solutions",
    ],
  },
  {
    id: 2,
    type: "internship",
    title: "Machine Learning Trainee",
    company: "Altrosyn Technologies Pvt Ltd",
    period: "May 2025 – Dec 2025",
    description:
      "Spearheaded Multimodal Generative AI Meme Creator — a GenAI app that converts text or voice commands into memes.",
    impact: [
      "Training, fine-tuning, and integrating core AI models",
      "Multimodal content generation pipeline",
      "End-to-end generative AI application development",
    ],
  },
  {
    id: 3,
    type: "internship",
    title: "AI Developer",
    company: "Read Automation",
    period: "Feb 2025 – May 2025",
    description:
      "Built NeuroHire to automate end-to-end hiring workflows and improve recruiter efficiency.",
    impact: [
      "AI-driven resume parsing and candidate shortlisting",
      "Recruiter dashboard for job and application tracking",
      "Smart interview scheduling with calendar integration",
    ],
  },
  {
    id: 4,
    type: "research",
    title: "AI Innovate Hackathon — Finalist",
    company: "Sri Eshwar College of Engineering (Thiran 2025)",
    period: "2025",
    description:
      "Finalist in the AI Innovate Hackathon, Coimbatore — application-oriented AI engineering project.",
    impact: ["Prestigious national hackathon recognition"],
  },
  {
    id: 5,
    type: "research",
    title: "Project Expo 2k25 — Finalist",
    company: "IEEE Education Society & IEEE Photonics Society",
    period: "2025",
    description:
      "Finalist at St. Xavier's Catholic College of Engineering — project selected among top entries across disciplines.",
    impact: ["IEEE-affiliated project expo recognition"],
  },
  {
    id: 6,
    type: "research",
    title: "Blaze a Trail 2.0 — 3rd Place",
    company: "St. Joseph's Institute of Technology",
    period: "2025",
    description:
      "Secured 3rd place for innovative problem-solving; selected for internship at Read Automation with hands-on AI automation experience.",
    impact: [
      "Award at St. Joseph's Institute of Technology",
      "Led to Read Automation internship opportunity",
    ],
  },
];

export const publications = [
  {
    id: 1,
    title:
      "Deep Learning Enabled Smart Surveillance System for Accident Severity Classification and Emergency Response Optimization",
    venue: "IEEE",
    year: "2025",
    description:
      "Uses deep learning for accident severity detection and intelligent emergency response assistance through smart surveillance systems.",
    link: `${GITHUB}/AI-Emergency-Response`,
    relatedRepo: "AI-Emergency-Response",
  },
  {
    id: 2,
    title:
      "FARMMIND: An AI Assistant with Voice and Image Capabilities for Secure and Engaging Crop Disease Identification",
    venue: "IEEE",
    year: "2025",
    description:
      "AI-driven crop disease detection using image analysis and voice-based interaction for accessible agricultural assistance.",
    link: GITHUB,
    relatedRepo: null,
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Full-stack applications with React, Next.js, FastAPI, and Flask — responsive UI, secure APIs, and production-ready delivery.",
    icon: "Globe",
  },
  {
    title: "AI / ML Solutions",
    description:
      "Deep learning, generative AI, model training, fine-tuning, computer vision, NLP, and intelligent automation.",
    icon: "Brain",
  },
  {
    title: "Dashboard Development",
    description:
      "Recruiter dashboards and analytics including time-to-hire, top skills, and real-time monitoring.",
    icon: "BarChart3",
  },
  {
    title: "Automation Systems",
    description:
      "Emergency response automation, OCR workflows, Twilio integrations, and multimodal GenAI pipelines.",
    icon: "Zap",
  },
  {
    title: "Database Design",
    description:
      "MongoDB, PostgreSQL, MySQL, and MariaDB schemas with optimized queries for AI and web applications.",
    icon: "Database",
  },
];

export const achievements = [
  { label: "GitHub Repositories", value: 15, suffix: "" },
  { label: "IEEE Publications", value: 2, suffix: "" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Hackathons & Awards", value: 3, suffix: "" },
];

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, username: "Prakash2503" },
  { label: "LinkedIn", href: siteConfig.linkedin, username: "prakash-s" },
];
