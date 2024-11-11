'use client'


import Image from 'next/image';

type TeamMember = {
  name: string
  rollNo: string
  branchYear: string
  responsibilities: string
  image: string
}

const  teamMembers: TeamMember[] = [
  { name: "Dr. Archana Sharma", rollNo: "Head Of Department", branchYear: "Electrical Department", responsibilities: "Convener", image: "/images/arpan.jpg" },
  { name: "Arpan", rollNo: "2107350130019", branchYear: "IT (4th yr)", responsibilities: "President", image: "/images/arpan2.jpg" },
  { name: "Sumanshi Roy", rollNo: "2107350130061", branchYear: "IT (4th yr)", responsibilities: "Vice-President", image: "/images/sumanshi.jpg" },
  { name: "Ritu Singh", rollNo: "2107350130050", branchYear: "IT (4th yr)", responsibilities: "Treasurer", image: "/images/ritu.jpg" },
  { name: "Mahesh", rollNo: "2207350130037", branchYear: "IT (3rd yr)", responsibilities: "Secretary", image: "/images/mahesh.jpg" },
  { name: "Vanshika Saxena", rollNo: "2207350130057", branchYear: "CE (3rd yr)", responsibilities: "Jn. Secretary ", image: "/images/vanshika.jpg" },
  { name: "Shubham", rollNo: "2207350209006", branchYear: "EE (4th yr)", responsibilities: "Singing Coordinator", image: "/images/shubham.jpg" },
  { name: "Akhilesh", rollNo: "2107350130012", branchYear: "IT (4th yr)", responsibilities: " Dance Coordinator", image: "/images/akhilesh.jpg" },
  { name: "Rishabh Gupta", rollNo: "2207350200037", branchYear: "EE (3rd yr)", responsibilities: "Dance Coordinator", image: "/images/rishabh.jpg" },
  { name: "Utkarsh Sharma", rollNo: "2207350200047", branchYear: "EE (3rd yr)", responsibilities: " Treasurer", image: "/images/utkarsh.jpg" },
  { name: "Abhishek Yadav", rollNo: "2207350200003", branchYear: "EE (3rd yr)", responsibilities: "Media Head", image: "/images/abhishek.jpg" },
  { name: "Millie", rollNo: "2207350200028", branchYear: "EE (3rd yr)", responsibilities: "Singing Coordinator", image: "/images/milli.jpeg" },
  { name: "Arnav Raj", rollNo: "2307350009001", branchYear: "CE (3rd yr)", responsibilities: "Instrument Coordinator (Guitar)", image: "/images/arnav.jpg" },
  { name: "Rahul Kumar", rollNo: "2207350200034", branchYear: "EE (3rd yr)", responsibilities: "Poetry Coordinator", image: "/images/rahul.jpg" },
  { name: "Om Jee", rollNo: "2207350130043", branchYear: "IT (3rd yr)", responsibilities: "Drama Coordinator", image: "/images/arpan.jpg" },
  { name: "Vaishno Das", rollNo: "2207350130063", branchYear: "IT (3rd yr)", responsibilities: "Instrument Coordinator (Tabla)", image: "/images/Vaishno.jpg" },
  { name: "Yashuwardhan", rollNo: "2307350200068", branchYear: "EE (2nd yr)", responsibilities: "Student Coordinator", image: "/images/yashuwardhan.jpg" },
  { name: "Mridul", rollNo: "2307350200034", branchYear: "EE (2nd yr)", responsibilities: "Assitant media Head", image: "/images/mirdul.jpg" },
  { name: "Deepanshu", rollNo: "2307350130021", branchYear: "IT (2nd yr)", responsibilities: "Student Coordinator", image: "/images/deepanshu.jpg" },
  { name: "Priyanshu Srivastava", rollNo: "2307350200048", branchYear: "EE (2nd yr)", responsibilities: "Student Coordinator", image: "/images/arpan.jpg" },
  { name: "Manish", rollNo: "2307350200031", branchYear: "EE (2nd yr)", responsibilities: "Student Coordinator", image: "/images/manish.jpg" },
  
]
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