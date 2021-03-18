import Aos from 'aos';
import React, { useEffect } from 'react';
import classes from './Skill.module.css';
import "aos/dist/aos.css";

interface SkillProps {
    mainTitle: string,
    secondaryTitle: string,
    list: string
}

const Skill: React.FC<SkillProps> = ({ mainTitle, secondaryTitle, list }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })
    return (
        <div className={classes.Skill}>
            <h3 data-aos="zoom-in" ><span>{mainTitle}</span> {secondaryTitle}</h3>
            <ul data-aos="fade-in" className={classes.List}>
                {list}
            </ul>
        </div>
    )
};

export default Skill