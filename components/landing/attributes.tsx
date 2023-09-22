"use client"

import Image from 'next/image'
import Button from '@/components/button'

const Attributes = () => {
  return (
    <div className="flex flex-col md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div className="flex my-auto 2xl:mr-[400px]">
        <Image
          src="/attribute.png"
          alt="menu"
          width={490}
          height={477}
          draggable={false}
        />
      </div>
      <div className="flex flex-col mt-[40px] md:my-auto">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 className="font-bold text-center md:text-start">Judging Criteria</h2>
          <h2 className="font-bold text-center md:text-start text-cpink">Key attributes </h2>
        </div>
        <div className="flex flex-col gap-y-[20px] font-semibold mt-[14px] leading-loose max-w-[535px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          <div>
            <span className="text-cpinkx">Innovation and Creativity:&nbsp;</span> Evaluate the uniqueness and creativity of the solution. Consider 
            whether it addressess a real-world problem in a novel way or introduces innovative features.
          </div>
          <div>
            <span className="text-cpinkx">Functionality:&nbsp;</span> Access how well the solution works. Does it perform its intended functions 
            effectively and without major issues? Judges would consider the completeness and 
            robustness of the solution.
          </div>
          <div>
            <span className="text-cpinkx">Impact and Relevance:&nbsp;</span> Determine the potential impact of the solution in the real world.
             does it address a significant problem , and is it relevant to the target audience? 
             Judges would access the potential social, economic or environmental benefits.
          </div>
          <div>
            <span className="text-cpinkx">Technical Complexity:&nbsp;</span> Evaluate the technical sophistication of the solution. Judges would consider
             the complexity of the code, the use of advanced technologies or algorithms, and the scalability
             of the solution.
          </div>
          <div>
            <span className="text-cpinkx">Adherence to Hackathon Rules:&nbsp;</span> Judges will ensure that the team adhered to the rules and
            and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, 
            and any other competition-specific requirements.
          </div>

          <div className="mt-[20px] text-center md:text-start">
            <Button content="Read More" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attributes