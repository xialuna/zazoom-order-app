'use client'
import React, { useState } from 'react'
import { Nav } from '@/src/components/ui/Nav'
import { ProgressIndicator } from '@/src/components/ui/ProgressIndicator'
import { IngredientBox } from '@/src/components/ui/IngredientBox'
import { ingredients } from '@/src/data'
import Link from 'next/link'
const page = () => {
  const [currentStep, setCurrentStep] = useState(1) // ProgressIndicator

  const totalSteps = 4 // ProgressIndicator

  return (
    <>
      <Nav />
      <div className='mx-[18px]'>
        {/* Heading */}
        <div className='mt-7 flex flex-col items-center justify-center'>
          <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
          <h1 className='mt-4'>Pick your toppings</h1>
          <img src='/assets/cheese-pizza.webp' className='mt-2 w-[214px]' />
        </div>

        <div className='flex flex-col gap-7'>
          <div>
            <h3 className='mb-3.5'>Toppings</h3>
            <div className='flex flex-wrap gap-3'>
              {ingredients[0].toppings.map((topping) => (
                <IngredientBox
                  key={topping.id}
                  imageSrc={topping.imageSrc}
                  pizzaName={topping.title}
                  price={topping.price}
                />
              ))}
            </div>
          </div>

          <div className='m-2 flex justify-center gap-2 pb-5'>
            <Link href='/pick-base'>
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                className='btn btn-secondary btn-hover w-[167px] px-11 py-1 text-lg'
              >
                Previous
              </button>
            </Link>

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
      </div>
    </>
  )
}

export default page
