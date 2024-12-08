export interface Event {
  id: number
  title: string
  date: string
  image: string
  description: string
  location: string
  category: 'ongoing' | 'upcoming' | 'past'
}

