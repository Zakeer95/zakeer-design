import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import PreventImageDrag from "@/components/PreventImageDrag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zakeer Sadikeen - UI/UX Designer",
  description: "I design what businesses want to say into what users want to feel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <PreventImageDrag />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}