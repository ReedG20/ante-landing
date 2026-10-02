import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage } from "@/components/legal-page"
import { SUPPORT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service — Ante",
  description: "The terms that govern your use of Ante.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 1, 2026">
      <section>
        <h2>The service</h2>
        <p>
          Ante is a habit and goal tracking app for iPhone. You make a
          commitment, prove each check-in in the app, and choose what happens if
          you miss it. These terms apply to the app and to this website. By
          using Ante, you agree to them.
        </p>
      </section>
      <section>
        <h2>Ante Pro</h2>
        <p>
          Ante runs on Ante Pro, an auto-renewing subscription sold through the
          Apple App Store. Without it you can&apos;t make new commitments or
          check in.
        </p>
        <ul>
          <li>
            There is a monthly plan and a yearly plan. Prices are shown in the
            app before you buy.
          </li>
          <li>
            The yearly plan comes with a 7-day free trial if your Apple ID is
            eligible. Unless you cancel before the trial ends, the yearly price
            is charged when it does. Any unused part of a trial ends when you
            buy a subscription.
          </li>
          <li>
            Payment is charged to your Apple ID when you confirm the purchase.
            The subscription renews automatically at the same price unless you
            cancel at least 24 hours before the current period ends.
          </li>
          <li>
            You can manage or cancel it in Settings → Apple ID → Subscriptions.
            Deleting your Ante account doesn&apos;t cancel it.
          </li>
          <li>
            Apple handles subscription refunds. If you ask Apple for a refund,
            Apple may ask us for details of your purchase and use of the app.
          </li>
          <li>
            If Ante Pro ends, goals you&apos;ve already made run to their
            deadlines, with their stakes, and your habits pause.
          </li>
        </ul>
      </section>
      <section>
        <h2>Stakes</h2>
        <p>
          When you make a commitment, you choose what a miss costs you. Before
          you confirm, the app shows you the stake and exactly what happens if
          you miss. There are four kinds:
        </p>
        <ul>
          <li>
            <strong>Money.</strong> Your card is saved through Stripe and
            nothing is charged that day. If you miss, you&apos;re charged the
            amount you set, once, automatically. By confirming a money stake,
            you authorize that charge.
          </li>
          <li>
            <strong>A friend.</strong> We email the person you name a heads-up
            when you make the commitment, and one more email if you miss.
          </li>
          <li>
            <strong>A lockout.</strong> If you break a habit&apos;s streak,
            every habit freezes for 1, 3 or 7 days, as you chose. Nothing can be
            logged while they&apos;re frozen, and goals keep running. Lockouts
            aren&apos;t available on goals.
          </li>
          <li>
            <strong>Just your word.</strong> Nothing happens if you miss, except
            the streak starts over.
          </li>
        </ul>
      </section>
      <section>
        <h2>Money stakes</h2>
        <ul>
          <li>
            Each money stake is between $1 and $50. You can&apos;t have more
            than $250 on the line at once, across all your habits and goals.
          </li>
          <li>
            A habit is missed when a day ends without accepted proof (or, for a
            weekly habit, a week ends short). Your day ends at 3 AM local time.
            The stake is charged once, and the habit then waits for you to
            restart it with new stakes.
          </li>
          <li>
            A goal is missed when its deadline passes without accepted proof.
            Make it and nothing is charged.
          </li>
          <li>
            Stakes can be raised but not lowered. A goal with money on it
            can&apos;t be deleted. Ending a habit takes a week&apos;s notice,
            and it keeps counting until then.
          </li>
          <li>
            If your card is declined, the amount stays owed and you can pay it
            in the app.
          </li>
          <li>
            Stake charges are a penalty you set for yourself. They don&apos;t
            buy anything in the app, and nothing is paid out to you or anyone
            else.
          </li>
        </ul>
      </section>
      <section>
        <h2>Lockouts aren&apos;t billed</h2>
        <p>
          Earlier versions of Ante sold a fee through the App Store to end a
          lockout early. That fee no longer exists. A lockout ends on its own
          when its time is up, and it never costs money.
        </p>
      </section>
      <section>
        <h2>Friend stakes</h2>
        <p>
          When you name a friend, you confirm that they&apos;re happy to hear
          from us about your commitment. Every email we send them has a link to
          stop them. If your friend opts out or their email bounces, stakes
          naming them are void and the app asks you to pick someone new.
        </p>
      </section>
      <section>
        <h2>Proof and verification</h2>
        <p>
          Check-ins are proven with a photo that an AI model checks against what
          you wrote, a location check-in matched to places nearby, or a timer
          you keep running in the app. Our own failures don&apos;t cost you: if
          a check can&apos;t be completed because of an error on our side, that
          habit day is excused, and a goal whose last proof was never checked
          has its stake released.
        </p>
      </section>
      <section>
        <h2>Contesting a charge and refunds</h2>
        <ul>
          <li>
            If you think a stake charge is wrong, tap &ldquo;Something wrong
            with this charge?&rdquo; on the charge in the app within 120 days of
            the charge, or email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </li>
          <li>
            A person reviews every contested charge, usually within a day. We
            look at your proof, how the commitment ended, and anything you tell
            us.
          </li>
          <li>
            If we got it wrong, we refund the full charge to your card. Banks
            usually take 5 to 10 days to show it. If we keep the charge, we tell
            you why in the app, and you can reply by email.
          </li>
          <li>Apart from refunds made this way, stake charges are final.</li>
          <li>
            Please contact us before disputing a charge with your bank. While a
            dispute is open, money stakes are turned off for your account.
          </li>
        </ul>
      </section>
      <section>
        <h2>Deleting your account</h2>
        <p>
          You can delete your account in the app at Me → Delete account. Stakes
          that haven&apos;t come due are not charged, and no friend hears about
          them. Amounts already owed from a declined card are still owed. See
          the <Link href="/privacy">Privacy Policy</Link> for what is deleted
          and what is kept.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          You agree not to falsify proof, tamper with verification, name someone
          as a friend without their agreement, or use the service in a way that
          is unlawful or harms others. We may suspend accounts that do.
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
          We may update these terms. We will post the new version here with a
          new date. Continued use after an update means you accept the new
          terms.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  )
}
