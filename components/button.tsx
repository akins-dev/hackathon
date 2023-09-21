"use client"

interface ButtonProp {
    content: any
}

const Button = ({
    content
}: ButtonProp) => {
  return (
    <button className="bg-gradient-to-r from-gradientx to-gradienty rounded lg:h-[52px] md:h-[36px] lg:w-[172px] md:w-[120px] items-center">
        <p className="lg:text-[16px] md:text-sm text-center font-medium">{content}</p>
    </button>
  )
}

export default Button