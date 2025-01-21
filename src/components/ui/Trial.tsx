'use client'
import React, { useState } from 'react'

const ProgressIndicator = ({ totalSteps, currentStep }) => {
  return (
    <div className='flex space-x-2'>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-4 w-12 rounded-full ${
            index < currentStep
              ? 'bg-yellow-300' // Filled step
              : 'border-2 border-yellow-300' // Empty step
          } transition-all duration-300`}
        />
      ))}
    </div>
  )
}

const App = () => {
  const [currentStep, setCurrentStep] = useState(1) // Starting from step 1
  const totalSteps = 4

  return (
    <div className='p-8'>
      <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
      <div className='mt-4 flex space-x-4'>
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          className='rounded bg-gray-300 px-4 py-2'
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
          className='rounded bg-blue-500 px-4 py-2 text-white'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App

// I want to create a progression indicator in tailwind css and react component. What it does is that every next page of the customer it fills it with the background, but if it's previous then it will go to empty
