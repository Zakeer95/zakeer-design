"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  content: string;
  platform: "RapidLoad AI" | "Fiverr" | "Upwork";
  avatarInitials: string;
  padding?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ilyat Khomirov",
    location: "Estonia",
    content:
      "He was polite, professional and smart. Made all I asked and a bit more. The work he did has a very high quality and unique design. It is important that he made it by himselve. So... I really advise this person!",
    platform: "Fiverr",
    avatarInitials: "IK",
  },
  {
    id: 2,
    name: "Oren Ariel",
    location: "Israel",
    content: "Great Designer, Good Quality Job. Delivered on time",
    platform: "Upwork",
    avatarInitials: "OA",
  },
  {
    id: 3,
    name: "Nursebae",
    location: "United States",
    content:
      "This guy was very proactive and patient. Will definitely do work with him again.",
    platform: "Fiverr",
    avatarInitials: "N",
  },
  {
    id: 4,
    name: "Neilsara",
    location: "Canada",
    content:
      "It was a pleasure working with one of Fiverr's \"soon to be discovered\" talents. Very responsive, capable and accommodating. We will work together again. Highly recommended.",
    platform: "Fiverr",
    avatarInitials: "N",
  },
  {
    id: 5,
    name: "Sara Abty",
    location: "Switzerland",
    content:
      "Zakeer is truly amazing! He is the best Fiverr seller I have worked with. He is attentive, very patient, and doesn't finish the work until we are completely satisfied! I highly recommend him!!",
    platform: "Fiverr",
    avatarInitials: "SA",
  },
  {
    id: 6,
    name: "Shakeeb",
    role: "Founder",
    company: "RapidLoad AI",
    content:
      "Zakeer nailed it. The new design makes RapidLoad instantly clear and effortless to use. It looks modern and we're already seeing more signups from users who get it right away.",
    platform: "RapidLoad AI",
    avatarInitials: "S",
  },
  {
    id: 7,
    name: "Jimmy Munter",
    location: "Sweden",
    content:
      "Good designer and providing new examples until employer is happy with the result.",
    platform: "Upwork",
    avatarInitials: "JM",
  },
  {
    id: 8,
    name: "Tanja Hummel",
    location: "United States",
    content: "I enjoy working with Zakeer. His work is always great quality!",
    platform: "Upwork",
    avatarInitials: "TH",
    padding: 20,
  },
  {
    id: 9,
    name: "Gabriel Ferguson",
    role: "Marketing Analyst",
    company: "Seaway",
    content:
      "I have worked with many designers, but Mr. Zakeer is different, different in the ease of understanding you, different in his patience and politeness, different in his passion and attention to the smallest details, and he works his work out of passion, just as he touched this thing after his work was finished. If you are looking for a creative person who is different from the rest, I advise you not to cross this person. Because it actually saves time for you, understands the perceptions you have in your mind, and applies them in reality smoothly and in a creative and satisfying way.",
    platform: "Fiverr",
    avatarInitials: "GF",
  },
];

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "RapidLoad AI":
      return "text-purple-600";
    case "Fiverr":
      return "text-green-600";
    case "Upwork":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};

export default function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  // Split into 2 rows - evenly distribute
  const row1 = duplicatedTestimonials.filter((_, index) => index % 2 === 0);
  const row2 = duplicatedTestimonials.filter((_, index) => index % 2 === 1);

  const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
    <div
      key={`${testimonial.id}-${index}`}
      className="testimonial-card flex-shrink-0 w-[380px] h-[320px] bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col"
    >
      {/* Platform Logo */}
      <div className="mb-3">
        <span
          className={`text-lg font-semibold ${getPlatformColor(
            testimonial.platform
          )}`}
        >
          {testimonial.platform}
        </span>
      </div>

      {/* Testimonial Text */}
      <p 
        className={`text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm flex-1 overflow-hidden line-clamp-5 ${testimonial.padding ? 'mb-0' : 'mb-4'}`}
      >
        {testimonial.content}
      </p>

      {/* Spacer before divider */}
      {testimonial.padding !== undefined && testimonial.padding > 0 && (
        <div style={{ height: `${testimonial.padding}px`, flexShrink: 0 }} />
      )}

      {/* Divider Line */}
      <div className={`h-4 bg-zinc-200 dark:bg-zinc-800 ${testimonial.padding ? 'mb-0' : 'mb-3'}`} style={{ height: '16px' }}></div>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {testimonial.avatarInitials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-black dark:text-zinc-50 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
            {testimonial.role && testimonial.company
              ? `${testimonial.role} at ${testimonial.company}`
              : testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );

  // Calculate the distance to move (half the content width for seamless loop)
  // Card width (380px) + gap (24px) = 404px per card
  const cardWidth = 380;
  const gap = 24;
  const cardWithGap = cardWidth + gap;
  const row1Width = (row1.length / 2) * cardWithGap - gap; // Half since duplicated
  const row2Width = (row2.length / 2) * cardWithGap - gap;

  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[55px] font-semibold text-center mb-12 dark:text-zinc-50" style={{ color: 'var(--heading-color, #171717)', letterSpacing: '-1.7px' }}>
          FEEDBACK THAT SPEAKS FOR ITSELF
        </h2>
        <div className="testimonials-container">
          {/* Row 1 */}
          <div className="testimonials-row-wrapper">
            <motion.div
              className="testimonials-row flex gap-6"
              animate={{
                x: [0, -row1Width],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              }}
            >
              {row1.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </div>
          
          {/* Row 2 */}
          <div className="testimonials-row-wrapper">
            <motion.div
              className="testimonials-row flex gap-6"
              animate={{
                x: [0, -row2Width],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              }}
            >
              {row2.map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

