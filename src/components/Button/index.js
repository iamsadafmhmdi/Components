import React from 'react';
import './index.css'


function Button ({disabled, value, handleClickButton}){
    return(
        <button className={disabled ? 'disabled' : 'button'} onClick={handleClickButton}>{value}</button>
    );
    
}
export default Button;