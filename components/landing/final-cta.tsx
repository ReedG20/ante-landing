import { AppStoreBadge } from "@/components/app-store-badge"
import { CoachNote } from "@/components/coach-note"
import { Reveal } from "@/components/reveal"

function FinalCta() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[32px] bg-primary text-white">
        <Reveal className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element -- static app icon */}
          <img
            src="/ante-icon.webp"
            alt=""
            width={112}
            height={112}
            className="size-24 drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] sm:size-28"
          />
          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl">
            No chip, no game.
          </h2>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            Pick one thing you keep putting off. Put something on it. See how
            fast it stops being optional.
          </p>
          <AppStoreBadge tone="white" />
          <CoachNote className="text-white/75" tilt={-4}>
            go on. pick one thing.
          </CoachNote>
        </Reveal>
      </div>
    </section>
  )
}

export { FinalCta }
