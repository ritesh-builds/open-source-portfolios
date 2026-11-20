"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Send,
  Check,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { CommandBar } from "@/components/interactive-terminal";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { HeroStage } from "@/components/hero-stage";
import {
  ABOUT_ME,
  SOCIAL_LINKS,
  LEETCODE_STATS,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  FORM_ENDPOINT
} from "@/lib/portfolio-data";

export default function Home() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setContactSubmitted(true);
        form.reset();
      }
    } catch {
      // fallback
    } finally {
      setSubmitting(false);
    }
  };

  const skillGroups = [
    { title: "Languages", items: SKILLS.languages },
    { title: "Backend & Systems", items: SKILLS.backend },
    { title: "Databases", items: SKILLS.databases },
    { title: "Frontend", items: SKILLS.frontend },
    { title: "Cloud & DevOps", items: SKILLS.cloudDevOps },
    { title: "Developer Tools", items: SKILLS.tools }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* Subtle Hairline Background Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-30" />

      {/* Desktop Left-Rail Navigation & Mobile Drawer */}
      <Sidebar />

      {/* Main Page Content Area */}
      <main className="relative z-10 md:ml-[78px] px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 max-w-[1400px] mx-auto space-y-20 md:space-y-28">
        {/* ============================================================ */}
        {/* SECTION 1: HERO (BALANCED 2-COLUMN DESKTOP GRID)              */}
        {/* ============================================================ */}
        <section id="overview" className="pt-6 md:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Bio, Command Bar, Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--text-main)]" />
                    <span>{ABOUT_ME.location}, India</span>
                    <span>·</span>
                    <span>UIET MDU Rohtak</span>
                    <span>·</span>
                    <span className="text-[var(--text-sub)]">Open for Software Roles &amp; Internships</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-main)] leading-[0.98]">
                    {ABOUT_ME.name}
                  </h1>

                  <p className="text-base sm:text-lg text-[var(--text-sub)] font-medium max-w-xl leading-relaxed">
                    {ABOUT_ME.description[1]} {ABOUT_ME.description[2]}
                  </p>
                </div>
              </Reveal>

              {/* Tactile Command Bar */}
              <Reveal delay={0.06}>
                <CommandBar />
              </Reveal>

              {/* 3 Core Metric Proof Callouts */}
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors hover:border-[var(--border-strong)]">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">
                      ~9,000 <span className="text-xs font-normal text-[var(--text-muted)]">req/s</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
                      BookMyShow Fastify Benchmark
                    </p>
                  </div>

                  <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors hover:border-[var(--border-strong)]">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">
                      &lt;120 <span className="text-xs font-normal text-[var(--text-muted)]">ms</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
                      ShopSphere Vector DB RAG
                    </p>
                  </div>

                  <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors hover:border-[var(--border-strong)]">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">
                      100% <span className="text-xs font-normal text-[var(--text-muted)]">Uptime</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
                      Comfort Footwear Live on Vercel
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Action Links & Channels */}
              <Reveal delay={0.14}>
                <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs">
                  <a
                    href="#flagship"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[var(--text-main)] text-[var(--bg)] px-4 py-2 font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Flagship Projects
                  </a>
                  <a
                    href={SOCIAL_LINKS.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                  >
                    <FileText size={13} /> Resume <ArrowUpRight size={11} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${ABOUT_ME.email}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                  >
                    <Mail size={13} /> Email
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Stage (Fills the right space completely) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <HeroStage />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: THE 3 FLAGSHIP PROJECTS                           */}
        {/* ============================================================ */}
        <section id="flagship" className="space-y-8 scroll-mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                  01 / SELECTED WORK
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-0.5">
                  Three Flagship Systems
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono max-w-xs">
                Verifiable load benchmarks, grounded GenAI vector search, and shipped production code.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10">
            {PROJECTS.map((project, idx) => (
              <Reveal key={project.name} delay={idx * 0.08}>
                <SpotlightCard className="p-5 sm:p-7">
                  {/* Card Title & Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-sub)]">
                      {project.status}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[var(--text-sub)] leading-relaxed mt-4">
                    {project.description}
                  </p>

                  {/* 4 Metric Boxes (Linear style) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
                    {project.metricBoxes.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-raised)]/50 p-2.5 text-center font-mono"
                      >
                        <div className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[var(--text-sub)] mt-0.5">
                          {m.unit}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Data Pipeline */}
                  <ArchitectureFlow steps={project.architecture} />

                  {/* Engineering Takeaways */}
                  <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--code-bg)] p-3.5 font-mono text-xs space-y-1.5">
                    <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                      Engineering Highlights
                    </p>
                    <ul className="space-y-1 text-[var(--text-sub)] text-[12px]">
                      {project.takeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--text-muted)] select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Action Links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4 mt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-sub)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                      >
                        <Github size={13} /> Source Code
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded bg-[var(--text-main)] text-[var(--bg)] px-3.5 py-1.5 font-semibold hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={13} /> Visit Live App
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: EXPERIENCE & EDUCATION                            */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                  02 / JOURNEY
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-0.5">
                  Experience &amp; Education
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono max-w-xs">
                Hands-on development alongside formal Computer Science education.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Experience Card */}
            <Reveal>
              <SpotlightCard className="p-6 h-full space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5 text-[var(--text-main)] font-semibold">
                    <Briefcase size={14} /> Experience
                  </span>
                  <span>{EXPERIENCE[0].period}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    {EXPERIENCE[0].role}
                  </h3>
                  <a
                    href={EXPERIENCE[0].companyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] flex items-center gap-1 mt-0.5"
                  >
                    {EXPERIENCE[0].company} ({EXPERIENCE[0].location}) <ArrowUpRight size={11} />
                  </a>
                </div>

                <p className="text-xs text-[var(--text-sub)] leading-relaxed">
                  {EXPERIENCE[0].description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]">
                  {EXPERIENCE[0].skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-sub)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Education Card */}
            <Reveal delay={0.06}>
              <SpotlightCard className="p-6 h-full space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5 text-[var(--text-main)] font-semibold">
                    <GraduationCap size={14} /> Education
                  </span>
                  <span>{EDUCATION[0].period}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    {EDUCATION[0].degree}
                  </h3>
                  <a
                    href={EDUCATION[0].institutionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] flex items-center gap-1 mt-0.5"
                  >
                    {EDUCATION[0].institution} <ArrowUpRight size={11} />
                  </a>
                </div>

                <div className="space-y-1.5 text-xs text-[var(--text-sub)] leading-relaxed">
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">Core Focus Areas:</p>
                  <p className="font-mono text-xs text-[var(--text-main)]">{EDUCATION[0].score}</p>
                </div>

                <div className="pt-2 border-t border-[var(--border)] font-mono text-[11px] text-[var(--text-muted)]">
                  B.Tech CSE · Maharshi Dayanand University
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: LEETCODE & PROBLEM SOLVING                        */}
        {/* ============================================================ */}
        <section id="leetcode" className="space-y-6 scroll-mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                  03 / CS FUNDAMENTALS
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-0.5">
                  Data Structures &amp; Algorithms
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono max-w-xs">
                Continuous practice on trees, graphs, dynamic programming, and concurrency.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SpotlightCard className="p-5 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Total Overview */}
                <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-[var(--border)] pb-6 lg:pb-0 lg:pr-6">
                  <div className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Solved Problems
                  </div>
                  <div className="text-5xl font-bold font-mono text-[var(--text-main)]">
                    {LEETCODE_STATS.totalSolved}+
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Global Ranking: <span className="text-[var(--text-main)] font-semibold">{LEETCODE_STATS.ranking}</span>
                  </p>

                  <a
                    href={SOCIAL_LINKS.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-1.5 text-xs font-mono text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                  >
                    <Code2 size={13} /> View LeetCode Profile <ArrowUpRight size={11} />
                  </a>
                </div>

                {/* Progress Bars */}
                <div className="lg:col-span-4 space-y-4 font-mono">
                  {/* Easy */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-sub)]">Easy</span>
                      <span className="text-[var(--text-muted)]">
                        {LEETCODE_STATS.easySolved} / {LEETCODE_STATS.totalEasy}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[var(--surface-raised)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--text-main)]"
                        style={{ width: `${(LEETCODE_STATS.easySolved / LEETCODE_STATS.totalEasy) * 100 * 4}%` }}
                      />
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-sub)]">Medium</span>
                      <span className="text-[var(--text-muted)]">
                        {LEETCODE_STATS.mediumSolved} / {LEETCODE_STATS.totalMedium}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[var(--surface-raised)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--text-sub)]"
                        style={{ width: `${(LEETCODE_STATS.mediumSolved / LEETCODE_STATS.totalMedium) * 100 * 3}%` }}
                      />
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-sub)]">Hard</span>
                      <span className="text-[var(--text-muted)]">
                        {LEETCODE_STATS.hardSolved} / {LEETCODE_STATS.totalHard}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[var(--surface-raised)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--text-muted)]"
                        style={{ width: `${(LEETCODE_STATS.hardSolved / LEETCODE_STATS.totalHard) * 100 * 5}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Recent Submissions */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-6 lg:pt-0 lg:pl-6 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Recent Accepted Questions
                  </div>
                  <div className="space-y-1.5">
                    {LEETCODE_STATS.recentSubmissions.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between rounded border border-[var(--border)] bg-[var(--surface-raised)]/40 px-2.5 py-1.5 text-[11px]"
                      >
                        <span className="text-[var(--text-sub)] truncate max-w-[170px]">{item.title}</span>
                        <span className="text-[10px] text-[var(--text-muted)]">{item.statusDisplay}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: TECHNICAL TOOLKIT                                 */}
        {/* ============================================================ */}
        <section id="toolkit" className="space-y-6 scroll-mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                  04 / TOOLKIT
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-0.5">
                  Technical Stack
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono max-w-xs">
                Production-tested tools across backend, storage, cloud, and developer infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {skillGroups.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 0.04}>
                <SpotlightCard className="p-5 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono">
                      <span className="font-bold text-[var(--text-main)]">{cat.title}</span>
                      <span className="text-[var(--text-muted)]">0{idx + 1}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-sub)] hover:border-[var(--border-strong)] hover:text-[var(--text-main)] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: CONTACT & WORKING FORM                            */}
        {/* ============================================================ */}
        <section id="contact" className="space-y-6 scroll-mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                  05 / GET IN TOUCH
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-0.5">
                  Let&apos;s Build Together
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono max-w-xs">
                Open to full-time roles, software engineering internships, and high-scale systems discussions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SpotlightCard className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <p className="text-[10px] text-[var(--text-muted)] uppercase">Direct Channels</p>
                    <h3 className="text-lg font-bold text-[var(--text-main)] font-sans">
                      Reach out directly
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed font-sans text-xs">
                      Feel free to message for opportunities or discussions regarding high-throughput systems, caching strategies, or GenAI apps.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`mailto:${ABOUT_ME.email}`}
                      className="flex items-center gap-2.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] p-2.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                    >
                      <Mail size={14} />
                      <span>{ABOUT_ME.email}</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] p-2.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                    >
                      <Linkedin size={14} />
                      <span>linkedin.com/in/ritesh-kumar</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] p-2.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
                    >
                      <span>📸</span>
                      <span>instagram.com/ritesh.build</span>
                    </a>
                    <div className="flex items-center gap-2.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] p-2.5 text-[var(--text-muted)]">
                      <span>📍</span>
                      <span>{ABOUT_ME.location}, Haryana, India</span>
                    </div>
                  </div>
                </div>

                {/* Formspree Form */}
                <div className="lg:col-span-7">
                  {contactSubmitted ? (
                    <div className="rounded-md border border-[var(--border)] bg-[var(--surface-raised)] p-6 text-center space-y-2 font-mono text-xs">
                      <div className="h-8 w-8 rounded-full border border-[var(--border-strong)] flex items-center justify-center mx-auto text-[var(--text-main)]">
                        <Check size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-[var(--text-main)] font-sans">
                        Message Sent
                      </h4>
                      <p className="text-[var(--text-muted)]">
                        Thank you for reaching out. I will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[var(--text-muted)]">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Alex Morgan"
                            className="w-full rounded border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-xs text-[var(--text-main)] outline-none focus:border-[var(--border-strong)] transition-colors placeholder:text-[var(--text-muted)]/50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[var(--text-muted)]">Your Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="alex@company.com"
                            className="w-full rounded border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-xs text-[var(--text-main)] outline-none focus:border-[var(--border-strong)] transition-colors placeholder:text-[var(--text-muted)]/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[var(--text-muted)]">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Software Engineering Role / Project Discussion"
                          className="w-full rounded border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-xs text-[var(--text-main)] outline-none focus:border-[var(--border-strong)] transition-colors placeholder:text-[var(--text-muted)]/50"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[var(--text-muted)]">Message</label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          placeholder="Hi Ritesh, saw your BookMyShow benchmark..."
                          className="w-full rounded border border-[var(--border)] bg-[var(--surface-raised)] p-3 text-xs text-[var(--text-main)] outline-none focus:border-[var(--border-strong)] transition-colors placeholder:text-[var(--text-muted)]/50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 rounded bg-[var(--text-main)] text-[var(--bg)] px-4 py-2 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        <Send size={12} />
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--text-main)]">{ABOUT_ME.name}</span>
            <span>·</span>
            <span>UIET MDU Rohtak</span>
          </div>

          <div>
            <span>Next.js 15 · TypeScript · Tailwind CSS</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
