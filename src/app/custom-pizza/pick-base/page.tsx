'use client'
import React, { useState } from 'react'
import { Nav } from '@/src/components/ui/Nav'
import { ProgressIndicator } from '@/src/components/ui/ProgressIndicator'
import { IngredientBox } from '@/src/components/ui/IngredientBox'
import { ingredients } from '@/src/data'

const page = () => {
  const [currentStep, setCurrentStep] = useState(1) // Starting from step 1
  const totalSteps = 4

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
            <div className='flex flex-wrap gap-3'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
