import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQItem } from "@/types/landing-page";

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <section className="bg-bgSecondary py-16">
      <div className="custom-container">
        <div className="max-w-4xl mx-auto">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our courses and programs.</p>
          </div>
          <Accordion type="single" collapsible className="">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-bgPrimary rounded-lg border border-borderColor px-6 mb-4">
                <AccordionTrigger className="text-[1.05rem] font-semibold cursor-pointer">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[0.95rem] text-textSecondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
