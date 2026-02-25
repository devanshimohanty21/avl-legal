import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-accent py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-accent-foreground md:text-4xl text-balance">
          Ready to Protect Your Rights?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/70 leading-relaxed">
          Schedule a confidential consultation with our legal experts today. Let
          us simplify the law for you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-accent-foreground/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:border-accent-foreground/40"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
