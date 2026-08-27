import Reveal from '../Reveal'
import Button from '../Button'
import { productStudio } from '../../lib/assets'

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={productStudio}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120a07]/92 via-[#120a07]/78 to-[#120a07]/50" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-caramel">
              Come find us
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-warmwhite text-balance sm:text-5xl md:text-6xl">
              Your next favorite coffee is waiting.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-warmwhite/78 sm:text-lg">
              Riverside Avenue, 8 AM to late. We’ll keep the kettle warm.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
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
