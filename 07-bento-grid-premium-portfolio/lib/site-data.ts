/**
 * =========================================================================
 * 🛠️ 07 - PREMIUM BENTO GRID DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Open this file and customize `site` with your personal information.
 * 2. Update `projects` with your flagship applications.
 * 3. Update `principles` with your core engineering beliefs.
 * 4. Run `npm run dev` to see the interactive spotlight cards in action!
 * =========================================================================
 */

/**
 * 👤 PERSONAL IDENTITY & BENTO HERO
 */
export const site = {
  name: "Alex Rivera",
  role: "Software Developer",
  headline: "I build thoughtful, high-performance digital experiences.",
  intro:
    "I’m a software developer focused on building reliable, useful products — from polished interfaces to backend systems that scale.",
  location: "San Francisco, CA",
  availability: "Open to software engineering opportunities",
  email: "alex.rivera@example.com",
  resume: "https://example.com/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", handle: "@your-github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", handle: "Connect with me" },
    { label: "LeetCode", href: "https://leetcode.com/u/your-username", handle: "Problem solving" },
  ],
};

/**
 * 🚀 FEATURED BENTO PROJECTS
 * `accent`: "peach" (warm accent) or "blue" (cool accent)
 * `visual`: "movie", "store", or "portfolio" (determines SVG artwork)
 */
export const projects = [
  {
    number: "01",
    name: "Distributed Event Streaming Engine",
    category: "~12,000 req/sec • Sub-8ms Latency • 500K+ Events",
    year: "2026",
    description:
      "A high-throughput distributed event streaming pipeline engineered with Node.js, Redis Streams, and PostgreSQL. Benchmarked using Grafana k6 under high concurrency with sub-8ms average latency, supporting partitioned consumers and zero data loss.",
    stack: ["Node.js", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "k6", "Grafana"],
    href: "https://github.com/your-username/distributed-event-engine",
    accent: "peach",
    visual: "movie",
  },
  {
    number: "02",
    name: "Semantic Vector Search & AI Assistant",
    category: "Vector Embeddings • Pinecone DB • Streaming Answers",
    year: "2026",
    description:
      "An enterprise-grade Retrieval-Augmented Generation (RAG) platform that indexes technical documentation, transforms chunks into high-dimensional embeddings, and answers queries with strictly grounded references.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    href: "https://github.com/your-username/ai-vector-search",
    accent: "peach",
    visual: "movie",
  },
  {
    number: "03",
    name: "Cloud Commerce Platform",
    category: "Full-Stack Web • Stripe Checkout • Edge Deployment",
    year: "2026",
    description:
      "A production-grade e-commerce application featuring server-side rendering, dynamic inventory sync, Stripe payment processing, and JWT-authenticated customer dashboards.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    href: "https://github.com/your-username/cloud-commerce",
    accent: "blue",
    visual: "store",
  },
];

/**
 * 💼 WORK EXPERIENCE BENTO BLOCK
 */
export const experience = [
  {
    title: "Software Engineering Fellow",
    type: "Tech Innovation Labs",
    period: "2024 — Present",
    description:
      "Building full-stack applications, exploring backend architecture, authentication, databases, and modern frontend engineering.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
];

/**
 * 🎓 EDUCATION BENTO BLOCK
 */
export const education = [
  {
    title: "B.S. in Computer Science",
    school: "University of Technology & Engineering",
    period: "2020 — 2024",
    description: "Coursework in distributed systems, data structures, algorithms, and database architecture.",
  },
];

/**
 * 🛠️ SKILL BENTO TILES
 */
export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Fastify", "Express.js", "REST APIs", "gRPC"] },
  { title: "Data & Tools", items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "GitHub"] },
];

/**
 * 📊 BENTO QUICK STATS
 */
export const stats = [
  { value: "15+", label: "Projects built" },
  { value: "05+", label: "Languages explored" },
  { value: "Full-stack", label: "Development focus" },
  { value: "Always", label: "Learning & shipping" },
];

/**
 * 💡 CORE ENGINEERING PRINCIPLES (Displayed in quotation cards)
 */
export const principles = [
  "Build for clarity, not complexity.",
  "Care about the details people feel.",
  "Keep learning by shipping real work.",
];
