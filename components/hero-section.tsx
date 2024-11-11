'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const activities = [
  { name: 'Singing', color: 'from-pink-400 to-red-400' },
  { name: 'Dancing', color: 'from-purple-400 to-indigo-400' },
  { name: 'Drama', color: 'from-yellow-400 to-orange-400' },
  { name: 'Poetry', color: 'from-green-400 to-emerald-400' },
  { name: 'StandUp', color: 'from-pink-400 to-red-400' },
  { name: 'Art', color: 'from-blue-400 to-cyan-400' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative md:min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 bg-[url('/images/arpan.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0  backdrop-blur-sm " />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      <div className="container mx-auto px-4 z-10  py-12 md:py-0 ">
        <motion.div
          style={{ y, opacity }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center"
          >
            <div className="flex-1 pr-8 text-center md:text-left ">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                 Cultural Club
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white mb-8 md:hidden"
              >
                Rajkiya Engineering College Bijnor
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white mb-8 hidden md:block"
              >
                Rajkiya Engineering College ,Bijnor
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/40 backdrop-blur-lg rounded-xl p-6 shadow-inner mb-8 hidden md:block "
              >
                <p className="text-lg text-indigo-900 mb-6">
                  Join us in a vibrant community where students come together to explore their interests and talents. The Cultural Club is your perfect platform to shine!
                </p>
                <p className="text-lg text-indigo-900 mb-6">Discover Your Passion, Showcase Your Talent</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {activities.map((activity) => (
                    <motion.div
                      key={activity.name}
                      className="relative"
                      onMouseEnter={() => setHoveredBadge(activity.name)}
                      onMouseLeave={() => setHoveredBadge(null)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold text-white cursor-pointer bg-gradient-to-r ${activity.color}`}
                      >
                        {activity.name}
                      </motion.div>
                      <AnimatePresence>
                        {hoveredBadge === activity.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white rounded-lg shadow-lg text-xs text-indigo-900"
                          >
                            Explore {activity.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="md:flex justify-center md:justify-start space-x-4 hidden  ">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-md text-indigo-900 rounded-full text-lg font-semibold border border-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  About Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-md text-indigo-900 rounded-full text-lg font-semibold border border-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  Go to Gallery
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-md text-indigo-900 rounded-full text-lg font-semibold border border-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  Meet The Team
                </motion.button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-0 relative w-64 h-64 md:w-80 md:h-80  rounded-full overflow-hidden shadow-xl"
            >
              <Image
                src="/images/logo.png"
                alt="Cultural activities"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 via-blue-300/30 to-purple-300/30  rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Sparkles className="absolute top-10 left-10 text-yellow-400 opacity-50" size={24} />
      <Sparkles className="absolute bottom-10 right-10 text-pink-400 opacity-50" size={24} />
    </section>
  )
}