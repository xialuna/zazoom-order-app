import React from 'react'

export const ProgressIndicator = ({ totalSteps, currentStep }) => {
  return (
    <div className='flex space-x-2'>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-[8px] w-[34px] rounded-xl ${
            index < currentStep
              ? 'bg-brand-primary' // Filled step
              : 'border border-brand' // Empty step
          } transition-all duration-300`}
        />
      ))}
    </div>
  )
}

