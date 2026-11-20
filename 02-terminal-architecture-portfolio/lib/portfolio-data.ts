/**
 * =========================================================================
 * 🛠️ 02 - TERMINAL & ARCHITECTURE MASTER PORTFOLIO TEMPLATE
 * =========================================================================
 * 
 * 🚀 QUICK CUSTOMIZATION GUIDE (Ready in 3 Minutes):
 * 1. Update `ABOUT_ME` with your name, job title, and bio.
 * 2. Update `PROJECTS` with your architecture flow steps and metric boxes.
 * 3. Customize `TERMINAL_COMMANDS` to output your own details when users type
 *    commands like `whoami`, `projects`, `benchmarks`, and `contact`!
 * 4. Run `npm run dev` to test the in-browser interactive terminal!
 * =========================================================================
 */

/**
 * 👤 PERSONAL IDENTITY & BIO
 */
export const ABOUT_ME = {
  name: "Alex Rivera",
  title: "Full Stack Engineer",
  roleHeadline: "Backend, Distributed Systems & Modern Web",
  location: "San Francisco, CA",
  coordinates: "37°46' N · 122°25' W", // Displayed in the terminal status badge
  email: "alex.rivera@example.com",
  description: [
    "Hey there 👋, I'm Alex.",
    "I'm a Software Engineer passionate about Distributed Systems, High-Performance APIs, and Modern Web Applications.",
    "I specialize in building fault-tolerant, scalable backend services using Node.js, TypeScript, Go, Redis, and cloud infrastructure.",
    "Currently exploring distributed consensus algorithms, vector search systems, and production web engineering."
  ],
  profileImage: "/profile-placeholder.jpg",
  profileGif: "/profile-gif.gif",
  availability: "Open for Software Engineering Roles & Internships",
  npxCommand: "npx your-portfolio@latest" // Shown on copy button in hero
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
 * 🧩 LEETCODE & PROBLEM SOLVING METRICS
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
    { title: "Binary Tree Maximum Path Sum", statusDisplay: "Accepted", tag: "Hard", topic: "Trees / DFS" },
    { title: "LRU Cache", statusDisplay: "Accepted", tag: "Medium", topic: "Hash Table / Doubly Linked List" },
    { title: "Course Schedule", statusDisplay: "Accepted", tag: "Medium", topic: "Graph / Topological Sort" },
    { title: "Longest Consecutive Sequence", statusDisplay: "Accepted", tag: "Medium", topic: "Union Find / Hash Set" }
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
  backend: ["Node.js", "Fastify", "Express.js", "Go", "Python", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  languages: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  cloudDevOps: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
  tools: ["Git", "VS Code", "Postman", "Linux", "Grafana", "Prometheus", "k6"]
} as const;

/**
 * 🚀 PRODUCTION PROJECTS WITH ARCHITECTURE FLOW STAGE
 * - `architecture`: Visual flowchart steps shown in the interactive diagram.
 * - `metricBoxes`: 4 stats displayed in high-contrast HUD cards.
 * - `takeaways`: Key technical insights gained while building.
 */
export const PROJECTS = [
  {
    id: "01",
    name: "Distributed Event Streaming Engine",
    status: "Benchmark Verified",
    metrics: "~12,000 req/sec • Sub-8ms Latency • 500K+ Events",
    metricBoxes: [
      { label: "Throughput", value: "~12,000", unit: "req/sec" },
      { label: "Median Latency", value: "6.2", unit: "ms" },
      { label: "Stress Tested", value: "500K+", unit: "events" },
      { label: "Reliability", value: "99.99%", unit: "success" }
    ],
    description: "A high-throughput distributed event streaming pipeline engineered with Node.js, Redis Streams, and PostgreSQL. Benchmarked using Grafana k6 under high concurrency with sub-8ms average latency, supporting partitioned consumers and zero data loss.",
    category: "Distributed Systems • High-Throughput Backend",
    architecture: [
      { step: "1", node: "k6 Virtual Users", detail: "Distributed stress traffic generation" },
      { step: "2", node: "Multi-Core Worker", detail: "Cluster round-robin distribution" },
      { step: "3", node: "Fastify Ingestion", detail: "Zero-overhead async routing" },
      { step: "4", node: "Redis Streams", detail: "In-memory consumer group partitioning" },
      { step: "5", node: "PostgreSQL", detail: "Persistent write-through storage" }
    ],
    takeaways: [
      "Eliminated race conditions with atomic consumer group acknowledgments.",
      "Achieved 12,000 req/s by offloading DB read pressure to Redis in-memory cache.",
      "Clustered worker processes utilized all CPU cores with near-zero worker starvation."
    ],
    tech: ["Node.js", "TypeScript", "Redis Streams", "PostgreSQL", "Docker", "k6", "Grafana"],
    github: "https://github.com/your-username/distributed-event-engine",
    link: "https://event-engine-demo.example.com"
  },
  {
    id: "02",
    name: "Semantic Vector Search & AI Assistant",
    status: "AI RAG System",
    metrics: "Vector Embeddings • Pinecone DB • Streaming Answers",
    metricBoxes: [
      { label: "Retrieval Time", value: "<100", unit: "ms" },
      { label: "Vector Search", value: "Pinecone", unit: "Index" },
      { label: "AI Model", value: "LLM", unit: "Streaming" },
      { label: "Hallucination", value: "0%", unit: "Grounded" }
    ],
    description: "An enterprise-grade Retrieval-Augmented Generation (RAG) platform that indexes technical documentation, transforms chunks into high-dimensional embeddings, and answers queries with strictly grounded references.",
    category: "Generative AI • Vector Search • RAG Architecture",
    architecture: [
      { step: "1", node: "User Inquiry", detail: "Natural language technical query" },
      { step: "2", node: "Embedding Model", detail: "Dense vector text representation" },
      { step: "3", node: "Pinecone Vector DB", detail: "Cosine similarity knowledge retrieval" },
      { step: "4", node: "Context Prompt", detail: "Grounding context prompt injection" },
      { step: "5", node: "Streaming LLM", detail: "Zero-hallucination real-time response" }
    ],
    takeaways: [
      "Engineered vector retrieval pipeline for deterministic query augmentation.",
      "Chunked and embedded technical documentation into Pinecone vector space.",
      "Real-time streaming responses via Server-Sent Events (SSE) with fallback intent routing."
    ],
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    github: "https://github.com/your-username/ai-vector-search",
    link: "https://vector-search-demo.example.com"
  },
  {
    id: "03",
    name: "Cloud Commerce Platform",
    status: "Live Production",
    metrics: "Full-Stack • Stripe Checkout • Edge Deployment",
    metricBoxes: [
      { label: "Availability", value: "99.9%", unit: "Uptime" },
      { label: "Auth Flow", value: "OAuth2", unit: "& JWT" },
      { label: "UX Latency", value: "<50ms", unit: "Edge" },
      { label: "Deployment", value: "Vercel", unit: "Edge CDN" }
    ],
    description: "A production-grade e-commerce application featuring server-side rendering, dynamic inventory sync, Stripe payment processing, and JWT-authenticated customer dashboards.",
    category: "Full-Stack Web • Cloud Infrastructure",
    architecture: [
      { step: "1", node: "Vercel Edge", detail: "Global edge CDN storefront" },
      { step: "2", node: "React Frontend", detail: "Next.js dynamic catalog" },
      { step: "3", node: "Auth Engine", detail: "Google OAuth2 & JWT tokens" },
      { step: "4", node: "Prisma & Postgres", detail: "Orders, customers & inventory" }
    ],
    takeaways: [
      "Implemented secure OAuth2 authentication with encrypted session cookies.",
      "Integrated Stripe webhooks with idempotent event handlers for order fulfillment.",
      "Deployed on Vercel with edge caching and automated CI/CD pipeline."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    link: "https://cloud-commerce-demo.example.com",
    github: "https://github.com/your-username/cloud-commerce"
  }
];

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
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology & Engineering",
    institutionLink: "https://example.edu",
    period: "2020 - 2024",
    score: "Algorithms, Distributed Systems, Database Management, Networks"
  }
];

