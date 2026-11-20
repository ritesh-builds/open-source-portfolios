"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ExternalLink,
  Sparkles,
  Code2
} from "lucide-react";
import { about, links, stats, projects, skills, experience, education } from "@/lib/data";
import { Reveal } from "./reveal";

function Project({
  project,
  index
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal
      className="project-card"
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.05}
    >
      <div className="project-top">
        <span>{project.category}</span>
        <b className={index === 0 ? "verified" : index === 2 ? "live" : "ai"}>
          <i />
          {project.status}
        </b>
      </div>
      <div className="project-title">
        <div>
          <h3>{project.name}</h3>
          <p>{project.metrics}</p>
        </div>
        <small>{project.id}</small>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="highlights">
        {project.highlights.map(([value, unit, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{unit}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="engineering">
        <label>
          <Terminal size={13} /> ENGINEERING HIGHLIGHTS
        </label>
        <ul>
          {project.engineering.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="project-foot">
        <div className="tags">
          {project.tech.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            Source code <Github size={14} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  const brandText = about.initials || about.name.charAt(0);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> {about.title.toUpperCase()} <b>•</b> {about.location.toUpperCase()}
          </p>
          <p className="hello">HI, I’M</p>
          <h1>
            <mark>{about.firstName}</mark>
            <br />
            {about.lastName} <span>↗</span>
          </h1>
          <h2>
            {about.title} <em>building scalable systems.</em>
          </h2>
          <p className="hero-text">{about.intro}</p>
          <div className="hero-actions">
            <Link className="primary" href="#projects">
              View projects <ArrowUpRight size={15} />
            </Link>
            <a className="secondary" href={`mailto:${about.email}`}>
              Get in touch <ArrowRight size={14} />
            </a>
          </div>
          <div className="socials">
            <a href={links.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href={links.leetcode} target="_blank" rel="noreferrer">
              <Code2 /> LeetCode
            </a>
          </div>
        </div>

        <Reveal className="portrait-wrap" direction="right">
          <div className="portrait-note">
            FULL-STACK<br />DEVELOPER
          </div>
          <div className="portrait-frame">
            <div className="photo-placeholder">
              <span>+</span>
              <b>{brandText}<span>.</span></b>
              <small>ADD YOUR PHOTO HERE</small>
            </div>
          </div>
          <div className="portrait-outline">
            {brandText}<span>.</span>
          </div>
          <div className="portrait-caption">PROFILE / 01</div>
        </Reveal>

        <div className="hero-bottom">
          <span>
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </span>
          <span>BACKEND DEVELOPMENT · DISTRIBUTED SYSTEMS · SYSTEM DESIGN</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats wrap">
        <div>
          <strong>{stats.solved}+</strong>
          <small>LeetCode solved</small>
        </div>
        <div>
          <strong>{stats.githubUsername}</strong>
          <small>GitHub profile</small>
        </div>
        <div>
          <strong>{stats.degree}</strong>
          <small>{stats.institution}</small>
        </div>
        <div>
          <strong>{stats.period}</strong>
          <small>Education</small>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section wrap" id="projects">
        <Reveal className="section-head" direction="left">
          <div>
            <label>01 / SELECTED WORK</label>
            <h2>
              Featured <em>projects.</em>
            </h2>
          </div>
          <p>Projects with real engineering details, decisions, technology choices and measurable outcomes.</p>
        </Reveal>
        <div className="project-list">
          {projects.map((p, i) => (
            <Project key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Experience / Journey Section */}
      <section className="section wrap" id="experience">
        <Reveal className="section-head" direction="right">
          <div>
            <label>02 / THE JOURNEY</label>
            <h2>
              Learning by <em>building.</em>
            </h2>
          </div>
          <p>Computer science fundamentals alongside hands-on product development and backend engineering.</p>
        </Reveal>
        <div className="journey">
          <Reveal className="journey-card" direction="left">
            <label>EXPERIENCE · {experience.period}</label>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.description}</p>
            <div className="tags">
              {experience.stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="journey-card" direction="right">
            <label>EDUCATION · {education.period}</label>
            <h3>{education.degree}</h3>
            <h4>{education.institution}</h4>
            <p>Core areas: {education.focus}</p>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section wrap" id="skills">
        <Reveal className="section-head" direction="left">
          <div>
            <label>03 / TOOLKIT</label>
            <h2>
              My technical <em>stack.</em>
            </h2>
          </div>
          <p>A practical toolkit across frontend, backend, databases, infrastructure and developer tooling.</p>
        </Reveal>
        <div className="skills">
          {Object.entries(skills).map(([name, items], i) => (
            <Reveal className="skill" key={name} direction={i % 2 ? "right" : "left"} delay={i * 0.04}>
              <small>0{i + 1} /</small>
              <h3>{name}</h3>
              <div className="tags">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section wrap" id="about">
        <Reveal className="about" direction="right">
          <div>
            <label>04 / ABOUT ME</label>
            <h2>
              Curious mind.<br /><em>Builder mindset.</em>
            </h2>
          </div>
          <div>
            <p>{about.intro}</p>
            <p>{about.description}</p>
            <p className="about-email">
              {about.location} · {about.email}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section className="section wrap" id="contact">
        <Reveal className="contact" direction="left">
          <label>
            05 / OPEN TO OPPORTUNITIES <Sparkles size={14} />
          </label>
          <h2>
            Let’s build<br />something meaningful<span>.</span>
          </h2>
          <div>
            <p>Interested in backend engineering, distributed systems, internships or building something together? Let’s talk.</p>
            <a href={`mailto:${about.email}`}>
              {about.email} <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="footer wrap">
        <Link className="brand" href="#home">
          {brandText}<span>.</span>
        </Link>
        <small>Designed with curiosity · © {new Date().getFullYear()} {about.name}</small>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href={`mailto:${about.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
      </footer>
    </main>
  );
}
