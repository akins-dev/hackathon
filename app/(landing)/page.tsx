"use client"

import { useEffect, useState } from 'react'

import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex flex-col bg-bkg text-white overflow-hidden">

      <section>
        <Navbar />
      </section>
        <hr className='w-full text-gray' />
      <section>
        <Hero />
      </section>
        <hr className='w-full text-gray' />
      <section>
        Introduction
      </section>
        <hr className='w-full text-gray' />
      <section>
        Rules
      </section>
        <hr className='w-full text-gray' />
      <section>
        Attributes
      </section>
        <hr className='w-full text-gray' />
      <section>
        FAQ
      </section>
        <hr className='w-full text-gray' />
      <section>
        Timeline
      </section>
        <hr className='w-full text-gray' />
      <section>
        Rewards
      </section>
        <hr className='w-full text-gray' />
      <section>
        Partners
      </section>
        <hr className='w-full text-gray' />
      <section>
        Terms
      </section>
        <hr className='w-full text-gray' />
      <section>
        Footer
      </section>

    </div>
  )
}
