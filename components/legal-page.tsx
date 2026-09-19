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
    <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-6">
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-8 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">
            Last updated {updated}
          </p>
        </div>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_h2]:text-base [&_h2]:font-medium [&_h2]:text-foreground [&_section]:flex [&_section]:flex-col [&_section]:gap-2">
          {children}
        </div>
      </main>
      <footer className="border-t py-8 text-xs text-muted-foreground">
        Questions? Email{" "}
        <a href="mailto:hello@useanteapp.com" className="hover:text-foreground">
          hello@useanteapp.com
        </a>
        .
      </footer>
    </div>
  )
}

export { LegalPage }
