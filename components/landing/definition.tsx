import Image from "next/image"

import { Reveal } from "@/components/reveal"

// A poker chip in Ante violet, with the wordmark in the middle.
function Chip({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" aria-hidden className="size-full">
        <circle cx="100" cy="100" r="98" className="fill-primary" />
        {Array.from({ length: 8 }, (_, index) => (
          <rect
            key={index}
            x="88"
            y="2"
            width="24"
            height="30"
            rx="3"
            fill="white"
            transform={`rotate(${index * 45} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="64" className="fill-primary" />
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="6 7"
          strokeOpacity="0.7"
        />
      </svg>
      <Image
        src="/ante-mark.svg"
        alt=""
        width={34}
        height={11}
        className="absolute top-1/2 left-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 invert"
      />
    </div>
  )
}

function Definition() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        <Chip className="relative mx-auto size-40 -rotate-12 motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:rotate-[200deg] sm:size-52" />
        <div className="flex flex-col gap-5">
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-muted-foreground">
            <span className="font-heading text-4xl text-foreground sm:text-5xl">
              an·te
            </span>
            <span className="font-mono text-base">/ˈan.tē/</span>
            <span className="text-base italic">noun</span>
          </p>
          <p className="max-w-3xl font-heading text-3xl leading-[1.15] text-balance sm:text-[2.75rem]">
            The chip you put in before the hand.{" "}
            <span className="text-violet-text">No chip, no game.</span>
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Most habit apps ask nicely. Ante asks you to put something in first,
            so skipping always costs more than showing up.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export { Chip, Definition }
