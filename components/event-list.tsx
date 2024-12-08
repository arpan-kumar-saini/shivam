import { useState } from 'react'
import { Event } from '@/types/event'
import { EventForm } from './event-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';

interface EventListProps {
  events: Event[]
  onUpdate: (event: Event) => void
  onDelete: (id: number) => void
}

export function EventList({ events, onUpdate, onDelete }: EventListProps) {
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map(event => (
        <Card key={event.id} className="backdrop-blur-md bg-white bg-opacity-40">
          {editingEvent?.id === event.id ? (
            <EventForm
              event={event}
              onSubmit={(updatedEvent) => {
                onUpdate(updatedEvent)
                setEditingEvent(null)
              }}
              onCancel={() => setEditingEvent(null)}
            />
          ) : (
            <>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <Image 
                  src={event.image} 
                  alt={event.title} 
                  className="rounded-md object-cover mb-2" 
                  width={500} 
                  height={160} 
                  layout="responsive" 
                />
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
                <p className="mt-2">{event.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setEditingEvent(event)}>Edit</Button>
                <Button variant="destructive" onClick={() => onDelete(event.id)}>Delete</Button>
              </CardFooter>
            </>
          )}
        </Card>
      ))}
    </div>
  )
}

