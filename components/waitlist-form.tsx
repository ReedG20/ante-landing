"use client"

import { useActionState, useId } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"
import { cn } from "cn"

import { joinWaitlist, type WaitlistState } from "@/app/actions"

const initialState: WaitlistState = { status: "idle" }

// Stands in for the App Store badge until launch: an email field and button
// in one pill, with a line underneath that says exactly what you'll get. The
// done state keeps the same shape so nothing jumps. On a colored band, pass
// tone="white" for a white pill in both themes.
function WaitlistForm({
  className,
  tone = "auto",
}: {
  className?: string
  tone?: "auto" | "white"
}) {
  const id = useId()
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState
  )
  const white = tone === "white"
  const done = state.status === "joined" || state.status === "already"
  const error = state.status === "error" ? state.message : null

  const pill = cn(
    "flex h-14 w-full items-center rounded-full p-1.5",
    white ? "bg-white text-black" : "bg-muted"
  )

  return (
    <div className={cn("flex w-full max-w-md flex-col gap-2.5", className)}>
      {done ? (
        <p className={cn(pill, "gap-3 pl-1.5 font-semibold")}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <HugeiconsIcon icon={Tick02Icon} size={20} strokeWidth={2.4} />
          </span>
          {state.status === "joined"
            ? "You're in. Watch your inbox."
            : "You were already in. Good call."}
        </p>
      ) : (
        <form
          action={formAction}
          className={cn(
            pill,
            "gap-1.5 transition-shadow focus-within:ring-3",
            white ? "focus-within:ring-white/40" : "focus-within:ring-ring/30"
          )}
        >
          <label htmlFor={id} className="sr-only">
            Email address
          </label>
          <input
            id={id}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={error ? true : undefined}
            aria-describedby={`${id}-note`}
            className={cn(
              "h-full min-w-0 flex-1 bg-transparent pl-4 text-base outline-none",
              white
                ? "placeholder:text-black/40"
                : "placeholder:text-muted-foreground"
            )}
          />
          {/* Off-screen and skipped by keyboards; only bots fill it in. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute -left-[9999px] size-px opacity-0"
          />
          <button
            type="submit"
            disabled={pending}
            className="h-11 shrink-0 rounded-full bg-primary px-5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:scale-100 disabled:opacity-70"
          >
            {pending ? "Dealing…" : "Deal me in"}
          </button>
        </form>
      )}
      <p
        id={`${id}-note`}
        role="status"
        aria-live="polite"
        className={cn(
          "pl-5 text-sm in-[.text-center]:pl-0",
          error
            ? white
              ? "font-semibold text-white"
              : "font-semibold text-destructive"
            : white
              ? "text-white/75"
              : "text-muted-foreground"
        )}
      >
        {error ??
          (done
            ? "We'll email you the day Ante is on the App Store."
            : "One email, the day Ante hits the App Store. That's it.")}
      </p>
    </div>
  )
}

export { WaitlistForm }
