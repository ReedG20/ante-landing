import { Reveal } from "@/components/reveal"

import { SectionHeading } from "./section-heading"
import { StakePicker } from "./stake-picker"

function Stakes() {
  return (
    <section
      id="stakes"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <Reveal>
        <SectionHeading
          kicker="The stakes"
          title={
            <>
              You choose what a miss{" "}
              <span className="text-stake">costs you.</span>
            </>
          }
          lede="Money on your card, a friend who finds out, a lockout, or just your word. Pick one and see exactly what happens."
        />
      </Reveal>
      <Reveal className="mt-10 sm:mt-12" delay={100}>
        <StakePicker />
      </Reveal>
    </section>
  )
}

export { Stakes }
