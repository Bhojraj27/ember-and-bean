export const site = {
  name: 'Ember & Bean',
  tagline: 'Slow mornings. Good coffee. Better moments.',
  shortTagline: 'Artisan Coffee House',
  established: 'EST. 2018',
  address: {
    line1: '24 Riverside Avenue',
    line2: 'Pune, Maharashtra 411001',
  },
  phone: '+91 98765 43210',
  email: 'hello@emberandbean.in',
  hours: {
    weekdays: '8:00 AM to 10:00 PM',
    weekend: '8:00 AM to 11:30 PM',
  },
  rating: '4.9',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  ],
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const
