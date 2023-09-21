"use client"

import Image from 'next/image'
import { Unica_One } from 'next/font/google'

const unicaOne = Unica_One({ weight: ["400"], subsets: ["latin"] })
const customClass = unicaOne.className + " text-[64px]"


import Button from '@/components/button'

const Hero = () => {
  return (
    <div className='relative flex-col'>
        <div className='flex justify-end mt-[20px] mr-[60px] mb-[10px] text-[24px] font-bold    '>
            <i>Igniting a Revolution in HR Innovation</i>
        </div>
        <div className="flex flex-1">
            <div className="flex flex-col ml-[100px] leading-tight">
                <h1 className='flex font-bold text-[60px] mt-[30px] clash-display'>getlinked Tech</h1>
                <h1 className='flex font-bold text-[60px] mb-[10px] clash-display'>Hackathon &nbsp; <span className="text-cpink">1.0</span></h1>
                <div className="flex max-w-[500px] leading-normal mb-[20px]">
                    <p className="font-semibold text-[16px]">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                </div>
                <Button content="Register" />
                <div className="flex gap-x-[20px] my-[22px] font-bold">
                    <p className={customClass}>00<span className="mt-[44px] text-[10px] font-bold">H</span></p>
                    <p className={customClass}>00<span className="mt-[44px] text-[10px] font-bold">M</span></p>
                    <p className={customClass}>00<span className="mt-[44px] text-[10px] font-bold">S</span></p>
                </div>
            </div>
            <div className="absolute right-0">
                <Image
                    src="/hackathonGuy.png"
                    alt="menu"
                    width={460}
                    height={310}
                    className='flex justify-end'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero