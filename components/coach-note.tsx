import { cn } from "@/lib/utils"

type ArrowDirection = "down-left" | "down-right" | "up-left" | "left" | "none"

// Arrows drawn the way you'd scribble one in a margin.
const ARROWS: Record<Exclude<ArrowDirection, "none">, string> = {
  "down-left": "M 70 4 C 60 26, 40 40, 10 44 M 10 44 L 22 34 M 10 44 L 24 50",
  "down-right": "M 6 4 C 16 26, 36 40, 66 44 M 66 44 L 54 34 M 66 44 L 52 50",
  "up-left": "M 70 46 C 46 46, 22 36, 10 8 M 10 8 L 9 20 M 10 8 L 20 15",
  left: "M 74 22 C 54 30, 32 30, 8 22 M 8 22 L 20 14 M 8 22 L 18 32",
}

// The coach's handwritten note, as in the app: Mansalva, lowercase, a little
// crooked, with an arrow at whatever it's talking about.
function CoachNote({
  children,
  arrow = "none",
  arrowPosition = "before",
  tilt = -3,
  className,
}: {
  children: React.ReactNode
  arrow?: ArrowDirection
  arrowPosition?: "before" | "after"
  tilt?: number
  className?: string
}) {
  const arrowSvg =
    arrow === "none" ? null : (
      <svg
        aria-hidden
        viewBox="0 0 80 52"
        className="h-9 w-14 shrink-0 overflow-visible"
      >
        <path
          d={ARROWS[arrow]}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          data-draw
          style={{ "--draw-length": 140 } as React.CSSProperties}
        />
      </svg>
    )

  return (
    <p
      className={cn(
        "flex items-end gap-1 font-note text-xl leading-7 lowercase",
        className
      )}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {arrowPosition === "before" && arrowSvg}
      <span className="[text-wrap-style:balance]">{children}</span>
      {arrowPosition === "after" && arrowSvg}
    </p>
  )
}

export { CoachNote }
