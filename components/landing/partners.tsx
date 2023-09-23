"use client"

import Image from "next/image"

const Partners = () => {
  return (
    <div className="flex flex-col mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div className="flex justify-center items-center flex-col mb-[40px] md:mb-[60px] mt-[20px]">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 className="font-bold text-center md:text-start">Partners and Sponsors</h2>
        </div>
        <div className="flex mt-[14px] leading-loose max-w-[405px] 2xl:max-w-[1200px] text-center text-[10px] md:text-[12px] lg:text-[14px]">
          Getlinked Hackathon 1.0 is honoured to have the following major companies as its partners and sponsors
        </div>
      </div>

      <div className="flex max-w-[1255px] max-h-[560pxx] border border-cpink border-solid rounded-[8px] p-[20px] md:p-[40px] lg:p-[80px] xl:p-[120px] mx-auto ">
        
        <Image
          src="/Partner and Sponsors.png"
          alt="menu"
          width={1255}
          height={560}
          draggable={false}
        />
      </div>

    </div>
  )
}

export default Partners