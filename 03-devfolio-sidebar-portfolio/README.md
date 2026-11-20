# 🗂️ DevFolio 03 — Minimalist Developer Portfolio Template

A clean, distraction-free developer portfolio with a fixed sidebar navigation, live code card preview, selected work showcase, and modern technical toolkit grid.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- 📑 **Sidebar & Layout:** Persistent sidebar navigation with active section tracking and quick socials.
- 💻 **Syntax Code Card:** Dynamic TypeScript developer declaration card in the hero section.
- 🗃️ **Work Gallery:** Visual project cards with categorized tags, status indicators, and repository links.
- 🛠️ **Grouped Toolkit:** Clean categorical breakdown for Frontend, Backend, and Data/DevOps tools.
- ⚡ **Single Configuration Object:** All content is exported from `lib/portfolio-data.ts`.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/devfolio-03.git
cd devfolio-03

# Install packages
npm install

# Start the dev server
npm run dev
```

---

## 🛠️ Personalization

Open **`lib/portfolio-data.ts`** to update:

```ts
export const portfolio = {
  identity: {
    name: "Your Name",
    title: "Software Engineer",
    descriptor: "Full-stack developer",
    location: "Your City, Country",
    email: "your.email@example.com",
    intro: "Your personal elevator pitch...",
    socials: [
      { label: "GitHub", url: "https://github.com/your-username" },
      { label: "LinkedIn", url: "https://linkedin.com/in/your-username" }
    ]
  },
  // Update projects, experience, and toolkit items
};
```

---

## 📄 License

MIT License. Feel free to use this template for your personal portfolio!
