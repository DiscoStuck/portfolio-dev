// headlessui
import { Dialog } from "@headlessui/react";

// next
import Image from "next/image";

// components
import IconComponent from "../IconComponent";

//types
import { Project } from "./WorkSlider";
type ProjectModalProps = {
    project: Project
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    return (
        <div>
            <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto flex flex-col justify-center items-center">
                    <Dialog.Panel className="mx-auto w-[600px] xl:h-[600px] rounded-xl bg-primary flex
                     flex-col items-center overflow-auto  p-8 border-2 border-gray-600 text-gray-200">
                        <Image src={project.image} alt='' width={600} height={600 * 9 / 16} className="rounded-lg" />
                        <div className="mt-8 flex gap-10">
                            <div className="flex-1">
                                <Dialog.Title>
                                    <h2 className='text-2xl mb-4 text font-semibold text-accent'>
                                        {project.title}
                                    </h2>
                                </Dialog.Title>
                                <Dialog.Description className='text-gray-200'>
                                    {project.description}
                                </Dialog.Description>
                            </div>
                            <div className="h-full w-10 flex flex-col items-center text-3xl gap-4 pt-4">
                                {project.stack.map(name => {
                                    return <IconComponent name={name} />
                                })}
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

export default ProjectModal;