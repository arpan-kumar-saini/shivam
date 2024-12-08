'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventList } from './event-list'
import { EventForm } from './event-form'
import { Event } from '@/types/event'

export default function EventManager() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Art Exhibition",
      date: "2024-02-10 to 2024-02-20",
      image: "/images/arpan.jpg",
      description: "Explore the creative works of our talented student artists.",
      location: "Art Gallery",
      category: "ongoing"
    },
    {
      id: 2,
      title: "Poetry Slam Competition",
      date: "2024-02-28",
      image: "/images/arpan.jpg",
      description: "Express yourself through the power of words in our annual poetry slam.",
      location: "Literary Club Hall",
      category: "upcoming"
    },
    {
      id: 3,
      title: "Dance Workshop",
      date: "2023-12-05",
      image: "/images/arpan.jpg",
      description: "Check out the highlights from our intensive dance workshop.",
      location: "Dance Studio",
      category: "past"
    }
  ])

  const [isAddingEvent, setIsAddingEvent] = useState(false)

  const addEvent = (newEvent: Event) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }])
    setIsAddingEvent(false)
  }

  const updateEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event))
  }

  const deleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id))
  }

  return (
    <div className="p-6 m-8 md:m-24 rounded-lg bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 backdrop-blur-lg bg-opacity-80 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Event Manager</h2>
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
          <EventList 
            events={events.filter(e => e.category === 'ongoing')} 
            onUpdate={updateEvent}
            onDelete={deleteEvent}
          />
        </TabsContent>
        <TabsContent value="upcoming">
          <EventList 
            events={events.filter(e => e.category === 'upcoming')} 
            onUpdate={updateEvent}
            onDelete={deleteEvent}
          />
        </TabsContent>
        <TabsContent value="past">
          <EventList 
            events={events.filter(e => e.category === 'past')} 
            onUpdate={updateEvent}
            onDelete={deleteEvent}
          />
        </TabsContent>
      </Tabs>
      {isAddingEvent ? (
        <EventForm onSubmit={addEvent} onCancel={() => setIsAddingEvent(false)} />
      ) : (
        <Button onClick={() => setIsAddingEvent(true)} className="mt-4">
          <Plus className="mr-2 h-4 w-4" /> Add New Event
        </Button>
      )}
    </div>
  )
}

