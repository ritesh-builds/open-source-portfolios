import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritesh — Software Engineer",
  description: "The portfolio of Ritesh, software engineer and full-stack developer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Providers><Sidebar />{children}</Providers></body></html>;
}
