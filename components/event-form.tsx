import { useState } from 'react'
import { Event } from '@/types/event'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface EventFormProps {
  event?: Event
  onSubmit: (event: Event) => void
  onCancel: () => void
}

export function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
  const [formData, setFormData] = useState<Event>(
    event || {
      id: 0,
      title: '',
      date: '',
      image: '',
      description: '',
      location: '',
      category: 'upcoming'
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <Input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
        required
      />
      <Input
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Event Date"
        required
      />
      <Input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      />
      <Input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Event Location"
        required
      />
      <Select
        value={formData.category}
        onValueChange={(value: 'upcoming' | 'ongoing' | 'past') => 
          setFormData(prev => ({ ...prev, category: value }))}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ongoing">Ongoing</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
          <SelectItem value="past">Past</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {event ? 'Update Event' : 'Add Event'}
        </Button>
      </div>
    </form>
  )
}

