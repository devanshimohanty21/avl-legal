import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AboutOverview } from "@/components/about/overview"
import { VisionMission } from "@/components/about/vision-mission"
import { CoreValues } from "@/components/about/core-values"
import { Timeline } from "@/components/about/timeline"
import { Leadership } from "@/components/about/leadership"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AVL Legal Services Pvt. Ltd., founded in 2025 in Patna, Bihar. Discover our vision, mission, core values, and leadership team.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="A firm built on trust, driven by purpose, and committed to delivering justice."
      />
      <AboutOverview />
      <VisionMission />
      <CoreValues />
      <Timeline />
      <Leadership />
    </>
  )
}
