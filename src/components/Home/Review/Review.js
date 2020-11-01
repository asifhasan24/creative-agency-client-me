import React, { useEffect, useState } from 'react';
import gif from '../../../images/loading.gif'
const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-dusk-58690.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='mt-5 pt-5'>
            <h3 className="text-center">Clients <span style={{ color: '#7db45d' }}>Feedback</span></h3>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {!review.length && <img src={gif} alt="" />
                    }
                    {
                        review.map(review => {
                            return [
                                <div className="border col-12 p-3 col-md-4" style={{ borderRadius: '15px' }}>
                                    <div className="d-flex">
                                        {review.image.img && <img height='40px' className='rounded img fluid' src={`data:image/png;base64,${review.image.img}`} alt="" />}
                                        <div className='ml-3'>
                                            <h5>{review.name}</h5>
                                            <h6>{review.designation}</h6>
                                        </div>
                                    </div>
                                    <p className='text-secondary'>
                                        {review.description}
                                    </p>
                                </div>
                            ]
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;