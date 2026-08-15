import { Coffee, HandHeart, Hourglass, Sprout } from 'lucide-react'
import { imageUrl } from '../lib/images'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import FooterCta from '../components/sections/FooterCta'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  {
    icon: Hourglass,
    title: 'Slow is the point',
    description: 'Every drink is made to be lingered over. That is the entire business model.',
  },
  {
    icon: Coffee,
    title: 'Small batches',
    description: 'We roast weekly and bake daily so nothing sits. Fresh is non-negotiable.',
  },
  {
    icon: Sprout,
    title: 'Local first',
    description: 'Milk from Aarey, produce from the Pune market, beans from growers we know by name.',
  },
  {
    icon: HandHeart,
    title: 'Room for everyone',
    description: 'Solo writers, loud friends, first dates and big families all share the same warmth.',
  },
]

const timeline = [
  {
    year: '2018',
    title: 'Two machines and a window',
    text: 'We opened a small roastery on Riverside Avenue with a single promise: never rush a cup.',
  },
  {
    year: '2020',
    title: 'The pause people needed',
    text: 'When the world got loud, our little café became a place people came to breathe.',
  },
  {
    year: '2023',
    title: 'The bakery joins in',
    text: 'We started baking our own breads and pastries at dawn, and the counter got a lot friendlier.',
  },
  {
    year: '2026',
    title: 'Still small, still slow',
    text: 'Eight years on, the beans are roasted the same way and the chairs are still warm.',
  },
]

export default function About() {
  usePageMeta(
    'Our Story | Ember & Bean',
    'Ember & Bean started with a simple idea: coffee should give people a reason to pause. Read our story.',
  )
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Born from a love of slow mornings."
        subtitle="Ember & Bean started with a simple idea: coffee should give people a reason to pause."
        image={imageUrl('photo-1554118811-1e0d58224f24', 1600)}
      />

      <AboutSection reversed className="pt-20" />

      <section className="bg-cream py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we believe"
            title="A few rules we never break."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="h-full rounded-2xl border border-ink/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-espresso text-caramel">
                    <value.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-espresso">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-28" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="The Journey"
                title="Eight years, same kettle."
                subtitle="A short history of the café, from a single window to the room you’re sitting in."
              />
            </div>
            <ol className="relative space-y-10 border-l border-ink/10 pl-8">
              {timeline.map((entry, index) => (
                <Reveal key={entry.year} delay={index * 100} as="li">
                  <div className="relative">
                    <span
                      className="absolute -left-[2.35rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-caramel bg-warmwhite"
                      aria-hidden="true"
                    >
                      <span className="size-1.5 rounded-full bg-caramel" />
                    </span>
                    <p className="font-serif text-lg font-semibold text-caramel-dark">{entry.year}</p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-espresso">{entry.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{entry.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <FooterCta />
    </>
  )
}
