/**
 * =========================================================================
 * 🛠️ 06 - COLOR THEORY & MOTION DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Update `about` with your name, job title, and bio.
 * 2. Update `stats` with your solved problems count and GitHub handle.
 * 3. Update `projects` with your own projects and live demo links.
 * 4. Run `npm run dev` and enjoy the fluid Framer Motion animations!
 * =========================================================================
 */

/**
 * 👤 PERSONAL IDENTITY & BIO
 * Everything in the hero headline, monogram, and about section is read from here.
 */
export const about = {
  name: "Alex Rivera",
  firstName: "Alex",        // Displayed with custom highlight mark
  lastName: "Rivera",
  initials: "AR",           // Displayed on the floating monogram badge
  title: "Software Developer",
  location: "San Francisco, CA",
  email: "alex.rivera@example.com",
  intro: "Full-stack engineer building high-throughput backend services and responsive digital experiences.",
  description: "I specialize in building scalable web applications using TypeScript, Node.js, Go, PostgreSQL, Redis, and modern frontend frameworks. Passionate about system performance and clean software architecture.",
  photo: "/profile-placeholder.jpg" // Place your photo in `/public/profile.jpg`
} as const;

/**
 * 🔗 SOCIAL PROFILE LINKS
 */
export const links = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  leetcode: "https://leetcode.com/u/your-username",
  twitter: "https://x.com/your-username",
  email: "alex.rivera@example.com",
  resume: "https://example.com/resume.pdf" // Direct link or Google Drive PDF
} as const;

/**
 * 📊 HERO METRICS BAR
 * Displayed in the 4-column metrics ribbon directly below the hero.
 */
export const stats = {
  solved: 280,
  rank: "185,000+",
  githubUsername: "your-github",
  degree: "B.S. CS",
  institution: "University of Tech",
  period: "2020—2024",
  easy: 110,
  medium: 142,
  hard: 28
} as const;

/**
 * 🚀 FEATURED PROJECTS
 * - `highlights`: [Value, Unit, Label] triples for the visual metric counters.
 * - `engineering`: High-impact bullet points displayed in the terminal-style code card.
 */
export const projects = [
  {
    id: "01",
    name: "Distributed Event Engine",
    status: "Benchmark Verified",
    category: "Distributed Systems · High-throughput backend · Stream processing",
    metrics: "~12,000 req/sec · Sub-8ms latency · 500K+ events",
    description: "A high-throughput distributed event streaming pipeline engineered with Node.js, Redis Streams, and PostgreSQL. Benchmarked using Grafana k6 under high concurrency with sub-8ms average latency, supporting partitioned consumers and zero data loss.",
    highlights: [
      ["~12,000", "req/sec", "Throughput"],
      ["<8ms", "average", "Latency"],
      ["500K+", "events", "Stress tested"],
      ["99.99%", "success", "Reliability"]
    ],
    engineering: [
      "Partitioned consumer groups for concurrent event delivery",
      "Redis cache-aside pipeline for sub-millisecond status lookups",
      "Automated Grafana k6 benchmark suites with Prometheus monitoring",
      "Graceful degradation and exponential backoff retry mechanisms"
    ],
    tech: ["Node.js", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "k6", "Grafana"],
    github: "https://github.com/your-username/distributed-event-engine",
    live: "https://event-engine-demo.example.com"
  },
  {
    id: "02",
    name: "Semantic AI Vector Search",
    status: "AI RAG System",
    category: "Generative AI · Vector search · RAG architecture",
    metrics: "Vector embeddings · Pinecone DB · Streaming answers",
    description: "An enterprise-grade Retrieval-Augmented Generation (RAG) platform that indexes technical documentation, transforms chunks into high-dimensional embeddings, and answers queries with strictly grounded references.",
    highlights: [
      ["RAG", "pipeline", "Retrieval augmented"],
      ["<150ms", "latency", "Vector search"],
      ["Pinecone", "vector DB", "Semantic index"],
      ["0%", "hallucination", "Grounded context"]
    ],
    engineering: [
      "Chunking and embedding pipeline using LangChain and FastAPI",
      "Cosine similarity retrieval over high-dimensional vector space",
      "Real-time streaming responses via Server-Sent Events (SSE)",
      "Strict context guardrails preventing speculative answers"
    ],
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    github: "https://github.com/your-username/ai-vector-search",
    live: "https://vector-search-demo.example.com"
  },
  {
    id: "03",
    name: "Cloud Commerce Platform",
    status: "Live Production",
    category: "Full-stack web · Cloud infrastructure · Stripe",
    metrics: "Full-stack web · Stripe checkout · Edge deployment",
    description: "A production-grade e-commerce application featuring server-side rendering, dynamic inventory sync, Stripe payment processing, and JWT-authenticated customer dashboards.",
    highlights: [
      ["Stripe", "checkout", "Secure payments"],
      ["Edge", "CDN", "Global delivery"],
      ["JWT", "auth", "Protected APIs"],
      ["100%", "responsive", "Mobile-first UI"]
    ],
    engineering: [
      "Next.js App Router with incremental static regeneration",
      "Stripe webhook listeners for automated order confirmation",
      "Role-based access control (RBAC) for customer & admin portals",
      "End-to-end type safety using Prisma ORM and TypeScript"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com/your-username/cloud-commerce",
    live: "https://cloud-commerce-demo.example.com"
  }
] as const;

/**
 * 🛠️ TECHNICAL ARSENAL
 */
export const skills = {
  Languages: ["TypeScript", "JavaScript", "Go", "Python", "SQL", "HTML/CSS"],
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  Backend: ["Node.js", "Fastify", "Express.js", "Go", "gRPC", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  "Cloud & DevOps": ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
  Tools: ["Git", "VS Code", "Postman", "Linux", "Grafana", "Prometheus", "k6"]
} as const;

/**
 * 💼 PROFESSIONAL EXPERIENCE
 */
export const experience = {
  role: "Full Stack Engineer",
  company: "Acme Tech Labs",
  period: "2024 — Present",
  description: "Designed and built high-performance microservices, REST APIs, and responsive web applications. Optimized database query performance and implemented automated CI/CD pipelines.",
  stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis", "Next.js"]
} as const;

/**
 * 🎓 FORMAL EDUCATION
 */
export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Technology & Engineering",
  period: "2020 — 2024",
  focus: "Algorithms, Distributed Systems, Database Management, Networks"
} as const;
