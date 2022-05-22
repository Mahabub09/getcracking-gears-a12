import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <div className=' container grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
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