// framer motion
import { motion } from 'framer-motion'

//variants
const transitionVariants = (delay: number) => {
  return (
    {
      animate: {
        x: ['0%', '100%', '100%', '0%'],
        width: '100%',
        transition:
        {
          x: { times: [0, 0.4, 0.6, 1], duration: 1.2 },
          ease: 'easeInOut',
          delay: delay
        }
      }
    }
  )
}

const Transition = () => {
  return (
    <>      <motion.div
      className='fixed top-0 bottom-0 right-full w-screen z-10 bg-[#4b3792]'
      variants={transitionVariants(0.6)}
      animate='animate'
    />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants(0.4)}
        animate='animate'
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]'
        variants={transitionVariants(0.2)}
        animate='animate'
      />


    </>
  );
};

export default Transition;
