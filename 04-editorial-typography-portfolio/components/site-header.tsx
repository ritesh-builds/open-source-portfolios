"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="#home" className="brand" aria-label={`${siteConfig.name} home`}>
          {siteConfig.initials}<span>.</span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="resume-link" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} />
          </a>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
