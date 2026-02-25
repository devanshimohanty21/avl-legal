interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            AVL Legal Services
          </span>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-8 h-1 bg-accent" />
    </section>
  )
}
