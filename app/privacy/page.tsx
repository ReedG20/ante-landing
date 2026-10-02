import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { SUPPORT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy — Ante",
  description: "How Ante collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 1, 2026">
      <section>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Account details.</strong> Your name and email address, from
            signing in with Apple or Google.
          </li>
          <li>
            <strong>Your commitments.</strong> The habits and goals you make,
            their stakes, signed contracts, and check-in history.
          </li>
          <li>
            <strong>Proof.</strong> Photos you take or choose for a check-in,
            what you write about them, and timer runs. For a location habit, we
            read your precise location once, only when you tap Check in, and
            never in the background. We store the coordinates, their accuracy,
            and the place they matched.
          </li>
          <li>
            <strong>Friends you name.</strong> The name and email address of
            anyone you choose as a friend stake.
          </li>
          <li>
            <strong>Payment details.</strong> Your card is held by Stripe. We
            only see its brand and last four digits, and the charges made to it.
            Ante Pro is bought through Apple, and we receive your subscription
            status.
          </li>
          <li>
            <strong>Device and usage data.</strong> A push notification token,
            how you use the app, crash reports, and session replays of the app
            screen with text fields and images masked.
          </li>
          <li>
            <strong>Messages to support,</strong> including any charge you
            contest and why.
          </li>
          <li>
            <strong>Waitlist sign-ups.</strong> If you joined our waitlist
            before launch, your email address.
          </li>
        </ul>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use this information to run Ante: to check your proof, send
          reminders, charge a money stake when you miss, email the friends you
          name, manage your subscription, review contested charges, prevent
          fraud, and fix bugs. We do not sell your personal information, and we
          do not use it for advertising.
        </p>
      </section>
      <section>
        <h2>Service providers</h2>
        <p>
          These companies process data on our behalf, only as needed to do their
          part:
        </p>
        <ul>
          <li>
            <strong>Convex</strong> hosts our backend and database, and stores
            proof photos.
          </li>
          <li>
            <strong>Clerk</strong> handles sign-in with Apple and Google.
          </li>
          <li>
            <strong>Stripe</strong> saves your card and processes stake charges,
            refunds and disputes.
          </li>
          <li>
            <strong>Apple</strong> and <strong>RevenueCat</strong> process Ante
            Pro subscriptions.
          </li>
          <li>
            <strong>PostHog</strong> provides analytics, crash reports and
            session replay.
          </li>
          <li>
            <strong>Expo</strong> delivers push notifications.
          </li>
          <li>
            <strong>Google Places</strong> receives your coordinates when you
            check in at a location, to find the places around you.
          </li>
          <li>
            <strong>OpenRouter</strong> passes your proof photos and the text of
            your commitment to an AI model (Google Gemini), which checks whether
            the proof matches. It also suggests ways to prove a new commitment.
          </li>
          <li>
            <strong>Resend</strong> sends our emails.
          </li>
        </ul>
        <p>
          Stripe&apos;s and Apple&apos;s own privacy policies apply to the
          payment data they handle.
        </p>
      </section>
      <section>
        <h2>Friends you name</h2>
        <p>
          When you make a friend stake, we email that person a heads-up, and one
          more email if you miss. The emails show your name and the commitment,
          and replies go to your email address. Every email has a link to stop
          emails from Ante. We keep a record of that choice, and of bounced
          addresses, so we don&apos;t email them again.
        </p>
      </section>
      <section>
        <h2>Refund requests to Apple</h2>
        <p>
          If you ask Apple for a refund of an Ante Pro purchase, we share
          details of that purchase and of your use of the app with Apple, so
          Apple can decide the request.
        </p>
      </section>
      <section>
        <h2>Keeping and deleting your data</h2>
        <ul>
          <li>
            You can delete your account in the app at Me → Delete account. That
            deletes your habits and goals and their history, every proof photo
            and check-in, your signed contracts, the friends you named, your
            reminders, and your saved cards.
          </li>
          <li>
            Stripe keeps its own record of past charges, including any amount
            still owed.
          </li>
          <li>
            When a money stake comes due and you then delete that habit or goal,
            its proof is kept for 130 days so a contested or disputed charge can
            be reviewed. Deleting your account deletes it too.
          </li>
          <li>
            After you delete your account, we keep one-way hashes of your email
            address and of your card&apos;s fingerprint. They aren&apos;t linked
            to you or to any other data, and they can&apos;t be turned back into
            your email or card. We use them only to stop a one-time courtesy on
            a first miss from being claimed twice.
          </li>
          <li>
            Friends&apos; choices to stop emails are kept after you delete your
            account.
          </li>
          <li>
            Waitlist emails can be removed with the unsubscribe link in any
            email we sent.
          </li>
        </ul>
        <p>
          To ask for a copy of your data, or for anything you can&apos;t delete
          in the app, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can turn off notifications, location and camera access in your
          iPhone&apos;s Settings at any time. Location is only needed for
          location habits, and the camera only for photo proof.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          We may update this policy. We will post the new version here with a
          new date.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about your privacy? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  )
}
