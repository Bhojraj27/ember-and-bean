import { imageUrl } from '../lib/images'
import GalleryGrid from '../components/GalleryGrid'
import FooterCta from '../components/sections/FooterCta'
import PageHero from '../components/PageHero'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Gallery() {
  usePageMeta('Gallery | Ember & Bean', 'A visual tour of Ember & Bean: espresso, latte art, interiors and the people who make this place feel like home.')
  return (
    <>
      <PageHero
        eyebrow="The Gallery"
        title="Moments worth a second cup."
        subtitle="Espresso, latte art, interiors and the people who make this place feel like home."
        image={imageUrl('photo-1497935586351-b67a49e012bf', 1600)}
      />

      <section className="bg-warmwhite py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-10 text-sm text-muted">Tap any image to view it full-screen.</p>
          <GalleryGrid />
        </div>
      </section>

      <FooterCta />
    </>
  )
}
