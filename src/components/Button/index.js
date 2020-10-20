import React from 'react';
import './index.css'


function Button ({disabled=false, value, handleClick}) {
    return(
        <button className={disabled ? 'disabled' : undefined} onClick={handleClick}>{value}</button>
    );
};

export default Button;
