const milestones = [
  {
    year: "2025",
    title: "Foundation",
    description:
      "AVL Legal Services Pvt. Ltd. was established in Patna, Bihar, with a mission to simplify law and strengthen rights.",
  },
  {
    year: "2025",
    title: "First 100 Clients",
    description:
      "Achieved our first milestone of serving 100 clients across diverse practice areas within the first year.",
  },
  {
    year: "2025",
    title: "Expanded Services",
    description:
      "Launched our comprehensive arbitration and mediation services, providing alternative dispute resolution options.",
  },
  {
    year: "2026",
    title: "Growing Impact",
    description:
      "Continuing to expand our reach and deepen our impact across Bihar and beyond, serving entrepreneurs, corporates, and individuals.",
  },
]

export function Timeline() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Our Journey
          </span>
        </div>
        <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Milestones
        </h2>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/30 md:left-1/2" />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right md:self-start"
                    : "md:pl-16 md:self-end"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 left-2.5 h-3 w-3 rounded-full bg-accent md:left-auto ${
                    index % 2 === 0
                      ? "md:right-[-6px]"
                      : "md:left-[-6px]"
                  }`}
                />
                <span className="text-sm font-semibold text-accent">
                  {milestone.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {milestone.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/60">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
