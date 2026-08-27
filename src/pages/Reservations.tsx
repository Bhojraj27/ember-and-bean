import { Clock, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import ReservationForm from '../components/ReservationForm'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Reservations() {
  usePageMeta('Reserve a Table | Ember & Bean', 'Book your table at Ember & Bean. Walk-ins welcome, reservations recommended for weekends.')
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Save your seat."
        subtitle="Tell us when and we’ll have the table waiting. Warm coffee, warmer welcome."
      />

      <section className="bg-warmwhite pb-20 pt-14 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <Reveal>
              <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-sm sm:p-9">
                <h2 className="font-serif text-2xl font-semibold text-espresso sm:text-3xl">
                  Book your table
                </h2>
                <p className="mt-2 text-sm text-muted">
                  We hold tables for 15 minutes past your slot. For parties of 8+, call us directly.
                </p>
                <div className="mt-8">
                  <ReservationForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <aside className="flex h-full flex-col gap-6">
                <div className="glass-dark rounded-3xl bg-espresso p-8 text-warmwhite">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-caramel">
                    Opening Hours
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <Clock className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                      <span>
                        Monday to Friday
                        <br />
                        <span className="text-warmwhite/70">{site.hours.weekdays}</span>
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                      <span>
                        Saturday to Sunday
                        <br />
                        <span className="text-warmwhite/70">{site.hours.weekend}</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-caramel-dark">
                    Find Us
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-caramel" aria-hidden="true" />
                      <span>
                        {site.address.line1}
                        <br />
                        {site.address.line2}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                      <a
                        href={`tel:${site.phone.replace(/\s/g, '')}`}
                        className="transition-colors hover:text-caramel-dark"
                      >
                        {site.phone}
                      </a>
                    </li>
                  </ul>
                  <a
                    href="https://maps.google.com/?q=Pune%20Maharashtra"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
