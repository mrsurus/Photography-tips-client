import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, details, img,_id } = service;
    return (
        <div>
            <div className="card card-compact w-25 bg-base-100 shadow-xl">
            <PhotoProvider><PhotoView src={img}><img src={img} alt="Photo" /></PhotoView></PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title ">{title}!</h2>
                    <p>{details?.slice(0,100) + '...'}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allservices/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;