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
            <h1 className='text-4xl text-center text-neutral mt-3'>Confirm Your Order</h1>

            <div className="container w-75 my-10 py-5 flex justify-center items-center space-x-10 rounded-lg shadow-lg">
                <div className='w-25'> <img className="img-fluid transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125" src={tool.img} alt="" /></div>
                <div className='bg-gray-200 p-10'>
                    <h1 className='text-2xl'>{tool.name}</h1>
                    <p>Price: <b><i>{tool.price}</i></b></p>
                    <p>Minimum Order: <b><i>{tool.min_order} Items</i></b></p>
                    <p>Available Items: <b>{tool.available_quantity}</b></p>
                    <p> <b>About:  </b><small><i>{tool.short_description}</i></small></p>
                    <button className="btn mt-3 ml-5 text-white">Confirm Order</button>
                </div>
            </div>

        </div>
    );
};

export default Purchase;