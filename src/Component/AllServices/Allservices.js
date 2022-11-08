import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';

const Allservices = () => {
    const services = useLoaderData()
    return (
        <div className='mx-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 '>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service ={service}>

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Allservices;