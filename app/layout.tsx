import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Google tag (gtag.js) */}
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            if (typeof window.gtag === 'undefined') {
              window.gtag = function() {
                window.dataLayer.push(arguments);
              };
            }
            gtag('js', new Date());
            gtag('config', 'G-3SQ5HPKVEN');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3SQ5HPKVEN"
          strategy="afterInteractive"
        />
        <PreventImageDrag />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}