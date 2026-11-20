"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const dark = resolvedTheme === "dark";
  return (
    <button className="theme-switch" type="button" aria-label="Toggle color theme"
      onClick={() => setTheme(dark ? "light" : "dark")} disabled={!ready}>
      {ready && dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
