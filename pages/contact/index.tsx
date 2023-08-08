// button
import Button from '../../components/Button';


const Contact = () => {
  return (
    <div className='h-full lg:h-screen py-[25vh] lg:py-0 flex w-full justify-center'>
      <div className='container text-center lg:text-left flex flex-col
      items-center h-full relative lg:justify-center xl:pr-40 xl:mt-[40px]'>
        {/* form */}
        <form className='flex flex-col gap-12 xl:w-[80%] lg:w-full md:w-[600px] lg:flex-row items-center lg:justify-center'>
          <div className='flex-1 flex flex-col gap-y-8 w-full'>
            {/* text */}
            <h2 className='h2 text-center'>
              Let's <span className='text-accent'>connect.</span>
            </h2 >
            {/* input */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
          </div>
          <div className='flex-1 flex flex-col gap-y-8 w-full'>
            <textarea placeholder='message' className='textarea h-[174px]'></textarea>
            <Button text="Let's talk" paddingY={4} className='w-full' />
          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;
