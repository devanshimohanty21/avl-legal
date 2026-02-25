import { User } from "lucide-react"

const leaders = [
  {
    name: "Advocate A. Verma",
    role: "Founder & Managing Partner",
    description:
      "A seasoned legal professional with extensive experience in corporate law and dispute resolution.",
  },
  {
    name: "Advocate V. Singh",
    role: "Senior Partner",
    description:
      "Specialist in arbitration and mediation with a deep commitment to alternative dispute resolution.",
  },
  {
    name: "Advocate L. Gupta",
    role: "Partner, Business Advisory",
    description:
      "Expert in business consultancy, regulatory compliance, and corporate governance frameworks.",
  },
]

export function Leadership() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              The Team
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Guided by experienced legal minds committed to delivering
            excellence in every matter.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="flex flex-col items-center rounded-sm border border-border bg-card p-10 text-center transition-all duration-300 hover:border-accent"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {leader.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
