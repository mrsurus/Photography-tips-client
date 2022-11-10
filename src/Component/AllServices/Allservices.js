import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Allservices = () => {
    const {loading,setLoading} = useContext(AuthContext)
    const services = useLoaderData()
     
    if(services.length === 0){
        setLoading(true)
    }
    if(loading) {
        return <div class="flex justify-center items-center ">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
   
    
    return (
        <div className='mx-16'>
            <p className='text-center font-bold text-3xl my-10'>All Of My Services</p>
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