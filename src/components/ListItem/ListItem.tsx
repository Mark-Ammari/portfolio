import React from 'react';
import classes from './ListItem.module.css';

const ListItem: React.FC = ({children}) => {
    return (
        <div className={classes.ListItem}>
            <p>{children}</p>
        </div>
    )
};

export default ListItem;