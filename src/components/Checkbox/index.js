import React from 'react';
import './index.css';


function Checkbox({children,checked,onChange}) {
    return(
            <label className='label'>
                    <input className='checkbox' type='checkbox' checked={checked} onChange={onChange} />
                {children}
            </label>
    );
};

export default Checkbox;
