"use server"

import { Resend } from "resend"
import { z } from "zod"

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" | "duplicate" | "error"; message: string }

const schema = z.object({
  email: z.email().trim().toLowerCase().max(254),
})

const GENERIC_ERROR = "Something went wrong. Please try again."

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = schema.safeParse({ email: formData.get("email") })
  if (!parsed.success) {
    return { status: "error", message: "Enter a valid email address." }
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
      email: parsed.data.email,
      unsubscribed: false,
      segments: segmentId ? [{ id: segmentId }] : undefined,
    })

    if (error) {
      if (
        error.name === "validation_error" &&
        /already|exist/i.test(error.message)
      ) {
        return { status: "duplicate", message: "You're already on the list." }
      }
      if (error.name === "rate_limit_exceeded") {
        return {
          status: "error",
          message: "Too many requests. Please try again in a minute.",
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

    return {
      status: "success",
      message: "You're on the list. We'll email you when Ante is ready.",
    }
  } catch (err) {
    console.error("joinWaitlist failed:", err)
    return { status: "error", message: GENERIC_ERROR }
  }
}
