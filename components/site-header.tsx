import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

function SiteHeader() {
  return (
    <header className="flex h-16 items-center justify-between">
      <Link href="/" aria-label="Ante home">
        <Image
          src="/ante-mark.svg"
          alt="Ante"
          width={34}
          height={11}
          priority
          className="h-4 w-auto dark:invert"
        />
      </Link>
      <ThemeToggle />
    </header>
  )
}

export { SiteHeader }
