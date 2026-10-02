import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Screenshot } from "@/lib/screenshots"

// A framed phone screenshot in the light or dark version, following the theme.
function PhoneShot({
  shot,
  sizes,
  preload,
  className,
}: {
  shot: Screenshot
  sizes: string
  preload?: boolean
  className?: string
}) {
  const shared = { width: 900, height: 1840, sizes, preload }

  if (shot.light === shot.dark) {
    return (
      <Image
        src={shot.light}
        alt={shot.alt}
        {...shared}
        className={cn("h-auto", className)}
      />
    )
  }

  return (
    <>
      <Image
        src={shot.light}
        alt={shot.alt}
        {...shared}
        className={cn("h-auto dark:hidden", className)}
      />
      <Image
        src={shot.dark}
        alt={shot.alt}
        {...shared}
        className={cn("hidden h-auto dark:block", className)}
      />
    </>
  )
}

export { PhoneShot }
