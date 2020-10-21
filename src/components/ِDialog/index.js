import React from 'react';
import './index.css'


function Dialog({header, description, action}) {
    return(
        <div className = 'container flex-display-center'>
            <div className = 'dialog'>
                <h2 id = 'header'>
                    {header}
                </h2>
                <div id = 'description'>
                    {description}
                </div>
                <div>
                    {action}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
