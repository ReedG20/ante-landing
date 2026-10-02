import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"

import { AppStoreBadge } from "@/components/app-store-badge"
import { Reveal } from "@/components/reveal"

import { SectionHeading } from "./section-heading"

// The paywall's own list.
const BENEFITS = [
  "Habits and goals with real stakes",
  "Every check-in proven: photo, place or timer",
  "Put money, a friend or a lockout on the line",
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            kicker="Pricing"
            title="One plan. Nothing held back."
            lede="Ante runs on Ante Pro, a subscription billed by Apple. Your stakes are a separate thing entirely."
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-3">
          <div className="flex flex-col gap-6 rounded-[32px] border-2 border-primary p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2.5 text-xl font-semibold">
                  Ante
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-extrabold tracking-[0.07em] text-primary-foreground">
                    PRO
                  </span>
                </p>
                <p className="text-muted-foreground">
                  Monthly, or yearly with a 7-day free trial.
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-base sm:text-[17px]"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-violet-text">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={16}
                      strokeWidth={2.4}
                    />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-6">
              <AppStoreBadge />
              <p className="text-sm text-muted-foreground">
                Start with a 7-day free trial.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-muted p-5">
              <p className="font-semibold">Money stakes are separate</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                Stripe charges your own card, only when you miss. Nothing is
                ever paid out to anyone.
              </p>
            </div>
            <div className="rounded-[24px] bg-muted p-5">
              <p className="font-semibold">Lockouts are free</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                So is telling a friend. They just cost you a little pride, or a
                few days of habits.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { Pricing }
