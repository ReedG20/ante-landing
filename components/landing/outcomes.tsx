import { HandLoop } from "@/components/hand-loop"
import { Reveal } from "@/components/reveal"

import { SectionHeading } from "./section-heading"

function Outcomes() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          kicker="The ending"
          title="Every commitment ends one of two ways."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[40px] bg-primary p-8 text-white sm:p-10">
          <p className="text-sm font-semibold tracking-[0.14em] text-white/70 uppercase">
            You followed through
          </p>
          <div className="flex flex-col gap-5">
            <p className="font-heading text-[5.5rem] leading-none sm:text-[7rem]">
              <HandLoop loopClassName="text-white" strokeWidth={4} delay={500}>
                Kept.
              </HandLoop>
            </p>
            <p className="max-w-sm text-lg leading-relaxed text-white/80">
              Nothing was charged, nobody was told, and you get the contract
              back stamped KEPT. Share it if you like. You earned it.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[40px] bg-loss p-8 text-white sm:p-10"
        >
          <p className="text-sm font-semibold tracking-[0.14em] text-stake uppercase">
            You didn&apos;t
          </p>
          <div className="flex flex-col gap-5">
            <p className="font-heading text-[5.5rem] leading-none text-stake sm:text-[7rem]">
              Gone.
            </p>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              Your card is charged once, your friend gets one email, or your
              habits freeze. Then you pick it back up.
            </p>
            <p className="font-note text-xl text-white/55 lowercase">
              the money&apos;s gone. the habit doesn&apos;t have to be.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { Outcomes }
