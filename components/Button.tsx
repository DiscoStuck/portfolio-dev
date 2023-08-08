import React from "react";
import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
    text: String,
    textSize?: number,
    paddingY?: number,
    className?: string
}

const Button: React.FC<ButtonProps> = ({ text, textSize, paddingY, className }) => {
    const finalTextSize = textSize ? `text-[${textSize}px]` : 'text-[18px]'
    const finalPaddingY = paddingY ? `pt-${paddingY}` : 'py-8'
    return (
        <button className={`btn rounded-full border border-white/50 w-fit
            px-8 ${finalPaddingY} transition-all duration-300 flex items items-center justify-center
            overflow-hidden hover:border-accent group ${className}`}>
            <span className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all
              duration-500 ${finalTextSize}`}>
                {text}
            </span>
            <BsArrowRight className={`-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
              absolute ${finalTextSize}`} />
        </button>
    );
}

export default Button;