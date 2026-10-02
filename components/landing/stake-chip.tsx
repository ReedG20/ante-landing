import { cn } from "@/lib/utils"

// The red-orange pill the app puts on anything with a stake: "$20 on it",
// "Sam's watching", "3-day lock". Red-orange means this costs you.
function StakeChip({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full bg-stake-soft px-3 text-[13px] font-semibold whitespace-nowrap text-stake",
        className
      )}
    >
      {children}
    </span>
  )
}

export { StakeChip }
