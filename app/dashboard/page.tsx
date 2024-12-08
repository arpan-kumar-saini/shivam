import Eventmanger from '@/components/event-manager'
import AdminGalleryManager from '@/components/AdminGalleryManager'
import React from 'react'
import ClubMemberManagement from '@/components/ClubMemberManagement'

function page() {
  return (
    <>
        <Eventmanger/>
        <AdminGalleryManager />
        <ClubMemberManagement/>
    </>

  )
}

export default page