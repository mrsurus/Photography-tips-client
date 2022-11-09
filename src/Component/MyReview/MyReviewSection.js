import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewSection = ({ mr,handleDelete, }) => {
    const { name, email, photo, review,serviceName,_id } = mr
    return (
        <div className='flex w-2/3 mx-auto my-10 border rounded-lg py-3 bg-blue-300'>
            <div className='flex w-2/3 ml-5'>
                <div>
                    <p className='text-xl'>{name}</p>
                    <p className=' mb-5'><span className='text-xl font-bold'>Service Name: </span>{serviceName}</p>
                    <p> <span className='font-extrabold text-2xl'>Review: </span> <span className='text-xl'> {review}</span></p>
                </div>
            </div> 
            <div className='w-1/3 text-right mr-2'>
                <button onClick={()=>handleDelete(_id)} className='btn btn-warning mb-5'>Delete</button><br/>
                <Link to={`/update/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
            </div>
        </div>
    );
};

export default MyReviewSection;