/**
 * =========================================================================
 * 🛠️ 05 - VISUAL & PHOTO EDITORIAL DEVELOPER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE:
 * 1. Place your headshot photo in `/public/profile.jpg`.
 * 2. Update `ABOUT_ME` with your name, job title, and bio.
 * 3. Update `PROJECTS` with your top 3 flagship projects and architecture stats.
 * 4. Run `npm run dev` and your photo-centric portfolio is ready!
 * =========================================================================
 */

/**
 * 👤 PERSONAL IDENTITY & PROFILE PHOTO
 */
export const ABOUT_ME = {
  name: "Alex Rivera",
  title: "Full Stack Engineer",
  location: "San Francisco, CA",
  email: "alex.rivera@example.com",
  description: [
    "Hey there 👋, I'm Alex.",
    "I'm a Software Engineer passionate about Distributed Systems, High-Performance APIs, and Modern Web Applications.",
    "I specialize in building fault-tolerant, scalable backend services using Node.js, TypeScript, Go, Redis, and cloud infrastructure.",
    "Currently exploring distributed consensus algorithms, vector search systems, and production web engineering."
  ],
  // Put your portrait/photo in `/public/profile.jpg` and update the filename below:
  profileImage: "/profile-placeholder.jpg",
  profileGif: "/profile-gif.gif"
} as const;

/**
 * 🌐 USER HANDLES
 */
export const USER_NAMES = {
  githubUsername: "your-github",
  leetcodeUsername: "your-leetcode",
  hashnodeUsername: "your-blog"
} as const;

/**
 * 🧩 LEETCODE & DSA PRACTICE
 */
export const LEETCODE_STATS = {
  totalSolved: 280,
  totalQuestions: 3450,
  easySolved: 110,
  totalEasy: 860,
  mediumSolved: 142,
  totalMedium: 1820,
  hardSolved: 28,
  totalHard: 770,
  ranking: "185,000+",
  recentSubmissions: [
    { title: "LRU Cache", statusDisplay: "Accepted", date: "Active" },
    { title: "Course Schedule II", statusDisplay: "Accepted", date: "Active" },
    { title: "Number of Islands", statusDisplay: "Accepted", date: "Active" },
    { title: "Binary Tree Maximum Path Sum", statusDisplay: "Accepted", date: "Active" }
  ]
} as const;

/**
 * 🔗 SOCIAL PROFILE LINKS
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  twitter: "https://x.com/your-username",
  leetcode: "https://leetcode.com/u/your-username",
  peerlist: "https://peerlist.io/your-username",
  instagram: "https://instagram.com/your-username",
  email: "alex.rivera@example.com",
  blog: "https://yourblog.dev",
  resume: "https://example.com/resume.pdf"
} as const;

/**
 * ✉️ FORMSPREE CONTACT ENDPOINT
 */
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

/**
 * 🛠️ TECHNICAL ARSENAL
 */
