import React from "react"
import { Project } from "../components/Work/WorkSliderNoSSR"

export const workData: Project[] = [
    {
        title: 'Spacebnb',
        image: "/projects/spacebnb.png",
        website: 'https://github.com/JSaimonDev/spacebnb',
        description: <p>Space-themed property rental web app. Find the best place to spend your holidays anywhere in the galaxy.</p>,
        stack: ['typescript', 'next', 'tailwind', 'mongo', 'prisma']
    },
    {
        title: 'Messenger clone',
        image: "/projects/messenger.png",
        website: 'https://github.com/JSaimonDev/messenger-clone',
        description: <p>Fully functional clone of the popular Facebook application Messenger. With social login a real time chat. </p>,
        stack: ['typescript', 'next', 'tailwind', 'mongo', 'prisma']
    },
    {
        title: 'Curado en salud',
        image: "/projects/curadoensalud-screenshot.png",
        website: 'https://github.com/JSaimonDev/curado-en-salud-app',
        description: <p>Directory of websites with free resources. Built using WordPress and Elementor before learning coding.</p>,
        stack: ['typescript', 'react', 'node', 'prisma', 'postgres', 'tailwind', 'aws']
    }
]