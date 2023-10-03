"use client"

import Image from "next/image"

const Rewards = () => {
  return (
    <div className="flex relative flex-col mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      
      {/* group 2 */}
      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:left-[80px] top-[250px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:-right-[250px] bottom-[50px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="grid grid-cols-2"> 
        <div className="hidded md:col-span-1">

        </div>
        <div className="col-span-2 md:col-span-1 flex-col mb-[20px] md:mb-[40px] mt-[20px]">
          <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
            <h2 className="font-bold text-center md:text-start">Prizes and</h2>
            <h2 className="font-bold text-center md:text-start text-cpink">Rewards </h2>
          </div>
          <div className="flex mt-[14px] items-center justify-center md:items-start md:justify-start text-center md:text-start leading-loose md:max-w-[355px] 2xl:max-w-[1200px] text-[10px] md:text-[12px] lg:text-[14px]">
            Highlight of the prizes or rewards for winners and participants.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
        <div className="flex mb-[40px] 2xl:mr-[400px] z-50">
          <Image
            src="/trophy.png"
            alt="menu"
            width={548}
            height={482}
            draggable={false}
          />
        </div>
        <div className="flex  z-50">
          <Image
            src="/rewards.png"
            alt="menu"
            width={730}
            height={494}
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Rewards