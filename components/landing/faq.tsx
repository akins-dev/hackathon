"use client"

import Image from 'next/image'

const FAQ = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div className="flex my-auto 2xl:mr-[400px]">
        <Image
          src="/faq.png"
          alt="menu"
          width={490}
          height={477}
          draggable={false}
        />
      </div>
      <div className="flex flex-col mt-[40px] md:my-auto">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 className="font-bold text-center md:text-start">Frequently Asked</h2>
          <h2 className="font-bold text-center md:text-start text-cpink">Questions </h2>
        </div>
        <div className="flex font-semibold mt-[14px] leading-loose max-w-[370px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          <div>
            We got answers to the questions that you might want to ask about
            &nbsp;<span className="font-bold">getlinked Hackathon 1.0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