import { Nav } from '@/src/components/ui/Nav'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Nav />
      <main className='flex h-screen flex-col items-center justify-center gap-7'>
        <div className='flex flex-col items-center justify-center text-center'>
          <img src='assets/success.svg' className='w-[130px]' />
          <h1 className='text-[32px]'>Your order has been placed</h1>
        </div>

        <Link href='/'>
          <button className='btn btn-primary btn-hover px-7 py-2 text-xl'>Back to shopping</button>
        </Link>
      </main>
    </>
  )
}

export default page
