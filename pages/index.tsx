// next image
import Image from 'next/image'

// components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10
       via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40
         xl:text-left h-full container mx-auto'>
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
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute left-0 top-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge
'/>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  )
};

export default Home;
