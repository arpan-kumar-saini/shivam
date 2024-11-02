import ContactUs from '@/components/contact-us'
import DeveloperTeam from '@/components/developer-team'
import EventSectionComponent from '@/components/event-section'
import HeroSection from '@/components/hero-section'
import VisionMissionSectionComponent from '@/components/vision-mission-section'
import React from 'react'


function page() {
  return (
    
    <div className=''>
      <HeroSection/>
      <VisionMissionSectionComponent/>
      <EventSectionComponent/>
      <ContactUs/>
      <DeveloperTeam/>
    </div>
    
    
  )
}

export default page