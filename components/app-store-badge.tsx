import { cn } from "cn"

import { APP_STORE_URL } from "@/lib/site"

// Apple's official artwork: black on light backgrounds, white on dark.
function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      aria-label="Download Ante on the App Store"
      className={cn("w-fit", className)}
    >
      {/* eslint-disable @next/next/no-img-element -- static SVGs, nothing to optimize */}
      <img
        src="/app-store-badge-black.svg"
        alt=""
        width={120}
        height={40}
        className="h-11 w-auto dark:hidden"
      />
      <img
        src="/app-store-badge-white.svg"
        alt=""
        width={120}
        height={40}
        className="hidden h-11 w-auto dark:block"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </a>
  )
}

export { AppStoreBadge }
