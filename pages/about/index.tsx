import { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobe
} from 'react-icons/si'

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <SiAdobe />
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
        stage: "adfasg",
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
        stage: 'My name is Juan (or Juanjo) and I was born in Spain. I always liked traveling, and somehow I ended up living in Danang (Vietnam) with my beautiful girlfriend. On my free time I like to work out, watch movies, play d&d and drink beer with my friends.'
      }
    ]
  }
];

// components
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return (
    <div className='h-full bg-primary/30 py-32 text-center
    xl:text-left'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col xl:flex-row gap-x-6 pt-16'>
        {/* text */}
        <div className='flex-1 flex flex-col'>
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
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Coding is an art that one never finishes learning. Staying up-to-date
            and continuously improving is essential to remain competitive.
            Build myself from scratch on my own has provided me with great
            adaptability and autonomy, and that makes me feel confident that I can
            do <span className='text-accent'>Anything</span>.
          </motion.p>
        </div>
        {/* vertical line*/}
        <div className='h-[300px] border-l-[1px] border-white border-solid mr-8' />
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%]'>
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
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
          xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                  items-center text-white/60'
                >
                  {/* title */}
                  {('title' in item) && <div className='font-light mb-2 mb:mb-0'>{item.title}</div>}
                  {('title' in item) && <div className='hidden md:flex'>-</div>}
                  <div>{'stage' in item && item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {'icons' in item && item.icons.map((icon, itemIndex) => {
                      return <div className='text-2xl'>{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
