"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface Step {
  step: string;
  node: string;
  detail: string;
}

interface ArchitectureFlowProps {
  steps: Step[];
}

export function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <div className="my-5 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)]/40 p-3.5 sm:p-4">
      <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[var(--text-muted)]">
        <span className="uppercase tracking-wider">Architecture Pipeline</span>
        <span>Distributed Nodes</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 relative font-mono">
        {steps.map((step, idx) => (
          <div
            key={step.step}
            className="group relative flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] p-2.5 transition-colors hover:border-[var(--border-strong)]"
          >
            <div className="flex items-center justify-between mb-1.5 text-[10px] text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-main)]">0{step.step}</span>
            </div>

            <div>
              <p className="text-[12px] font-semibold text-[var(--text-main)] leading-tight">
                {step.node}
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1 leading-snug">
                {step.detail}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-3.5 w-3.5 items-center justify-center text-[var(--text-muted)] opacity-60">
                <ArrowRight size={10} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
