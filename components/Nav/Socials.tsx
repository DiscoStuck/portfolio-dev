// links
import Link from 'next/link'

import { SiLinkedin, SiGithub, SiFreelancer, SiTwitter } from 'react-icons/si';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <a href={'https://www.linkedin.com/in/juan-jose-simon/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiLinkedin />
      </a>
      <a href={'https://twitter.com/Saimon_dev'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiTwitter />
      </a>
      <a href='https://www.freelancer.com/u/JuanjoSimon' target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiFreelancer />
      </a>
      <a target='_blank' href={'https://www.freelancer.com/u/JuanjoSimon'} className='hover:text-accent transition-all duration-300'>
        <SiGithub />
      </a>
    </div>
  )
};

export default Socials;
