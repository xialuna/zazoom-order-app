'use client'
import { Nav } from '../components/ui/Nav'
import { IngredientBox } from '../components/ui/IngredientBox'
import { ProgressIndicator } from '../components/ui/ProgressIndicator'
import { ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { ButtonCart } from '../components/ui/ButtonCart'
import { FavoritePizza } from '../components/ui/FavoritePizza'
export default function Home() {
  return (
    <div>
      <Nav />
      <main className='mx-[18px]'>
        {/* Customize Pizza */}
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='flex max-w-[361px] items-center justify-center gap-3 rounded-lg border-2 border-neutral-primary bg-neutral-primary px-2 py-3'>
            <div className='max-w-[218px]'>
              <h3>Customize Pizza</h3>
              <p>Create your own yummy pizza with whatever dough, sauce, and toppings you want</p>
              <ButtonCart />
            </div>
            <img src='assets/custom-pizza.png' className='w-[98px] rounded border-2 border-brand-primary' />
          </div>
        </div>

        {/* Favorites */}
        <div className=''>
          {/* Title Card */}
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <img src='favorite-icon.svg' alt='Favorite Icon' className='h-6 w-6' />
              <h2>Your Favorites</h2>
            </div>
            <span className='text-sm font-semibold text-neutral-primary'>See All</span>
          </div>
        </div>

        {/* Pizza Components */}
        <div className='mt-4 flex flex-col gap-3'>
          <FavoritePizza />
          <FavoritePizza />
          <FavoritePizza />
        </div>
      </main>
    </div>
  )
}
