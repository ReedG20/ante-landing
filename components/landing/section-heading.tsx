import { cn } from "@/lib/utils"

function SectionHeading({
  kicker,
  title,
  lede,
  className,
  tone = "default",
}: {
  kicker: string
  title: React.ReactNode
  lede?: React.ReactNode
  className?: string
  tone?: "default" | "inverse"
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", className)}>
      <p
        className={cn(
          "text-sm font-semibold tracking-[0.14em] uppercase",
          tone === "inverse" ? "text-glow" : "text-violet-text"
        )}
      >
        {kicker}
      </p>
      <h2 className="font-heading text-[2.25rem] leading-[1.04] tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "inverse" ? "text-white/65" : "text-muted-foreground"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}

export { SectionHeading }
