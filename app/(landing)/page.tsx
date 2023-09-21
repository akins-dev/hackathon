"use client"

import { useEffect, useState } from 'react'

import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import Introduction from '@/components/landing/introduction'

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

      <section className="2xl:mx-[300px]">
        <Navbar />
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        <Hero />
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        <Introduction />
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Rules
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Attributes
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        FAQ
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Timeline
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Rewards
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Partners
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Terms
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        Footer
      </section>

    </div>
  )
}
