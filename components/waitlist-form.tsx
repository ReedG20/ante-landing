"use client"

import { useActionState } from "react"
import { cn } from "cn"

import { joinWaitlist, type WaitlistState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialState: WaitlistState = { status: "idle" }

function WaitlistForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState
  )

  if (state.status === "success" || state.status === "duplicate") {
    return (
      <p role="status" aria-live="polite" className={cn("text-sm", className)}>
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Label htmlFor="email" className="sr-only">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={state.status === "error" || undefined}
          className="sm:max-w-xs"
        />
        <Button type="submit" disabled={pending}>
          {pending ? "Joining…" : "Join the waitlist"}
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm text-destructive"
      >
        {state.status === "error" ? state.message : null}
      </p>
    </form>
  )
}

export { WaitlistForm }
