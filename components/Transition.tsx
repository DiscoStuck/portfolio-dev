'use client'

// framer motion
import { motion } from 'framer-motion'

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

const Transition = () => {
  return (
    <>      <motion.div
      className='fixed top-0 bottom-0 right-full w-screen z-10 bg-[#4b3792]'
      initial='initial'
      exit='exit'
      variants={transitionVariants}
      animate='animate'
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
    />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-20 bg-[#3b2d71]'
        initial='initial'
        exit='exit'
        variants={transitionVariants}
        animate='animate'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]'
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
