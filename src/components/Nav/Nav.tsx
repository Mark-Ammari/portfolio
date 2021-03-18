import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-scroll';
import Drawer from '../Drawer/Drawer';
import { useMediaQuery } from '@material-ui/core';

const Nav: React.FC = () => {
    const width = useMediaQuery('(max-width:850px)')
    return (
        <nav className={classes.Nav}>
            <h1 className={classes.Logo}>Mark <span>Ammari</span></h1>
            {!width ?
                <ul>
                    <li><Link className={classes.Link} activeClass={classes.ActiveLink} spy offset={-80} smooth to="summary">Summary</Link></li>
                    <li><Link className={classes.Link} activeClass={classes.ActiveLink} spy offset={-60} smooth to="skillset">Skillset</Link></li>
                    <li><Link className={classes.Link} activeClass={classes.ActiveLink} spy offset={-60} smooth to="experience">Experience</Link></li>
                    <li><Link className={classes.Link} activeClass={classes.ActiveLink} spy offset={-60} smooth to="projects">Projects</Link></li>
                </ul>
                :
                <Drawer />
            }
        </nav>
    );
};

export default Nav;