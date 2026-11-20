"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === "dark";
  return <button className="theme-toggle" type="button" aria-label="Toggle theme" title="Toggle light/dark mode" disabled={!mounted} onClick={() => setTheme(dark ? "light" : "dark")}>{mounted && dark ? <Sun size={17}/> : <Moon size={17}/>}</button>;
}
