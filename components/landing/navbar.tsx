"use client"

import Link from "next/link"
import Image from "next/image"

import Button from "@/components/button"
import { cn } from "@/lib/utils"

const constantClassName = "flex font-medium cursor-pointer bg-clip-text hover:text-transparent bg-gradient-to-r from-cpurple via-cpink  to-cpinkx transition-colors duration-300 active:text-transparent"


const Navbar = () => {
  return (
    <div className="flex lg:mt-[50px] mt-[20px] lg:mb-[20px] mb-[10px] lg:mx-[60px] xl:mx-[100px] 2xl:mx-[200px] mx-[30px] justify-between items-center overflow-hidden z-50">
      <div className="lg:text-[36px] md:text-[24px] sm:text-[15px] font-bold clash-display">
        <Link href="/">
          get<span className="text-cpink">linked</span>
        </Link>
      </div>

      <div className="hidden items-center gap-x-10 xl:gap-x-24 md:flex">
        <div className="flex items-center md:gap-x-3 lg:gap-x-8 xl:gap-x-12">
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            Timeline
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            Overview
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            FAQ
          </div>
          <div className={constantClassName}>
            Contact
          </div>
        </div>
        <div>
          <Button content="Register" />
        </div>
      </div>
      <div className="md:hidden flex top-10 cursor-pointer z-50">
        <Image
         src="/menu.png"
         alt="menu"
         width={19}
         height={14}
         draggable={false}
         className="felx z-50"
         />
      </div>
    </div>
  )
}

export default Navbar