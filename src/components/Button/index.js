import React from 'react';
import './index.css'


function Button ({disabled=false, value, onClick}) {
    return(
        <button className={disabled ? 'disabled' : undefined} onClick={onClick}>{value}</button>
    );
};

export default Button;