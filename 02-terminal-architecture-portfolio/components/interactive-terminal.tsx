"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal as TerminalIcon, ChevronDown, ChevronUp } from "lucide-react";
import { ABOUT_ME, TERMINAL_COMMANDS } from "@/lib/portfolio-data";

export function CommandBar() {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<Array<{ cmd: string; output: string[] }>>([
    {
      cmd: "npx ritesh-portfolio@latest",
      output: [
        "Ritesh Kumar — Software Developer (Backend, Distributed Systems & GenAI)",
        "Verified: ~9,000 req/s Fastify benchmark · Spring AI RAG pipeline · Shipped e-commerce",
        "Available for Software Engineering Roles & Internships."
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(ABOUT_ME.npxCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }
    const output = TERMINAL_COMMANDS[trimmed] || [
      `command not found: ${trimmed}. Available: whoami, projects, benchmarks, skills, contact, clear`
    ];
    setHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setInputVal("");
  };

  return (
    <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-mono transition-all duration-200 hover:border-[var(--border-strong)]">
      {/* Primary Command Line Row */}
      <div className="flex items-center justify-between px-3.5 py-2.5 gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <TerminalIcon size={14} className="text-[var(--text-muted)] shrink-0" />
          <span className="text-[var(--text-muted)] select-none">$</span>
          <span className="text-[var(--text-main)] font-medium truncate">
            {ABOUT_ME.npxCommand}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2.5 py-1 text-[11px] text-[var(--text-sub)] transition-all hover:border-[var(--border-strong)] hover:text-[var(--text-main)] active:scale-95"
            aria-label="Copy npx command"
          >
            {copied ? (
              <>
                <Check size={12} className="text-[var(--text-main)]" />
                <span className="text-[var(--text-main)] font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-[var(--text-muted)]" />
                <span>Copy</span>
              </>
            )}
          </button>

          {/* Interactive Shell Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
            title="Toggle interactive CLI terminal"
          >
            <span>CLI</span>
            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>

      {/* Expandable Minimalist Terminal Window */}
      {isExpanded && (
        <div className="border-t border-[var(--border)] bg-[var(--code-bg)] p-3.5 space-y-3">
          <div className="max-h-48 overflow-y-auto space-y-2 text-[11px] text-[var(--text-sub)]">
            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <span className="text-[var(--text-main)]">➜</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="pl-3 border-l border-[var(--border)] space-y-0.5 text-[var(--text-sub)]">
                  {item.output.map((line, lIdx) => (
                    <div key={lIdx} className="break-words">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-1 text-[11px]">
              <span className="text-[var(--text-main)]">➜</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(inputVal)}
                placeholder="type 'benchmarks', 'projects', 'help'..."
                className="flex-1 bg-transparent text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)]"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[var(--border)] text-[10px] text-[var(--text-muted)]">
            <span>Quick:</span>
            {["benchmarks", "projects", "whoami", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="rounded border border-[var(--border)] px-1.5 py-0.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
