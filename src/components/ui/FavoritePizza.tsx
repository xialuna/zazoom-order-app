import React from 'react'
import { ButtonCart } from './ButtonCart'

export const FavoritePizza = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex max-w-[361px] items-center justify-center gap-3 rounded-lg border-2 border-neutral-primary bg-neutral-primary px-2 py-1'>
        <img src='assets/fruity-pig.webp' className='w-[99px]' />
        <div className='max-w-[230px]'>
          <h3>Fruity Pig</h3>
          <p>Pepperoni, Sausage, Olive, Bell Pepper, Bacon, Pineapple, Ham</p>

          <div className='mt-0.5 flex items-center justify-between'>
            <span className='text-xl font-semibold'>P 790.00</span>
            <ButtonCart />
          </div>
        </div>
      </div>
    </div>
  )
}
