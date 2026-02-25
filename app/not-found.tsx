import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary">
      <div className="mx-auto max-w-lg px-6 text-center">
        <span className="font-serif text-8xl font-bold text-accent md:text-9xl">
          404
        </span>
        <h1 className="mt-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-primary-foreground/70 leading-relaxed">
          The page you are looking for does not exist or has been moved. Please
          check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
