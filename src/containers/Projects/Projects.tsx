import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../../components/ListItem/ListItem';
import Project from '../../components/Project/Project';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import { projectData } from '../../store/reducers/projectReducer';

const Projects: React.FC = () => {
    const data = useSelector(projectData);

    return (
        <Section id="projects">
            <Title>Projects</Title>
            {data.map((project: any, projectIndex: number) => {
                return <Project
                    key={projectIndex}
                    desktop={project.assets.desktop}
                    laptop={project.assets.laptop}
                    mobile={project.assets.mobile}
                    title={project.title}
                    description={project.description}
                    techStackDescription={project["tech_stack_description"]}
                    url={project.url}
                    sourceCode={project["source_code"]}
                    techStack={project["tech_stack"].map((techStack: any, techStackIndex: number) => {
                        return <ListItem key={techStackIndex}>{techStack}</ListItem>
                    })}
                />
            })}
        </Section>
    )
};

export default Projects;