// components
import WorkSlider from '../../components/Work/WorkSlider'

const Work = () => {
  return (
      <div className='h-full pt-[22vh] xl:pt-[160px] pb-[120px] xl:px-0 flex flex-col justify-center xl:items-center'>
        <div className='container flex flex-col justify-center h-full mx-auto'>
          <div className='flex flex-col gap-x-8 justify-center items-center xl:items-start'>
            {/* header */}
            <h1 className='h1 sm:mt-b'><span className='text-accent'>My </span>Work</h1>
            <div className='w-[80%] md:w-[600px] lg:w-[800px] xl:w-[89%]'>
              {/* slider */}
              <WorkSlider />
            </div>
          </div>
        </div>
      </div>
  )
};

export default Work;
