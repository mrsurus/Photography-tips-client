import React from 'react';

const ReviewSection = ({ reviews }) => {
    const { name, photo, review, serviceName } = reviews
    return (
        <div className=' flex border py-5'>
            <img src={photo} className='w-16 h-16 rounded mr-5' alt="" />
            <div>
                <p className='font-bold'>Name: {name}</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewSection;
