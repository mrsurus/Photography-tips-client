import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewSection from './ReviewSection';

const CardDetails = () => {
    const services = useLoaderData()
    const { title, details, img, _id, price, rating } = services
    const { user, } = useContext(AuthContext)
    const [reviewes, setReviewes] = useState([])
    const [up , setUp] = useState(1)
    useTitle('Card-Details')

    useEffect(()=>{
        fetch(`https://assignment-eleven-server-five.vercel.app/reviews?service=${_id}`)
        .then(res => res.json())
        .then(data => setReviewes(data))
    },[up])

    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target
        const email = user?.email || 'unregistered'
        const review = form.review.value
        const name = user?.displayName || 'no name'
        const photo = user?.photoURL || 'no Photo'
        const date = new Date()
        

        const reviewInfo = {
            service: _id,
            serviceName: title,
            name,
            email,
            review,
            photo,
            date
        }
        
        fetch('https://assignment-eleven-server-five.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Good job!',
                'Log In Succesfull!',
                'success'
            )
            
           setUp(!up)
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
                    <p className='flex '>Rating: <span className='font-bold text-xl  ml-3 flex'>{rating}<FaRegStar className='ml-2 mt-1 '></FaRegStar></span></p>
                </div>
               <PhotoProvider><PhotoView src={img}><img src={img} alt="Soes" /></PhotoView></PhotoProvider> 
            </div>
            <section className='mt-24'>
                {
                    reviewes?.length? <p className=' font-extrabold text-5xl'>Review for this service</p> :
                    <p className=' font-extrabold text-5xl'>There is no review for this service</p>
                }
                <div className='my-5 py-5 '>
                    {
                        reviewes?.map(reviews => <ReviewSection
                        key={reviews._id}
                        reviews ={reviews}>

                        </ReviewSection> )
                    }
                </div>
                {user?.email ? <> <form onSubmit={handlePlaceReview}>
                    <h2 className='text-2 xl font-semibold text-center mt-10'>Write review for {title}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-5'>
                        <input name='email' type="text" value={user?.displayName? user.displayName:''} placeholder="Your Email" className="input input-bordered w-full " readOnly />
                    </div>
                    <textarea name='review' className='textarea textarea-bordered my-5 h-48 text-xl w-full' placeholder='Write your review here ...'></textarea>
                    <input className='btn btn-primary mb-10 ' type="submit" name="" value='Submit Your review' />
                </form></> :

                    <p className='text-3xl text-center '>Want to give review? please <Link to='/login' className='btn'>Log In</Link> </p>
                }
            </section>
        </div>
    );
};

export default CardDetails;