import Image from "next/image"

// Card component replaced with styled div

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has completely transformed how we work. The efficiency gains are remarkable and our team loves it.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Designer, Creative Studio",
    content: "An absolute game-changer for our design workflow. Intuitive, powerful, and a joy to use every day.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "The results speak for themselves. We've seen a 3x increase in productivity since implementing this solution.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    content:
      "Finally, a tool that just works. No complicated setup, no learning curve. Just pure productivity from day one.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Founder, StartupXYZ",
    content:
      "I wish we had found this sooner. It's rare to find a product that delivers on all its promises and then some.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO, InnovateLab",
    content: "Exceptional quality and support. The team behind this product clearly understands what developers need.",
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Trusted by leaders section with overlapping avatars */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Clients/gabriel.png"
                  alt="Leader 1"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Clients/tanja.png"
                  alt="Leader 2"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Clients/neilsara.png"
                  alt="Leader 3"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-sm text-zinc-600">Trusted by leaders</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Feedback that speaks for itself</h2>
        </div>

        <div className="flex flex-wrap gap-4 items-stretch">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
            <div className="p-6 h-[320px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[0].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[0].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>

            <div className="p-6 h-[220px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[1].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[1].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[1].role}</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
            <div className="p-6 h-[220px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[2].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[2].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[2].role}</p>
              </div>
            </div>

            <div className="p-6 h-[320px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[3].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[3].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[3].role}</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
            <div className="p-6 flex-1 flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[4].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[4].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[4].role}</p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
            <div className="p-6 h-[320px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[5].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[5].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[5].role}</p>
              </div>
            </div>

            <div className="p-6 h-[220px] flex flex-col justify-between bg-white border border-zinc-200 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">"{testimonials[1].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[1].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[1].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
