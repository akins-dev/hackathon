"use client"

import Link from "next/link"

import Button from "@/components/button"

const Navbar = () => {
  return (
    <div className="flex mt-[50px] mb-[20px] mx-[100px] justify-between items-center">
      <div className="text-[36px] font-bold">
        <Link href="/">
          get<span className="text-cpink">linked</span>
        </Link>
      </div>

      <div className="flex items-center gap-x-14">
        <div className="flex items-center gap-x-10">
          <div className="flex font-semibold cursor-pointer">
            Timeline
          </div>
          <div className="flex font-semibold cursor-pointer">
            Overview
          </div>
          <div className="flex font-semibold cursor-pointer">
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