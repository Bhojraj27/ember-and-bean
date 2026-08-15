import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { galleryItems, type GalleryItem } from '../data/gallery'
import Lightbox from './Lightbox'

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setActiveIndex(index)

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4">
        {galleryItems.map((item: GalleryItem, index) => (
          <figure key={item.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`View image: ${item.caption}`}
              className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={
                  item.tall
                    ? 'aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    : 'aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-caramel">{item.category}</p>
                <p className="mt-1 font-serif text-lg text-warmwhite">{item.caption}</p>
              </div>
              <span className="absolute right-4 top-4 flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/15 text-warmwhite opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="size-4" aria-hidden="true" />
              </span>
            </button>
          </figure>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  )
}
