// links
import Link from 'next/link'

import { SiLinkedin, SiExercism, SiFreelancer, SiTwitter } from 'react-icons/si';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiLinkedin />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiTwitter />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiExercism />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiFreelancer />
      </Link>
    </div>
  )
};

export default Socials;
