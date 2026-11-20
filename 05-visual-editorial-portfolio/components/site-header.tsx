"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ABOUT_ME, NAVIGATION, SOCIAL_LINKS } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
export function SiteHeader() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link href="#home" className="brand-mark" aria-label={`${ABOUT_ME.name} home`}>R<span>.</span></Link>
    <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Main navigation">{NAVIGATION.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>
    <div className="header-actions"><ThemeToggle/><a className="resume-button" href={SOCIAL_LINKS.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>
  </div></header>;
}
