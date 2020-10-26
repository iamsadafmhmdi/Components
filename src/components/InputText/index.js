import React from 'react';
import './index.css';


function TextInput({value,onChange,placeholder,smallInputBox=false}) {
    return(
            <input className={smallInputBox? 'smallTextInput': undefined} type='text' value={value} onChange={onChange} placeholder={placeholder}/>
    );
};

export default TextInput;
