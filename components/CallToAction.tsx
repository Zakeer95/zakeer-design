"use client";

import { useTheme } from "@/contexts/ThemeContext";
import MainCTA from "./MainCTA";

export default function CallToAction() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full max-w-[720px] flex flex-col items-center gap-y-0">
        {/* Available for new projects Tag */}
        <div className="relative mb-8">
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 pl-[10px] sm:pl-[12px] pr-[7px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
            <div className="relative flex items-center justify-center">
              {/* Animated beaming circle */}
              <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 beam-animation"></div>
              {/* Green dot */}
              <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
            </div>
            <span className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>
              Available for new projects
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} text-center leading-[1.05] px-2 sm:px-0 mb-6`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
          <span className="block">Ready for a website that</span>
          <span className="block"> actually works?</span>
        </h2>

        {/* Descriptive Paragraph */}
         <p className={`text-sm sm:text-base md:text-lg ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} text-center leading-normal max-w-2xl px-2 sm:px-0 mb-8 sm:mb-10`} style={{ letterSpacing: '-0.3px' }}>
           <span className="sm:hidden">If your website isn&apos;t driving results, I&apos;ll help you create one that earns trust, looks exceptional, and turns visitors into customers.</span>
           <span className="hidden sm:inline">If your website isn&apos;t driving results, I&apos;ll help you create one that<br /> earns trust, looks exceptional, and turns visitors into customers.</span>
         </p>

        {/* Let's Talk Button */}
        <MainCTA className="px-4 sm:px-5 py-2 sm:py-2.5">
          Let&apos;s Talk
        </MainCTA>
      </div>
    </div>
  );
}

