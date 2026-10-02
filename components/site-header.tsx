import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/#stakes", label: "Stakes" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
]

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Ante home" className="-m-2 p-2">
          <Image
            src="/ante-mark.svg"
            alt="Ante"
            width={34}
            height={11}
            preload
            className="h-[18px] w-auto dark:invert"
          />
        </Link>
        <nav
          aria-label="Sections"
          className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="/get"
            className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Ante
          </a>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
