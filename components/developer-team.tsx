'use client'

import { useState } from 'react'
import Image from 'next/image';

import { Github, Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

const teamMembers = [
  {
    name: 'Arpan Saini',
    role: 'Full Stack Web Developer',
    clubRole: 'President',
    about: 'Enthusiastic about building robust and scalable web applications.',
    image: '/images/arpan.jpg',
    social: {
      instagram: 'https://instagram.com/arpan_kumar_saini',
      linkedin: 'https://linkedin.com/in/arpansaini',
      github: 'https://github.com/arpan-kumar-saini'
    }
  },
  {
    name: 'Ritu Singh',
    role: 'UI/UX Designer',
    clubRole: 'Treasurer',
    about: 'Passionate about creating intuitive and beautiful user experiences.',
    image: '/images/ritu.jpg',
    social: {
      instagram: 'https://instagram.com/ritusingh',
      linkedin: 'https://linkedin.com/in/ritusingh',
      github: 'https://github.com/ritusingh'
    }
  }
  
]

export default function DeveloperTeam() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index)
  }

  return (
    <div className="min-h-[500px] md:min-h-screen  p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12  text-indigo-900">Our Developer Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-12 mt-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"

            >
              <div className="absolute inset-0 bg-white rounded-3xl transition-all duration-300 group-hover:blur-sm"></div>
              <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 group-hover:translate-y-[-10px] group-hover:shadow-xl border border-white border-opacity-20">
                <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-full p-1 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"       // Makes the image fill the container
                      objectFit="cover"   // Ensures the image covers the container without distortion
                      className="rounded-full"
                    />
                </div>
                <div className="mt-20 sm:mt-24 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold  text-indigo-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-green-600 font-medium">{member.clubRole} of Cultural Club</p>
                  <div className={`mt-4 text-gray-600 transition-all duration-300 ${expandedMember === index ? 'max-h-40' : 'max-h-0 sm:max-h-none'} overflow-hidden`}>
                    <p>{member.about}</p>
                  </div>
                  <button
                    className="mt-2 text-purple-600 hover:text-purple-800 transition-colors sm:hidden"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedMember === index ? (
                      <ChevronUp className="inline-block w-5 h-5" />
                    ) : (
                      <ChevronDown className="inline-block w-5 h-5" />
                    )}
                  </button>
                  <div className="mt-6 flex justify-center space-x-4">
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors transform hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors transform hover:scale-110">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}