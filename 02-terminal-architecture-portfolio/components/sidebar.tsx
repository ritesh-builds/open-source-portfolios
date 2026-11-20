"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { ABOUT_ME, SOCIAL_LINKS } from "@/lib/portfolio-data";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview", num: "01" },
  { label: "Flagship Work", href: "#flagship", num: "02" },
  { label: "Problem Solving", href: "#leetcode", num: "03" },
  { label: "Toolkit", href: "#toolkit", num: "04" },
  { label: "Contact", href: "#contact", num: "05" }
];

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP FIXED 82px RAIL ================= */}
      <aside className="desktop-rail hidden md:flex fixed inset-y-0 left-0 w-[78px] z-50 flex-col items-center justify-between border-r border-[var(--border)] bg-[var(--bg)] py-7">
        {/* Top Brand Monogram */}
        <div className="flex flex-col items-center gap-1">
          <Link
            href="#overview"
            className="flex flex-col items-center font-mono font-bold text-lg text-[var(--text-main)] transition-opacity hover:opacity-70"
          >
            <span>R<span className="text-[var(--text-muted)]">.</span></span>
          </Link>
          <div className="h-7 w-px bg-[var(--border)] mt-3 mb-1" />
        </div>

        {/* Vertical Rail Navigation (Writing mode vertical-rl) */}
        <nav className="rail-nav flex flex-col gap-6" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-[var(--text-muted)] transition-colors hover:text-[var(--text-main)]"
            >
              <span className="text-[var(--text-sub)] text-[9px] font-semibold">{item.num}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Rail Controls */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Coordinates Stamp */}
          <div className="font-mono text-[8px] text-[var(--text-muted)] tracking-tighter leading-tight" title={ABOUT_ME.location}>
            29°41&apos; N<br />76°59&apos; E
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all hover:border-[var(--border-strong)] hover:text-[var(--text-main)]"
            aria-label="Toggle theme"
          >
            <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </aside>

      {/* ================= MOBILE HEADER & DRAWER ================= */}
      <header className="mobile-header md:hidden fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-4">
        <Link href="#overview" className="font-mono font-bold text-base text-[var(--text-main)]">
          Ritesh<span className="text-[var(--text-muted)]">.</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
            aria-label="Toggle theme"
          >
            <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-main)]"
            aria-label="Open navigation menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="absolute top-14 inset-x-0 border-b border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl flex flex-col gap-4">
            <nav className="flex flex-col gap-3 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-1.5 text-[var(--text-sub)] hover:text-[var(--text-main)]"
                >
                  <span>{item.label}</span>
                  <span className="text-[var(--text-muted)]">{item.num}</span>
                </Link>
              ))}
            </nav>

            <div className="h-px bg-[var(--border)] my-1" />

            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
              <span>{ABOUT_ME.location}</span>
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[var(--text-main)] font-semibold"
              >
                Resume <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
