import React from 'react';
import UseTools from '../../Hooks/UseTools';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const AllTools = () => {
    const [tools, setTools] = UseTools()
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div className='container font-serif responsive'>
            <h2 className='text-indigo-900 text-center fs-2 underline underline-offset-4 '>PURCHASE WHAT YOU NEED</h2>
            {

                tools.map(tool => <div key={tool._id}>

                    <div className='d-flex align-items-center justify-between  my-3 rounded shadow px-3' >

                        <div className='my-1 py-1 d-flex align-items-center'>
                            <div><img className='w-20 m-2' src={tool.img} alt="" /></div>
                            <BsArrowRight></BsArrowRight>
                            <div className='ms-3'>
                                <h3 className=' fs-4'>{tool.name} </h3>
                                <i><small>Price Per Unit: <b>{tool.price}$</b></small></i><br />
                                <i><small>Available Quantity:{tool.available_quantity}</small></i><br />
                                <i><small>Min Order:{tool.min_order}</small></i>
                            </div>
                        </div>
                        < div className='align-tools-center gap-1 d-flex'>
                            <button className='btn btn-success ' onClick={() => navigateToPurchase(tool._id)}>Purchase</button>
                            {/* <button onClick={() => toolDelete(tool._id)}><MdDelete className='fs-3'></MdDelete></button> */}
                        </div>
                    </div>


                </div>)
            }


        </div>
    );
};

export default AllTools;