"use client"

import Link from "next/link"

import Button from "@/components/button"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex lg:mt-[50px] mt-[20px] lg:mb-[20px] mb-[10px] lg:mx-[100px] 2xl:mx-[200px] mx-[50px] justify-between items-center overflow-hidden">
      <div className="lg:text-[36px] md:text-[24px] sm:text-[15px] font-bold">
        <Link href="/">
          get<span className="text-cpink">linked</span>
        </Link>
      </div>

      <div className="hidden items-center gap-x-10 xl:gap-x-24 md:flex">
        <div className="flex items-center md:gap-x-4 lg:gap-x-8 xl:gap-x-12">
          <div className="flex font-semibold lg:text-[16px] md:text-sm cursor-pointer">
            Timeline
          </div>
          <div className="flex font-semibold lg:text-[16px] md:text-sm cursor-pointer">
            Overview
          </div>
          <div className="flex font-semibold lg:text-[16px] md:text-sm cursor-pointer">
            FAQ
          </div>
          <div className="flex cursor-pointer">
            Contact
          </div>
        </div>
        <div>
          <Button content="Register" />
        </div>
      </div>
      <div className="md:hidden flex top-10 cursor-pointer">
        <Image
         src="/menu.png"
         alt="menu"
         width={19}
         height={14}
         />
      </div>
    </div>
  )
}

export default Navbar