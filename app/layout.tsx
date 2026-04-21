import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickTracker from "@/components/ClickTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://justinreid.dev"),
  title: "Justin Reid — Software Engineer",
  description:
    "Portfolio of Justin Reid — AI Solutions Engineer, Software Developer, and Test Automation expert with a background in aerospace defense systems.",
  openGraph: {
    title: "Justin Reid — Software Engineer",
    description:
      "AI Solutions Engineer and full-stack developer with a defense background — building AI pipelines, full-stack apps, and automated systems.",
    url: "https://justinreid.dev",
    siteName: "Justin Reid Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Justin Reid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Reid — Software Engineer",
    description:
      "AI Solutions Engineer and full-stack developer with a defense background.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClickTracker />
        {children}
      </body>
    </html>
  );
}
