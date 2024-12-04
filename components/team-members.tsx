'use client'


import Image from 'next/image';
import teamMembersData from '@/data/team-members/teamMembers.json';

type TeamMember = {
  name: string
  rollNo: string
  branchYear: string
  responsibilities: string
  image: string
}

const teamMembers: TeamMember[] = teamMembersData;
// function 
export default function TeamMembers() {


  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {teamMembers.map((member) => (
            <div
              key={member.rollNo}
              className="relative group"
            >
              <div className="absolute inset-0  rounded-3xl transition-all duration-300 group-hover:blur-sm"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-3xl p-6 shadow-lg transition-all duration-300 group-hover:translate-y-[-10px] group-hover:shadow-xl border border-white border-opacity-20">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full p-1 shadow-lg transition-all duration-300 group-hover:scale-110">
                <Image
                    src={member.image}            // Source of the image
                    alt={member.name}              // Alt text for accessibility
                    layout="fill"                  // Fills the container fully
                    objectFit="cover"              // Ensures image covers container without distortion
                    className="rounded-full"       // Applies rounded styling
                  />
                </div>
                <div className="pt-14 text-center">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.branchYear}</p>
                  <p className="text-sm font-medium text-blue-600 mb-2">{member.responsibilities}</p>
                  <p className="text-xs text-gray-500">{member.rollNo}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}