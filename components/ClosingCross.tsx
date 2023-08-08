type ClosingCrossProps = {
    className?: string
    onClick?: () => void
}

const ClosingCross = ({ className, onClick }: ClosingCrossProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div className="relative h-3 w-3 cursor-pointer">
                <div className={`absolute bg-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/10 w-full h-0.5 rotate-45 transition duration-300`} />
                <div className="absolute bg-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/10 w-full h-0.5 -rotate-45" />
            </div>
        </div>
    );
}

export default ClosingCross;