import { AppStoreBadge } from "@/components/app-store-badge"
import { WaitlistForm } from "@/components/waitlist-form"
import { LAUNCHED } from "@/lib/site"

// The page's one call to action: the waitlist until launch, the App Store
// badge after. Flip LAUNCHED in lib/site.ts to switch every one at once.
function GetAnte({
  className,
  tone = "auto",
}: {
  className?: string
  tone?: "auto" | "white"
}) {
  return LAUNCHED ? (
    <AppStoreBadge className={className} tone={tone} />
  ) : (
    <WaitlistForm className={className} tone={tone} />
  )
}

export { GetAnte }
