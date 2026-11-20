/**
 * =========================================================================
 * 🛠️ 03 - DEVFOLIO SIDEBAR DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Update `portfolio.identity` with your name, bio, and social links.
 * 2. Update `portfolio.codeCard` to personalize the TypeScript code snippet
 *    shown in the hero card!
 * 3. Update `portfolio.projects` and `portfolio.toolkit`.
 * 4. Run `npm run dev` to see your changes live immediately!
 * =========================================================================
 */

export const portfolio = {
  /**
   * 👤 IDENTITY & PERSONAL DETAILS
   * Configures the sticky sidebar, hero headline, and about bio.
   */
  identity: {
    name: "Alex Rivera",
    initials: "AR.",
    title: "Software Engineer",
    descriptor: "Full-stack & Systems Developer",
    location: "San Francisco, CA",
    email: "alex.rivera@example.com",
    availability: "Available for engineering roles & internships",
    resume: "/resume.pdf", // Place your PDF in `/public/resume.pdf`
    intro: "I build thoughtful, reliable digital products — from high-performance backend systems to responsive interfaces.",
    socials: [
      { label: "GitHub", url: "https://github.com/your-username" },
      { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
      { label: "Twitter", url: "https://x.com/your-username" },
      { label: "LeetCode", url: "https://leetcode.com/u/your-username" }
    ]
  },

  /**
   * 🧭 SIDEBAR NAVIGATION
   */
  navigation: [
    { label: "Overview", href: "#overview", number: "01" },
    { label: "Selected work", href: "#work", number: "02" },
    { label: "Experience", href: "#experience", number: "03" },
    { label: "Toolkit", href: "#toolkit", number: "04" },
    { label: "Contact", href: "#contact", number: "05" }
  ],

  /**
   * 💻 SYNTAX CODE CARD (Hero Preview)
   * This appears as an interactive code snippet card in the hero stage.
   * `tone`: "plain", "key" (variable/keyword), "value" (string), or "function" (method)
   */
  codeCard: {
    filename: "developer.ts",
    lines: [
      { number: "01", code: "const engineer = {", tone: "plain" },
      { number: "02", code: '  name: "Alex Rivera",', tone: "key" },
      { number: "03", code: '  focus: "Full-Stack & Systems",', tone: "value" },
      { number: "04", code: '  mindset: "Performance & Reliability",', tone: "value" },
      { number: "05", code: "  ship: () => buildProductionSystems()", tone: "function" },
      { number: "06", code: "};", tone: "plain" }
    ]
  },

  /**
   * 📊 QUICK STATS PILLS
   */
  stats: [
    { value: "15+", label: "Projects built" },
    { value: "650+", label: "GitHub contributions" },
    { value: "B.S.", label: "Computer Science" },
    { value: "Top 5%", label: "LeetCode problem solver" }
  ],

  /**
   * 🚀 SELECTED PROJECTS GALLERY
   * `visual`: "journal", "footwear", or "portfolio" (defines card styling & placeholder SVG)
   */
  projects: [
    {
      id: "01",
      title: "Distributed Event Engine",
      kind: "Distributed systems",
      description: "A high-throughput event ingestion engine with Redis Streams, PostgreSQL, and sub-10ms response latency.",
      stack: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker"],
      status: "Production",
      link: "https://github.com/your-username/distributed-event-engine",
      visual: "journal",
      featured: true
    },
    {
      id: "02",
      title: "Semantic Vector Search",
      kind: "AI / Vector search",
      description: "Retrieval-Augmented Generation customer platform indexing technical docs into Pinecone vector space.",
      stack: ["FastAPI", "Pinecone", "LangChain", "Next.js", "Python"],
      status: "Live",
      link: "https://github.com/your-username/ai-vector-search",
      visual: "footwear",
      featured: true
    },
    {
      id: "03",
      title: "Cloud Commerce Platform",
      kind: "Full-stack web",
      description: "Modern, responsive storefront with Stripe payments, OAuth2 authentication, and Prisma ORM.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
      status: "Built",
      link: "https://github.com/your-username/cloud-commerce",
      visual: "portfolio",
      featured: false
    }
  ],

  /**
   * 💼 WORK & CAREER TIMELINE
   */
  experience: [
    {
      period: "2024 — Present",
      role: "Software Engineering Fellow",
      organization: "Tech Innovation Labs",
      detail: "Building scalable backend services, optimizing SQL/NoSQL databases, and improving CI/CD automation."
    },
    {
      period: "2023 — 2024",
      role: "Open Source Contributor",
      organization: "Developer Tooling Community",
      detail: "Contributed features, benchmark testing, and bug fixes across popular developer libraries and CLI tools."
    }
  ],

  /**
   * 🛠️ TECHNICAL TOOLKIT
   */
  toolkit: [
    { category: "Frontend", description: "Interfaces & Interaction", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Backend", description: "APIs & Application Logic", items: ["Node.js", "Fastify", "Express.js", "Go", "Python", "REST APIs"] },
    { category: "Data & Infrastructure", description: "Persistence & Tooling", items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "GitHub Actions"] }
  ],

  /**
   * ✉️ CONTACT BANNER
   */
  contact: {
    headline: "Have a project or\nrole in mind?",
    message: "I’m always open to discussing new opportunities, collaborations, and engineering challenges.",
    cta: "Send me a message"
  },

  footer: "Designed for performance and clarity. Open-source template."
} as const;

export type PortfolioProject = (typeof portfolio.projects)[number];
