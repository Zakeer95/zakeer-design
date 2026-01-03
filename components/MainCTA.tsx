"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface MainCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const LINKEDIN_URL = "https://www.linkedin.com/in/zakeer-sadikeen-6a5450171/";

export default function MainCTA({ children, onClick, className = "" }: MainCTAProps) {
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-auto px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${isDarkMode ? 'bg-white hover:bg-zinc-100 text-black' : 'bg-zinc-900 hover:bg-zinc-800 text-white'} text-base lg:text-[15px] font-medium transition-colors duration-200 cursor-pointer ${className}`}
      style={{ letterSpacing: '-0.6px' }}
    >
      {children}
    </button>
  );
}

