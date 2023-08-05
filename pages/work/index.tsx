// components
import WorkSlider from '../../components/Work/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useCallback, useState } from 'react'
import ProjectModal from '../../components/Work/ProjectModal'

const Work = () => {
  const [showModal, setShowModal] = useState(false)
  const [pathModal, setPathModal] = useState('')

  const openModal = useCallback((path: string) => {
    setShowModal(true)
    setPathModal(path)
  }, [])


  return (
    <div>
      <div className='h-full bottom-[80px] pt-[15vh] pb-[100px] xl:px-0  flex xl:items-center'>
        <Circles />
        <div className='container mx-auto'>
          <ProjectModal isOpen={showModal} imagePath={pathModal} onClose={() => setShowModal(false)} />
          <div className='flex flex-col gap-x-8 justify-center items-center xl:items-start mt-16'>
            {/* header */}
            <h1 className='h1 '><span className='text-accent'>My </span>Work</h1>
            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show'
              exit='hidden' className='w-[80%] md:w-[600px] lg:w-[800px] xl:w-[89%]'>
              {/* slider */}
              <WorkSlider showModal={showModal} pathModal={pathModal} openModal={openModal} />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  )
};

export default Work;
