import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  Location01Icon,
  Timer02Icon,
} from "@hugeicons/core-free-icons"

import { CoachNote } from "@/components/coach-note"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

import { SectionHeading } from "./section-heading"

// Rule one: a habit or a goal, as on the first page of the contract.
function PickVignette() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Habit", hint: "repeats", on: true },
          { label: "Goal", hint: "one deadline", on: false },
        ].map((option) => (
          <div
            key={option.label}
            className={cn(
              "flex flex-col gap-0.5 rounded-[20px] border-2 bg-background px-4 py-3.5",
              option.on ? "border-primary" : "border-transparent"
            )}
          >
            <span className="font-semibold">{option.label}</span>
            <span className="text-sm text-muted-foreground">{option.hint}</span>
          </div>
        ))}
      </div>
      <div className="rounded-[20px] bg-background px-5 py-4">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          I will
        </p>
        <p className="mt-1 font-heading text-[1.7rem] leading-tight">
          Go to the gym
          <span className="ml-0.5 inline-block h-6 w-0.5 translate-y-0.5 bg-primary motion-safe:animate-pulse" />
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {["Daily", "3× a week", "4× a week", "5× a week"].map((label) => (
          <span
            key={label}
            className={cn(
              "inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold",
              label === "Daily"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground"
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

const PROOFS = [
  { icon: Camera01Icon, label: "Photo", hint: "AI checks it" },
  { icon: Location01Icon, label: "Location", hint: "be there" },
  { icon: Timer02Icon, label: "Timer", hint: "app open" },
]

// Rule two: how it gets proved.
function ProveVignette() {
  return (
    <div className="flex flex-col gap-3">
      {PROOFS.map((proof, index) => (
        <div
          key={proof.label}
          className={cn(
            "flex items-center gap-4 rounded-[20px] border-2 bg-background p-3 pr-5",
            index === 1 ? "border-primary" : "border-transparent"
          )}
        >
          <span className="flex size-12 items-center justify-center rounded-2xl bg-muted">
            <HugeiconsIcon icon={proof.icon} size={22} strokeWidth={1.75} />
          </span>
          <span className="flex-1 font-semibold">{proof.label}</span>
          <span className="text-sm text-muted-foreground">{proof.hint}</span>
        </div>
      ))}
      <p className="px-2 pt-1 text-sm text-muted-foreground">
        Check in at{" "}
        <span className="font-semibold text-foreground">Crunch Fitness</span>,
        every day.
      </p>
    </div>
  )
}

// Rule three: the last call, then the bill. Push copy straight from the app.
function MissVignette() {
  const pushes = [
    {
      time: "1:04 AM",
      title: "Last call: Go to the gym",
      body: "2h to log it, or $20 is charged.",
    },
    {
      time: "3:00 AM",
      title: "Go to the gym: streak broken",
      body: "12 in a row, then a miss. $20 was charged.",
      cost: true,
    },
  ]
  return (
    <div className="flex flex-col gap-3">
      {pushes.map((push) => (
        <div
          key={push.title}
          className="flex gap-3 rounded-[22px] bg-background p-3.5 pr-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static icon */}
          <img
            src="/ante-icon.webp"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <p className="truncate text-[15px] font-semibold">{push.title}</p>
              <span className="shrink-0 text-xs text-muted-foreground">
                {push.time}
              </span>
            </div>
            <p
              className={cn(
                "text-[15px]",
                push.cost ? "font-medium text-stake" : "text-muted-foreground"
              )}
            >
              {push.body}
            </p>
          </div>
        </div>
      ))}
      <CoachNote
        arrow="up-left"
        className="self-end pt-1 pr-2 text-muted-foreground"
        tilt={-3}
      >
        the day runs till 3am. no excuses.
      </CoachNote>
    </div>
  )
}

const RULES = [
  {
    title: "Pick one thing",
    body: "A daily or weekly habit, or a goal with a deadline. Write it like you mean it, and decide now how you'll prove it.",
    vignette: <PickVignette />,
  },
  {
    title: "Prove it, every time",
    body: "No honor system. A photo taken in Ante and checked by AI, a check-in from the place you said you'd be, or a timer you can't leave.",
    vignette: <ProveVignette />,
  },
  {
    title: "Miss it, and it costs you",
    body: "Ante nudges you before the day runs out. If you still miss, whatever you put on the line goes: your card is charged once, your friend gets one email, or your habits freeze.",
    vignette: <MissVignette />,
  },
]

function Deal() {
  return (
    <section
      id="how"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <Reveal>
        <SectionHeading
          kicker="How it works"
          title="Here's the deal."
          lede="Ante is simple, and it doesn't let you off easy."
        />
      </Reveal>

      <ol className="mt-10 flex flex-col gap-5 sm:mt-12">
        {RULES.map((rule, index) => (
          <Reveal
            as="li"
            key={rule.title}
            className="grid items-center gap-8 rounded-[32px] bg-muted p-6 sm:p-8 md:grid-cols-2 md:gap-12 lg:p-10"
          >
            <div className="flex flex-col gap-3">
              <span className="font-heading text-5xl leading-none text-violet-text sm:text-6xl">
                {index + 1}
              </span>
              <h3 className="font-heading text-2xl leading-tight sm:text-3xl">
                {rule.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                {rule.body}
              </p>
            </div>
            <div className="w-full max-w-md md:justify-self-end">
              {rule.vignette}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export { Deal }
