import { Testimonial } from "@/types/landing-page";
import Image from "next/image";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-bgPrimary py-16">
      <div className="custom-container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Real success stories from our community of learners.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-bgSecondary p-8 rounded-xl border-2 border-borderColor hover:border-primary hover:shadow-[0_4px_16px_rgba(2,132,199,0.15)] custom-transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-full bg-accent-light flex items-center justify-center">
                  <Image src={testimonial.avatar?.src} alt={testimonial.avatar?.alt} width={100} height={100} className="rounded-full" />
                </div>
                <div className="author-info">
                  <h4 className="text-textPrimary font-bold">{testimonial.authorName}</h4>
                  <p className="text-textTertiary text-[0.9rem]">{testimonial.authorInfo}</p>
                </div>
              </div>
              <p className="text-textSecondary italic leading-[1.7]">"{testimonial.testimonialText}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
