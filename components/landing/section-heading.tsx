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
    <div className={cn("flex max-w-3xl flex-col gap-4", className)}>
      <p
        className={cn(
          "text-sm font-semibold tracking-[0.14em] uppercase",
          tone === "inverse" ? "text-glow" : "text-violet-text"
        )}
      >
        {kicker}
      </p>
      <h2 className="font-heading text-[2.6rem] leading-[1.02] tracking-tight text-balance sm:text-6xl">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed sm:text-xl",
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
