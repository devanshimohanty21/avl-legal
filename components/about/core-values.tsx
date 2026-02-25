import { Shield, Scale, Users, Award, Heart, BookOpen } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest ethical standards in every interaction.",
  },
  {
    icon: Scale,
    title: "Justice",
    description: "Ensuring fair and equitable outcomes for all our clients.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Placing our clients at the heart of every decision we make.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering outstanding quality in every legal service.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Understanding and relating to our clients' challenges.",
  },
  {
    icon: BookOpen,
    title: "Transparency",
    description: "Maintaining clear and open communication at all stages.",
  },
]

export function CoreValues() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              What We Stand For
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Core Values
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex items-start gap-5 rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                <value.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
