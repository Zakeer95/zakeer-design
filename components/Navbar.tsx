"use client";

import { useTheme } from "@/contexts/ThemeContext";
import MainCTA from "./MainCTA";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`w-full py-2 pl-2 pr-2 -mr-[15px] sm:py-3 sm:pl-3 sm:pr-3 sm:-mr-[13px] md:py-4 md:pl-4 md:pr-4 md:-mr-[15px] ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full flex items-center justify-center">
        <div className={`w-full max-w-[520px] flex items-center justify-between gap-4 lg:gap-6 pl-3 pr-3 py-2 rounded-xl border ${isDarkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
          {/* Name - hidden on mobile/tablet, shown on desktop */}
          <div className={`hidden lg:block text-base font-medium ${isDarkMode ? 'text-zinc-100' : 'text-zinc-900'}`} style={{ fontSize: '16px', letterSpacing: '-0.6px' }}>
            Zakeer Sadikeen
          </div>
          
          {/* Links - shown on left for mobile/tablet, right side for desktop */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`${isDarkMode ? 'text-zinc-500 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'} text-sm lg:text-base transition-colors bg-transparent border-none cursor-pointer`}
              style={{ letterSpacing: '-0.6px' }}
            >
              Explore work
            </button>
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`${isDarkMode ? 'text-zinc-500 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'} text-sm lg:text-base transition-colors bg-transparent border-none cursor-pointer`}
              style={{ letterSpacing: '-0.6px' }}
            >
              About me
            </button>
          </div>
          
          {/* Theme Toggle and CTA - always on right */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="relative flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer"
              style={{ width: '34.5px', height: '34.5px' }}
              aria-label="Toggle theme"
            >
              {/* Sun Icon (Light Mode) */}
              <svg 
                className={`w-4 h-4 transition-opacity duration-300 ease-in-out ${
                  isDarkMode ? 'opacity-0 absolute' : 'opacity-100'
                } text-zinc-900`}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              
              {/* Moon Icon (Dark Mode) */}
              <svg 
                className={`w-4 h-4 transition-opacity duration-300 ease-in-out ${
                  isDarkMode ? 'opacity-100' : 'opacity-0 absolute'
                } text-zinc-300`}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
              </svg>
            </button>
            
            <MainCTA>
              Let&apos;s Talk
            </MainCTA>
          </div>
        </div>
      </div>
    </nav>
  );
}

