'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Play, Pause, X, Loader2 } from 'lucide-react'

type MediaItem = {
  id: number
  type: 'image' | 'video' | 'gif'
  src: string
  alt: string
  category: string
}

const mediaItems: MediaItem[] = [
  { id: 1, type: 'image', src: '/images/arpan.jpg', alt: 'Cultural Dance Performance', category: 'Dance' },
  { id: 2, type: 'video', src: 'https://example.com/cultural-music.mp4', alt: 'Traditional Music Concert', category: 'Music' },
  { id: 3, type: 'gif', src: '/placeholder.svg?height=400&width=400', alt: 'Art Workshop Timelapse', category: 'Art' },
  { id: 4, type: 'image', src: '/images/arpan.jpg', alt: 'Cultural Costume Exhibition', category: 'Exhibition' },
  { id: 5, type: 'image', src: '/images/arpan.jpg', alt: 'Food Festival Highlights', category: 'Food' },
  { id: 6, type: 'video', src: 'https://example.com/theater-performance.mp4', alt: 'Theater Performance Clip', category: 'Theater' },
  { id: 7, type: 'gif', src: '/placeholder.svg?height=400&width=400', alt: 'Poetry Slam Reactions', category: 'Literature' },
  { id: 8, type: 'image', src: '/images/arpan.jpg', alt: 'Cultural Quiz Night', category: 'Events' },
]

const categories = ['All', ...Array.from(new Set(mediaItems.map(item => item.category)))]

export default function EnhancedGalleryComponent() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const filteredItems = filter === 'All' ? mediaItems : mediaItems.filter(item => item.category === filter)

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item)
    setIsPlaying(item.type === 'video')
    setIsLoading(true)
  }

  const handleClose = () => {
    setSelectedItem(null)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTabChange = (category: string) => {
    setFilter(category)
    controls.start('hidden').then(() => controls.start('visible'))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Cultural Tapestry</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-gray-700 hover:bg-opacity-30'
              }`}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group
                  ${index % 3 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
                  ${index % 5 === 0 ? 'lg:col-span-2' : ''}
                `}
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  {item.type === 'image' && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  {item.type === 'video' && (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                    />
                  )}
                  {item.type === 'gif' && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold text-center px-4">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-4 max-w-4xl w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="aspect-w-16 aspect-h-9 relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                )}
                {selectedItem.type === 'image' && (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    layout="fill"
                    objectFit="contain"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                )}
                {selectedItem.type === 'video' && (
                  <>
                    <video
                      ref={videoRef}
                      src={selectedItem.src}
                      className="w-full h-full object-contain"
                      controls={false}
                      autoPlay={isPlaying}
                      onLoadedData={() => setIsLoading(false)}
                    />
                    <button
                      onClick={togglePlay}
                      className="absolute bottom-4 left-4 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                  </>
                )}
                {selectedItem.type === 'gif' && (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    layout="fill"
                    objectFit="contain"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                )}
              </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{selectedItem.alt}</h3>
                <p className="text-sm opacity-75">Category: {selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}