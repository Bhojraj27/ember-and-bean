import { imageUrl } from '../lib/images'

export interface GalleryItem {
  id: number
  src: string
  alt: string
  caption: string
  category: string
  tall?: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: imageUrl('photo-1510591509098-f4fdc6d0ff04'),
    alt: 'A double espresso being pulled',
    caption: 'The daily pull',
    category: 'Coffee',
    tall: true,
  },
  {
    id: 2,
    src: imageUrl('photo-1461023058943-07fcbe16d735'),
    alt: 'Latte art in a ceramic cup',
    caption: 'Latte art, every cup',
    category: 'Coffee',
  },
  {
    id: 3,
    src: imageUrl('photo-1554118811-1e0d58224f24'),
    alt: 'Warm interior of the Ember & Bean café',
    caption: 'Our corner on Riverside',
    category: 'Interior',
    tall: true,
  },
  {
    id: 4,
    src: imageUrl('photo-1509440159596-0249088772ff'),
    alt: 'Fresh baked pastries and bread',
    caption: 'Baked every morning',
    category: 'Bakery',
  },
  {
    id: 5,
    src: imageUrl('photo-1442512595331-e89e73853f31'),
    alt: 'Barista pouring milk into coffee',
    caption: 'Hands at work',
    category: 'Barista',
    tall: true,
  },
  {
    id: 6,
    src: imageUrl('photo-1447933601403-0c6688de566e'),
    alt: 'Roasted coffee beans',
    caption: 'Small-batch beans',
    category: 'Coffee',
  },
  {
    id: 7,
    src: imageUrl('photo-1501339847302-ac426a4a7cbb'),
    alt: 'Person enjoying coffee with a notebook',
    caption: 'Slow mornings',
    category: 'Moments',
  },
  {
    id: 8,
    src: imageUrl('photo-1555396273-367ea4eb4db5'),
    alt: 'Café exterior at dusk',
    caption: '24 Riverside Avenue',
    category: 'Exterior',
    tall: true,
  },
  {
    id: 9,
    src: imageUrl('photo-1525351484163-7529414344d8'),
    alt: 'A brunch spread on a table',
    caption: 'Brunch for two',
    category: 'Breakfast',
  },
  {
    id: 10,
    src: imageUrl('photo-1445116572660-236099ec97a0'),
    alt: 'Evening ambience with warm string lights',
    caption: 'Evenings here',
    category: 'Evening',
    tall: true,
  },
  {
    id: 11,
    src: imageUrl('photo-1497935586351-b67a49e012bf'),
    alt: 'Espresso with roasted beans',
    caption: 'Essentials',
    category: 'Coffee',
  },
  {
    id: 12,
    src: imageUrl('photo-1495474472287-4d71bcdd2085'),
    alt: 'A cup of coffee with cinnamon',
    caption: 'Today\u2019s special',
    category: 'Coffee',
  },
]
