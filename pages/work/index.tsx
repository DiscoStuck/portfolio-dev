// components
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div className='h-full py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-8 items-center justify-center mt-16'>
          {/* header */}
          <h1 className='h1'><span className='text-accent'>My </span>Work</h1>
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show'
            exit='hidden' className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
