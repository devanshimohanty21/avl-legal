"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 15, suffix: "+", label: "Legal Experts" },
  { value: 1000, suffix: "+", label: "Cases Resolved" },
]

function useCountUp(target: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let startTime: number
    let rafId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, shouldStart, duration])

  return count
}

function StatItem({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible)

  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-4xl font-bold text-accent md:text-5xl">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
        {stat.label}
      </span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="border-y border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
