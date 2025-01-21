'use client'
import React, { useState } from 'react'
import { Nav } from '@/src/components/ui/Nav'
import { ProgressIndicator } from '@/src/components/ui/ProgressIndicator'
import { IngredientBox } from '@/src/components/ui/IngredientBox'
import { ingredients } from '@/src/data'
import Link from 'next/link'
import { InputField } from '@/src/components/ui/InputField'
const page = () => {
  const [currentStep, setCurrentStep] = useState(1) // ProgressIndicator
  const [name, setName] = useState('') // State to hold input value
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [instructions, setInstructions] = useState('')
  const totalSteps = 4 // ProgressIndicator

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value)
  }

  return (
    <>
      <Nav />
      <div className='mx-[18px]'>
        {/* Heading */}
        <div className='mt-7 flex flex-col items-center justify-center'>
          <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
          <h1 className='mt-4'>Customer Information</h1>
        </div>

        <form className='flex flex-col gap-3'>
          <InputField label='Name' value={name} onChange={handleNameChange} placeholderText='Enter your full name' />
          <InputField
            label='Phone Number'
            value={contact}
            onChange={handleContactChange}
            placeholderText='+63XXXXXXXXXX'
          />
          <InputField
            label='Delivery Address'
            value={address}
            onChange={handleAddressChange}
            placeholderText='Unit No. Street, Brgy, City, Region'
          />
          <InputField
            label='Special Instructions'
            value={instructions}
            onChange={handleInstructionsChange}
            placeholderText='Any instructions you would like to add (eg. food allergies, directions)'
          
          />
        </form>

        <div className='m-2 flex justify-center gap-2 pb-5'>
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className='btn btn-secondary btn-hover w-[167px] px-11 py-1 text-lg'
          >
            Previous
          </button>
          <Link href='/customer-info'>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
              className='btn btn-primary btn-hover w-[167px] py-1 text-lg'
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default page
