import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AVL Legal Services Pvt. Ltd. Terms of Service - Terms governing the use of our website and services.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the AVL Legal Services website, you agree to be bound by these Terms of Service. If you do not agree to all terms, please do not use our website or services.",
  },
  {
    title: "2. Services",
    content:
      "AVL Legal Services Pvt. Ltd. provides legal counselling, arbitration, mediation, and business consultancy services. The information on this website is for general informational purposes and does not constitute legal advice. A formal attorney-client relationship is established only through a signed engagement agreement.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "All content on this website, including text, logos, images, and design, is the property of AVL Legal Services Pvt. Ltd. and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.",
  },
  {
    title: "4. User Conduct",
    content:
      "Users agree not to use this website for any unlawful purpose, transmit harmful or malicious content, attempt to gain unauthorized access to our systems, or interfere with the proper functioning of the website.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "AVL Legal Services Pvt. Ltd. shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services, except where such limitation is prohibited by law.",
  },
  {
    title: "6. Disclaimers",
    content:
      "The content on this website is provided on an \"as is\" basis without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of information presented. Communication through this website does not establish an attorney-client relationship.",
  },
  {
    title: "7. Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.",
  },
  {
    title: "8. Modifications",
    content:
      "We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms. We recommend reviewing these terms periodically.",
  },
  {
    title: "9. Contact Information",
    content:
      "For questions about these Terms of Service, please contact us at contact@avllegal.com or visit our office in Patna, Bihar, India.",
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or services."
      />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            These Terms of Service govern your use of the AVL Legal Services
            Pvt. Ltd. website and services. By accessing our website, you agree
            to these terms in their entirety.
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
