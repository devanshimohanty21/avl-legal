import { Eye, Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="bg-card py-24 lg:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-sm border border-border bg-background p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary">
              <Eye className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
              Our Vision
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To become a trusted name in the Indian legal landscape by
              providing accessible, transparent, and result-oriented legal
              services that uphold justice and empower individuals and
              businesses alike.
            </p>
          </div>

          <div className="rounded-sm border border-border bg-background p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
              <Target className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To simplify legal complexities and strengthen the rights of our
              clients through dedicated counsel, strategic thinking, and an
              unwavering commitment to ethical practice. We strive to bridge
              the gap between legal expertise and public understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
