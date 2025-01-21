'use client'
import React, { useState } from 'react'
import { Nav } from '@/src/components/ui/Nav'
import { ProgressIndicator } from '@/src/components/ui/ProgressIndicator'
import { IngredientBox } from '@/src/components/ui/IngredientBox'
import { ingredients } from '@/src/data'
import { RadioButton } from '@/src/components/ui/RadioButton'
import Link from 'next/link'
const page = () => {
  const [currentStep, setCurrentStep] = useState(1) // ProgressIndicator
  const [selectedCheese, setSelectedCheese] = useState('None')
  const totalSteps = 4 // ProgressIndicator

  const handleCheeseChange = (value) => {
    setSelectedCheese(value)
  }

  return (
    <>
      <Nav />
      <div className='mx-[18px]'>
        {/* Heading */}
        <div className='mt-7 flex flex-col items-center justify-center'>
          <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
          <h1 className='mt-4'>Pick your base</h1>
          <img src='/assets/regular-dough.webp' className='mt-2 w-[214px]' />
        </div>

        <div className='flex flex-col gap-7'>
          <div>
            <h3 className='mb-3.5'>Select Dough</h3>
            <div className='flex flex-wrap gap-3'>
              {ingredients[0].dough.map((dough) => (
                <IngredientBox key={dough.id} imageSrc={dough.imageSrc} pizzaName={dough.title} price={dough.price} />
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3.5'>Select Sauce</h3>
            <div className='flex flex-wrap gap-3'>
              {ingredients[0].sauce.map((dough) => (
                <IngredientBox key={dough.id} imageSrc={dough.imageSrc} pizzaName={dough.title} price={dough.price} />
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3.5'>Select Cheese</h3>
            <form className='flex gap-2'>
              <RadioButton label='None' value='None' selectedValue={selectedCheese} onChange={handleCheeseChange} />
              <RadioButton label='Normal' value='Normal' selectedValue={selectedCheese} onChange={handleCheeseChange} />
              <RadioButton
                label='Extra Cheese'
                value='Extra'
                selectedValue={selectedCheese}
                onChange={handleCheeseChange}
              />
            </form>
          </div>

          <div className='m-2 flex justify-center gap-2 pb-5'>
            <Link href='/'>
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                className='btn btn-secondary btn-hover w-[167px] px-11 py-1 text-lg'
              >
                Cancel
              </button>
            </Link>

            <Link href='/pick-toppings'>
              <button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
                className='btn btn-primary btn-hover w-[167px] py-1 text-lg'
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
