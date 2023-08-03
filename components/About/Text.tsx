type textBlock = {
    title?: String,
    content?: String
}

type TextProps = {
    text: textBlock[]
}

const Text = ({ text }: TextProps) => {
    return (
        <div>
            {text.map(block => {
                return (
                    <div>
                        {'title' in block && <div className="font-bold text-white  ">{block.title}</div>}
                        {'content' in block && <div className="mb-6">{block.content}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default Text;