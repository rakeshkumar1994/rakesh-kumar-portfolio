import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakesh Kumar | Full Stack Developer & Technology Lead",
  description: "Skill portfolio & professional experience of Rakesh Kumar - Full Stack Developer with 9+ years of experience in React, Redux, Node.js, Express, AWS EC2, and enterprise banking platforms.",
  keywords: [
    "Rakesh Kumar",
    "Full Stack Developer",
    "Technology Lead",
    "React Developer Sydney",
    "Node.js Developer",
    "Westpac Banking Platform",
    "Infosys",
    "Next.js Portfolio",
    "Parramatta NSW"
  ],
  authors: [{ name: "Rakesh Kumar" }],
  openGraph: {
    title: "Rakesh Kumar | Full Stack Developer & Tech Lead",
    description: "9+ Years commercial software development experience in React.js, Redux, Node.js, Express & AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
