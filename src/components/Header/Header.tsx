import React from 'react';
import Nav from '../Nav/Nav';
import classes from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={classes.Header}>
            <Nav />
        </header>
    )
};

export default Header;