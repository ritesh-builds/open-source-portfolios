import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
export const metadata: Metadata = { title: "Ritesh Kumar — Software Developer", description: "Backend development, distributed systems and full-stack engineering portfolio." };
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en" suppressHydrationWarning><body><ThemeProvider><SiteHeader/>{children}</ThemeProvider></body></html>;
}
