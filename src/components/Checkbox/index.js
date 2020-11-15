import React from 'react';
import './index.css';


function Checkbox({
    label,
    checked,
    onChange
}) {
    return(
            <label>
                    <input type='checkbox' checked={checked} onChange={onChange} name={label} />
                {label}
            </label>
    );
};

export default Checkbox;
