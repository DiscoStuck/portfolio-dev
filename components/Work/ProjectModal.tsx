import { Dialog } from "@headlessui/react";
import Image from "next/image";

type ProjectModalProps = {
    imagePath: string
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ imagePath, isOpen, onClose }: ProjectModalProps) => {
    return (
        <div>
            <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto flex flex-col justify-center items-center">
                    <Dialog.Panel className="mx-auto w-[600px] xl:h-[600px] rounded-xl bg-primary flex
                     flex-col items-center overflow-auto  p-8 border-2 border-gray-600 text-gray-300">
                        <Image src={imagePath} alt='' width={600} height={600 * 9 / 16} className="rounded-lg" />
                        <div className="mt-8 flex gap-10">
                            <div className="flex-1">
                                <Dialog.Title className='text-2xl mb-4'>
                                    Project title
                                </Dialog.Title>
                                <Dialog.Description>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Dialog.Description>
                            </div>
                            <div className="h-full w-10 bg-white">

                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

export default ProjectModal;