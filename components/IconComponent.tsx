// icons
import {
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobe,
  SiMongodb,
  SiPrisma,
} from 'react-icons/si'

import {
  FcLinux,
} from 'react-icons/fc'

type ColorComponent = {
  [key: string]: JSX.Element
}

const iconComponentList: ColorComponent = {
  css: <FaCss3Alt color='#264de4' />,
  js: < FaJs color='#F0DB4F' />,
  react: <FaReact color='#61dbfb' />,
  node: <FaNodeJs color='#3c873a' />,
  next: <SiNextdotjs color='white' />,
  tailwind: < SiTailwindcss color='#38BDF8' />,
  mongo: <SiMongodb color='#02B853' />,
  prisma: <SiPrisma color='white' />,
  git: <FaGitAlt color='#f34f29' />,
  linux: <FcLinux />,
  wordpress: <FaWordpress color='#00749C' />,
  adobe: <SiAdobe color='#ED2224' />
}

type IconComponentProps = {
  name: string
}

const IconComponent = ({ name }: IconComponentProps) => {
  if (iconComponentList[name]) {
    return iconComponentList[name]
  }
  else return null
}

export default IconComponent