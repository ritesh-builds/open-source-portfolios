# 🖥️ Master Engineering Portfolio Template

An advanced engineering portfolio featuring an **Interactive Terminal Emulator**, **Architecture Flow Diagrams**, **k6 Benchmark Reports**, and **Spotlight Project Cards**. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Standout Features

- 💻 **Interactive CLI Terminal:** Fully functional in-browser terminal supporting commands like `whoami`, `projects`, `benchmarks`, `skills`, `contact`, and `clear`.
- 📐 **Architecture Flow Stage:** Step-by-step visual pipeline explaining distributed system nodes, caches, and databases.
- 📈 **Engineering Deep Dives:** Detailed metric boxes, key architectural takeaways, and benchmark verification stats.
- ⚡ **Zero-Config Customization:** All copy, terminal outputs, and system diagrams are configured from `lib/portfolio-data.ts`.
- 🎨 **Spotlight Cards:** Dynamic cursor-following lighting effects with responsive dark mode aesthetics.

---

## 🚀 Quickstart

### 1. Clone & Install
```bash
git clone https://github.com/your-username/master-portfolio.git
cd master-portfolio
npm install
```

### 2. Run Local Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see your portfolio running locally.

---

## 🛠️ How to Customize

Everything is driven by **`lib/portfolio-data.ts`**:

1. **Identity & Bio:** Update `ABOUT_ME` with your name, role headline, and coordinates.
2. **Flagship Projects:** Add your projects under `PROJECTS` including `architecture` steps, `takeaways`, and `metricBoxes`.
3. **Interactive Terminal:** Update `TERMINAL_COMMANDS` to customize responses for `whoami`, `projects`, `benchmarks`, and `contact`.
4. **Skills & Socials:** Update `SKILLS` and `SOCIAL_LINKS` with your profiles.

---

## 🚢 Deployment

Easily deploy to **Vercel** or **Netlify**:

```bash
# Using Vercel CLI
npx vercel
```

Or connect your GitHub repository directly in the [Vercel Dashboard](https://vercel.com).

---

## 📄 License

MIT © [Your Name](https://github.com/your-username). Free to use for personal or commercial portfolios.
