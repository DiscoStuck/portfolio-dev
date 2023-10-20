import { SiLinkedin, SiGithub, SiFreelancer, SiTwitter } from 'react-icons/si';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 2xl:gap-x-8 text-lg xl:mr-[20px]'>
      <a href={'https://www.linkedin.com/in/juan-jose-simon/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiLinkedin className='social-icon' />
      </a>
      <a href={'https://twitter.com/Saimon_dev'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiTwitter className='social-icon' />
      </a>
      <a href='https://www.freelancer.com/u/JuanjoSimon' target='_blank' className='hover:text-accent transition-all duration-300'>
        <SiFreelancer className='social-icon' />
      </a>
      <a target='_blank' href={'https://github.com/JSaimonDev'} className='hover:text-accent transition-all duration-300'>
        <SiGithub className='social-icon' />
      </a>
    </div>
  )
};

export default Socials;
