// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// swiper modules
import { Pagination } from 'swiper'

// icons
import { MdScreenSearchDesktop } from 'react-icons/md'

// next image
import Image from 'next/image'

// data
const workSlidesData = [
    {
        title: 'title',
        path: "/thumb1.jpg"
    },
    {
        title: 'title',
        path: "/thumb2.jpg"
    },
    {
        title: 'title',
        path: "/thumb3.jpg"
    },
    {
        title: 'title',
        path: "/thumb4.jpg"
    }
]

// swiper styles
const swiperStyles = {
    "--swiper-pagination-color": "#FFB303",
    "--swiper-pagination-bullet-inactive-color": "gray",
    "--swiper-pagination-bullet-inactive-opacity": "0.5",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "5px",
};
const castedSwiperStyles = swiperStyles as any

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='xl:h-[340px] sm:h-[480px] w-full'
        >
            {workSlidesData.map((slide, index) => {
                return <SwiperSlide>
                    <div key={index} className='relative rounded-lg
                  overflow-hidden flex items-center justify-center
                  group cursor-pointer'>
                        <div className='flex items-center justify-center relative
                    overflow-hidden group'>
                            {/* image */}
                            <Image src={slide?.path} width={750} height={450} alt='' />
                            {/* overlay gradient */}
                            <div className='absolute inset-0 bg-primary -to-l opacity-0 group-hover:opacity-60
                      transition-all duration-700'></div>
                            {/* title */}

                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-1/2
                      group-hover:xl:-translate-y-[100px] transition-all duration-300'>
                                <div className='flex flex-col items-center gap-x-2 text-[24px] tracking-[0.2em]'>
                                    {/* icons */}
                                    <div className='text-5xl  
                          transition-all duration-300 delay-100'><MdScreenSearchDesktop /></div>
                                    {/* title 1 */}
                                    <div className='delay-200 duration-300 translate-y-[500%] group-hover:translate-y-0'>Details</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    );
}

export default WorkSlider;