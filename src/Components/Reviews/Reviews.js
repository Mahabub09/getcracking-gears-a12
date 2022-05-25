import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fierce-scrubland-22388.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-neutral text-center underline underline-offset-8 text-3xl my-5'>Our Clients Say </h1>

            <div className=' container grid lg:grid-cols-3 md:grid-cols-1 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;