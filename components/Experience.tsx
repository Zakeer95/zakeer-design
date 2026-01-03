"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface ExperienceProps {
  logo: string;
  logoAlt: string;
  jobTitle: string;
  roleType: string;
  companyName: string;
  duration: string;
  description: string;
  metric1: string;
  metric2: string;
  ctaText: string;
  ctaUrl: string;
  index?: number;
  totalExperiences?: number;
  globalScrollProgress?: MotionValue<number>;
  rightSideText?: string;
}

export default function Experience({
  logo,
  logoAlt,
  jobTitle,
  roleType,
  companyName,
  duration,
  description,
  metric1,
  metric2,
  ctaText,
  ctaUrl,
  index = 0,
  totalExperiences = 1,
  globalScrollProgress,
  rightSideText,
}: ExperienceProps) {
  const { isDarkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const lineHeightRef = useRef(lineHeight);
  const isDesktopRef = useRef(isDesktop);

  // Helper function to parse metric and extract numbers and text
  const parseMetric = (metric: string) => {
    // Match pattern: "5 → 12 Team Growth" or "5 → 12"
    const matchWithArrow = metric.match(/^([+\d%]+)\s*→\s*([+\d%]+)\s+(.+)/);
    if (matchWithArrow) {
      return {
        firstNumber: matchWithArrow[1],
        secondNumber: matchWithArrow[2],
        rest: matchWithArrow[3],
        hasArrow: true
      };
    }
    // Match pattern: "+20% Product Retention" or "25+ Brand Identities Built" or "120+ Projects Delivered"
    const matchWithoutArrow = metric.match(/^([+\d%]+)\s+(.+)/);
    if (matchWithoutArrow) {
      return {
        firstNumber: matchWithoutArrow[1],
        secondNumber: '',
        rest: matchWithoutArrow[2],
        hasArrow: false
      };
    }
    // Fallback
    return { firstNumber: '', secondNumber: '', rest: metric, hasArrow: false };
  };

  // Single continuous progress bar across all experiences
  // Each experience shows only its segment, animating sequentially
  const defaultProgress = useMotionValue(0);
  const scrollYProgress = useTransform(
    globalScrollProgress || defaultProgress,
    (globalProgress) => {
      // Divide the global progress into segments for each experience
      const segmentSize = 1 / totalExperiences;
      const segmentStart = index * segmentSize;
      const segmentEnd = (index + 1) * segmentSize;
      
      // Calculate how much of this segment should be filled
      // Only start animating this segment after previous segments are complete
      if (globalProgress <= segmentStart) {
        // This segment hasn't started yet
        return 0;
      } else if (globalProgress >= segmentEnd) {
        // This segment is complete
        return 1;
      } else {
        // Map global progress to this segment's progress (0-1)
        const segmentProgress = (globalProgress - segmentStart) / segmentSize;
        // Apply faster animation curve
        return Math.pow(segmentProgress, 0.7);
      }
    }
  );

  // Calculate strokeDashoffset based on scroll progress
  // Use refs to access current values in the transform function
  const strokeDashoffset = useTransform(scrollYProgress, (progress) => {
    const dashLength = isDesktopRef.current ? 140 : (lineHeightRef.current ? (lineHeightRef.current - 50) * 0.75 : 90);
    return dashLength * (1 - progress);
  });

  // Calculate line height based on container height and check if desktop/tablet
  useEffect(() => {
    const updateLineHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setLineHeight(height);
        lineHeightRef.current = height;
      }
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      isDesktopRef.current = desktop;
    };

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-[720px] mx-auto my-auto ${isDarkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="flex flex-row gap-3 md:gap-[26px]">
        {/* Left Column - Logo and Scroll Path Line */}
        <div className="flex flex-col items-start gap-2 md:gap-3">
          {/* Logo Container */}
          <div className="flex-shrink-0">
            <div
              className={`w-[60px] h-[60px] sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[15px] ${isDarkMode ? 'bg-zinc-900' : ''} flex items-center justify-center`}
              style={{ 
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.125)',
                backgroundColor: isDarkMode ? undefined : '#FBFBFB',
                border: isDarkMode ? '0.5px solid rgba(255, 255, 255, 0.1)' : '0.5px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <Image
                src={logo}
                alt={logoAlt}
                width={index === 3 ? 52 : 36}
                height={index === 3 ? 52 : 36}
                className={`object-contain ${
                  index === 3
                    ? logo.includes('rapidload')
                      ? 'w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15'
                      : 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
                    : logo.includes('rapidload')
                      ? 'w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11'
                      : 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'
                } ${isDarkMode ? 'brightness-0 invert' : ''}`}
                style={logo.includes('rapidload') ? { marginLeft: '2px', marginRight: '-2px' } : undefined}
              />
            </div>
          </div>

          {/* Scroll Path Line - Below logo */}
          {index !== 3 && (
            <div className="relative w-full flex justify-center" style={{ marginTop: '5px' }}>
              <svg
                className="relative"
                width="2"
                height={isDesktop ? 140 : (lineHeight ? (lineHeight - 50) * 0.75 : 90)}
                style={{ height: isDesktop ? '140px' : `${lineHeight ? (lineHeight - 50) * 0.75 : 90}px` }}
              >
                {/* Path BG (background line) */}
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2={isDesktop ? 140 : (lineHeight ? (lineHeight - 50) * 0.75 : 90)}
                  stroke={isDarkMode ? "#27272a" : "#E4E4E7"}
                  strokeWidth="2"
                />
                {/* Path line (animated progress line) */}
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2={isDesktop ? 140 : (lineHeight ? (lineHeight - 50) * 0.75 : 90)}
                  stroke={isDarkMode ? "#a1a1aa" : "#52525b"}
                  strokeWidth="2"
                  strokeDasharray={isDesktop ? "140" : (lineHeight ? (lineHeight - 50) * 0.75 : 90).toString()}
                  style={{
                    strokeDashoffset: strokeDashoffset,
                  }}
                />
              </svg>
            </div>
          )}
        </div>

        {/* Right Column - Content (4 Rows) */}
        <div className="flex-1 flex flex-col gap-2 md:gap-3">
          {/* Row 1: Job Title, Role Type, Company, Duration */}
          <div className={`flex flex-row items-center justify-between gap-0 h-[60px] sm:h-20 md:h-24 rounded-[15px] px-4 sm:px-5 md:px-6 ${isDarkMode ? 'bg-zinc-900' : ''}`} style={!isDarkMode ? { backgroundColor: '#FBFBFB' } : {}}>
            {/* Left Part */}
            <div className="flex flex-col justify-center text-left">
              <h3
                className={`text-[14px] sm:text-[20px] font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} mb-0`}
                style={{ letterSpacing: '-0.6px' }}
              >
                {jobTitle}
              </h3>
              <p
                className={`text-[11px] sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} whitespace-nowrap`}
                style={{ letterSpacing: '-0.3px' }}
              >
                {roleType}
              </p>
            </div>

            {/* Right Part */}
            <div className="flex flex-col justify-center text-right">
              <h4
                className={`text-[14px] sm:text-[20px] font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} mb-0 whitespace-nowrap`}
                style={{ letterSpacing: '-0.6px' }}
              >
                {companyName}
              </h4>
              <p
                className={`text-[11px] sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
                style={{ letterSpacing: '-0.3px' }}
              >
                {duration}
              </p>
            </div>
          </div>

          {/* Row 2: Description Paragraph */}
          <div>
            <p
              className={`text-[11px] sm:text-sm md:text-base ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-normal break-words`}
              style={{ letterSpacing: '-0.3px' }}
            >
              {description}
            </p>
          </div>

          {/* Row 3: Separator Line */}
          <div>
            <div
              className={`h-px w-full ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}
            ></div>
          </div>

          {/* Row 4: Metrics and CTA - 2 Columns */}
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-3">
            {/* Column 1: Metrics */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {(() => {
              const { firstNumber, secondNumber, rest, hasArrow } = parseMetric(metric1);
              return (
                <div
                  className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} text-[11px] md:text-[16px] font-medium break-words flex items-center gap-1`}
                  style={{ letterSpacing: '-0.3px' }}
                >
                  <span className="opacity-60">{firstNumber}</span>
                  {hasArrow && (
                    <span className="opacity-60 inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                  {secondNumber && <span className="opacity-60">{secondNumber}</span>}
                  <span>{rest}</span>
                </div>
              );
            })()}
            {(() => {
              const { firstNumber, secondNumber, rest, hasArrow } = parseMetric(metric2);
              return (
                <div
                  className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} text-[11px] md:text-[16px] font-medium break-words flex items-center gap-1`}
                  style={{ letterSpacing: '-0.3px' }}
                >
                  <span className="opacity-60">{firstNumber}</span>
                  {hasArrow && (
                    <span className="opacity-60 inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                  {secondNumber && <span className="opacity-60">{secondNumber}</span>}
                  <span>{rest}</span>
                </div>
              );
            })()}
            </div>

            {/* Column 2: CTA or Right Side Text */}
            {rightSideText ? (
              <div className="flex items-center">
                <span className={`text-xs sm:text-base font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} whitespace-nowrap`} style={{ letterSpacing: '-0.3px' }}>
                  {rightSideText}
                </span>
              </div>
            ) : ctaText ? (
              <div className="flex items-center">
                <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-[2px] text-xs sm:text-base font-medium ${isDarkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'} transition-colors duration-200 group whitespace-nowrap`}
                style={{ letterSpacing: '-0.3px' }}
              >
                <span className="opacity-100">{ctaText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[14px] h-[14px] md:w-[19px] md:h-[19px] opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" stroke="currentColor" strokeWidth="0.2" />
                </svg>
                </a>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </div>
  );
}

