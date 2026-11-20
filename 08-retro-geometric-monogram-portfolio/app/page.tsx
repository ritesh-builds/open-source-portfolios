import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  const { identity, projects, skills, about } = portfolioData;

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top">
          {identity.brand}<span>.</span>
        </a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <MoveUpRight size={14} />
          </a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-top">
          <span className="eyebrow"><i /> {identity.availability}</span>
          <span className="hero-index">{identity.year}</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">{identity.kicker}</p>
            <h1>
              I turn ideas<br />into <em>digital</em><br />experiences<span className="period">.</span>
            </h1>
            <p className="hero-desc">{identity.description}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href={`mailto:${identity.email}`}>
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-core">
              <span>{identity.brand}</span>
              <small>BUILD / LEARN / REPEAT</small>
            </div>
            <div className="art-note note-top">{`{ curious_by_default }`}</div>
            <div className="art-note note-bottom">
              <Sparkles size={14} /> Always shipping something
            </div>
            <div className="art-cross">✳</div>
          </div>
        </div>
        <div className="hero-foot">
          <span>{identity.location}</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>01 — 04</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="wrap intro-inner">
          <span className="section-tag">01 / THE APPROACH</span>
          <p>
            I like solving real problems with <strong>clean code, considered design</strong> and a willingness to keep figuring things out.
          </p>
          <span className="intro-stamp">
            GOOD<br />WORK<br />TAKES<br />CARE<span>✳</span>
          </span>
        </div>
      </section>

      <section className="work wrap section" id="work">
        <div className="section-head">
          <div>
            <span className="section-tag">02 / SELECTED WORK</span>
            <h2>Things I’ve<br /><em>put together.</em></h2>
          </div>
          <p>A few projects where I’ve explored product thinking, frontend craft and backend engineering.</p>
        </div>
        <div className="project-list">
          {projects.map((p) => (
            <a className="project" href={p.href} target="_blank" rel="noreferrer" key={p.n}>
              <div className={`project-visual ${p.cls}`}>
                <span className="project-number">/{p.n}</span>
                <span className="project-mark">{p.mark}</span>
                <span className="visual-caption">SELECTED BUILD <b>↗</b></span>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>{p.type}</span>
                  <span>0{p.n}</span>
                </div>
                <div className="project-title-row">
                  <h3>{p.title}</h3>
                  <span className="round-arrow"><ArrowUpRight size={20} /></span>
                </div>
                <p>{p.desc}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <div>
            <span className="section-tag">03 / A LITTLE ABOUT ME</span>
            <h2>Curious mind.<br /><em>Builder’s hands.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">{about.lead}</p>
            <p>{about.paragraph}</p>
            <div className="about-facts">
              {about.facts.map((f) => (
                <div key={f.num}>
                  <b>{f.num}</b>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stack wrap section" id="stack">
        <div className="stack-head">
          <span className="section-tag">04 / TOOLS I WORK WITH</span>
          <h2>My current<br /><em>toolkit.</em></h2>
          <p>Tools are just tools — but these are the ones I’m using to turn ideas into working software.</p>
        </div>
        <div className="skill-cloud">
          {skills.map((s, i) => (
            <span className={i < 4 ? "skill-primary" : ""} key={s}>
              {s}<sup>{String(i + 1).padStart(2, "0")}</sup>
            </span>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-inner">
          <span className="section-tag">05 / HAVE A GOOD ONE IN MIND?</span>
          <h2>Let’s make<br /><em>something matter.</em></h2>
          <a className="contact-cta" href={`mailto:${identity.email}`}>
            {identity.email} <ArrowUpRight size={22} />
          </a>
          <div className="contact-bottom">
            <span>{identity.availability}</span>
            <div className="socials">
              <a href={identity.socials[0].href} aria-label="GitHub"><Github size={18} /></a>
              <a href={identity.socials[1].href} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${identity.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
            <span>© 2026 {identity.name.toUpperCase()}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
