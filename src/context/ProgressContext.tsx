'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ProgressContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  return (
    <ProgressContext.Provider value={{ currentStep, setCurrentStep, totalSteps }}>{children}</ProgressContext.Provider>
  )
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
