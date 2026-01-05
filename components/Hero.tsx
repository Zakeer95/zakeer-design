"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import MainCTA from "./MainCTA";
import SecondaryCTA from "./SecondaryCTA";


export default function Hero() {
  const logosRef = useRef<HTMLDivElement>(null);
  const [animationDistance, setAnimationDistance] = useState(0);
  const { isDarkMode } = useTheme();

  // Framer-style animation variants - blur to unblur with opacity fade and Y position
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Smoother Framer-style easing
      },
    },
  } as const;

  // Profile section container - reveals children one by one
  const profileContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  } as const;

  // Profile item variants - for profile picture and badge
  const profileItemVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)",
      y: -30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  } as const;

  // Logo configuration - theme-aware (ready for dark mode images when available)
  const getLogoPath = (logoName: string) => {
    // For now, use light mode images. When dark mode images are added,
    // uncomment the line below and they'll be used automatically
    // const mode = isDarkMode ? "dark mode desktop" : "light mode desktop";
    const mode = "light mode desktop";
    return `/images/experts/${mode}/${logoName}.svg`;
  };

  const logos = [
    { icon: "Ai", text: "AI", case: "uppercase", imageName: "ai" },
    { icon: "Ae", text: "AE", case: "uppercase", imageName: "ae" },
    { icon: "Ps", text: "PS", case: "uppercase", imageName: "ps" },
    { icon: "C", text: "CURSOR", case: "uppercase", imageName: "cursor" },
    { icon: "F", text: "FIGMA", case: "uppercase", imageName: "figma" },
    { icon: "F", text: "FRAMER", case: "uppercase", imageName: "framer" },
    { icon: "J", text: "JIRA", case: "uppercase", imageName: "jira" },
    { icon: "T", text: "TAILWIND", case: "uppercase", imageName: "tailwind" },
    { icon: "W", text: "WEBFLOW", case: "uppercase", imageName: "webflow" },
    { icon: "W", text: "WORDPRESS", case: "uppercase", imageName: "wordpress" },
  ].map(logo => ({
    ...logo,
    image: getLogoPath(logo.imageName),
  }));

  const originalLogoCount = logos.length; // 10 logos
  const logoCount = originalLogoCount * 3; // 3 sets for seamless infinite loop

  // Calculate animation distance based on actual width of one set of logos
  useEffect(() => {
    const calculateDistance = () => {
      if (logosRef.current) {
        const container = logosRef.current;
        const children = container.children;
        if (children.length >= originalLogoCount * 2) {
          // Get the position of the first logo in the second set
          const firstLogo = children[0] as HTMLElement;
          const secondSetFirstLogo = children[originalLogoCount] as HTMLElement;
          
          if (firstLogo && secondSetFirstLogo) {
            const firstRect = firstLogo.getBoundingClientRect();
            const secondRect = secondSetFirstLogo.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // Calculate the distance from first logo to second set's first logo
            const distance = secondRect.left - firstRect.left;
            setAnimationDistance(-distance);
          }
        }
      }
    };

    // Calculate after logos are rendered
    const timer = setTimeout(calculateDistance, 100);
    
    // Recalculate on resize
    window.addEventListener('resize', calculateDistance);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateDistance);
    };
  }, [originalLogoCount]);

  return (
    <div className={isDarkMode ? 'bg-black' : 'bg-white'}>
      {/* Hero Content */}
      <motion.section
        className="flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-[900px] text-center flex flex-col gap-y-0">
          {/* Profile Picture with Overlapping Badge */}
          <motion.div
            className="flex flex-col items-center mb-8"
            variants={profileItemVariants}
          >
            <div className="relative">
              {/* Profile Picture */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'} flex items-center justify-center overflow-hidden`}>
                <Image
                  src="/zakeer.jpg"
                  alt="Zakeer Sadikeen"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.1) translateY(-4px)' }}
                  priority
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                />
              </div>
              
              {/* Status Badge - Overlapping */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-4 sm:-mt-5 md:-mt-6 flex justify-center">
                <div className={`inline-flex items-center gap-1.5 sm:gap-2 pl-[10px] sm:pl-[12px] pr-[7px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
                  <div className="relative flex items-center justify-center">
                    {/* Animated beaming circle */}
                    <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 beam-animation"></div>
                    {/* Green dot */}
                    <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className={`text-xs sm:text-sm md:text-[16px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>Available for new projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold ${isDarkMode ? 'text-zinc-50' : ''} leading-[1.05] mx-auto px-2 sm:px-0 my-0 mb-3 sm:mb-4`}
            style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}
            variants={itemVariants}
          >
            <span className="lg:hidden">
              Crafting seamless interactions that users love and businesses trust.
            </span>
            <span className="hidden lg:inline">
              Crafting seamless interactions that<br />
              users love and businesses trust.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className={`text-[14px] sm:text-[16px] font-light mx-auto text-center px-2 sm:px-0 ${isDarkMode ? 'text-white' : ''} mb-8 leading-[14px] sm:leading-[22px]`}
            style={{ color: isDarkMode ? '#ffffff' : '#171717', letterSpacing: '-0.6px' }}
            variants={itemVariants}
          >
            Design that inspires confidence,
            strengthens brand<br /> credibility, and accelerates meaningful business growth.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 mb-14 sm:mb-16"
            variants={itemVariants}
          >
            <MainCTA>
              Let&apos;s Talk
            </MainCTA>
            <SecondaryCTA
              onClick={() => {
                const testimonialsSection = document.getElementById('testimonials');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Testimonials
            </SecondaryCTA>
          </motion.div>

          {/* Technology Logos */}
          <motion.div
            className="w-full max-w-[75%] mx-auto overflow-hidden relative"
            variants={itemVariants}
          >
            {/* Left fade out - logos fade out as they exit left */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 lg:w-64 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-r from-black via-black/80 to-transparent' : 'bg-gradient-to-r from-white via-white/80 to-transparent'}`}></div>
            
            {/* Right fade in - logos fade in as they enter from right */}
            <div className={`absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 lg:w-64 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-l from-black via-black/80 to-transparent' : 'bg-gradient-to-l from-white via-white/80 to-transparent'}`}></div>
            
            <motion.div
              ref={logosRef}
              className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
              initial={{ x: 0 }}
              animate={{
                x: animationDistance,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              {[...Array(logoCount)].map((_, i) => {
                const logo = logos[i % logos.length];
                return (
                  <div key={i} className={`flex items-center gap-2 sm:gap-3 opacity-40 flex-shrink-0 whitespace-nowrap ${isDarkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    <Image 
                      src={logo.image} 
                      alt={logo.text} 
                      width={120} 
                      height={40} 
                      className={`${
                        logo.text === "WEBFLOW" || logo.text === "TAILWIND"
                          ? "h-[14px] sm:h-[18px] md:h-[22px] w-auto object-contain"
                          : logo.text === "JIRA"
                          ? "h-4 sm:h-5 md:h-6 w-auto object-contain"
                          : "h-5 sm:h-6 md:h-7 w-auto object-contain"
                      } ${isDarkMode ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

