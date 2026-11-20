# ⚡ Monochrome Minimal — Developer Portfolio Template

A modern, high-performance developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Features a timeless monochrome aesthetic, smooth scroll reveals, algorithmic practice metrics, and a 100% data-driven configuration.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- 🌓 **Monochrome Minimalism:** Focused typography and dark/light adaptive contrast.
- ⚡ **100% Data-Driven:** Customize your entire portfolio from a single file (`lib/portfolio-data.ts`) without touching any layout components.
- 📊 **Engineering Benchmarks & Metric Highlights:** Showcase throughput, latency, and reliability metrics.
- 🧩 **DSA & LeetCode Grid:** Integrated problem-solving breakdown with difficulty progress meters.
- 📱 **Fully Responsive:** Seamless layout scaling from mobile viewports to ultra-wide displays.
- 🚀 **Next.js App Router:** Server-rendered performance with optimal SEO metadata and fast page loads.

---

## 🚀 Quickstart

### 1. Clone the repository
```bash
git clone https://github.com/your-username/monochrome-portfolio.git
cd monochrome-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ How to Customize

All your portfolio content lives in **`lib/portfolio-data.ts`**. Simply open that file and update:

```ts
export const ABOUT_ME = {
  name: "Your Name",
  title: "Your Title / Focus",
  location: "Your Location",
  email: "your.email@example.com",
  description: [
    "Your bio line 1...",
    "Your bio line 2..."
  ]
};

export const SOCIAL_LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  twitter: "https://x.com/your-username",
  // ...
};

export const PROJECTS = [
  // Add your projects, metrics, and tech stacks here
];
```

Save the file and your portfolio updates instantly!

---

## 🚢 One-Click Deployment

Deploy your portfolio to **Vercel** in seconds:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to **Netlify**:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to fork, customize, and use it for your own portfolio!
