import React from 'react'
import { ShoppingCart } from 'lucide-react'

export const ButtonCart = () => {
  return (
    <button className='btn btn-primary btn-hover mt-2 flex gap-1 px-2 py-1 text-xs'>
      <ShoppingCart size={15} />
      Add to Cart
    </button>
  )
}
