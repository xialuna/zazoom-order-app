'use client'
import React from 'react'
import { Menu } from 'lucide-react'

export const Nav = () => {
  return (
    <nav className='sticky top-0 flex items-end justify-end bg-brand-primary p-3'>
      <button>
        <Menu size={30} />
      </button>
    </nav>
  )
}
