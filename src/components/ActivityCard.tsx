import React, { useState } from 'react'
import { Card } from './ui/card'

export default function () {
    const [activeprojects,setActiveProjects] = useState<number>(0);
  return (
    <Card className='p-8'>
        <h3 className=''>
              Projects Active 
        </h3>
        <h2>
              {activeprojects}
        </h2>
    </Card>
  )
}
