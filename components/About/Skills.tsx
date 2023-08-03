type SkillsProps = {
    skills: JSX.Element[]
}

const Skills = ({ skills }: SkillsProps) => {
    return (<div className="flex gap-x-6 gap-y-8 flex-wrap ">
        {skills.map((icon) => {
            return <div className='text-6xl'>{icon}</div>
        })}
    </div>
    );
}

export default Skills;