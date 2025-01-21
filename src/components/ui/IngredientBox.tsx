import React from 'react'
import { Plus } from 'lucide-react'
export const IngredientBox = ({ imageSrc, pizzaName, price }) => {
  return (
    <div className='flex w-[170px] flex-col rounded-lg border-2 border-neutral-primary p-2.5'>
      {/* Image Container */}
      <div className='relative'>
        <div className='flex items-center justify-center rounded-lg bg-neutral-primary px-2 py-3'>
          <img src={imageSrc} className='w-[104px]'></img>
        </div>

        <button className='absolute right-0 top-0 rounded bg-neutral-emphasis p-0.5'>
          <Plus className='text-onbrand-primary' />
        </button>
      </div>
      {/* Title Card Container */}
      <div className='flex flex-col gap-1'>
        <h4 className='pt-2 text-lg font-semibold'>{pizzaName}</h4>

        {/* Price */}
        <div className='flex justify-end'>
          <div className='flex items-center justify-end rounded bg-neutral-emphasis px-2 py-0.5 text-white'>
            <Plus size={15} className='border-medium' />
            <span className='text-sm font-medium'>₱ {price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
