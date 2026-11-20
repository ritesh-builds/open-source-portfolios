"use client";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Code2, Terminal, ExternalLink, Sparkles } from "lucide-react";
import { ABOUT_ME, SOCIAL_LINKS, LEETCODE_STATS, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";

const skillGroups = [
  { label: "Languages", items: SKILLS.languages },
  { label: "Frontend", items: SKILLS.frontend },
  { label: "Backend", items: SKILLS.backend },
  { label: "Databases", items: SKILLS.databases },
  { label: "Cloud & DevOps", items: SKILLS.cloudDevOps },
  { label: "Tools", items: SKILLS.tools }
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  return (
    <Reveal className="project-card" delay={index * 0.06}>
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <span className={`project-status status-${project.statusTone}`}><i />{project.status}</span>
      </div>
      <div className="project-title-row">
        <div><h3>{project.name}</h3><p className="project-metrics">{project.metrics}</p></div>
        <span className="project-index">{project.id}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-highlights">
        {project.highlights.map((item) => (
          <div className="highlight-cell" key={item.label}>
            <strong>{item.value}</strong><span>{item.unit}</span><small>{item.label}</small>
          </div>
        ))}
      </div>
      <div className="engineering-notes">
        <div className="engineering-heading"><Terminal size={13} /> ENGINEERING HIGHLIGHTS</div>
        <ul>{project.engineering.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="project-card-bottom">
        <div className="tech-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer">Source code <Github size={14} /></a>
          {project.link && <a href={project.link} target="_blank" rel="noreferrer">Live website <ExternalLink size={14} /></a>}
        </div>
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <main>
      <section className="hero shell" id="home">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="availability-dot" /> SOFTWARE DEVELOPER <b>•</b> KARNAL, INDIA</p>
            <p className="hero-hello">HI, I’M</p>
            <h1><span className="name-highlight">{ABOUT_ME.name.split(" ")[0]}</span><br />{ABOUT_ME.name.split(" ").slice(1).join(" ")} <span className="name-arrow">↗</span></h1>
            <p className="hero-role">Backend-focused developer <span>building scalable systems.</span></p>
            <p className="hero-summary">{ABOUT_ME.description[1]}</p>
            <div className="hero-buttons">
              <Link href="#projects" className="button-primary">View projects <ArrowUpRight size={15} /></Link>
              <a href={`mailto:${ABOUT_ME.email}`} className="button-secondary">Get in touch <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="portrait-area" aria-label="Profile photo placeholder">
            <div className="portrait-top-note">FULL-STACK<br />DEVELOPER</div>
            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <span className="portrait-plus">+</span>
                <span className="portrait-initial">R<span>.</span></span>
                <span className="portrait-hint">YOUR PHOTO GOES HERE</span>
              </div>
            </div>
            <div className="portrait-side-label">DESIGN<br />BUILD<br />REPEAT <span>↘</span></div>
            <div className="portrait-outline">R<span>.</span></div>
            <div className="portrait-caption">PROFILE / 01</div>
          </div>
        </div>
        <div className="hero-bottomline">
          <span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span>
          <span>BACKEND DEVELOPMENT · DISTRIBUTED SYSTEMS · SYSTEM DESIGN</span>
        </div>
      </section>

      <section className="quick-stats shell" aria-label="Portfolio highlights">
        <div><span className="stat-icon"><Code2 size={16} /></span><strong>{LEETCODE_STATS.totalSolved}+</strong><small>Problems solved</small></div>
        <div><span className="stat-icon"><Github size={16} /></span><strong>{USER_GITHUB_LABEL}</strong><small>GitHub profile</small></div>
        <div><span className="stat-icon">▧</span><strong>B.Tech</strong><small>UIET MDU, Rohtak</small></div>
        <div><span className="stat-icon">◎</span><strong>2024—28</strong><small>Currently studying</small></div>
      </section>

      <section className="featured-section shell section-pad" id="projects">
        <Reveal className="section-heading">
          <div><p className="section-label">01 / SELECTED WORK</p><h2>Featured<br /><em>projects.</em></h2></div>
          <p className="section-intro">A few things I’ve built, with the engineering decisions, technical details and measurable outcomes behind each one.</p>
        </Reveal>
        <div className="projects-list">{PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </section>

      <section className="journey-section shell section-pad" id="experience">
        <Reveal className="section-heading">
          <div><p className="section-label">02 / THE JOURNEY</p><h2>Learning by<br /><em>building.</em></h2></div>
          <p className="section-intro">My journey so far — computer science fundamentals alongside hands-on product development and backend engineering.</p>
        </Reveal>
        <div className="journey-grid">
          <div><p className="subsection-label">EXPERIENCE</p>{EXPERIENCE.map((item) => <Reveal className="journey-card" key={item.role}><div className="journey-meta">{item.period}<span>{item.location}</span></div><h3>{item.role}</h3><a href={item.companyLink} target="_blank" rel="noreferrer">{item.company} <ArrowUpRight size={13} /></a><p>{item.description}</p><div className="tech-stack">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
          <div><p className="subsection-label">EDUCATION</p>{EDUCATION.map((item) => <Reveal className="journey-card" key={item.degree}><div className="journey-meta">{item.period}</div><h3>{item.degree}</h3><a href={item.institutionLink} target="_blank" rel="noreferrer">{item.institution} <ArrowUpRight size={13} /></a><p>Core areas: {item.score}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="skills-section shell section-pad" id="skills">
        <Reveal className="section-heading">
          <div><p className="section-label">03 / TOOLKIT</p><h2>Things I<br /><em>work with.</em></h2></div>
          <p className="section-intro">A practical toolkit across frontend, backend, databases, infrastructure and developer tooling.</p>
        </Reveal>
        <div className="skills-grid">{skillGroups.map((group, index) => <Reveal className="skill-card" key={group.label}><span>0{index + 1} /</span><h3>{group.label}</h3><div className="tech-stack">{group.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div>
      </section>

      <section className="leetcode-section shell section-pad" id="leetcode">
        <Reveal className="leetcode-panel">
          <div className="leetcode-intro"><p className="section-label">04 / PROBLEM SOLVING</p><h2>Keep learning.<br /><em>Keep solving.</em></h2><p>Sharpening problem-solving skills through data structures and algorithms.</p><a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer">View LeetCode <ArrowUpRight size={14} /></a></div>
          <div className="leetcode-score"><strong>{LEETCODE_STATS.totalSolved}</strong><span>problems solved</span><small>Rank {LEETCODE_STATS.ranking}</small>
            {([["Easy", LEETCODE_STATS.easySolved, LEETCODE_STATS.totalEasy], ["Medium", LEETCODE_STATS.mediumSolved, LEETCODE_STATS.totalMedium], ["Hard", LEETCODE_STATS.hardSolved, LEETCODE_STATS.totalHard]] as const).map(([label, solved, total]) => <div className="difficulty" key={label}><div><span>{label}</span><b>{solved} / {total}</b></div><i><u style={{ width: `${solved / total * 100}%` }} /></i></div>)}
          </div>
          <div className="recent-list"><p className="subsection-label">RECENT ACCEPTED SUBMISSIONS</p>{LEETCODE_STATS.recentSubmissions.map((item) => <div key={item.title}><span>{item.title}</span><b>{item.statusDisplay}</b></div>)}</div>
        </Reveal>
      </section>

      <section className="about-section shell section-pad" id="about">
        <Reveal className="about-panel"><div><p className="section-label">05 / A LITTLE ABOUT ME</p><h2>Curious mind.<br /><em>Builder mindset.</em></h2></div><div>{ABOUT_ME.description.map((line, index) => <p key={index}>{line}</p>)}<p className="about-contact">{ABOUT_ME.location} · {ABOUT_ME.email}</p></div></Reveal>
      </section>

      <section className="contact-section shell" id="contact">
        <Reveal className="contact-panel"><div className="contact-label">06 / OPEN TO OPPORTUNITIES <Sparkles size={15} /></div><h2>Let’s make<br />something matter<span>.</span></h2><div className="contact-bottom"><p>Interested in backend engineering, distributed systems, internships or building something together? Let’s talk.</p><a href={`mailto:${ABOUT_ME.email}`}>{ABOUT_ME.email} <ArrowUpRight size={16} /></a></div></Reveal>
      </section>
      <footer className="footer shell"><Link href="#home" className="footer-logo">R<span>.</span></Link><p>Designed with intent. Built with curiosity.</p><div className="footer-socials"><a href={SOCIAL_LINKS.github} aria-label="GitHub"><Github size={16} /></a><a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a><a href={`mailto:${ABOUT_ME.email}`} aria-label="Email"><Mail size={16} /></a></div><span>© {new Date().getFullYear()} {ABOUT_ME.name}</span></footer>
    </main>
  );
}
const USER_GITHUB_LABEL = "ritesh-builds";
