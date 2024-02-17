import React from 'react'
import Education from './Education'
import Experience from './Experience'

export default function Resume() {
  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white mb-6"> Resume</h1>
      <Education />
      <Experience />
    </div>
  )
}
