import { Star } from 'lucide-react'
import { imageUrl } from '../../lib/images'
import { cn } from '../../lib/cn'
import Button from '../Button'
import Reveal from '../Reveal'
import CountUp from '../CountUp'

interface AboutSectionProps {
  reversed?: boolean
  className?: string
}

const stats = [
  { value: 8, suffix: '+', label: 'Years Brewing' },
  { value: 25, suffix: 'K+', label: 'Happy Guests' },
  { value: 18, suffix: '', label: 'Signature Drinks' },
]

export default function AboutSection({ reversed = false, className }: AboutSectionProps) {
  return (
    <section className={cn('py-24 lg:py-36', className)} aria-labelledby="about-story-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={cn(
            'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
            reversed && 'lg:grid-cols-[1fr_1.05fr]',
          )}
        >
          <Reveal className={cn(reversed && 'lg:order-2')}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-cream" aria-hidden="true" />
              <img
                src={imageUrl('photo-1554118811-1e0d58224f24', 900)}
                alt="The warm interior of Ember & Bean café"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-espresso/15 sm:aspect-[5/6]"
              />
              <div className="glass-dark absolute -bottom-5 left-5 right-5 rounded-2xl p-5 sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-caramel">
                  <Star className="size-3.5 fill-caramel text-caramel" aria-hidden="true" />
                  4.9 · Loved by our guests
                </p>
                <p className="mt-1.5 font-serif text-base italic text-warmwhite">
                  “The kind of place that makes you slow down on purpose.”
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className={cn(reversed && 'lg:order-1')}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-caramel-dark">Our Story</p>
            <h2
              id="about-story-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-espresso text-balance sm:text-4xl md:text-[2.75rem]"
            >
              Born from a love of slow mornings.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Ember & Bean started with a simple idea: coffee should give people a reason to pause.
              In 2018, we opened a small roastery on Riverside Avenue with two machines, one window
              and a stubborn belief that good coffee is a ritual, not a rush.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Today we roast in small batches every week, bake from scratch each morning, and keep
              the same menu philosophy: fewer things, made properly.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-ink/10 py-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-last mt-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-3xl font-semibold text-espresso sm:text-4xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <Button to="/about" variant="primary" arrow>
                Meet Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
