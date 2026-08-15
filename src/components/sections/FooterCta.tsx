import { imageUrl } from '../../lib/images'
import Reveal from '../Reveal'
import Button from '../Button'

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={imageUrl('photo-1447933601403-0c6688de566e', 1600)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/80 to-espresso/60" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <div className="glass-dark max-w-2xl rounded-[2rem] p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-caramel">
              {'\u2605'} Come find us
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-warmwhite text-balance sm:text-4xl md:text-5xl">
              Your next favorite coffee is waiting.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-warmwhite/75">
              Riverside Avenue, 8 AM to late. We’ll keep the kettle warm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/reservations" arrow>
                Reserve a Table
              </Button>
              <Button to="/menu" variant="light" arrow>
                Explore Menu
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
