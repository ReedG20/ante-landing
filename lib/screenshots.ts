// Every phone shot on the landing page, framed in an iPhone and exported at
// 900 × 1840. Real shots go in public/screens/<id>-light.png and
// <id>-dark.png; until then each one points at the hero placeholder.
const PLACEHOLDER = "/ante-mockup.png"

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
    note: "what skipping would cost, up top",
    alt: "The Ante Today screen, showing what skipping today would cost and the habits still to do",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
  deal: {
    id: "deal",
    caption: "The deal",
    note: "your terms, in writing",
    alt: "A habit in Ante, showing its terms and a calendar of the days it was kept",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
  stakes: {
    id: "stakes",
    caption: "The stakes",
    note: "pick what a miss costs",
    alt: "Choosing a stake in Ante: money, a friend, a lockout, or just your word",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
  proof: {
    id: "proof",
    caption: "The proof",
    note: "a photo, checked on the spot",
    alt: "Ante checking a photo check-in",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
  kept: {
    id: "kept",
    caption: "Kept",
    note: "the best screen in the app",
    alt: "The Ante Kept screen, shown when a commitment is finished",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
  me: {
    id: "me",
    caption: "Me",
    note: "streaks, and what you've put up",
    alt: "The Ante Me screen, with a streak, stats and a month calendar",
    light: PLACEHOLDER,
    dark: PLACEHOLDER,
  },
} satisfies Record<string, Screenshot>

const GALLERY: Screenshot[] = [
  SCREENSHOTS.today,
  SCREENSHOTS.deal,
  SCREENSHOTS.stakes,
  SCREENSHOTS.proof,
  SCREENSHOTS.kept,
  SCREENSHOTS.me,
]

export { GALLERY, SCREENSHOTS }
export type { Screenshot }
