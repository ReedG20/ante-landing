import { cn } from "@/lib/utils"

// The app's hand-drawn loop (habit-tracker src/constants/ring-path.ts): a pen
// circling whatever it sits behind. It starts top right and overshoots.
const RING_PATH =
  "M 152 10 C 108 -2, 38 4, 14 32 C -4 56, 18 90, 76 95 C 136 100, 194 86, 195 50 C 196 20, 158 4, 110 10"

function HandLoop({
  children,
  className,
  loopClassName,
  strokeWidth = 4,
  delay = 400,
}: {
  children: React.ReactNode
  className?: string
  loopClassName?: string
  strokeWidth?: number
  delay?: number
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="-6 -8 212 116"
        preserveAspectRatio="none"
        className={cn(
          "pointer-events-none absolute -inset-x-[14%] -inset-y-[22%] h-[144%] w-[128%] overflow-visible text-primary",
          loopClassName
        )}
      >
        <path
          d={RING_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          data-draw
          style={
            {
              "--draw-length": 560,
              "--draw-delay": `${delay}ms`,
            } as React.CSSProperties
          }
        />
      </svg>
    </span>
  )
}

export { HandLoop, RING_PATH }
