'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import eventsData from '@/data/gallery/gallery.json';

// Define the structure of our event data
interface Event {
  id: number
  title: string
  image: string
  category: string
}

// Sample event data (replace with your actual event data)
const events: Event[] = eventsData;

const categories = ['All', 'Fresher Party', 'Induction Program', 'Spandan 2022', 'Academic Events']

export default function EventGallery() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory)

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800"> Event's Gallery</h2>
      
      <Tabs defaultValue="All" className="w-full mb-8 ">
        <TabsList className="w-full flex flex-wrap justify-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 rounded-md text-indigo-800 hover:bg-purple-100 hover:bg-opacity-50 transition-colors"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4 mt-24"
        columnClassName="pl-4 bg-clip-padding"
      >
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            className="mb-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg backdrop-blur-sm bg-white bg-opacity-20 border border-opacity-20 border-white">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm">{event.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-lg mb-2">{selectedEvent.category}</p>                
              </div>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

