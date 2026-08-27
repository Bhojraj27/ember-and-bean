import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 lg:py-36" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Word of Mouth"
          title="Loved by regulars."
          subtitle="The same faces, day after day. That’s the review we care about most."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 110}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-ink/5 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-espresso/10">
                <Quote className="size-8 text-caramel/60" aria-hidden="true" />
                <div className="mt-4 flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="size-4 fill-caramel text-caramel" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-espresso font-serif text-sm text-caramel">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-espresso">{testimonial.name}</span>
                    <span className="block text-xs text-muted">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
