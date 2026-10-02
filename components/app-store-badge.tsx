import { cn } from "cn"

import { APP_STORE_URL } from "@/lib/site"

// Apple's official artwork: black on light backgrounds, white on dark. On a
// colored band, pass tone="white" to keep it white in both themes.
function AppStoreBadge({
  className,
  tone = "auto",
}: {
  className?: string
  tone?: "auto" | "white"
}) {
  return (
    <a
      href={APP_STORE_URL}
      aria-label="Download Ante on the App Store"
      className={cn(
        "w-fit rounded-[10px] transition-transform hover:scale-[1.03] active:scale-[0.98]",
        className
      )}
    >
      {/* eslint-disable @next/next/no-img-element -- static SVGs, nothing to optimize */}
      {tone === "auto" && (
        <img
          src="/app-store-badge-black.svg"
          alt=""
          width={120}
          height={40}
          className="h-12 w-auto dark:hidden"
        />
      )}
      <img
        src="/app-store-badge-white.svg"
        alt=""
        width={120}
        height={40}
        className={cn("h-12 w-auto", tone === "auto" && "hidden dark:block")}
      />
      {/* eslint-enable @next/next/no-img-element */}
    </a>
  )
}

export { AppStoreBadge }
