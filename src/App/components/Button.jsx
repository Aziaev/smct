import React from 'react';
import './Button.css'

export default function Button(props) {
    const { children, onClick, name, disabled, type, color } = props;
    let className = "btn";
    if(color === 'reject'){
        className = className + ' btn__reject'
    } else if (color === 'accept'){
        className = className + ' btn__accept'
    }

    return (
        <button
            className={className}
            name={name}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}