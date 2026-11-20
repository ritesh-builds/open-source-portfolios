# 📖 Editorial Portfolio — Typography-Led Developer Template

A thoughtful, editorial-style engineering portfolio emphasizing typography, high readability, structured case studies, and subtle micro-animations.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Key Highlights

- 🖋️ **Editorial Typography:** Distinctive serif & sans-serif pairings creating a refined visual narrative.
- 📋 **Structured Case Studies:** Project entries with category kickers, detailed system overviews, and stack badges.
- 🎯 **Hero Word Carousel:** Minimalist keyword rotator highlighting engineering philosophies.
- ⚡ **Single File Config:** Update `lib/site-data.ts` to customize the entire portfolio.
- 🌓 **Warm Theme Palette:** Calming paper/ink tones with dark mode support.

---

## 🚀 Quick Setup

```bash
git clone https://github.com/your-username/editorial-portfolio.git
cd editorial-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

---

## 🛠️ Customization

Edit **`lib/site-data.ts`**:

```ts
export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  headline: ["Hi, I’m", "Your Name"],
  summary: "Your summary sentence...",
  location: "Your Location",
  email: "your.email@example.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username", handle: "@your-github" }
  ],
  projects: [
    // Your projects here
  ]
};
```

---

## 📄 License

MIT © [Your Name](https://github.com/your-username).
