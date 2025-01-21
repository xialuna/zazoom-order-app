import React from 'react'
import { Plus } from 'lucide-react'
export const IngredientBox = () => {
  return (
    <div className='flex w-[170px] flex-col rounded-lg border-2 border-neutral-primary p-2.5'>
      {/* Image Container */}
      <div className='relative'>
        <div className='flex items-center justify-center rounded-lg bg-neutral-primary p-2'>
          <img src='assets/regular-dough.webp' className='w-[104px]'></img>
        </div>

        <button className='bg-neutral-emphasis absolute right-0 top-0 rounded p-0.5'>
          <Plus className='text-onbrand-primary' />
        </button>
      </div>
      {/* Title Card Container */}
      <div className='flex flex-col gap-1'>
        <h3 className='pt-2 text-lg font-semibold'>Regular Dough</h3>

        {/* Price */}
        <div className='flex justify-end'>
          <div className='bg-neutral-emphasis flex items-center justify-end gap-1 rounded px-2 py-0.5 text-white'>
            <Plus size={15} className='border-medium' />
            <span className='text-sm font-medium'>₱150.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}
