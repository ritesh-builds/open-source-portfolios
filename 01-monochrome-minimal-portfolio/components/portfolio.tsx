"use client";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowDown, Github, Linkedin, Mail, Code2, GraduationCap, Activity, ExternalLink, Layers3, Terminal, Sparkles } from "lucide-react";
import { ABOUT_ME, SOCIAL_LINKS, LEETCODE_STATS, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";

const skillGroups = [
  {label:"Languages",items:SKILLS.languages},
  {label:"Frontend",items:SKILLS.frontend},
  {label:"Backend",items:SKILLS.backend},
  {label:"Databases",items:SKILLS.databases},
  {label:"Cloud & DevOps",items:SKILLS.cloudDevOps},
  {label:"Tools",items:SKILLS.tools}
];

function ProjectCard({project,index}:{project:(typeof PROJECTS)[number];index:number}) {
  return <Reveal className="project-card" delay={index*.08}>
    <div className="project-topline"><span>{project.category}</span><span className={`status status-${project.statusTone}`}><i/>{project.status}</span></div>
    <div className="project-heading"><div><h3>{project.name}</h3><p className="project-metric-line">{project.metrics}</p></div><span className="project-number">{project.id}</span></div>
    <p className="project-description">{project.description}</p>
    <div className="highlight-grid">{project.highlights.map(item=><div className="highlight" key={item.label}><strong>{item.value}</strong><span>{item.unit}</span><small>{item.label}</small></div>)}</div>
    <div className="engineering-block"><p className="engineering-label"><Terminal size={13}/> ENGINEERING HIGHLIGHTS</p><ul>{project.engineering.map(item=><li key={item}>{item}</li>)}</ul></div>
    <div className="project-bottom"><div className="tech-list">{project.tech.map(tech=><span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Source code <Github size={15}/></a>{project.link && <a href={project.link} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}</div></div>
  </Reveal>;
}

export function Portfolio() {
 return <main>
  <section className="hero page-shell" id="home">
    <div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> {ABOUT_ME.location}, India <b>·</b> Backend & Distributed Systems</p>
      <p className="intro-label">HELLO, I'M</p><h1>{ABOUT_ME.name.split(" ")[0]}<br/><span>{ABOUT_ME.name.split(" ").slice(1).join(" ")}</span></h1>
      <h2>{ABOUT_ME.title}<i>.</i></h2><p className="hero-description">{ABOUT_ME.description[1]}</p>
      <div className="hero-actions"><Link href="#projects" className="button button-primary">Explore projects <ArrowUpRight size={16}/></Link><a href={`mailto:${ABOUT_ME.email}`} className="button button-secondary"><Mail size={16}/> Get in touch</a></div>
      <div className="social-links"><a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer"><Code2 size={17}/> LeetCode</a><a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer">𝕏</a></div>
    </div>
    <div className="hero-visual"><div className="visual-grid"/><div className="visual-glow"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-monogram">R<span>.</span></div>
      <div className="terminal-card"><div className="terminal-head"><span><i/><i/><i/></span><small>developer.ts</small><Terminal size={13}/></div><div className="terminal-code"><p><b>const</b> developer = {"{"}</p><p><em>name:</em> <strong>"Ritesh Kumar"</strong>,</p><p><em>focus:</em> <strong>"Backend & Systems"</strong>,</p><p><em>build:</em> <strong>"Scalable products"</strong></p><p>{"}"}</p></div></div>
      <span className="visual-note">BUILD / MEASURE / IMPROVE</span><span className="visual-index">PORTFOLIO — 2026</span>
    </div>
  </section>

  <section className="stats page-shell" aria-label="Developer statistics">
    <div className="stat"><Code2/><div><strong>{LEETCODE_STATS.totalSolved}</strong><span>LeetCode solved</span></div></div>
    <div className="stat"><Github/><div><strong>{USER_GITHUB_LABEL}</strong><span>GitHub profile</span></div></div>
    <div className="stat"><GraduationCap/><div><strong>B.Tech CSE</strong><span>UIET MDU, Rohtak</span></div></div>
    <div className="stat"><Activity/><div><strong>{LEETCODE_STATS.ranking}</strong><span>LeetCode ranking</span></div></div>
  </section>

  <section className="projects-section page-shell section-space" id="projects">
    <Reveal className="section-heading"><div><p className="section-kicker">01 / SELECTED ENGINEERING WORK</p><h2>Projects with<br/><em>proof behind them.</em></h2></div><p className="section-intro">Not just screenshots. A closer look at the systems, decisions, benchmarks and technologies behind the work.</p></Reveal>
    <div className="projects-list">{PROJECTS.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div>
  </section>

  <section className="experience-section page-shell section-space" id="experience">
    <Reveal className="section-heading"><div><p className="section-kicker">02 / EXPERIENCE & EDUCATION</p><h2>Learning by<br/><em>building things.</em></h2></div><p className="section-intro">My engineering journey so far — formal learning paired with hands-on projects and experimentation.</p></Reveal>
    <div className="journey-grid"><div className="journey-column"><p className="column-label">EXPERIENCE</p>{EXPERIENCE.map(item=><Reveal className="journey-card" key={item.role}><div className="journey-meta">{item.period}<span>{item.location}</span></div><h3>{item.role}</h3><a href={item.companyLink} target="_blank" rel="noreferrer">{item.company} <ArrowUpRight size={13}/></a><p>{item.description}</p><div className="tech-list">{item.skills.map(skill=><span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
    <div className="journey-column"><p className="column-label">EDUCATION</p>{EDUCATION.map(item=><Reveal className="journey-card education-card" key={item.degree}><div className="journey-meta">{item.period}</div><h3>{item.degree}</h3><a href={item.institutionLink} target="_blank" rel="noreferrer">{item.institution} <ArrowUpRight size={13}/></a><p>Focus areas: {item.score}</p></Reveal>)}</div></div>
  </section>

  <section className="skills-section page-shell section-space" id="skills">
    <Reveal className="section-heading"><div><p className="section-kicker">03 / TECHNICAL TOOLKIT</p><h2>My tools for<br/><em>the job.</em></h2></div><p className="section-intro">A practical stack across frontend, backend, data, infrastructure and developer tooling.</p></Reveal>
    <div className="skills-grid">{skillGroups.map((group,index)=><Reveal className="skill-card" key={group.label} delay={index*.04}><span className="skill-index">0{index+1}</span><h3>{group.label}</h3><div className="tech-list">{group.items.map(item=><span key={item}>{item}</span>)}</div></Reveal>)}</div>
  </section>

  <section className="leetcode-section page-shell section-space" id="leetcode">
    <Reveal className="leetcode-panel"><div className="leetcode-copy"><p className="section-kicker">04 / PROBLEM SOLVING</p><h2>Consistency over<br/><em>quick wins.</em></h2><p>Keeping the fundamentals sharp through data structures and algorithm practice.</p><a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer">View LeetCode profile <ArrowUpRight size={15}/></a></div>
      <div className="leetcode-stats"><div className="solved-total"><strong>{LEETCODE_STATS.totalSolved}</strong><span>problems solved</span><small>Rank {LEETCODE_STATS.ranking}</small></div><div className="difficulty-list"><div><span>Easy</span><b>{LEETCODE_STATS.easySolved} / {LEETCODE_STATS.totalEasy}</b><i><u style={{width:`${LEETCODE_STATS.easySolved/LEETCODE_STATS.totalEasy*100}%`}}/></i></div><div><span>Medium</span><b>{LEETCODE_STATS.mediumSolved} / {LEETCODE_STATS.totalMedium}</b><i><u style={{width:`${LEETCODE_STATS.mediumSolved/LEETCODE_STATS.totalMedium*100}%`}}/></i></div><div><span>Hard</span><b>{LEETCODE_STATS.hardSolved} / {LEETCODE_STATS.totalHard}</b><i><u style={{width:`${LEETCODE_STATS.hardSolved/LEETCODE_STATS.totalHard*100}%`}}/></i></div></div></div>
      <div className="recent-submissions"><p className="column-label">RECENT ACCEPTED SUBMISSIONS</p>{LEETCODE_STATS.recentSubmissions.map(item=><div key={item.title}><span>{item.title}</span><b>{item.statusDisplay}</b></div>)}</div>
    </Reveal>
  </section>

  <section className="about-section page-shell section-space" id="about">
    <Reveal className="about-panel"><div><p className="section-kicker">05 / A LITTLE ABOUT ME</p><h2>Building systems.<br/><em>Staying curious.</em></h2></div><div className="about-copy">{ABOUT_ME.description.map((line,index)=><p key={index}>{line}</p>)}<p className="about-location">Based in {ABOUT_ME.location} · {ABOUT_ME.email}</p></div></Reveal>
  </section>

  <section className="contact-section page-shell" id="contact"><Reveal className="contact-panel"><div className="contact-top"><span>06 / OPEN TO OPPORTUNITIES</span><Sparkles size={17}/></div><h2>Let’s build<br/>something useful<span>.</span></h2><div className="contact-bottom"><p>Interested in backend engineering, distributed systems, internships or building something together? Drop me a message.</p><a href={`mailto:${ABOUT_ME.email}`}>{ABOUT_ME.email} <ArrowUpRight size={18}/></a></div></Reveal></section>
  <footer className="footer page-shell"><Link href="#home" className="brand-mark">R<span>.</span></Link><p>Designed with intention. Built with curiosity.</p><span>© {new Date().getFullYear()} {ABOUT_ME.name}</span></footer>
 </main>;
}

const USER_GITHUB_LABEL = "ritesh-builds";
