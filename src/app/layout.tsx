import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Uniqorn Design — Product Design Agency",
  description: "We transform complex ideas into beautiful digital products. Boutique product design agency specializing in AI, cybersecurity, SaaS, and healthtech.",
  icons: {
    icon: [
      { url: "/uniqorn-design/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/uniqorn-design/favicon/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/uniqorn-design/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
