import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kundan Kumar - Senior Software Engineer",
  description: "Full stack Lead developer with 7+ years of industry experience in development and software engineering. Passionate teacher and lifelong learner.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Java", "Spring Boot", "Walmart", "Kundan Kumar"],
  authors: [{ name: "Kundan Kumar" }],
  creator: "Kundan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kundan-portfolio.vercel.app",
    title: "Kundan Kumar - Senior Software Engineer",
    description: "Full stack Lead developer with 7+ years of industry experience in development and software engineering.",
    siteName: "Kundan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundan Kumar - Senior Software Engineer",
    description: "Full stack Lead developer with 7+ years of industry experience in development and software engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
