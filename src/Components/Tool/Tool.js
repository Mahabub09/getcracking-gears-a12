import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className='flex'>
            <div>{tool.name}</div>

        </div>
    );
};

export default Tool;