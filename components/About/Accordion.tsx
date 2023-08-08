// useState
import { useState } from "react"

type textBlock = {
    title?: String,
    content?: String
}

type AccordionProps = {
    text: textBlock[]
}

const Accordion = ({ text }: AccordionProps) => {
    const [selected, setSelected] = useState('AI')
    return (
        <div className="flex flex-col gap-y-4">
            {text.map(block => {
                return (
                    <div>
                        {block && <div className={` ${selected === block.title ?
                            'text-accent' :
                            'text-white'
                            } font-bold cursor-pointer flex items-center gap-x-3 pr-7 text-left
                        `}
                            onClick={() => {
                                typeof block.title === 'string' && block.title !== selected ?
                                    setSelected(block.title)
                                    : setSelected('')
                            }
                            }>{block.title}
                            <span className="relative h-3 w-3 mb-">
                                <div className={`absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/10 w-full h-0.5
                                 ${selected !== block.title && 'rotate-90'} transition duration-300`} />
                                <div className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/10 w-full h-0.5" />
                            </span>
                        </div>}
                        <div className={`text-left ml-4 transition-[height, opacity] duration-300 overflow-hidden ${selected !== block.title ? 'h-0 opacity-0' : 'h-[105px]'}`}>
                            {block.content}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Accordion;