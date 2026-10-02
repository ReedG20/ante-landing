import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage } from "@/components/legal-page"
import { SUPPORT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Support — Ante",
  description:
    "Get help with Ante: contest a charge, manage Ante Pro, or delete your account.",
}

export default function SupportPage() {
  return (
    <LegalPage title="Support" updated="October 1, 2026">
      <section>
        <h2>Contact us</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or tap
          Me → Contact support in the app, which fills in your app version for
          us. A person reads every message, usually within a day.
        </p>
      </section>
      <section>
        <h2>Contest a charge</h2>
        <p>
          If a money stake was charged and you think it shouldn&apos;t have
          been:
        </p>
        <ul>
          <li>
            Open the commitment in the app and tap &ldquo;Something wrong with
            this charge?&rdquo; under the deal, or on the screen that told you
            it was charged.
          </li>
          <li>Pick what happened and add anything we should know.</li>
          <li>
            A person reviews your proof and how the commitment ended, usually
            within a day. You&apos;ll get a notification either way.
          </li>
          <li>
            If we got it wrong, the full amount goes back to your card. Banks
            usually take 5 to 10 days to show it.
          </li>
        </ul>
        <p>
          You can contest a charge in the app for 120 days. After that, email
          us. Please talk to us before disputing a charge with your bank.
        </p>
      </section>
      <section>
        <h2>Cancel Ante Pro or get a refund</h2>
        <p>
          Ante Pro is billed by Apple. Cancel it in Settings → Apple ID →
          Subscriptions, or from Me → Ante Pro in the app. Refunds for Ante Pro
          are handled by Apple at{" "}
          <a href="https://reportaproblem.apple.com">
            reportaproblem.apple.com
          </a>
          . Deleting your Ante account doesn&apos;t cancel the subscription, so
          cancel it first.
        </p>
      </section>
      <section>
        <h2>Delete your account</h2>
        <p>
          Tap Me → Delete account in the app. It deletes your habits and goals,
          your proof, the friends you named, and your saved cards. Stakes that
          haven&apos;t come due aren&apos;t charged. The{" "}
          <Link href="/privacy">Privacy Policy</Link> lists what is kept.
        </p>
      </section>
      <section>
        <h2>Got an email about a friend&apos;s commitment?</h2>
        <p>
          Someone named you as the person who hears if they miss a commitment on
          Ante. To stop these emails, use the link at the bottom of any of them.
          You can stop emails about that person or from Ante entirely.
        </p>
      </section>
      <section>
        <h2>Policies</h2>
        <p>
          Read our <Link href="/terms">Terms of Service</Link>, including how
          stakes, refunds and contested charges work, and our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </LegalPage>
  )
}
