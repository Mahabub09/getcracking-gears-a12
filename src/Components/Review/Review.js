import React from 'react';

const Review = ({ review }) => {


    return (
        <div>
            <div>

                <div className=' container  shadow-lg p-3 mb-5  hover:bg-gray-300 rounded-md mx-auto  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                            <img src={review?.img} alt="" />
                        </div>
                    </div>

                    <div>
                        <h4 className='text-xl font-medium text-center my-3'><i>{review.name}</i></h4>
                        <small className='ps-2'>Location: <b>{review.location}</b></small>

                        <p className='px-2'>Rate: <b>{review.rating}</b></p>
                        <p className='p-2'><b>Say:</b>{review.review}</p>

                    </div>








                </div>


            </div>

        </div>
    );
};

export default Review;