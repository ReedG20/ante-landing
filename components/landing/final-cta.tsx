import { AppStoreBadge } from "@/components/app-store-badge"
import { CoachNote } from "@/components/coach-note"
import { Reveal } from "@/components/reveal"

function FinalCta() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[40px] bg-primary text-white">
        <Reveal className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG app icon */}
          <img
            src="/ante-icon.svg"
            alt=""
            width={112}
            height={112}
            className="size-24 rounded-[26px] ring-1 ring-white/25 sm:size-28 sm:rounded-[30px]"
          />
          <h2 className="font-heading text-6xl leading-[0.95] tracking-tight text-balance sm:text-8xl">
            No chip, no game.
          </h2>
          <p className="max-w-xl text-lg text-white/80 sm:text-xl">
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
