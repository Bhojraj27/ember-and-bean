export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'The caramel cinnamon latte is the reason I now live within walking distance. This place feels like a secret I want to keep.',
    name: 'Aarav Mehta',
    role: 'Regular since 2019',
    initials: 'AM',
  },
  {
    id: 2,
    quote:
      'I come here to write and the Wi-Fi is as reliable as the coffee. It is warm, quiet and never rushed.',
    name: 'Sara D\u2019Souza',
    role: 'Freelance designer',
    initials: 'SD',
  },
  {
    id: 3,
    quote:
      'We booked a Saturday brunch for eight and the team made it feel effortless. The shakshuka sold itself.',
    name: 'Kunal Joshi',
    role: 'Weekend regular',
    initials: 'KJ',
  },
]
