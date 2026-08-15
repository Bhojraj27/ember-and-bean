export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'

export function imageUrl(id: string, width = 800): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}
