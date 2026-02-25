import { Shield, Lock, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every matter we handle. Transparency and honesty form the foundation of our practice.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Your trust is paramount. We maintain strict confidentiality, safeguarding your sensitive information with unwavering discretion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern approaches and creative solutions, combining legal expertise with forward-thinking strategies for optimal results.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Our Promise
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Why Choose AVL Legal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 leading-relaxed">
            Our pillars of practice ensure that every client receives exceptional
            service built on trust and excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col items-center rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-10 text-center transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <value.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-primary-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
