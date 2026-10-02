"use client"

import { useId, useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  LockIcon,
  Mail01Icon,
  Money03Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { CoachNote } from "@/components/coach-note"
import { cn } from "@/lib/utils"

import { StakeChip } from "./stake-chip"

type Kind = "money" | "friend" | "lockout" | "none"

// Titles, details and badges as the app's stakes step words them.
const OPTIONS: {
  kind: Kind
  title: string
  detail: string
  icon: typeof Money03Icon
  badge?: string
}[] = [
  {
    kind: "money",
    title: "Put money on it",
    detail:
      "Break the streak and your card is charged. Nothing gets you up like money.",
    icon: Money03Icon,
    badge: "Most effective",
  },
  {
    kind: "friend",
    title: "Tell a friend",
    detail: "Miss it and someone you pick gets an email about it.",
    icon: Mail01Icon,
  },
  {
    kind: "lockout",
    title: "Lock me out",
    detail:
      "Break the streak and all your habits freeze for a while. Goals keep running.",
    icon: LockIcon,
  },
  {
    kind: "none",
    title: "Just my word",
    detail: "Nothing happens if you miss. Easiest to walk away from.",
    icon: Tick02Icon,
    badge: "Not recommended",
  },
]

function Fact({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-snug">
      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-stake" />
      <span>{children}</span>
    </li>
  )
}

function MoneyPreview() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col items-center gap-1 pt-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          If you miss a day
        </p>
        <p className="font-heading text-7xl leading-none text-stake">$20</p>
        <p className="text-sm font-medium text-muted-foreground">
          is charged to <span className="text-foreground">Visa •••• 4242</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {["$5", "$10", "$20", "$50"].map((amount) => (
          <span
            key={amount}
            className={cn(
              "inline-flex h-9 min-w-14 items-center justify-center rounded-full px-4 text-sm font-semibold",
              amount === "$20"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            )}
          >
            {amount}
          </span>
        ))}
      </div>
      <ul className="mt-auto flex flex-col gap-2.5 rounded-[24px] bg-muted p-5">
        <Fact>
          Nothing up front. Your card is saved, and charged once only if you
          miss.
        </Fact>
        <Fact>
          $1 to $50 a stake, and never more than $250 on the line at once.
        </Fact>
        <Fact>
          Charge look wrong? Contest it in the app and a person reviews it.
        </Fact>
      </ul>
    </div>
  )
}

// The one email a friend gets on a miss, worded as the app sends it.
function FriendPreview() {
  return (
    <div className="flex h-full flex-col gap-5">
      <div className="overflow-hidden rounded-[24px] border bg-background">
        <div className="flex flex-col gap-1.5 border-b px-5 py-4 text-sm">
          <p className="flex gap-2">
            <span className="w-14 text-muted-foreground">From</span>
            <span className="font-medium">Ante</span>
          </p>
          <p className="flex gap-2">
            <span className="w-14 text-muted-foreground">To</span>
            <span className="font-medium">Sam</span>
          </p>
          <p className="flex gap-2">
            <span className="w-14 shrink-0 text-muted-foreground">Subject</span>
            <span className="font-semibold">Alex broke a 12-day streak</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 px-5 py-5 text-[15px] leading-relaxed">
          <p>Hi Sam,</p>
          <p>
            Alex asked us to tell you if they slipped on &ldquo;Go to the
            gym&rdquo;. After 12 days in a row, they missed on Tuesday.
          </p>
          <p>
            No lecture needed. A quick &ldquo;saw the email, what
            happened?&rdquo; goes a long way.
          </p>
          <p className="text-muted-foreground">— Ante</p>
        </div>
      </div>
      <CoachNote
        arrow="up-left"
        className="mt-auto self-center text-muted-foreground"
      >
        one email. that&apos;s all it takes.
      </CoachNote>
    </div>
  )
}

const DAYS = ["M", "T", "W", "T", "F", "S", "S"]
// Two weeks: kept days, the miss, then three frozen days.
const MARKS = [
  "done",
  "done",
  "done",
  "done",
  "done",
  "missed",
  "frozen",
  "frozen",
  "frozen",
  "open",
  "open",
  "open",
  "open",
  "open",
] as const

