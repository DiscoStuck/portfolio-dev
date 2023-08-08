import { workData } from "../../data/workData";

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
import { useCallback, useEffect, useState } from 'react'
import ProjectModal from '../../components/Work/ProjectModal'

// types
export type Project = {
    title: string
    image: string
    website: string
    description: string
    stack: string[]
}

const WorkSlider = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [projectModal, setProjectModal] = useState(workData[0])

    const openModal = useCallback((project: Project) => {
        setShowModal(true)
        setProjectModal(project)
    }, [])



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
            <ProjectModal isOpen={showModal} project={projectModal} onClose={() => setShowModal(false)} />
            {showSlider ? (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='xl:h-[340px] sm:h-[480px] w-full '
                >
                    {workData.map((slide, index) => {
                        return (
                            <SwiperSlide >
                                <ProjectElement project={slide} key={index} openModal={openModal} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )
                : (
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12 mt-8'>
                        {workData.map((slide, index) => {
                            return <ProjectElement project={slide} key={index} openModal={openModal} />
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default WorkSlider;