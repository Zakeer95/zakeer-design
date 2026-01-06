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
  title: {
    default: "Zakeer Sadikeen - UI/UX Designer",
    template: "%s | Zakeer Sadikeen"
  },
  description: "I design what businesses want to say into what users want to feel. Professional UI/UX designer specializing in creating seamless interactions that users love and businesses trust.",
  keywords: ["UI/UX Designer", "Web Designer", "Product Designer", "User Experience", "User Interface", "Design Portfolio"],
  authors: [{ name: "Zakeer Sadikeen" }],
  creator: "Zakeer Sadikeen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zakeer.design",
    siteName: "Zakeer Sadikeen - UI/UX Designer",
    title: "Zakeer Sadikeen - UI/UX Designer",
    description: "I design what businesses want to say into what users want to feel.",
    images: [
      {
        url: "/zakeer-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Zakeer Sadikeen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakeer Sadikeen - UI/UX Designer",
    description: "I design what businesses want to say into what users want to feel.",
    images: ["/zakeer-square.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon-128.png", sizes: "128x128", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://zakeer.design"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD for Person/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zakeer Sadikeen",
              "jobTitle": "UI/UX Designer",
              "url": "https://zakeer.design",
              "sameAs": [
                "https://www.linkedin.com/in/zakeer-sadikeen-6a5450171/",
                "https://linktr.ee/zakeer95"
              ],
              "email": "zakeermohomed95@gmail.com",
              "image": "https://zakeer.design/zakeer-square.jpg",
              "description": "I design what businesses want to say into what users want to feel.",
            }),
          }}
        />
      </head>
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