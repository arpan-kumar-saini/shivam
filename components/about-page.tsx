'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGlobeAmericas, FaRoute, FaHandsHelping, FaUsers } from 'react-icons/fa'

const Section = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      {children}
    </motion.section>
  )
}

const Tilt = ({ children }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-300, 300], [30, -30])
  const rotateY = useTransform(x, [-300, 300], [-30, 30])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <div style={{ transform: "translateZ(75px)" }}>{children}</div>
    </motion.div>
  )
}

export default function AboutPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="w-full h-64 bg-purple-200 relative overflow-hidden rounded-3xl mb-16"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/images/arpan.jpg" 
            alt="Cultural Club Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <motion.h1 
              className="text-5xl font-bold text-white text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Cultural Club
            </motion.h1>
          </div>
        </motion.div>

        <Section delay={0.2}>
          <Tilt>
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
              <FaGlobeAmericas className="text-5xl text-purple-600 mb-4" />
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
              <p className="text-lg text-gray-600">
                The Cultural Club is a vibrant community celebrating global diversity. Since 2010, we've been uniting people through art, music, food, and traditions, creating a tapestry of shared experiences and mutual understanding. Our mission is to foster cultural exchange and promote inclusivity in our increasingly interconnected world.
              </p>
            </div>
          </Tilt>
        </Section>

        <Section delay={0.4}>
          <Tilt>
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
              <FaRoute className="text-5xl text-green-600 mb-4" />
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to a thriving cultural hub, our journey has been one of growth, learning, and connection. We've hosted countless events, workshops, and festivals, each one adding a unique thread to our collective story. Through the years, we've seen friendships form across cultural boundaries and witnessed the power of shared experiences in breaking down stereotypes.
              </p>
            </div>
          </Tilt>
        </Section>

        <Section delay={0.6}>
          <Tilt>
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
              <FaHandsHelping className="text-5xl text-blue-600 mb-4" />
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                <li>Host monthly cultural festivals showcasing different traditions</li>
                <li>Organize language exchange programs for linguistic diversity</li>
                <li>Conduct workshops on traditional arts, crafts, and cuisines</li>
                <li>Arrange cultural film screenings and panel discussions</li>
                <li>Collaborate with local communities for cultural awareness initiatives</li>
              </ul>
            </div>
          </Tilt>
        </Section>

        <Section delay={0.8}>
          <Tilt>
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
              <FaUsers className="text-5xl text-red-600 mb-4" />
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
              <p className="text-lg text-gray-600 mb-4">
                Become part of our diverse family! Whether you're a culture enthusiast or simply curious, there's a place for you here. Participate in our events, share your heritage, and help us build bridges across cultures.
              </p>
              <motion.button
                className="w-full p-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </div>
          </Tilt>
        </Section>
      </div>
    </div>
  )
}