import React from 'react';
import { useSelector } from 'react-redux';
import Experience from '../../components/Experience/Experience';
import ListItem from '../../components/ListItem/ListItem';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import { experienceData } from '../../store/reducers/experienceReducer';

const Timeline: React.FC = () => {
    const data = useSelector(experienceData)
    
    return (
        <Section id="experience">
            <Title>Experience</Title>
            {data.map((job: any, jobIndex: number) => {
                return (
                    <Experience 
                        startDate={job["start_date"]}
                        endDate={job["end_date"]}
                        companyName={job["company_name"]}
                        position={job["position"]}
                        location={job["location"]}
                        description={
                            job["description"].map((desc: string, descIndex: number) => {
                                return <li>{desc}</li>
                            })
                        }
                        techStack={
                            job["tech_stack"].map((techStack: string, techStackIndex: number) => {
                                return <ListItem>{techStack}</ListItem>
                            })
                        }
                    />
                )
            })}
        </Section>
    )
};

export default Timeline;