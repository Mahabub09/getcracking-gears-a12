import React from 'react';


const Tool = ({ tool }) => {


    return (
        <div>
            <div className=' h-full container shadow-lg p-3 mb-5 bg-body rounded mx-auto '>
                <img className='w-1/2 mx-auto transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125 ' src={tool.img} alt="" />
                <h4 className='text-xl font-medium text-center my-3'><i>{tool.name}</i></h4>
                <div className='  justify-content-between align-items-center px-3 my-2'>

                    <h6>Minimum Order:<b>{tool.min_order}</b></h6>


                    <h5> Available: <b>{tool.available_quantity}</b><small><i>ITEMS</i></small></h5>
                    <p> Per Unit:<b> {tool.price}$</b></p>
                    <p className='py-3'>{tool.short_description}</p>
                    <div >
                        <button class="btn btn-primary text-white ml-20 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">Purchase</button>
                    </div>


                </div>



            </div>


        </div>
    );
};

export default Tool;