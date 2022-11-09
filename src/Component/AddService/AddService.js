import { data } from 'autoprefixer';
import React, { useState } from 'react';

const AddService = () => {
    const [info , setInfo]= useState({})
    console.log(info);

    const handleAddService =(e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        setInfo({ title,details, price,rating,img})

        fetch(`http://localhost:5000/allservices`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
    }
    return (
        <div className='w-2/3 mx-auto'>
            <p className='text-center text-3xl'>Add A Service To The List</p>
            <form onSubmit={handleAddService}>
                <p className='text-xl'>Title:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Title' name="title"  id="" />
                <p className='text-xl'>Details:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Details' name="details" id="" />
                <p className='text-xl'>Price:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Price' name="price" id="" />
                <p className='text-xl'>Rating:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Rating' name="rating" id="" />
                <p className='text-xl'>Image URL</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Image URL' name="img" id="" />
                <input type="submit" name="" className='btn btn-primary my-10' value='Add To Services' id="" />
            </form>
        </div>
    );
};

export default AddService;