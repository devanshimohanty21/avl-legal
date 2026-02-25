"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "AVL Legal Services provided us with exceptional legal guidance during a complex corporate restructuring. Their expertise and attention to detail were invaluable.",
    name: "Rajesh Kumar",
    role: "CEO, Kumar Enterprises",
  },
  {
    quote:
      "The mediation services offered by AVL Legal helped us resolve a longstanding dispute efficiently and amicably. Highly recommended for their professionalism.",
    name: "Priya Sharma",
    role: "Managing Director, Sharma Industries",
  },
  {
    quote:
      "Their business consultancy services transformed our compliance framework. The team is knowledgeable, responsive, and truly client-focused.",
    name: "Amit Verma",
    role: "Founder, Verma Tech Solutions",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Testimonials
          </span>
        </div>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          What Our Clients Say
        </h2>

        <div className="relative mt-16">
          <div className="mx-auto max-w-3xl">
            <Quote className="h-12 w-12 text-accent/30" />
            <blockquote className="mt-6">
              <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                {testimonials[current].quote}
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-8 bg-accent" />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-accent" : "w-2 bg-border"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
