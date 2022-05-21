import React from 'react';


const Features = () => {
    return (
        <div className='container my-5'>
            <hr />
            <div className='flex justify-around items-center my-3 ' >
                <div className=' flex space-x-8 items-center'>
                    <img className='w-12' src={'https://htmldemo.net/lukas/lukas/assets/img/icons/icon-1.png'} alt="" />
                    <div>
                        <h3 className='text-2xl font-semibold font-mono '>LESS COST DELIVERY</h3>
                        <p>Provide Less Cost delivery
                            <br /> all  over the world</p>
                    </div>
                </div>
                <div className=' flex  items-center space-x-8'>
                    <img className='w-12' src={'https://htmldemo.net/lukas/lukas/assets/img/icons/icon-2.png'} alt="" />
                    <div> <h3 className='text-2xl font-semibold font-mono '>Quality Products</h3>
                        We ensure our product <br /> quality all times</div>
                </div>
                <div className=' flex  items-center space-x-8'>
                    <img className='w-12' src={'https://htmldemo.net/lukas/lukas/assets/img/icons/icon-3.png'} alt="" />
                    <div><h3 className='text-2xl font-semibold font-mono '>Online Support</h3>
                        <p>To satisfy our customer we <br /> try to give support online</p></div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Features;