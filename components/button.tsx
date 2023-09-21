"use client"

interface ButtonProp {
    content: any
}

const Button = ({
    content
}: ButtonProp) => {
  return (
    <button className="bg-gradient-to-r from-gradientx to-gradienty rounded lg:py-[16px] py-[10px] lg:w-[172px] w-[120px] items-center">
        <p className="lg:text-[16px] text-sm text-center items-center font-medium">{content}</p>
    </button>
  )
}

export default Button