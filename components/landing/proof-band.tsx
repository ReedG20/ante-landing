import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  Dumbbell01Icon,
  Location01Icon,
  Tick02Icon,
  Timer02Icon,
} from "@hugeicons/core-free-icons"

import { CoachNote } from "@/components/coach-note"
import { Reveal } from "@/components/reveal"

import { SectionHeading } from "./section-heading"

// The proof screens are always dark in the app, so this band is too.

function PhotoStage() {
  return (
    <div className="relative aspect-[5/6] overflow-hidden rounded-[24px] bg-[radial-gradient(120%_80%_at_50%_100%,#2a2450_0%,#16142a_60%)]">
      <div className="absolute inset-0 flex items-center justify-center text-glow-soft/80">
        <HugeiconsIcon icon={Dumbbell01Icon} size={84} strokeWidth={1.25} />
      </div>
      {/* Viewfinder corners */}
      {[
        "top-4 left-4 border-t-2 border-l-2 rounded-tl-xl",
        "top-4 right-4 border-t-2 border-r-2 rounded-tr-xl",
        "bottom-4 left-4 border-b-2 border-l-2 rounded-bl-xl",
        "bottom-4 right-4 border-b-2 border-r-2 rounded-br-xl",
      ].map((corner) => (
        <span
          key={corner}
          className={`absolute size-7 border-white/40 ${corner}`}
        />
      ))}
      <span className="absolute inset-x-5 h-0.5 rounded-full bg-glow shadow-[0_0_24px_6px_rgba(124,102,255,0.55)] motion-safe:animate-[scan_3.2s_ease-in-out_infinite] motion-reduce:top-1/2" />
      <span className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-white backdrop-blur">
        <HugeiconsIcon
          icon={Tick02Icon}
          size={16}
          strokeWidth={2.4}
          className="text-glow"
        />
        Looks like the gym
      </span>
    </div>
  )
}

function LocationStage() {
  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[24px] bg-proof-panel">
      {[0.35, 0.6, 0.85].map((scale) => (
        <span
          key={scale}
          className="absolute aspect-square rounded-full border border-glow/20"
          style={{ width: `${scale * 100}%` }}
        />
      ))}
      {[0, 1.2].map((delay) => (
        <span
          key={delay}
          className="absolute aspect-square w-[85%] rounded-full bg-glow/25 motion-safe:animate-[ping-ring_2.4s_cubic-bezier(0,0,0.2,1)_infinite]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      <span className="relative flex size-14 items-center justify-center rounded-full bg-glow text-white">
        <HugeiconsIcon icon={Location01Icon} size={26} strokeWidth={1.75} />
      </span>
      <span className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 flex-col items-center rounded-[16px] bg-black/60 px-4 py-2 text-center whitespace-nowrap text-white backdrop-blur">
        <span className="text-sm font-semibold">Crunch Fitness</span>
        <span className="text-xs text-white/60">You&apos;re here</span>
      </span>
    </div>
  )
}

function TimerStage() {
  // r = 42, circumference ≈ 264
  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[24px] bg-proof-panel">
      <svg viewBox="0 0 100 100" className="w-[78%] -rotate-90" aria-hidden>
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#2a2650"
          strokeWidth="5"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#7c66ff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="264"
          className="motion-safe:animate-[drain_20s_linear_infinite]"
          style={
            {
              "--drain-length": 264,
              strokeDashoffset: 70,
            } as React.CSSProperties
          }
        />
      </svg>
      <span className="absolute flex flex-col items-center">
        <span className="font-heading text-5xl text-white">20:00</span>
        <span className="text-sm text-white/55">stay in the app</span>
      </span>
      <span className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/60 px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-white backdrop-blur">
        Lock the phone and it ends
      </span>
    </div>
  )
}

const METHODS = [
  {
    icon: Camera01Icon,
    title: "Photo",
    hint: "AI checks it",
    body: "Taken inside Ante, so it can't be an old one. AI checks that it shows what you said it would.",
    stage: <PhotoStage />,
  },
  {
    icon: Location01Icon,
    title: "Location",
    hint: "be there",
    body: "Tap check in where you said you'd be, and Ante matches your location to the place you named.",
    stage: <LocationStage />,
  },
  {
    icon: Timer02Icon,
    title: "Timer",
    hint: "app open",
    body: "5 to 90 minutes with Ante open. Leave the app or lock your phone and the run ends.",
    stage: <TimerStage />,
  },
]

function ProofBand() {
  return (
    <section className="dark relative overflow-hidden bg-proof text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(124,102,255,0.22),transparent)]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              tone="inverse"
              kicker="The proof"
              title="Not the honor system."
              lede="Every check-in is proven, every time. Pick how when you make the commitment, and that's how it gets done."
            />
          </Reveal>
          <Reveal delay={150}>
            <CoachNote
              className="shrink-0 whitespace-nowrap text-glow-soft lg:pb-3"
              tilt={-4}
            >
              proof, or it didn&apos;t happen.
            </CoachNote>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {METHODS.map((method, index) => (
            <Reveal
              key={method.title}
              delay={index * 120}
              className="flex flex-col gap-4 rounded-[28px] bg-white/[0.04] p-4 ring-1 ring-white/[0.06]"
            >
              {method.stage}
              <div className="flex flex-col gap-2 px-2 pb-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <HugeiconsIcon
                      icon={method.icon}
                      size={20}
                      strokeWidth={1.75}
                      className="text-glow"
                    />
                    {method.title}
                  </h3>
                  <span className="font-note text-lg text-glow-soft/80 lowercase">
                    {method.hint}
                  </span>
                </div>
                <p className="leading-relaxed text-white/60">{method.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ProofBand }
