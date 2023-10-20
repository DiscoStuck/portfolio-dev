
// components
import ParticlesContainer from '../components/Home/ParticlesContainer'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

import Button from '../components/Button'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='h-screen w-full relative bg-[#020202] overflow-clip'>
      <Image src='/bg/home_bg.jpg' width={1200} height={1200 / 2.36} className='absolute bottom-[80px] xl:bottom-0 right-[50%] translate-x-1/2 xl:w-[900px] 2xl:w-[1200px]' alt='' />
      <ParticlesContainer />
      <div className='h-full pt-[50px] pb-[110px] xl:py-0'>
        {/* text */}
        <div className='h-full w-full relative z-10 pt-[10vh]'>
          <div className='h-full text-center flex flex-col justify-center xl:-translate-y-20 lg:pt-[100px]
            xl:text-left container mx-auto relative items-center xl:items-start'>
            <motion.div
              key='contentHome'
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              {/* pretitle */}
              <h2
                className='text-[20px] leading-tight md:text-[40px] 2xl:text-[60px] md:leading-[1.3] mb-4 2xl:mb-8 font-semibold'>
                <span className='text-accent'>Web</span> User
              </h2>
              {/* title */}
              <h1 className='h1'>
                <span className='text-accent'>Full Stack</span> Developer
              </h1>
              {/* subtitle */}
              <p
                className='max-w-sm mx-6 mb-10 text-xl 
                md:max-w-lg md:text-3xl
                xl:max-w-xl xl:mx-0 xl:mb-12
                2xl:max-w-5xl 2xl:text-5xl 2xl:mb-18'>
                The future is web, and I am coding my way in.
              </p>
              {/* btn */}
              <Link href='/work' className='flex justify-center xl:justify-normal'>
                <Button text='My Projects' className='relative z-40 text-[18px] 2xl:text-[30px] py-8 2xl:py-14 2xl:px-12' textSize={40} />
              </Link>
            </motion.div>
            {/* image */}
            <div className='w-full h-full absolute left-0 top-0'>
              {/* bg img */}
              <div className='text-center flex flex-col justify-center xl:pt-40
              xl:text-left h-full container mx-auto relative'>
              </div>
              {/* <Explosion className='right-0 bottom-0 hidden xl:block z-0' /> */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Home;
