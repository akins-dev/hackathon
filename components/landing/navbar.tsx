"use client"

import Link from "next/link"

import Button from "@/components/button"

const Navbar = () => {
  return (
    <div className="flex lg:mt-[50px] mt-[20px] lg:mb-[20px] mb-[10px] lg:mx-[100px] mx-[30px] justify-between items-center overflow-hidden">
      <div className="lg:text-[36px] md:text-[24px] sm:text-[15px] font-bold">
        <Link href="/">
          get<span className="text-cpink">linked</span>
        </Link>
      </div>

      <div className="hidden items-center gap-x-14 md:flex">
        <div className="flex items-center md:gap-x-4 lg:gap-x-10">
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
    </div>
  )
}

export default Navbar