import { imageUrl } from '../../lib/images'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

const experiences = [
  {
    title: 'Work',
    description: 'Quiet corners, warm light and Wi-Fi that never lets you down.',
    image: imageUrl('photo-1522202176988-66273c2fd55f', 900),
    alt: 'Guest working on a laptop in a cozy café corner',
  },
  {
    title: 'Gather',
    description: 'A comfortable space for conversations that run past the first coffee.',
    image: imageUrl('photo-1529156069898-49953e39b3ac', 900),
    alt: 'Friends laughing together at a café table',
  },
  {
    title: 'Unwind',
    description: 'Slow evenings, warm lights and a playlist made for staying a little longer.',
    image: imageUrl('photo-1445116572660-236099ec97a0', 900),
    alt: 'Café interior glowing with warm evening string lights',
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-24 lg:py-36" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Ember Experience"
          title="More than coffee."
          subtitle="Three reasons people find it hard to leave, and why we wouldn’t want them to."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <article className="group relative overflow-hidden rounded-[1.75rem] shadow-lg shadow-espresso/10">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                <div className="glass-dark absolute inset-x-4 bottom-4 rounded-2xl p-5">
                  <h3 className="font-serif text-2xl font-semibold text-warmwhite">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-warmwhite/80">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
