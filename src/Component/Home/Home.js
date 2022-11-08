import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    return (
        <div className=' mx-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 '>
                {
                    services.map(service =><ServiceCard
                    key={service._id}
                    service = {service}>

                    </ServiceCard>)
                }
            </div>
            <div className=' text-center my-10'>
            <Link to='/allservices'><button className='btn'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default Home;