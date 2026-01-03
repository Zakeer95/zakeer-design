"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"

interface Testimonial {
  name: string
  role?: string
  location?: string
  company?: string
  content: string
  platform: "fiverr" | "upwork" | "rapidload"
  avatarImage?: string
  avatarInitials?: string
  padding?: number // Custom padding above divider in pixels
}

const testimonials: Testimonial[] = [
  {
    name: "Shakeeb",
    role: "Founder",
    company: "RapidLoad AI",
    content:
      "Zakeer nailed it. The new design makes RapidLoad instantly clear and effortless to use. It looks modern and we're already seeing more signups from users who get it right away.                                    ",
    platform: "rapidload",
    avatarImage: "/images/Clients/shakeeb.png",
  },
  {
    name: "Tanja Hummel",
    location: "United States",
    content: "I enjoy working with Zakeer. His work is always great quality!",
    platform: "upwork",
    avatarImage: "/images/Clients/tanja.png",
    padding: 6 ,
  },
  {
    name: "Gabriel Ferguson",
    role: "Marketing Analyst",
    company: "Seaway",
    content:
      "I have worked with many designers, but Mr. Zakeer is different, different in the ease of understanding you, different in his patience and politeness, different in his passion and attention to the smallest details, and he works his work out of passion, just as he touched this thing after his work was finished. If you are looking for a creative person who is different from the rest, I advise you not to cross this person. Because it actually saves time for you, understands the perceptions you have in your mind, and applies them in reality smoothly and in a creative and satisfying way.",
    platform: "fiverr",
    avatarImage: "/images/Clients/gabriel.png",
    padding: 40 ,
  },
  {
    name: "Ilyat Khomirov",
    location: "Estonia",
    content:
      "He was polite, professional and smart. Made all I asked and a bit more. The work he did has a very high quality and unique design. It is important that he made it by himselve. So I really advise this person!",
    platform: "fiverr",
    avatarImage: "/images/Clients/Ilyat.png",
    padding: 6 ,
  },
  {
    name: "Oren Ariel",
    location: "Israel",
    content: "Great Designer, Good Quality Job. Delivered on time",
    platform: "upwork",
    avatarImage: "/images/Clients/oren.png",
  },
  {
    name: "Nursebae",
    location: "United States",
    content: "This guy was very proactive and patient. Will definitely do work with him again.",
    platform: "fiverr",
    avatarImage: "/images/Clients/nursebae.png",
  },
  {
    name: "Neilsara",
    location: "Canada",
    content:
      'It was a pleasure working with one of Fiverr\'s "soon to be discovered" talents. Very responsive, capable and accommodating. We will work together again. Highly recommended.',
    platform: "fiverr",
    avatarImage: "/images/Clients/neilsara.png",
    padding: 6 ,
  },
  {
    name: "Sara Abty",
    location: "Switzerland",
    content:
      "Zakeer is truly amazing! He is the best Fiverr seller I have worked with. He is attentive, very patient, and doesn't stop the work until we are completely satisfied I highly recommend him!",
    platform: "fiverr",
    avatarImage: "/images/Clients/sarah.png",
    padding: 6 ,
  },
  {
    name: "Jimmy Munter",
    location: "Sweden",
    content: "Good designer and providing new examples until employer is happy with the result.",
    platform: "upwork",
    avatarImage: "/images/Clients/jimmy.png",
  },
  {
    name: "Max Tribunsky",
    location: "United States",
    content: "Zakeer did some great work for me. He has fantastic skills and got the job done quickly.",
    platform: "upwork",
    avatarImage: "/images/Clients/max.png",
    padding: 17 ,
  },
  {
    name: "Shelley Finch",
    location: "South Africa",
    content:
      "Zakeer completed the project very well and within the time frames I needed. I Very much appreciate his work!",
    platform: "upwork",
    avatarImage: "/images/Clients/Shelley.png",
    padding: 29,
  },
]

