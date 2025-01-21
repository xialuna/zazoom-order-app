'use client'
import { Nav } from '../components/ui/Nav'
import { IngredientBox } from '../components/ui/IngredientBox'
import { ProgressIndicator } from '../components/ui/ProgressIndicator'
import React, { useState } from 'react'
export default function Home() {
  return (
    <main>
      <div>
        <Nav />
        <IngredientBox />
      </div>
    </main>
  )
}
