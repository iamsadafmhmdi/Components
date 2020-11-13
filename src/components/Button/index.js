import React from 'react';
import './index.css'


function Button ({
    label,
    danger=false,
    disabled=false,
    onClick,
    value,
}) {
    return(
        <button
            className={danger && disabled ? 'disabled danger' : danger ? 'danger' : disabled ? 'disabled' : undefined}
            onClick={disabled ? undefined : onClick}
            value={value}
            tabIndex={disabled ? -1 : undefined}>
            {label}
        </button>
    );
};

export default Button;
