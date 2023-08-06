// next Image
import Image from "next/image";

// icons
import { MdScreenSearchDesktop } from "react-icons/md";

// types
import { Project } from "./WorkSlider";
type ProjectElementProps = {
    project: Project
    openModal: (arg0: Project) => void
}

const ProjectElement = ({ openModal, project }: ProjectElementProps) => {
    return (
        <div onClick={() => openModal(project)} className='rounded-lg
                  overflow-hidden flex items-center justify-center
                  group cursor-pointer'>
            <div className='flex items-center justify-center relative
                    overflow-hidden group h-full'>
                {/* image */}
                <Image src={project?.image} width={750} height={450} alt='' />
                {/* overlay gradient */}
                <div className='absolute h-full inset-0 bg-primary -to-l opacity-0 group-hover:opacity-60
                      transition-all duration-700'></div>
                {/* title */}
                <div className='absolute inset-0 h-full '>
                    <div className='h-full  gap-x-2 text-[24px] tracking-[0.2em] 
                    group-hover:translate-y-0 translate-y-full transition-all duration-300 flex flex-col justify-center items-center'>
                        {/* icons */}
                        <div className='text-5xl  
                          transition-all duration-300 delay-100'><MdScreenSearchDesktop /></div>
                        {/* title 1 */}
                        <div className='delay-200 duration-300 group-hover:translate-y-0'>Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;