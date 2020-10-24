import React from 'react';
import './index.css'


function Button ({disabled=false,children,onClick,value}) {
    return(
        <button className={disabled ? 'disabled' : undefined} onClick={onClick} value={value}>{children}</button>
    );
};

export default Button;
