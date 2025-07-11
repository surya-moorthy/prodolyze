'use client'
import ActivityCard from '@/components/ActivityCard';
import Chart from '@/components/Chart';
import { AppSidebar } from '@/components/CustomSidebar'
import Deadline from '@/components/Deadline';
import ProjectProgress from '@/components/ProjectProgress';
import ProjectsCard from '@/components/ProjectsCard';
import { useSession } from 'next-auth/react'
import React from 'react'

export default function page() {
  const session = useSession();
  return (
    <div className="min-w-screen px-72 py-16">
       {
              session.status == "unauthenticated" ? <></> : <AppSidebar/>
       }
       <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            <ProjectsCard/>
            <ActivityCard/>
            <Deadline/>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <Chart/> 
          <ProjectProgress/>
       </div>
    </div>
  )
}
