/**
 * =========================================================================
 * 🛠️ 04 - EDITORIAL TYPOGRAPHY DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Open this file and replace `siteConfig` dummy data with your own.
 * 2. Put your resume PDF in `/public/resume.pdf`.
 * 3. Run `npm run dev` and your editorial portfolio is ready!
 * =========================================================================
 */

export const siteConfig = {
  /**
   * 👤 IDENTITY & HERO TYPOGRAPHY
   */
  name: "Alex Rivera",
  initials: "AR.",
  role: "Software Engineer",

  // Headline rendered in large editorial serif font
  headline: ["Hi, I’m", "Alex Rivera"],

  summary: "A software engineer who crafts reliable, high-performance web systems and thoughtful digital experiences.",
  location: "San Francisco, CA",
  availability: "Open to software engineering roles",
  email: "alex.rivera@example.com",
  resumeUrl: "/resume.pdf",

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username", handle: "@your-github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", handle: "Connect" },
    { label: "Twitter", href: "https://x.com/your-username", handle: "@your-x" }
  ],

  // Words that cycle in the hero headline ticker
  heroWords: ["Design", "Build", "Scale", "Deliver"],

  /**
   * 📊 KEY METRICS (Displayed in header grid)
   */
  metrics: [
    { value: "Full-Stack", label: "Development focus", icon: "code" },
    { value: "B.S. CS", label: "Computer Science", icon: "graduation" },
    { value: "15+ Projects", label: "Shipped & verified", icon: "target" },
    { value: "Global", label: "Remote & on-site", icon: "github" }
  ],

  /**
   * 📖 ABOUT SECTION
   */
  about: {
    eyebrow: "A little about me",
    title: "Driven by architecture. Focused on craft.",
    paragraphs: [
      "I enjoy taking ideas from initial concept to high-throughput production services. I care deeply about clean system architecture, resilient APIs, and the UI polish that makes digital products feel effortless.",
      "My core focus is backend distributed systems, modern web engineering, and rigorous problem-solving through data structures and algorithmic practice."
    ]
  },

  /**
   * 🚀 CASE STUDIES & FEATURED PROJECTS
   * `theme`: "dark", "lime", or "paper" (configures the aesthetic of the preview visual)
   */
  projects: [
    {
      number: "01",
      name: "Distributed Event Engine",
      category: "~12,000 req/sec • Sub-8ms Latency • Redis Streams",
      description: "A high-throughput distributed event streaming pipeline engineered with Node.js, Redis, and PostgreSQL. Handles partitioned consumer groups with sub-8ms latency and zero dropped messages.",
      stack: ["Node.js", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "k6", "Grafana"],
      href: "https://github.com/your-username/distributed-event-engine",
      image: "/images/project-journal.svg",
      theme: "dark"
    },
    {
      number: "02",
      name: "Semantic AI Vector Search",
      category: "Vector Embeddings • Pinecone DB • Grounded Answers",
      description: "A full-stack Retrieval-Augmented Generation (RAG) platform indexing technical documentation for instant semantic retrieval and streaming contextual answers.",
      stack: ["Next.js", "FastAPI", "Python", "Pinecone", "LangChain", "Tailwind CSS"],
      href: "https://github.com/your-username/ai-vector-search",
      image: "/images/project-footwear.svg",
      theme: "lime"
    },
    {
      number: "03",
      name: "Cloud Commerce Platform",
      category: "Full-Stack Web • Stripe • Edge Deployment",
      description: "A modern e-commerce storefront with server-side rendering, dynamic inventory tracking, Stripe payments, and JWT-authenticated customer portals.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
      href: "https://github.com/your-username/cloud-commerce",
      image: "/images/project-portfolio.svg",
      theme: "paper"
    }
  ],

  /**
   * 🛠️ SKILLS GROUPS
   */
  skills: [
    { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
    { group: "Backend", items: ["Node.js", "Fastify", "Express.js", "Go", "Python", "REST APIs"] },
    { group: "Data & DevOps", items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "GitHub Actions"] }
  ],

  /**
   * ✉️ CONTACT FOOTER
   */
  contact: {
    title: "Have a project or role? Let’s connect.",
    description: "I’m open to software engineering roles, interesting collaborations, and technical discussions."
  },

  footerNote: "Designed with intention. Open-source template."
} as const;

export type Project = (typeof siteConfig.projects)[number];
