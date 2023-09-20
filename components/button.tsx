"use client"

interface ButtonProp {
    content: any
}

const Button = ({
    content
}: ButtonProp) => {
  return (
    <button className="bg-gradient-to-r from-gradientx to-gradienty rounded h-[52px] w-[172px] items-center">
        <p className="text-[16px] text-center">{content}</p>
    </button>
  )
}

export default Button