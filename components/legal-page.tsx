import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated {updated}
          </p>
        </div>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-base [&_h2]:font-medium [&_h2]:text-foreground [&_li]:pl-1 [&_section]:flex [&_section]:flex-col [&_section]:gap-2 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export { LegalPage }
