import Aos from 'aos';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { skillsData } from '../../store/reducers/skillsReducer';
import Skill from '../Skill/Skill';
import classes from './Skills.module.css';
import "aos/dist/aos.css";

const Skills: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })
    const skill = useSelector(skillsData)
    return (
        <div className={classes.Skills}>
            {skill.map((skill: any, skillIndex: number) => {
                return <Skill 
                    key={skillIndex}
                    mainTitle={skill["title"].split(" ")[0]}
                    secondaryTitle={skill["title"].split(" ")[1]}
                    list={
                        skill["list"].map((list: any, listIndex: number) => {
                            return <li key={listIndex} data-delay="500" data-aos="fade-left">{list}</li>
                        })
                    }
                />
            })}
        </div>
    )
};

export default Skills