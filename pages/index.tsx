// next image
import Image from 'next/image'

// components
import ParticlesContainer from '../components/ParticlesContainer'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'
import Explosion from '../components/Explosion'
import Button from '../components/Button'


const Home = () => {
  return (
    <div className='bg-primary h-full'>
      {/* text */}
      <div className='w-full h-full relative z-10'>
        <div className='text-center flex flex-col justify-center xl:pt-20
         xl:text-left h-full container mx-auto relative'>
          {/* pretitle */}
          <motion.h2
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[20px] leading-tight md:text-[40px] md:leading-[1.3] mb-2 font-semibold'>
            <span className='text-accent'>Web</span> User
          </motion.h2>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>
            <span className='text-accent'>Full Stack</span> Developer
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-l'>
            I want to make others feel the user experience that I would like to have.
            Help them get the information they need. Create the solution they have been looking for.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden'>
            <Button text='My Projects' />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <Button text='My Projects' textSize={22} />
          </motion.div>
          <Explosion />
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute left-0 top-0'>
        {/* bg img */}
        <div className='text-center flex flex-col justify-center xl:pt-40
         xl:text-left h-full container mx-auto relative'>
          <ParticlesContainer />
          <Explosion />
        </div>
      </div>
    </div>
  )
};

export default Home;
