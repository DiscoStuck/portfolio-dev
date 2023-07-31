// next image
import Image from "next/image";

const Explosion = () => {
    return (
        <div
            className="absolute -right-16 bottom-0 duration-75 -z-10 mix-blend-screen "
        >
            <Image
                src={"/explosion-transparent.png"}
                width={800}
                height={800 * 0.75}
                className="w-full h-full mix-blend-exclusion"
                alt=""
            />
        </div>
    );
}

export default Explosion;