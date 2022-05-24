import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-[100%] h-[550px] bg-emerald-700 py-32'>
            <h1 className='text-6xl text-center font-serif text-white my-2'>ERROR 404 </h1>
            <h1 className='text-6xl text-center font-serif text-amber-600 my-2'>LOST ? </h1>
            <h1 className='text-6xl text-center font-serif text-amber-600'>THERE IS NO PLACE LIKE <Link className='underline underline-offset-2 hover:text-neutral' to="/">HOME</Link></h1>

        </div >
    );
};

export default NotFound;