"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What areas of law does AVL Legal Services cover?",
    answer:
      "We provide comprehensive services including Legal Counselling, Arbitration, Mediation, and Business Consultancy. Our expertise spans corporate law, dispute resolution, regulatory compliance, and more.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by filling out the contact form on this page, calling our office directly, or sending us an email. Our team will respond within 24 hours to arrange a convenient time.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring any relevant documents, contracts, or correspondence related to your legal matter. A brief written summary of your situation can also help us better understand your needs and provide targeted advice.",
  },
  {
    question: "Are consultations confidential?",
    answer:
      "Absolutely. All consultations and communications with our firm are strictly confidential, protected by attorney-client privilege. Your privacy and trust are of paramount importance to us.",
  },
  {
    question: "What are your fees and payment options?",
    answer:
      "Our fee structure varies based on the nature and complexity of the legal matter. We offer transparent pricing and will provide a detailed fee estimate during your initial consultation. Payment plans are available for qualifying cases.",
  },
  {
    question: "Do you handle cases outside of Patna?",
    answer:
      "While our primary office is in Patna, Bihar, we serve clients across the state and can coordinate legal services for matters in other jurisdictions as needed. Please contact us to discuss your specific situation.",
  },
]

export function FAQ() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              FAQ
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-base font-semibold text-foreground hover:text-accent hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
