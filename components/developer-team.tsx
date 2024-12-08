'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'Arpan Saini',
    role: 'Full Stack Web Developer',
    clubRole: 'President',
    about: 'Enthusiastic about building robust and scalable web applications.',
    image: '/images/arpan2.jpg',
    social: {
      instagram: 'https://instagram.com/arpan_kumar_saini',
      linkedin: 'https://linkedin.com/in/arpansaini',
      github: 'https://github.com/arpan-kumar-saini',
    },
  },
  {
    name: 'Ritu Singh',
    role: 'UI/UX Designer',
    clubRole: 'Treasurer',
    about: 'Passionate about creating intuitive and beautiful user experiences.',
    image: '/images/ritu.jpg',
    social: {
      instagram: 'https://www.instagram.com/rapunzel_4002/',
      linkedin: 'https://www.linkedin.com/in/ritu-singh-a9a546295/',
      github: 'https://github.com/ritu-singh-4002',
    },
  },
];

export default function DeveloperTeam() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="min-h-[500px] p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-900">Our Developer Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-[25px] p-4 sm:p-6 items-center hover:shadow-xl transition-all"
            >
              {/* Left Side: Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {/* Right Side: Content */}
              <div className="ml-4 sm:ml-6 flex-1">
                <h3 className="text-lg font-semibold text-indigo-900">{member.name}</h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
                <p className="text-green-600 text-sm">{member.clubRole} of Cultural Club</p>
                <div
                  className={`mt-2 text-gray-600 text-sm transition-all duration-300 ${
                    expandedMember === index ? 'max-h-40' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p>{member.about}</p>
                </div>
                <button
                  className="mt-2 text-purple-600 hover:text-purple-800 text-sm flex items-center sm:hidden"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedMember === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div className="mt-4 flex space-x-3">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
