import Image from "next/image"

import { CoachNote } from "@/components/coach-note"
import { Reveal } from "@/components/reveal"

const POINTS = [
  {
    title: "Sign it with your finger",
    body: "Then hold to lock it in. It reads as a promise because it is one.",
  },
  {
    title: "A short window to call it off",
    body: "Change your mind right after signing and you can walk away. After that, it's on.",
  },
  {
    title: "Up the ante, never lower it",
    body: "Stakes can go up any time. They never come down, and a staked habit takes 7 days' notice to end.",
  },
]

function Contract() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
              The contract
            </p>
            <h2 className="font-heading text-[2.6rem] leading-[1.02] tracking-tight text-balance sm:text-6xl">
              Sign it like you mean it.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-ink-body sm:text-xl">
              Every commitment ends in a contract with your own signature on it.
              When it&apos;s over, you get it back, stamped.
            </p>
          </div>
          <ul className="flex flex-col gap-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p className="text-ink-body">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[480px]" delay={150}>
          <CoachNote
            className="mb-3 ml-4 text-ink-soft"
            tilt={-4}
          >
            future you has to answer to present you.
          </CoachNote>
          <div
            className="relative rounded-[6px] border border-[#e9e2d3] bg-[#fffdf8] p-7 sm:p-10 [[data-shown]_&]:motion-safe:animate-[thump_0.3s_ease-out_2.3s]"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <p className="text-[11px] font-bold tracking-[0.18em] text-ink-soft">
              STANDING AGREEMENT · OCT 1, 2026
            </p>
            <p className="mt-5 text-[1.35rem] leading-[1.55] text-ink-body sm:text-2xl">
              I will{" "}
              <strong className="font-semibold text-ink">go to the gym</strong>,
              every day. Each day I&apos;ll check in with my location at{" "}
              <strong className="font-semibold text-ink">Crunch Fitness</strong>
              . If I miss a day,{" "}
              <strong className="font-semibold text-ink">
                $20 is charged to my card
              </strong>
              .
            </p>

            <div className="mt-10">
              {/* Written in left to right once the card is in view. */}
              <p
                aria-label="Signed: Alex Rivera"
                className="h-16 font-note text-[2.75rem] leading-[4rem] text-ink [clip-path:inset(0_100%_0_0)] motion-reduce:[clip-path:none] [[data-shown]_&]:motion-safe:animate-[sign_1.4s_cubic-bezier(0.5,0,0.3,1)_0.6s_forwards]"
                style={{ transform: "rotate(-4deg)", transformOrigin: "left" }}
              >
                Alex Rivera
              </p>
              <div className="mt-1 h-px bg-ink/25" />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-ink-soft">Your signature</span>
                <Image
                  src="/ante-mark.svg"
                  alt="Ante"
                  width={34}
                  height={11}
                  className="h-3 w-auto opacity-45"
                />
              </div>
            </div>

            <span className="pointer-events-none absolute right-6 bottom-20 rounded-[10px] border-[3px] border-primary px-4 py-1.5 font-heading text-4xl tracking-wider text-primary opacity-0 motion-reduce:rotate-[-12deg] motion-reduce:opacity-90 sm:right-10 sm:bottom-24 sm:text-5xl [[data-shown]_&]:motion-safe:animate-[stamp_0.2s_cubic-bezier(0.5,0,0.75,0)_2.1s_forwards]">
              KEPT
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { Contract }
