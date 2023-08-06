// components
import WorkSlider from '../../components/Work/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Work = () => {
  return (
    <div>
      <div className='h-full bottom-[80px] pt-[15vh] pb-[100px] xl:px-0  flex xl:items-center'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col gap-x-8 justify-center items-center xl:items-start mt-16'>
            {/* header */}
            <h1 className='h1 '><span className='text-accent'>My </span>Work</h1>
            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show'
              exit='hidden' className='w-[80%] md:w-[600px] lg:w-[800px] xl:w-[89%]'>
              {/* slider */}
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  )
};

export default Work;
