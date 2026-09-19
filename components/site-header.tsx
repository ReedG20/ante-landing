import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

function SiteHeader() {
  return (
    <header className="flex h-16 items-center justify-between">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Ante
      </Link>
      <ThemeToggle />
    </header>
  )
}

export { SiteHeader }
