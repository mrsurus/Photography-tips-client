import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewSection from './ReviewSection';

const CardDetails = () => {
    const services = useLoaderData()
    const { title, details, img, _id, price, rating } = services
    const { user } = useContext(AuthContext)
    const [reviewes, setReviewes] = useState()
    const [up , setUp] = useState(true)
    

    useEffect(()=>{
        fetch(`http://localhost:5000/review?service=${_id}`)
        .then(res => res.json())
        .then(data => setReviewes(data))
    },[up])

    const handlePlaceOrder = (event) => {
        setUp(!up)
        event.preventDefault();
        const form = event.target
        const email = user?.email || 'unregistered'
        const review = form.review.value
        const name = user?.displayName || 'no name'
        const photo = user?.photoURL || 'no Photo'

        const reviewInfo = {
            service: _id,
            serviceName: title,
            name,
            email,
            review,
            photo
        }
        
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset()
        })

        
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
            <section className='mt-24'>
                <p className=' font-extrabold text-5xl'>Review for this service</p>
                <div className='my-5 py-5 '>
                    {
                        reviewes?.map(reviews => <ReviewSection
                        key={reviews._id}
                        reviews ={reviews}>

                        </ReviewSection> )
                    }
                </div>
                {user?.email ? <> <form onSubmit={handlePlaceOrder}>
                    <h2 className='text-2 xl font-semibold text-center mt-10'>Write review for {title}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-5'>
                        <input name='email' type="text" value={user?.displayName? user.displayName:''} placeholder="Your Email" className="input input-bordered w-full " readOnly />
                    </div>
                    <textarea name='review' className='textarea textarea-bordered my-5 h-48 text-xl w-full' placeholder='Write your review here ...'></textarea>
                    <input className='btn btn-primary ' type="submit" name="" value='Submit Your review' />
                </form></> :

                    <p className='text-3xl text-center '>Want to give review? please <Link to='/login' className='btn'>Log In</Link> </p>
                }
            </section>
        </div>
    );
};

export default CardDetails;