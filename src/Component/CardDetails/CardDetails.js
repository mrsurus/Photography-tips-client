import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const CardDetails = () => {
    const services = useLoaderData()
    const { title, details, img, _id, price, rating } = services
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target
        const sname = form.sname.value
        const email = user?.email || 'unregistered'
        const review = form.review.value

        const order = {
            service: _id,
            serviceName: title,
            price,
            sname: sname,
            email,
            review
        }
    }
    return (
        <div className='mx-auto w-3/5'>
            <div className="card bg-base-100 shadow-xl my-5 ">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}!</h2>
                    <p>{details}</p>
                    <p>Price:  <span className='font-bold text-xl'>{price}$</span></p>
                    <p>Rating: <span className='font-bold text-xl'>{rating}</span></p>
                </div>
                <figure><img src={img} alt="Soes" /></figure>
            </div>
            <section>
                <div className='my-5 flex'>
                    <img src={user?.photoURL} className='w-16 h-16 rounded mr-5' alt="" />
                    <div>
                        <p>user name</p>
                        <p>review</p>
                    </div>
                </div>
                {user?.email ? <> <form onSubmit={handlePlaceOrder}>
                    <h2 className='text-xl font-semibold'>Write review for: {title}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='sname' type="text" value={title} className="input input-bordered w-full " />
                        <input name='email' type="text" value={user?.email} placeholder="Your Email" className="input input-bordered w-full " readOnly />
                    </div>
                    <textarea name='review' className='textarea textarea-bordered h-24 w-full' placeholder='Write your review here ...'></textarea>
                    <input className='btn ' type="submit" name="" value='Submit Your review' />
                </form></> :

                    <p className='text-3xl text-center '>Please Log In to give review</p>
                }
            </section>
        </div>
    );
};

export default CardDetails;