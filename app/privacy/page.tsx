import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy — Ante",
  description: "How Ante collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 19, 2026">
      <section>
        <h2>What we collect</h2>
        <p>
          If you join the waitlist, we collect your email address. When the app
          launches, we will collect the information needed to run the service:
          your account details, the goals and habits you create, your check-in
          logs (including photos, location, and timer data you choose to submit
          for verification), and payment information handled by our payment
          processors.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use this information to provide the service: to notify you about
          Ante, to verify check-ins, to hold and release stakes, to process
          subscriptions, and to support you when you contact us. We do not sell
          your personal information.
        </p>
      </section>
      <section>
        <h2>Payments</h2>
        <p>
          Stakes are processed by Stripe. Subscriptions and lockout fees are
          processed through the Apple App Store. We do not store full card
          numbers. Stripe&apos;s and Apple&apos;s own privacy policies apply to
          the data they handle.
        </p>
      </section>
      <section>
        <h2>Service providers</h2>
        <p>
          We use third-party services to send email, host the app, and analyze
          verification photos. These providers only receive the data needed to
          perform their function on our behalf.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can unsubscribe from waitlist emails at any time using the link in
          any email we send. You can request access to or deletion of your data
          by emailing us.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          We may update this policy as the product develops. We will post the
          updated version here with a new date.
        </p>
      </section>
    </LegalPage>
  )
}
