// Edit this file with your real information — every section on the site reads from here.

export const profile = {
  name: "Rajat Kumar",
  initials: "RK",
  role: "Software Development Engineer",
  tagline:
    "Building scalable, pixel-perfect web applications with React, Next.js, and the MERN stack.",
  location: "Ramgarh, Jharkhand, India",
  email: "rajatkumar.sde@gmail.com",
  phone: "+91 8709811714",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Rajat-Kumar-Resume.pdf",
  socials: {
    github: "https://github.com/max-rajat",
    linkedin: "https://linkedin.com/in/rajat-kumar",
  },
};

export const about = {
  heading: "About me",
  paragraphs: [
    "I'm a Software Development Engineer and MCA graduate with full-time production experience building and shipping scalable web applications at a funded, product-based company. I specialize in frontend development with React.js, JavaScript (ES6+), TypeScript, and Next.js, with hands-on expertise in responsive design, component architecture, performance optimization, and cross-browser compatibility.",
    "I'm equally comfortable across the MERN stack — building RESTful APIs, managing state with Redux Toolkit, and working through the full software development lifecycle in Agile/Scrum teams. I care about clean code, thorough code review, and shipping reliable, pixel-perfect UI.",
  ],
  stats: [
    { label: "Experience", value: "6+ Months" },
    { label: "Core skills", value: "15+" },
    { label: "Education", value: "MCA" },
  ],
  strengths: [
    "Problem Solving & Analytical Thinking",
    "Agile/Scrum Methodologies",
    "Cross-Browser Testing & QA",
    "Responsive UI/UX Development",
    "Performance Optimization",
    "Clean Code & Code Review",
    "RESTful API Design & Integration",
    "State Management",
    "Version Control (Git/GitHub)",
    "Technical Documentation",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Responsive Web Design",
      "Webpack",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Mongoose ODM", "JWT Authentication"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "CI/CD", "Linux CLI"],
  },
  {
    category: "Cloud & Services",
    items: ["Cloudinary", "Razorpay", "Nodemailer"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "StudyNotion — Full-Stack Ed-Tech Platform",
    description:
      "A full-stack ed-tech platform with role-based access for students, instructors, and admins. Features JWT authentication with OTP email verification, Razorpay-integrated course purchases, an admin dashboard with revenue analytics, and Cloudinary-backed media storage — built end-to-end with the MERN stack and deployed on Vercel.",
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://study-notion-xjqg.vercel.app/",
    featured: true,
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Engineer (SDE) — Full-Time",
    company: "Funded Firm — Product-Based CRM Platform",
    period: "6 Months",
    bullets: [
      "Engineered and shipped responsive UI components for a production-grade CRM platform using React.js and Tailwind CSS, resolving 30+ layout and viewport defects across mobile and desktop breakpoints.",
      "Developed modular, reusable frontend components and screens from Figma designs, following the established component architecture and design system — reducing UI development time by ~20%.",
      "Identified, reproduced, and resolved production frontend defects across Chrome, Firefox, Safari, and Edge, improving cross-browser reliability and user experience.",
      "Executed manual and regression testing across core user flows, verifying edge cases, navigation paths, and form validations prior to release — reducing post-release bugs by ~35%.",
      "Participated in peer code reviews via Git/GitHub pull request workflows, enforcing clean code standards and architectural best practices.",
      "Built and integrated backend API endpoints using Node.js and Express.js, validating request/response payloads and error handling with Postman.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment — sprint planning, daily standups, and retrospectives.",
      "Optimized frontend performance through lazy loading, code splitting, and efficient state management with React hooks.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vinoba Bhave University, Hazaribagh",
    period: "2024 — 2026",
    detail: "CGPA: 7.8",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Annada College, Hazaribagh",
    period: "2021 — 2024",
    detail: "CGPA: 6.41",
  },
  {
    degree: "12th (Senior Secondary) — Science",
    institution: "IGSI College, Mandu",
    period: "2020",
  },
  {
    degree: "10th (Secondary School)",
    institution: "Chumba High School",
    period: "2018",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
