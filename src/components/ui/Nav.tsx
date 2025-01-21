"use client";
import React from 'react'
import { Menu} from 'lucide-react';


export const Nav = () => {
  return (
    <nav className="bg-brand-primary p-3 flex justify-end items-end">
        <button>
            <Menu size={30}/>
        </button>
    </nav>
  )
}
