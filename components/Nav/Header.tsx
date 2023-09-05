// next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16
     xl:px-0 xl:h-[90px] 2xl:h-[135px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center
      gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'} className="text-3xl 2xl:text-[2.8rem] font-black_ops_one text-center whitespace-nowrap">
            <span className="text-accent">( </span>juanjo: Simon<span className="text-accent"> )</span>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
