import { CoachNote } from "@/components/coach-note"
import { PhoneShot } from "@/components/phone-shot"
import { Reveal } from "@/components/reveal"
import { GALLERY } from "@/lib/screenshots"

import { SectionHeading } from "./section-heading"

function Gallery() {
  return (
    <section className="py-16 sm:py-20">
      <Reveal className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Inside Ante"
          title="Flat, quiet, a little stern."
          lede="No confetti, no cartoon mascots. Just what you said you'd do, and what it costs if you don't."
        />
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-10 flex snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] gap-5 overflow-x-auto px-5 pb-6 sm:scroll-px-8 sm:gap-8 sm:px-8 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] [&::-webkit-scrollbar]:hidden">
          {GALLERY.map((shot) => (
            <li
              key={shot.id}
              className="flex w-[260px] shrink-0 snap-start flex-col items-center gap-3 sm:w-[310px]"
            >
              <div className="w-full rounded-[36px] bg-muted px-6 pt-7 pb-5 sm:px-7 sm:pt-8">
                <PhoneShot
                  shot={shot}
                  sizes="(min-width: 640px) 250px, 208px"
                  className="mx-auto w-[208px] sm:w-[250px]"
                />
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center">
                <p className="font-semibold">{shot.caption}</p>
                <p className="font-note text-lg text-balance text-muted-foreground lowercase">
                  {shot.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mx-auto flex w-full max-w-6xl justify-end px-5 sm:px-8">
        <CoachNote arrow="left" className="text-muted-foreground" tilt={-2}>
          scroll. there&apos;s more.
        </CoachNote>
      </div>
    </section>
  )
}

export { Gallery }
