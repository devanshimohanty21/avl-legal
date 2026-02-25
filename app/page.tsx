import { Hero } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Stats } from "@/components/home/stats"
import { Testimonials } from "@/components/home/testimonials"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
