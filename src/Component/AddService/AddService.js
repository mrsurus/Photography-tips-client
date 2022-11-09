import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {

    const handleAddService =(e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const info ={
             title:title,
             details:details,
              price:price,
              rating:rating,
              img:img
            }

        fetch(`https://assignment-eleven-server-five.vercel.app/allservices`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Good job!',
                'Service added Succesfull!',
                'success'
              )
              form.reset()
        })
        
    }
    return (
        <div className='w-2/3 mx-auto'>
            <p className='text-center text-3xl'>Add A Service To The List</p>
            <form onSubmit={handleAddService}>
                <p className='text-xl'>Title:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Title' name="title"  id="" required/>
                <p className='text-xl'>Details:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Details' name="details" id="" required/>
                <p className='text-xl'>Price:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Price' name="price" id="" required/>
                <p className='text-xl'>Rating:</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Rating' name="rating" id="" required/>
                <p className='text-xl'>Image URL</p>
                <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Image URL' name="img" id="" required/>
                <input type="submit" name="" className='btn btn-primary my-10' value='Add To Services' id="" />
            </form>
        </div>
    );
};

export default AddService;