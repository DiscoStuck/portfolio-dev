// icons
import {
  FaCss3Alt,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiCsharp,
} from 'react-icons/si'

import {
  PiFileSqlLight
} from 'react-icons/pi'

import {
  FcLinux,
} from 'react-icons/fc'
import { Children } from 'react'
import { openInNewTab } from '../utils'

export const strengths = [
  {
    title: 'AI',
    content: '“AI won’t take your job as a programmer. Programmers that know how to use AI will”. AI has been my mentor. I know it’s strengths and weaknesses and am always up-to-date with the last developments.',
  },
  {
    title: 'High Standards',
    content: 'As a freelance photo retoucher I had the opportunity ' +
      'to work with well known brands like Cartier, Hennessy or RedBull. ' +
      'During this time I got use to deal with very high quality expectations.'
  },
  {
    title: 'Graphics and media background',
    content: 'Working with photo and video for many years has given me a ' +
      'strong foundation in color, composition and technical knowledge.'
  }
]

export const skillsIcons = [
  <FaCss3Alt color='#264de4' />,
  <SiJavascript color='#F0DB4F' />,
  <SiTypescript color='#3178C6' />,
  <FaReact color='#61dbfb' />,
  <FaNodeJs color='#3c873a' />,
  <SiNextdotjs color='white' />,
  <SiTailwindcss color='#38BDF8' />,
  <PiFileSqlLight color='white' />,
  <SiMongodb color='#02B853' />,
  <SiPostgresql color='#336791' />,
  <SiPrisma color='white' />,
  <FaGitAlt color='#f34f29' />,
  <FcLinux />,
  <FaWordpress color='#00749C' />,
  <SiCsharp color='#682876' />

]

export const background = [
  {
    title: "Audiovisual",
    content: 'Camera operator, video editor, lighting technician and projectionist.'
  },
  {
    title: 'Chef',
    content: 'Ramen chef. Yummy!'
  },
  {
    title: 'Photo Retoucher',
    content: 'Freelance photoshop expert.'
  }
]

export const moreAboutMe = [
  {
    content: `I don't like problems, but I love solving them. I am curious by nature and feel an urgent need to know how everything works. I have great respect for those who value other people's time as much as their own.
    
    Programming has given a voice to a part of myself that always felt misunderstood.`
  }
]

const CertificationLink = ({ link, children }: { link: string, children: string }) => {
  return (
    <div onClick={() => openInNewTab(link)} className='cursor-pointer'>
      {children}
    </div>
  )
}

export const certifications = [
  {
    title: 'FullStack Open - Core (part 1-8)',
    content: <CertificationLink link='/certifications/certificate-fullstack.png'>Link to certificate</CertificationLink>
  },
  {
    title: 'FullStack Open - Typescript',
    content: <CertificationLink link='/certifications/certificate-typescript.png'>Link to certificate</CertificationLink>
  },
  {
    title: 'FreeCodeCamp - Relational Database',
    content: <CertificationLink link='https://www.freecodecamp.org/certification/JuanjoSimon/relational-database-v8'>Link to certificate</CertificationLink>
  },
  {
    title: 'Microsoft - Foundational C#',
    content: <CertificationLink link='https://www.freecodecamp.org/certification/JuanjoSimon/foundational-c-sharp-with-microsoft'>Link to certificate</CertificationLink>
  }
]



export const aboutSections = ['Skills', 'Certifications', 'Strengths', 'Background']