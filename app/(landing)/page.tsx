"use client"

import { useEffect, useState } from 'react'

import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import Introduction from '@/components/landing/introduction'
import Rules from '@/components/landing/rules'
import Attributes from '@/components/landing/attributes'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex relative flex-col bg-bkg text-white overflow-hidden">
      <div className=" 
      absolute w-[200px] h-[150px] md:h-[200px] top-[120px] bg-cpurple
      rounded-full md:left-[240px] custom-blur z-0 " />
      <div className=" hidden md:flex
      absolute w-[200px] h-[200px] top-[240px] bg-cpurple
      right-[40px] custom-blur2 z-50 " />
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
        <Rules />
      </section>
        <hr className='w-full text-gray' />
      <section className="2xl:mx-[300px]">
        <Attributes />
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
