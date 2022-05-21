import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>our tools</h1>
            {
                tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                >
                </Tool>)
            }
        </div>
    );
};

export default Tools;