import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon } from "@hugeicons/core-free-icons"

import { Reveal } from "@/components/reveal"
import { SUPPORT_EMAIL } from "@/lib/site"

import { SectionHeading } from "./section-heading"

const QUESTIONS: { q: string; a: React.ReactNode }[] = [
  {
    q: "When is my card charged?",
    a: "Only when you miss. Putting money on a commitment saves your card and charges nothing up front. Miss, and you're charged once, the amount you set: $1 to $50 a stake, never more than $250 on the line at once.",
  },
  {
    q: "Where does the money go?",
    a: "Stripe charges it to your own card, and nothing is ever paid out to anyone. Not your friends, and not other users. The point isn't the money changing hands. It's that skipping costs you.",
  },
  {
    q: "What if a charge is wrong?",
    a: "Tap \u201cSomething wrong with this charge?\u201d in the app. A person reviews your proof and how the commitment ended, usually within a day. If we got it wrong, the full amount goes back to your card.",
  },
  {
    q: "What counts as proof?",
    a: "Whatever you picked when you made the commitment: a photo taken in Ante that AI checks, a location check-in at the place you named, or a timer of 5 to 90 minutes you can't leave. The day runs until 3am.",
  },
  {
    q: "What does my friend see?",
    a: "They get one email when you name them, so they know they're on the hook, and one more only if you miss. They never need an account, and every email has a link to stop them.",
  },
  {
    q: "Can I back out?",
    a: "Right after you make a commitment there's a short window to call it off. After that, a staked habit takes 7 days' notice to end. You can always raise the stakes, but never lower them.",
  },
  {
    q: "Is Ante on Android?",
    a: "Not yet. Ante is for iPhone.",
  },
]

function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <SectionHeading kicker="FAQ" title="Fair questions." />
          <p className="text-muted-foreground">
            Something else?{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-foreground underline underline-offset-4"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-3">
          {QUESTIONS.map((item) => (
            <details
              key={item.q}
              className="group rounded-[28px] bg-muted transition-colors open:bg-transparent open:ring-2 open:ring-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[28px] px-6 py-5 text-lg font-semibold outline-none focus-visible:ring-4 focus-visible:ring-ring/30 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background transition-transform duration-300 group-open:rotate-45 group-open:bg-muted">
                  <HugeiconsIcon icon={Add01Icon} size={16} strokeWidth={2} />
                </span>
              </summary>
              <p className="px-6 pb-6 text-[17px] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export { Faq }
