import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const services = useLoaderData()
    const {title, details, img, _id, price, rating} = services
    return (
        <div>
            <div className="card w-3/5 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}!</h2>
                    <p>{details}</p>
                    <p>Price:  <span className='font-bold text-xl'>{price}$</span></p>
                    <p>Rating: <span className='font-bold text-xl'>{rating}</span></p>
                </div>
                <figure><img src={img} alt="Soes" /></figure>
            </div>
        </div>
    );
};

export default CardDetails;