function LockoutPreview() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between rounded-[24px] bg-muted p-5">
        <div>
          <p className="text-sm text-muted-foreground">
            If you break the streak
          </p>
          <p className="font-semibold">All your habits freeze</p>
        </div>
        <div className="flex gap-1.5">
          {["1 day", "3 days", "7 days"].map((label) => (
            <span
              key={label}
              className={cn(
                "inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold",
                label === "3 days"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-[24px] border p-5">
        <div className="grid grid-cols-7 gap-y-3 text-center">
          {DAYS.map((day, index) => (
            <span
              key={index}
              className="text-xs font-semibold text-muted-foreground"
            >
              {day}
            </span>
          ))}
          {MARKS.map((mark, index) => (
            <span key={index} className="flex justify-center">
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-full text-sm font-semibold",
                  mark === "done" && "bg-stake text-white",
                  mark === "missed" && "bg-muted text-muted-foreground",
                  mark === "frozen" &&
                    "text-violet-text ring-2 ring-primary ring-inset",
                  mark === "open" && "text-muted-foreground"
                )}
              >
                {index + 8}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-stake" /> Done
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted ring-1 ring-border" />{" "}
            Missed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full ring-2 ring-primary" />{" "}
            Frozen
          </span>
        </div>
      </div>
      <p className="mt-auto text-center text-sm text-muted-foreground">
        Lockouts are free. They just cost you your habits for a few days.
      </p>
    </div>
  )
}

function WordPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 py-10 text-center">
      <p className="max-w-xs font-heading text-3xl leading-snug text-muted-foreground">
        If I miss a day, my streak starts over.
      </p>
      <p className="max-w-xs text-sm text-muted-foreground">
        That&apos;s it. That&apos;s the whole consequence.
      </p>
      <CoachNote className="text-stake" tilt={-5}>
        no stakes, no point.
      </CoachNote>
    </div>
  )
}

const PREVIEWS: Record<Kind, React.ReactNode> = {
  money: <MoneyPreview />,
  friend: <FriendPreview />,
  lockout: <LockoutPreview />,
  none: <WordPreview />,
}

const CHIPS: Record<Kind, string | null> = {
  money: "$20 on it",
  friend: "Sam’s watching",
  lockout: "3-day lock",
  none: null,
}

function StakePicker() {
  const [kind, setKind] = useState<Kind>("money")
  const id = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0
    if (step === 0) return
    event.preventDefault()
    const next = (index + step + OPTIONS.length) % OPTIONS.length
    setKind(OPTIONS[next].kind)
    tabs.current[next]?.focus()
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
      <div
        role="tablist"
        aria-label="Stakes"
        aria-orientation="vertical"
        className="flex flex-col gap-3"
      >
        {OPTIONS.map((option, index) => {
          const selected = option.kind === kind
          return (
            <button
              key={option.kind}
              ref={(node) => {
                tabs.current[index] = node
              }}
              role="tab"
              type="button"
              id={`${id}-tab-${option.kind}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setKind(option.kind)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "group flex items-start gap-4 rounded-[24px] border-2 p-4 text-left transition-colors outline-none focus-visible:ring-4 focus-visible:ring-ring/30 sm:p-5",
                selected
                  ? "border-primary bg-background"
                  : "border-transparent bg-muted hover:bg-accent"
              )}
            >
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors",
                  selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground"
                )}
              >
                <HugeiconsIcon
                  icon={option.icon}
                  size={22}
                  strokeWidth={1.75}
                />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-semibold">
                    {option.title}
                  </span>
                  {option.badge && (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase",
                        option.kind === "none"
                          ? "bg-background text-muted-foreground ring-1 ring-border"
                          : "bg-primary/10 text-violet-text"
                      )}
                    >
                      {option.badge}
                    </span>
                  )}
                </span>
                <span className="text-[15px] leading-snug text-muted-foreground">
                  {option.detail}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${kind}`}
        className="relative flex flex-col rounded-[32px] border-2 p-6 sm:p-7"
      >
        <div className="mb-6 flex items-center justify-between gap-3 border-b pb-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Go to the gym · Daily
            </p>
            <p className="truncate font-semibold">What a miss costs you</p>
          </div>
          {CHIPS[kind] ? (
            <StakeChip>{CHIPS[kind]}</StakeChip>
          ) : (
            <span className="text-sm font-medium text-muted-foreground">
              Nothing
            </span>
          )}
        </div>
        {/* Every preview sits in the same cell, so the panel is always as
            tall as the tallest and the page doesn't jump between them. */}
        <div className="grid flex-1">
          {OPTIONS.map((option) => {
            const active = option.kind === kind
            return (
              <div
                key={option.kind}
                aria-hidden={!active}
                inert={!active}
                className={cn(
                  "flex flex-col transition-[opacity,translate,visibility] duration-300 [grid-area:1/1]",
                  active
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                )}
              >
                {PREVIEWS[option.kind]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { StakePicker }
