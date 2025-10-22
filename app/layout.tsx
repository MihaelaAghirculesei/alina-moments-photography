import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alina Moments Photography | Professional Photography Services",
  description:
    "Professional photography services specializing in weddings, portraits, events, and special moments. Capture your precious memories with Alina Moments Photography - Fotografie mit Herz und Gefühl.",
  keywords: [
    "photography",
    "wedding photographer",
    "portrait photography",
    "event photography",
    "professional photographer",
    "Alina Moments",
    "baby photography",
    "family photography",
  ],
  authors: [{ name: "Alina Moments Photography" }],
  openGraph: {
    title: "Alina Moments Photography | Professional Photography Services",
    description:
      "Professional photography services - Fotografie mit Herz und Gefühl",
    url: "https://alinamoments.com",
    siteName: "Alina Moments Photography",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
