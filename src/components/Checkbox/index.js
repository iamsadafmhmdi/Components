import React from 'react';
import './index.css';


function Checkbox({
    label,
    checked,
    onChange
}) {
    return(
            <label className='label'>
                    <input className='checkbox' type='checkbox' checked={checked} onChange={onChange} />
                {label}
            </label>
    );
};

export default Checkbox;
