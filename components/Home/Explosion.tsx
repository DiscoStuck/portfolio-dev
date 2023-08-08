// next image
import Image from "next/image";

type ExplosionProps = {
    className: String
}

const Explosion = ({ className }: ExplosionProps) => {
    return (
        <div
            className={`absolute -z-10 mix-blend-screen ${className}`}
        >
            <Image
                src={"/explosion-transparent.png"}
                width={700}
                height={700 * 0.75}
                className="w-full h-full mix-blend-exclusion"
                alt=""
            />
        </div>
    );
}

export default Explosion;