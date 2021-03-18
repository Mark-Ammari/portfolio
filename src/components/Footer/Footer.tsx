import React from 'react';
import Socials from '../Socials/Socials';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={classes.Footer}>
            <p>&copy; <em>2021 Mark Ammari.</em></p>
            <Socials color="#000" />
        </footer>
    )
};

export default Footer;