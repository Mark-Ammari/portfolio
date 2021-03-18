import React from 'react';
import classes from './Btn.module.css';

interface btnProps {
    width?: string,
    height?: string,
    color?: string,
    backgroundColor?: string
    border?: string,
    margin?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Btn: React.FC<btnProps> = ({ margin, children, width, height, backgroundColor, color, border, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className={classes.Btn}
        style={{
            width:  width,
            height: height,
            color: color,
            backgroundColor: backgroundColor,
            border: border,
            margin: margin
        }}
        >
            {children}
        </button>
    )
}

export default Btn;