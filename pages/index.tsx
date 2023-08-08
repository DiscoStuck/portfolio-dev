
// components
import ParticlesContainer from '../components/Home/ParticlesContainer'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'
import Explosion from '../components/Home/Explosion'
import Button from '../components/Button'
import Link from 'next/link'


const Home = () => {
  return (
    <div className='bg-primary h-full pt-[30vh] pb-[110px] xl:py-0'>
      {/* text */}
      <div className='h-full w-full relative z-10'>
        <div className='h-full text-center flex flex-col justify-center xl:pt-20
         xl:text-left container mx-auto relative items-center xl:items-start'>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            {/* pretitle */}
            <h2
              className='text-[20px] leading-tight md:text-[40px] md:leading-[1.3] mb-2 font-semibold'>
              <span className='text-accent'>Web</span> User
            </h2>
            {/* title */}
            <h1 className='h1'>
              <span className='text-accent'>Full Stack</span> Developer
            </h1>
            {/* subtitle */}
            <p
              className='max-w-sm md:max-w-md xl:max-w-xl mx-6 xl:mx-0 mb-10 xl:mb-16 text-base  md:text-xl'>
              I want to make others feel the user experience that I would like to have.
              Help them get the information they need. Create the solution they have been looking for.
            </p>
            {/* btn */}
            <Link href='/work' className='flex justify-center xl:justify-normal'>
              <Button text='My Projects' className='text-4xl' />
            </Link>
          </motion.div>
          {/* image */}
          <div className='w-full h-full absolute left-0 top-0'>
            {/* bg img */}
            <div className='text-center flex flex-col justify-center xl:pt-40
         xl:text-left h-full container mx-auto relative'>
              <ParticlesContainer />
            </div>
            <Explosion className='right-0 bottom-0 hidden xl:block z-0' />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
