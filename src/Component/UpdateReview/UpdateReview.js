import { fromJSON } from 'postcss';
import React, { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storedReview = useLoaderData()
    const [editedReview, setEditedReview] = useState(storedReview)

    const handleSubmit= (e)=> {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const data = {
            review:review
        }
        
        fetch(`http://localhost:5000/review/${storedReview._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                <Navigate to='/myreview'></Navigate>
            }
            
        })

    }
    return (
        <div>
            <p className='text-center text-3xl'>Edit your Review</p>
            <div className='w-2/3 mx-auto py-5'>
                <form onSubmit={handleSubmit}>
                    Service Name:
                    <input type="text" className="input input-bordered w-full mb-10 " name="serviceName" value={ editedReview.serviceName} id="" readOnly /><br/>
                    Review:
                    <input name='review' className='textarea textarea-bordered p-0 h-32 text-xl w-full' defaultValue={editedReview.review}></input>
                    <input className='btn btn-primary ' type="submit" name="" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;