import React, { useState } from 'react'
import { Card } from './ui/card'

export default function () {
    const [projects,setProjects] = useState<number>(0);
  return (
    <Card className='p-8'>
        <h3 className=''>
              Total Projects  
        </h3>
        <h2>
              {projects}
        </h2>
    </Card>
  )
}
