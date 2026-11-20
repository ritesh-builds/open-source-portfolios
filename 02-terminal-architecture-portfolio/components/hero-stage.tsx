"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Activity, Cpu, Database } from "lucide-react";
import { ABOUT_ME, EDUCATION } from "@/lib/portfolio-data";

export function HeroStage() {
  const [copiedCode, setCopiedCode] = useState(false);

  const rawCode = `const engineer = {
  name: "${ABOUT_ME.name}",
  role: "${ABOUT_ME.roleHeadline}",
  education: "${EDUCATION[0].institution}",
  batch: "${EDUCATION[0].period}",
  benchmarks: {
    bookmyshow: "~9,000 req/s · sub-11ms latency",
    shopsphere_rag: "Grounded RAG · Pinecone Vector DB",
    comfort_store: "Live on Vercel · Google OAuth2 & JWT"
  },
  engine: ["Fastify v5", "Spring Boot", "Redis", "Pinecone", "React"]
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full h-full min-h-[440px] flex items-center justify-center font-mono">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[380px] h-[380px] rounded-full border border-[var(--border)]" />
        <div className="absolute w-[490px] h-[220px] rounded-full border border-dashed border-[var(--border)] rotate-[-22deg]" />
        <div className="absolute font-bold text-[140px] tracking-tighter text-[var(--border)] select-none opacity-20">
          R.
        </div>
      </div>

      {/* Foreground Interactive Code Window (Developer Workstation) */}
      <div className="relative z-10 w-full max-w-[480px] rounded-xl border border-[var(--border-strong)] bg-[var(--surface-raised)]/95 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-active)]">
        {/* Window Titlebar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600 inline-block" />
            </div>
            <span className="ml-2 text-[var(--text-muted)] text-[11px] flex items-center gap-1.5">
              <Terminal size={12} />
              <span>system.config.ts</span>
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            title="Copy snippet"
          >
            {copiedCode ? (
              <>
                <Check size={11} className="text-[var(--text-main)]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={11} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 text-[11px] leading-[1.8] text-[var(--text-sub)] overflow-x-auto">
          <div>
            <span className="text-[var(--text-muted)]">01</span>{" "}
            <span className="text-[var(--text-main)] font-semibold">const</span>{" "}
            <span className="text-[var(--text-main)]">engineer</span> = &#123;
          </div>
          <div>
            <span className="text-[var(--text-muted)]">02</span>{" "}
            <span className="text-[var(--text-muted)] pl-4">name:</span>{" "}
            <span className="text-[var(--text-main)]">&quot;{ABOUT_ME.name}&quot;</span>,
          </div>
          <div>
            <span className="text-[var(--text-muted)]">03</span>{" "}
            <span className="text-[var(--text-muted)] pl-4">education:</span>{" "}
            <span className="text-[var(--text-main)]">&quot;UIET MDU Rohtak (2024-2028)&quot;</span>,
          </div>
          <div>
            <span className="text-[var(--text-muted)]">04</span>{" "}
            <span className="text-[var(--text-muted)] pl-4">benchmarks:</span> &#123;
          </div>
          <div>
            <span className="text-[var(--text-muted)]">05</span>{" "}
            <span className="text-[var(--text-muted)] pl-8">bookmyshow:</span>{" "}
            <span className="text-[var(--text-main)] font-bold">&quot;~9,000 req/s · sub-11ms&quot;</span>,
          </div>
          <div>
            <span className="text-[var(--text-muted)]">06</span>{" "}
            <span className="text-[var(--text-muted)] pl-8">shopsphere_rag:</span>{" "}
            <span className="text-[var(--text-main)]">&quot;Grounded RAG · Pinecone Vector DB&quot;</span>,
          </div>
          <div>
            <span className="text-[var(--text-muted)]">07</span>{" "}
            <span className="text-[var(--text-muted)] pl-8">comfort_store:</span>{" "}
            <span className="text-[var(--text-main)]">&quot;Live · Google OAuth2 &amp; JWT&quot;</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">08</span>{" "}
            <span className="text-[var(--text-muted)] pl-4">&#125;,</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">09</span>{" "}
            <span className="text-[var(--text-muted)] pl-4">engine:</span> [
            <span className="text-[var(--text-main)]">&quot;Fastify&quot;</span>,{" "}
            <span className="text-[var(--text-main)]">&quot;Spring Boot&quot;</span>,{" "}
            <span className="text-[var(--text-main)]">&quot;Redis&quot;</span>,{" "}
            <span className="text-[var(--text-main)]">&quot;Pinecone&quot;</span>]
          </div>
          <div>
            <span className="text-[var(--text-muted)]">10</span> &#125;;
          </div>
        </div>

        {/* Live System Telemetry Status Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[10px] text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5">
            <Activity size={11} className="text-[var(--text-main)]" />
            <span>Fastify: 9k req/s</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu size={11} />
            <span>PM2: Multi-core</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Database size={11} />
            <span>Redis: Sub-11ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