export const SKILLS = {
  frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["Node.js", "Fastify", "Express.js", "Go", "gRPC", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  languages: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  cloudDevOps: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
  tools: ["Git", "VS Code", "Postman", "Linux", "Grafana", "Prometheus", "k6"]
} as const;

/**
 * 🚀 PRODUCTION PROJECTS
 */
export const PROJECTS = [
  {
    id: "01",
    name: "Distributed Event Streaming Engine",
    status: "Benchmark Verified",
    statusTone: "verified",
    metrics: "~12,000 req/sec • Sub-8ms Latency • 500K+ Events",
    description: "A high-throughput distributed event ingestion pipeline built with Node.js, Redis Streams, and PostgreSQL. Benchmarked using Grafana k6 under high concurrency with sub-8ms average latency, supporting partitioned consumers and zero data loss.",
    category: "Distributed Systems • High-Throughput Backend",
    tech: ["Node.js", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "k6", "Grafana"],
    github: "https://github.com/your-username/distributed-event-engine",
    link: "https://event-engine-demo.example.com",
    highlights: [
      { value: "~12,000", unit: "req/sec", label: "Throughput" },
      { value: "<8ms", unit: "latency", label: "Average response" },
      { value: "500K+", unit: "events", label: "Stress-tested" },
      { value: "99.99%", unit: "reliability", label: "Uptime" }
    ],
    engineering: [
      "Partitioned consumer groups for concurrent event delivery",
      "Redis cache-aside pipeline for sub-millisecond status lookups",
      "Automated Grafana k6 benchmark suites with Prometheus monitoring",
      "Graceful degradation and exponential backoff retry mechanisms"
    ]
  },
  {
    id: "02",
    name: "Semantic Vector Search & AI Assistant",
    status: "AI RAG System",
    statusTone: "ai",
    metrics: "Vector Embeddings • Pinecone DB • Streaming Answers",
    description: "An enterprise-grade Retrieval-Augmented Generation (RAG) platform that indexes technical documentation, transforms chunks into high-dimensional embeddings, and answers queries with strictly grounded references.",
    category: "Generative AI • Vector Search • RAG Architecture",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    github: "https://github.com/your-username/ai-vector-search",
    link: "https://vector-search-demo.example.com",
    highlights: [
      { value: "RAG", unit: "pipeline", label: "Retrieval augmented" },
      { value: "<150ms", unit: "latency", label: "Vector search" },
      { value: "Pinecone", unit: "vector DB", label: "Semantic index" },
      { value: "0%", unit: "hallucination", label: "Grounded context" }
    ],
    engineering: [
      "Chunking and embedding pipeline using LangChain and FastAPI",
      "Cosine similarity retrieval over high-dimensional vector space",
      "Real-time streaming responses via Server-Sent Events (SSE)",
      "Strict context guardrails preventing speculative answers"
    ]
  },
  {
    id: "03",
    name: "Cloud Commerce Platform",
    status: "Live Production",
    statusTone: "live",
    metrics: "Full-Stack • Stripe Checkout • Edge Deployment",
    description: "A production-grade e-commerce application featuring server-side rendering, dynamic inventory sync, Stripe payment processing, and JWT-authenticated customer dashboards.",
    category: "Full-Stack Web • Cloud Infrastructure",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com/your-username/cloud-commerce",
    link: "https://cloud-commerce-demo.example.com",
    highlights: [
      { value: "Stripe", unit: "checkout", label: "Secure payments" },
      { value: "Edge", unit: "CDN", label: "Global delivery" },
      { value: "JWT", unit: "auth", label: "Protected APIs" },
      { value: "100%", unit: "responsive", label: "Mobile-first UI" }
    ],
    engineering: [
      "Next.js App Router with incremental static regeneration",
      "Stripe webhook listeners for automated order confirmation",
      "Role-based access control (RBAC) for customer & admin portals",
      "End-to-end type safety using Prisma ORM and TypeScript"
    ]
  }
] as const;

/**
 * 💼 PROFESSIONAL EXPERIENCE
 */
export const EXPERIENCE = [
  {
    company: "Acme Tech Labs",
    companyLink: "https://github.com/your-username",
    role: "Full Stack Engineer",
    period: "2024 - Present",
    location: "Remote / Hybrid",
    description: "Designed and built high-performance microservices, REST APIs, and responsive web applications. Optimized database query performance and implemented automated CI/CD pipelines.",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis", "Next.js"]
  },
  {
    company: "Open Source Collective",
    companyLink: "https://github.com/your-username",
    role: "Open Source Contributor",
    period: "2023 - 2024",
    location: "Global",
    description: "Contributed bug fixes, performance optimizations, and documentation improvements across popular developer tooling and open-source backend libraries.",
    skills: ["Git", "GitHub Actions", "Go", "TypeScript", "Documentation"]
  }
] as const;

/**
 * 🎓 FORMAL EDUCATION
 */
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology & Engineering",
    institutionLink: "https://example.edu",
    period: "2020 - 2024",
    score: "Algorithms, Distributed Systems, Database Management, Networks"
  }
] as const;

/**
 * 🧭 NAVIGATION LINKS
 */
export const NAVIGATION = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
] as const;
