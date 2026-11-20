"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { links, about } from "@/lib/data";

const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const brandText = about.initials || about.name.charAt(0);

  return (
    <header className="header">
      <div className="header-inner">
        <Link className="brand" href="#home">
          {brandText}<span>.</span>
        </Link>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="resume" href={links.resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={13} />
          </a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
