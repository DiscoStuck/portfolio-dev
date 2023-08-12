type SkillsProps = {
    skills: JSX.Element[]
}

const Skills = ({ skills }: SkillsProps) => {
    return (<div className="flex gap-x-6 gap-y-8 flex-wrap justify-center xl:justify-start">
        {skills.map((icon, index) => {
            return <div className='md:text-6xl text-4xl' key={`iconIndex-${index}`}>{icon}</div>
        })}
    </div>
    );
}

export default Skills;