"use server"

import { Resend } from "resend"

export type WaitlistState =
  | { status: "idle" }
  | { status: "joined" | "already" }
  | { status: "error"; message: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GENERIC_ERROR = "Something went wrong on our end. Try again?"

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  // A field people never see. Bots fill it in; tell them it worked.
  if (formData.get("company")) return { status: "joined" }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase()
  if (!EMAIL.test(email) || email.length > 254) {
    return { status: "error", message: "That email doesn't look right." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return { status: "error", message: GENERIC_ERROR }
  }

  const segmentId = process.env.RESEND_AUDIENCE_ID

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      segments: segmentId ? [{ id: segmentId }] : undefined,
    })

    if (error) {
      if (
        error.name === "validation_error" &&
        /already|exist/i.test(error.message)
      ) {
        return { status: "already" }
      }
      if (error.name === "rate_limit_exceeded") {
        return {
          status: "error",
          message: "Too many tries. Give it a minute.",
        }
      }
      if (error.name === "restricted_api_key") {
        console.error(
          "RESEND_API_KEY has sending-only permission. Adding contacts requires a key with Full access (resend.com/api-keys)."
        )
      } else {
        console.error("Resend contacts.create failed:", error)
      }
      return { status: "error", message: GENERIC_ERROR }
    }

    return { status: "joined" }
  } catch (err) {
    console.error("joinWaitlist failed:", err)
    return { status: "error", message: GENERIC_ERROR }
  }
}
