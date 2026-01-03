"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface SecondaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryCTA({ children, onClick, className = "" }: SecondaryCTAProps) {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`w-auto px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${isDarkMode ? 'bg-zinc-900 hover:bg-zinc-700 text-zinc-100' : 'bg-[#F5F5F5] hover:bg-[#EBEBEB] text-zinc-900'} text-base lg:text-[15px] font-medium transition-colors duration-700 ease-out cursor-pointer ${className}`}
      style={{ letterSpacing: '-0.6px' }}
    >
      {children}
    </button>
  );
}

