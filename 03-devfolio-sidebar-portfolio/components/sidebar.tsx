"use client";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/lib/portfolio-data";
import { ThemeSwitch } from "@/components/theme-switch";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="desktop-rail">
        <Link href="#overview" className="rail-brand">{portfolio.identity.initials}<i>.</i></Link>
        <span className="rail-line" />
        <nav className="rail-nav" aria-label="Main navigation">
          {portfolio.navigation.map((item) => <Link href={item.href} key={item.number}><small>{item.number}</small><span>{item.label}</span></Link>)}
        </nav>
        <div className="rail-bottom"><ThemeSwitch /><span>© {new Date().getFullYear()}</span></div>
      </aside>
      <header className="mobile-header">
        <Link href="#overview" className="rail-brand">{portfolio.identity.initials}<i>.</i></Link>
        <div className="mobile-controls"><ThemeSwitch /><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
        {open && <nav className="mobile-nav">{portfolio.navigation.map((item) => <Link key={item.number} href={item.href} onClick={() => setOpen(false)}>{item.number} / {item.label}</Link>)}</nav>}
      </header>
    </>
  );
}
