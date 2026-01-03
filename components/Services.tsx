"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function Services() {
  const { isDarkMode } = useTheme();

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7"
        >
          <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Branding & image manipulation",
      description: "Designing impactful brands and transforming images with precision.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7"
        >
          <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Landing page design",
      description: "I design clear, high-converting pages that help visitors take action.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7"
        >
          <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Website development",
      description: "I build fast Framer sites that work on all mobile and desktop that loads instantly.",
    },
  ];

  return (
    <div className={`flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-6 sm:gap-8 -mx-[25px] px-[15px]">
        {/* Services Tag */}
        <div className="relative">
          <div className={`relative inline-flex items-center px-[12px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
            <p className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>
              Services
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} text-center leading-[1.05] px-2 sm:px-0`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
          How can i help
        </h2>

        {/* Service Cards - Single Box with 3 Columns */}
        <div 
          className={`w-full rounded-2xl py-5 mt-4 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}
          style={{
            boxShadow: isDarkMode 
              ? '0px 1px 2px rgba(0, 0, 0, 0.5)' 
              : '0px 1px 2px rgba(0, 0, 0, 0.125)',
            border: '0.5px solid',
            borderColor: isDarkMode ? '#27272a' : '#EBEBEB',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 sm:gap-4 px-5 relative ${
                  index !== services.length - 1 
                    ? 'py-[15px] sm:mx-[15px]'
                    : 'py-[15px]'
                }`}
              >
                {/* Vertical divider line with spacing (for desktop) */}
                {index !== services.length - 1 && index % 3 !== 2 && (
                  <div 
                    className="hidden sm:block absolute right-0 top-[15px] bottom-[15px] w-px"
                    style={{
                      backgroundColor: isDarkMode ? '#27272a' : '#e4e4e7',
                    }}
                  />
                )}
                
                {/* Horizontal divider line with spacing (for mobile) */}
                {index !== services.length - 1 && (
                  <div 
                    className="sm:hidden absolute left-[20px] right-[20px] bottom-0 h-px"
                    style={{
                      backgroundColor: isDarkMode ? '#27272a' : '#e4e4e7',
                    }}
                  />
                )}
                {/* Icon Container */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-800'}`}
                  style={{
                    backgroundColor: isDarkMode ? '#27272a' : '#27272a',
                  }}
                >
                  <div className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} mb-0 text-center`}
                  style={{ letterSpacing: '-0.6px' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm md:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} leading-normal text-center`}
                  style={{ letterSpacing: '-0.3px' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

