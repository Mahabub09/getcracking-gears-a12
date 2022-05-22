import React from 'react';

const Review = ({ review }) => {


    return (
        <div>
            <div>

                <div className=' container shadow-lg p-3 mb-5 bg-body  rounded-md mx-auto flex transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'>
                    <img className='w-25 rounded-full' src={review.img} alt="" />

                    <div>
                        <h4 className='text-xl font-medium  my-3'><i>{review.name}</i></h4>

                        <p className='px-2'>Rate: <b>{review.rating}</b></p>
                        <p className='p-2'><b>Say:</b>{review.review}</p>

                    </div>








                </div>


            </div>

        </div>
    );
};

export default Review;