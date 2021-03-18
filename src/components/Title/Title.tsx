import React from 'react';
import classes from './Title.module.css';

const Title: React.FC = ({ children }) => {
    return (
        <div className={classes.Title}>
            <h1>{children}</h1>
        </div>
    )
};

export default Title;