import React, { useContext }  from 'react';
import { Link, Navigate, useLocation, useNavigate,} from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../Api/Auth';
import { AuthContext,  } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser,updateNamePhoto, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useTitle('Register')
    
    if (loading) {
        return <div className="flex justify-center items-center my-96">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const name = form.name.value;
        const photo = form.photo.value;
        
        
      

        createUser(email, password)
            .then(res => {
                const user = res.user
                setAuthToken(user)
                Swal.fire(
                    'Good job!',
                    'Registation Succesfull!',
                    'success'
                  )
                  navigate(from,{replace: true})
                updateNamePhoto(name, photo)
                .then( res => console.log('display uppdates'))
                .catch( err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                        <p className="py-6">Register our website to review and get the best tips about photography.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Log In</Link></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;