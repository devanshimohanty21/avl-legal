import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServiceSection } from "@/components/services/service-section"
import { CtaBanner } from "@/components/home/cta-banner"
import { Scale, Handshake, Users, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AVL Legal Services' comprehensive offerings: Legal Counselling, Arbitration, Mediation, and Business Consultancy.",
}

const services = [
  {
    id: "legal-counselling",
    icon: Scale,
    title: "Legal Counselling",
    description:
      "Our legal counselling services provide comprehensive, strategic advice across all areas of law. We work closely with clients to understand their unique situations and develop tailored solutions that address their specific needs. From contract review to regulatory compliance, our team ensures you are fully informed and protected at every step.",
    audience: ["Entrepreneurs", "Corporates", "NGOs", "Individuals"],
    benefits: [
      "Personalized legal strategies tailored to your goals",
      "Expert guidance on contracts, compliance, and regulations",
      "Risk assessment and mitigation planning",
      "Ongoing advisory support for evolving legal needs",
      "Cost-effective solutions that protect your interests",
    ],
  },
  {
    id: "arbitration",
    icon: Handshake,
    title: "Arbitration",
    description:
      "Our arbitration services offer a streamlined and confidential alternative to traditional litigation. We guide clients through the arbitration process with precision, ensuring disputes are resolved efficiently while protecting your rights and interests. Our experienced arbitration team delivers binding outcomes that save time, reduce costs, and preserve business relationships.",
    audience: ["Corporates", "Entrepreneurs", "Business Partners"],
    benefits: [
      "Faster resolution compared to court litigation",
      "Confidential proceedings protecting business interests",
      "Binding and enforceable awards",
      "Flexible procedures tailored to dispute complexity",
      "Expert representation throughout the process",
    ],
  },
  {
    id: "mediation",
    icon: Users,
    title: "Mediation",
    description:
      "Mediation at AVL Legal focuses on facilitating constructive dialogue between parties to reach mutually acceptable resolutions. Our skilled mediators create a neutral, supportive environment where all sides can express concerns and work toward agreement. This non-adversarial approach preserves relationships while achieving lasting solutions.",
    audience: ["Individuals", "Corporates", "NGOs", "Business Partners"],
    benefits: [
      "Preserves and strengthens business and personal relationships",
      "Voluntary and collaborative resolution process",
      "Lower costs than formal legal proceedings",
      "Faster outcomes with greater party satisfaction",
      "Creative solutions beyond what courts can offer",
    ],
  },
  {
    id: "business-consultancy",
    icon: Briefcase,
    title: "Business Consultancy",
    description:
      "Our business consultancy services blend legal expertise with strategic business insight. We assist clients in navigating the complex landscape of corporate governance, regulatory requirements, and operational optimization. From startup formation to expansion planning, our advisory team empowers your business to grow with confidence and compliance.",
    audience: ["Entrepreneurs", "Startups", "Corporates", "NGOs"],
    benefits: [
      "Strategic business planning with legal foundations",
      "Corporate governance and compliance frameworks",
      "Regulatory advisory and licensing support",
      "Business structure optimization and restructuring",
      "Due diligence and risk assessment services",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive legal solutions designed to protect your interests and accelerate your growth."
      />
      <div className="bg-background">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
      <CtaBanner />
    </>
  )
}
