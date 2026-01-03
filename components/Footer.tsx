"use client";

export default function Footer() {
  const links = [
    { name: "Linktree", url: "https://linktr.ee/zakeer95" },
    { name: "Dribbble", url: "https://dribbble.com/zakee95" },
    { name: "X (Twitter)", url: "https://x.com/zakeer_sadikeen" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/zakeer-sadikeen-6a5450171/" },
  ];

  return (
    <footer className="w-full bg-[#171717] p-8 sm:p-12 md:p-16 lg:p-20">
      <div className="w-full max-w-[720px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Row - Left and Right Sections */}
          <div className="flex flex-row md:flex-row justify-between items-start gap-4 md:gap-12">
            {/* Left Section */}
            <div className="flex flex-col items-start justify-between gap-6 flex-1">
              {/* Name */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white" style={{ letterSpacing: '-1.2px' }}>
                Zakeer Sadikeen
              </h2>

              {/* Description */}
              <div className="flex flex-col items-start text-white" style={{ letterSpacing: '-0.3px' }}>
                <p className="text-sm sm:text-base">Made with care and gusto,</p>
                <p className="text-sm sm:text-base">from Sri Lanka</p>
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-1.5 items-end">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm sm:text-base text-zinc-400 hover:text-zinc-200 transition-colors text-right flex items-center gap-1.5 justify-end"
                  style={{ letterSpacing: '-0.3px' }}
                >
                  <span>{link.name}</span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path 
                      d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5" 
                      stroke="currentColor" 
                      strokeWidth="1.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Divider - Full Width Row */}
          <div className="w-full h-px bg-zinc-500/50"></div>

          {/* Bottom Row - Email */}
          <div className="flex justify-end">
            <a 
              href="mailto:zakeermohomed95@gmail.com" 
              className="text-sm sm:text-base text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5"
              style={{ letterSpacing: '-0.3px' }}
            >
              <span>zakeermohomed95@gmail.com</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

