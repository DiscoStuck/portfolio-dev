import { useState } from 'react'

// components
import Skills from '../../components/About/Skills'
import Text from '../../components/About/Text'

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

//  data
const strengths = [
  {
    title: 'AI',
    content: "AI, my mentor, might not be as good as human expert, " +
      "but is always there for me. I know its strengths and weaknesses, " +
      "I know how to get the most of if. It has nothing to do with make " +
      "it generate code, but to learn and solve as efficiently as " +
      "possible. Anybody who doesn’t use it has great competitive " +
      "disadvantage over me.",
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
      'strong foundation in color, composition, technical knowledge, etc.'
  }
]

const skillsIcons = [
  <FaCss3Alt color='#264de4' />,
  <FaJs color='#F0DB4F' />,
  <FaReact color='#61dbfb' />,
  <FaNodeJs color='#3c873a' />,
  <SiNextdotjs color='white' />,
  < SiTailwindcss color='#38BDF8' />,
  <SiMongodb color='#02B853' />,
  <SiPrisma color='white' />,
  <FaGitAlt color='#f34f29' />,
  <FcLinux />,
  <FaWordpress color='#00749C' />,
  <SiAdobe color='#ED2224' />
]

const background = [
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

const moreAboutMe = [
  {
    content: 'My name is Juan (or Juanjo) and I was born in Spain. I always liked traveling, and somehow ' +
      'I ended up living in Danang (Vietnam) with my beautiful girlfriend. On my free time I like to ' +
      'work out, watch movies, play d&d and drink beer with my friends.'
  }
]

const certifications = [
  'FullStack Open Core (part 1-8)',
  'FullStack Open Typescript'
]

const aboutData = [
  {
    title: "skills",
    info: [
      {
        icons: [,
          <FaCss3Alt color='#264de4' />,
          <FaJs color='#F0DB4F' />,
          <FaReact color='#61dbfb' />,
          <FaNodeJs color='#3c873a' />,
          <SiNextdotjs color='white' />,
          <SiTailwindcss color='#38BDF8' />,
          <SiMongodb color='#02B853' />,
          <SiPrisma color='white' />,
          <FaGitAlt color='#f34f29' />,
          <FcLinux />,
          <FaWordpress color='#00749C' />,
          <SiAdobe color='#ED2224' />
        ],
      },
    ],
  },
  {
    title: "Background",
    info: [
    ],
  },
  {
    title: "Strengths",
    info: [
      {
        title: "AI",
        stage: "AI, my mentor, might not be as good as human expert, but is always there for me. I know its strengths and weaknesses, I know how to get the most of if. It has nothing to do with make it generate code, but to learn and solve as efficiently as possible. Anybody who doesn’t use it has great competitive disadvantage over me.",
      },
      {
        title: "Freelancing",
        stage: "",
      },
      {
        title: "Audiovisual",
        stage: "",
      },
    ],
  },
  {
    title: 'More about me',
    info: [
      {
        stage: 'My name is Juan (or Juanjo) and I was born in Spain. I always liked traveling, and somehow ' +
          'I ended up living in Danang (Vietnam) with my beautiful girlfriend. On my free time I like to ' +
          'work out, watch movies, play d&d and drink beer with my friends.'
      }
    ]
  }
];

// components
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import Accordion from '../../components/About/Accordion'
import OpacityTransition from '../../components/About/OpacityTransition'

// renderSwitch function

const renderSwitch = (index: Number) => {
  switch (index) {
    case 0:
      return <OpacityTransition>
        <Skills skills={skillsIcons} />
      </OpacityTransition>
    case 1:
      return <OpacityTransition>
        <Text text={background} />
      </OpacityTransition>
    case 2:
      return <OpacityTransition>
        <Accordion text={strengths} />
      </OpacityTransition>
    case 3:
      return <OpacityTransition>
        <Text text={moreAboutMe} />
      </OpacityTransition>
  }
}

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='xl:h-full w-full text-center
    xl:text-left padding-page pb-[100px] xl:pb-0 xl:mt-0 overflow-y-auto'>
      <Circles />
      <div className='container h-full flex flex-col justify-center mx-auto overflow-y-auto'>
        <div className='flex flex-col xl:flex-row gap-x-6 gap-y-4 xl:pr-28 justify-center items-center xl:items-start'>
          {/* text */}
          <div className='flex-1 flex flex-col gap-y-5 xl:gap-y-0'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>
              Self-taught<span className='text-accent'><br /> Developer</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-center xl:text-start'>
              Coding is an art that one never finishes learning. Staying up-to-date
              and continuously improving is essential to remain competitive.
              Build myself from scratch on my own has provided me with great
              adaptability and autonomy, and that makes me feel confident that I can
              do <span className='text-accent'>Anything</span>.
            </motion.p>
          </div>
          {/* vertical line*/}
          <div className='xl:h-[300px] xl:border-l-[1px] border-white border-solid mr-6 ml-4' />
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col md:gap-y-6 xl:gap-y-0 w-full md:max-w-[500px] xl:max-w-[48%]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex &&
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className='relative py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
          xl:items-start'>
              <div
                key={index}
                className='flex-1 flex flex-col md:flex-row max-w-max
                  items-center text-white/60'
              >
                <div>
                  {renderSwitch(index)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default About;
