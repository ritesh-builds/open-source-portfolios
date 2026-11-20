"use client";

import type { Variants } from "framer-motion";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  Code2,
  Sparkles,
  Send,
  MapPin,
} from "lucide-react";
import { useTheme } from "next-themes";
import { site, projects, experience, education, skillGroups, stats, principles } from "@/lib/site-data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}


function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label="Toggle colour theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="icon-button">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}

function ProjectVisual({ visual }: { visual: string }) {
  return (
    <div className={`project-visual ${visual}`}>
      <div className="visual-top"><span className="visual-dot" /><span /><span /></div>
      {visual === "journal" && <div className="journal-ui"><div className="mock-label">YOUR SPACE / 09:41</div><div className="mock-title">A little space<br />for your thoughts.</div><div className="mock-line w-3/4" /><div className="mock-line w-1/2" /><div className="mock-entry"><span>MONDAY, 12 MAY</span><b>Today felt different...</b><i /></div></div>}
      {visual === "store" && <div className="store-ui"><div className="store-heading">FORM / FUNCTION</div><div className="shoe-shape"><span /></div><div className="store-bottom"><b>Everyday, refined.</b><span>EXPLORE COLLECTION ↗</span></div></div>}
      {visual === "movie" && <div className="movie-ui"><div className="movie-heading">Find your next<br /><em>favourite story.</em></div><div className="poster-row"><span /><span /><span /></div><div className="movie-caption">CURATED FOR YOUR NEXT MOVIE NIGHT</div></div>}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nav = ["Work", "Experience", "About", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu}>RK<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <a href={site.resume} className="resume-link" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={13} /></a>
          <ThemeToggle />
          <button className="icon-button mobile-menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav>}
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow"><span className="status-pulse" /> {site.availability}</motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>HELLO, I&apos;M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }}>Ritesh<br /><span>Kumar.</span></motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>{site.headline} <span>{site.intro}</span></motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={15} /></a>
              <a className="text-link" href="#contact">Let&apos;s talk  <span>↗</span></a>
            </motion.div>
            <div className="hero-meta"><span><MapPin size={13} /> {site.location}</span><span>SCROLL TO EXPLORE <ArrowDown size={12} /></span></div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .25, duration: 1 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-monogram">R<span>K</span></div>
            <div className="art-caption"><span>INDEPENDENT DEVELOPER</span><b>Curiosity → Craft</b></div>
            <div className="art-index">01 / 04</div>
          </motion.div>
        </div>
        <div className="marquee"><div className="marquee-track">{Array.from({ length: 4 }).map((_, i) => <span key={i}>DESIGN MINDED DEVELOPMENT <i>✳</i> BUILDING FOR THE WEB <i>✳</i> ALWAYS LEARNING <i>✳</i></span>)}</div></div>
      </section>

      <section id="work" className="section-shell section-block">
        <Reveal className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>Things I’ve <em>built.</em></h2></div><p className="section-aside">A selection of projects where I turn ideas into useful, working software.</p></Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} className="project-row" delay={index * .08}>
              <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a></div>
              <ProjectVisual visual={project.visual} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell section-block">
        <Reveal className="section-heading"><div><p className="eyebrow">THE PATH / 02</p><h2>Experience & <em>education.</em></h2></div><p className="section-aside">Learning by building, experimenting, and solving problems one project at a time.</p></Reveal>
        <div className="timeline">
          {experience.map((item) => <Reveal key={item.title} className="timeline-item"><div className="timeline-date">{item.period}</div><div className="timeline-content"><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p><div className="tag-list">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div></Reveal>)}
          {education.map((item) => <Reveal key={item.title} className="timeline-item"><div className="timeline-date">{item.period}</div><div className="timeline-content"><p className="eyebrow">EDUCATION</p><h3>{item.title}</h3><p className="muted">{item.school}</p><p>{item.description}</p></div></Reveal>)}
        </div>
      </section>

      <section className="section-shell section-block">
        <Reveal className="section-heading"><div><p className="eyebrow">A LITTLE PROGRESS / 03</p><h2>Always in <em>motion.</em></h2></div><p className="section-aside">A snapshot of what I enjoy doing and the tools I use to bring ideas to life.</p></Reveal>
        <div className="stats-grid">{stats.map((stat, i) => <Reveal key={stat.label} className="stat-card" delay={i * .06}><span>0{i + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></Reveal>)}</div>
        <Reveal className="github-panel"><div><p className="eyebrow">OPEN SOURCE / GITHUB</p><h3>Consistency over intensity.</h3><p>Small commits, steady progress, and a habit of learning in public.</p><a href={site.socials[0].href} target="_blank" rel="noreferrer" className="text-link">Explore GitHub <ArrowUpRight size={14} /></a></div><div className="contribution-grid" aria-label="Decorative contribution activity">{Array.from({ length: 91 }).map((_, i) => <span key={i} className={`contribution level-${(i * 7 + Math.floor(i / 9) * 3) % 5}`} />)}</div><p className="github-note">Illustrative activity grid — connect your GitHub data for live contributions.</p></Reveal>
      </section>

      <section className="section-shell section-block">
        <Reveal className="section-heading"><div><p className="eyebrow">MY TOOLKIT / 04</p><h2>Tools of the <em>trade.</em></h2></div><p className="section-aside">A growing toolkit for building across the stack.</p></Reveal>
        <div className="skills-layout">
          <div className="skills-intro"><Code2 size={24} /><h3>Curious by default.<br /><em>Practical by design.</em></h3><p>I enjoy understanding how the pieces fit together — from the interface a person touches to the systems working behind it.</p></div>
          <div className="skill-groups">{skillGroups.map((group, i) => <Reveal key={group.title} className="skill-group" delay={i * .04}><div><span>0{i + 1}</span><h3>{group.title}</h3></div><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div>
        </div>
      </section>

      <section id="about" className="section-shell section-block about-section">
        <Reveal className="section-heading"><div><p className="eyebrow">BEHIND THE CODE / 05</p><h2>A bit <em>about me.</em></h2></div></Reveal>
        <div className="about-grid"><div className="about-statement">I like making<br />the complex feel<br /><em>simple.</em></div><div className="about-copy"><p>I’m Ritesh, a developer from {site.location}. I’m interested in the craft of software — writing maintainable code, creating intuitive interfaces, and understanding the engineering decisions behind a product.</p><p>My current focus is full-stack development, Java and Spring Boot, modern React applications, and strengthening my foundations in data structures and algorithms.</p><div className="principles">{principles.map((p, i) => <div key={p}><span>0{i + 1}</span>{p}</div>)}</div><div className="social-links">{site.socials.map(s => <a href={s.href} key={s.label} target="_blank" rel="noreferrer">{s.label} <ArrowUpRight size={13} /></a>)}</div></div></div>
      </section>

      <section id="contact" className="section-shell section-block contact-section">
        <Reveal className="contact-top"><p className="eyebrow">HAVE A GOOD ONE IN MIND? / 06</p><h2>Let’s make<br /><em>something matter.</em></h2><p>Have an opportunity, an interesting problem, or just want to say hello? My inbox is open.</p><a className="email-pill" href={`mailto:${site.email}`}><Mail size={16} /> {site.email} <ArrowUpRight size={14} /></a></Reveal>
        <Reveal className="contact-form-wrap"><form onSubmit={submitContact}><div className="form-heading"><span>01 — SEND A NOTE</span><Sparkles size={16} /></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What should I call you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Your message<textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about it..." /></label><button className="button button-primary" type="submit">Send message <Send size={14} /></button>{sent && <p className="form-feedback">Your email app should open with the message ready to send.</p>}</form></Reveal>
      </section>

      <footer className="site-footer section-shell"><a href="#top" className="wordmark">RK<span>.</span></a><p>Designed with intention. Built with curiosity.</p><span>© {new Date().getFullYear()} Ritesh Kumar</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
