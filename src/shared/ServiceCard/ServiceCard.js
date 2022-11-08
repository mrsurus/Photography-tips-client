import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, details, img } = service;
    return (
        <div>
            <div className="card card-compact w-25 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}!</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;