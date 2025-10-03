const testimonials = [
  {
    id: '1',
    authorName: 'Md Nazmul Hossain',
    authorInfo: 'NCPC Regionalist, IU (CSE)',
    authorAvatar: '',
    testimonialText: 'CPS Academy transformed my coding skills completely. The structured curriculum and expert mentorship helped me crack interviews at top tech companies. Highly recommended!'
  },
  {
    id: '2',
    authorName: 'Sujan Roy',
    authorInfo: 'NCPC Regionalist, IU (CSE)',
    authorAvatar: '',
    testimonialText: 'The live coding sessions and practice problems are incredibly valuable. I went from struggling with basic algorithms to competing in international contests within 6 months.'
  },
  {
    id: '3',
    authorName: 'Rabbani Islam Refat',
    authorInfo: 'ICPC Asia West Finalist, AppsCode, IU (CSE)',
    authorAvatar: '',
    testimonialText: 'Best investment in my career! The mentors are supportive, the community is amazing, and the learning resources are top-notch. Got placed at Microsoft thanks to CPS Academy.'
  }
];

export default function Testimonials() {
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
                <div className="size-13 rounded-full bg-accent-light flex items-center justify-center">RS</div>
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
