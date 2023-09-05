type SkillsProps = {
    skills: JSX.Element[]
}

const Skills = ({ skills }: SkillsProps) => {
    return (<div className="flex gap-x-6 2xl:gap-x-9 gap-y-8 2xl:gap-y-12 flex-wrap justify-center xl:justify-start">
        {skills.map((icon, index) => {
            return <div className='md:text-6xl text-4xl 2xl:text-[5.1rem] 2xl:leading-[5.1rem]' key={`iconIndex-${index}`}>{icon}</div>
        })}
    </div>
    );
}

export default Skills;