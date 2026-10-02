// Every phone shot on the landing page, framed in an iPhone and exported at
// 900 × 1840 into public/screens. Screens that look the same in both themes
// (the always-dark proof screen, the always-violet Kept screen) have one file.
type Screenshot = {
  id: string
  caption: string
  note: string
  alt: string
  light: string
  dark: string
}

const SCREENSHOTS = {
  today: {
    id: "today",
    caption: "Today",
    note: "what's on the line, up top",
    alt: "The Ante Today screen: a 41-day streak on the line, and today's habits with their stakes",
    light: "/screens/today-light.png",
    dark: "/screens/today-dark.png",
  },
  deal: {
    id: "deal",
    caption: "It's on",
    note: "your terms, in writing",
    alt: "Ante confirming a new habit: meditate for ten minutes, proved with a 10-minute timer, with $25 on the line",
    light: "/screens/deal-light.png",
    dark: "/screens/deal-dark.png",
  },
  stakes: {
    id: "stakes",
    caption: "The stakes",
    note: "real money. now you move.",
    alt: "Putting $25 on a habit in Ante, with exactly what happens if you miss",
    light: "/screens/stakes-light.png",
    dark: "/screens/stakes-dark.png",
  },
  proof: {
    id: "proof",
    caption: "The proof",
    note: "a photo, checked on the spot",
    alt: "Ante checking a photo check-in for a morning run",
    light: "/screens/proof.png",
    dark: "/screens/proof.png",
  },
  kept: {
    id: "kept",
    caption: "Kept",
    note: "the best screen in the app",
    alt: "The Ante Kept screen: 30 days kept, $100 stayed on the card, and the signed contract stamped KEPT",
    light: "/screens/kept.png",
    dark: "/screens/kept.png",
  },
  me: {
    id: "me",
    caption: "Me",
    note: "streaks, and what you've put up",
    alt: "The Ante Me screen with a 41-day streak, money on the line, and money put up and kept",
    light: "/screens/me-light.png",
    dark: "/screens/me-dark.png",
  },
} satisfies Record<string, Screenshot>

const GALLERY: Screenshot[] = [
  SCREENSHOTS.today,
  SCREENSHOTS.stakes,
  SCREENSHOTS.deal,
  SCREENSHOTS.proof,
  SCREENSHOTS.kept,
  SCREENSHOTS.me,
]

export { GALLERY, SCREENSHOTS }
export type { Screenshot }
