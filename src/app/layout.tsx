// app/layout.tsx or app/layout.ts (depending on your file extension)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/[sidebar]/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdulrahman Gaoba | Full Stack Developer",
  description: "Portfolio of Abdulrahman Gaoba – Full Stack Developer specialized in modern web technologies and open-source contributions.",
  authors: [{ name: "Abdulrahman Gaoba", url: "https://x.com/a_gaoba" }],
  keywords: ["Abdulrahman Gaoba", "Full Stack Developer", "JavaScript", "React", "Node.js", "Portfolio"],
  creator: "Abdulrahman Gaoba",
  metadataBase: new URL("https://gaoba.vercel.app"), // Replace with your actual domain
  openGraph: {
    title: "Abdulrahman Gaoba | Full Stack Developer",
    description: "Explore the work and contributions of Abdulrahman Gaoba across GitHub, Dev.to, and more.",
    url: "https://gaoba.vercel.app",
    siteName: "Abdulrahman Gaoba Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gaoba.vercel.app/og-image.png", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Abdulrahman Gaoba Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrahman Gaoba | Full Stack Developer",
    description: "Visit Abdulrahman Gaoba's developer portfolio, blog, and more.",
    creator: "@a_gaoba",
    images: ["https://gaoba.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://x.com/a_gaoba" />
        <link rel="me" href="https://www.instagram.com/a_gaoba/" />
        <link rel="me" href="https://www.threads.com/@a_gaoba" />
        <link rel="me" href="https://www.facebook.com/abdulrahman.gaoba/" />
        <link rel="me" href="https://github.com/A-Gaoba" />
        <link rel="me" href="https://dev.to/a_gaoba" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row min-h-screen p-2 md:p-6 2xl:px-28 gap-2">
            <Sidebar />
            <div className="border-2 p-2 w-full rounded-xl flex-row">
              <Navbar />
              <div className="flex-1 justify-center items-center p-4">
                <div className="flex justify-between">{children}</div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
