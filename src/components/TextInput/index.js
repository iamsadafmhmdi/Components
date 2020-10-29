import React from 'react';
import './index.css';


function TextInput({
    value,
    onChange,
    placeholder,
    ...props
}) {
    return(
            <input type='text' value={value} onChange={onChange} placeholder={placeholder} {...props}/>
    );
};

export default TextInput;
