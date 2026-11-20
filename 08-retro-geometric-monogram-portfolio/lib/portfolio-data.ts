/**
 * =========================================================================
 * 🛠️ 08 - RETRO-GEOMETRIC MONOGRAM DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Open this file and update `portfolioData.identity` with your name and initials.
 * 2. Update `portfolioData.projects` with your own applications.
 * 3. Update `portfolioData.skills` and `portfolioData.about`.
 * 4. Run `npm run dev` and your geometric monogram portfolio is ready!
 * =========================================================================
 */

export const portfolioData = {
  /**
   * 👤 IDENTITY & GEOMETRIC MONOGRAM EMBLEM
   */
  identity: {
    // 2-letter monogram shown in the rotating orbit hero badge & navbar mark
    brand: "AR",

    name: "Alex Rivera",
    title: "Software Developer",
    kicker: "HELLO, I'M ALEX —",
    headline: "I turn ideas into digital experiences.",
    description: "Software developer focused on building reliable, useful products — from thoughtful interfaces to dependable backend systems.",
    location: "San Francisco, CA · Open to Opportunities",
    email: "alex.rivera@example.com",
    availability: "AVAILABLE FOR INTERNSHIPS & OPPORTUNITIES",
    year: "PORTFOLIO / 2026",
    socials: [
      { label: "GitHub", href: "https://github.com/your-username" },
      { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
      { label: "Email", href: "mailto:alex.rivera@example.com" }
    ]
  },

  /**
   * 🚀 SELECTED PROJECTS GALLERY
   * `mark`: 2-letter badge displayed on the project card emblem
   * `cls`: "journal", "footwear", or "movie" (configures the theme background)
   */
  projects: [
    {
      n: "01",
      title: "Distributed Event Engine",
      type: "DISTRIBUTED / 2026",
      desc: "A high-throughput distributed event streaming pipeline with Redis Streams, PostgreSQL, and sub-8ms latency.",
      tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
      cls: "journal",
      mark: "EE",
      href: "https://github.com/your-username/distributed-event-engine"
    },
    {
      n: "02",
      title: "AI Vector Search Engine",
      type: "AI & RAG / 2026",
      desc: "Semantic documentation search and streaming retrieval-augmented assistant with vector embeddings.",
      tech: ["Next.js", "Python", "FastAPI", "Pinecone"],
      cls: "footwear",
      mark: "VS",
      href: "https://github.com/your-username/ai-vector-search"
    },
    {
      n: "03",
      title: "Cloud Commerce Platform",
      type: "COMMERCE / 2026",
      desc: "A modern, responsive e-commerce storefront with Stripe checkout and dynamic inventory sync.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      cls: "movie",
      mark: "CC",
      href: "https://github.com/your-username/cloud-commerce"
    }
  ],

  /**
   * ☁️ SKILL CLOUD WITH SUPERSCRIPT NUMBERS
   */
  skills: [
    "TypeScript", "JavaScript", "Python", "Go", "React", "Next.js",
    "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "AWS"
  ],

  /**
   * 📖 ABOUT STORY & PILLARS
   */
  about: {
    lead: "I'm a Computer Science graduate learning and building one production-grade project at a time.",
    paragraph: "My interests move between frontend experiences and backend systems. I enjoy understanding how things work under the hood, then turning that understanding into software people can rely on.",
    facts: [
      { num: "01", text: "Build with intent" },
      { num: "02", text: "Stay curious" },
      { num: "03", text: "Keep it practical" }
    ]
  }
} as const;
