"use client";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ArrowRight, Github, Linkedin, Code2, ExternalLink, Terminal, Sparkles } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";
import { MotionIn } from "@/components/motion-in";

function ProjectVisual({ type }: { type: string }) {
  if (type === "journal") return <div className="visual visual-journal"><div className="journal-moon" /><div className="journal-mountain mountain-one" /><div className="journal-mountain mountain-two" /><span className="visual-label">A PLACE TO REFLECT</span></div>;
  if (type === "footwear") return <div className="visual visual-footwear"><div className="shoe-shadow" /><div className="shoe"><span /><i /><b /></div><span className="visual-label">MOVE WITH INTENT</span></div>;
  return <div className="visual visual-portfolio"><div className="mini-browser"><div className="browser-dots"><i /><i /><i /></div><span>PORTFOLIO / 2026</span><strong>Ritesh<span>.</span></strong><div className="mini-highlight" /></div></div>;
}

export function PortfolioPage() {
  return (
    <main className="page-content">
      <section className="intro-section" id="overview">
        <div className="intro-topline"><span><i className="live-dot" /> {portfolio.identity.availability}</span><span>{portfolio.identity.location} <b>·</b> {portfolio.identity.descriptor}</span></div>
        <div className="intro-grid">
          <div className="intro-copy">
            <p className="micro-label">HELLO, WORLD. I'M</p>
            <h1>{portfolio.identity.name}<span className="cursor">_</span></h1>
            <h2>{portfolio.identity.title}<span className="violet-dot">.</span></h2>
            <p className="intro-description">{portfolio.identity.intro}</p>
            <div className="intro-actions">
              <Link className="action-primary" href="#work">Explore my work <ArrowUpRight size={16} /></Link>
              <Link className="action-secondary" href="#contact">Let’s talk <ArrowRight size={16} /></Link>
            </div>
            <div className="social-row">{portfolio.identity.socials.map((social, i) => <a href={social.url} key={social.label} target="_blank" rel="noreferrer">{social.label}{i === 0 ? <Github size={14} /> : i === 1 ? <Linkedin size={14} /> : <ExternalLink size={13} />}</a>)}</div>
          </div>
          <div className="code-stage">
            <div className="stage-grid" />
            <div className="stage-orbit orbit-a" /><div className="stage-orbit orbit-b" />
            <div className="stage-core"><span>R</span><i>.</i></div>
            <div className="stage-side-note">DESIGN<br />ENGINEER<br />REPEAT<span>↘</span></div>
            <div className="code-window">
              <div className="code-title"><span><i /><i /><i /></span>{portfolio.codeCard.filename}<Terminal size={13} /></div>
              <div className="code-lines">{portfolio.codeCard.lines.map((line) => <div key={line.number} className={`code-line tone-${line.tone}`}><small>{line.number}</small><code>{line.code}</code></div>)}</div>
            </div>
            <div className="stage-coordinate">29°41' N<br />76°59' E</div>
            <div className="stage-cross">+</div>
          </div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="stats-strip" aria-label="Highlights">
        {portfolio.stats.map((stat, i) => <div className="stat" key={stat.label}><small>0{i + 1}</small><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </section>

      <section className="content-section" id="work">
        <MotionIn className="section-title-row">
          <div><p className="section-kicker">01 / SELECTED WORK</p><h2>Things I’ve<br /><em>put into the world.</em></h2></div>
          <p className="section-aside">A selection of projects, experiments and practical things built while learning how software works end to end.</p>
        </MotionIn>
        <div className="work-grid">
          {portfolio.projects.map((project, index) => (
            <MotionIn key={project.id} delay={index * .07} className={`work-card ${project.featured ? "is-featured" : ""}`}>
              <a href={project.link} target="_blank" rel="noreferrer" className="work-visual-link" aria-label={`Open ${project.title}`}>
                <ProjectVisual type={project.visual} />
                <span className="work-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <div className="work-details">
                <div className="work-meta"><span>{project.id} / {project.kind}</span><span className="work-status">{project.status}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </MotionIn>
          ))}
        </div>
      </section>

      <section className="content-section experience-section" id="experience">
        <MotionIn className="section-title-row">
          <div><p className="section-kicker">02 / THE JOURNEY</p><h2>Learning by<br /><em>doing the work.</em></h2></div>
          <p className="section-aside">The path so far — formal education alongside hands-on development and a lot of curiosity.</p>
        </MotionIn>
        <div className="timeline">
          {portfolio.experience.map((item, index) => <MotionIn className="timeline-item" key={item.role} delay={index * .08}>
            <div className="timeline-period">{item.period}</div><div className="timeline-marker"><i /></div>
            <div className="timeline-copy"><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.detail}</p></div>
          </MotionIn>)}
        </div>
      </section>

      <section className="content-section toolkit-section" id="toolkit">
        <MotionIn className="section-title-row">
          <div><p className="section-kicker">03 / TOOLKIT</p><h2>Tools of<br /><em>the trade.</em></h2></div>
          <p className="section-aside">Technologies I use to turn ideas into reliable, useful and considered digital experiences.</p>
        </MotionIn>
        <div className="toolkit-grid">
          {portfolio.toolkit.map((group, index) => <MotionIn className="toolkit-card" key={group.category} delay={index * .08}>
            <span className="toolkit-index">0{index + 1} /</span><h3>{group.category}</h3><p>{group.description}</p>
            <div className="tool-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </MotionIn>)}
        </div>
      </section>

      <section className="contact-wrap" id="contact">
        <MotionIn className="contact-panel">
          <div className="contact-head"><span>04 / OPEN CHANNEL</span><Sparkles size={17} /></div>
          <h2>{portfolio.contact.headline.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2>
          <div className="contact-foot"><p>{portfolio.contact.message}</p><a href={`mailto:${portfolio.identity.email}`}>{portfolio.contact.cta} <ArrowUpRight size={17} /></a></div>
        </MotionIn>
      </section>

      <footer className="footer">
        <Link href="#overview" className="footer-brand">{portfolio.identity.initials}<i>.</i></Link>
        <p>{portfolio.footer}</p>
        <span>© {new Date().getFullYear()} {portfolio.identity.name}</span>
      </footer>
    </main>
  );
}