function getPlatformLogo(platform: string) {
  switch (platform) {
    case "fiverr":
      return "Fiverr"
    case "upwork":
      return "Upwork"
    case "rapidload":
      return "RapidLoad AI"
    default:
      return ""
  }
}

function getPlatformColor(platform: string) {
  switch (platform) {
    case "fiverr":
      return "text-zinc-900"
    case "upwork":
      return "text-[#14a800]"
    case "rapidload":
      return "text-[#7c3aed]"
    default:
      return "text-zinc-900"
  }
}

function TestimonialCard({
  testimonial,
  isDarkMode,
}: {
  testimonial: Testimonial
  isDarkMode: boolean
}) {
  return (
    <div
      className={`rounded-xl border flex flex-col ${
        isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
      }`}
      style={{
        width: "100%",
        boxSizing: "border-box",
        minHeight: "200px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Platform Logo */}
      <div className="mb-4">
        {testimonial.platform === "upwork" ? (
          <Image
            src="/upwork.svg"
            alt="Upwork"
            width={77}
            height={22}
            className={`h-5 w-auto ${isDarkMode ? "brightness-0 invert" : ""}`}
          />
        ) : testimonial.platform === "fiverr" ? (
          <Image
            src={isDarkMode ? "/fiverr dark.svg" : "/fiverr.svg"}
            alt="Fiverr"
            width={53}
            height={16.058}
            className="h-4 w-auto"
          />
        ) : testimonial.platform === "rapidload" ? (
          <svg width="101.905" height="19.411" viewBox="0 0 101.905 19.411" fill="none" className="h-5 w-auto">
            <g>
              <path d="M 9.745 19.049 C 14.847 18.763 18.782 14.479 18.49 9.48 C 18.443 8.687 18.297 7.903 18.053 7.146 L 17.907 7.241 C 18.15 8.003 18.296 8.813 18.296 9.622 C 18.296 14.003 14.652 17.526 10.182 17.526 L 9.745 17.526 Z" fill="rgb(181,156,211)"></path>
              <path d="M 1.624 15.293 C 3.276 17.673 5.997 19.149 8.912 19.245 L 8.912 17.626 C 6.628 17.245 4.685 16.245 3.422 14.293 L 1.624 15.294 Z" fill="rgb(160,128,198)"></path>
              <path d="M 0.782 6.172 C -0.383 8.909 -0.24 12.028 1.17 14.647 L 3.017 13.599 C 2.091 11.661 2.145 9.397 3.162 7.505 Z" fill="rgb(149,114,192)"></path>
              <path d="M 8.748 0 C 5.444 0.381 2.529 2.333 0.975 5.19 L 3.404 6.57 C 4.616 4.813 6.568 3.707 8.699 3.571 L 8.699 0 Z" fill="rgb(139,100,185)"></path>
              <path d="M 18.053 3.909 C 16.061 1.386 12.952 -0.091 9.745 0.004 L 9.745 3.623 C 11.494 3.719 13.098 4.385 14.361 5.575 Z" fill="rgb(127,84,179)"></path>
              <path d="M 9.172 8.771 C 10.095 8.771 10.872 9.485 10.872 10.437 C 10.872 11.341 10.143 12.103 9.172 12.103 C 8.249 12.103 7.471 11.389 7.471 10.437 C 7.471 9.532 8.249 8.771 9.172 8.771 Z" fill={isDarkMode ? "rgb(255,255,255)" : "rgb(86,90,99)"}></path>
              <path d="M 20.076 4.548 L 15.023 7.927 L 9.97 11.26 L 9.533 10.498 L 9.096 9.737 L 14.585 7.166 L 20.075 4.548 Z" fill={isDarkMode ? "rgb(255,255,255)" : "rgb(86,90,99)"}></path>
              <path d="M 21.579 3.439 L 20.171 4.867 L 20.122 4.867 L 20.073 4.819 C 20.024 4.629 19.976 4.439 19.879 4.296 C 19.782 4.153 19.684 4.01 19.539 3.867 C 19.49 3.867 19.49 3.819 19.49 3.772 L 19.539 3.725 L 21.531 3.248 C 21.579 3.248 21.579 3.248 21.579 3.296 C 21.628 3.391 21.628 3.439 21.579 3.439 Z" fill="rgb(127,84,179)"></path>
              <path d="M 22.414 16.703 L 22.414 7.227 L 25.473 7.214 C 27.598 7.2 28.898 8.243 28.898 10.097 C 28.898 11.599 28.058 12.521 26.624 12.831 L 29.277 16.703 L 27.044 16.703 L 25.026 13.698 C 24.883 13.48 24.761 13.249 24.661 13.007 L 24.309 13.007 L 24.309 16.703 Z M 24.309 11.302 L 25.365 11.302 C 26.393 11.302 26.976 10.882 26.976 10.11 C 26.976 9.353 26.393 8.933 25.365 8.933 L 24.309 8.933 Z M 32.599 16.879 C 30.663 16.879 29.12 15.241 29.12 13.211 C 29.12 11.18 30.663 9.515 32.598 9.515 C 33.817 9.515 34.453 10.015 34.832 10.774 L 34.832 9.664 L 36.646 9.664 L 36.646 16.703 L 34.872 16.703 L 34.872 15.553 C 34.494 16.351 33.858 16.879 32.598 16.879 Z M 30.947 13.198 C 30.947 14.267 31.732 15.228 32.896 15.228 C 34.101 15.228 34.872 14.307 34.872 13.211 C 34.872 12.115 34.101 11.167 32.897 11.167 C 31.732 11.167 30.948 12.101 30.948 13.198 Z M 37.732 19.411 L 37.732 9.664 L 39.532 9.664 L 39.532 10.801 C 39.911 10.029 40.547 9.515 41.779 9.515 C 43.715 9.515 45.258 11.18 45.258 13.211 C 45.258 15.241 43.714 16.879 41.779 16.879 C 40.575 16.879 39.938 16.391 39.559 15.661 L 39.559 19.41 L 37.732 19.41 Z M 39.505 13.211 C 39.505 14.307 40.276 15.228 41.482 15.228 C 42.645 15.228 43.431 14.266 43.431 13.198 C 43.431 12.101 42.645 11.167 41.482 11.167 C 40.276 11.167 39.505 12.115 39.505 13.211 Z M 46.073 16.703 L 46.073 9.664 L 47.9 9.664 L 47.9 16.703 L 46.073 16.703 Z M 45.883 8 C 45.883 7.417 46.357 6.93 46.98 6.93 C 47.616 6.93 48.076 7.417 48.076 8 C 48.076 8.609 47.616 9.083 46.98 9.083 C 46.357 9.083 45.883 8.595 45.883 8 Z M 52.19 16.879 C 50.254 16.879 48.711 15.242 48.711 13.211 C 48.711 11.18 50.254 9.516 52.19 9.516 C 53.394 9.516 54.03 10.003 54.409 10.748 L 54.409 6.822 L 56.236 6.822 L 56.236 16.703 L 54.463 16.703 L 54.463 15.553 C 54.084 16.352 53.448 16.879 52.189 16.879 Z M 50.538 13.198 C 50.538 14.267 51.323 15.228 52.487 15.228 C 53.692 15.228 54.463 14.308 54.463 13.212 C 54.463 12.115 53.692 11.168 52.487 11.168 C 51.323 11.168 50.538 12.102 50.538 13.198 Z" fill={isDarkMode ? "rgb(255,255,255)" : "rgb(86,90,99)"}></path>
              <path d="M 57.172 16.703 L 57.172 7.228 L 59.067 7.228 L 59.067 14.998 L 62.6 14.998 L 62.6 16.703 Z M 66.543 16.879 C 64.364 16.879 62.794 15.228 62.794 13.198 C 62.794 11.167 64.364 9.502 66.543 9.502 C 68.723 9.502 70.293 11.167 70.293 13.198 C 70.293 15.228 68.723 16.879 66.543 16.879 Z M 64.621 13.198 C 64.621 14.294 65.379 15.214 66.543 15.214 C 67.707 15.214 68.465 14.294 68.465 13.198 C 68.465 12.101 67.707 11.167 66.543 11.167 C 65.379 11.167 64.621 12.101 64.621 13.198 Z M 74.244 16.879 C 72.308 16.879 70.765 15.242 70.765 13.211 C 70.765 11.18 72.308 9.516 74.244 9.516 C 75.462 9.516 76.098 10.016 76.477 10.774 L 76.477 9.665 L 78.291 9.665 L 78.291 16.703 L 76.518 16.703 L 76.518 15.553 C 76.139 16.352 75.503 16.879 74.244 16.879 Z M 72.592 13.198 C 72.592 14.267 73.377 15.228 74.541 15.228 C 75.746 15.228 76.518 14.307 76.518 13.211 C 76.518 12.115 75.746 11.167 74.541 11.167 C 73.377 11.167 72.592 12.101 72.592 13.198 Z M 82.585 16.879 C 80.649 16.879 79.106 15.242 79.106 13.211 C 79.106 11.18 80.649 9.516 82.585 9.516 C 83.789 9.516 84.425 10.003 84.805 10.748 L 84.805 6.822 L 86.632 6.822 L 86.632 16.703 L 84.859 16.703 L 84.859 15.553 C 84.48 16.352 83.844 16.879 82.585 16.879 Z M 80.933 13.198 C 80.933 14.268 81.718 15.229 82.882 15.229 C 84.088 15.229 84.859 14.308 84.859 13.212 C 84.859 12.115 84.088 11.168 82.882 11.168 C 81.718 11.168 80.933 12.102 80.933 13.198 Z" fill={isDarkMode ? "rgb(255,255,255)" : "rgb(86,90,99)"}></path>
              <path d="M 89.713 16.171 C 89.143 16.171 88.682 15.709 88.682 15.14 L 88.682 8.828 C 88.682 8.258 89.143 7.796 89.713 7.796 L 100.873 7.796 C 101.443 7.796 101.905 8.258 101.905 8.828 L 101.905 15.14 C 101.905 15.709 101.443 16.171 100.873 16.171 Z" fill="rgb(127,84,179)"></path>
              <path d="M 92.58 14.158 L 93.829 10.07 L 94.981 10.07 L 96.23 14.158 L 95.436 14.158 L 94.323 10.552 L 94.47 10.552 L 93.375 14.158 Z M 93.329 13.306 L 93.329 12.585 L 95.486 12.585 L 95.486 13.306 Z M 96.796 14.157 L 96.796 10.07 L 97.568 10.07 L 97.568 14.158 L 96.796 14.158 Z" fill="rgb(255,255,255)"></path>
            </g>
          </svg>
        ) : (
          <span
            className={`text-base sm:text-lg font-semibold ${getPlatformColor(testimonial.platform)}`}
            style={{ letterSpacing: "-0.3px" }}
          >
            {getPlatformLogo(testimonial.platform)}
          </span>
        )}
      </div>

      {/* Testimonial Text */}
      <p
        className={isDarkMode ? "text-zinc-300" : "text-black"}
        style={{ 
          fontSize: "14px", 
          lineHeight: "20.2px", 
          letterSpacing: "-0.8px", 
          marginBottom: 0 
        }}
      >
        {testimonial.content}
      </p>

      {/* Spacer - Uses custom padding if provided, otherwise flex-1 */}
      {testimonial.padding !== undefined ? (
        testimonial.padding > 0 ? (
          <div style={{ height: `${testimonial.padding}px`, flexShrink: 0 }} />
        ) : null
      ) : (
        <div className="flex-1" style={{ minHeight: 0 }} />
      )}

      {/* Divider Line */}
      <div className={`h-px ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"} my-4`} />

      {/* User Profile Section */}
      <div className="flex items-center gap-3" style={{ flexShrink: 0 }}>
        {/* Profile Photo */}
        {testimonial.avatarImage ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.avatarImage}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-zinc-200 flex items-center justify-center text-black font-semibold text-base flex-shrink-0">
            {testimonial.avatarInitials}
          </div>
        )}

        {/* Name and Location/Title */}
        <div className="flex-1 min-w-0">
          <p
            className={`font-semibold ${isDarkMode ? "text-zinc-50" : "text-black"} text-sm sm:text-base`}
            style={{ letterSpacing: "-0.3px" }}
          >
            {testimonial.name}
          </p>
          <p
            className={`text-xs sm:text-sm ${isDarkMode ? "text-zinc-500" : "text-zinc-600"}`}
            style={{ letterSpacing: "-0.3px" }}
          >
            {testimonial.role && testimonial.company
              ? `${testimonial.role} at ${testimonial.company}`
              : testimonial.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Feedbacks() {
  const { isDarkMode } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const positionRef = useRef(0)

  const columns = [
    [testimonials[0], testimonials[1]], // Column 1: RapidLoad AI + Upwork
    [testimonials[2]], // Column 2: Gabriel Ferguson (fiverr)
    [testimonials[3], testimonials[4]], // Column 3: Ilyat + Oren
    [testimonials[5], testimonials[6]], // Column 4: Nursebae + Neilsara
    [testimonials[7], testimonials[8]], // Column 5: Sara + Jimmy
    [testimonials[9], testimonials[10]], // Column 6: Max + Shelley
  ]

  // Duplicate columns multiple times for seamless infinite scroll (using 3 sets)
  const duplicatedColumns = [...columns, ...columns, ...columns]

  // Continuous animation for seamless loop
  useEffect(() => {
    const columnWidth = 288 // width of each column
    const gap = 16 // gap-4 = 16px
    const singleSetWidth = columns.length * (columnWidth + gap) - gap
    const duration = 42000 // 42 seconds in milliseconds
    const speed = singleSetWidth / duration // pixels per millisecond

    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (containerRef.current) {
        const deltaTime = currentTime - lastTime
        lastTime = currentTime

        positionRef.current -= speed * deltaTime

        // Reset position when we've moved one full set (seamless loop)
        if (Math.abs(positionRef.current) >= singleSetWidth) {
          positionRef.current = positionRef.current + singleSetWidth
        }

        containerRef.current.style.transform = `translateX(${positionRef.current}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [columns.length])

  return (
    <section id="testimonials" className={`w-full py-16 sm:py-20 md:py-24 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="w-full max-w-[720px] mx-auto mb-12 flex flex-col items-center gap-3 sm:gap-4">
        {/* Trusted by leaders section with overlapping avatars */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center -space-x-2">
            <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? "border-black" : "border-white"} overflow-hidden`}>
              <Image
                src="/images/Clients/gabriel.png"
                alt="Leader 1"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? "border-black" : "border-white"} overflow-hidden`}>
              <Image
                src="/images/Clients/max.png"
                alt="Leader 2"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? "border-black" : "border-white"} overflow-hidden`}>
              <Image
                src="/images/Clients/neilsara.png"
                alt="Leader 3"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
          <p className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? "text-zinc-100" : "text-black"}`} style={{ letterSpacing: '-0.6px' }}>
            Trusted by leaders
          </p>
        </div>
        {/* Main Heading */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold ${isDarkMode ? "text-zinc-50" : "text-black"} text-center leading-[1.05] pl-2 pr-[3px] sm:pl-0 sm:pr-0`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
          Feedback that speaks for itself
        </h2>
      </div>
      <div className="w-full mx-auto overflow-hidden relative">
        {/* Left fade gradient */}
        <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
        
        {/* Right fade gradient */}
        <div className={`hidden lg:block absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

        {/* Animated carousel */}
        <div
          ref={containerRef}
          className="flex gap-4"
          style={{ minWidth: "max-content" }}
        >
          {duplicatedColumns.map((columnTestimonials, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-4"
              style={{
                width: "288px",
                flexShrink: 0,
              }}
            >
              {columnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${columnIndex}-${index}`} testimonial={testimonial} isDarkMode={isDarkMode} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
