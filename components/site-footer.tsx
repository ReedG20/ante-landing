import Link from "next/link"

import { SUPPORT_EMAIL } from "@/lib/site"

function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Ante</span>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground">
          {SUPPORT_EMAIL}
        </a>
        <Link href="/support" className="hover:text-foreground">
          Support
        </Link>
        <Link href="/privacy" className="hover:text-foreground">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-foreground">
          Terms
        </Link>
      </div>
    </footer>
  )
}

export { SiteFooter }
