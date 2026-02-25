import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { FAQ } from "@/components/contact/faq"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AVL Legal Services Pvt. Ltd. for expert legal counsel. Book a consultation today.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We are here to help. Reach out for a confidential consultation or general inquiry."
      />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <FAQ />
    </>
  )
}
