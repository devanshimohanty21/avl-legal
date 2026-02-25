import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-primary">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(197,168,128,0.3) 100px, rgba(197,168,128,0.3) 101px),
                           repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(197,168,128,0.3) 100px, rgba(197,168,128,0.3) 101px)`,
        }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Accent line */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Established 2025
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-7xl">
            <span className="text-balance">Simplifying Law.</span>
            <br />
            <span className="text-accent">Strengthening Rights.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            We deliver expert legal counsel with clarity and conviction.
            Navigating complex legal landscapes so you can focus on what
            matters most.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  )
}
