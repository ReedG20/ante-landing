import { HugeiconsIcon } from "@hugeicons/react"
import { Camera01Icon, Coins01Icon, LockIcon } from "@hugeicons/core-free-icons"

import { SiteHeader } from "@/components/site-header"
import { WaitlistForm } from "@/components/waitlist-form"

const features = [
  {
    icon: Coins01Icon,
    title: "Put money on your goals",
    body: "Set a goal, a dollar amount, and a deadline. The money is held by Stripe while the goal is active. Succeed and it's returned to you; fail and it's forfeited.",
  },
  {
    icon: LockIcon,
    title: "Commitments that lock",
    body: "Break a commitment and the app locks. To get back in, you pay a small fee or wait out a cooldown. Your streak and history reset either way.",
  },
  {
    icon: Camera01Icon,
    title: "Verified check-ins",
    body: "Logs are checked with photo analysis, location, and timers, so a check-in means the work actually happened.",
  },
]

const steps = [
  {
    title: "Set a goal and stake it",
    body: "Pick a habit or a goal, choose an amount and a deadline, and Ante holds the stake through Stripe.",
  },
  {
    title: "Check in as you go",
    body: "One-tap logging for routine habits, with verification when it matters.",
  },
  {
    title: "Get your money back",
    body: "Hit the goal by the deadline and the stake is released to you. Miss it and the stake is forfeited.",
  },
]

export default function Page() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-6">
      <SiteHeader />

      <main className="flex flex-1 flex-col gap-20 py-16 sm:py-24">
        <section className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Coming soon to iOS
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Habit tracking with real stakes.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Ante is a habit and goal tracking app. You put money on a goal,
            check in with verified logs, and get the money back when you follow
            through. If you don&apos;t, you lose it.
          </p>
          <WaitlistForm className="mt-2" />
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
            Ante is a flat-rate subscription. Stakes are held and released
            through Stripe and are separate from the subscription. Subscriptions
            and lockout fees are billed through the App Store.
          </p>
        </section>
      </main>

      <footer className="flex flex-col gap-2 border-t py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Ante</span>
        <div className="flex gap-4">
          <a href="mailto:hello@ante.app" className="hover:text-foreground">
            hello@ante.app
          </a>
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
        </div>
      </footer>
    </div>
  )
}
