import { HugeiconsIcon } from "@hugeicons/react"
import { Camera01Icon, FlameIcon, Tick02Icon } from "@hugeicons/core-free-icons"

import { AppStoreBadge } from "@/components/app-store-badge"
import { CoachNote } from "@/components/coach-note"
import { HandLoop } from "@/components/hand-loop"
import { PhoneShot } from "@/components/phone-shot"
import { SCREENSHOTS } from "@/lib/screenshots"

import { StakeChip } from "./stake-chip"

// Rendered already shown, so the hero animates on load rather than waiting
// for hydration.
const shown = { "data-reveal": "", "data-shown": "" }

function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-8 pb-12 sm:px-8 sm:pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-12 lg:pb-16">
      <div className="flex flex-col items-start gap-6" {...shown}>
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-primary" />
          For iPhone
        </span>

        <h1 className="font-heading text-[2.75rem] leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
          Put something on the{" "}
          <HandLoop strokeWidth={4.5} delay={700}>
            line.
          </HandLoop>
        </h1>

        <p className="max-w-[32rem] text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ante is a habit and goal tracker that holds you to what you said
          you&apos;d do. Prove every check-in, and choose what a miss costs you:
          money, a friend finding out, or a lockout.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
          <AppStoreBadge />
          <CoachNote
            arrow="left"
            className="text-muted-foreground max-sm:[&_svg]:hidden"
            tilt={-4}
          >
            it&apos;s cheaper to just do it.
          </CoachNote>
        </div>
      </div>

      <div
        className="relative mx-auto w-full max-w-[380px]"
        {...shown}
        style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
      >
        {/* A flat grey slab behind the phone, the app's 40pt list-card radius. */}
        <div className="absolute inset-x-0 top-[12%] bottom-[6%] rounded-[44px] bg-muted" />

        <PhoneShot
          shot={SCREENSHOTS.today}
          preload
          sizes="(min-width: 640px) 270px, 240px"
          className="relative mx-auto w-[240px] sm:w-[270px]"
        />

        <div
          className="absolute top-[18%] -left-1 motion-safe:animate-[float_6s_ease-in-out_infinite] sm:-left-6"
          style={{ "--tilt": "-4deg" } as React.CSSProperties}
        >
          <StakeChip className="h-9 px-4 text-[15px]">$50 on it</StakeChip>
        </div>

        <div
          className="absolute top-[44%] -right-1 motion-safe:animate-[float_7s_ease-in-out_1s_infinite] sm:-right-5"
          style={{ "--tilt": "3deg" } as React.CSSProperties}
        >
          <span className="inline-flex h-10 items-center gap-1.5 rounded-full border bg-background px-4 text-[15px] font-semibold">
            {/* Filled in the accent, as the app draws its streak flame. */}
            <HugeiconsIcon
              icon={FlameIcon}
              size={18}
              strokeWidth={1.75}
              fill="currentColor"
              className="text-stake"
            />
            41 day streak
          </span>
        </div>

        <div
          className="absolute bottom-[14%] -left-2 motion-safe:animate-[float_8s_ease-in-out_2s_infinite] sm:-left-10"
          style={{ "--tilt": "-2deg" } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-3 rounded-[20px] bg-proof py-2.5 pr-4 pl-2.5 text-white">
            <span className="flex size-9 items-center justify-center rounded-[12px] bg-proof-panel text-glow-soft">
              <HugeiconsIcon icon={Camera01Icon} size={18} strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold tracking-wide text-white/55 uppercase">
                Photo proof
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold">
                Checked
                <HugeiconsIcon
                  icon={Tick02Icon}
                  size={16}
                  strokeWidth={2.4}
                  className="text-glow"
                />
              </span>
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}

export { Hero }
