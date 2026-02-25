import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AVL Legal Services Pvt. Ltd. Privacy Policy - How we collect, use, and protect your personal information.",
}

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information including your name, email address, phone number, and any details you provide through our contact forms or during consultations. We also collect non-personal data such as browser type, IP address, and usage patterns to improve our services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to respond to inquiries, schedule consultations, provide legal services, improve our website, and communicate important updates. We never use your personal data for purposes beyond what is necessary to serve you.",
  },
  {
    title: "3. Data Protection",
    content:
      "We implement industry-standard security measures to protect your personal information. This includes encrypted data storage, secure communication channels, and strict access controls within our organization.",
  },
  {
    title: "4. Third-Party Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share data only when required by law, to protect our rights, or with your explicit consent.",
  },
  {
    title: "5. Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function optimally without them.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data held by us. You may also request a copy of your data or ask us to restrict its processing. To exercise these rights, please contact us using the details provided below.",
  },
  {
    title: "7. Changes to This Policy",
    content:
      "We reserve the right to update this privacy policy at any time. Changes will be reflected on this page with an updated revision date. We encourage you to review this policy periodically.",
  },
  {
    title: "8. Contact",
    content:
      "For any questions regarding this privacy policy, please contact us at contact@avllegal.com or visit our office in Patna, Bihar.",
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy outlines how we handle your personal data."
      />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            AVL Legal Services Pvt. Ltd. is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you use our website or
            services.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
