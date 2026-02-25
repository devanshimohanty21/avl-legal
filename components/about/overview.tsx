export function AboutOverview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Our Story
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              A Legacy of Legal Excellence
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              <p className="leading-relaxed text-muted-foreground">
                Founded in 2025 in Patna, Bihar, AVL Legal Services Pvt. Ltd.
                was established with a singular vision: to make quality legal
                services accessible and understandable for everyone. We believe
                that the law should empower, not intimidate.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our team of dedicated legal professionals brings together
                decades of collective experience across diverse practice areas.
                We serve entrepreneurs, corporates, NGOs, and individuals with
                equal commitment and expertise.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                At AVL Legal, we combine traditional legal wisdom with modern
                methodologies to deliver solutions that are both effective and
                efficient. Our client-first approach ensures that every case
                receives the personalized attention it deserves.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-sm bg-primary p-10 flex flex-col justify-end">
              <div className="absolute top-6 right-6 h-20 w-20 border border-accent/30" />
              <div className="relative">
                <span className="font-serif text-7xl font-bold text-accent">2025</span>
                <p className="mt-4 text-sm uppercase tracking-wider text-primary-foreground/60">
                  Year Founded
                </p>
                <div className="mt-6 h-px w-full bg-primary-foreground/10" />
                <p className="mt-6 text-sm uppercase tracking-wider text-primary-foreground/60">
                  Patna, Bihar, India
                </p>
                <p className="mt-2 font-serif text-lg text-primary-foreground">
                  Where tradition meets modern legal practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
