import React from 'react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <div className='mt-72 min-h-screen w-full'>
        <div className='flex flex-col justify-center items-center'>
             <h1 className='my-5 text-5xl font-bold font-serif tracking-tighter'>
                   You're Progess Checker
             </h1>
             <p className='text-neutral-500 text-lg tracking-wider '> 
                 Analyze your daily activity and keep up with your grind. 
             </p>
             <div className='flex mt-8 gap-3'>
                  <Button>
                       Get Started
                  </Button>
                  <Button>
                    Login Now
                  </Button>
             </div>
        </div>
    </div>
  )
}
