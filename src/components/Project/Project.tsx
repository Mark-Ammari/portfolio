import Aos from 'aos';
import React, { useEffect } from 'react';
import Btn from '../Btn/Btn';
import classes from './Project.module.css';
import "aos/dist/aos.css";

interface ProjectProps {
    desktop: string,
    laptop: string,
    mobile: string,
    title: string,
    description: string,
    techStackDescription: string,
    url: string,
    sourceCode: string,
    techStack: string
}

const Project: React.FC<ProjectProps> = ({desktop, techStack, laptop, mobile, description, techStackDescription, title, sourceCode, url}) => {
    useEffect(() => {
        Aos.init({duration: 1000, once: true})
    })
    return (
        <div className={classes.Project}>
            <div data-aos="fade-right" className={classes.Devices}>
                <img className={classes.Mobile} src={mobile} alt="Mobile-App" />
                <img className={classes.Desktop} src={desktop} alt="Desktop-App"/>
                <img className={classes.Laptop} src={laptop} alt="Laptop-App"/>
            </div>
            <div data-aos="fade-left" className={classes.InfoContainer}>
                <div className={classes.Details}>
                    <h1>{title}</h1>
                    <p className={classes.Descriptors}>{description}</p>
                    <h1>Technology</h1>
                    <p className={classes.Descriptors}>{techStackDescription}</p>
                </div>
                <div className={classes.Links}>
                    <Btn margin="0 10px 10px 0" onClick={() => window.open(url, '_blank')}>Website</Btn>
                    <Btn margin="0 10px 10px 0" backgroundColor="white" color="#2ec07a" border="1px solid #2ec07a" onClick={() => window.open(sourceCode, '_blank')}>Source Code</Btn>
                </div>
                <div className={classes.TechStack}>
                    {techStack}
                </div>
            </div>
        </div>
    )
};

export default Project;