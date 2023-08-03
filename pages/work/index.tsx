// components
import WorkSlider from '../../components/Work/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div className='h-full py-36 flex items-center mt-2'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-8 justify-center mt-16'>
          {/* header */}
          <h1 className='h1'><span className='text-accent'>My </span>Work</h1>
          <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show'
            exit='hidden' className='w-full xl:max-w-[89%]'>
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