/**
 * 💻 INTERACTIVE TERMINAL EMULATOR COMMANDS
 * When visitors type commands in the interactive terminal, these array responses
 * will be printed line-by-line. Feel free to add new commands (e.g. `hireme`, `blog`)!
 */
export const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami       - Display identity and engineering focus",
    "  projects     - List the 3 flagship projects with metrics",
    "  benchmarks   - Show load test and performance stats",
    "  skills       - View full technical toolkit",
    "  contact      - Get direct contact and social channels",
    "  clear        - Clear the terminal console"
  ],
  whoami: [
    "Alex Rivera",
    "Role: Full Stack Engineer (Backend, Distributed Systems & Modern Web)",
    "Location: San Francisco, CA · B.S. in Computer Science",
    "Status: Open for Software Engineering Opportunities"
  ],
  projects: [
    "01. Distributed Event Streaming Engine [Node.js + Redis Streams] (~12,000 req/s, 6.2ms median latency)",
    "02. Semantic Vector Search & AI Assistant [FastAPI + Pinecone + LangChain] (Grounded RAG System)",
    "03. Cloud Commerce Platform [Next.js + Stripe + Prisma] (Production Edge Application)"
  ],
  benchmarks: [
    "--- Grafana k6 Load Test Report ---",
    "Concurrency: Distributed multi-VU stress profile",
    "Throughput:  ~12,000 requests / second",
    "Avg Latency: 7.8 ms (Median: 6.2 ms, p95: 11.4 ms)",
    "Volume:      500,000+ total requests processed",
    "Reliability: 99.99% HTTP 200 OK"
  ],
  skills: [
    "Languages: TypeScript, JavaScript, Go, Python, SQL",
    "Backend:   Node.js, Fastify, Express.js, Go, REST APIs, gRPC",
    "Databases: PostgreSQL, MongoDB, Redis, Pinecone Vector DB",
    "Tools:     Docker, Kubernetes, Grafana, k6, Prometheus, Git"
  ],
  contact: [
    "Email:     alex.rivera@example.com",
    "GitHub:    https://github.com/your-username",
    "LinkedIn:  https://linkedin.com/in/your-username",
    "LeetCode:  https://leetcode.com/u/your-username",
    "Twitter:   https://x.com/your-username"
  ]
};
