import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: '1',
    question: 'Do I need prior programming experience to start?',
    answer: 'No prior experience is required for our beginner courses. We start from the very basics and gradually progress to advanced topics. Our curriculum is designed to accommodate complete beginners while also challenging experienced programmers.',
  },
  {
    id: '2',
    question: 'What programming languages do you teach?',
    answer: 'We primarily focus on C++ and Python for competitive programming as they are the most commonly used languages in competitions. However, we also provide guidance on Java and other languages based on student preferences and requirements.',
  },
  {
    id: '3',
    question: 'How much time should I dedicate weekly?',
    answer: 'We recommend dedicating 8-12 hours per week for optimal progress. This includes watching video lectures, solving practice problems, and participating in coding contests. However, you can learn at your own pace with our flexible schedule.',
  },
  {
    id: '4',
    question: 'Do you provide certificate upon completion?',
    answer: 'Yes, we provide certificates of completion for all paid courses. These certificates can be shared on LinkedIn and other professional platforms. For free courses, you can request a certificate for a small fee.',
  },
  {
    id: '5',
    question: 'What kind of support do you offer?',
    answer: 'We provide multiple support channels including dedicated Discord community, mentor support, code reviews, and regular doubt-clearing sessions. Our mentors are available to help you with technical challenges and career guidance.',
  },
  {
    id: '6',
    question: 'Can I get a refund if I am not satisfied?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all our paid courses. If you are not satisfied with the course content or teaching methodology, you can request a full refund within 30 days of enrollment.',
  },
];

export default function FAQ() {
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
