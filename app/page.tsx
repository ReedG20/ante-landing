import { Contract } from "@/components/landing/contract"
import { Deal } from "@/components/landing/deal"
import { Definition } from "@/components/landing/definition"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Gallery } from "@/components/landing/gallery"
import { Hero } from "@/components/landing/hero"
import { Outcomes } from "@/components/landing/outcomes"
import { Pricing } from "@/components/landing/pricing"
import { ProofBand } from "@/components/landing/proof-band"
import { Stakes } from "@/components/landing/stakes"
import { Ticker } from "@/components/landing/ticker"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col overflow-x-clip">
        <Hero />
        <Ticker />
        <Definition />
        <Deal />
        <Stakes />
        <ProofBand />
        <Contract />
        <Gallery />
        <Outcomes />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
