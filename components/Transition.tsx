'use client'

// framer motion
import { motion } from 'framer-motion'

//variants
const transitionVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '-110%',
  },
  exit: {
    y: ['-110%', '0%'],
  }
}

const Transition = () => {
  return (
    <>      <motion.div
      className='fixed h-full w-screen z-30 bg-[#4b3792]'
      initial='initial'
      exit='exit'
      variants={transitionVariants}
      animate='animate'
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
    />
      <motion.div
        className='fixed h-full w-screen z-40 bg-[#3b2d71]'
        initial='initial'
        exit='exit'
        variants={transitionVariants}
        animate='animate'
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed h-full z-50 w-screen bg-[#2e2257]'
        initial='initial'
        exit='exit'
        variants={transitionVariants}
        animate='animate'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />


    </>
  );
};

export default Transition;
