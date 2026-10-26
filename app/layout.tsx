import type { Metadata } from "next"
import { Geist_Mono, Inter, Mansalva } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { COMPANY_NAME } from "@/lib/site"
import { cn } from "@/lib/utils"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontHeading = localFont({
  src: "../public/fonts/Comico-Regular.woff2",
  variable: "--font-comico",
  display: "swap",
})

// The coach's handwriting: the app's notes in the margins.
const fontNote = Mansalva({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mansalva",
})

const title = "Ante — Put something on the line"
const description =
  "Ante is a habit and goal tracker for iPhone. Prove every check-in, and choose what a miss costs you: money charged to your card, a friend finding out, or a lockout."

// The share card's image is app/opengraph-image.tsx; X falls back to it too.
export const metadata: Metadata = {
  metadataBase: new URL("https://useanteapp.com"),
  title,
  description,
  publisher: COMPANY_NAME,
  openGraph: {
    type: "website",
    siteName: "Ante",
    url: "/",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontMono.variable,
        fontHeading.variable,
        fontNote.variable
      )}
    >
      <body>
        {/* Without JavaScript nothing scrolls into view, so show it all. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}[data-draw]{stroke-dashoffset:0!important}`}</style>
        </noscript>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
