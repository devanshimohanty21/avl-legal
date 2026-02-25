import Link from "next/link"
import { ArrowRight, Check, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceSectionProps {
  service: {
    id: string
    icon: LucideIcon
    title: string
    description: string
    audience: string[]
    benefits: string[]
  }
  reversed?: boolean
}

export function ServiceSection({ service, reversed }: ServiceSectionProps) {
  const Icon = service.icon

  return (
    <section
      id={service.id}
      className="border-b border-border py-24 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 items-start gap-16 lg:grid-cols-2",
            reversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Content */}
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8">
            {/* Target Audience */}
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                Who This Is For
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                Key Benefits
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
