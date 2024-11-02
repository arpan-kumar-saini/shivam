'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Sparkles, Music, Palette, Users, Award } from 'lucide-react'

export default function VisionMissionSectionComponent() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const tabVariants = {
    inactive: { opacity: 0.6, y: 0 },
    active: { opacity: 1, y: -5 }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const missionItems = [
    { icon: Music, text: "Organizing diverse cultural events and workshops" },
    { icon: Palette, text: "Encouraging collaboration across different art forms" },
    { icon: Users, text: "Promoting cultural exchange and understanding" },
    { icon: Award, text: "Developing leadership skills through the arts" }
  ]

  return (
    <section ref={sectionRef} className="py-16  min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-4xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8"
          >
            Our Purpose
          </motion.h2>
          <div className="flex justify-center mb-8">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'vision' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-2 rounded-full text-lg font-semibold mr-4 transition-colors duration-300 ${
                activeTab === 'vision' ? 'bg-indigo-600 text-white' : 'bg-white/50 text-indigo-900'
              }`}
            >
              Vision
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'mission' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeTab === 'mission' ? 'bg-indigo-600 text-white' : 'bg-white/50 text-indigo-900'
              }`}
            >
              Mission
            </motion.button>
          </div>
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-inner"
          >
            {activeTab === 'vision' ? (
              <div className="space-y-4">
                <motion.p 
                  className="text-lg text-indigo-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our vision is to create a vibrant and inclusive cultural ecosystem at REC Bijnor where every student can discover, nurture, and showcase their artistic talents.
                </motion.p>
                <motion.p 
                  className="text-lg text-indigo-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We envision a campus community where creativity flourishes, diversity is celebrated, and the arts play a central role in enriching the college experience.
                </motion.p>
              </div>
            ) : (
              <div className="space-y-4">
                <motion.p 
                  className="text-lg text-indigo-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our mission is to provide a platform for students to explore various forms of art and culture, fostering personal growth and creative expression.
                </motion.p>
                <motion.p 
                  className="text-lg text-indigo-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We are committed to:
                </motion.p>
                <ul className="space-y-3">
                  {missionItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="bg-indigo-100 p-2 rounded-full"
                      >
                        <item.icon className="w-6 h-6 text-indigo-600" />
                      </motion.div>
                      <span className="text-lg text-indigo-900">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      <Sparkles className="absolute top-10 left-10 text-yellow-400 opacity-50" size={24} />
      <Sparkles className="absolute bottom-10 right-10 text-pink-400 opacity-50" size={24} />
    </section>
  )
}