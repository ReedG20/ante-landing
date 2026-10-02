import Image from "next/image"
import Link from "next/link"

import { SUPPORT_EMAIL } from "@/lib/site"

function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <Image
            src="/ante-mark.svg"
            alt="Ante"
            width={34}
            height={11}
            className="h-3.5 w-auto opacity-70 dark:invert"
          />
          <span>© {new Date().getFullYear()} Ante</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
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
      </div>
    </footer>
  )
}

export { SiteFooter }
