"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import Experience from "./Experience";

export default function About() {
  const { isDarkMode } = useTheme();
  const experiencesContainerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire experiences container
  // Animation starts when logo hits 70% of viewport
  const { scrollYProgress } = useScroll({
    target: experiencesContainerRef,
    offset: ["start 0.7", "end 0.1"],
  });

  const achievements = [
    "10+ Years of experience",
    "8+ Projects completed",
    "Trusted by founders",
  ];

  return (
    <div id="about" className={`flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="w-full max-w-[720px] text-center flex flex-col gap-y-0">
        {/* Greeting Bubble */}
        <div className="relative mb-8">
          <div className={`relative inline-flex items-center px-[12px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
            <p className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>
              Hi, I am Zakeer Sadikeen
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold ${isDarkMode ? 'text-zinc-50' : ''} leading-[1.05] mx-auto px-2 sm:px-0 mb-6`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
          I design what businesses want to say into what users want to feel.
        </h1>

        {/* Achievement Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`inline-flex items-center px-[12px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}
            >
              <span className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Components */}
      <div ref={experiencesContainerRef} className="w-full mt-16 sm:mt-20 md:mt-24 flex flex-col gap-5">
        <Experience
          index={0}
          totalExperiences={4}
          globalScrollProgress={scrollYProgress}
          logo="/images/experts/light mode desktop/plugin0.svg"
          logoAlt="PluginO Logo"
          jobTitle="Design Lead"
          roleType="Current Role • Full Time"
          companyName="PluginO"
          duration="Mar 2025 - Present"
          description="Built long-term trust with 100+ global clients by delivering designs that impressed their audiences."
          metric1="5 → 12 Team Growth"
          metric2="+20% Product Retention"
          ctaText="Visit site"
          ctaUrl="https://plugin0.com/"
        />
        <Experience
          index={1}
          totalExperiences={4}
          globalScrollProgress={scrollYProgress}
          logo="/images/experts/light mode desktop/rapidload.svg"
          logoAlt="RapidLoad AI Logo"
          jobTitle="UI / UX Designer"
          roleType="UI / UX • Full Time"
          companyName="RapidLoad AI"
          duration="2019 – Mar 2025"
          description="Crafted intuitive digital experiences that seamlessly connected users with technology."
          metric1="+65% User Adoption"
          metric2="+30% Conversion Rate"
          ctaText="Visit site"
          ctaUrl="https://rapidload.ai"
        />
        <Experience
          index={2}
          totalExperiences={4}
          globalScrollProgress={scrollYProgress}
          logo="/images/experts/light mode desktop/freshpixl.svg"
          logoAlt="Freshpixl CA Logo"
          jobTitle="Brand & Identity Designer"
          roleType="Designer • Full Time"
          companyName="Freshpixl CA"
          duration="2017 – 2019"
          description="Translated business values into strong visual identities that resonated with audiences."
          metric1="25+ Brand Identities Built"
          metric2="+40% Site Engagement"
          ctaText="Visit site"
          ctaUrl="https://freshpixl.com/"
        />
        <Experience
          index={3}
          totalExperiences={4}
          globalScrollProgress={scrollYProgress}
          logo="/images/experts/light mode desktop/online-platforms.svg"
          logoAlt="Upwork & Fiverr Logo"
          jobTitle="Graphic Designer"
          roleType="Designer • Image Composition"
          companyName="Upwork & Fiverr"
          duration="2016 – Present"
          description="Delivered versatile design solutions across industries, building a reputation for reliability and creativity."
          metric1="120+ Projects Delivered"
          metric2="100% Job Success"
          ctaText=""
          ctaUrl=""
          rightSideText="5 star Rated"
        />
      </div>
    </div>
  );
}

