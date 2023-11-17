// headlessui
import { Dialog } from "@headlessui/react";

// next
import Image from "next/image";

// icons
import { SiGithub } from "react-icons/si";

// components
import IconComponent from "../IconComponent";

//types
import { Project } from "./WorkSliderNoSSR";
type ProjectModalProps = {
    project: Project
    isOpen: boolean
    onClose: () => void
}

// utils
import { openInNewTab } from "../../utils";
import ClosingCross from "../ClosingCross";

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    return (
        <div>
            <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto flex flex-col justify-center items-center">
                    <Dialog.Panel className="mx-auto max-w-[650px] 2xl:max-w-[1000px] w-full rounded-xl bg-primary flex
                     flex-col items-center overflow-auto  p-8 2xl:py-12 border-2 border-gray-600 text-gray-200 relative">
                        <div className="relative group overflow-hidden cursor-pointer" onClick={() => openInNewTab(project.website)}>
                            <Image src={project.image} alt='' width={900} height={900 * 9 / 16} className="rounded-lg shadow-inner relative group:hover:blur-sm 2xl:max-w-[900px]" />
                            <div className='absolute h-full inset-0 bg-primary opacity-0 xl:group-hover:opacity-60
                            transition-all duration-700'></div>
                            <div className='absolute inset-0 h-full '>
                                <div className='h-full gap-x-2 text-[24px] tracking-[0.2em] 
                                    xl:group-hover:translate-y-0 xl:translate-y-full transition-all duration-300 flex flex-col justify-center items-center'>
                                    <div className=" bg-primary bg-opacity-80 xl:bg-transparent flex flex-col items-center justify-center rounded-full w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]">
                                        {/* icons */}
                                        <div className=' text-3xl sm:text-5xl xl:text-7xl 2xl:text-9xl'><SiGithub /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 2xl:w-[900px] 2xl:mt-6">
                            <div className="flex flex-col sm:flex-row mb-4 2xl:mb-6 items-center border-b-2 border-gray-600">
                                <Dialog.Title className="flex-1 h-full items-center ">
                                    <h2 className='text-3xl 2xl:text-5xl text font-semibold text-accent h-14 2xl:h-24 flex items-center px-4 2xl:px-6 cursor-pointer' onClick={() => openInNewTab(project.website)}>
                                        {project.title}
                                    </h2>
                                </Dialog.Title>
                                <div className="h-14 2xl:h-24 px-4 2xl:px-6 flex  2xl:text-5xl text-2xl gap-x-4 items-center md:self-end">
                                    {project.stack.map(name => {
                                        return <IconComponent name={name} />
                                    })}
                                </div>
                            </div>
                            <div>
                                <Dialog.Description className='2xl:text-2xl'>
                                    {project.description}
                                </Dialog.Description>
                            </div>
                        </div>
                        <ClosingCross className="absolute right-3 top-3 z-50" onClick={onClose} />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

export default ProjectModal;