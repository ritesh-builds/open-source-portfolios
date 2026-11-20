import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ritesh Kumar — Software Developer · Backend & Systems",
  description: "Portfolio of Ritesh Kumar. Software developer specializing in high-throughput distributed architectures, production GenAI RAG pipelines, and full-stack applications.",
  keywords: ["Ritesh Kumar", "Software Engineer", "Backend Developer", "Distributed Systems", "Fastify", "Redis", "Spring AI", "System Design"],
  authors: [{ name: "Ritesh Kumar" }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
