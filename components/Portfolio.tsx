"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Portfolio() {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      image: "/images/portfolio/Rapidload.webp",
      title: "RapidLoad AI",
      description: "Built a high-performance WordPress plugin that uses AI to accelerate CSS, JS, and asset delivery for faster load times.",
    },
    {
      image: "/images/portfolio/Plugin0.webp",
      title: "PluginO",
      description: "Developed an AI-powered WordPress suite that streamlines plugin creation, performance, and WooCommerce integration.",
    },
    {
      image: "/images/portfolio/New Millennium.webp",
      title: "New Millennium",
      description: "Created a sleek, responsive education platform showcasing academic excellence and modern solutions for learners.",
    },
    {
      image: "/images/portfolio/Onique.webp",
      title: "Onique Business",
      description: "Designed a modern business website delivering premium visual communication solutions for events, trade shows, and retail spaces.",
    },
  ];

  return (
    <div id="projects" className={`flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full max-w-[720px] flex flex-col items-center gap-6 sm:gap-8">
        {/* Portfolio Tag */}
        <div className="relative">
          <div className={`relative inline-flex items-center px-[12px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
            <p className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>
              Portfolio
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} text-center leading-[1.05] px-2 sm:px-0`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
          Recent projects
        </h2>

        {/* Project Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full rounded-[10px] overflow-hidden border border-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Info */}
              <div className="py-4 sm:py-5 md:py-6 pr-4 sm:pr-5 md:pr-6 flex flex-col gap-2">
                {/* Title */}
                <h3
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold ${isDarkMode ? 'text-zinc-50' : 'text-black'} mb-0 text-left`}
                  style={{ letterSpacing: '-0.6px' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm md:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} leading-normal text-left`}
                  style={{ letterSpacing: '-0.3px' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

