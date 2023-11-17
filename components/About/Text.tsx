type textBlock = {
    title?: string,
    content?: string
}

type TextProps = {
    text: textBlock[]
}

const Text = ({ text }: TextProps) => {
    return (
        <div className="flex flex-col gap-y-4 text-left">
            {text.map((block, index) => {
                return (
                    <div key={`textIndex-${index}`}>
                        {'title' in block && <div className="font-bold text-white  ">{block.title}</div>}
                        {'content' in block && <div className='whitespace-pre-line'>{block.content}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default Text;