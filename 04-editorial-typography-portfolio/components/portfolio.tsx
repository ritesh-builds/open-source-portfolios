"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Code2, Github, GraduationCap, Mail, Target, MoveUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

const metricIcons = {
  code: Code2,
  github: Github,
  graduation: GraduationCap,
  target: Target
};

export function Portfolio() {
  return (
    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-slashes">//</span> {siteConfig.role}</p>
          <h1>{siteConfig.headline[0]}<br /><span className="name-highlight">{siteConfig.headline[1]}</span></h1>
          <p className="hero-summary">{siteConfig.summary}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#projects">View projects <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="#contact"><Mail size={17} /> Get in touch</Link>
          </div>
          <p className="hero-location"><span className="status-dot" /> {siteConfig.availability} <span className="location-separator">/</span> {siteConfig.location}</p>
        </div>

        <div className="hero-art" aria-label="Decorative typographic composition">
          <div className="art-lime-block" />
          <div className="art-orbit" />
          <div className="art-monogram">R<span>.</span></div>
          <div className="art-caption"><ArrowUpRight size={19} /><span>FULL-STACK<br />DEVELOPER</span></div>
          <div className="art-words">
            {siteConfig.heroWords.map((word) => <span key={word}>{word}<b>/</b></span>)}
          </div>
          <div className="art-cross">+</div>
          <div className="art-index">PORTFOLIO<br />— 2026</div>
        </div>
      </section>

      <section className="metrics section-shell" aria-label="Portfolio highlights">
        {siteConfig.metrics.map((metric) => {
          const Icon = metricIcons[metric.icon as keyof typeof metricIcons];
          return (
            <div className="metric" key={metric.label}>
              <Icon className="metric-icon" size={27} strokeWidth={1.8} />
              <div><strong>{metric.value}</strong><span>{metric.label}</span></div>
            </div>
          );
        })}
      </section>

      <section className="projects-section section-shell section-space" id="projects">
        <Reveal className="section-heading">
          <div><p className="section-index">/ 01 — SELECTED WORK</p><h2>Featured<br />projects<span className="lime-period">.</span></h2></div>
          <p className="section-intro">A few things I’ve built recently — from web apps to full-stack products.</p>
          <Link className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={17} /></Link>
        </Reveal>
        <div className="project-grid">
          {siteConfig.projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08} className={`project-card project-${project.theme}`}>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${project.name}`}>
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span className="project-open"><ArrowUpRight size={20} /></span>
              </a>
              <div className="project-info">
                <div className="project-meta"><span>{project.number} / {project.category}</span><ArrowUpRight size={17} /></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section section-shell section-space" id="about">
        <Reveal className="about-panel">
          <div className="about-kicker"><span>/ 02</span><span>THE PERSON BEHIND THE PIXELS</span></div>
          <div className="about-content">
            <div><p className="section-index">{siteConfig.about.eyebrow}</p><h2>{siteConfig.about.title}</h2></div>
            <div className="about-copy">
              {siteConfig.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <Link className="text-link" href="#contact">Let’s connect <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="skills-section section-shell section-space" id="skills">
        <Reveal className="section-heading compact-heading">
          <div><p className="section-index">/ 03 — TOOLKIT</p><h2>Things I work<br />with<span className="lime-period">.</span></h2></div>
          <p className="section-intro">A growing toolkit for designing, building and shipping reliable digital experiences.</p>
        </Reveal>
        <div className="skill-grid">
          {siteConfig.skills.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.07} className="skill-card">
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.group}</h3>
              <div className="tag-list">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell section-space" id="contact">
        <Reveal className="contact-panel">
          <div className="contact-topline"><span>/ 04 — SAY HELLO</span><span>{siteConfig.location}</span></div>
          <h2>{siteConfig.contact.title}</h2>
          <div className="contact-bottom">
            <p>{siteConfig.contact.description}</p>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<MoveUpRight size={21} /></a>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer section-shell">
        <Link href="#home" className="brand">{siteConfig.initials}<span>.</span></Link>
        <p>{siteConfig.footerNote}</p>
        <div className="footer-socials">
          {siteConfig.socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.handle}<ArrowUpRight size={14} /></a>)}
        </div>
        <span className="copyright">© {new Date().getFullYear()} {siteConfig.name}</span>
      </footer>
    </main>
  );
}
