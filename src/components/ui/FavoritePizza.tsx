import React from 'react'
import { ButtonCart } from './ButtonCart'

export const FavoritePizza = ({ name, price, imageSrc, ingredients }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex max-w-[361px] items-center justify-center gap-3 rounded-lg border-2 border-neutral-primary bg-neutral-primary px-2 py-1'>
        <img src={imageSrc} className='w-[99px]' />
        <div className='w-[230px]'>
          <h3>{name}</h3>
          <p>{ingredients}</p>

          <div className='mt-0.5 flex items-center justify-between'>
            <span className='text-xl font-semibold'>₱ {price}</span>
            <ButtonCart />
          </div>
        </div>
      </div>
    </div>
  )
}
