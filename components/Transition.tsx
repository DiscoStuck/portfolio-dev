'use client'

// framer motion
import { motion } from 'framer-motion'

//variants
const transitionVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '-125%',
  },
  exit: {
    y: ['-125%', '0%'],
  }
}

const Transition = () => {
  return (
    <>      <motion.div
      key='transition1'
      className='fixed h-full w-screen z-30 bg-[#21233B] '
      initial='initial'
      exit='exit'
      variants={transitionVariants}
      animate='animate'
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
    />
      <motion.div
        key='transition2'
        className='fixed h-full w-screen z-40 bg-[#1D1F33] '
        initial='initial'
        exit='exit'
        variants={transitionVariants}
        animate='animate'
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        key='transition3'
        className='fixed h-full z-50 w-screen bg-[#191A2B]'
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
