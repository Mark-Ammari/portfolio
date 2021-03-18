import React from 'react';
import Section from '../../components/Section/Section';
import Skills from '../../components/Skills/Skills';
import Title from '../../components/Title/Title';

const Skillset: React.FC = () => {
    return (
        <Section id="skillset">
            <Title>Skillset</Title>
            <Skills />
        </Section>
    )
};

export default Skillset;