// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// swiper modules
import { Pagination } from 'swiper'

// components
import ProjectElement from './ProjectElement'
import { useEffect, useState } from 'react'

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

type WorkSliderProps = {
    showModal: boolean
    pathModal: string
    openModal: (arg0: string) => void
}


const WorkSlider = ({ showModal, pathModal, openModal }: WorkSliderProps) => {
    const [showSlider, setShowSlider] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setShowSlider(window.innerWidth >= 1200); // Change the breakpoint as needed
        };

        handleResize(); // Check initial screen size

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            {showSlider ? (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='xl:h-[340px] sm:h-[480px] w-full '
                >
                    {workSlidesData.map((slide, index) => {
                        return (
                            <SwiperSlide >
                                <ProjectElement path={slide?.path} key={index} onClick={() => openModal(slide?.path)} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )
                : (
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12 mt-8'>
                        {workSlidesData.map((slide, index) => {
                            return <ProjectElement path={slide?.path} key={index}
                                onClick={() => openModal(slide?.path)}
                            />
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default WorkSlider;