
import React, { useState } from 'react'
import { Card } from './ui/card'

export default function () {
    const [project,setProject] = useState<number>(0);
  return (
    <Card className='p-8'>
        <h3 className=''>
             recent Deadline
        </h3>
        <h2>
              {project}
        </h2>
    </Card>
  )
}
