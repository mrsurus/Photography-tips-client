import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewSection from './MyReviewSection';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReview, setMyReview] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user?.email])

    const handleDelete =(id)=> {
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remainig = myReview?.filter(mr => mr._id !== id)
                setMyReview(remainig)
            }
            Swal.fire(
                'Good job!',
                'Delete Succesfull!',
                'success'
              )
        }) 
    }


    return (
        <div>
            {myReview.length?  <p className='text-center text-3xl mt-5 font-bold'>You added {myReview.length} reviews</p>: <p className='text-center text-3xl mt-5 font-bold'>No review were added</p> }
            <div>
                {
                    myReview?.map(mr => <MyReviewSection
                    key={mr._id}
                    mr={mr}
                    handleDelete={handleDelete}>

                    </MyReviewSection>)
                }
            </div>
        </div>
    );
};

export default MyReview;