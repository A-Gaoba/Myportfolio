import React from 'react'
import About from './about/page'

export default function Home() {
  return (
    <div className="flex-1 justify-center items-center">
      <div className='flex justify-between'>
          <About />
      </div>
    </div>
  )
}
