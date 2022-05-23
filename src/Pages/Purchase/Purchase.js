import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));

    }, [])
    return (
        <div>
            <h1 className='text-6xl'> Purchase:{tool.name}</h1>

        </div>
    );
};

export default Purchase;