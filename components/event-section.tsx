'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight, Info } from 'lucide-react'

type Event = {
  id: number
  title: string
  date: string
  image: string
  description: string
  location: string
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Annual Cultural Fest",
    date: "2024-03-15",
    image: "/images/arpan.jpg",
    description: "Join us for a spectacular showcase of talent across various art forms.",
    location: "Main Auditorium"
  },
  {
    id: 2,
    title: "Poetry Slam Competition",
    date: "2024-02-28",
    image: "/images/arpan.jpg",
    description: "Express yourself through the power of words in our annual poetry slam.",
    location: "Literary Club Hall"
  }
]

const ongoingEvents: Event[] = [
  {
    id: 3,
    title: "Art Exhibition",
    date: "2024-02-10 to 2024-02-20",
    image: "/images/arpan.jpg",
    description: "Explore the creative works of our talented student artists.",
    location: "Art Gallery"
  }
]

const pastEvents: Event[] = [
  {
    id: 4,
    title: "Music Concert",
    date: "2024-01-15",
    image: "/images/arpan.jpg",
    description: "Relive the magical moments from our winter music concert.",
    location: "Open Air Theatre"
  },
  {
    id: 5,
    title: "Dance Workshop",
    date: "2023-12-05",
    image: "/images/arpan.jpg",
    description: "Check out the highlights from our intensive dance workshop.",
    location: "Dance Studio"
  }
]

export default function EventSectionComponent() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming')
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const tabVariants = {
    inactive: { opacity: 0.6, y: 0 },
    active: { opacity: 1, y: -5 }
  }

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const renderEventCard = (event: Event, index: number, type: 'upcoming' | 'ongoing' | 'past') => (
    <motion.div
      key={event.id}
      variants={eventVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setHoveredEvent(event.id)}
      onMouseLeave={() => setHoveredEvent(null)}
    >
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 rounded-full text-white font-semibold flex items-center justify-center ${
            type === 'upcoming' ? 'bg-blue-500 hover:bg-blue-600' :
            type === 'ongoing' ? 'bg-blue-500 hover:bg-blue-600' :
            'bg-indigo-500 hover:bg-indigo-600'
          }`}
        >
          {type === 'upcoming' ? 'Register Now' :
           type === 'ongoing' ? 'Join Now' :
           'See Gallery'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.button>
      </div>
      <AnimatePresence>
        {hoveredEvent === event.id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="mb-4">{event.description}</p>
              <div className="flex items-center justify-center text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center justify-center text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-white font-semibold flex items-center justify-center mx-auto ${
                  type === 'upcoming' ? 'bg-green-500 hover:bg-green-600' :
                  type === 'ongoing' ? 'bg-blue-500 hover:bg-blue-600' :
                  'bg-indigo-500 hover:bg-indigo-600'
                }`}
              >
                {type === 'upcoming' ? 'Register Now' :
                 type === 'ongoing' ? 'Join Now' :
                 'See Gallery'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <section ref={sectionRef} className="py-16 min-h-screen">
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center  text-indigo-900 mb-12">Our Events</h2>
        <div className="flex justify-center mb-8 space-x-4 mx-2">
          {(['upcoming', 'ongoing', 'past'] as const).map((tab) => (
            <motion.button
              key={tab}
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-lg font-semibold  transition-colors duration-300 ${
                activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-white/50 text-indigo-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'upcoming' && upcomingEvents.map((event, index) => renderEventCard(event, index, 'upcoming'))}
          {activeTab === 'ongoing' && ongoingEvents.map((event, index) => renderEventCard(event, index, 'ongoing'))}
          {activeTab === 'past' && pastEvents.map((event, index) => renderEventCard(event, index, 'past'))}
        </div>
      </motion.div>
    </section>
  )
}