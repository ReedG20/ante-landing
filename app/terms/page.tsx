import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service — Ante",
  description: "The terms that govern your use of Ante.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 19, 2026">
      <section>
        <h2>The service</h2>
        <p>
          Ante is a habit and goal tracking app. You can attach a monetary stake
          to a goal, log check-ins that are verified by the app, and receive the
          stake back when the goal is met. These terms apply to the website, the
          waitlist, and the app once it is available.
        </p>
      </section>
      <section>
        <h2>Stakes</h2>
        <p>
          When you create a staked goal, the amount you choose is charged and
          held through Stripe until the deadline. If the app verifies that you
          met the goal by the deadline, the stake is released back to you. If
          you do not, the stake is forfeited. Stake amounts, deadlines, and
          verification requirements are shown before you confirm a goal.
        </p>
      </section>
      <section>
        <h2>Lockouts and fees</h2>
        <p>
          Breaking a commitment locks your access to the app. To regain access,
          you can pay a lockout fee or wait out a cooldown period. Streaks and
          history are reset when a commitment is broken. Lockout fees are billed
          through the Apple App Store.
        </p>
      </section>
      <section>
        <h2>Subscription</h2>
        <p>
          Ante is offered as a flat-rate subscription billed through the Apple
          App Store. Subscriptions renew automatically unless cancelled in your
          App Store settings. Refunds for subscriptions are handled by Apple.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          You agree not to falsify check-ins, tamper with verification, or use
          the service in a way that is unlawful or harms other users. We may
          suspend accounts that do.
        </p>
      </section>
      <section>
        <h2>Disclaimer</h2>
        <p>
          Ante is provided as-is. We do not guarantee any particular outcome
          from using the app. To the extent permitted by law, our liability is
          limited to the amount you have paid us in the past twelve months.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms as the product develops. Continued use after
          an update means you accept the new terms.
        </p>
      </section>
    </LegalPage>
  )
}
