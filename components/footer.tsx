import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/services#legal-counselling", label: "Legal Counselling" },
    { href: "/services#arbitration", label: "Arbitration" },
    { href: "/services#mediation", label: "Mediation" },
    { href: "/services#business-consultancy", label: "Business Consultancy" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent">
                <span className="font-serif text-lg font-bold text-accent-foreground">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight">
                  AVL Legal
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60">
                  Services Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Simplifying Law, Strengthening Rights. Providing expert legal
              services with integrity, confidentiality, and innovation since
              2025.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Patna, Bihar, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  contact@avllegal.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} AVL Legal Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-accent"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
