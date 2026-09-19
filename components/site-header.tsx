import { ThemeToggle } from "@/components/theme-toggle"

function SiteHeader() {
  return (
    <header className="flex h-16 items-center justify-between">
      <a href="/" className="text-lg font-semibold tracking-tight">
        Ante
      </a>
      <ThemeToggle />
    </header>
  )
}

export { SiteHeader }
