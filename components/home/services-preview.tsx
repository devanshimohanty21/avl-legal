import Link from "next/link"
import { Scale, Handshake, Users, Briefcase, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Legal Counselling",
    description:
      "Comprehensive legal advice tailored to your specific needs, ensuring informed decisions at every step.",
    href: "/services#legal-counselling",
  },
  {
    icon: Handshake,
    title: "Arbitration",
    description:
      "Efficient dispute resolution through binding arbitration, saving time and resources while ensuring fair outcomes.",
    href: "/services#arbitration",
  },
  {
    icon: Users,
    title: "Mediation",
    description:
      "Facilitating productive dialogue between parties to reach mutually beneficial agreements without litigation.",
    href: "/services#mediation",
  },
  {
    icon: Briefcase,
    title: "Business Consultancy",
    description:
      "Strategic business advisory services covering compliance, corporate governance, and regulatory frameworks.",
    href: "/services#business-consultancy",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Our Expertise
          </span>
        </div>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Areas of Practice
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          We provide a full spectrum of legal services designed to protect
          your interests and empower your growth.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
