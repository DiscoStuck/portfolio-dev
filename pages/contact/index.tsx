// Icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'

// button
import Button from '../../components/Button';


const Contact = () => {
  return (
    <div className='h-full'>
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full relative'>
        {/* text & form */}
        <div>
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show'
            exit='hidden' className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect.</span>
          </motion.h2 >
          {/* form */}
          <motion.form variants={fadeIn('up', 0.2)} initial='hidden' animate='show'
            exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea'></textarea>
            <Button text="Let's talk" paddingY={4} />
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
