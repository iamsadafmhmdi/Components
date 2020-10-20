import React from 'react';
import './index.css'


function Button ({disabled=false, children, onClick}) {
    return(
        <button className={disabled ? 'disabled' : undefined} onClick={onClick}>{children}</button>
    );
};

export default Button;