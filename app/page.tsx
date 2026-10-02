import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  CreditCardIcon,
  Target02Icon,
} from "@hugeicons/core-free-icons"

import Image from "next/image"

import { AppStoreBadge } from "@/components/app-store-badge"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const features = [
  {
    icon: Target02Icon,
    title: "You choose the stakes",
    body: "Put money on it, name a friend who hears about it, or lock yourself out of your habits for a while. Or just give your word.",
  },
  {
    icon: CreditCardIcon,
    title: "Charged only if you miss",
    body: "A money stake saves your card and charges nothing up front. Miss and you're charged once, the amount you set: $1 to $50 a stake, never more than $250 on the line at once.",
  },
  {
    icon: Camera01Icon,
    title: "Proof, not the honor system",
    body: "Every check-in is proven: a photo AI checks, a location check-in where you said you'd be, or a timer you can't leave.",
  },
]

const steps = [
  {
    title: "Pick one thing",
    body: "A daily or weekly habit, or a goal with a deadline, and how you'll prove it.",
  },
  {
    title: "Put something on the line",
    body: "Money on your card, a friend who finds out, a lockout, or just your word.",
  },
  {
    title: "Check in with proof",
    body: "Take the photo, check in where you said you'd be, or run the timer. Keep it up and nothing happens.",
  },
  {
    title: "Miss it, and it costs you",
    body: "Your card is charged once, your friend gets one email, or your habits freeze for 1, 3 or 7 days. If a charge looks wrong, contest it in the app and a person reviews it.",
  },
]

export default function Page() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-6">
      <SiteHeader />

      <main className="flex flex-1 flex-col gap-20 py-16 sm:py-24">
        <section className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              For iPhone
            </span>
            <h1 className="font-heading text-4xl text-balance sm:text-5xl">
              Habit tracking with real stakes.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Ante is a habit and goal tracker that holds you to what you said
              you&apos;d do. Prove every check-in, and choose what a miss costs
              you: money, a friend finding out, or a lockout.
            </p>
            <AppStoreBadge className="mt-2" />
          </div>
          <Image
            src="/ante-mockup.png"
            alt="The Ante habits screen on an iPhone, showing the cost of skipping today and a list of daily habits"
            width={900}
            height={1840}
            priority
            sizes="(min-width: 640px) 240px, 200px"
            className="mx-auto w-[200px] shrink-0 sm:mx-0 sm:w-[240px]"
          />
        </section>

        <section className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HugeiconsIcon icon={feature.icon} strokeWidth={2} size={18} />
              </div>
              <h2 className="font-medium">{feature.title}</h2>
              <p className="text-sm text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <ol className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl border p-6">
          <h2 className="font-medium">Pricing</h2>
          <p className="text-sm text-muted-foreground">
            Ante runs on Ante Pro, a subscription billed by Apple: monthly, or
            yearly with a 7-day free trial. Money stakes are separate. Stripe
            charges them to your own card, only when you miss, and nothing is
            ever paid out to anyone. Lockouts are free.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
