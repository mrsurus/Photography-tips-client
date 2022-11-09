import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn,googlesignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        logIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            Swal.fire(
                'Good job!',
                'Log In Succesfull!',
                'success'
              )
            navigate(from, { replace: true })
        })
        .catch(err => {
            console.log(err);
        })
    }
    const handleGoogleSingIn = ()=>{
        googlesignIn()
        .then(res => {
            console.log(res.user)
            Swal.fire(
                'Good job!',
                'Log In Succesfull!',
                'success'
              )
            navigate(from, { replace: true })
            
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Log in our website to get better exprience in photography.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="LogIn" />
                        </div>
                        <p className='text-center'>New to Our Website? <Link className='text-orange-500 font-bold' to='/register'>Sign Up</Link></p>
                        
                    </form>
                    <button onClick={handleGoogleSingIn} className='btn btn-primary text-center my-10 mx-8'>LogIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;