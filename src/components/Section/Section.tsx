import React from 'react';
import classes from './Section.module.css';

interface SectionProps {
    id: string | undefined
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
    return (
        <section id={id} className={classes.Section}>
            {children}
        </section>
    );
};

export default Section;